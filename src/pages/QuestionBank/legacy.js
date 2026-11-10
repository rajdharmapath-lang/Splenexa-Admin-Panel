// Runs once after the JSX markup mounts.
export default function init(document, window) {
  const productStorageKey = 'fmge-question-bank-products';
  const subjectStorageKey = 'fmge-question-bank-subjects';
  const questionStorageKey = 'fmge-question-bank-questions';
  let products = [];
  let subjects = [];
  let questions = [];
  try {
    products = JSON.parse(window.sessionStorage.getItem(productStorageKey) || '[]');
    subjects = JSON.parse(window.sessionStorage.getItem(subjectStorageKey) || '[]');
    questions = JSON.parse(window.sessionStorage.getItem(questionStorageKey) || '[]');
  } catch (error) {
    products = [];
    subjects = [];
    questions = [];
  }
  function createId() {
    return window.crypto && typeof window.crypto.randomUUID === 'function'
      ? window.crypto.randomUUID()
      : 'product-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2);
  }
  if (subjects.some(function (subject) { return !subject.productId; })) {
    let legacyProduct = products.find(function (product) { return product.name === 'FMGE Q-Bank'; });
    if (!legacyProduct) {
      legacyProduct = { id: createId(), name: 'FMGE Q-Bank', description: 'Migrated existing question bank content.', accessType: 'Paid', isActive: true, supportsTopics: true };
      products.push(legacyProduct);
    }
    subjects.forEach(function (subject) { if (!subject.productId) subject.productId = legacyProduct.id; });
  }
  subjects.forEach(function (subject) {
    if (!subject.id) subject.id = createId();
    if (!Array.isArray(subject.topics)) subject.topics = [];
    subject.topics.sort(function (left, right) { return left.localeCompare(right); });
  });
  products.forEach(function (product) {
    if (typeof product.supportsTopics !== 'boolean') {
      product.supportsTopics = subjects.some(function (subject) { return subject.productId === product.id && subject.topics.length > 0; }) || product.name === 'FMGE Q-Bank';
    }
  });
  questions.forEach(function (question) {
    if (!question.productId) {
      const owner = question.product
        ? products.find(function (product) { return product.name === question.product; })
        : null;
      const subject = subjects.find(function (item) { return item.name === question.subject; });
      if (owner) question.productId = owner.id;
      else if (subject) question.productId = subject.productId;
    }
  });
  window.sessionStorage.setItem(productStorageKey, JSON.stringify(products));
  window.sessionStorage.setItem(subjectStorageKey, JSON.stringify(subjects));
  window.sessionStorage.setItem(questionStorageKey, JSON.stringify(questions));
  function syncTestQuestionCounts() {
    const tests = JSON.parse(window.sessionStorage.getItem('fmge-question-bank-tests') || '[]');
    tests.forEach(function (test) {
      const subject = subjects.find(function (item) { return item.id === test.subjectId; });
      if (!subject) return;
      const count = questions.filter(function (question) {
        return question.productId === test.productId &&
          question.subject === subject.name &&
          (test.topic ? question.topic === test.topic : !question.topic);
      }).length;
      test.totalQuestions = count;
      test.totalMarks = count * (Number(test.marksPerQuestion) || 0);
    });
    window.sessionStorage.setItem('fmge-question-bank-tests', JSON.stringify(tests));
  }
  syncTestQuestionCounts();
  let currentProductId = null;
  let editingProductId = null;
  let editingItem = null;
  const productBrowser = document.getElementById('product-browser');
  const productList = document.getElementById('product-list');
  const subjectView = document.getElementById('question-list');
  const subjectList = document.getElementById('subject-list');
  const topicCreateQuestion = document.getElementById('create-question-from-topic');
  const backQuestionList = document.getElementById('back-question-list');
  const createTestFromProduct = document.getElementById('create-test-from-product');
  const subjectDialog = document.getElementById('create-subject-dialog');
  const productDialog = document.getElementById('product-dialog');

  function activeProduct() {
    return products.find(function (product) { return product.id === currentProductId; });
  }

  function subjectSupportsTopics(subject) {
    return typeof subject.supportsTopics === 'boolean' ? subject.supportsTopics : Boolean(activeProduct()?.supportsTopics);
  }

  function renderProducts() {
    if (!products.length) {
      productList.innerHTML = '<div class="product-empty"><i class="bi bi-box-seam"></i><strong>No products yet</strong>Create a product to start organizing subjects and questions.</div>';
      return;
    }
    productList.innerHTML = products.map(function (product) {
      const questionCount = questions.filter(function (question) { return question.productId === product.id; }).length;
      return '<article class="product-card" data-product-id="' + escapeHtml(product.id) + '" tabindex="0" role="group" aria-label="' + escapeHtml(product.name) + ' product">' +
        '<div class="product-card-head"><div class="product-card-info"><h3>' + escapeHtml(product.name) + '</h3><p>' + escapeHtml(product.description || 'No description provided.') + '</p></div>' +
        '<div class="product-card-actions">' +
        '<button type="button" class="product-actions-toggle" aria-label="More actions for ' + escapeHtml(product.name) + '" aria-haspopup="menu" aria-expanded="false"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="5" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="12" cy="19" r="2"></circle></svg></button>' +
        '<div class="product-action-menu" role="menu" hidden><button type="button" class="delete-product" data-product-id="' + escapeHtml(product.id) + '" role="menuitem"><i class="bi bi-trash3-fill"></i>Delete</button></div>' +
        '</div></div><hr class="product-card-divider" /><div class="product-card-footer">' +
        '<span class="product-badge ' + (product.accessType === 'Free' ? 'free' : '') + '">' + escapeHtml(product.accessType || 'Paid') + '</span>' +
        '<span class="product-badge question-count">Questions: ' + questionCount.toLocaleString('en-US') + '</span>' +
        '<span class="product-badge">' + (product.supportsTopics ? 'Subjects + Topics' : 'Subject only') + '</span>' +
        '<span class="product-badge ' + (product.isActive ? 'active' : 'inactive') + '">' + (product.isActive ? 'Active' : 'Inactive') + '</span>' +
        '</div></article>';
    }).join('');
  }

  function openProduct(productId) {
    const product = products.find(function (item) { return item.id === productId; });
    if (!product) return;
    currentProductId = product.id;
    subjectView.dataset.product = product.name;
    subjectView.dataset.productId = product.id;
    productBrowser.classList.add('hidden');
    subjectView.classList.add('on');
    document.getElementById('active-product-title').textContent = product.name;
    openSubjects();
  }

  createTestFromProduct.addEventListener('click', function () {
    const product = activeProduct();
    if (!product) return;
    window.location.hash = 'fmge-create-test?product=' + encodeURIComponent(product.name) + '&productId=' + encodeURIComponent(product.id);
  });

  function showProducts() {
    currentProductId = null;
    subjectView.classList.remove('on');
    productBrowser.classList.remove('hidden');
    renderProducts();
  }

  function openProductDialog(product) {
    editingProductId = product ? product.id : null;
    document.getElementById('product-dialog-title').innerHTML = '<i class="bi bi-' + (product ? 'pencil-fill' : 'box-seam-fill') + '"></i> ' + (product ? 'Edit Product' : 'Create Product');
    document.getElementById('product-name').value = product ? product.name : '';
    document.getElementById('product-description').value = product ? product.description || '' : '';
    document.querySelectorAll('input[name="product-access"]').forEach(function (input) {
      input.checked = input.value === (product ? product.accessType : 'Paid');
    });
    document.getElementById('product-active').checked = product ? Boolean(product.isActive) : true;
    document.getElementById('product-topics-enabled').checked = product ? Boolean(product.supportsTopics) : true;
    document.getElementById('save-product').textContent = product ? 'Save Changes' : 'Create Product';
    productDialog.classList.add('on');
    document.getElementById('product-name').focus();
  }

  function closeProductDialog() {
    productDialog.classList.remove('on');
    editingProductId = null;
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character];
    });
  }

  function openNameDialog(type, index) {
    const isSubject = type === 'subject';
    const item = isSubject ? subjects[index] : subjects[Number(subjectView.dataset.subjectIndex)].topics[index];
    if (!item) return;
    editingItem = { type: type, index: index, oldName: isSubject ? item.name : item };
    document.getElementById('subject-dialog-title').innerHTML = '<i class="bi bi-pencil-fill"></i> Edit ' + (isSubject ? 'Subject' : 'Topic');
    document.getElementById('subject-dialog-label').textContent = (isSubject ? 'Subject' : 'Topic') + ' Name';
    document.getElementById('new-subject-name').value = editingItem.oldName;
    document.getElementById('save-create-subject').textContent = 'Save Changes';
    subjectDialog.classList.add('on');
    document.getElementById('new-subject-name').focus();
  }

  function closeNameDialog() {
    editingItem = null;
    subjectDialog.classList.remove('on');
    document.getElementById('subject-dialog-title').innerHTML = '<i class="bi bi-plus-circle-fill"></i> Create Subject';
    document.getElementById('subject-dialog-label').textContent = 'Subject Name';
    document.getElementById('save-create-subject').textContent = 'Save';
  }

  function categoryActions(type, index) {
    const itemName = type === 'subject' ? subjects[index].name : subjects[Number(subjectView.dataset.subjectIndex)].topics[index];
    const deleteClass = type === 'subject' ? 'delete-subject' : 'delete-topic';
    const title = type === 'subject' ? 'subject' : 'topic';
    return '<div class="category-card-actions">' +
      '<button type="button" class="edit-' + title + '" data-' + title + '-index="' + index + '" title="Edit ' + title + '" aria-label="Edit ' + title + '"><i class="bi bi-pencil-fill"></i></button>' +
      '<div class="category-menu-wrap"><button type="button" class="category-actions-toggle" aria-label="More actions for ' + escapeHtml(itemName) + '" aria-haspopup="menu" aria-expanded="false"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="5" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="12" cy="19" r="2"></circle></svg></button>' +
      '<div class="category-action-menu" role="menu" hidden><button type="button" class="' + deleteClass + '" data-' + title + '-index="' + index + '" role="menuitem"><i class="bi bi-trash3-fill"></i>Delete</button></div></div></div>';
  }

  function renderSubjects() {
    subjectList.classList.remove('question-items');
    const productSubjects = subjects.map(function (subject, subjectIndex) {
      return { subject: subject, index: subjectIndex };
    }).filter(function (item) { return item.subject.productId === currentProductId; });
    subjectList.innerHTML = productSubjects.map(function (item) {
      const subject = item.subject;
      const subjectIndex = item.index;
      const questionCount = questions.filter(function (question) { return question.productId === currentProductId && question.subject === subject.name; }).length;
      const topicCount = subject.topics.length;
      return '<article class="subject-card category-card" data-subject-index="' + subjectIndex + '" tabindex="0" role="group" aria-label="' + escapeHtml(subject.name) + ' subject">' +
        '<div class="category-card-head"><div class="category-card-info"><h3>' + escapeHtml(subject.name) + '</h3><p>' + topicCount + ' ' + (topicCount === 1 ? 'topic' : 'topics') + '</p></div>' +
        categoryActions('subject', subjectIndex) + '</div><hr class="category-card-divider" /><div class="category-card-footer"><span class="product-badge question-count">Questions: ' + questionCount.toLocaleString('en-US') + '</span></div></article>';
    }).join('') || '<p class="empty-topics">No subjects yet. Create a subject to start adding topics and questions.</p>';
  }

  function renderTopics(subjectIndex) {
    subjectList.classList.remove('question-items');
    const subject = subjects[subjectIndex];
    subjectList.innerHTML = subject.topics.map(function (topic, topicIndex) {
      const questionCount = questions.filter(function (question) {
        return question.productId === currentProductId && question.subject === subject.name && question.topic === topic;
      }).length;
      return '<article class="topic-card category-card" data-topic="' + encodeURIComponent(topic) + '" data-topic-index="' + topicIndex + '" tabindex="0" role="group" aria-label="' + escapeHtml(topic) + ' topic">' +
        '<div class="category-card-head"><div class="category-card-info"><h3>' + escapeHtml(topic) + '</h3><p>' + escapeHtml(subject.name) + '</p></div>' +
        categoryActions('topic', topicIndex) + '</div><hr class="category-card-divider" /><div class="category-card-footer"><span class="product-badge question-count">Questions: ' + questionCount.toLocaleString('en-US') + '</span></div></article>';
    }).join('') || '<p class="empty-topics">No topics added yet.</p>';
  }

  function renderQuestions(subjectName, topicName) {
    subjectList.classList.add('question-items');
    const topicQuestions = questions.filter(function (question) {
      return question.subject === subjectName && (topicName ? question.topic === topicName : !question.topic) && question.productId === currentProductId;
    });
    subjectList.innerHTML = topicQuestions.map(function (question, index) {
      const questionIndex = questions.indexOf(question);
      return '<article class="question-card category-card" data-question-index="' + questionIndex + '">' +
        '<div class="category-card-head"><div class="category-card-info"><h3>' + escapeHtml(question.text || 'Untitled question') + '</h3><p>Question ' + (index + 1) + '</p></div>' +
        '<div class="category-card-actions">' +
        '<button type="button" class="view-saved-question" data-question-index="' + questionIndex + '" title="View question" aria-label="View question"><i class="bi bi-eye-fill"></i></button>' +
        '<button type="button" class="edit-saved-question" data-question-index="' + questionIndex + '" title="Edit question" aria-label="Edit question"><i class="bi bi-pencil-fill"></i></button>' +
        '<div class="category-menu-wrap"><button type="button" class="category-actions-toggle" aria-label="More actions for question ' + (index + 1) + '" aria-haspopup="menu" aria-expanded="false"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="5" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="12" cy="19" r="2"></circle></svg></button>' +
        '<div class="category-action-menu" role="menu" hidden><button type="button" class="delete-saved-question" data-question-index="' + questionIndex + '" role="menuitem"><i class="bi bi-trash3-fill"></i>Delete</button></div></div>' +
        '</div></div><hr class="category-card-divider" /></article>';
    }).join('') || '<p class="empty-topics">No questions added for this ' + (topicName ? 'topic' : 'subject') + ' yet.</p>';
  }

  function openQuestions(subjectIndex, topicName) {
    const subject = subjects[subjectIndex];
    subjectView.dataset.subjectIndex = String(subjectIndex);
    if (topicName) subjectView.dataset.topic = topicName;
    else subjectView.removeAttribute('data-topic');
    document.getElementById('question-list-title').textContent = topicName ? topicName + ' Questions' : subject.name + ' Questions';
    createTestFromProduct.style.display = 'none';
    document.getElementById('create-subject-from-product').style.display = 'none';
    topicCreateQuestion.style.display = 'inline-flex';
    backQuestionList.style.display = 'inline-flex';
    subjectView.classList.add('on');
    renderQuestions(subject.name, topicName);
  }

  function openTopics(subjectIndex) {
    const subject = subjects[subjectIndex];
    subjectView.dataset.subjectIndex = String(subjectIndex);
    subjectView.removeAttribute('data-topic');
    document.getElementById('question-list-title').textContent = subject.name + ' Topics';
    createTestFromProduct.style.display = 'none';
    document.getElementById('create-subject-from-product').innerHTML = '<i class="bi bi-plus-circle"></i> Add Topic';
    document.getElementById('create-subject-from-product').style.display = '';
    topicCreateQuestion.style.display = 'none';
    backQuestionList.style.display = 'none';
    subjectView.classList.add('on');
    renderTopics(subjectIndex);
  }

  function openSubjects() {
    subjectView.removeAttribute('data-subject-index');
    subjectView.removeAttribute('data-topic');
    const product = activeProduct();
    if (!product) return showProducts();
    subjectView.dataset.product = product.name;
    subjectView.dataset.productId = product.id;
    document.getElementById('question-list-title').textContent = 'Subjects';
    createTestFromProduct.style.display = '';
    document.getElementById('create-subject-from-product').innerHTML = '<i class="bi bi-plus-circle"></i> Create Subject';
    document.getElementById('create-subject-from-product').style.display = '';
    topicCreateQuestion.style.display = 'none';
    backQuestionList.style.display = 'none';
    subjectView.classList.add('on');
    renderSubjects();
  }

  const initialParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
  const initialSubject = initialParams.get('subject');
  const initialTopic = initialParams.get('topic');
  const initialProductId = initialParams.get('productId');
  const initialProductName = initialParams.get('product');
  const initialProduct = products.find(function (product) {
    return product.id === initialProductId || product.name === initialProductName;
  });
  if (initialProduct) {
    openProduct(initialProduct.id);
    if (initialSubject) {
      let initialIndex = subjects.findIndex(function (subject) {
        return subject.productId === initialProduct.id && subject.name === initialSubject;
      });
      if (initialIndex < 0) {
        subjects.push({ id: createId(), productId: initialProduct.id, name: initialSubject, topics: initialTopic ? [initialTopic] : [] });
        initialIndex = subjects.length - 1;
        window.sessionStorage.setItem(subjectStorageKey, JSON.stringify(subjects));
      }
      if (initialTopic) openQuestions(initialIndex, initialTopic);
      else if (subjectSupportsTopics(subjects[initialIndex]) && subjects[initialIndex].topics.length) openTopics(initialIndex);
      else openQuestions(initialIndex, null);
    }
  } else {
    showProducts();
  }

  backQuestionList.addEventListener('click', function () {
    if (subjectView.dataset.topic) openTopics(Number(subjectView.dataset.subjectIndex));
    else openSubjects();
  });

  document.getElementById('create-product').addEventListener('click', function () { openProductDialog(null); });
  document.getElementById('cancel-product').addEventListener('click', closeProductDialog);
  document.getElementById('save-product').addEventListener('click', function () {
    const nameInput = document.getElementById('product-name');
    const name = nameInput.value.trim();
    if (!name) return nameInput.focus();
    const duplicate = products.some(function (product) {
      return product.name.toLowerCase() === name.toLowerCase() && product.id !== editingProductId;
    });
    if (duplicate) {
      nameInput.setCustomValidity('A product with this name already exists.');
      nameInput.reportValidity();
      nameInput.addEventListener('input', function clearProductNameError() {
        nameInput.setCustomValidity('');
        nameInput.removeEventListener('input', clearProductNameError);
      });
      return;
    }
    const accessType = document.querySelector('input[name="product-access"]:checked')?.value || 'Paid';
    const productData = {
      id: editingProductId || createId(),
      name: name,
      description: document.getElementById('product-description').value.trim(),
      accessType: accessType,
      isActive: document.getElementById('product-active').checked,
      supportsTopics: document.getElementById('product-topics-enabled').checked
    };
    if (editingProductId) {
      const oldName = products.find(function (product) { return product.id === editingProductId; })?.name;
      products = products.map(function (product) { return product.id === editingProductId ? productData : product; });
      if (oldName !== name) questions.forEach(function (question) { if (question.productId === editingProductId) question.product = name; });
      if (currentProductId === editingProductId) {
        subjectView.dataset.product = name;
        document.getElementById('active-product-title').textContent = name;
      }
    } else {
      products.push(productData);
    }
    window.sessionStorage.setItem(productStorageKey, JSON.stringify(products));
    window.sessionStorage.setItem(questionStorageKey, JSON.stringify(questions));
    closeProductDialog();
    renderProducts();
  });
  productList.addEventListener('click', function (event) {
    const menuToggle = event.target.closest('.product-actions-toggle');
    if (menuToggle) {
      const menu = menuToggle.nextElementSibling;
      const shouldOpen = menu.hasAttribute('hidden');
      productList.querySelectorAll('.product-action-menu').forEach(function (item) { item.hidden = true; });
      productList.querySelectorAll('.product-actions-toggle').forEach(function (button) { button.setAttribute('aria-expanded', 'false'); });
      if (shouldOpen) {
        menu.hidden = false;
        menuToggle.setAttribute('aria-expanded', 'true');
      }
      return;
    }
    const remove = event.target.closest('.delete-product');
    if (remove) {
      remove.closest('.product-action-menu').hidden = true;
      const product = products.find(function (item) { return item.id === remove.dataset.productId; });
      if (!product || !window.confirm('Delete "' + product.name + '" and all its subjects, topics, and questions?')) return;
      products = products.filter(function (item) { return item.id !== product.id; });
      const removedSubjectNames = subjects.filter(function (subject) { return subject.productId === product.id; }).map(function (subject) { return subject.name; });
      subjects = subjects.filter(function (subject) { return subject.productId !== product.id; });
      questions = questions.filter(function (question) {
        return question.productId ? question.productId !== product.id : removedSubjectNames.indexOf(question.subject) === -1;
      });
      window.sessionStorage.setItem(productStorageKey, JSON.stringify(products));
      window.sessionStorage.setItem(subjectStorageKey, JSON.stringify(subjects));
      window.sessionStorage.setItem(questionStorageKey, JSON.stringify(questions));
      renderProducts();
      return;
    }
    if (event.target.closest('.product-action-menu')) return;
    const card = event.target.closest('.product-card');
    if (card) openProduct(card.dataset.productId);
  });
  document.addEventListener('mousedown', function (event) {
    if (event.target.closest('.product-card-actions')) return;
    productList.querySelectorAll('.product-action-menu').forEach(function (menu) { menu.hidden = true; });
    productList.querySelectorAll('.product-actions-toggle').forEach(function (button) { button.setAttribute('aria-expanded', 'false'); });
  });
  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') return;
    productList.querySelectorAll('.product-action-menu').forEach(function (menu) { menu.hidden = true; });
    productList.querySelectorAll('.product-actions-toggle').forEach(function (button) { button.setAttribute('aria-expanded', 'false'); });
  });
  productList.addEventListener('keydown', function (event) {
    if ((event.key === 'Enter' || event.key === ' ') && event.target.classList.contains('product-card')) {
      event.preventDefault();
      openProduct(event.target.dataset.productId);
    }
  });

  document.getElementById('create-subject-from-product').addEventListener('click', function () {
    const topicSubjectIndex = subjectView.dataset.subjectIndex;
    if (topicSubjectIndex !== undefined) {
      const subject = subjects[Number(topicSubjectIndex)];
      window.location.hash = 'fmge-create-test?product=' + encodeURIComponent(subjectView.dataset.product || '') + '&productId=' + encodeURIComponent(currentProductId || '') + '&subject=' + encodeURIComponent(subject.name) + '&mode=topic';
      return;
    }
    const dialog = document.getElementById('create-subject-dialog');
    dialog.classList.add('on');
    document.getElementById('subject-dialog-title').innerHTML = '<i class="bi bi-plus-circle-fill"></i> Create Subject';
    document.getElementById('subject-dialog-label').textContent = 'Subject Name';
    document.getElementById('save-create-subject').textContent = 'Save';
    editingItem = null;
    document.getElementById('new-subject-name').value = '';
    document.getElementById('new-subject-name').focus();
  });
  topicCreateQuestion.addEventListener('click', function () {
    const subject = subjects[Number(subjectView.dataset.subjectIndex)];
    window.location.hash = 'fmge-add-question?product=' + encodeURIComponent(subjectView.dataset.product || '') + '&productId=' + encodeURIComponent(currentProductId || '') + '&subject=' + encodeURIComponent(subject.name) + '&topic=' + encodeURIComponent(subjectView.dataset.topic || '');
  });
  document.getElementById('cancel-create-subject').addEventListener('click', function () {
    closeNameDialog();
  });
  document.getElementById('save-create-subject').addEventListener('click', function () {
    const input = document.getElementById('new-subject-name');
    const name = input.value.trim();
    if (!name) {
      input.focus();
      return;
    }
    if (editingItem) {
      const current = editingItem;
      const duplicateSubject = subjects.some(function (subject, index) {
        return index !== current.index && subject.productId === currentProductId && subject.name.toLowerCase() === name.toLowerCase();
      });
      if (current.type === 'subject') {
        if (duplicateSubject) {
          input.focus();
          return;
        }
        subjects[current.index].name = name;
        questions.forEach(function (question) {
          if (question.productId === currentProductId && question.subject === current.oldName) question.subject = name;
        });
        window.sessionStorage.setItem(questionStorageKey, JSON.stringify(questions));
        syncTestQuestionCounts();
        renderSubjects();
      } else {
        const subjectIndex = Number(subjectView.dataset.subjectIndex);
        const currentSubject = subjects[subjectIndex];
        const duplicateTopic = currentSubject.topics.some(function (topic, index) {
          return index !== current.index && topic.toLowerCase() === name.toLowerCase();
        });
        if (duplicateTopic) {
          input.focus();
          return;
        }
        currentSubject.topics[current.index] = name;
        questions.forEach(function (question) {
          if (question.productId === currentProductId && question.subject === currentSubject.name && question.topic === current.oldName) question.topic = name;
        });
        const tests = JSON.parse(window.sessionStorage.getItem('fmge-question-bank-tests') || '[]');
        tests.forEach(function (test) {
          if (test.productId === currentProductId && test.subjectId === currentSubject.id && test.topic === current.oldName) test.topic = name;
        });
        window.sessionStorage.setItem('fmge-question-bank-tests', JSON.stringify(tests));
        window.sessionStorage.setItem(questionStorageKey, JSON.stringify(questions));
        syncTestQuestionCounts();
        renderTopics(subjectIndex);
      }
      window.sessionStorage.setItem(subjectStorageKey, JSON.stringify(subjects));
      closeNameDialog();
      return;
    }
    if (!subjects.some(function (subject) { return subject.productId === currentProductId && subject.name.toLowerCase() === name.toLowerCase(); })) subjects.push({ id: createId(), productId: currentProductId, name: name, topics: [] });
    window.sessionStorage.setItem(subjectStorageKey, JSON.stringify(subjects));
    renderSubjects();
    closeNameDialog();
  });

  subjectList.addEventListener('click', function (event) {
    const menuToggle = event.target.closest('.category-actions-toggle');
    if (menuToggle) {
      const menu = menuToggle.nextElementSibling;
      const shouldOpen = menu.hasAttribute('hidden');
      subjectList.querySelectorAll('.category-action-menu').forEach(function (item) { item.hidden = true; });
      subjectList.querySelectorAll('.category-actions-toggle').forEach(function (button) { button.setAttribute('aria-expanded', 'false'); });
      if (shouldOpen) {
        menu.hidden = false;
        menuToggle.setAttribute('aria-expanded', 'true');
      }
      return;
    }
    const editSubject = event.target.closest('.edit-subject');
    if (editSubject) {
      openNameDialog('subject', Number(editSubject.dataset.subjectIndex));
      return;
    }
    const deleteSubject = event.target.closest('.delete-subject');
    if (deleteSubject) {
      const index = Number(deleteSubject.dataset.subjectIndex);
      const subject = subjects[index];
      if (subject && window.confirm('Delete "' + subject.name + '" and its topics and questions?')) {
        subjects.splice(index, 1);
        questions = questions.filter(function (question) { return question.productId !== currentProductId || question.subject !== subject.name; });
        window.sessionStorage.setItem(subjectStorageKey, JSON.stringify(subjects));
        window.sessionStorage.setItem(questionStorageKey, JSON.stringify(questions));
        syncTestQuestionCounts();
        renderSubjects();
      }
      return;
    }
    const editTopic = event.target.closest('.edit-topic');
    if (editTopic) {
      openNameDialog('topic', Number(editTopic.dataset.topicIndex));
      return;
    }
    const deleteTopic = event.target.closest('.delete-topic');
    if (deleteTopic) {
      const subject = subjects[Number(subjectView.dataset.subjectIndex)];
      const topicIndex = Number(deleteTopic.dataset.topicIndex);
      const topic = subject && subject.topics[topicIndex];
      if (topic && window.confirm('Delete "' + topic + '" and its questions?')) {
        subject.topics.splice(topicIndex, 1);
        questions = questions.filter(function (question) { return question.productId !== currentProductId || question.subject !== subject.name || question.topic !== topic; });
        window.sessionStorage.setItem(subjectStorageKey, JSON.stringify(subjects));
        window.sessionStorage.setItem(questionStorageKey, JSON.stringify(questions));
        syncTestQuestionCounts();
        renderTopics(Number(subjectView.dataset.subjectIndex));
      }
      return;
    }
    const subjectCard = event.target.closest('.subject-card');
    if (subjectCard) {
      const subjectIndex = Number(subjectCard.dataset.subjectIndex);
      if (subjectSupportsTopics(subjects[subjectIndex]) && subjects[subjectIndex].topics.length) openTopics(subjectIndex);
      else openQuestions(subjectIndex, null);
      return;
    }
    const topicCard = event.target.closest('.topic-card');
    if (topicCard) {
      const topic = decodeURIComponent(topicCard.dataset.topic);
      openQuestions(Number(subjectView.dataset.subjectIndex), topic);
      return;
    }
    const viewQuestion = event.target.closest('.view-saved-question');
    const editQuestion = event.target.closest('.edit-saved-question');
    const deleteQuestion = event.target.closest('.delete-saved-question');
    const action = viewQuestion || editQuestion || deleteQuestion;
    if (!action) return;
    const questionIndex = Number(action.dataset.questionIndex);
    const question = questions[questionIndex];
    if (viewQuestion) {
      document.getElementById('view-question-text').textContent = question.text;
      document.getElementById('view-question-subject').textContent = question.subject;
      document.getElementById('view-question-topic').textContent = question.topic;
      document.getElementById('view-question-difficulty').textContent = question.difficulty || 'Medium';
      document.getElementById('view-question-options').innerHTML = (question.options || []).map(function (option) { return '<li>' + option + '</li>'; }).join('');
      document.getElementById('view-question-answer').textContent = question.options && question.options[question.answer] ? question.options[question.answer] : 'Not set';
      document.getElementById('view-question-dialog').classList.add('on');
    } else if (editQuestion) {
      const subject = subjects[Number(subjectView.dataset.subjectIndex)];
      window.location.hash = 'fmge-add-question?product=' + encodeURIComponent(subjectView.dataset.product || '') + '&productId=' + encodeURIComponent(currentProductId || '') + '&subject=' + encodeURIComponent(subject.name) + '&topic=' + encodeURIComponent(subjectView.dataset.topic || '') + '&edit=' + questionIndex;
    } else if (deleteQuestion && window.confirm('Delete this question?')) {
      questions.splice(questionIndex, 1);
      window.sessionStorage.setItem(questionStorageKey, JSON.stringify(questions));
      syncTestQuestionCounts();
      renderQuestions(subjectView.dataset.subjectIndex && subjects[Number(subjectView.dataset.subjectIndex)].name, subjectView.dataset.topic);
    }
  });
  document.addEventListener('mousedown', function (event) {
    if (event.target.closest('.category-card-actions')) return;
    subjectList.querySelectorAll('.category-action-menu').forEach(function (menu) { menu.hidden = true; });
    subjectList.querySelectorAll('.category-actions-toggle').forEach(function (button) { button.setAttribute('aria-expanded', 'false'); });
  });
  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') return;
    subjectList.querySelectorAll('.category-action-menu').forEach(function (menu) { menu.hidden = true; });
    subjectList.querySelectorAll('.category-actions-toggle').forEach(function (button) { button.setAttribute('aria-expanded', 'false'); });
  });

  document.querySelectorAll('[data-close-question-dialog]').forEach(function (button) {
    button.addEventListener('click', function () {
      button.closest('.question-dialog').classList.remove('on');
    });
  });

}

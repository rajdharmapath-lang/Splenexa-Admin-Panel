// Behaviour carried over from the original HTML page.
export default function init(document, window) {
  const $ = id => document.getElementById(id);
  const params = new URLSearchParams(window.location.hash.split('?')[1] || '');
  const productIdParam = params.get('productId') || '';
  const productParam = params.get('product') || '';
  const subjectParam = params.get('subject') || '';
  const topicMode = params.get('mode') === 'topic';
  const productSelect = $('test-product');
  const topicField = $('test-topic-field');
  const parentSubjectToggleField = $('parent-subject-toggle-field');
  const parentSubjectToggle = $('use-parent-subject');
  const topicInput = $('test-topic');
  const durationToggle = $('duration-enabled');
  const durationControls = $('duration-controls');
  let products = [];
  let subjects = [];
  let questions = [];
  let tests = [];
  try {
    products = JSON.parse(window.sessionStorage.getItem('fmge-question-bank-products') || '[]');
    subjects = JSON.parse(window.sessionStorage.getItem('fmge-question-bank-subjects') || '[]');
    questions = JSON.parse(window.sessionStorage.getItem('fmge-question-bank-questions') || '[]');
    tests = JSON.parse(window.sessionStorage.getItem('fmge-question-bank-tests') || '[]');
  } catch (error) {
    products = [];
    subjects = [];
    questions = [];
    tests = [];
  }
  const selectedProduct = products.find(product => product.id === productIdParam || product.name === productParam);
  const topicsEnabled = selectedProduct
    ? typeof selectedProduct.supportsTopics === 'boolean'
      ? selectedProduct.supportsTopics
      : selectedProduct.name === 'FMGE Q-Bank' || subjects.some(subject => subject.productId === selectedProduct.id && subject.topics.length > 0)
    : topicMode;
  const isTopicMode = topicMode;
  parentSubjectToggle.checked = isTopicMode || topicsEnabled;
  const productId = selectedProduct?.id || productIdParam;
  const productName = selectedProduct?.name || productParam;

  function makeId() {
    return window.crypto && typeof window.crypto.randomUUID === 'function'
      ? window.crypto.randomUUID()
      : 'item-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2);
  }

  if (products.length) {
    productSelect.innerHTML = products.map(product => `<option value="${product.name}">${product.name}</option>`).join('');
  } else if (productName && !Array.from(productSelect.options).some(option => option.value === productName || option.textContent.trim() === productName)) {
    const option = document.createElement('option');
    option.value = productName;
    option.textContent = productName;
    productSelect.appendChild(option);
  }
  if (productName) productSelect.value = productName;
  if (productIdParam) productSelect.disabled = true;

  function questionCount(subjectName, topicName) {
    return questions.filter(question =>
      question.productId === productId &&
      String(question.subject || '').toLocaleLowerCase() === subjectName.toLocaleLowerCase() &&
      (topicName ? question.topic === topicName : !question.topic)
    ).length;
  }

  function selectedQuestionCount() {
    const name = $('test-name').value.trim();
    const subjectName = isTopicMode ? subjectParam : name;
    const topicName = isTopicMode ? name : (parentSubjectToggle.checked ? topicInput.value.trim() : '');
    return subjectName ? questionCount(subjectName, topicName) : 0;
  }

  function updateNameMode() {
    if (isTopicMode) {
      $('create-flow-title').textContent = 'Create Topic';
      $('test-name-label').childNodes[0].textContent = 'Topic Name';
      $('test-name').placeholder = 'Enter topic name';
      parentSubjectToggleField.style.display = 'none';
      topicField.style.display = 'none';
      $('create-test-description').textContent = 'Add a topic under ' + subjectParam + '.';
    } else if (parentSubjectToggle.checked) {
      $('create-flow-title').textContent = 'Create Test';
      $('test-name-label').childNodes[0].textContent = 'Test Name';
      $('test-name').placeholder = 'Enter test name';
      parentSubjectToggleField.style.display = '';
      topicField.style.display = '';
      $('create-test-description').textContent = 'Enter a topic name; it will be created under this test name.';
    } else {
      $('create-flow-title').textContent = 'Create Test';
      $('test-name-label').childNodes[0].textContent = 'Test Name';
      $('test-name').placeholder = 'Enter test name';
      parentSubjectToggleField.style.display = '';
      topicField.style.display = 'none';
      $('create-test-description').textContent = 'Questions will be organized directly under this test name.';
    }
    updateTotalMarks();
  }
  updateNameMode();
  parentSubjectToggle.addEventListener('change', updateNameMode);
  topicInput.addEventListener('input', updateTotalMarks);
  $('test-name').addEventListener('input', updateTotalMarks);
  durationToggle.addEventListener('change', () => {
    durationControls.style.display = durationToggle.checked ? '' : 'none';
  });
  durationControls.style.display = durationToggle.checked ? '' : 'none';

  const hours = Array.from({ length: 24 }, (_, index) => `<option>${String(index).padStart(2, '0')}</option>`).join('');
  const minutes = Array.from({ length: 60 }, (_, index) => `<option>${String(index).padStart(2, '0')}</option>`).join('');
  $('hh').innerHTML = hours;
  $('mm').innerHTML = minutes;

  function row(number) {
    return `<div class="nr" style="margin-bottom:12px"><div class="nb">Notification ${number}</div>
      <div><label class="f">Notification Message <s>*</s></label><input class="in" placeholder="Enter notification message"></div>
      <div><label class="f">Schedule Date &amp; Time <s>*</s></label><div class="dr"><label><i class="bi bi-calendar3"></i><input placeholder="Select date" onfocus="this.type='date'" onblur="if(!this.value)this.type='text'"></label><label><i class="bi bi-clock"></i><input placeholder="Select time" onfocus="this.type='time'" onblur="if(!this.value)this.type='text'"><i class="bi bi-chevron-down ch"></i></label></div></div>
      <button class="del" title="Delete"><i class="bi bi-trash3-fill"></i></button></div>`;
  }

  function renumberNotifications() {
    document.querySelectorAll('#nots .nr').forEach((notification, index) => {
      notification.querySelector('.nb').textContent = 'Notification ' + (index + 1);
    });
  }
  $('nots').innerHTML = row(1);
  $('add').onclick = () => $('nots').insertAdjacentHTML('beforeend', row($('nots').children.length + 1));
  $('nots').onclick = event => {
    const button = event.target.closest('.del');
    if (button && $('nots').children.length > 1) {
      button.closest('.nr').remove();
      renumberNotifications();
    }
  };

  function updateTotalMarks() {
    const count = selectedQuestionCount();
    const marks = Math.max(0, Number($('marks-per-question').value) || 0);
    $('total-question-count').value = String(count);
    $('total-marks').value = String(count * marks);
  }
  $('marks-per-question').addEventListener('input', updateTotalMarks);
  updateTotalMarks();

  function saveSubjects() {
    window.sessionStorage.setItem('fmge-question-bank-subjects', JSON.stringify(subjects));
  }

  $('create-test-submit').onclick = () => {
    const product = productSelect.value;
    const name = $('test-name').value.trim();
    if (!product) {
      productSelect.focus();
      return;
    }
    if (!name) {
      $('test-name').focus();
      return;
    }
    const useTopic = isTopicMode || parentSubjectToggle.checked;
    const subjectName = isTopicMode ? subjectParam : name;
    const topicName = isTopicMode ? name : (useTopic ? topicInput.value.trim() : '');
    if (useTopic && !topicName) {
      topicInput.focus();
      return;
    }
    let subject = subjects.find(item => item.productId === productId && item.name.toLowerCase() === subjectName.toLowerCase());
    if (!subject) {
      subject = { id: makeId(), productId: productId, name: subjectName, topics: [], supportsTopics: useTopic };
      subjects.push(subject);
    }
    subject.supportsTopics = useTopic;
    if (useTopic && !subject.topics.some(topic => topic.toLowerCase() === topicName.toLowerCase())) {
      subject.topics.push(topicName);
      subject.topics.sort((left, right) => left.localeCompare(right));
    }
    saveSubjects();

    const totalQuestions = questionCount(subjectName, topicName);
    const marksPerQuestion = Math.max(0, Number($('marks-per-question').value) || 0);
    const negativeMarking = Math.max(0, Number($('negative-marking').value) || 0);
    const test = {
      id: makeId(),
      productId: productId,
      title: name,
      subjectId: subject.id,
      topic: topicName || null,
      totalQuestions: totalQuestions,
      totalMarks: totalQuestions * marksPerQuestion,
      marksPerQuestion: marksPerQuestion,
      negativeMarking: negativeMarking,
      durationEnabled: durationToggle.checked,
      durationMinutes: durationToggle.checked ? Number($('hh').value) * 60 + Number($('mm').value) : null,
      isPublished: false,
      createdAt: new Date().toISOString()
    };
    tests.push(test);
    window.sessionStorage.setItem('fmge-question-bank-tests', JSON.stringify(tests));
    const query = new URLSearchParams({ productId: productId, product: product, subject: subjectName });
    if (topicName) query.set('topic', topicName);
    window.location.hash = 'fmge-question-bank?' + query.toString();
  };

  $('back-to-question-bank').onclick = () => {
    window.location.hash = 'fmge-question-bank?productId=' + encodeURIComponent(productId) + '&product=' + encodeURIComponent(productName);
  };
  $('cancel-create-test').onclick = () => {
    window.location.hash = 'fmge-question-bank?productId=' + encodeURIComponent(productId) + '&product=' + encodeURIComponent(productName);
  };
}

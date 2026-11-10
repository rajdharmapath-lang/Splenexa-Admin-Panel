// Behaviour carried over from the original HTML page.
export default function init(document, window) {
  const params = new URLSearchParams(window.location.hash.split('?')[1] || '');
  const editIndex = params.get('edit');
  const isEditing = /^\d+$/.test(editIndex || '');
  const readQuestion = () => {
    try {
      const questions = JSON.parse(window.sessionStorage.getItem('fmge-question-bank-questions') || '[]');
      return isEditing ? questions[Number(editIndex)] : null;
    } catch (error) {
      console.error('Could not load the question for editing.', error);
      return null;
    }
  };
  const existingQuestion = readQuestion();
  const product = existingQuestion?.product || params.get('product') || '';
  const productId = existingQuestion?.productId || params.get('productId') || '';
  const subject = existingQuestion?.subject || params.get('subject') || '';
  const topic = existingQuestion?.topic || params.get('topic') || '';
  const hasQuestionContext = Boolean(product && subject);
  const productSelect = document.getElementById('product-type');
  const subjectSelect = document.getElementById('subject');
  const topicSelect = document.getElementById('topic');

  function setSelectValue(select, value) {
    if (!select || !value) return;
    let option = Array.from(select.options).find(item => item.textContent.trim() === value);
    if (!option) {
      option = document.createElement('option');
      option.textContent = value;
      option.value = value;
      select.appendChild(option);
    }
    select.value = value;
  }

  setSelectValue(productSelect, product);
  setSelectValue(subjectSelect, subject);
  setSelectValue(topicSelect, topic);

  function setMetadataValue(select, value) {
    const display = document.getElementById(`${select.id}-value`);
    if (display) {
      display.textContent = value || 'Not set';
      display.style.display = 'block';
    }
    if (select && value) select.style.display = 'none';
    if (select && value) select.value = value;
  }

  if (hasQuestionContext) {
    document.querySelector('.pg-add-question')?.classList.add('has-question-context');
    setMetadataValue(productSelect, product);
    setMetadataValue(subjectSelect, subject);
    if (topic) setMetadataValue(topicSelect, topic);
    else {
      document.getElementById('topic').closest('div')?.parentElement?.setAttribute('hidden', '');
    }
  }

  if (isEditing) {
    document.body.classList.add('is-editing-question');
    document.querySelector('.pg-add-question')?.classList.add('is-editing-question');
    document.getElementById('question-page-title').textContent = 'Edit Question';
    document.getElementById('question-breadcrumb-label').textContent = 'Edit Question';
  }

  document.getElementById('back-to-question-bank').onclick = () => {
    window.location.hash = 'fmge-question-bank';
  };

  const editorFonts = [
    'Poppins', 'Inter', 'Roboto', 'Open Sans', 'Lato', 'Montserrat', 'Source Sans 3', 'Nunito',
    'Raleway', 'Merriweather', 'Playfair Display', 'Oswald', 'Ubuntu', 'Libre Baskerville', 'Fira Sans',
    'Manrope', 'DM Sans', 'Work Sans', 'Rubik', 'Bebas Neue', 'Cabin', 'Comfortaa', 'Dosis', 'Exo 2',
    'IBM Plex Sans', 'Josefin Sans', 'Karla', 'Mukta', 'Noto Sans', 'Pacifico', 'Quicksand',
    'Space Grotesk', 'Titillium Web', 'Varela Round', 'ABeeZee', 'Abel', 'Abril Fatface', 'Alegreya',
    'Alegreya Sans', 'Alfa Slab One', 'Amatic SC', 'Archivo', 'Archivo Black', 'Arimo', 'Asap',
    'Barlow', 'Barlow Condensed', 'Bitter', 'Bodoni Moda', 'Cairo', 'Cardo', 'Chakra Petch',
    'Cinzel', 'Cormorant Garamond', 'Crimson Text', 'DM Serif Display', 'Dancing Script',
    'EB Garamond', 'Figtree', 'Fjalla One', 'Frank Ruhl Libre', 'Heebo', 'Hind', 'Inconsolata',
    'Indie Flower', 'Instrument Sans', 'Jost', 'Kanit', 'Libre Franklin', 'Lora', 'M PLUS 1',
    'M PLUS Rounded 1c', 'Mada', 'Maven Pro', 'Merriweather Sans', 'Mulish', 'Nanum Gothic',
    'Newsreader', 'Onest', 'Outfit', 'Oxygen', 'PT Sans', 'PT Serif', 'Prompt', 'Public Sans',
    'Questrial', 'Red Hat Display', 'Roboto Condensed', 'Roboto Mono', 'Saira', 'Signika',
    'Slabo 27px', 'Spectral', 'Spline Sans', 'Tajawal', 'Teko', 'Urbanist', 'Vollkorn',
    'Yanone Kaffeesatz', 'Zilla Slab', 'Arial', 'Georgia', 'Times New Roman', 'Courier New'
  ];
  const systemFonts = new Set(['Arial', 'Georgia', 'Times New Roman', 'Courier New']);
  const loadedFonts = new Set();
  function loadEditorFont(font) {
    if (systemFonts.has(font) || loadedFonts.has(font)) return;
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(font).replace(/%20/g, '+')}&display=swap`;
    document.head.appendChild(fontLink);
    loadedFonts.add(font);
  }
  loadEditorFont('Poppins');

  const editorActions = [
    ['bold', '<b>B</b>', 'Bold'], ['italic', '<i>I</i>', 'Italic'],
    ['underline', '<u>U</u>', 'Underline'], ['strikeThrough', '<s>S</s>', 'Strikethrough']
  ];
  function editorToolbar() {
    return editorActions.map(action => `<button type="button" data-command="${action[0]}" title="${action[2]}">${action[1]}</button>`).join('') +
      '<span class="sep"></span>' +
      `<select class="font-select" data-command="fontName" title="Font family">${editorFonts.map(font => `<option value="${font}">${font}</option>`).join('')}</select>` +
      '<select class="size-select" data-command="fontSize" title="Font size"><option value="1">10</option><option value="2">12</option><option value="3" selected>14</option><option value="4">16</option><option value="5">18</option><option value="6">24</option><option value="7">32</option></select>' +
      '<span class="sep"></span>' +
      '<button type="button" data-command="justifyLeft" title="Align left"><i class="bi bi-text-left"></i></button><button type="button" data-command="justifyCenter" title="Align center"><i class="bi bi-text-center"></i></button><button type="button" data-command="justifyRight" title="Align right"><i class="bi bi-text-right"></i></button><button type="button" data-command="justifyFull" title="Justify"><i class="bi bi-justify"></i></button>' +
      '<span class="sep"></span>' +
      '<button type="button" data-command="insertUnorderedList" title="Bulleted list"><i class="bi bi-list-ul"></i></button><button type="button" data-command="insertOrderedList" title="Numbered list"><i class="bi bi-list-ol"></i></button><button type="button" data-command="superscript" title="Superscript">x<sup>2</sup></button><button type="button" data-command="subscript" title="Subscript">x<sub>2</sub></button><label class="color-control highlight-color-control" title="Highlight color"><i class="bi bi-highlighter"></i><input type="color" data-command="hiliteColor" value="#fff29a" aria-label="Highlight color"></label>' +
      '<label class="color-control" title="Text color"><input type="color" data-command="foreColor" value="#0b2a5e" aria-label="Text color"></label><button type="button" data-command="createLink" title="Insert link"><i class="bi bi-link-45deg"></i></button><button type="button" data-table-command aria-expanded="false" title="Insert styled table"><i class="bi bi-table"></i></button><button type="button" data-command="undo" title="Undo"><i class="bi bi-arrow-counterclockwise"></i></button><button type="button" data-command="redo" title="Redo"><i class="bi bi-arrow-clockwise"></i></button>';
  }
  function insertEditorTable(editor, rows, columns, style, savedRange) {
    const styles = { blue: 'editor-table-blue', striped: 'editor-table-striped', minimal: 'editor-table-minimal' };
    if (!Number.isInteger(rows) || rows < 1 || rows > 10 || !Number.isInteger(columns) || columns < 1 || columns > 10 || !styles[style]) return false;
    let html = `<table class="editor-table ${styles[style]}"><thead><tr>`;
    for (let column = 0; column < columns; column += 1) html += `<th>Header ${column + 1}</th>`;
    html += '</tr></thead><tbody>';
    for (let row = 0; row < rows - 1; row += 1) {
      html += '<tr>';
      for (let column = 0; column < columns; column += 1) html += '<td>Cell</td>';
      html += '</tr>';
    }
    const selection = window.getSelection();
    editor.focus();
    if (savedRange && selection) {
      selection.removeAllRanges();
      selection.addRange(savedRange);
    }
    document.execCommand('insertHTML', false, `${html}</tbody></table>`);
    return true;
  }
  function wireEditor(toolbar, editor) {
    toolbar.innerHTML = editorToolbar();
    let savedRange = null;
    const saveSelection = () => {
      const selection = window.getSelection();
      if (selection?.rangeCount && editor.contains(selection.getRangeAt(0).commonAncestorContainer)) {
        savedRange = selection.getRangeAt(0).cloneRange();
      }
    };
    const restoreSelection = () => {
      if (!savedRange) return;
      const selection = window.getSelection();
      editor.focus();
      selection.removeAllRanges();
      selection.addRange(savedRange);
    };
    editor.addEventListener('mouseup', saveSelection);
    editor.addEventListener('keyup', saveSelection);
    toolbar.querySelectorAll('[data-command]').forEach(control => control.addEventListener('mousedown', event => {
      if (control.type === 'color') saveSelection();
      else event.preventDefault();
    }));
    const tableButton = toolbar.querySelector('[data-table-command]');
    const tablePanel = document.createElement('div');
    tablePanel.className = 'editor-table-menu';
    tablePanel.hidden = true;
    tablePanel.innerHTML = '<label>Rows<input type="number" min="1" max="10" step="1" value="2" aria-label="Table rows"></label><label>Columns<input type="number" min="1" max="10" step="1" value="2" aria-label="Table columns"></label><label>Style<select aria-label="Table style"><option value="blue">Blue header</option><option value="striped">Striped rows</option><option value="minimal">Minimal lines</option></select></label><button type="button" data-insert-editor-table>Insert table</button>';
    toolbar.appendChild(tablePanel);
    tableButton.addEventListener('mousedown', event => {
      event.preventDefault();
      saveSelection();
    });
    tableButton.addEventListener('click', () => {
      tablePanel.hidden = !tablePanel.hidden;
      tableButton.setAttribute('aria-expanded', String(!tablePanel.hidden));
    });
    tablePanel.querySelector('[data-insert-editor-table]').addEventListener('click', () => {
      const rows = tablePanel.querySelector('input[aria-label="Table rows"]');
      const columns = tablePanel.querySelector('input[aria-label="Table columns"]');
      if (!rows.reportValidity() || !columns.reportValidity()) return;
      const inserted = insertEditorTable(editor, rows.valueAsNumber, columns.valueAsNumber, tablePanel.querySelector('select').value, savedRange);
      if (!inserted) return;
      savedRange = null;
      tablePanel.hidden = true;
      tableButton.setAttribute('aria-expanded', 'false');
    });
    toolbar.addEventListener('click', event => {
      const control = event.target.closest('[data-command]');
      if (!control || control.tagName === 'SELECT' || control.type === 'color') return;
      editor.focus();
      let value = control.dataset.value;
      if (control.dataset.command === 'createLink') value = window.prompt('Enter URL');
      if (control.dataset.command === 'createLink' && !value) return;
      document.execCommand(control.dataset.command, false, value || null);
      saveSelection();
    });
    toolbar.addEventListener('change', event => {
      const control = event.target.closest('[data-command]');
      if (!control) return;
      if (control.type === 'color') restoreSelection();
      else editor.focus();
      if (control.dataset.command === 'fontName') loadEditorFont(control.value);
      document.execCommand(control.dataset.command, false, control.value);
      saveSelection();
    });
  }
  document.querySelectorAll('[data-tb]').forEach(toolbar => wireEditor(toolbar, toolbar.parentElement.querySelector('.body')));
  const maxImageSizeBytes = 5 * 1024 * 1024;
  document.querySelectorAll('[data-att]').forEach(attachment => {
    const editor = attachment.closest('.sec').querySelector('.rich-body');
    const inputId = `question-image-${Array.from(document.querySelectorAll('[data-att]')).indexOf(attachment)}`;
    attachment.innerHTML = `<h5><i class="bi bi-image-fill"></i>Attach Image <span>(Optional)</span></h5><div class="drop" role="group" aria-label="Image upload" tabindex="0"><i class="bi bi-cloud-arrow-up"></i>Drag &amp; drop an image here<br>or<br><button type="button" class="fbtn">Choose File</button><input id="${inputId}" type="file" accept="image/png,image/jpeg,image/gif,image/webp" hidden></div><small>Supported formats: JPG, PNG, GIF, WebP<br>(Max size: 5 MB)</small>`;
    const dropZone = attachment.querySelector('.drop');
    const fileInput = attachment.querySelector('input[type="file"]');
    let savedRange = null;
    function saveEditorRange() {
      const selection = window.getSelection();
      if (selection?.rangeCount && editor.contains(selection.getRangeAt(0).commonAncestorContainer)) {
        savedRange = selection.getRangeAt(0).cloneRange();
      }
    }
    function uploadImage(file) {
      if (!file) return;
      if (!['image/jpeg', 'image/png', 'image/gif', 'image/webp'].includes(file.type) || file.size > maxImageSizeBytes) {
        window.alert('Choose a JPG, PNG, GIF, or WebP image no larger than 5 MB.');
        return;
      }
      const reader = new window.FileReader();
      reader.addEventListener('load', () => {
        if (typeof reader.result !== 'string') {
          window.alert('The selected image could not be read.');
          return;
        }
        editor.focus();
        const selection = window.getSelection();
        if (savedRange && selection) {
          selection.removeAllRanges();
          selection.addRange(savedRange);
        } else {
          const range = document.createRange();
          range.selectNodeContents(editor);
          range.collapse(false);
          selection?.removeAllRanges();
          selection?.addRange(range);
        }
        const alt = escapeHtml(file.name);
        document.execCommand('insertHTML', false, `<img src="${reader.result}" alt="${alt}" class="question-content-image">`);
        saveEditorRange();
      });
      reader.addEventListener('error', () => window.alert('The selected image could not be read.'));
      reader.readAsDataURL(file);
    }
    attachment.querySelector('.fbtn').addEventListener('click', () => {
      saveEditorRange();
      fileInput.click();
    });
    dropZone.addEventListener('click', event => {
      if (event.target.closest('.fbtn')) return;
      saveEditorRange();
      fileInput.click();
    });
    fileInput.addEventListener('change', () => {
      uploadImage(fileInput.files?.[0]);
      fileInput.value = '';
    });
    dropZone.addEventListener('dragover', event => {
      event.preventDefault();
      dropZone.classList.add('is-dragging');
    });
    dropZone.addEventListener('dragleave', () => dropZone.classList.remove('is-dragging'));
    dropZone.addEventListener('drop', event => {
      event.preventDefault();
      dropZone.classList.remove('is-dragging');
      uploadImage(event.dataTransfer.files?.[0]);
    });
    dropZone.addEventListener('keydown', event => {
      if (event.target !== dropZone || (event.key !== 'Enter' && event.key !== ' ')) return;
      event.preventDefault();
      saveEditorRange();
      fileInput.click();
    });
  });

  const options = ['', '', '', ''];
  let correctOption = 1;
  const optionBox = document.getElementById('opts');
  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, character => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    })[character]);
  }
  function drawOptions() {
    optionBox.innerHTML = options.map((option, index) => `<div class="op ${index === correctOption ? 'sel' : ''}" data-i="${index}"><label class="option-label"><input type="radio" name="correct-option" ${index === correctOption ? 'checked' : ''}> Option ${index + 1}</label><div class="option-editor"><textarea class="option-body" placeholder="Enter option ${index + 1} text...">${escapeHtml(option)}</textarea></div></div>`).join('');
    const answerText = options[correctOption].trim();
    document.getElementById('ans').textContent = `Option ${correctOption + 1}${answerText ? ` (${answerText})` : ''}`;
  }
  optionBox.addEventListener('click', event => {
    const option = event.target.closest('.op');
    if (option && !event.target.closest('.option-editor')) {
      correctOption = Number(option.dataset.i);
      drawOptions();
    }
  });
  optionBox.addEventListener('input', event => {
    const editor = event.target.closest('.option-body');
    if (editor) options[Number(event.target.closest('.op').dataset.i)] = editor.value;
  });
  drawOptions();

  if (existingQuestion) {
    const questionEditor = document.querySelector('.edit-question-card .body');
    questionEditor.innerHTML = existingQuestion.questionHtml || '';
    if (!existingQuestion.questionHtml) questionEditor.textContent = existingQuestion.text || '';
    document.querySelector('.edit-question-card .body.e').innerHTML = existingQuestion.explanationHtml || '';
    (existingQuestion.options || []).forEach((option, index) => { options[index] = option; });
    correctOption = typeof existingQuestion.answer === 'number' ? existingQuestion.answer : correctOption;
    const status = document.getElementById('question-status');
    if (status && existingQuestion.status) status.value = existingQuestion.status;
    drawOptions();
  }

  function saveQuestion(status) {
    const currentSubject = subjectSelect.value;
    const currentTopic = topic || (hasQuestionContext ? '' : topicSelect.value || '');
    const currentProduct = productSelect.value;
    const questionEditor = document.querySelector('.edit-question-card .body');
    const questionHtml = questionEditor?.innerHTML.trim() || '';
    const text = questionEditor?.textContent.trim() || (questionHtml ? 'Image-based question' : '');
    const explanationHtml = document.querySelector('.edit-question-card .body.e')?.innerHTML.trim() || '';
    const savedOptions = options.map(option => option.trim());
    if (currentSubject && questionHtml) {
      let questions;
      try {
        questions = JSON.parse(window.sessionStorage.getItem('fmge-question-bank-questions') || '[]');
      } catch (error) {
        console.error('Could not load saved questions before saving.', error);
        window.alert('Saved questions could not be loaded. The current question was not saved.');
        return;
      }
      if (!Array.isArray(questions)) {
        console.error('Saved Question Bank questions must be stored as an array.');
        window.alert('Saved questions could not be loaded. The current question was not saved.');
        return;
      }
      const item = { product: currentProduct, productId, subject: currentSubject, topic: currentTopic, text, questionHtml, explanationHtml, status, options: savedOptions, answer: correctOption };
      if (isEditing) questions[Number(editIndex)] = Object.assign(questions[Number(editIndex)] || {}, item);
      else questions.push(item);
      try {
        window.sessionStorage.setItem('fmge-question-bank-questions', JSON.stringify(questions));
      } catch (error) {
        console.error('Could not save the question. Browser storage may be full.', error);
        window.alert('The question could not be saved. Remove an image or use smaller images, then try again.');
        return;
      }
      try {
        const tests = JSON.parse(window.sessionStorage.getItem('fmge-question-bank-tests') || '[]');
        const subjects = JSON.parse(window.sessionStorage.getItem('fmge-question-bank-subjects') || '[]');
        if (!Array.isArray(tests) || !Array.isArray(subjects)) throw new TypeError('Question Bank tests and subjects must be arrays.');
        tests.forEach(test => {
          const testSubject = subjects.find(subjectItem => subjectItem.id === test.subjectId);
          if (!testSubject) return;
          const testQuestions = questions.filter(question =>
            question.productId === test.productId &&
            question.subject === testSubject.name &&
            (test.topic ? question.topic === test.topic : !question.topic)
          );
          test.totalQuestions = testQuestions.length;
          test.totalMarks = test.totalQuestions * (Number(test.marksPerQuestion) || 0);
        });
        window.sessionStorage.setItem('fmge-question-bank-tests', JSON.stringify(tests));
      } catch (error) {
        console.error('The question was saved, but test totals could not be updated.', error);
        window.alert('The question was saved, but test totals could not be updated. Review Question Bank test data.');
      }
    }
    const query = new URLSearchParams({ productId, product: currentProduct, subject: currentSubject });
    if (currentTopic) query.set('topic', currentTopic);
    window.location.hash = `fmge-question-bank?${query.toString()}`;
  }
  document.getElementById('save-question-draft').onclick = () => saveQuestion('Draft');
  document.getElementById('publish-question').onclick = () => saveQuestion('Active');
}

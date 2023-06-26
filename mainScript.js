updateSubitems('item1');

function updateContent(image, text) {
    document.getElementById('prompt-result').innerHTML = '<p>' + text + '</p>';

    var mainText = extractTextFromSpan(text);
    updatePrompt(mainText);

    document.getElementById('image-result').innerHTML = '<img src="Images/' + image + '">';

}

function updatePrompt(text) {
    var inputField = document.getElementById('input');
    inputField.value = text;
}

function updateSubitems(item) {
    // Скройте все subitem
    var subitems = document.getElementsByClassName('subitems');
    for (var i = 0; i < subitems.length; i++) {
        subitems[i].style.display = 'none';
    }
   
    
    // Отобразите только subitem для выбранного item
    var selectedSubitems = document.getElementById(item);
    selectedSubitems.style.display = 'block';
}

function editPrompt() {
    
    var text = document.getElementById('prompt-result').innerText;
    document.getElementById('input').value = text;
    
    document.getElementById('prompt-result').innerHTML = '<span>' + text + '</span>';
}

function extractTextFromSpan(text) {
    var spanPattern = /<span>(.*?)<\/span>/; // Регулярное выражение для извлечения содержимого блока <span>
    var match = text.match(spanPattern);
    var extractedText = match && match[1] ? match[1] : ''; // Извлекаем содержимое блока <span>
    return extractedText;
}

var inputField = document.getElementById('input');
var promptText = document.getElementById('prompt-result').innerHTML;
var dynamicText = extractTextFromSpan(promptText);

inputField.addEventListener('input', function(event){
    var enteredText = event.target.value;
    dynamicText = enteredText;
    replaceTextInSpan(dynamicText);
})


function replaceTextInSpan(newText) {
  var promptResult = document.getElementById('prompt-result');
  var updatedText = promptResult.innerHTML.replace(/<span>.*?<\/span>/g, '<span>' + ' ' + newText + '</span>');
  promptResult.innerHTML = updatedText;
}
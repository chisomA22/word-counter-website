window.addEventListener('DOMContentLoaded',()=>{
   const textarea = document.getElementById('input-text')
   const wordCountDisplay = document.getElementById('word-count')
   const CharacterCountDisplay = document.getElementById('Character-count')
   const uniqueWordsDisplay = document.getElementById('Unique-words')

   textarea.addEventListener('input',()=>{
    const text = textarea.value.trim();
    const words = text === '' ? 0 : text.split(/\s+/).length;
    const characters = text.length;
    const uniquewords = new Set(text.match(/\b\w+\b/g)).size;

    wordCountDisplay.innerHTML = `word count: ${words}`;
    CharacterCountDisplay.innerHTML = `Character count (including spaces): ${characters}`;
    uniqueWordsDisplay.innerHTML = `Unique words: ${uniquewords}`;
    
   });



});
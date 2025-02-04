let text_area=document.getElementById('text')
let wordCountEle=document.getElementById('word-count')
let charCountEle=document.getElementById('char-count')

text_area.addEventListener('input',()=>{
    let content=text_area.value;
    charCountEle.innerText=content.length;
    let words=content.split(' ').length
    wordCountEle.innerText=words

})
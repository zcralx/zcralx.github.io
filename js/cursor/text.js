

const phrasesAndColors = [
  { text: '你好啊', color: '#2F7FC1' },
  { text: '欢迎来到我的博客', color: '#A9B8C6' },
  { text: 'Click!', color: '#0000FF' },
  { text: '杜海洋是傻狗', color: '#FAAAAAA' },
  { text: '人活着就是为了樱岛麻衣！', color: '#FBBBBB' },
  { text: '朝朝如念', color: '#2FB2B4' },
  { text: 'Again-四月是你的谎言', color: '#0909DC' },
  { text: '火灵儿是我的', color: '#4AF111' },
];


function createRandomPhraseAtMousePosition(event) {
  const randomIndex = Math.floor(Math.random() * phrasesAndColors.length);
  const { text, color } = phrasesAndColors[randomIndex];

  const phraseElement = document.createElement('span');
  const rect = document.documentElement.getBoundingClientRect();
  const mouseX = event.clientX - rect.left; 
  const mouseY = event.clientY - rect.top; 
  phraseElement.textContent = text;
  phraseElement.style.position = 'absolute';
  //phraseElement.style.left = event.clientX + 'px';
  //phraseElement.style.top = event.clientY + 'px';
  phraseElement.style.left = mouseX + 'px';
  phraseElement.style.top = mouseY + 'px';
  phraseElement.style.color = color;
  phraseElement.style.fontSize = '20px'; 
  phraseElement.style.fontFamily = 'Arial, sans-serif'; 
  phraseElement.style.whiteSpace = 'nowrap'; 
  phraseElement.style.opacity = '0'; 

  
  phraseElement.style.transition = 'opacity 0.5s ease-in-out';



  document.body.appendChild(phraseElement);

  
  setTimeout(() => {
    phraseElement.style.opacity = '1';
  }, 10); 

  setTimeout(() => {
    phraseElement.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(phraseElement);
    }, 500); 
  }, 2000); 
}


document.addEventListener('click', createRandomPhraseAtMousePosition);

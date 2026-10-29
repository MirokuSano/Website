let score = 0;

const draggables = document.querySelectorAll('.draggable-item');
const dropZone = document.getElementById('dropZone');
const characterPool = document.getElementById('characterPool');
const scoreDisplay = document.getElementById('score');
const messageDisplay = document.getElementById('message');
const resetBtn = document.getElementById('resetBtn');


draggables.forEach((item) => {
  item.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
  });
});


dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.classList.add('drag-over');
});

dropZone.addEventListener('dragleave', () => {
  dropZone.classList.remove('drag-over');
});


dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropZone.classList.remove('drag-over');

  const id = e.dataTransfer.getData('text/plain');
  const draggedElement = document.getElementById(id);

  if (draggedElement) {
    
    dropZone.appendChild(draggedElement);

    
    const canBeatGoku = draggedElement.getAttribute('data-can-beat');

    if (canBeatGoku === 'true') {
      score += 1; 
      scoreDisplay.textContent = score;
      messageDisplay.style.color = 'green';
      messageDisplay.textContent = 'Correct! They beat Goku! (Impossible)';
    } else {
      messageDisplay.style.color = 'red';
      messageDisplay.textContent = 'Wrong! Goku solos all fiction!';
    }
  }
});


resetBtn.addEventListener('click', () => {
  score = 0;
  scoreDisplay.textContent = score;
  messageDisplay.textContent = '';
  
  
  draggables.forEach((item) => {
    characterPool.appendChild(item);
  });
});
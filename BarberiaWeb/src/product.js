const lis = document.querySelectorAll('main li');

lis.forEach(li => {
  li.addEventListener('mouseover', () => {
    li.style.borderColor = 'gold';
    li.style.boxShadow = '0 0 10px gold';
  });

  li.addEventListener('mouseout', () => {
    li.style.borderColor = 'black';
    li.style.boxShadow = 'none';
  });
});
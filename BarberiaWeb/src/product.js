const lis = document.querySelectorAll('main li');

lis.forEach(li => {
  li.addEventListener('mouseover', () => {
    li.style.borderColor = 'gold';
    li.style.boxShadow = '0 0 10px gold';
    li.style.transform = 'scale(1.05)';
  });

  li.addEventListener('mouseout', () => {
    li.style.borderColor = 'black';
    li.style.boxShadow = 'none';
    li.style.transform = 'scale(1)';
  });

  lis.forEach(li => {
    li.addEventListener('click', () => {
      li.style.borderColor = '#088c19';
      li.style.boxShadow = 'none';
    });
  });

});
(function () {
  let elRollBox = document.querySelector('.rollbox-container');
  let elRollContainer = document.querySelector('.products-roll');
  let isDown = false;

  elRollBox.addEventListener('mousedown', function (e) {
      elRollBox.style.animation = 'none';
      isDown = true;
      elRollContainer.style.cursor= 'grabbing';
      elRollBox.style.cursor= 'grabbing';
  });

    document.addEventListener('mousemove', function (e) {
        if(isDown)
            elRollBox.style.transform = 'RotateY('+e.clientX+'deg)';
    });

    document.addEventListener('mouseup', function () {
        if(isDown)
        {
            elRollBox.style.animation = 'roll 15s linear infinite';
            isDown = false;
            elRollContainer.style.cursor= 'default';
            elRollBox.style.cursor= 'grab';
        }
    });

}());

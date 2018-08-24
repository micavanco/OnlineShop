(function () {
    const elPass = document.getElementById('password');
    const elSPass = document.getElementById('same-password');
    let elPassWarning = document.querySelector('.pass-warning');
    let elPassValueLine = document.querySelector('.pass-line');
    let elPassValue = document.querySelector('.pass-value');
    let isNumber = false;
    let lineWidth = 2;
    let linePrev = 0;

    elPass.addEventListener('keydown', function () {
        for(let i = 0; i < elPass.value.length ; i++)
            if(elPass.value.charCodeAt(i) > 47 && elPass.value.charCodeAt(i) < 58 )
                {isNumber = true; break;}
                else isNumber = false;
        if(elPass.value.length < 22)
        {
            if(linePrev < elPass.value.length)
                elPassValueLine.style.width = (lineWidth+=11).toString()+'px';
            else
                elPassValueLine.style.width = (lineWidth-=11).toString()+'px';
        }


        if(elPass.value.length > 5 && isNumber)
        {
            elPassWarning.style.display = 'none';
            elPass.style.borderColor = '#dddddd';
            elPassValue.style.display = 'block';
            elPassValueLine.style.display = 'block';
            if(elPass.value.length < 8)
            {
                elPassValue.style.color = 'red';
                elPassValueLine.style.backgroundColor = 'red';
                elPassValue.innerText = 'Weak password!';
            }else if(elPass.value.length > 7 && elPass.value.length < 12)
            {
                elPassValue.style.color = 'black';
                elPassValueLine.style.backgroundColor = '#ffcf39';
                elPassValue.innerText = 'Decent password!';
            }
            else if(elPass.value.length > 11 && elPass.value.length < 16)
            {
                elPassValue.style.color = 'black';
                elPassValueLine.style.backgroundColor = 'green';
                elPassValue.innerText = 'Good password!';
            }
        }else
        {
            elPassWarning.style.display = 'block';
            elPassWarning.innerHTML = 'Password must contains at least 6 characters and one number!';
            elPass.style.borderColor = 'red';
            elPassWarning.style.top = '295px';
            elPassValue.style.display = 'none';
            elPassValueLine.style.display = 'none';
        }
        linePrev = elPass.value.length;
    });

    elSPass.addEventListener('keydown', function () {
        if(elPass.value === elSPass.value)
        {
            elPassWarning.style.display = 'none';
            elSPass.style.borderColor = '#dddddd';
        }else
        {
            elPassWarning.style.display = 'block';
            elPassWarning.innerHTML = 'Passwords are not the same!';
            elSPass.style.borderColor = 'red';
            elPassWarning.style.top = '370px';
        }
    });

    elPass.addEventListener('blur', function () {
        if(elPass.value === elSPass.value)
        {
            elPassWarning.style.display = 'none';
            elSPass.style.borderColor = '#dddddd';
        }else
        {
            elPassWarning.style.display = 'block';
            elPassWarning.innerHTML = 'Passwords are not the same!';
            elSPass.style.borderColor = 'red';
            elPassWarning.style.top = '370px';
        }
    });

    elSPass.addEventListener('blur', function () {
        if(elPass.value.length > 5 && isNumber)
        {
            elPassWarning.style.display = 'none';
            elPass.style.borderColor = '#dddddd';
        }else
        {
            elPassWarning.style.display = 'block';
            elPassWarning.innerHTML = 'Password must contains at least 6 characters and one number!';
            elPass.style.borderColor = 'red';
            elPassWarning.style.top = '295px';
        }
    });

}());
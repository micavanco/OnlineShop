(function () {
    const elHeader = document.getElementById('header');
    elHeader.style.display = 'none';
    elHeader.innerHTML = '<ul>\n' +
        '            <li><a href="#" class="cart"></a></li>\n' +
        '            <li class="logo"><a href="#">Olech</a></li>\n' +
        '            <li><a href="users/login.html" class="login login2">Sign in</a></li>\n' +
        '            <li><a href="#" class="shop shop2">Shop</a></li>\n' +
        '            <li>\n' +
    '                <input class="search-button" type="button" name="search-button" >\n' +
    '                <input class="search-field2" type="text" name="search" placeholder="Search Product..." size="30" onfocus="this.placeholder=\'\'" onblur="this.placeholder=\'Search Product...\'">\n' +
    '            </li>\n' +
        '        </ul>';
    let isOn = true;

    document.addEventListener('scroll', function () {

        if(window.top.pageYOffset > 560 && isOn)
        {
            elHeader.style.display = 'block';
            elHeader.classList.add('fade-in');

            setTimeout(function () {
                elHeader.classList.remove('fade-in');
            }, 2000);
            isOn = false;
        }else if(window.top.pageYOffset <= 560)
        {
            elHeader.style.display = 'none';
            isOn = true;
        }


    });

}());
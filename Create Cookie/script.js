window.onload = function () {
    let keyValue = 'login=32adsff2asd';

    let now = new Date();
    now.setTime(now.getTime() + 24 * 60 * 60 * 1000);

    let expires = 'expires=' + now.toUTCString();

    let cookie = keyValue + ';' + expires;

    //create cookie
    document.cookie = cookie;
}
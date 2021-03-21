const HTML_CLOCK = document.querySelector("h1");

function clock(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    HTML_CLOCK.innerText = `${hour<10?`0${hour}`:hour
}:${minute<10? `0${minute}`:minute
}:${second<10? `0${second}`:second}`;
}

setInterval(clock, 1000);
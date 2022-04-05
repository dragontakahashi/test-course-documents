'use strict'

const info = document.querySelectorAll(`input[type='checkbox']`);
const ans = document.querySelectorAll(`span.checkAns`)

for (let i = 0; i < info.length; i++){
    let annaibun = document.getElementsByTagName("h1");
    info[i].addEventListener('change',() => {
        if (annaibun.length> 0){ //表示のリセット
            annaibun.remove();
        }
        const openInformation = document.createElement("h1");
        openInformation.textContent = "他、不明点等ございましたら、遠慮なくお問い合わせください!"
        document.body.appendChild(openInformation);
    });
}


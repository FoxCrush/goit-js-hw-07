const textFieldOutputEl = document.querySelector('#text');
const fontSizeControlEl = document.querySelector('#font-size-control');
const ChangefontSize = () => {
    let normalFontSize = fontSizeControlEl.value;

    if (fontSizeControlEl.value < 5) {
        normalFontSize = 5;
    }
    else if (fontSizeControlEl.value < 30) {
        normalFontSize = fontSizeControlEl.value * 1.5;
    }
    else if (fontSizeControlEl.value > 30) {
        normalFontSize = fontSizeControlEl.value * 0.5;
    }

    textFieldOutputEl.style.fontSize = `${normalFontSize}px`;
}

fontSizeControlEl.addEventListener('input', ChangefontSize);

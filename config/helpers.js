exports.enterText = (locator, selector, text) => {
    switch (locator) {
        case 'placeholder':
            $(`input[placeholder="${selector}"]`).waitForDisplayed();
            $(`input[placeholder="${selector}"]`).clearValue();
            for (let i = 0; i < text.length; i++) {
                browser.pause(100);
                $(`input[placeholder="${selector}"]`).addValue(text[i]);
            }break;
        case 'id':
            $(`${selector}`).waitForDisplayed();
            $(`${selector}`).clearValue();
            for (let i = 0; i < text.length; i++) {
                browser.pause(100);
                $(`${selector}`).addValue(text[i]);
            }break;
    }
}

exports.select = (selector, text) => {
    $(`#${selector}`).waitForDisplayed();
    $(`#${selector}`).selectByVisibleText(text);
}

exports.waitClick = (selector) => {
    $(selector).waitForDisplayed();
    $(selector).waitForEnabled();
    $(selector).click();
}

exports.buttonClick = (selector) => {

    $(`button=${selector}`).waitForDisplayed();
    $(`button=${selector}`).waitForEnabled();
    $(`button=${selector}`).click();
}
const fontSelect = document.querySelector('article.settings select[name="font-family"]'),
remainderSelect = document.querySelector('article.settings select[name="font-size"]');

fontSelect.addEventListener('change', () => {
    root.setProperty('--ff', fontSelect.options[fontSelect.selectedIndex].style.fontFamily);
});

remainderSelect.addEventListener('change', () => {
    root.setProperty('--f-remainder', remainderSelect.options[remainderSelect.selectedIndex].value)
});
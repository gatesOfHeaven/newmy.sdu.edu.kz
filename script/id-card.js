//dynamic behavior
const card = document.getElementById('id-card'),
newCardSwitch = document.querySelector('#generation-switch-container input[type="checkbox"]');
let isDragging = false, offsetX, offsetY;

card.addEventListener('mousedown', (event) => {
    if (card.style.position == 'relative') return;
    isDragging = true;
    offsetX = event.clientX - card.getBoundingClientRect().left;
    offsetY = event.clientY - card.getBoundingClientRect().top;
    card.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (event) => {
    if (card.style.position == 'relative') return;
    if (isDragging) {
        const x = event.clientX - offsetX;
        const y = event.clientY - offsetY;
        card.style.left = x + 'px';
        card.style.top = y + 'px';
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    card.style.cursor = 'grab';
});


//buttons
const cardSwitchLbl = document.querySelector('header h2'),
isVisible = document.querySelector('header .switch input[type=checkbox]'),    
cardClose = document.querySelector('#id-card nav span.close'),
cardCollapse = document.querySelector('#id-card nav span.collapse'),
cardOpen = document.querySelector('#id-card nav span.open');

cardSwitchLbl.addEventListener('click', () => {
    isVisible.checked = !isVisible.checked;
    if (isVisible.checked)
        card.style.display = 'flex';
    else
        card.style.display = 'none';
});

cardClose.addEventListener('click', () => {
    card.style.display = 'none';
    isVisible.checked = false;
});

cardCollapse.addEventListener('click', () => {
    if (card.style.position == 'fixed') {
        card.style.position = 'relative';
        card.style.left = 'initial';
        card.style.top = 'initial';
        card.style.marginLeft = '5px';
    } else {
        card.style.position = 'fixed';
        card.style.marginLeft = '0';
    }
});

cardOpen.addEventListener('click', () => {
    document.querySelector('button.home').click();
});


//sdu-27
newCardSwitch.addEventListener('click', () => {
        if (newCardSwitch.checked) {
            card.style.backgroundImage = 'url(client/half-shanyrak.png)';
            card.style.backgroundColor = '#25468b';
            card.querySelector('nav').style.backgroundColor = 'transparent';
            card.querySelector('h1.sdu-26-id').style.display = 'none';
            card.querySelector('h1.sdu-27-id').style.display = 'inline';
            card.querySelector('h3.speciality').style.color = '#e4c202';
        } else {
            card.style.backgroundImage = 'none';
            card.style.backgroundColor = '#a43232';
            card.querySelector('nav').style.backgroundColor = '#242a3d';
            card.querySelector('h1.sdu-26-id').style.display = 'inline';
            card.querySelector('h1.sdu-27-id').style.display = 'none';
            card.querySelector('h3.speciality').style.color = 'white';
        }
    });
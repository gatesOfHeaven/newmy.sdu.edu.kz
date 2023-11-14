let currentBtn = document.querySelector('aside.desktop button.selected'),
currentPage = document.querySelector('article.' + currentBtn.getAttribute('data-action')),
currentSubHomePage = document.querySelector('article.subhome.selected');

document.querySelectorAll('aside.desktop button').forEach(
    btn => btn.addEventListener('click', () => {
        if (btn === currentBtn) return;

        currentBtn.classList.remove('selected');
        currentBtn.querySelectorAll('.svg-color').forEach(svgPath => {
            svgPath.setAttribute('stroke', 'var(--icons-theme)')
        });
        currentPage.style.display = 'none';

        if (currentBtn == document.querySelector('button.home'))
            currentSubHomePage.style.display = 'none';
        if (currentBtn == document.querySelector('button.other'))
            rulesPage.style.display = 'none';


        btn.classList.add('selected');
        currentBtn = btn;
        currentBtn.querySelectorAll('.svg-color').forEach(svgPath => {
            svgPath.setAttribute('stroke', 'white')
        });
        currentPage = document.querySelector('article.' + currentBtn.getAttribute('data-action'));
        currentPage.style.display = 'flex';

        if (currentBtn == document.querySelector('button.home'))
            currentSubHomePage.style.display = 'flex';
        if (currentBtn == document.querySelector('button.other') && rulesBtnIsOn)
            rulesPage.style.display = 'flex';
    })
);



document.querySelectorAll('aside.mobile button').forEach(
    btn => btn.addEventListener('click', () => {
        currentBtn = document.querySelector('aside.mobile button.selected');
        currentBtn.classList.remove('selected');
        currentBtn.querySelectorAll('.svg-color').forEach(svgPath => {
            svgPath.setAttribute('stroke', 'var(--icons-theme)')
        });

        currentPage.style.display = 'none';

        if (currentBtn == document.querySelector('aside.mobile button.home'))
            currentSubHomePage.style.display = 'none';
        if (currentBtn == document.querySelector('aside.mobile button.other'))
            rulesPage.style.display = 'none';


        btn.classList.add('selected');
        currentBtn = btn;
        currentBtn.querySelectorAll('.svg-color').forEach(svgPath => {
            svgPath.setAttribute('stroke', 'white')
        });
        currentPage = document.querySelector('article.' + currentBtn.getAttribute('data-action'));
        currentPage.style.display = 'flex';

        if (currentBtn == document.querySelector('aside.mobile button.home'))
            currentSubHomePage.style.display = 'flex';
        if (currentBtn == document.querySelector('aside.mobile button.other') && rulesBtnIsOn)
            rulesPage.style.display = 'flex';
        
    })
);
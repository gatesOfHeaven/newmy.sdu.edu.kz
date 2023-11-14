//HOME-TABS

let currentSubHomeBtn = document.querySelector('button.subhome.selected');


document.querySelectorAll('button.subhome').forEach(
    btn => btn.addEventListener('click', () => {
        if (btn === currentSubHomeBtn) return;

        currentSubHomeBtn.classList.remove('selected');
        currentSubHomeBtn.querySelectorAll('.svg-color').forEach(svgPath => {
            svgPath.setAttribute('stroke', 'var(--icons-theme)')
        });
        currentSubHomePage.style.display = 'none';

        btn.classList.add('selected');
        currentSubHomeBtn = btn;
        currentSubHomeBtn.querySelectorAll('.svg-color').forEach(svgPath => {
            svgPath.setAttribute('stroke', 'white')
        });
        currentSubHomePage = document.querySelector('article.' + currentSubHomeBtn.getAttribute('data-action'));
        currentSubHomePage.style.display = 'flex';
    })
);


document.querySelectorAll('#from-aside-to-subhome .switch input').forEach(
    input => input.addEventListener('click', () => {
        const page = input.getAttribute('data-action');
        if (input.checked) {
            document.querySelector('aside button.' + page).style.display = 'none';
            document.querySelector('button.subhome.' + page).style.display = 'flex';
            document.querySelector('article.' + page).classList.add('subhome');
        } else {
            document.querySelector('aside button.' + page).style.display = 'flex';
            document.querySelector('button.subhome.' + page).style.display = 'none';
            document.querySelector('article.' + page).classList.remove('subhome');
            if (currentSubHomePage == document.querySelector('article.' + page))
                currentSubHomePage.style.display = 'none';
        }
    })
);


//RULES-TABS

const rulesBtn = document.querySelector('article.other button.rules'),
rulesPage = document.querySelector('article.rules');
let rulesBtnIsOn = false;


rulesBtn.addEventListener('click', () => {
    rulesBtnIsOn = !rulesBtnIsOn;
    if (rulesBtnIsOn) {
        rulesPage.style.display = 'flex';
        rulesBtn.classList.add('selected');
        rulesBtn.querySelectorAll('.svg-color').forEach(
            svgPath => svgPath.setAttribute('stroke', 'white')
        );
    } else {
        rulesPage.style.display = 'none';
        rulesBtn.classList.remove('selected');
        rulesBtn.querySelectorAll('.svg-color').forEach(
            svgPath => svgPath.setAttribute('stroke', 'var(--icons-theme)')
        );
    }
});



let currentSubRulesBtn = rulesPage.querySelector('button.academic-rules'),
currentSubRulesPage = rulesPage.querySelector('nav.academic-rules');

rulesPage.querySelectorAll('nav.content button').forEach(
    btn => btn.addEventListener('click', () => {
        if (btn === currentSubRulesBtn) return;

        currentSubRulesBtn.classList.remove('selected');
        currentSubRulesBtn.querySelectorAll('.svg-color').forEach(svgPath => {
            svgPath.setAttribute('stroke', 'var(--icons-theme)')
        });
        currentSubRulesPage.style.display = 'none';

        btn.classList.add('selected');
        currentSubRulesBtn = btn;
        currentSubRulesBtn.querySelectorAll('.svg-color').forEach(svgPath => {
            svgPath.setAttribute('stroke', 'white')
        });
        currentSubRulesPage = rulesPage.querySelector('nav.' + currentSubRulesBtn.getAttribute('data-action'));
        currentSubRulesPage.style.display = 'flex';
    })
);
const root = document.documentElement.style,
pallete = getComputedStyle(document.documentElement),
themeSwitchContainer = document.getElementById('theme-switch-container'),
darkThemeSwitch = themeSwitchContainer.querySelector('input[type="checkbox"]')
blackHoleSvg = themeSwitchContainer.querySelector('svg');

let blackHoleRotations = 0;


darkThemeSwitch.addEventListener('click', () => {
    blackHoleRotations -= 720;
    blackHoleSvg.style.transform = 'rotate(' + blackHoleRotations + 'deg)';
    themeIsChanged();
});

function themeIsChanged() {
    if (darkThemeSwitch.checked) {
        root.setProperty('--main', '#27272a');           //zinc-800
        root.setProperty('--main-inner', '#18181b');     //zinc-900
        root.setProperty('--body', '#09090b');            //zinc-950
        root.setProperty('--shadow', 'transparent');
        root.setProperty('--icons-theme', pallete.getPropertyValue('--c-200'));
        root.setProperty('--text', '#dddddd');
        root.setProperty('--text-gray', '#a1a1aa');       //zinc-400
        root.setProperty('--sign-out', 'rgb(185 28 28)'); //red-700
    } else {
        root.setProperty('--body', pallete.getPropertyValue('--c-50'));
        root.setProperty('--main', pallete.getPropertyValue('--c-50-gray'));
        root.setProperty('--main-inner', 'white');
        root.setProperty('--shadow', pallete.getPropertyValue('--c-200'));
        root.setProperty('--icons-theme', pallete.getPropertyValue('--c-500'));
        root.setProperty('--text', 'black');
        root.setProperty('--text-gray', '#71717a');
        root.setProperty('--sign-out', 'rgb(248 113 113)');
    }
}


document.getElementById('radio-red').addEventListener('change', () => {
    root.setProperty('--c-50', '#fef2f2');
    root.setProperty('--c-50-gray', '#eee2e2');
    root.setProperty('--c-200', 'rgb(254 202 202)');
    root.setProperty('--c-500', 'rgb(239 68 68)');
    root.setProperty('--c-500-after-3', 'rgb(234 179 8)');
    themeIsChanged();
});

document.getElementById('radio-orange').addEventListener('change', () => {
    root.setProperty('--c-50', '#fff7ed');
    root.setProperty('--c-50-gray', '#eee7ed');
    root.setProperty('--c-200', 'rgb(254 215 170)');
    root.setProperty('--c-500', 'rgb(249 115 22)');
    root.setProperty('--c-500-after-3', 'rgb(132 204 22)');
    themeIsChanged();
});

document.getElementById('radio-amber').addEventListener('change', () => {
    root.setProperty('--c-50', '#fffbeb');
    root.setProperty('--c-50-gray', '#eeebeb');
    root.setProperty('--c-200', 'rgb(253 230 138)');
    root.setProperty('--c-500', 'rgb(245 158 11)');
    root.setProperty('--c-500-after-3', 'rgb(34 197 94)');
    themeIsChanged();
});

document.getElementById('radio-yellow').addEventListener('change', () => {
    root.setProperty('--c-50', '#fefce8');
    root.setProperty('--c-50-gray', '#eeece8');
    root.setProperty('--c-200', 'rgb(254 240 138)');
    root.setProperty('--c-500', 'rgb(234 179 8)');
    root.setProperty('--c-500-after-3', 'rgb(16 185 129)');
    themeIsChanged();
});

document.getElementById('radio-lime').addEventListener('change', () => {
    root.setProperty('--c-50', '#f7fee7');
    root.setProperty('--c-50-gray', '#e7eee7');
    root.setProperty('--c-200', 'rgb(217 249 157)');
    root.setProperty('--c-500', 'rgb(132 204 22)');
    root.setProperty('--c-500-after-3', 'rgb(20 184 166)');
    themeIsChanged();
});

document.getElementById('radio-green').addEventListener('change', () => {
    root.setProperty('--c-50', '#f0fdf4');
    root.setProperty('--c-50-gray', '#e0ede4');
    root.setProperty('--c-200', 'rgb(187 247 208)');
    root.setProperty('--c-500', 'rgb(34 197 94)');
    root.setProperty('--c-500-after-3', 'rgb(6 182 212)');
    themeIsChanged();
});

document.getElementById('radio-emerald').addEventListener('change', () => {
    root.setProperty('--c-50', '#ecfdf5');
    root.setProperty('--c-50-gray', '#ecede5');
    root.setProperty('--c-200', 'rgb(167 243 208)');
    root.setProperty('--c-500', 'rgb(16 185 129)');
    root.setProperty('--c-500-after-3', 'rgb(14 165 233)');
    themeIsChanged();
});

document.getElementById('radio-teal').addEventListener('change', () => {
    root.setProperty('--c-50', '#f0fdfa');
    root.setProperty('--c-50-gray', '#e0edea');
    root.setProperty('--c-200', 'rgb(153 246 228)');
    root.setProperty('--c-500', 'rgb(20 184 166)');
    root.setProperty('--c-500-after-3', 'rgb(59 130 246)');
    themeIsChanged();
});

document.getElementById('radio-cyan').addEventListener('change', () => {
    root.setProperty('--c-50', '#ecfeff');
    root.setProperty('--c-50-gray', '#eceeee');
    root.setProperty('--c-200', 'rgb(165 243 252)');
    root.setProperty('--c-500', 'rgb(6 182 212)');
    root.setProperty('--c-500-after-3', 'rgb(99 102 241)');
    themeIsChanged();
});

document.getElementById('radio-sky').addEventListener('change', () => {
    root.setProperty('--c-50', '#f0f9ff');
    root.setProperty('--c-50-gray', '#e0e9ee');
    root.setProperty('--c-200', 'rgb(186 230 253)');
    root.setProperty('--c-500', 'rgb(14 165 233)');
    root.setProperty('--c-500-after-3', 'rgb(139 92 246)');
    themeIsChanged();
});

document.getElementById('radio-blue').addEventListener('change', () => {
    root.setProperty('--c-50', '#eff6ff');
    root.setProperty('--c-50-gray', '#eee6ee');
    root.setProperty('--c-200', 'rgb(191 219 254)');
    root.setProperty('--c-500', 'rgb(59 130 246)');
    root.setProperty('--c-500-after-3', 'rgb(168 85 247)');
    themeIsChanged();
});

document.getElementById('radio-indigo').addEventListener('change', () => {
    root.setProperty('--c-50', '#eef2ff');
    root.setProperty('--c-50-gray', '#eee2ee');
    root.setProperty('--c-200', 'rgb(199 210 254)');
    root.setProperty('--c-500', 'rgb(99 102 241)');
    root.setProperty('--c-500-after-3', 'rgb(217 70 239)');
    themeIsChanged();
});

document.getElementById('radio-violet').addEventListener('change', () => {
    root.setProperty('--c-50', '#f5f3ff');
    root.setProperty('--c-50-gray', '#e5e3ee');
    root.setProperty('--c-200', 'rgb(221 214 254)');
    root.setProperty('--c-500', 'rgb(139 92 246)');
    root.setProperty('--c-500-after-3', 'rgb(236 72 153)');
    themeIsChanged();
});

document.getElementById('radio-purple').addEventListener('change', () => {
    root.setProperty('--c-50', '#faf5ff');
    root.setProperty('--c-50-gray', '#eae5ee');
    root.setProperty('--c-200', 'rgb(233 213 255)');
    root.setProperty('--c-500', 'rgb(168 85 247)');
    root.setProperty('--c-500-after-3', 'rgb(239 68 68)');
    themeIsChanged();
});

document.getElementById('radio-fuchsia').addEventListener('change', () => {
    root.setProperty('--c-50', '#fdf4ff');
    root.setProperty('--c-50-gray', '#ede4ee');
    root.setProperty('--c-200', 'rgb(245 208 254)');
    root.setProperty('--c-500', 'rgb(217 70 239)');
    root.setProperty('--c-500-after-3', 'rgb(249 115 22)');
    themeIsChanged();
});

document.getElementById('radio-pink').addEventListener('change', () => {
    root.setProperty('--c-50', '#fdf2f8');
    root.setProperty('--c-50-gray', '#ede2e8');
    root.setProperty('--c-200', 'rgb(251 207 232)');
    root.setProperty('--c-500', 'rgb(236 72 153)');
    root.setProperty('--c-500-after-3', 'rgb(245 158 11)');
    themeIsChanged();
});

document.getElementById('radio-lightgray').addEventListener('change', () => {
    root.setProperty('--c-50', '#f9fafb');
    root.setProperty('--c-50-gray', '#e9eaeb');
    root.setProperty('--c-200', 'rgb(229 231 235)');
    root.setProperty('--c-500', 'rgb(107 114 128)');
    root.setProperty('--c-500-after-3', 'rgb(0 0 0)');
    themeIsChanged();
});
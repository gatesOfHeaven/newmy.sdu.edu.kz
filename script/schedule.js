const now = new Date(),
scheduleTable = document.querySelector('article.schedule table'),
almatyOptions = { timeZone: 'Asia/Almaty', hour: 'numeric' },
currentHour = now.toLocaleString('default', almatyOptions),
today = now.getDay(),
scheduleMore = document.querySelector('article.schedule input[type="checkbox"]');

if (today > 0 && currentHour > 8 && currentHour < 20) {
    const currentLesson = scheduleTable.rows[currentHour - 8].cells[today];
    currentLesson.classList.add('selected');
    
    if (currentLesson.querySelector('h4.course-code').textContent.trim() != '') {
        const currentLessonHome = currentLesson.cloneNode(true);
        const profileContainer = document.getElementById('stud-img-container');
        currentLessonHome.style.position = 'relative';
        currentLessonHome.style.marginTop = '5px';
        profileContainer.appendChild(currentLessonHome);
    }
}

scheduleMore.addEventListener('click', () => {
    if (scheduleMore.checked)
        document.querySelectorAll('h4.course-title, p.instructor').forEach(lbl => lbl.style.display = 'inline');
    else
        document.querySelectorAll('h4.course-title, p.instructor').forEach(lbl => lbl.style.display = 'none');
});


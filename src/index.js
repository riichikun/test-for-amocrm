/* function changind inner text */

function changeInnerText(elemId, smallSizeText, bigSizeText) {
    if (window.innerWidth > 767) {
        document.getElementById(elemId).textContent = bigSizeText;
    }
    else document.getElementById(elemId).textContent = smallSizeText;
}

function onSizeChange() {
    changeInnerText('changing-text-1', 'Skype аудит', 'Виджеты')
    changeInnerText('changing-text-2', '30 виджетов', 'Dashboard')
    changeInnerText('changing-text-3', 'Dashboard', 'Skype Аудит')
    changeInnerText('changing-text-4', 'Месяц аmoCRM', '35 дней')
    changeInnerText('changing-text-5', 'Благодарность клиентов', 'Кейсы')
    changeInnerText('changing-text-6', 'Кейсы', 'Благодарственные письма')
}



document.addEventListener("DOMContentLoaded", () => {

    onSizeChange()
    window.addEventListener('resize', onSizeChange)
})

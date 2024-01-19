
window.onload = function() {
    const testClass = document.getElementsByClassName('test');
    const testResults = document.querySelectorAll('p.result')
    const testIcons = document.getElementsByClassName('icon');
    const testTitle = document.querySelectorAll('.test-title p');
    const finalResult = document.querySelector('.result-container .result');
    fetch("./data.json")
    .then(result => result.json())
    .then(data => {
        let count = 0;
        let sumScore = 0;
        data.forEach(el => {
            testClass[count].id = el.category.toLowerCase();
            testResults[count].innerHTML = el.score;
            testIcons[count].src = el.icon;
            testTitle[count].innerHTML = el.category;
            sumScore += el.score;
            count++;
        });
        finalResult.innerHTML = Math.floor(sumScore/4);
    })

};
allProj = document.querySelectorAll('.all');
jsProj = document.querySelectorAll('.js');
cppProj = document.querySelectorAll('.cpp');

allBtn = document.getElementById('allBtn');
jsBtn = document.getElementById('jsBtn');
cppBtn = document.getElementById('cppBtn');

allBtn.addEventListener('click', () => {

    allBtn.style.fontWeight = 'normal';
    jsBtn.style.fontWeight = 'normal';
    cppBtn.style.fontWeight = 'normal';

    allProj.forEach(items => {
        items.style.display = 'block';
    });
})

jsBtn.addEventListener('click', () => {

    allBtn.style.fontWeight = 'normal';
    jsBtn.style.fontWeight = 'bold';
    cppBtn.style.fontWeight = 'normal';

    allProj.forEach(items => {
        items.style.display = 'none';
    });

    jsProj.forEach(items => {
        items.style.display = 'block';
    });
})

cppBtn.addEventListener('click', () => {

    allBtn.style.fontWeight = 'normal';
    jsBtn.style.fontWeight = 'normal';
    cppBtn.style.fontWeight = 'bold';

    allProj.forEach(items => {
        items.style.display = 'none';
    });

    cppProj.forEach(items => {
        items.style.display = 'block';
    });
});
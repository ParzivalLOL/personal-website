const prog_icon = document.getElementById("programming-icon");
const prog_name = document.getElementById("prog-nametag");


prog_icon.addEventListener('mouseover', () => {
    prog_name.classList.remove('hidden', 'zoomOut');
    prog_name.classList.add('visible');
});

prog_icon.addEventListener('mouseout', () => {
    prog_name.classList.remove('visible');
    prog_name.classList.add('zoomOut');
    setTimeout(() => {
        element.classList.add('hidden');
        element.classList.remove('zoomOut');
    }, 100);
});

const rob_icon = document.getElementById("robotics-icon");
const rob_name = document.getElementById("rob-nametag");


rob_icon.addEventListener('mouseover', () => {
    rob_name.classList.remove('hidden', 'zoomOut');
    rob_name.classList.add('visible');
});

rob_icon.addEventListener('mouseout', () => {
    rob_name.classList.remove('visible');
    rob_name.classList.add('zoomOut');
    setTimeout(() => {
        element.classList.add('hidden');
        element.classList.remove('zoomOut');
    }, 100);
});

const ex_icon = document.getElementById("extracurriculars-icon");
const ex_name = document.getElementById("ex-nametag");


ex_icon.addEventListener('mouseover', () => {
    ex_name.classList.remove('hidden', 'zoomOut');
    ex_name.classList.add('visible');
});

ex_icon.addEventListener('mouseout', () => {
    ex_name.classList.remove('visible');
    ex_name.classList.add('zoomOut');
    setTimeout(() => {
        element.classList.add('hidden');
        element.classList.remove('zoomOut');
    }, 100);
});
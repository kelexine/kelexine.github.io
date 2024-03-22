document.addEventListener('DOMContentLoaded', function() {
    const projectList = document.getElementById('project-list');
    const projects = [
        'treble_apollo',
        'stock2GSI',
        'kelexine',
        'kelexine.github.io',
        'android_device_tecno_kelly',
        'twrp_device_tecno_bd4h',
        'twrp_device_tecno_kelly'
    ];

    projects.forEach(project => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.setAttribute('href', `https://github.com/kelexine/${project}`);
        link.innerText = project;

        listItem.appendChild(link);
        projectList.appendChild(listItem);
    });
});

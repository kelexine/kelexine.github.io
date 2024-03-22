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
        listItem.textContent = project;
        projectList.appendChild(listItem);
    });
});

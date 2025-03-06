// Add tech stack icons
const techIcons = [
    { name: 'Android', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg' },
    { name: 'Angular', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original-wordmark.svg' },
    { name: 'Bash', src: 'https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg' },
    { name: 'Blender', src: 'https://download.blender.org/branding/community/blender_community_badge_white.svg' },
    { name: 'CSS3', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg' },
    { name: 'Electron', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg' },
    { name: 'Google Cloud', src: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg' },
    { name: 'Git', src: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' },
    { name: 'HTML5', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg' },
    { name: 'Ionic', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg' },
    { name: 'JavaScript', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
    { name: 'Linux', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg' },
    { name: 'Swift', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg' },
    { name: 'Unity', src: 'https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg' }
];

const techIconsContainer = document.querySelector('.tech-icons');

techIcons.forEach(icon => {
    const img = document.createElement('img');
    img.src = icon.src;
    img.alt = icon.name;
    img.title = icon.name;
    img.width = 40;
    img.height = 40;
    techIconsContainer.appendChild(img);
});

// Add hover effect for tech icons
document.querySelectorAll('.tech-icons img').forEach(img => {
    img.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.2)';
        this.style.transition = 'transform 0.3s';
    });
    
    img.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
}); 
let copyright_element = document.getElementById('footer-copyright');
copyright_element.innerHTML = `Copyright <i class="mdi mdi-copyright"></i> ${new Date().getFullYear()}`;

$(() => {
    typeintro();
});

const intro_text = 'Hi there. My name is Christian and I am a developer. Prepare for your mind to be blown.';
const intro_speed = 90;
let i = 0;

function typeintro() {
    $('#intro').append(intro_text.charAt(i));
    i++;
    setTimeout(typeintro, intro_speed + i);
}

const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('login_form');

    if(mode.classList.contains('moon')){
        mode.classList.remove('moon');
        mode.classList.add('sun');

        form.classList.add('dark');
        return;
    }

    mode.classList.remove('sun');
    mode.classList.add('moon');

    form.classList.remove('dark');
});
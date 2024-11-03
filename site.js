document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const sidebar = document.getElementById('menu');
    const content = document.querySelector('.content');
    const toggleButtons = document.querySelectorAll('.toggle-button');

    menuButton.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        content.classList.toggle('shift');

        if (sidebar.classList.contains('open')) {
            menuButton.style.left = '250px';
            document.body.classList.add('body-dark'); // Adiciona a classe escura ao body
            document.querySelectorAll('button:not(#menuButton)').forEach(button => {
                button.classList.add('button-dark'); // Escurece outros botões
            });
        } else {
            menuButton.style.left = '20px';
            document.body.classList.remove('body-dark'); // Remove a classe escura do body
            document.querySelectorAll('button:not(#menuButton)').forEach(button => {
                button.classList.remove('button-dark'); // Remove a classe escura dos outros botões
            });
        }
    });

    // Fecha o menu ao clicar fora dele ou no botão
    document.addEventListener('click', (event) => {
        const isClickInsideMenu = sidebar.contains(event.target);
        const isClickInsideButton = menuButton.contains(event.target);

        if (!isClickInsideMenu && !isClickInsideButton && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            content.classList.remove('shift');
            menuButton.style.left = '20px';
            document.body.classList.remove('body-dark'); // Remove a classe escura do body
            document.querySelectorAll('button:not(#menuButton)').forEach(button => {
                button.classList.remove('button-dark'); // Remove a classe escura dos outros botões
            });
        }
    });

    document.querySelectorAll('.toggle-button').forEach(button => {
        button.addEventListener('click', function() {
            const infoDivId = this.id.replace('toggleButton', 'info');
            const infoDiv = document.getElementById(infoDivId);
            infoDiv.classList.toggle('show');
            document.querySelectorAll('.hidden').forEach(div => {
                if (div !== infoDiv) {
                    div.classList.remove('show');
                }
            });
            const icon = this.querySelector('i');
            icon.classList.toggle('bi-chevron-down');
            icon.classList.toggle('bi-chevron-up');
        });
    });

    // Sub-botão 1
    document.getElementById('toggleButton3a').addEventListener('click', function() {
        const subInfoDiv1 = document.getElementById('subInfo1');
        const subInfoDiv2 = document.getElementById('subInfo2');
        subInfoDiv1.classList.toggle('show');
        subInfoDiv2.classList.remove('show');
        const icon = this.querySelector('i');
        icon.classList.toggle('bi-chevron-down');
        icon.classList.toggle('bi-chevron-up');
    });

    // Sub-botão 2
    document.getElementById('toggleButton3b').addEventListener('click', function() {
        const subInfoDiv1 = document.getElementById('subInfo1');
        const subInfoDiv2 = document.getElementById('subInfo2');
        subInfoDiv2.classList.toggle('show');
        subInfoDiv1.classList.remove('show');
        const icon = this.querySelector('i');
        icon.classList.toggle('bi-chevron-down');
        icon.classList.toggle('bi-chevron-up');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('dados.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('artesoes-container');
            data.forEach((artesao, index) => {
                const delay = 0.1 * (index + 1); // Ajustar delay para cada artesão

                const artesaoDiv = document.createElement('div');
                artesaoDiv.className = `col-lg-3 col-md-6 wow fadeInUp`;
                artesaoDiv.setAttribute('data-wow-delay', `${delay}s`);

                const teamItem = document.createElement('div');
                teamItem.className = 'team-item text-center rounded overflow-hidden';

                const img = document.createElement('img');
                img.className = 'img-fluid';
                img.src = artesao.imagem;
                img.alt = artesao.nome;

                const teamText = document.createElement('div');
                teamText.className = 'team-text';

                const teamTitle = document.createElement('div');
                teamTitle.className = 'team-title';

                const nome = document.createElement('h5');
                nome.textContent = artesao.especialidade;

                teamTitle.appendChild(nome);
                teamText.appendChild(teamTitle);

                const teamSocial = document.createElement('div');
                teamSocial.className = 'team-social';

                const socialLinks = [
                    { href: artesao.facebook, icon: 'fab fa-facebook-f' },
                    { href: artesao.twitter, icon: 'fab fa-twitter' },
                    { href: artesao.instagram, icon: 'fab fa-instagram' }
                ];

                socialLinks.forEach(link => {
                    const a = document.createElement('a');
                    a.className = 'btn btn-square btn-light rounded-circle';
                    a.href = link.href;

                    const i = document.createElement('i');
                    i.className = link.icon;

                    a.appendChild(i);
                    teamSocial.appendChild(a);
                });

                teamItem.appendChild(img);
                teamItem.appendChild(teamText);
                teamItem.appendChild(teamSocial);
                artesaoDiv.appendChild(teamItem);
                container.appendChild(artesaoDiv);
            });
        })
        .catch(error => console.error('Erro ao carregar os dados:', error));
});

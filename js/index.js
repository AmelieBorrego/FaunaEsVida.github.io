fetch('js/noticias.json')
    .then(response => response.json())
    .then(data => {
        const newsContainer = document.getElementById('news-content');
        data.noticias.forEach(noticia => {
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item');
            newsItem.innerHTML = `
                <h3><a href="${noticia.url}" target="_blank">${noticia.titulo}</a></h3>
                <p>${noticia.descripcion}</p>
                <p><small>${noticia.fecha}</small></p>
            `;
            newsContainer.appendChild(newsItem);
        });
    })
    .catch(error => {
        console.error('Error al cargar las noticias:', error);
        document.getElementById('news-content').innerText = 'No se pudieron cargar las noticias.';
    });

    
    // Função para definir a imagem de fundo dinâmica
function setDynamicBackground() {
  const imagensFundo = [
    'foto1.jpg',
    'foto2.jpg',
    'foto3.jpg',
    'foto4.jpg',
    'foto5.jpg',
    'foto6.jpg',
    'foto7.jpg',
    'foto8.jpg',
    'foto9.jpg',
    'foto10.jpg',
    'foto11.jpg',
    'foto12.jpg',
    'foto13.jpg',
    // Adicione mais imagens aqui
  ];

  // Seleciona uma imagem aleatória da lista
  const randomImage = imagensFundo[Math.floor(Math.random() * imagensFundo.length)];

  // Define a imagem de fundo para a seção hero
  document.querySelector('.hero').style.backgroundImage = `url('imagens/voltas/2024-11-17/${randomImage}')`;
}

// Função para carregar as imagens da galeria
function loadGalleryImages() {
  const galeria = document.getElementById('galeria');
  
  // Lista de imagens para carregar
  const imagens = [
    'foto1.jpg',
    'foto2.jpg',
    'foto3.jpg',
    'foto4.jpg',
    'foto5.jpg',
    'foto6.jpg',
    'foto7.jpg',
    'foto8.jpg',
    'foto9.jpg',
    'foto10.jpg',
    'foto11.jpg',
    'foto12.jpg',
    'foto13.jpg',
    // Adicione mais imagens aqui se necessário
  ];

  // Cria a galeria de imagens em grupos de 3
  let row;
  imagens.forEach((imagem, index) => {
    if (index % 3 === 0) {
      row = document.createElement('div');
      row.classList.add('fotos-row');
      galeria.appendChild(row);
    }

    const imgElement = document.createElement('img');
    imgElement.src = `imagens/voltas/2024-11-17/${imagem}`;
    imgElement.alt = `Foto - ${imagem}`;
    imgElement.classList.add('galeria-img');
    imgElement.onclick = () => openModal(`imagens/voltas/2024-11-17/${imagem}`);
    row.appendChild(imgElement);
  });
}

// Função para abrir a imagem em modal
function openModal(imageSrc) {
  const modal = document.getElementById('imagemModal');
  const modalImg = document.getElementById('modalImg');
  modal.style.display = "block";
  modalImg.src = imageSrc;
}

// Função para fechar o modal
function closeModal() {
  const modal = document.getElementById('imagemModal');
  modal.style.display = "none";
}

// Chama as funções quando a página carrega
window.onload = () => {
  setDynamicBackground();
  loadGalleryImages();
};

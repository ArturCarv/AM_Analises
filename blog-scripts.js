/**
 * Blog Scripts
 * Funcionalidades específicas do blog
 */

// ================================
// Category Filter
// ================================

document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const blogCards = document.querySelectorAll('.blog-card');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const selectedCategory = this.dataset.category;
            
            // Filter blog cards
            blogCards.forEach(card => {
                const cardCategory = card.dataset.category;
                
                if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                    card.classList.remove('hidden');
                    card.classList.add('visible');
                } else {
                    card.classList.add('hidden');
                    card.classList.remove('visible');
                }
            });
        });
    });
});

// ================================
// Newsletter Form
// ================================

const newsletterForm = document.getElementById('newsletterForm');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (email) {
            // Aqui você pode integrar com um serviço de newsletter
            // Por enquanto, vamos simular o envio
            
            const button = this.querySelector('button');
            const originalText = button.textContent;
            
            button.textContent = 'Inscrevendo...';
            button.disabled = true;
            
            // Simular envio (substitua por integração real)
            setTimeout(() => {
                alert(`✅ Obrigado por se inscrever! Um e-mail de confirmação foi enviado para ${email}`);
                emailInput.value = '';
                button.textContent = originalText;
                button.disabled = false;
                
                // Opcional: Enviar para WhatsApp
                const message = `Nova inscrição no newsletter: ${email}`;
                // window.open(`https://wa.me/5561998619189?text=${encodeURIComponent(message)}`, '_blank');
            }, 1500);
        }
    });
}

// ================================
// Load More Posts
// ================================

let currentPostsDisplayed = 6;
const postsPerLoad = 3;

function loadMorePosts() {
    const allPosts = document.querySelectorAll('.blog-card');
    const loadMoreBtn = document.querySelector('.load-more-btn');
    
    // Simular carregamento
    loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Carregando...';
    loadMoreBtn.disabled = true;
    
    setTimeout(() => {
        // Por enquanto, apenas mostra uma mensagem
        // No futuro, você pode carregar posts dinamicamente
        alert('📚 Novos artigos em breve! Continue acompanhando nosso blog.');
        
        loadMoreBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Carregar Mais Artigos';
        loadMoreBtn.disabled = false;
        
        // Alternativa: esconder o botão se não houver mais posts
        // loadMoreBtn.style.display = 'none';
    }, 1000);
}

// ================================
// Scroll Progress Bar (opcional)
// ================================

function createScrollProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress-bar';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 4px;
        background: linear-gradient(90deg, #1d4ed8, #059669);
        z-index: 9999;
        transition: width 0.2s ease;
        width: 0%;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Ativar barra de progresso (opcional)
// createScrollProgressBar();

// ================================
// Search Functionality (Futuro)
// ================================

function addSearchFunctionality() {
    // Implementar busca nos artigos
    // Por enquanto, apenas placeholder para futuras melhorias
    
    const searchInput = document.getElementById('blogSearch');
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const blogCards = document.querySelectorAll('.blog-card');
            
            blogCards.forEach(card => {
                const title = card.querySelector('.blog-title').textContent.toLowerCase();
                const excerpt = card.querySelector('.blog-excerpt').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
}

// ================================
// Reading Time Calculator
// ================================

function calculateReadingTime(text) {
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
}

// ================================
// Social Share Buttons (Futuro)
// ================================

function addSocialShareButtons() {
    // Adicionar botões de compartilhamento social
    // WhatsApp, LinkedIn, Twitter, Facebook
}

console.log('📚 Blog scripts carregados com sucesso!');


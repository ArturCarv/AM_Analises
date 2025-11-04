/**
 * AM Análises - Scripts Principais
 * Consultoria em Estatística e Análise de Dados
 */

// ================================
// Smooth Scrolling
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ================================
// Fade In Animation on Scroll
// ================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// ================================
// Contact Form Handling
// ================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const submitBtn = this.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;

    // Pega o endpoint do Formspree do atributo action
    const formspreeURL = this.getAttribute('action');
    
    fetch(formspreeURL, {
        method: 'POST',
        body: new FormData(this),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('✅ Mensagem enviada com sucesso!\n\nEntrarei em contato em breve.');
            this.reset();
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    alert('❌ Erro: ' + data.errors.map(error => error.message).join(", "));
                } else {
                    alert('❌ Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
                }
            });
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('❌ Erro ao enviar mensagem. Por favor, tente novamente ou use o WhatsApp.');
    })
    .finally(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
});

// ================================
// Initial Hero Animation
// ================================

setTimeout(() => {
    document.querySelectorAll('.hero .fade-in').forEach(el => {
        el.classList.add('visible');
    });
}, 500);

// ================================
// Sample Size Calculator
// ================================

function openSampleSizeCalculator() {
    document.getElementById('calculatorModal').style.display = 'block';
}

function closeCalculator() {
    document.getElementById('calculatorModal').style.display = 'none';
}

// Calculator Form Submit
document.getElementById('sampleSizeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const population = parseInt(document.getElementById('population').value);
    const confidence = parseInt(document.getElementById('confidence').value);
    const margin = parseFloat(document.getElementById('margin').value);
    const proportion = parseFloat(document.getElementById('proportion').value) / 100;
    
    // Validações
    if (population <= 0 || margin <= 0 || margin >= 100 || proportion < 0 || proportion > 1) {
        alert('Por favor, insira valores válidos.');
        return;
    }
    
    // Calcular tamanho da amostra
    const zScore = confidence === 90 ? 1.645 : confidence === 95 ? 1.96 : 2.576;
    const marginDecimal = margin / 100;
    
    // Fórmula para população infinita
    let sampleSize = Math.ceil((zScore * zScore * proportion * (1 - proportion)) / (marginDecimal * marginDecimal));
    
    // Correção para população finita
    if (population < sampleSize) {
        sampleSize = population;
    } else if (population < 100000) {
        sampleSize = Math.ceil(sampleSize / (1 + (sampleSize - 1) / population));
    }
    
    // Exibir resultado
    document.getElementById('sampleSize').textContent = sampleSize.toLocaleString('pt-BR');
    document.getElementById('resultExplanation').innerHTML = `
        <strong>Interpretação:</strong><br>
        • Para uma população de ${population.toLocaleString('pt-BR')} pessoas<br>
        • Com ${confidence}% de confiança<br>
        • E margem de erro de ${margin}%<br>
        • Você precisa de uma amostra de <strong>${sampleSize.toLocaleString('pt-BR')} pessoas</strong>
    `;
    document.getElementById('result').style.display = 'block';
});

// ================================
// Template Downloads
// ================================

function downloadTemplates() {
    const templateModal = document.createElement('div');
    templateModal.className = 'modal';
    templateModal.style.display = 'block';
    templateModal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <h2>📄 Templates de Relatórios Estatísticos</h2>
            <p>Selecione o template que melhor se adequa ao seu projeto:</p>
            
            <div class="template-grid">
                <div class="template-card" onclick="selectTemplate('tcc')">
                    <div class="template-icon">📊</div>
                    <h3>Template TCC</h3>
                    <p>Estrutura completa para Trabalho de Conclusão de Curso</p>
                    <small>Inclui: Introdução, Metodologia, Análise, Discussão</small>
                </div>
                
                <div class="template-card" onclick="selectTemplate('mestrado')">
                    <div class="template-icon">🎓</div>
                    <h3>Template Mestrado</h3>
                    <p>Estrutura para Dissertação de Mestrado</p>
                    <small>Inclui: Revisão bibliográfica, Metodologia avançada</small>
                </div>
                
                <div class="template-card" onclick="selectTemplate('doutorado')">
                    <div class="template-icon">👨‍🎓</div>
                    <h3>Template Doutorado</h3>
                    <p>Estrutura para Tese de Doutorado</p>
                    <small>Inclui: Metodologia complexa, Análises multivariadas</small>
                </div>
                
                <div class="template-card" onclick="selectTemplate('empresarial')">
                    <div class="template-icon">🏢</div>
                    <h3>Template Empresarial</h3>
                    <p>Relatório para projetos empresariais</p>
                    <small>Inclui: Executivo summary, KPIs, Recomendações</small>
                </div>
            </div>
            
            <div class="template-info">
                <h4>📋 O que você receberá:</h4>
                <ul>
                    <li>✅ Estrutura completa do relatório</li>
                    <li>✅ Exemplos de análises estatísticas</li>
                    <li>✅ Formatação ABNT</li>
                    <li>✅ Orientações metodológicas</li>
                    <li>✅ Checklist de qualidade</li>
                </ul>
                
                <div class="template-pricing">
                    <h4>💰 Investimento:</h4>
                    <p><strong>R$ 50,00</strong> por template</p>
                    <small>Ou R$ 150,00 para todos os 4 templates</small>
                </div>
            </div>
            
            <div class="template-cta">
                <button class="tool-button" onclick="contactForTemplate()">
                    📞 Solicitar Template
                </button>
                <button class="tool-button" style="background: #6b7280; margin-left: 10px;" onclick="this.parentElement.parentElement.parentElement.remove()">
                    ❌ Cancelar
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(templateModal);
}

function selectTemplate(type) {
    const templates = {
        'tcc': 'Template TCC - Estrutura completa para Trabalho de Conclusão de Curso',
        'mestrado': 'Template Mestrado - Estrutura para Dissertação de Mestrado',
        'doutorado': 'Template Doutorado - Estrutura para Tese de Doutorado',
        'empresarial': 'Template Empresarial - Relatório para projetos empresariais'
    };
    
    const message = `Olá! Gostaria de solicitar o ${templates[type]}. Poderia me enviar mais informações sobre o processo e valores?`;
    window.open(`https://wa.me/5561998619189?text=${encodeURIComponent(message)}`, '_blank');
    
    // Fechar modal
    document.querySelector('.modal').remove();
}

function contactForTemplate() {
    const message = `Olá! Gostaria de saber mais sobre os templates de relatórios estatísticos. Poderia me enviar informações sobre os pacotes disponíveis e valores?`;
    window.open(`https://wa.me/5561998619189?text=${encodeURIComponent(message)}`, '_blank');
    
    // Fechar modal
    document.querySelector('.modal').remove();
}

// ================================
// Consultation Scheduler
// ================================

function openScheduler() {
    const schedulerModal = document.createElement('div');
    schedulerModal.className = 'modal';
    schedulerModal.style.display = 'block';
    schedulerModal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <h2>📅 Agendar Consultoria</h2>
            <p>Escolha o tipo de consultoria que melhor se adequa às suas necessidades:</p>
            
            <div class="scheduler-grid">
                <div class="scheduler-card" onclick="scheduleConsultation('brief')">
                    <div class="scheduler-icon">⚡</div>
                    <h3>Consulta Rápida</h3>
                    <p><strong>30 minutos</strong></p>
                    <p>Discussão inicial do projeto</p>
                    <small>• Definição do escopo<br>• Orientação metodológica<br>• Orçamento preliminar</small>
                    <div class="scheduler-price">R$ 100</div>
                </div>
                
                <div class="scheduler-card" onclick="scheduleConsultation('standard')">
                    <div class="scheduler-icon">📊</div>
                    <h3>Consultoria Padrão</h3>
                    <p><strong>1 hora</strong></p>
                    <p>Análise detalhada do projeto</p>
                    <small>• Revisão de dados<br>• Planejamento estatístico<br>• Cronograma de trabalho</small>
                    <div class="scheduler-price">R$ 200</div>
                </div>
                
                <div class="scheduler-card" onclick="scheduleConsultation('premium')">
                    <div class="scheduler-icon">🎯</div>
                    <h3>Consultoria Premium</h3>
                    <p><strong>2 horas</strong></p>
                    <p>Análise completa e estratégica</p>
                    <small>• Análise profunda dos dados<br>• Estratégia estatística<br>• Acompanhamento incluído</small>
                    <div class="scheduler-price">R$ 400</div>
                </div>
            </div>
            
            <div class="scheduler-info">
                <h4>📋 O que está incluído:</h4>
                <ul>
                    <li>✅ Análise do seu projeto</li>
                    <li>✅ Orientação metodológica</li>
                    <li>✅ Sugestões de análises</li>
                    <li>✅ Cronograma de trabalho</li>
                    <li>✅ Orçamento detalhado</li>
                </ul>
                
                <div class="scheduler-benefits">
                    <h4>🎁 Benefícios:</h4>
                    <p>• <strong>Desconto de 20%</strong> no projeto se contratado</p>
                    <p>• <strong>Material gratuito</strong> sobre estatística</p>
                    <p>• <strong>Suporte</strong> por 7 dias após a consultoria</p>
                </div>
            </div>
            
            <div class="scheduler-cta">
                <button class="tool-button" onclick="scheduleNow()">
                    📞 Agendar Agora
                </button>
                <button class="tool-button" style="background: #6b7280; margin-left: 10px;" onclick="this.parentElement.parentElement.parentElement.remove()">
                    ❌ Cancelar
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(schedulerModal);
}

function scheduleConsultation(type) {
    const consultations = {
        'brief': 'Consulta Rápida (30 min) - R$ 100',
        'standard': 'Consultoria Padrão (1h) - R$ 200',
        'premium': 'Consultoria Premium (2h) - R$ 400'
    };
    
    const message = `Olá! Gostaria de agendar uma ${consultations[type]}. Poderia me informar sobre os horários disponíveis e como proceder com o pagamento?`;
    window.open(`https://wa.me/5561998619189?text=${encodeURIComponent(message)}`, '_blank');
    
    // Fechar modal
    document.querySelector('.modal').remove();
}

function scheduleNow() {
    const message = `Olá! Gostaria de agendar uma consultoria para discutir meu projeto de pesquisa. Poderia me informar sobre os tipos de consultoria disponíveis, horários e valores?`;
    window.open(`https://wa.me/5561998619189?text=${encodeURIComponent(message)}`, '_blank');
    
    // Fechar modal
    document.querySelector('.modal').remove();
}

// ================================
// Modal Close on Outside Click
// ================================

window.onclick = function(event) {
    const modal = document.getElementById('calculatorModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}


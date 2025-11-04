# AM Análises - Psicometria e Estatística para Psicologia

## 🧠 Sobre o Projeto

Site profissional especializado em consultoria de **psicometria e análises estatísticas para psicologia**. Desenvolvido com HTML5, CSS3 e JavaScript, o site oferece serviços direcionados para estudantes de psicologia, pesquisadores e clínicas, com foco em validação de instrumentos, análise de dados psicológicos e suporte para trabalhos acadêmicos.

## ✨ Características

- **Foco em Psicologia**: Serviços especializados em psicometria e análise de dados psicológicos
- **Design Responsivo**: Otimizado para desktop, tablet e mobile
- **SEO Especializado**: Otimizado para "psicometria", "estatística psicologia", "análise fatorial"
- **Conteúdo Educacional**: Blog com artigos sobre estatística aplicada à psicologia
- **Ferramentas para Psicólogos**: 
  - Calculadora de Alfa de Cronbach
  - Calculadora de tamanho de amostra para pesquisas psicológicas
  - Templates de relatórios psicométricos
- **Atendimento Especializado**: Linguagem acessível e contexto aplicado à psicologia
- **Integração WhatsApp**: Comunicação direta e rápida para tirar dúvidas

## 🚀 Como Publicar

### Opção 1: GitHub Pages (Gratuito) - RECOMENDADO

1. **Criar repositório no GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Site AM Análises - Consultoria Estatística"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/am-analises.git
   git push -u origin main
   ```

2. **Ativar GitHub Pages**:
   - Vá em Settings > Pages
   - Selecione "Deploy from a branch"
   - Escolha "main" branch
   - Seu site estará disponível em: `https://seu-usuario.github.io/am-analises`

3. **Configurar domínio personalizado (opcional)**:
   - Adicione arquivo `CNAME` na raiz do projeto
   - Configure DNS no seu provedor de domínio

### Opção 2: Netlify (Recomendado)

1. **Arrastar e soltar**:
   - Acesse [netlify.com](https://netlify.com)
   - Arraste a pasta do projeto para a área de deploy
   - Seu site estará online em segundos

2. **Conectar com GitHub**:
   - Conecte seu repositório GitHub
   - Deploy automático a cada commit

### Opção 3: Vercel

1. **Instalar Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

## 🔧 Personalização

### Alterar Informações de Contato

Edite o arquivo `index.html` e modifique:
- Nome da empresa (linha 470)
- Estatísticas na seção "Sobre" (linhas 458-468)
- Projetos realizados (linhas 479-509)

### Novas Funcionalidades Implementadas

#### 1. Ferramentas Integradas
- **Calculadora de Tamanho de Amostra**: Modal interativo para cálculo estatístico
- **Sistema de Agendamento Avançado**: Modal com opções de consultoria (Rápida, Padrão, Premium)
- **Templates de Relatórios**: Modal com seleção de templates (TCC, Mestrado, Doutorado, Empresarial)

#### 2. Dashboard Financeiro Python
- **Arquivo**: `financial_dashboard.py`
- **Funcionalidades**:
  - Interface gráfica moderna com Tkinter
  - Controle de receitas e despesas
  - Projeções financeiras
  - Acompanhamento de metas
  - Exportação de dados
  - Gráficos com Matplotlib
- **Instalação**: `pip install -r requirements.txt`
- **Execução**: `python financial_dashboard.py`
- **Acesso**: Privado (arquivo local)

#### 3. Documentação Completa
- **PROJECT_BRIEF.md**: Brief completo do projeto
- **GOALS_ROADMAP.md**: Metas e roadmap detalhado
- **DASHBOARD_GUIDE.md**: Guia de uso do dashboard financeiro

### Adicionar Backend para Formulário

Para processar o formulário de contato, você pode:

1. **Usar Netlify Forms** (mais fácil):
   - Adicione `netlify` ao atributo `form`
   - Configure no painel do Netlify

2. **Usar Formspree**:
   - Crie conta em [formspree.io](https://formspree.io)
   - Substitua o action do formulário

3. **Backend próprio**:
   - Implemente endpoint para receber dados
   - Modifique o JavaScript do formulário

### Otimização de Imagens

**Script Automático (Recomendado)**:
```bash
# Execute o script de otimização
otimizar_imagens.bat
```

**Manual**:
1. Use ferramentas como TinyPNG ou Squoosh
2. Converta para WebP quando possível
3. Redimensione para máximo 1200px de largura

### Otimizações Adicionais

1. **CDN**:
   - Use Cloudflare para melhor performance
   - Configure cache headers

2. **Analytics**:
   - Adicione Google Analytics
   - Configure Google Search Console

3. **Backup**:
   - Faça backup regular do repositório
   - Mantenha versões das imagens originais

## 📱 Testes

### Verificar Responsividade
- Teste em diferentes dispositivos
- Use DevTools do navegador
- Verifique em [responsivedesignchecker.com](https://responsivedesignchecker.com)

### Verificar Acessibilidade
- Use [WAVE](https://wave.webaim.org/)
- Teste com leitores de tela
- Verifique contraste de cores

### Verificar Performance
- Use [PageSpeed Insights](https://pagespeed.web.dev/)
- Teste com [GTmetrix](https://gtmetrix.com/)

## 🛠️ Estrutura do Projeto

```
Site/
├── index.html                    # ✅ Página principal do site
├── styles.css                    # ✅ Estilos principais
├── scripts.js                    # ✅ Scripts principais
├── README.md                     # ✅ Este arquivo
├── PROJECT_BRIEF.md              # ✅ Brief completo do projeto
├── GOALS_ROADMAP.md              # ✅ Metas e roadmap detalhado
├── .gitignore                    # ✅ Arquivos ignorados pelo Git
│
├── Logo/                         # 🎨 Logo e imagens da marca
│   └── Logo.png
│
├── Exemplos/                     # 📸 Imagens de projetos exemplo
│   ├── BI/
│   ├── LGPD/
│   └── Paloma/
│
├── docs/                         # 📚 Documentação técnica
│   ├── README.md
│   ├── DEPLOY_GUIDE.md          # Guia de deploy
│   ├── GUIA_GITHUB_PAGES.md     # Guia GitHub Pages
│   └── NEXT_STEPS.md            # Próximos passos
│
├── blog/                         # 📝 Blog (Fase 2 - futuro)
│   ├── README.md
│   ├── blog.html
│   ├── blog-post-1.html
│   ├── blog-scripts.js
│   ├── blog-styles.css
│   └── BLOG_README.md
│
├── tools/                        # 🛠️ Scripts e ferramentas
│   ├── README.md
│   ├── deploy_github.ps1        # Deploy automático
│   ├── deploy_github_simples.ps1
│   ├── optimize_images.py       # Otimização de imagens
│   └── otimizar_imagens.bat
│
└── private/                      # 🔒 Arquivos privados (NÃO commitados)
    ├── README.md
    ├── financial_dashboard.py
    ├── financial-dashboard.html
    ├── DASHBOARD_GUIDE.md
    ├── PYTHON_DASHBOARD_GUIDE.md
    └── requirements.txt
```

### 📁 Descrição das Pastas

- **`docs/`** - Documentação técnica de deploy e configuração
- **`blog/`** - Blog integrado (será implementado na Fase 2)
- **`tools/`** - Scripts utilitários para desenvolvimento
- **`private/`** - Arquivos pessoais e financeiros (ignorados pelo Git)
- **`Logo/`** - Imagens da marca
- **`Exemplos/`** - Imagens de projetos exemplo para portfólio

## 📞 Suporte

Para dúvidas sobre implementação ou personalização, consulte:
- [MDN Web Docs](https://developer.mozilla.org/)
- [W3Schools](https://www.w3schools.com/)
- [CSS-Tricks](https://css-tricks.com/)

## 📄 Licença

Este projeto é de uso pessoal/profissional. Todos os direitos reservados.

---

**AM Análises** - Psicometria e Estatística Descomplicada para Psicólogos.

## 🎯 Público-Alvo

Este site é direcionado especialmente para:
- **Estudantes de Psicologia** (graduação e pós-graduação)
- **Psicólogos pesquisadores**
- **Clínicas de psicologia**
- **Professores de metodologia em Psicologia**

## 🔬 Serviços Especializados

- Validação de instrumentos psicológicos (escalas, questionários)
- Análise Fatorial Exploratória (AFE) e Confirmatória (AFC)
- Análise de confiabilidade (Alfa de Cronbach, Ômega)
- Testes estatísticos aplicados à psicologia (t, ANOVA, correlação)
- Análise de mediação e moderação
- Suporte para TCCs, dissertações e teses em Psicologia

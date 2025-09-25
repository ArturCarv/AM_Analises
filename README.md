# AM Análises - Site de Consultoria Estatística

## 📊 Sobre o Projeto

Site profissional para consultoria em análises estatísticas, desenvolvido com HTML5, CSS3 e JavaScript vanilla. O site apresenta serviços, projetos realizados e formulário de contato com validação.

## ✨ Características

- **Design Responsivo**: Otimizado para desktop, tablet e mobile
- **Acessibilidade**: Seguindo padrões WCAG 2.1
- **SEO Otimizado**: Meta tags completas e estrutura semântica
- **Performance**: Carregamento rápido e otimizado
- **Formulário Inteligente**: Validação em tempo real e feedback visual
- **Ferramentas Integradas**: Calculadora de tamanho de amostra
- **Sistema de Agendamento**: Integração com WhatsApp
- **Templates de Relatórios**: Downloads direcionados
- **Dashboard Financeiro**: Controle privado de receitas e metas

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
- **Sistema de Agendamento**: Redirecionamento para WhatsApp com mensagens personalizadas
- **Templates de Relatórios**: Sistema de download direcionado

#### 2. Dashboard Financeiro Privado
- **Arquivo**: `financial-dashboard.html`
- **Funcionalidades**:
  - Controle de receitas e despesas
  - Projeções financeiras
  - Acompanhamento de metas
  - Exportação de dados
- **Acesso**: Privado (não deve ser hospedado publicamente)

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
├── index.html                    # Página principal
├── financial-dashboard.html      # Dashboard financeiro privado
├── PROJECT_BRIEF.md              # Brief completo do projeto
├── GOALS_ROADMAP.md              # Metas e roadmap detalhado
├── DASHBOARD_GUIDE.md            # Guia de uso do dashboard
├── optimize_images.py            # Script de otimização de imagens
├── otimizar_imagens.bat          # Script Windows para otimização
├── deploy_github.ps1             # Script de deploy para GitHub
├── deploy_github_simples.ps1     # Script simplificado de deploy
├── GUIA_GITHUB_PAGES.md          # Guia completo para GitHub Pages
├── Logo/
│   └── Logo.png                 # Logo da empresa
├── Exemplos/                    # Imagens de projetos (originais)
│   ├── BI/
│   ├── Cidades Seguras/
│   ├── EM/
│   ├── LGPD/
│   └── Paloma/
├── Exemplos_Optimized/          # Imagens otimizadas (geradas automaticamente)
└── README.md                    # Este arquivo
```

## 📞 Suporte

Para dúvidas sobre implementação ou personalização, consulte:
- [MDN Web Docs](https://developer.mozilla.org/)
- [W3Schools](https://www.w3schools.com/)
- [CSS-Tricks](https://css-tricks.com/)

## 📄 Licença

Este projeto é de uso pessoal/profissional. Todos os direitos reservados.

---

**AM Análises** - Transformando dados em insights valiosos para seu negócio.

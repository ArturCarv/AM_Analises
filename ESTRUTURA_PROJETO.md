# 📁 Estrutura do Projeto AM Análises

## 🎯 Visão Geral

Este documento descreve a organização completa do projeto após a reestruturação de novembro/2025.

---

## 📂 Estrutura de Pastas

```
Site/
│
├── 📄 index.html                 # Site principal
├── 🎨 styles.css                 # Estilos principais
├── ⚙️ scripts.js                 # Scripts principais
├── 📋 README.md                  # Documentação principal
├── 📊 PROJECT_BRIEF.md           # Brief completo do projeto
├── 🎯 GOALS_ROADMAP.md           # Metas e roadmap
├── 🚫 .gitignore                 # Arquivos ignorados
│
├── 📁 Logo/                      # 🎨 Identidade Visual
│   └── Logo.png
│
├── 📁 Exemplos/                  # 📸 Imagens de Projetos
│   ├── BI/                       # Business Intelligence
│   ├── LGPD/                     # Projeto LGPD
│   └── Paloma/                   # Projeto Saúde Mental
│
├── 📁 docs/                      # 📚 Documentação Técnica
│   ├── README.md                 # Índice de documentação
│   ├── DEPLOY_GUIDE.md           # Guia de deploy completo
│   ├── GUIA_GITHUB_PAGES.md      # GitHub Pages específico
│   └── NEXT_STEPS.md             # Próximos passos
│
├── 📁 blog/                      # 📝 Blog (Fase 2)
│   ├── README.md                 # Info sobre o blog
│   ├── blog.html                 # Página principal do blog
│   ├── blog-post-1.html          # Post exemplo/template
│   ├── blog-scripts.js           # Scripts do blog
│   ├── blog-styles.css           # Estilos do blog
│   └── BLOG_README.md            # Documentação completa
│
├── 📁 tools/                     # 🛠️ Ferramentas e Scripts
│   ├── README.md                 # Guia de ferramentas
│   ├── deploy_github.ps1         # Deploy automático (completo)
│   ├── deploy_github_simples.ps1 # Deploy simplificado
│   ├── optimize_images.py        # Otimização de imagens Python
│   └── otimizar_imagens.bat      # Otimização batch Windows
│
└── 📁 private/                   # 🔒 Arquivos Privados
    ├── README.md                 # ⚠️ Info de segurança
    ├── financial_dashboard.py    # Dashboard financeiro
    ├── financial-dashboard.html  # Dashboard HTML
    ├── DASHBOARD_GUIDE.md        # Guia do dashboard
    ├── PYTHON_DASHBOARD_GUIDE.md # Guia técnico Python
    └── requirements.txt          # Dependências Python
```

---

## 🎯 Propósito de Cada Pasta

### 📁 **Raiz do Projeto**
**Contém:** Arquivos principais do site e documentação estratégica
- ✅ **index.html** - Site publicado no GitHub Pages
- ✅ **styles.css** / **scripts.js** - Funcionamento do site
- ✅ **PROJECT_BRIEF.md** - Estratégia de negócio focada em psicologia
- ✅ **GOALS_ROADMAP.md** - Planejamento mês a mês

---

### 📁 **docs/** - Documentação Técnica
**Contém:** Guias de deploy, configuração e próximos passos

**Quando usar:**
- Publicar o site no GitHub Pages
- Configurar domínio personalizado
- Entender próximas etapas de desenvolvimento

---

### 📁 **blog/** - Blog Educacional
**Contém:** Estrutura completa do blog sobre psicometria

**Status:** 🚧 Em desenvolvimento (Fase 2 do roadmap - meses 4-6)

**Objetivo:** Criar conteúdo educacional sobre:
- Estatística para TCCs de Psicologia
- Psicometria prática
- Análise Fatorial
- Alfa de Cronbach

---

### 📁 **tools/** - Ferramentas de Desenvolvimento
**Contém:** Scripts para automatizar tarefas

**Scripts disponíveis:**
```powershell
# Deploy rápido
.\tools\deploy_github_simples.ps1

# Otimizar imagens
python tools\optimize_images.py
# ou
.\tools\otimizar_imagens.bat
```

---

### 📁 **private/** - Arquivos Privados
**Contém:** Dashboard financeiro e arquivos pessoais

⚠️ **IMPORTANTE:**
- ❌ **NÃO é commitado** no Git
- ❌ **NÃO é publicado** no GitHub
- ✅ **Apenas uso local** para controle financeiro

**Proteção:** Listado no `.gitignore`

---

## 🔐 Segurança

### Arquivos Ignorados pelo Git

O `.gitignore` protege automaticamente:

```gitignore
# Pasta privada completa
private/

# Backups
*.backup
*.bak

# Temporários
*.tmp
*.temp

# Python
__pycache__/
*.pyc
venv/
env/

# Sistema
.DS_Store
Thumbs.db
desktop.ini
```

---

## 📋 Checklist de Uso

### ✅ Para Desenvolver o Site
1. Editar `index.html`, `styles.css`, `scripts.js`
2. Testar localmente abrindo `index.html` no navegador
3. Commitar mudanças: `git add . && git commit -m "sua mensagem"`
4. Publicar: `git push`

### ✅ Para Adicionar Conteúdo ao Blog
1. Navegar para `blog/`
2. Criar novo arquivo HTML baseado em `blog-post-1.html`
3. Seguir estrutura do `blog/BLOG_README.md`

### ✅ Para Deploy/Publicação
1. Consultar `docs/DEPLOY_GUIDE.md`
2. Ou executar: `.\tools\deploy_github_simples.ps1`

### ✅ Para Controle Financeiro (Privado)
1. Navegar para `private/`
2. Executar: `python private/financial_dashboard.py`
3. Ou abrir: `private/financial-dashboard.html`

---

## 🚀 Próximos Passos

Após a organização, seguir o roadmap:

### **Esta Semana**
- [ ] Publicar site reformulado no GitHub Pages
- [ ] Criar perfil LinkedIn focado em psicologia
- [ ] Post inaugural no LinkedIn

### **Próximas 2 Semanas**
- [ ] Escrever primeiro artigo no blog
- [ ] Criar lista de 20 faculdades de Psicologia
- [ ] Oferta promocional de lançamento

Consulte `GOALS_ROADMAP.md` para o planejamento completo!

---

## 📞 Mudanças Feitas

**Data:** 04/11/2025
**Commit:** `0945c7e`
**Descrição:** Reorganização completa da estrutura em pastas lógicas

**Benefícios:**
- ✅ Projeto mais organizado e profissional
- ✅ Fácil navegação e manutenção
- ✅ Arquivos privados protegidos
- ✅ Documentação clara e acessível
- ✅ Pronto para escalar e crescer

---

**AM Análises** - Psicometria e Estatística Descomplicada para Psicólogos 🧠


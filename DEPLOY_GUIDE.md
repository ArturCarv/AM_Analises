# 🚀 Guia Completo - Deploy AM Análises no GitHub

## 📋 Pré-requisitos
- ✅ Conta no GitHub (já criada)
- ✅ Git instalado no computador
- ✅ Arquivos do projeto prontos
- ✅ Repositório GitHub: https://github.com/ArturCarv/AM_Analises

## 🔧 Passo 1: Preparar o Ambiente Local

### 1.1 Abrir PowerShell na pasta do projeto
```powershell
cd "C:\Users\Artur.Medeiros\Temporário\Site"
```

### 1.2 Verificar se Git está funcionando
```bash
git --version
```

### 1.3 Verificar arquivos na pasta
```bash
dir
```
**Deve mostrar:** index.html, financial-dashboard.html, PROJECT_BRIEF.md, etc.

## 📁 Passo 2: Configurar Repositório Git Local

### 2.1 Inicializar repositório Git
```bash
git init
```

### 2.2 Configurar usuário Git (se não configurado)
```bash
git config user.name "Artur Carvalho"
git config user.email "artur.carvalhom2@gmail.com"
```

### 2.3 Adicionar todos os arquivos
```bash
git add .
```

### 2.4 Fazer primeiro commit
```bash
git commit -m "Site AM Análises - Versão completa com melhorias"
```

### 2.5 Renomear branch para main
```bash
git branch -M main
```

## 🌐 Passo 3: Conectar com GitHub

### 3.1 Conectar repositório local ao GitHub
```bash
git remote add origin https://github.com/ArturCarv/AM_Analises.git
```

### 3.2 Verificar conexão
```bash
git remote -v
```
**Deve mostrar:** origin https://github.com/ArturCarv/AM_Analises.git

### 3.3 Enviar arquivos para o GitHub
```bash
git push -u origin main
```

**Se pedir credenciais:**
- **Usuário:** ArturCarv
- **Senha:** Use Personal Access Token (não a senha normal)

## ⚙️ Passo 4: Ativar GitHub Pages

### 4.1 Acessar o repositório no GitHub
- Vá para: https://github.com/ArturCarv/AM_Analises

### 4.2 Configurar GitHub Pages
1. Clique em **"Settings"** (aba superior)
2. Role para baixo até **"Pages"** (menu lateral esquerdo)
3. Em **"Source"**, selecione **"Deploy from a branch"**
4. Em **"Branch"**, selecione **"main"**
5. Em **"Folder"**, selecione **"/ (root)"**
6. Clique em **"Save"**

### 4.3 Aguardar deploy
- Aguarde 2-5 minutos
- Seu site estará disponível em: https://arturcarv.github.io/AM_Analises

## 🔄 Passo 5: Atualizações Futuras

### Para atualizar o site:
```bash
# 1. Fazer alterações nos arquivos
# 2. Adicionar arquivos modificados
git add .

# 3. Fazer commit com descrição
git commit -m "Descrição da atualização"

# 4. Enviar para GitHub
git push
```

### Comandos úteis:
```bash
# Ver status dos arquivos
git status

# Ver histórico de commits
git log --oneline

# Ver diferenças
git diff

# Desfazer última alteração
git checkout -- .
```

## 🎨 Passo 6: Configurações Adicionais (Opcional)

### 6.1 Domínio Personalizado
Se quiser usar amanalises.com:

1. **Comprar domínio** em qualquer registrador
2. **Criar arquivo CNAME** na raiz do projeto:
   ```
   amanalises.com
   ```
3. **Configurar DNS** no registrador:
   ```
   Tipo: CNAME
   Nome: www
   Valor: arturcarv.github.io
   
   Tipo: A
   Nome: @
   Valor: 185.199.108.153
   ```

### 6.2 Google Analytics
Para acompanhar visitantes:

1. Criar conta no Google Analytics
2. Adicionar código de tracking no `index.html`
3. Fazer commit e push

## 🐛 Solução de Problemas

### Erro: "Authentication failed"
**Solução:** Use Personal Access Token
1. GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token
3. Usar token como senha

### Erro: "Repository not found"
**Solução:** Verificar URL do repositório
```bash
git remote set-url origin https://github.com/ArturCarv/AM_Analises.git
```

### Site não aparece
**Soluções:**
- Aguardar até 10 minutos
- Verificar se branch está correto (main)
- Verificar se arquivo index.html está na raiz
- Verificar configurações do GitHub Pages

### Erro de push
**Solução:**
```bash
git pull origin main
git push origin main
```

## 📊 Passo 7: Verificar Deploy

### 7.1 Testar site
- Acesse: https://arturcarv.github.io/AM_Analises
- Teste todas as funcionalidades
- Verifique responsividade no mobile

### 7.2 Testar dashboard financeiro
- Acesse: https://arturcarv.github.io/AM_Analises/financial-dashboard.html
- Teste adicionar transações
- Verifique se dados são salvos

### 7.3 Verificar formulário de contato
- Teste envio de mensagem
- Verifique se chega no email configurado

## ✅ Checklist Final

- [ ] Site publicado no GitHub Pages
- [ ] URL funcionando: https://arturcarv.github.io/AM_Analises
- [ ] Dashboard financeiro acessível
- [ ] Formulário de contato funcionando
- [ ] Calculadora de tamanho de amostra funcionando
- [ ] Site responsivo no mobile
- [ ] Todas as seções carregando corretamente

## 🎯 Próximos Passos Pós-Deploy

### Imediato (Esta Semana)
1. **Compartilhar o site** com amigos/família para feedback
2. **Testar em diferentes dispositivos** (celular, tablet)
3. **Configurar Google Analytics** para acompanhar visitantes
4. **Criar perfil LinkedIn** profissional

### Próxima Semana
1. **Lançar campanha promocional** (50% desconto para primeiros clientes)
2. **Criar conteúdo para blog** (primeiro artigo sobre estatística)
3. **Contatar universidades locais** para parcerias
4. **Configurar WhatsApp Business** para atendimento

### Próximo Mês
1. **Coletar primeiros depoimentos** de clientes
2. **Desenvolver primeiro curso online**
3. **Estabelecer parcerias** com orientadores acadêmicos
4. **Otimizar SEO** do site

---

**🎉 Parabéns! Seu site está online e pronto para gerar renda extra!**

**URL do Site:** https://arturcarv.github.io/AM_Analises  
**Dashboard Financeiro:** https://arturcarv.github.io/AM_Analises/financial-dashboard.html

**Meta Realista:** R$ 1.250/mês em renda extra  
**Meta Otimista:** R$ 2.900/mês em renda extra

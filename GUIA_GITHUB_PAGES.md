# 🚀 Guia Completo - GitHub Pages para AM Análises

## 📋 Pré-requisitos
- Conta no GitHub (gratuita)
- Git instalado no seu computador
- Seu site já está pronto!

## 🔧 Passo 1: Instalar Git (se não tiver)

### Windows:
1. Baixe o Git de: https://git-scm.com/download/win
2. Instale com as configurações padrão
3. Abra o PowerShell como administrador
4. Teste com: `git --version`

## 📁 Passo 2: Preparar o Repositório Local

### 1. Abrir PowerShell na pasta do projeto:
```powershell
cd "C:\Users\Artur.Medeiros\Temporário\Site"
```

### 2. Inicializar repositório Git:
```bash
git init
```

### 3. Adicionar todos os arquivos:
```bash
git add .
```

### 4. Fazer primeiro commit:
```bash
git commit -m "Site AM Análises - Consultoria Estatística"
```

### 5. Renomear branch para main:
```bash
git branch -M main
```

## 🌐 Passo 3: Criar Repositório no GitHub

### 1. Acesse: https://github.com
### 2. Faça login na sua conta
### 3. Clique em "New repository" (botão verde)
### 4. Configure o repositório:
   - **Repository name**: `am-analises` (ou o nome que preferir)
   - **Description**: `Site de consultoria em análises estatísticas`
   - **Visibility**: Public (para GitHub Pages gratuito)
   - **NÃO marque** "Add a README file"
   - **NÃO marque** "Add .gitignore"
   - **NÃO marque** "Choose a license"

### 5. Clique em "Create repository"

## 🔗 Passo 4: Conectar Repositório Local ao GitHub

### 1. Copie a URL do seu repositório (aparece na página do GitHub)
### 2. No PowerShell, execute:
```bash
git remote add origin https://github.com/SEU-USUARIO/am-analises.git
```
*(Substitua SEU-USUARIO pelo seu nome de usuário do GitHub)*

### 3. Enviar arquivos para o GitHub:
```bash
git push -u origin main
```

### 4. Digite seu usuário e senha do GitHub quando solicitado

## ⚙️ Passo 5: Ativar GitHub Pages

### 1. No seu repositório no GitHub, vá em **Settings**
### 2. Role para baixo até **Pages** (no menu lateral esquerdo)
### 3. Em **Source**, selecione **Deploy from a branch**
### 4. Em **Branch**, selecione **main**
### 5. Em **Folder**, selecione **/ (root)**
### 6. Clique em **Save**

## 🎉 Passo 6: Acessar seu Site

### 1. Aguarde alguns minutos (até 10 minutos)
### 2. Seu site estará disponível em:
   ```
   https://SEU-USUARIO.github.io/am-analises
   ```
   *(Substitua SEU-USUARIO pelo seu nome de usuário)*

## 🔄 Passo 7: Atualizações Futuras

### Para atualizar o site:
```bash
git add .
git commit -m "Descrição da atualização"
git push
```

## 🎨 Passo 8: Domínio Personalizado (Opcional)

### 1. Compre um domínio (ex: amanalises.com)
### 2. Crie arquivo `CNAME` na raiz do projeto:
   ```
   amanalises.com
   ```
### 3. Configure DNS no seu provedor:
   ```
   Tipo: CNAME
   Nome: www
   Valor: SEU-USUARIO.github.io
   
   Tipo: A
   Nome: @
   Valor: 185.199.108.153
   Valor: 185.199.109.153
   Valor: 185.199.110.153
   Valor: 185.199.111.153
   ```

## 🛠️ Comandos Úteis

### Ver status do repositório:
```bash
git status
```

### Ver histórico de commits:
```bash
git log --oneline
```

### Desfazer última alteração:
```bash
git checkout -- .
```

### Clonar repositório em outro computador:
```bash
git clone https://github.com/SEU-USUARIO/am-analises.git
```

## ❗ Problemas Comuns

### Erro de autenticação:
- Use Personal Access Token em vez de senha
- Configure: Settings > Developer settings > Personal access tokens

### Site não aparece:
- Aguarde até 10 minutos
- Verifique se o branch está correto (main)
- Verifique se o arquivo index.html está na raiz

### Erro de push:
```bash
git pull origin main
git push origin main
```

## 📞 Suporte

Se tiver problemas:
1. Verifique se seguiu todos os passos
2. Consulte a documentação do GitHub Pages
3. Teste com um arquivo HTML simples primeiro

---

**🎯 Seu site estará online em poucos minutos!**

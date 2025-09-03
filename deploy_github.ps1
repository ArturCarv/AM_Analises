# Script PowerShell para deploy no GitHub Pages
# AM Análises - Consultoria Estatística

Write-Host "🚀 DEPLOY GITHUB PAGES - AM ANÁLISES" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Verificar se Git está instalado
try {
    $gitVersion = git --version
    Write-Host "✅ Git encontrado: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git não encontrado!" -ForegroundColor Red
    Write-Host "Por favor, instale o Git de: https://git-scm.com/download/win" -ForegroundColor Yellow
    Read-Host "Pressione Enter para sair"
    exit 1
}

# Verificar se estamos na pasta correta
if (-not (Test-Path "index.html")) {
    Write-Host "❌ Arquivo index.html não encontrado!" -ForegroundColor Red
    Write-Host "Execute este script na pasta do seu site." -ForegroundColor Yellow
    Read-Host "Pressione Enter para sair"
    exit 1
}

Write-Host "📁 Pasta atual: $(Get-Location)" -ForegroundColor Blue
Write-Host ""

# Inicializar repositório Git
Write-Host "🔧 Inicializando repositório Git..." -ForegroundColor Yellow
git init

# Adicionar arquivos
Write-Host "📦 Adicionando arquivos..." -ForegroundColor Yellow
git add .

# Fazer commit
Write-Host "Fazendo commit..." -ForegroundColor Yellow
git commit -m "Site AM Analises - Consultoria Estatistica"

# Renomear branch
Write-Host "🌿 Configurando branch main..." -ForegroundColor Yellow
git branch -M main

Write-Host ""
Write-Host "✅ Repositório local configurado!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 PRÓXIMOS PASSOS:" -ForegroundColor Cyan
Write-Host "1. Acesse: https://github.com" -ForegroundColor White
Write-Host "2. Crie um novo repositório público" -ForegroundColor White
Write-Host "3. Nome sugerido: am-analises" -ForegroundColor White
Write-Host "4. NÃO marque nenhuma opção (README, .gitignore, license)" -ForegroundColor White
Write-Host "5. Copie a URL do repositório" -ForegroundColor White
Write-Host ""
Write-Host "🔗 Depois execute:" -ForegroundColor Yellow
Write-Host "git remote add origin https://github.com/SEU-USUARIO/am-analises.git" -ForegroundColor White
Write-Host "git push -u origin main" -ForegroundColor White
Write-Host ""
Write-Host "⚙️ Para ativar GitHub Pages:" -ForegroundColor Yellow
Write-Host "Settings > Pages > Deploy from a branch > main" -ForegroundColor White
Write-Host ""

$continue = Read-Host "Deseja continuar com a configuração do repositório remoto? (s/n)"
if ($continue -eq "s" -or $continue -eq "S") {
    $repoUrl = Read-Host "Cole a URL do seu repositório GitHub"
    
    if ($repoUrl) {
        Write-Host "🔗 Conectando ao repositório remoto..." -ForegroundColor Yellow
        git remote add origin $repoUrl
        
        Write-Host "📤 Enviando arquivos para o GitHub..." -ForegroundColor Yellow
        git push -u origin main
        
        Write-Host ""
        Write-Host "🎉 DEPLOY CONCLUÍDO!" -ForegroundColor Green
        Write-Host "Seu site estará disponível em alguns minutos em:" -ForegroundColor White
        Write-Host "$repoUrl" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "⚙️ Lembre-se de ativar GitHub Pages em Settings > Pages" -ForegroundColor Yellow
    }
}

Read-Host "Pressione Enter para sair"

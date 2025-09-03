@echo off
echo ========================================
echo   OTIMIZADOR DE IMAGENS - AM ANALISES
echo ========================================
echo.

REM Verificar se Python está instalado
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Python não encontrado!
    echo.
    echo Por favor, instale o Python 3.7+ de: https://python.org
    echo Certifique-se de marcar "Add Python to PATH" durante a instalação
    pause
    exit /b 1
)

REM Verificar se Pillow está instalado
python -c "import PIL" >nul 2>&1
if errorlevel 1 (
    echo 📦 Instalando biblioteca Pillow...
    pip install Pillow
    if errorlevel 1 (
        echo ❌ Erro ao instalar Pillow!
        pause
        exit /b 1
    )
)

echo 🚀 Iniciando otimização das imagens...
echo.

REM Executar script de otimização
python optimize_images.py

echo.
echo ✅ Otimização concluída!
echo.
echo 📁 As imagens otimizadas estão na pasta 'Exemplos_Optimized'
echo 💡 Para usar as imagens otimizadas:
echo    1. Faça backup da pasta 'Exemplos' atual
echo    2. Renomeie 'Exemplos_Optimized' para 'Exemplos'
echo    3. Teste o site para verificar se tudo está funcionando
echo.
pause

# 🐍 Guia de Uso - Dashboard Financeiro Python

## 📋 Pré-requisitos

### Instalar Python
1. **Baixar Python 3.8+** de: https://python.org
2. **Instalar com "Add Python to PATH"** marcado
3. **Verificar instalação**:
   ```bash
   python --version
   pip --version
   ```

### Instalar Dependências
```bash
cd "C:\Users\Artur.Medeiros\Temporário\Site"
pip install -r requirements.txt
```

## 🚀 Como Executar

### Execução Simples
```bash
cd "C:\Users\Artur.Medeiros\Temporário\Site"
python financial_dashboard.py
```

### Execução com Interface Moderna (Opcional)
```bash
pip install customtkinter
python financial_dashboard.py
```

## 💰 Funcionalidades

### 1. Nova Transação
- **Descrição**: Nome do projeto/serviço
- **Valor**: Valor em reais (R$)
- **Tipo**: Receita ou Despesa
- **Categoria**: Consultoria, Curso, Template, Outros

### 2. Configurações
- **Meta Mensal**: Valor objetivo mensal
- **Meta Anual**: Valor objetivo anual
- **Meta Clientes**: Número de clientes mensais

### 3. Dashboard
- **Receita Mensal**: Soma das receitas do mês
- **Projetos**: Número de projetos concluídos
- **Meta**: Percentual da meta atingida
- **Transações Recentes**: Lista das últimas 20 transações

### 4. Exportação
- **Formato**: JSON
- **Conteúdo**: Todas as transações e metas
- **Uso**: Backup e análise externa

## 📊 Interpretação dos Dados

### Métricas Positivas
- **Receita crescente**: Projetos aumentando
- **Meta atingida**: Objetivos sendo cumpridos
- **Diversificação**: Múltiplas categorias

### Sinais de Atenção
- **Receita decrescente**: Revisar estratégia
- **Meta não atingida**: Ajustar ações
- **Poucos projetos**: Investir em marketing

## 🔧 Personalização

### Alterar Metas
1. Vá em "Configurações"
2. Altere os valores desejados
3. Clique em "Atualizar Metas"

### Adicionar Categorias
Edite o arquivo `financial_dashboard.py`:
```python
values=["consultoria", "curso", "template", "nova_categoria"]
```

### Alterar Cores
Modifique as cores no código:
```python
bg='#1d4ed8'  # Azul primário
bg='#059669'  # Verde secundário
bg='#dc2626'  # Vermelho para alertas
```

## 💾 Backup e Segurança

### Backup Automático
- Os dados são salvos em `financial_data.json`
- Backup manual através do botão "Exportar"

### Segurança
- **NÃO compartilhar** o arquivo `financial_data.json`
- **Fazer backup** regular dos dados
- **Manter privado** o arquivo Python

### Restaurar Dados
1. Pare a aplicação
2. Substitua o arquivo `financial_data.json`
3. Reinicie a aplicação

## 🐛 Solução de Problemas

### Erro: "ModuleNotFoundError"
**Solução**: Instalar dependências
```bash
pip install matplotlib pandas
```

### Erro: "Tkinter not found"
**Solução**: Reinstalar Python com Tkinter
- Desinstalar Python
- Reinstalar com "tcl/tk and IDLE" marcado

### Aplicação não abre
**Soluções**:
- Verificar se Python está instalado
- Executar como administrador
- Verificar dependências

### Dados não salvam
**Soluções**:
- Verificar permissões da pasta
- Executar como administrador
- Verificar espaço em disco

## 📈 Relatórios Sugeridos

### Relatório Semanal
- Receita da semana
- Projetos concluídos
- Progresso das metas

### Relatório Mensal
- Comparação com mês anterior
- Análise de tendências
- Ajuste de metas

### Relatório Anual
- Receita total do ano
- Crescimento anual
- Planejamento do próximo ano

## 🎯 Integração com Negócio

### Uso Estratégico
- **Tomada de Decisão**: Baseada em dados reais
- **Precificação**: Ajustar valores conforme demanda
- **Marketing**: Focar em categorias mais lucrativas

### Relatórios para Investidores
- Exportar dados para planilhas
- Criar gráficos profissionais
- Apresentar resultados mensais

## 🔄 Atualizações Futuras

### Funcionalidades Planejadas
- **Gráficos avançados**: Com Matplotlib
- **Relatórios automáticos**: PDF
- **Integração**: Com planilhas Excel
- **Backup**: Automático na nuvem

### Melhorias de Interface
- **Tema escuro**: Opção de tema
- **Gráficos interativos**: Com Plotly
- **Dashboard web**: Versão online
- **App mobile**: Versão Android/iOS

---

**Importante**: Esta aplicação é privada e deve ser mantida segura. Os dados financeiros são sensíveis e não devem ser compartilhados.

**Suporte**: Para dúvidas, entre em contato via WhatsApp: +55 61 99861-9189


# 🎨 Logos AM Análises

Este documento descreve as novas opções de logo criadas e como integrá-las no site.

---

## 📊 Logos Disponíveis

### 1. **Logo Principal** (`logo-nova.svg`)
**Descrição:** Combinação elegante das opções 3 e 4
- ✅ Curvas gaussianas (distribuição normal)
- ✅ Nós conectados (rede neural/correlação)
- ✅ Gradiente moderno (azul → roxo → rosa)
- ✅ Sombras e área preenchida

**Melhor para:** Visual científico e moderno

---

### 2. **Variação 1 - Vibrante** (`logo-variacao-1.svg`)
**Descrição:** Design impactante com efeito glow
- ✅ Efeito de brilho/glow nas curvas
- ✅ Nós com borda branca destacada
- ✅ Cores vibrantes
- ✅ Aura de fundo

**Melhor para:** Destaque visual, chamativa

---

### 3. **Variação 2 - Profissional** (`logo-variacao-2.svg`)
**Descrição:** Tom azul corporativo
- ✅ Paleta azul profissional
- ✅ Área preenchida nas curvas
- ✅ Círculos concêntricos de fundo
- ✅ Nós com efeito de profundidade

**Melhor para:** Apresentações corporativas, credibilidade

---

### 4. **Variação 3 - Dinâmica** (`logo-variacao-3.svg`)
**Descrição:** Malha de conexões com degradê suave
- ✅ Malha neural complexa
- ✅ Degradê ciano → roxo
- ✅ Nós com brilho
- ✅ Anel circular de fundo

**Melhor para:** Visual contemporâneo, tech-oriented

---

## 🖼️ Visualizando as Logos

1. **Abra o visualizador:**
   ```
   Site/Logo/visualizar-logos.html
   ```

2. **Clique em cada logo** para ver em diferentes fundos:
   - Fundo branco
   - Fundo claro
   - Fundo escuro

3. **Escolha sua favorita** e clique em "Selecionar Esta"

---

## 🔧 Como Integrar no Site

### Método 1: Usando SVG diretamente (Recomendado)

1. **Escolha sua logo favorita** (ex: `logo-nova.svg`)

2. **Renomeie para `Logo.svg`** (ou atualize referências)

3. **Atualize o HTML:**
```html
<!-- No index.html, linha ~45 -->
<div class="logo">
    <img src="Logo/Logo.svg" alt="AM Análises - Logo" loading="eager">
    <span>AM Análises</span>
</div>
```

### Método 2: Convertendo para PNG

**Opção A - Online (Fácil):**
1. Acesse: https://cloudconvert.com/svg-to-png
2. Upload do SVG escolhido
3. Configure: 200x200px, fundo transparente
4. Baixe como `Logo.png`
5. Substitua na pasta `Logo/`

**Opção B - Usando ferramenta:**
```bash
# Inkscape (se instalado)
inkscape logo-nova.svg --export-png=Logo.png --export-width=200 --export-height=200

# ImageMagick (se instalado)
convert -background none -density 300 logo-nova.svg -resize 200x200 Logo.png
```

---

## 📐 Tamanhos Recomendados

| Uso | Dimensões | Formato |
|-----|-----------|---------|
| **Site (header)** | 200x200px | SVG ou PNG |
| **Favicon** | 32x32px | PNG/ICO |
| **Apple Touch Icon** | 180x180px | PNG |
| **Open Graph** | 1200x630px | PNG |
| **Redes Sociais** | 400x400px | PNG |
| **Impressão** | 1000x1000px | PNG/PDF |

---

## 🎨 Paleta de Cores

### Logo Nova
- **Azul Primário:** `#2563eb`
- **Roxo Médio:** `#7c3aed`
- **Rosa Accent:** `#ec4899`

### Variação 1
- **Índigo:** `#6366f1`
- **Roxo:** `#8b5cf6`
- **Rosa:** `#ec4899`

### Variação 2
- **Azul Escuro:** `#1e40af`
- **Azul Médio:** `#6366f1`
- **Roxo Claro:** `#8b5cf6`

### Variação 3
- **Ciano:** `#0ea5e9`
- **Índigo:** `#6366f1`
- **Roxo:** `#a855f7`

---

## ✅ Checklist de Integração

- [ ] Escolher logo favorita no visualizador
- [ ] Baixar/copiar arquivo SVG
- [ ] Converter para PNG (se necessário)
- [ ] Renomear para `Logo.png` ou `Logo.svg`
- [ ] Substituir arquivo na pasta `Logo/`
- [ ] Testar no navegador
- [ ] Verificar em diferentes tamanhos
- [ ] Gerar favicon (32x32px)
- [ ] Atualizar Open Graph image
- [ ] Commit e push

---

## 🔄 Variações de Uso

### Para Fundo Escuro
Use as versões com:
- Cores mais claras
- Maior contraste
- Borda branca nos nós

### Para Fundo Claro
Use as versões com:
- Cores saturadas
- Gradientes vibrantes
- Sem bordas

### Para Impressão
Use:
- Alta resolução (1000x1000px)
- Formato vetorial (SVG/PDF)
- Versão monocromática (opcional)

---

## 💡 Dicas

1. **Consistência:** Use a mesma logo em todo o site
2. **Qualidade:** Sempre use vetores (SVG) quando possível
3. **Responsividade:** Teste em mobile e desktop
4. **Acessibilidade:** Sempre inclua alt text descritivo
5. **Performance:** Otimize PNGs para web (< 50KB)

---

## 📞 Suporte

Se precisar de ajuda para:
- Converter formatos
- Ajustar cores
- Criar variações
- Otimizar arquivos

Entre em contato ou use as ferramentas online recomendadas!

---

**Criado por:** AM Análises  
**Data:** Novembro 2024  
**Versão:** 1.0


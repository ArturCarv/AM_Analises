# 📧 Guia de Configuração do Formulário de Contato

## 🎯 Situação Atual

O formulário de contato está configurado com **mailto:** como solução temporária. Quando alguém envia o formulário, abre o cliente de e-mail padrão.

**Problema:** Nem todos têm cliente de e-mail configurado, e a experiência não é ideal.

---

## ✅ Solução Profissional: Formspree (RECOMENDADA)

### 🆓 Gratuito até 50 envios/mês

### **Passo 1: Criar Conta no Formspree**

1. Acesse: https://formspree.io/
2. Clique em **"Get Started"**
3. Crie uma conta gratuita com seu e-mail `amanalises.consultoria@gmail.com`
4. Confirme o e-mail

### **Passo 2: Criar um Novo Form**

1. No painel do Formspree, clique em **"+ New Form"**
2. Dê um nome: `AM Análises - Contato`
3. **Email to notify:** `amanalises.consultoria@gmail.com`
4. Clique em **"Create Form"**

### **Passo 3: Copiar o Endpoint**

Após criar o form, você verá um endpoint como:
```
https://formspree.io/f/XXXXXXXX
```

**COPIE ESTE CÓDIGO!**

### **Passo 4: Atualizar o Site**

Abra `Site/index.html` e procure pela linha ~276:

**ANTES:**
```html
<form class="contact-form fade-in" id="contactForm" role="form">
```

**DEPOIS:**
```html
<form class="contact-form fade-in" id="contactForm" 
      action="https://formspree.io/f/XXXXXXXX" 
      method="POST" role="form">
```

Substitua `XXXXXXXX` pelo seu código do Formspree!

### **Passo 5: Atualizar o JavaScript**

Abra `Site/scripts.js` e substitua o código do formulário (linhas 49-105) por este:

```javascript
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
```

### **Passo 6: Testar**

1. Salve os arquivos
2. Recarregue o site
3. Preencha e envie o formulário
4. Verifique seu e-mail `amanalises.consultoria@gmail.com`

---

## 🔄 Alternativa: EmailJS (Também Gratuita)

Se preferir EmailJS (100 emails/mês grátis):

### **Configuração EmailJS:**

1. Acesse: https://www.emailjs.com/
2. Crie uma conta gratuita
3. Adicione seu serviço de e-mail (Gmail)
4. Crie um template de e-mail
5. Pegue suas credenciais: `USER_ID`, `SERVICE_ID`, `TEMPLATE_ID`

### **Código para EmailJS:**

```javascript
// Adicione no <head> do index.html:
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
    emailjs.init("SEU_USER_ID"); // Substitua
</script>

// No scripts.js:
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const submitBtn = this.querySelector('.submit-btn');
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;

    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    emailjs.send('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', templateParams)
        .then(function(response) {
            alert('✅ Mensagem enviada com sucesso!');
            contactForm.reset();
        }, function(error) {
            alert('❌ Erro ao enviar: ' + error.text);
        })
        .finally(() => {
            submitBtn.textContent = 'Enviar Mensagem';
            submitBtn.disabled = false;
        });
});
```

---

## 📊 Comparação das Soluções

| Solução | Grátis? | Limite | Facilidade | Recomendação |
|---------|---------|--------|------------|--------------|
| **Formspree** | ✅ Sim | 50/mês | ⭐⭐⭐⭐⭐ | ⭐ MELHOR |
| **EmailJS** | ✅ Sim | 100/mês | ⭐⭐⭐⭐ | Boa |
| **Mailto:** | ✅ Sim | Ilimitado | ⭐⭐ | Temporária |
| **Google Script** | ✅ Sim | Ilimitado | ⭐⭐ | Complexa |

---

## 🎯 Minha Recomendação

**Use Formspree!** É a solução mais simples e profissional:

1. ✅ Configuração em 5 minutos
2. ✅ Não precisa configurar servidor
3. ✅ Recebe e-mails diretamente
4. ✅ Interface limpa para gerenciar mensagens
5. ✅ Gratuito para até 50 mensagens/mês
6. ✅ Proteção anti-spam integrada

---

## 🆘 Problemas Comuns

### "O formulário não envia"
- Verifique se copiou o endpoint correto do Formspree
- Veja o Console do navegador (F12) para erros
- Confirme que verificou o e-mail no Formspree

### "Recebo spam"
- Ative o reCAPTCHA no painel do Formspree
- Configure filtros no Gmail

### "Quero receber em outro e-mail"
- No painel do Formspree, vá em Settings → Notification Email
- Adicione outros e-mails

---

## 📞 Testando o Formulário Atual

**Solução Temporária Implementada:**
- O formulário atual usa `mailto:`
- Abre o cliente de e-mail padrão
- **FUNCIONA**, mas não é ideal

**Para ter uma solução profissional:**
- Configure o Formspree seguindo os passos acima
- Leva apenas 5 minutos
- Gratuito e muito melhor!

---

## ✅ Checklist de Implementação

- [ ] Criar conta no Formspree
- [ ] Criar novo form
- [ ] Copiar endpoint (código único)
- [ ] Atualizar `index.html` com o action
- [ ] Atualizar `scripts.js` com o código do Formspree
- [ ] Testar enviando uma mensagem
- [ ] Verificar recebimento no e-mail
- [ ] (Opcional) Ativar reCAPTCHA anti-spam
- [ ] (Opcional) Personalizar mensagem de sucesso

---

**Criado por:** AM Análises  
**Data:** Novembro 2024  
**Última atualização:** Correção do formulário de contato


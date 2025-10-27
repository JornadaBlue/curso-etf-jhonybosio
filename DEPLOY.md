# 🚀 Guia de Deploy - Rota da Paz Financeira

Este guia vai te ajudar a colocar seu curso no ar em poucos minutos usando o GitHub Pages.

## ✅ Pré-requisitos

- Conta no GitHub (gratuita)
- O projeto já está pronto e funcionando localmente

## 📦 Passo 1: Criar Repositório no GitHub

1. Acesse https://github.com e faça login
2. Clique no botão **"+"** no canto superior direito e escolha **"New repository"**
3. Preencha os dados:
   - **Repository name:** `rota-paz-financeira` (ou outro nome de sua preferência)
   - **Description:** "Curso completo de investimento em ETFs"
   - **Visibilidade:** Deixe como **Public** (necessário para GitHub Pages gratuito)
   - **NÃO** marque "Initialize this repository with a README"
4. Clique em **"Create repository"**

## 🔗 Passo 2: Conectar Seu Projeto ao GitHub

Copie e cole os comandos abaixo no terminal (substitua `SEU_USUARIO` pelo seu username do GitHub):

```bash
cd /home/ubuntu/rota-paz-financeira

# Adicionar o remote do GitHub
git remote add origin https://github.com/SEU_USUARIO/rota-paz-financeira.git

# Renomear a branch para main
git branch -M main

# Fazer push do código
git push -u origin main
```

**Nota:** Se pedir usuário e senha, use seu username do GitHub e um **Personal Access Token** (não a senha normal). Para criar um token:
1. GitHub > Settings > Developer settings > Personal access tokens > Tokens (classic)
2. Generate new token (classic)
3. Marque "repo" e "workflow"
4. Copie o token e use como senha

## ⚙️ Passo 3: Ativar GitHub Pages

1. No seu repositório no GitHub, vá em **Settings** (aba no topo)
2. No menu lateral esquerdo, clique em **Pages**
3. Em **"Source"**, selecione **"GitHub Actions"**
4. Pronto! O deploy automático já está configurado

## 🎉 Passo 4: Aguardar o Deploy

1. Vá na aba **Actions** do seu repositório
2. Você verá um workflow chamado "Deploy to GitHub Pages" rodando
3. Aguarde alguns minutos até aparecer um ✅ verde
4. Seu site estará disponível em: `https://SEU_USUARIO.github.io/rota-paz-financeira/`

## 🌐 Passo 5: Configurar Domínio Personalizado (Opcional)

### Comprar um Domínio

Recomendo comprar um domínio profissional. Sugestões:

- `rotadapazfinanceira.com.br`
- `metodobosio.com.br`
- `etfbrasil.com.br`
- `investimentoetf.com.br`

**Onde comprar:**
- [Registro.br](https://registro.br) - Para domínios .br (mais barato, R$ 40/ano)
- [Namecheap](https://www.namecheap.com) - Para domínios .com
- [Google Domains](https://domains.google) - Fácil de usar

### Configurar o DNS

Após comprar o domínio, vá no painel de DNS do registrador e adicione estes registros:

**Registros A (para o domínio raiz):**

```
Tipo: A
Nome: @ (ou deixe em branco)
Valor: 185.199.108.153

Tipo: A
Nome: @ (ou deixe em branco)
Valor: 185.199.109.153

Tipo: A
Nome: @ (ou deixe em branco)
Valor: 185.199.110.153

Tipo: A
Nome: @ (ou deixe em branco)
Valor: 185.199.111.153
```

**Registro CNAME (para www):**

```
Tipo: CNAME
Nome: www
Valor: SEU_USUARIO.github.io
```

### Conectar o Domínio ao GitHub Pages

1. No GitHub, vá em **Settings** > **Pages**
2. Em **"Custom domain"**, digite seu domínio (ex: `rotadapazfinanceira.com.br`)
3. Clique em **"Save"**
4. Aguarde a verificação (pode levar até 24 horas)
5. Após verificado, marque **"Enforce HTTPS"**

Pronto! Seu site estará acessível pelo domínio personalizado.

## 🔄 Como Atualizar o Site

Sempre que você fizer mudanças no código:

```bash
cd /home/ubuntu/rota-paz-financeira

# Adicionar as mudanças
git add .

# Fazer commit
git commit -m "Descrição das mudanças"

# Fazer push
git push
```

O GitHub Actions vai automaticamente fazer o deploy das mudanças em alguns minutos.

## 🆘 Problemas Comuns

### "Permission denied" ao fazer push

**Solução:** Use um Personal Access Token em vez da senha. Veja as instruções no Passo 2.

### Site não carrega (404)

**Solução:** 
1. Verifique se o workflow do GitHub Actions terminou com sucesso (aba Actions)
2. Aguarde alguns minutos após o deploy
3. Limpe o cache do navegador (Ctrl+Shift+R)

### Domínio personalizado não funciona

**Solução:**
1. Verifique se os registros DNS estão corretos
2. Aguarde até 24 horas para propagação do DNS
3. Use https://dnschecker.org para verificar se o DNS está propagado

## 📞 Precisa de Ajuda?

Se tiver dúvidas, consulte a [documentação oficial do GitHub Pages](https://docs.github.com/pt/pages).

---

**Boa sorte com seu curso! 🚀**


# TODO - Rota da Paz Financeira

## Funcionalidades Planejadas

### Landing Page
- [ ] Design e estrutura da landing page de vendas
- [ ] Seção Hero com título e CTA principal
- [ ] Seção de benefícios do curso
- [ ] Seção de depoimentos (social proof)
- [ ] Seção de preço e garantia
- [ ] Seção de FAQ
- [ ] Seção de apresentação do Bosio Finance Club (upsell)
- [ ] Footer com links e informações de contato

### Páginas de Conteúdo do Curso
- [ ] Página do Módulo 1: O Fim da Ansiedade Financeira
- [ ] Página do Módulo 2: O Mapa da Rota
- [ ] Página do Módulo 3: A Alocação Estratégica (O Método Bosio)
- [ ] Página do Módulo 4: Otimização e Tributação
- [ ] Página do Módulo 5: O Próximo Nível (A Transição para o Club)

### Navegação e Layout
- [ ] Header com navegação entre módulos
- [ ] Sidebar para navegação interna de cada módulo
- [ ] Breadcrumbs para orientação do usuário
- [ ] Botões de navegação (anterior/próximo)

### Página do Bosio Finance Club
- [ ] Apresentação do Club
- [ ] Detalhes das 3 carteiras (Conservadora, Moderada, Agressiva)
- [ ] Seção de preço e assinatura
- [ ] FAQ do Club
- [ ] CTA para inscrição

### Otimizações
- [ ] SEO (meta tags, Open Graph)
- [ ] Performance (lazy loading, otimização de imagens)
- [ ] Responsividade (mobile, tablet, desktop)
- [ ] Acessibilidade (ARIA labels, navegação por teclado)

### Deploy
- [ ] Configuração para GitHub Pages
- [ ] Documentação de deploy
- [ ] Instruções para domínio personalizado

## Bugs Conhecidos

(Nenhum bug conhecido no momento)




## Progresso Atual

### Implementado
- [x] Configuração de tema e cores (azul e verde profissional)
- [x] Fonte Inter do Google Fonts
- [x] Componente CourseLayout com navegação lateral
- [x] Página do Módulo 1 completa
- [x] Landing Page com Hero, Benefícios, Módulos, Preço, FAQ e CTA
- [x] Página do Bosio Finance Club com detalhes das 3 carteiras
- [x] Rotas configuradas no App.tsx
- [x] README.md completo com instruções de deploy
- [x] DEPLOY.md com guia simplificado em português
- [x] GitHub Actions workflow para deploy automático
- [x] Conteúdo completo dos 5 módulos elaborado (arquivos .md)
- [x] Repositório Git inicializado e pronto para push

### Pendente
- [ ] Criar páginas dos Módulos 2, 3, 4 e 5 (conteúdo já elaborado)
- [ ] Integração com sistema de pagamento (Stripe/Mercado Pago/Hotmart)
- [ ] Sistema de autenticação para acesso ao conteúdo
- [ ] Plataforma de membros para o Bosio Finance Club
- [ ] Email marketing e automações




## Bugs a Corrigir
- [x] Erro de aninhamento de tags <a> dentro de <Link> (validateDOMNesting warning)


- [x] Corrigir alinhamento do header na visão mobile (remover estilos inline e usar classes responsivas do Tailwind)




## Novas Funcionalidades Solicitadas

### Páginas dos Módulos
- [ ] Criar página do Módulo 2: O Mapa da Rota
- [ ] Criar página do Módulo 3: A Alocação Estratégica (O Método Bosio)
- [ ] Criar página do Módulo 4: Otimização e Tributação
- [ ] Criar página do Módulo 5: O Próximo Nível

### Sistema de Pagamento e Autenticação
- [x] Integrar sistema de pagamento (Hotmart - Opção C)
- [x] Criar sistema de login com senha
- [x] Criar proteção de rotas (ProtectedRoute)
- [x] Implementar AuthContext para gerenciar autenticação
- [x] Criar página de Login
- [x] Adicionar botão de Logout no header

### Conteúdo Adicional
- [ ] Integrar novo conteúdo fornecido (ETFs específicos, tributação, etc)
- [ ] Criar planilhas de exemplo (alocação, rebalanceamento)
- [ ] Adicionar exercícios/quizzes para cada módulo
- [ ] Criar exemplos práticos de carteiras reais
- [ ] Design de certificado de conclusão

### Deploy e GitHub
- [ ] Criar repositório no GitHub
- [ ] Fazer push do código para o GitHub
- [ ] Configurar GitHub Actions para deploy automático
- [ ] Testar deploy no GitHub Pages




## Tarefas Concluídas
- [x] Integrar link de checkout do Hotmart nos botões de compra
- [x] Criar página do Módulo 2 (O Mapa da Rota)
- [x] Criar página do Módulo 3 (A Alocação Estratégica)
- [x] Criar página do Módulo 4 (Tributação)
- [x] Criar página do Módulo 5 (Próximo Nível)
- [x] Adicionar rotas dos Módulos 2-5 no App.tsx com proteção
- [x] Todos os 5 módulos do curso criados e funcionando




## Bugs Corrigidos
- [x] Erro de aninhamento de tags <a> na Landing Page (Link envolvendo Button com asChild)




## Adaptação para Hotmart Club (Opção A)
- [x] Remover sistema de login (AuthContext, Login.tsx, ProtectedRoute)
- [x] Remover rotas protegidas dos módulos
- [x] Adaptar Landing Page para direcionar apenas para checkout do Hotmart
- [x] Atualizar botões "Acessar Curso" para "Comprar Agora"
- [x] Remover links para módulos internos
- [x] Criar guia de como subir conteúdo no Hotmart Club
- [x] Preparar arquivos de conteúdo em formato compatível (Markdown)


- [x] Adicionar seção sobre Tutor IA (assistente inteligente 24/7) na Landing Page




## Conversão para Full-Stack e Armazenamento de Arquivos
- [x] Adicionar feature web-db-user (backend + database + autenticação)
- [x] Criar schema do banco de dados para arquivos e conteúdo do curso
- [x] Implementar upload de arquivos para S3
- [x] Criar API endpoints para gerenciar arquivos (upload, list, delete)
- [x] Criar painel administrativo para upload e gestão de conteúdo (/admin/files)
- [x] Implementar listagem de arquivos do curso
- [x] Adicionar funcionalidade de download de materiais


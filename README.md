# Atividade - React - Revisão

## Informações gerais
- **Objetivo**: revisar os conteúdos do 1o semestre
- **Público alvo**: alunos da disciplina de POS (Programação Orientada a Serviços) do curso de Infoweb (Técnico Integrado em Informática para Internet) no CNAT-IFRN (Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte - Campus Natal-Central)
- **Professor**: [L A Minora](https://github.com/leonardo-minora/)
- **Aluno**: [Murillo Viniz](https://github.com/muri06)

## Atividade

1. Fork desse repositório
2. Crie um projeto React (Next + Typescript + Shadcn + Tailwind), realize commit
3. Acesse https://dummyjson.com/docs, escolha quais dados irá usar e monte 1 ou 2 UI com componentes shadcnui e tailwind com dados locais (variáveis), realize commit
4. Adicione gerenciamento de estado a(s) UI(s) criadas, realize commit
5. Adicione acesso a API https://dummyjson.com/docs


## Boilerplate criado

Adicionei um boilerplate mínimo em Next + TypeScript + Tailwind e exemplo funcional:

- Estrutura: `pages/`, `components/`, `lib/`, `services/`, `styles/`.
- Estado: `Zustand` em `lib/store.ts` com dados iniciais `lib/products.ts` (mocks locais).
- UI de exemplo: lista de produtos em [pages/index.tsx](pages/index.tsx#L1).
- Componente de card: [components/ProductCard.tsx](components/ProductCard.tsx#L1).
- Integração API: `services/api.ts` com `fetchProducts()` que consome `https://dummyjson.com`.

Para executar localmente:

```bash
npm install
npm run dev
```

Observações:
- Usei `next` 14 nas dependências do `package.json`; ajuste se necessário.
- `next/image` com imagens remotas exige configuração de domínios; para simplicidade usei `img`.

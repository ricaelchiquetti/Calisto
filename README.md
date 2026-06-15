# TWD RPG — Ficha de Personagem

Ficha de personagem web para o sistema **The Walking Dead RPG (Calisto C+)**, otimizada para uso no celular e tablet durante sessões de mesa.

## Funcionalidades

- Atributos (Físico / Mente) com controle numérico
- Recursos (Vida / Sorte) com rastreamento de atual e máximo
- Perícias com grupos Base (Calisto) e C+ (Apocalipse Zumbi), bônus e total calculado
- Especialidades (máx 2) com reroll no 1
- Características com custo em pontos e bônus automático no pool de perícias
- Armas com auto-preenchimento de ataque/dano por tipo
- Experiência com tabela de custos de evolução
- Persistência automática no LocalStorage
- Importar e exportar ficha em JSON

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build e deploy

O deploy é feito automaticamente via GitHub Actions ao fazer push na branch `main`.

```bash
npm run build   # gera /dist
```

Para configurar o GitHub Pages: **Settings → Pages → Source: GitHub Actions**

## Sistema de pontos

- **12 pontos** de perícia para distribuir (máx 6 por perícia, ou 8 com Limite Sobre-humano)
- Características ativas consomem pontos do pool (ex: Especialista custa 2)
- Bônus de características são registrados manualmente na coluna Bônus de cada perícia
- **Total** = Pontuação base + Bônus = valor usado na rolagem (d6 ≤ Atributo + Total = sucesso)

## Personagem de exemplo

`marcus-lobo-ferreira.json` — ex-instrutor militar, pronto para importar na ficha.

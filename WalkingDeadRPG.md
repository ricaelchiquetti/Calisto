# The Walking Dead RPG — FastPlay

> Sistema **C+** (Calisto Plus) — baseado no Sistema Calisto v2.0 de Tiago Junges  
> **Adaptação FastPlay:** Tiago Junges & Dock Nunes  
> *Coisinha Verde & Blog do Narrador Maldito*

---

## Sumário

1. [Sinopse do Cenário](#sinopse-do-cenário)
2. [Os Zumbis](#os-zumbis)
3. [Criação de Personagem](#criação-de-personagem)
4. [Regras Básicas](#regras-básicas)
5. [Combate](#combate)
6. [Regras Avançadas de Combate](#regras-avançadas-de-combate)
7. [Sorte](#sorte)
8. [Características](#características)
9. [Perícias](#perícias)
10. [Poderes](#poderes)
11. [Experiência e Evolução](#experiência-e-evolução)
12. [Armas e Equipamentos](#armas-e-equipamentos)
13. [Apêndice: Inimigos](#apêndice-inimigos)

---

## Sinopse do Cenário

**The Walking Dead** é uma história em quadrinhos publicada nos Estados Unidos pela **Image Comics** a partir de 2003. Narra a história de um grupo de pessoas tentando sobreviver em um mundo atingido por um apocalipse zumbi.

A série é centrada em **Rick Grimes**, um oficial de polícia da pequena cidade de *Cynthiana*, no estado do *Kentucky*. Também acompanha a trajetória de sua família e uma série de outros sobreviventes que se uniram para manterem-se vivos depois que o mundo foi infestado por *zumbis*. Com o progresso da série, as personagens tornam-se mais desenvolvidas e suas personalidades são demonstradas sob a tensão de um apocalipse zumbi.

---

## Os Zumbis

Não está claro por quanto tempo uma pessoa deve estar morta antes de ser "ressuscitada" — existe uma variação aleatória.

**Infecção:** Fluídos corporais de zumbis em contato com seres humanos **não** os infecta. Apenas **mordidas e arranhões** transmitem a infecção. Um ferimento aberto, porém, torna-se veículo de contágio em contato com fluidos — então tenha cuidado.

> **Atenção:** Uma mordida pode levar à morte se a parte do corpo infectada não for cortada e limpa **imediatamente**.

**Como matar:** A única maneira de matar um zumbi é **destruindo o cérebro**. A decapitação não mata — a cabeça continua tentando morder.

### Tipos de Zumbi

| Tipo | Comportamento |
|---|---|
| **Andarilhos** | Seguem presas e ruídos. Formam manadas de centenas. Não se cansam. |
| **Mortos-vivos** | Aguardam presas se aproximarem. Só fazem ruídos se perturbados. |

**Camuflagem:** Zumbis não percebem humanos que tenham cheiro igual ao deles — como quando um sobrevivente esfrega fluídos zumbis no próprio corpo. Além disso, um "andarilho" que está em torno de um ser humano, com o passar do tempo, irá adaptar-se a ele e geralmente parar de atacá-lo.

---

## Criação de Personagem

O sistema C+ (Calisto Plus) é uma versão expandida do **Sistema Calisto** de Tiago Junges. Criar um personagem é muito fácil — você pode usar uma ficha de personagem ou escrever em um papel em branco mesmo.

### Etapa 1 — Atributos

Distribua **6 pontos** entre **Físico** e **Mente** (máximo 6 em cada).

| Atributo | Função |
|---|---|
| **Físico** | Defesa em combate físico, recuperação de vida, iniciativa física |
| **Mente** | Defesa em ataques mentais, iniciativa mental |

### Etapa 2 — Vida e Sorte

Distribua **20 pontos** entre Vida e Sorte (máximo 20 em cada).

| Recurso | Função |
|---|---|
| **Vida** | Pontos de dano que o personagem pode absorver |
| **Sorte** | Recurso gasto para melhorar testes (ver [Sorte](#sorte)) |

### Etapa 3 — Perícias

Distribua **12 pontos** entre as perícias que quiser (máximo 6 em cada).

Aconselhável escolher pelo menos 4 perícias — por exemplo, com pontuação 4, 3, 2 e 1.

> **Limite de Perícia (regra opcional):** Uma perícia só pode ter um valor alto se houver outra perícia com um valor 1 ponto abaixo.  
> *Exemplo: Você só pode ter Combate Físico 3 se tiver outra perícia com valor 2, que por sua vez só pode existir se houver uma perícia com valor 1.*

### Etapa 4 — Especialidades

Escolha **duas perícias** que serão suas especialidades. Essas duas perícias **devem ter ligação direta** entre si.

- Se um teste de especialidade resultar em **1 no dado**, você pode **rolar novamente**.

### Etapa 5 — Características

Você pode comprar **até 3 pontos** de características na criação. O custo é pago em **pontos de perícia** (veja a tabela em [Características](#características)).

---

## Regras Básicas

### Testes

O jogador rola **1d6** e soma com a perícia ou atributo a ser testado. Se o resultado for maior ou igual à dificuldade, o teste foi bem sucedido.

| Tipo de Teste | Rolagem |
|---|---|
| **Teste de Atributo** — o mundo interage com você | `1d6 + Atributo (Físico ou Mente)` |
| **Teste de Perícia** — você interage com o mundo | `1d6 + Perícia` |

> **Sem a perícia:** o resultado máximo possível do dado é **4**, mesmo que tire 5 ou 6.

### Dificuldades

| Resultado necessário | Nível |
|---|---|
| 4 | Fácil |
| **6** | **Desafiador** *(padrão)* |
| 8 | Difícil |
| 10 | Improvável |
| 12 | Inconcebível |
| 15 | Divino (Impossível) |

### Teste Resistido

Ambos os lados rolam `1d6 + Atributo ou Perícia`. **Vence o maior resultado.**

- Em caso de empate: o Mestre decide, ou manda rolar novamente.
- Sem a perícia: máximo 4 no dado, mesmo tirando 5 ou 6.

### Regra do 6

Sempre que um dado cair no **6**, role mais um dado e some ao total. Se esse segundo dado também for 6, role mais um. Continue enquanto sair 6.

### Recuperação

- Recupera **1 ponto de Vida** e **1 de Sorte** por hora de descanso.
- Máximo recuperado por dia: **igual ao valor do atributo Físico**.

---

## Combate

### Fluxo de Combate

**1. Iniciativa**

`Físico ou Mente (de acordo com a ação) + 1d6`

Maior resultado age primeiro. Resolva os empates rolando novamente.

**2. Atacar e Defender**

| Ação | Rolagem |
|---|---|
| **Ataque** | `1d6 + Perícia de Combate` |
| **Defesa** | `1d6 + Físico` (ataques físicos) ou `1d6 + Mente` (ataques mentais) |
| **Dano sofrido** | `Total do Ataque − Total da Defesa` (mínimo zero) |

> **Exemplo:** Ataque 7 − Defesa 4 = **3 de dano**

### Ataques a Distância

- **−1** para cada 3 metros **acima** do alcance da arma.
- **−4** se estiver a **menos de 3 metros** do alvo (combate a queima-roupa prejudica a pontaria).

---

## Regras Avançadas de Combate

### Ataque Surpresa

Se o oponente está distraído ou imobilizado, ele **não ganha o modificador do atributo Físico** na defesa.

### Ataque Múltiplo

Um personagem pode fazer vários ataques numa rodada — usar duas armas, ataques rápidos ou um ataque giratório. Basta fazer os ataques normalmente e **dividir o dano de cada ataque** pelo número de ataques feitos.

### Ataque Concentrado

Use um turno inteiro para se concentrar. Se **não receber dano** nesse turno, no próximo turno você poderá **rolar 1d6 a mais e escolher o melhor resultado** entre os dados rolados.

### Defesa Total

Antes de o oponente rolar o ataque, você pode declarar **Defesa Total**. Você ganha **+1d6 na sua defesa**, mas **perde seu próximo turno**.

---

## Sorte

A Sorte é usada para **melhorar testes** de Atributo ou Perícia — antes de rolar qualquer teste, você pode gastar pontos de Sorte para aumentar sua chance de acerto.

- Cada ponto de Sorte gasto aumenta a rolagem em **+1**.
- O limite de pontos gastos por rolagem é igual ao **valor do atributo ou perícia testada**.
- Sorte é recuperada normalmente com descanso (1 por hora).

> *Exemplo: Você tem Combate Físico 3 e quer gastar Sorte. Pode gastar no máximo 3 pontos de Sorte nessa rolagem.*

---

## Características

Características funcionam como **vantagens** — cada uma concede um bônus (numérico ou especial) ao personagem. São **complemento** ao personagem; tome cuidado para não supervalorizá-las.

- Bônus variam entre **+1 e +2**.
- Podem ser **aumentadas com XP** com autorização prévia do Mestre.
- Custo na criação: em **pontos de perícia**.
- Máximo de **3 pontos** de características na criação.

| Característica | Custo | Bônus |
|---|---|---|
| Especialista | 2 | +1 nas rolagens de 3 perícias escolhidas |
| Ambidestro | 3 | Pode usar as duas mãos para atacar ou realizar ações |
| Reflexo de Combate | 4 | Sempre começa primeiro no combate |
| Determinação | 4 | +1 nas rolagens do atributo Mente ou Físico |
| Recuperação | 4 | Recupera 2 pontos de Vida e Sorte por hora de descanso |
| Limite Sobre-humano | 4 | Perícias podem ultrapassar o limite, indo até 8 |

---

## Perícias

As perícias possíveis podem variar a critério do Mestre. Seja criativo e crie outras conforme necessário — converse com o Mestre antes sobre a abrangência da nova perícia. Você deve ser coerente com o conceito do seu personagem.

### Perícias de Base (Sistema Calisto)

| Perícia | O que cobre |
|---|---|
| **Acrobacia** | Equilibrar, saltar e fazer movimentos precisos com o corpo |
| **Aparência** | Seduzir e causar boa impressão |
| **Combate (\_)** | Ataques — escolha o tipo: espada, pistola, soco, etc. |
| **Condução (\_)** | Conduzir montarias ou veículos — escolha o tipo |
| **Conhecimento (\_)** | Saber tudo sobre uma área específica — escolha o tema |
| **Coragem** | Resistir ao medo |
| **Crime** | Abrir fechaduras, furtar bolsos, mover-se em silêncio |
| **Força** | Erguer coisas pesadas, quebrar coisas e derrubar portas |
| **Lábia** | Manipular e convencer outras pessoas |
| **Percepção** | Perceber detalhes, sons e cheiros |
| **Vigor** | Resistir à fadiga, cansaço, fome e calor intenso |

### Perícias Adicionais (C+ — Apocalipse Zumbi)

| Perícia | O que cobre |
|---|---|
| **Combate Físico** | Ataques corpo a corpo sem arma |
| **Mira** | Ataques de combate a distância |
| **Pilotagem (\_)** | Para cada veículo escolhido |
| **Computadores** | Manuseio de computadores e sistemas digitais |
| **Esportes** | Escalar, nadar, correr, resistência física |
| **Furtividade** | Mover-se e agir silenciosamente |
| **Persuasão** | Manipular, convencer, seduzir, negociar |
| **Reparos (\_)** | Reparo de um grupo de dispositivos escolhidos |
| **Sobrevivência** | Conhecimento para sobreviver ao Apocalipse Zumbi |

---

## Poderes

O Mestre deve sempre aprovar o uso de qualquer Poder. Ele deve verificar principalmente se o poder faz sentido com o personagem e o cenário.

Os poderes são comprados como perícias. A única diferença é que a dificuldade está **pré-estabelecida** na descrição do poder. O jogador pode renomear um poder para fazer mais sentido com seu personagem.

| Poder | Dif. | Descrição |
|---|---|---|
| **Cura** | 6 | Toque que cura pontos de vida iguais à pontuação no poder |
| **Campo de Força** | 8 | Globo de energia de até 2m de raio, dura enquanto concentrado |
| **Ataque Mental** | — | Ataque normal, mas o defensor usa Mente em vez de Físico |
| **Telepatia** | 4/8 | Comunicação mental com alguém no campo de visão (4) ou fora (8) |
| **Voar** | 4 | Voa livremente por 20 minutos; teste renovado a cada 20 min |
| **Paralisar** | 4+Mental | Paralisa uma criatura por 1 turno |
| **Teleporte** | 4+ | Teleporta para local visível em até 10m; +2 por 10m adicionais; +2 por pessoa extra |
| **Ilusão** | 6/8 | Cria imagem incorpórea sem som (6) ou com som (8); dura enquanto concentrado |
| **Invisibilidade** | 6 | Fica invisível por 20 minutos; em caso de falha espera 20 min para tentar de novo |
| **Regeneração** | 4 | Recupera pontos de vida iguais à pontuação no poder |
| **Forma Alternativa** | 6 | Transforma-se em criatura pré-definida por 20 minutos |
| **Invocar Criatura** | Varia | Invoca criatura por 10 minutos (ver tabela abaixo) |

### Telecinésia

Ergue objetos com a mente. A dificuldade varia com o peso:

| Dif. | Peso | Exemplo |
|---|---|---|
| 4 | 1 kg | Caixa de leite; adaga |
| 6 | 5 kg | Cadeira; computador |
| 8 | 25 kg | Mesa; TV grande |
| 10 | 100 kg | Pessoa |
| 12 | 400 kg | Geladeira; motocicleta |
| 14 | 1 tonelada | Carro |

### Invocar Criatura

| Tipo | Pts de Atributo | Pts de Perícia | Dif. |
|---|---|---|---|
| A | 1 | 2 | 6 |
| B | 2 | 4 | 8 |
| C | 3 | 6 | 10 |
| D | 4 | 8 | 12 |
| E | 5 | 10 | 14 |

---

## Experiência e Evolução

### Ganho de XP

| Evento | XP ganho |
|---|---|
| Sessão jogada | +1 |
| Objetivo alcançado *(não cada confronto)* | +1 |
| Aventura completa com **sucesso** *(2–6 sessões)* | +6 |
| Aventura completa com **fracasso** | +2 |

### Custo de Evolução

| O que evoluir | Custo em XP |
|---|---|
| 1 ponto em Perícia | 6 XP |
| 1 ponto em Atributo | 12 XP |
| 1 ponto de Vida ou Sorte | 1 XP |
| 1 ponto em Característica | 8 XP |

> **Vida + Sorte:** máximo de **30 pontos somados** entre os dois (via XP).

---

## Armas e Equipamentos

Armas e equipamentos fornecem **bônus de rolagem** e consequentemente de dano. Os bônus dependem do tipo.

- Algumas armas dão bônus diferentes para **acerto e dano**.
- Explosivos dão bônus **apenas para dano** — basta estar na área de efeito.
- Equipamentos em geral concedem entre **+1 e +2**.

> *Todas as armas podem ser reajustadas em ±2 de acordo com a qualidade do material.*

| Arma | Bônus de Ataque | Bônus de Dano |
|---|---|---|
| Armas de Contusão | +2 | +2 |
| Lâminas de Pequeno Porte | +1 | +3 |
| Lâminas de Grande Porte | +2 | +5 |
| Armas de Fogo de Pequeno Porte | +4 | +2 |
| Armas de Fogo de Médio Porte | +3 | +4 |
| Explosivos de Pequeno Porte *(-2 a cada metro)* | +0 (área) | +8 / +6 / +4 / +2 |
| Explosivos de Grande Porte *(-5 a cada 3 metros)* | +0 (área) | +20 / +15 / +10 / +5 |
| Arco de Pequeno Porte | +3 | +3 |
| Arco de Médio Porte | +2 | +4 |

---

## Apêndice: Inimigos

Em um apocalipse zumbi, o perigo não vem só dos mortos. Saqueadores, gente desesperada, loucos e gangues também ameaçam os sobreviventes. A sobrevivência falando mais alto faz de pacatos cidadãos, assassinos desesperados em busca de uma simples comida enlatada.

### Fichas de Zumbi

**Andarilhos** — *Seguem presas e ruídos, destacando-se dos bandos.*

| Físico | Sorte | Perícias |
|---|---|---|
| 1 | 0 | Percepção 3, Furtividade 3, Combate Físico 2 |

**Bandos** — *Zumbis "comuns". Facilmente eliminados com uma pancada na cabeça — a dificuldade está no ataque em grupo.*

| Físico | Sorte | Perícias |
|---|---|---|
| 0 | 0 | Percepção 1, Combate Corporal 1 |

### Exemplo de Personagem Pronto

**Nome:** Derek "Lone-Eye"  
**Conceito:** Detetive Particular  

| Físico | Mente | Vida | Sorte |
|---|---|---|---|
| 2 | 3 | 10 | 10 |

**Perícias:** Combate (Armas de Fogo) +2 · Percepção +4 · Crime +3 · Lábia +1  
**Especialidades:** Percepção & Crime  

---

> *"Altere e acrescente regras ao sistema, faça sua adaptação... acredito que RPG não se trata das regras e sim da diversão."*  
> — **Narrador Maldito**

export const defaultCharacter = {
  identificacao: {
    nome: '',
    ocupacao: '',
    descricao: '',
    historico: '',
  },
  atributos: {
    fisico: 0,
    mente: 0,
  },
  recursos: {
    vida: { atual: 10, maximo: 10 },
    sorte: { atual: 10, maximo: 10 },
  },
  pericias: [
    // ── Base (Sistema Calisto) ──
    { id: 1,  nome: 'Acrobacia',      descricao: 'Equilibrar, saltar e fazer movimentos precisos com o corpo', valor: 0, especialidade: false, custom: false, grupo: 'base' },
    { id: 2,  nome: 'Aparência',      descricao: 'Seduzir e causar boa impressão',                             valor: 0, especialidade: false, custom: false, grupo: 'base' },
    { id: 3,  nome: 'Combate',        descricao: 'Ataques — escolha o tipo',                                   valor: 0, especialidade: false, custom: false, grupo: 'base', nota: '' },
    { id: 4,  nome: 'Condução',       descricao: 'Conduzir montarias ou veículos',                             valor: 0, especialidade: false, custom: false, grupo: 'base', nota: '' },
    { id: 5,  nome: 'Conhecimento',   descricao: 'Saber tudo sobre uma área específica',                       valor: 0, especialidade: false, custom: false, grupo: 'base', nota: '' },
    { id: 6,  nome: 'Coragem',        descricao: 'Resistir ao medo',                                           valor: 0, especialidade: false, custom: false, grupo: 'base' },
    { id: 7,  nome: 'Crime',          descricao: 'Abrir fechaduras, furtar bolsos, mover-se em silêncio',      valor: 0, especialidade: false, custom: false, grupo: 'base' },
    { id: 8,  nome: 'Força',          descricao: 'Erguer coisas pesadas, quebrar coisas e derrubar portas',    valor: 0, especialidade: false, custom: false, grupo: 'base' },
    { id: 9,  nome: 'Lábia',          descricao: 'Manipular e convencer outras pessoas',                       valor: 0, especialidade: false, custom: false, grupo: 'base' },
    { id: 10, nome: 'Percepção',      descricao: 'Perceber detalhes, sons e cheiros',                          valor: 0, especialidade: false, custom: false, grupo: 'base' },
    { id: 11, nome: 'Vigor',          descricao: 'Resistir à fadiga, cansaço, fome e calor intenso',           valor: 0, especialidade: false, custom: false, grupo: 'base' },
    // ── Adicionais C+ (Apocalipse Zumbi) ──
    { id: 12, nome: 'Combate Físico', descricao: 'Ataques corpo a corpo sem arma',                             valor: 0, especialidade: false, custom: false, grupo: 'c+' },
    { id: 13, nome: 'Mira',           descricao: 'Ataques de combate a distância',                             valor: 0, especialidade: false, custom: false, grupo: 'c+' },
    { id: 14, nome: 'Pilotagem',      descricao: 'Para cada veículo escolhido',                                valor: 0, especialidade: false, custom: false, grupo: 'c+', nota: '' },
    { id: 15, nome: 'Computadores',   descricao: 'Manuseio de computadores e sistemas digitais',               valor: 0, especialidade: false, custom: false, grupo: 'c+' },
    { id: 16, nome: 'Esportes',       descricao: 'Escalar, nadar, correr, resistência física',                 valor: 0, especialidade: false, custom: false, grupo: 'c+' },
    { id: 17, nome: 'Furtividade',    descricao: 'Mover-se e agir silenciosamente',                            valor: 0, especialidade: false, custom: false, grupo: 'c+' },
    { id: 18, nome: 'Persuasão',      descricao: 'Manipular, convencer, seduzir, negociar',                    valor: 0, especialidade: false, custom: false, grupo: 'c+' },
    { id: 19, nome: 'Reparos',        descricao: 'Reparo de um grupo de dispositivos escolhidos',              valor: 0, especialidade: false, custom: false, grupo: 'c+', nota: '' },
    { id: 20, nome: 'Sobrevivência',  descricao: 'Conhecimento para sobreviver ao Apocalipse Zumbi',           valor: 0, especialidade: false, custom: false, grupo: 'c+' },
  ],
  caracteristicas: [
    { id: 1, nome: 'Especialista', custo: 2, bonus: '+1 nas rolagens de 3 perícias escolhidas', ativo: false, custom: false, detalhe: '' },
    { id: 2, nome: 'Ambidestro', custo: 3, bonus: 'Pode usar as duas mãos para atacar ou realizar ações', ativo: false, custom: false, detalhe: '' },
    { id: 3, nome: 'Reflexo de Combate', custo: 4, bonus: 'Sempre começa primeiro no combate', ativo: false, custom: false, detalhe: '' },
    { id: 4, nome: 'Determinação', custo: 4, bonus: '+1 nas rolagens do atributo Mente ou Físico', ativo: false, custom: false, detalhe: '' },
    { id: 5, nome: 'Recuperação', custo: 4, bonus: 'Recupera 2 pontos de Vida e Sorte por hora de descanso', ativo: false, custom: false, detalhe: '' },
    { id: 6, nome: 'Limite Sobre-humano', custo: 4, bonus: 'Perícias podem ultrapassar o limite, indo até 8', ativo: false, custom: false, detalhe: '' },
  ],
  armas: [],
  experiencia: {
    total: 0,
    gasto: 0,
  },
  notas: '',
}

export const TIPOS_ARMA = {
  'Contusão':        { ataque: 2, dano: 2 },
  'Lâmina Pequena':  { ataque: 1, dano: 3 },
  'Lâmina Grande':   { ataque: 2, dano: 5 },
  'Fogo Pequeno':    { ataque: 4, dano: 2 },
  'Fogo Médio':      { ataque: 3, dano: 4 },
  'Arco Pequeno':    { ataque: 3, dano: 3 },
  'Arco Médio':      { ataque: 2, dano: 4 },
  'Explosivo P':     { ataque: 0, dano: 8 },
  'Explosivo G':     { ataque: 0, dano: 20 },
  'Personalizada':   { ataque: 0, dano: 0 },
}

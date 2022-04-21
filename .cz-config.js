module.exports = {
  types: [
    {
      value: '💍 test',
      name: '💍  test:       Adicionando testes que faltavam',
    },
    { value: '🎸 feat', name: '🎸  feat:       Uma nova feature' },
    { value: '🐛 fix', name: '🐛  fix:        Uma correção de bug' },
    {
      value: '🤖 chore',
      name: '🤖  chore:      Processo de build ou mudanças de tooling',
    },
    {
      value: '📝 docs',
      name: '📝  docs:       Alterações apenas na documentação',
    },
    {
      value: '💡 refactor',
      name: '💡  refactor:   Uma mudança de código que não corrige um bug nem adiciona um recurso',
    },
    {
      value: '💄 style',
      name: '💄  style:      Marcações, espaços em branco, formatação, ponto e vírgula faltando...',
    },
    { value: '🎡 ci', name: '🎡  ci:         Mudanças relacionadas a CI' },
    {
      value: '🚀 perf',
      name: '🚀  perf:       Uma mudança de código que melhora o desempenho',
    },
  ],

  scopes: [{ name: 'shared-util-dom', description: '@dev-exp/util-dom' }],

  // override the messages, defaults are as follows
  messages: {
    type: 'Selecione o tipo de alteração que você está enviando:',
    scope: '\nIndique o ESCOPO desta alteração (opcional):',
    // used if allowCustomScopes is true
    customScope: 'Indique o escopo desta alteração:',
    subject: 'Escreva uma descrição CURTA e IMPERATIVA da mudança:\n',
    body: 'Forneça uma descrição mais detalhada da alteração (optional). Use "|" para quebras de linha:\n',
    breaking: 'Listar quaisquer BREAKING CHANGES (opcional):\n',
    footer:
      'Alguma issue foi resolvida com esta alteração? (opcional). Ex.: #31, #34:\n',
    confirmCommit: 'Tudo certo, podemos concluir o commit acima?',
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: ['body'],

  // limit subject length
  subjectLimit: 100,
};

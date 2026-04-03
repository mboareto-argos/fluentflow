import type { Flashcard } from '../types'

export const flashcards: Flashcard[] = [
  // ─── CONVERSAS DO DIA A DIA ───────────────────────────────────────────────
  {
    id: 'conv-001', categoryId: 'conversas', front: 'How are you doing?',
    back: 'Como você está?', pronunciation: '/haʊ ɑːr juː ˈduːɪŋ/',
    phonetic: 'Rau ar iu dúin?',
    type: 'phrase', exampleEn: 'Hey, how are you doing today?', examplePt: 'Ei, como você está hoje?',
  },
  {
    id: 'conv-002', categoryId: 'conversas', front: 'Nice to meet you',
    back: 'Prazer em te conhecer', pronunciation: '/naɪs tuː miːt juː/',
    phonetic: 'Náis tu mit iu',
    type: 'phrase', exampleEn: 'Nice to meet you! My name is André.', examplePt: 'Prazer em te conhecer! Meu nome é André.',
  },
  {
    id: 'conv-003', categoryId: 'conversas', front: 'What do you do for a living?',
    back: 'O que você faz da vida? / Qual é sua profissão?', pronunciation: '/wɒt duː juː duː fər ə ˈlɪvɪŋ/',
    phonetic: 'Uát du iu du for a lívin?',
    type: 'phrase', exampleEn: 'So, what do you do for a living?', examplePt: 'Então, qual é a sua profissão?',
  },
  {
    id: 'conv-004', categoryId: 'conversas', front: 'Could you say that again?',
    back: 'Você pode repetir?', pronunciation: '/kʊd juː seɪ ðæt əˈɡen/',
    phonetic: 'Cud iu sei dát aguên?',
    type: 'phrase', exampleEn: 'Sorry, could you say that again? I didn\'t catch that.', examplePt: 'Desculpe, você pode repetir? Não entendi.',
  },
  {
    id: 'conv-005', categoryId: 'conversas', front: 'What do you mean?',
    back: 'O que você quer dizer?', pronunciation: '/wɒt duː juː miːn/',
    phonetic: 'Uát du iu min?',
    type: 'phrase', exampleEn: 'What do you mean by that?', examplePt: 'O que você quer dizer com isso?',
  },
  {
    id: 'conv-006', categoryId: 'conversas', front: 'I\'m sorry to hear that',
    back: 'Sinto muito por isso', pronunciation: '/aɪm ˈsɒri tuː hɪər ðæt/',
    phonetic: 'Áim sóri tu hir dát',
    type: 'phrase', exampleEn: 'Oh, I\'m so sorry to hear that happened to you.', examplePt: 'Oh, sinto muito por isso ter acontecido com você.',
  },
  {
    id: 'conv-007', categoryId: 'conversas', front: 'That sounds great!',
    back: 'Isso soa ótimo!', pronunciation: '/ðæt saʊndz ɡreɪt/',
    phonetic: 'Dát sáundz greit!',
    type: 'phrase', exampleEn: 'We\'re going to the beach tomorrow. That sounds great!', examplePt: 'Vamos à praia amanhã. Isso soa ótimo!',
  },
  {
    id: 'conv-008', categoryId: 'conversas', front: 'Let me think about it',
    back: 'Deixa eu pensar sobre isso', pronunciation: '/let miː θɪŋk əˈbaʊt ɪt/',
    phonetic: 'Lét mi think abáut it',
    type: 'phrase', exampleEn: 'Let me think about it and I\'ll get back to you.', examplePt: 'Deixa eu pensar e te respondo.',
  },
  {
    id: 'conv-009', categoryId: 'conversas', front: 'Can I help you?',
    back: 'Posso te ajudar?', pronunciation: '/kæn aɪ help juː/',
    phonetic: 'Cén ái help iu?',
    type: 'phrase', exampleEn: 'Excuse me, can I help you find something?', examplePt: 'Com licença, posso te ajudar a encontrar algo?',
  },
  {
    id: 'conv-010', categoryId: 'conversas', front: 'I\'ll be right back',
    back: 'Já volto', pronunciation: '/aɪl biː raɪt bæk/',
    phonetic: 'Áil bi ráit bek',
    type: 'phrase', exampleEn: 'Wait here, I\'ll be right back.', examplePt: 'Espera aqui, já volto.',
  },
  {
    id: 'conv-011', categoryId: 'conversas', front: 'What time is it?',
    back: 'Que horas são?', pronunciation: '/wɒt taɪm ɪz ɪt/',
    phonetic: 'Uát táim iz it?',
    type: 'phrase', exampleEn: 'Excuse me, do you know what time it is?', examplePt: 'Com licença, você sabe que horas são?',
  },
  {
    id: 'conv-012', categoryId: 'conversas', front: 'How much does it cost?',
    back: 'Quanto custa?', pronunciation: '/haʊ mʌtʃ dʌz ɪt kɒst/',
    phonetic: 'Rau mátch daz it cost?',
    type: 'phrase', exampleEn: 'Excuse me, how much does this cost?', examplePt: 'Com licença, quanto custa isso?',
  },
  {
    id: 'conv-013', categoryId: 'conversas', front: 'I don\'t understand',
    back: 'Eu não entendo', pronunciation: '/aɪ dəʊnt ˌʌndəˈstænd/',
    phonetic: 'Ái dont ânder-stend',
    type: 'phrase', exampleEn: 'I\'m sorry, I don\'t understand. Can you speak more slowly?', examplePt: 'Desculpe, eu não entendo. Pode falar mais devagar?',
  },
  {
    id: 'conv-014', categoryId: 'conversas', front: 'Make yourself at home',
    back: 'Fique à vontade', pronunciation: '/meɪk jɔːrˈself æt həʊm/',
    phonetic: 'Meik iórself at hôum',
    type: 'phrase', exampleEn: 'Come in, make yourself at home!', examplePt: 'Entre, fique à vontade!',
  },
  {
    id: 'conv-015', categoryId: 'conversas', front: 'I agree with you',
    back: 'Concordo com você', pronunciation: '/aɪ əˈɡriː wɪð juː/',
    phonetic: 'Ái agri uid iu',
    type: 'phrase', exampleEn: 'I totally agree with you on that point.', examplePt: 'Concordo totalmente com você nesse ponto.',
  },
  {
    id: 'conv-016', categoryId: 'conversas', front: 'That\'s a good point',
    back: 'Esse é um bom ponto', pronunciation: '/ðæts ə ɡʊd pɔɪnt/',
    phonetic: 'Dáts a gud pôint',
    type: 'phrase', exampleEn: 'That\'s a good point. I hadn\'t thought of that.', examplePt: 'Esse é um bom ponto. Eu não tinha pensado nisso.',
  },
  {
    id: 'conv-017', categoryId: 'conversas', front: 'By the way',
    back: 'A propósito / Por falar nisso', pronunciation: '/baɪ ðə weɪ/',
    phonetic: 'Bái di uei',
    type: 'expression', exampleEn: 'By the way, did you see the game yesterday?', examplePt: 'A propósito, você viu o jogo ontem?',
  },
  {
    id: 'conv-018', categoryId: 'conversas', front: 'I\'m looking forward to it',
    back: 'Estou ansioso por isso', pronunciation: '/aɪm ˈlʊkɪŋ ˈfɔːwəd tuː ɪt/',
    phonetic: 'Áim lúkin fóruard tu it',
    type: 'phrase', exampleEn: 'The vacation starts next week! I\'m really looking forward to it.', examplePt: 'As férias começam semana que vem! Estou muito ansioso.',
  },
  {
    id: 'conv-019', categoryId: 'conversas', front: 'It doesn\'t matter',
    back: 'Não importa / Tanto faz', pronunciation: '/ɪt ˈdʌznt ˈmætər/',
    phonetic: 'It dázen máter',
    type: 'phrase', exampleEn: 'Don\'t worry, it doesn\'t matter at all.', examplePt: 'Não se preocupe, não importa.',
  },
  {
    id: 'conv-020', categoryId: 'conversas', front: 'Take care!',
    back: 'Se cuida! / Tchau!', pronunciation: '/teɪk ker/',
    phonetic: 'Teik ker!',
    type: 'phrase', exampleEn: 'It was great seeing you. Take care!', examplePt: 'Foi ótimo te ver. Se cuida!',
  },

  // ─── PHRASAL VERBS ESSENCIAIS ─────────────────────────────────────────────
  {
    id: 'pv-001', categoryId: 'phrasal-verbs', front: 'to get the hang of something',
    back: 'pegar o jeito de algo', pronunciation: '/tuː ɡet ðə hæŋ əv ˈsʌmθɪŋ/',
    phonetic: 'tu guet di heng of sâmthin',
    type: 'phrasal verb', exampleEn: 'Once you get the hang of it, speaking English feels natural.', examplePt: 'Quando você pegar o jeito, falar inglês fica natural.',
  },
  {
    id: 'pv-002', categoryId: 'phrasal-verbs', front: 'to give up',
    back: 'desistir', pronunciation: '/tuː ɡɪv ʌp/',
    phonetic: 'tu guiv áp',
    type: 'phrasal verb', exampleEn: 'Don\'t give up! You\'re almost there.', examplePt: 'Não desista! Você está quase lá.',
  },
  {
    id: 'pv-003', categoryId: 'phrasal-verbs', front: 'to look up',
    back: 'pesquisar / procurar (em dicionário)', pronunciation: '/tuː lʊk ʌp/',
    phonetic: 'tu lúk áp',
    type: 'phrasal verb', exampleEn: 'I\'ll look up that word in the dictionary.', examplePt: 'Vou procurar essa palavra no dicionário.',
  },
  {
    id: 'pv-004', categoryId: 'phrasal-verbs', front: 'to figure out',
    back: 'descobrir / entender', pronunciation: '/tuː ˈfɪɡər aʊt/',
    phonetic: 'tu fíguer áut',
    type: 'phrasal verb', exampleEn: 'I need to figure out how to solve this problem.', examplePt: 'Preciso descobrir como resolver esse problema.',
  },
  {
    id: 'pv-005', categoryId: 'phrasal-verbs', front: 'to bring up',
    back: 'mencionar / trazer à tona', pronunciation: '/tuː brɪŋ ʌp/',
    phonetic: 'tu brin áp',
    type: 'phrasal verb', exampleEn: 'He brought up an interesting topic during the meeting.', examplePt: 'Ele mencionou um tópico interessante durante a reunião.',
  },
  {
    id: 'pv-006', categoryId: 'phrasal-verbs', front: 'to run out of',
    back: 'ficar sem (alguma coisa)', pronunciation: '/tuː rʌn aʊt əv/',
    phonetic: 'tu rân áut of',
    type: 'phrasal verb', exampleEn: 'We ran out of coffee at the office.', examplePt: 'Ficamos sem café no escritório.',
  },
  {
    id: 'pv-007', categoryId: 'phrasal-verbs', front: 'to come up with',
    back: 'ter uma ideia / pensar em', pronunciation: '/tuː kʌm ʌp wɪð/',
    phonetic: 'tu cám áp uid',
    type: 'phrasal verb', exampleEn: 'She came up with a brilliant solution.', examplePt: 'Ela teve uma solução brilhante.',
  },
  {
    id: 'pv-008', categoryId: 'phrasal-verbs', front: 'to put off',
    back: 'adiar / postergar', pronunciation: '/tuː pʊt ɒf/',
    phonetic: 'tu put óf',
    type: 'phrasal verb', exampleEn: 'Stop putting off your homework!', examplePt: 'Pare de adiar sua lição de casa!',
  },
  {
    id: 'pv-009', categoryId: 'phrasal-verbs', front: 'to turn down',
    back: 'recusar / rejeitar', pronunciation: '/tuː tɜːrn daʊn/',
    phonetic: 'tu tern dáun',
    type: 'phrasal verb', exampleEn: 'He turned down the job offer.', examplePt: 'Ele recusou a oferta de emprego.',
  },
  {
    id: 'pv-010', categoryId: 'phrasal-verbs', front: 'to go through',
    back: 'passar por / experienciar', pronunciation: '/tuː ɡəʊ θruː/',
    phonetic: 'tu gôu trú',
    type: 'phrasal verb', exampleEn: 'She went through a lot last year.', examplePt: 'Ela passou por muita coisa no ano passado.',
  },
  {
    id: 'pv-011', categoryId: 'phrasal-verbs', front: 'to work out',
    back: 'funcionar / dar certo / se exercitar', pronunciation: '/tuː wɜːrk aʊt/',
    phonetic: 'tu uork áut',
    type: 'phrasal verb', exampleEn: 'I hope everything works out for you.', examplePt: 'Espero que tudo dê certo para você.',
  },
  {
    id: 'pv-012', categoryId: 'phrasal-verbs', front: 'to show up',
    back: 'aparecer / chegar', pronunciation: '/tuː ʃəʊ ʌp/',
    phonetic: 'tu chôu áp',
    type: 'phrasal verb', exampleEn: 'He didn\'t show up to the meeting.', examplePt: 'Ele não apareceu na reunião.',
  },
  {
    id: 'pv-013', categoryId: 'phrasal-verbs', front: 'to find out',
    back: 'descobrir / ficar sabendo', pronunciation: '/tuː faɪnd aʊt/',
    phonetic: 'tu fáind áut',
    type: 'phrasal verb', exampleEn: 'I just found out that she got promoted.', examplePt: 'Acabei de saber que ela foi promovida.',
  },
  {
    id: 'pv-014', categoryId: 'phrasal-verbs', front: 'to keep up with',
    back: 'acompanhar / manter o ritmo com', pronunciation: '/tuː kiːp ʌp wɪð/',
    phonetic: 'tu kip áp uid',
    type: 'phrasal verb', exampleEn: 'It\'s hard to keep up with all the news.', examplePt: 'É difícil acompanhar todas as notícias.',
  },
  {
    id: 'pv-015', categoryId: 'phrasal-verbs', front: 'to end up',
    back: 'acabar / terminar em', pronunciation: '/tuː end ʌp/',
    phonetic: 'tu end áp',
    type: 'phrasal verb', exampleEn: 'We ended up staying at the party until midnight.', examplePt: 'Acabamos ficando na festa até meia-noite.',
  },
  {
    id: 'pv-016', categoryId: 'phrasal-verbs', front: 'to take over',
    back: 'assumir / tomar conta', pronunciation: '/tuː teɪk ˈəʊvər/',
    phonetic: 'tu teik ôuver',
    type: 'phrasal verb', exampleEn: 'She took over the project after he left.', examplePt: 'Ela assumiu o projeto depois que ele saiu.',
  },
  {
    id: 'pv-017', categoryId: 'phrasal-verbs', front: 'to cut down on',
    back: 'reduzir / diminuir o consumo de', pronunciation: '/tuː kʌt daʊn ɒn/',
    phonetic: 'tu cát dáun on',
    type: 'phrasal verb', exampleEn: 'I\'m trying to cut down on sugar.', examplePt: 'Estou tentando reduzir o açúcar.',
  },
  {
    id: 'pv-018', categoryId: 'phrasal-verbs', front: 'to get along with',
    back: 'se dar bem com', pronunciation: '/tuː ɡet əˈlɒŋ wɪð/',
    phonetic: 'tu guet alóng uid',
    type: 'phrasal verb', exampleEn: 'She gets along with everyone at work.', examplePt: 'Ela se dá bem com todo mundo no trabalho.',
  },
  {
    id: 'pv-019', categoryId: 'phrasal-verbs', front: 'to point out',
    back: 'apontar / destacar', pronunciation: '/tuː pɔɪnt aʊt/',
    phonetic: 'tu pôint áut',
    type: 'phrasal verb', exampleEn: 'Can you point out the error in this report?', examplePt: 'Você pode apontar o erro nesse relatório?',
  },
  {
    id: 'pv-020', categoryId: 'phrasal-verbs', front: 'to set up',
    back: 'configurar / organizar / montar', pronunciation: '/tuː set ʌp/',
    phonetic: 'tu set áp',
    type: 'phrasal verb', exampleEn: 'Can you set up the projector for the meeting?', examplePt: 'Você pode montar o projetor para a reunião?',
  },

  // ─── VOCABULÁRIO DE NEGÓCIOS ──────────────────────────────────────────────
  {
    id: 'neg-001', categoryId: 'negocios', front: 'to reach out',
    back: 'entrar em contato', pronunciation: '/tuː riːtʃ aʊt/',
    phonetic: 'tu rich áut',
    type: 'phrasal verb', exampleEn: 'Feel free to reach out if you have any questions.', examplePt: 'Fique à vontade para entrar em contato se tiver dúvidas.',
  },
  {
    id: 'neg-002', categoryId: 'negocios', front: 'deadline',
    back: 'prazo / data limite', pronunciation: '/ˈdedlaɪn/',
    phonetic: 'déd-lain',
    type: 'noun', exampleEn: 'The deadline for this project is Friday.', examplePt: 'O prazo para este projeto é sexta-feira.',
  },
  {
    id: 'neg-003', categoryId: 'negocios', front: 'to follow up',
    back: 'dar continuidade / fazer acompanhamento', pronunciation: '/tuː ˈfɒləʊ ʌp/',
    phonetic: 'tu fólou áp',
    type: 'phrasal verb', exampleEn: 'I\'ll follow up with you after the meeting.', examplePt: 'Entrarei em contato após a reunião.',
  },
  {
    id: 'neg-004', categoryId: 'negocios', front: 'stakeholder',
    back: 'parte interessada / investidor', pronunciation: '/ˈsteɪkˌhəʊldər/',
    phonetic: 'stéik-hôulder',
    type: 'noun', exampleEn: 'We need to present this to the stakeholders.', examplePt: 'Precisamos apresentar isso às partes interessadas.',
  },
  {
    id: 'neg-005', categoryId: 'negocios', front: 'to take the lead',
    back: 'liderar / tomar a frente', pronunciation: '/tuː teɪk ðə liːd/',
    phonetic: 'tu teik di lid',
    type: 'phrase', exampleEn: 'Who will take the lead on this project?', examplePt: 'Quem vai liderar esse projeto?',
  },
  {
    id: 'neg-006', categoryId: 'negocios', front: 'quarterly report',
    back: 'relatório trimestral', pronunciation: '/ˈkwɔːrtərli rɪˈpɔːrt/',
    phonetic: 'cuórterly ripórt',
    type: 'noun', exampleEn: 'The quarterly report shows a 15% growth.', examplePt: 'O relatório trimestral mostra um crescimento de 15%.',
  },
  {
    id: 'neg-007', categoryId: 'negocios', front: 'to wrap up',
    back: 'concluir / finalizar', pronunciation: '/tuː ræp ʌp/',
    phonetic: 'tu rep áp',
    type: 'phrasal verb', exampleEn: 'Let\'s wrap up this meeting in five minutes.', examplePt: 'Vamos concluir essa reunião em cinco minutos.',
  },
  {
    id: 'neg-008', categoryId: 'negocios', front: 'bandwidth',
    back: 'capacidade / disponibilidade (informal)', pronunciation: '/ˈbændwɪdθ/',
    phonetic: 'bénd-uidth',
    type: 'noun', exampleEn: 'I don\'t have the bandwidth to take on another project right now.', examplePt: 'Não tenho capacidade para assumir outro projeto agora.',
  },
  {
    id: 'neg-009', categoryId: 'negocios', front: 'to move the needle',
    back: 'fazer a diferença / ter impacto real', pronunciation: '/tuː muːv ðə ˈniːdl/',
    phonetic: 'tu muv di nídel',
    type: 'phrase', exampleEn: 'This campaign really moved the needle on brand awareness.', examplePt: 'Essa campanha realmente teve impacto no reconhecimento da marca.',
  },
  {
    id: 'neg-010', categoryId: 'negocios', front: 'onboarding',
    back: 'processo de integração (de novos funcionários)', pronunciation: '/ˈɒnˌbɔːrdɪŋ/',
    phonetic: 'ón-bórdin',
    type: 'noun', exampleEn: 'The onboarding process takes about two weeks.', examplePt: 'O processo de integração leva cerca de duas semanas.',
  },
  {
    id: 'neg-011', categoryId: 'negocios', front: 'KPI',
    back: 'indicador-chave de desempenho', pronunciation: '/keɪ piː aɪ/',
    phonetic: 'kei pi ái',
    type: 'noun', exampleEn: 'Our main KPI is monthly recurring revenue.', examplePt: 'Nosso principal KPI é a receita mensal recorrente.',
  },
  {
    id: 'neg-012', categoryId: 'negocios', front: 'to be on the same page',
    back: 'estar alinhados / pensar da mesma forma', pronunciation: '/tuː biː ɒn ðə seɪm peɪdʒ/',
    phonetic: 'tu bi on di seim peich',
    type: 'expression', exampleEn: 'Let\'s have a quick call to make sure we\'re on the same page.', examplePt: 'Vamos fazer uma chamada rápida para garantir que estamos alinhados.',
  },
  {
    id: 'neg-013', categoryId: 'negocios', front: 'circling back',
    back: 'retomando o assunto / voltando ao tema', pronunciation: '/ˈsɜːrklɪŋ bæk/',
    phonetic: 'sérclin bek',
    type: 'expression', exampleEn: 'Circling back to what we discussed earlier...', examplePt: 'Voltando ao que discutimos anteriormente...',
  },
  {
    id: 'neg-014', categoryId: 'negocios', front: 'to scale',
    back: 'escalar / crescer de forma sustentável', pronunciation: '/tuː skeɪl/',
    phonetic: 'tu skeil',
    type: 'verb', exampleEn: 'We need to scale our operations to meet demand.', examplePt: 'Precisamos escalar nossas operações para atender à demanda.',
  },
  {
    id: 'neg-015', categoryId: 'negocios', front: 'leverage',
    back: 'alavancagem / usar a seu favor', pronunciation: '/ˈlevərɪdʒ/',
    phonetic: 'léveredj',
    type: 'noun', exampleEn: 'We can leverage our existing partnerships for this deal.', examplePt: 'Podemos usar nossas parcerias existentes a nosso favor nesse negócio.',
  },

  // ─── EXPRESSÕES IDIOMÁTICAS ───────────────────────────────────────────────
  {
    id: 'id-001', categoryId: 'idioms', front: 'Break a leg!',
    back: 'Boa sorte!', pronunciation: '/breɪk ə leɡ/',
    phonetic: 'Breik a lég!',
    type: 'idiom', exampleEn: 'You\'re performing tonight? Break a leg!', examplePt: 'Você vai se apresentar hoje à noite? Boa sorte!',
  },
  {
    id: 'id-002', categoryId: 'idioms', front: 'Hit the nail on the head',
    back: 'Acertar em cheio / Ir direto ao ponto', pronunciation: '/hɪt ðə neɪl ɒn ðə hed/',
    phonetic: 'Hit di neil on di hed',
    type: 'idiom', exampleEn: 'You hit the nail on the head with that analysis.', examplePt: 'Você acertou em cheio com essa análise.',
  },
  {
    id: 'id-003', categoryId: 'idioms', front: 'Under the weather',
    back: 'Mal disposto / Não se sentindo bem', pronunciation: '/ˈʌndər ðə ˈweðər/',
    phonetic: 'Ânder di uéder',
    type: 'idiom', exampleEn: 'I\'m feeling a bit under the weather today.', examplePt: 'Não estou me sentindo muito bem hoje.',
  },
  {
    id: 'id-004', categoryId: 'idioms', front: 'Bite the bullet',
    back: 'Aguentar firme / Encarar o inevitável', pronunciation: '/baɪt ðə ˈbʊlɪt/',
    phonetic: 'Báit di búlet',
    type: 'idiom', exampleEn: 'Just bite the bullet and make the difficult decision.', examplePt: 'Apenas encare e tome a decisão difícil.',
  },
  {
    id: 'id-005', categoryId: 'idioms', front: 'The ball is in your court',
    back: 'A decisão é sua / A bola está com você', pronunciation: '/ðə bɔːl ɪz ɪn jɔːr kɔːrt/',
    phonetic: 'Di bol iz in iôr cort',
    type: 'idiom', exampleEn: 'I gave you my offer. The ball is in your court now.', examplePt: 'Fiz minha proposta. A decisão é sua agora.',
  },
  {
    id: 'id-006', categoryId: 'idioms', front: 'Once in a blue moon',
    back: 'De vez em quando / Raramente', pronunciation: '/wʌns ɪn ə bluː muːn/',
    phonetic: 'Uâns in a blú mun',
    type: 'idiom', exampleEn: 'We only see each other once in a blue moon.', examplePt: 'A gente só se vê de vez em quando.',
  },
  {
    id: 'id-007', categoryId: 'idioms', front: 'Spill the beans',
    back: 'Contar o segredo / Revelar tudo', pronunciation: '/spɪl ðə biːnz/',
    phonetic: 'Spil di binz',
    type: 'idiom', exampleEn: 'Come on, spill the beans! What\'s the surprise?', examplePt: 'Vamos, conta o segredo! Qual é a surpresa?',
  },
  {
    id: 'id-008', categoryId: 'idioms', front: 'Burn bridges',
    back: 'Queimar pontes / Cortar relações', pronunciation: '/bɜːrn ˈbrɪdʒɪz/',
    phonetic: 'Bern brídjez',
    type: 'idiom', exampleEn: 'Don\'t burn bridges with your former employer.', examplePt: 'Não queime pontes com seu ex-empregador.',
  },
  {
    id: 'id-009', categoryId: 'idioms', front: 'Let the cat out of the bag',
    back: 'Revelar um segredo sem querer', pronunciation: '/let ðə kæt aʊt əv ðə bæɡ/',
    phonetic: 'Let di cet áut of di bag',
    type: 'idiom', exampleEn: 'He let the cat out of the bag about the surprise party.', examplePt: 'Ele revelou sem querer a festa surpresa.',
  },
  {
    id: 'id-010', categoryId: 'idioms', front: 'Hit the sack',
    back: 'Ir dormir / Bater o sono', pronunciation: '/hɪt ðə sæk/',
    phonetic: 'Hit di sek',
    type: 'idiom', exampleEn: 'I\'m exhausted. Time to hit the sack.', examplePt: 'Estou exausto. Hora de dormir.',
  },
  {
    id: 'id-011', categoryId: 'idioms', front: 'Bite off more than you can chew',
    back: 'Assumir mais do que consegue dar conta', pronunciation: '/baɪt ɒf mɔːr ðæn juː kæn tʃuː/',
    phonetic: 'Báit óf mor dan iu cen tchú',
    type: 'idiom', exampleEn: 'Don\'t bite off more than you can chew with these projects.', examplePt: 'Não assuma mais do que consegue dar conta com esses projetos.',
  },
  {
    id: 'id-012', categoryId: 'idioms', front: 'A blessing in disguise',
    back: 'O que pareceu mau acabou sendo bom', pronunciation: '/ə ˈblesɪŋ ɪn dɪsˈɡaɪz/',
    phonetic: 'A blésin in disgáiz',
    type: 'idiom', exampleEn: 'Losing that job was a blessing in disguise — I found a better one.', examplePt: 'Perder aquele emprego foi uma bênção disfarçada — encontrei um melhor.',
  },

  // ─── INGLÊS PARA VIAGENS ──────────────────────────────────────────────────
  {
    id: 'viag-001', categoryId: 'viagens', front: 'I\'d like to check in, please',
    back: 'Gostaria de fazer o check-in, por favor', pronunciation: '/aɪd laɪk tuː tʃek ɪn pliːz/',
    phonetic: 'Áid láik tu tchek in pliz',
    type: 'phrase', exampleEn: 'I\'d like to check in, please. My name is André Boareto.', examplePt: 'Gostaria de fazer o check-in, por favor. Meu nome é André Boareto.',
  },
  {
    id: 'viag-002', categoryId: 'viagens', front: 'Is breakfast included?',
    back: 'O café da manhã está incluído?', pronunciation: '/ɪz ˈbrekfəst ɪnˈkluːdɪd/',
    phonetic: 'Iz brékfast inclúded?',
    type: 'phrase', exampleEn: 'Is breakfast included in the room rate?', examplePt: 'O café da manhã está incluído na diária?',
  },
  {
    id: 'viag-003', categoryId: 'viagens', front: 'Where is the nearest subway station?',
    back: 'Onde fica a estação de metrô mais próxima?', pronunciation: '/wer ɪz ðə ˈnɪərɪst ˈsʌbweɪ ˈsteɪʃn/',
    phonetic: 'Uer iz di nírest sâbuei stéichen?',
    type: 'phrase', exampleEn: 'Excuse me, where is the nearest subway station?', examplePt: 'Com licença, onde fica a estação de metrô mais próxima?',
  },
  {
    id: 'viag-004', categoryId: 'viagens', front: 'Can I have the bill, please?',
    back: 'Pode trazer a conta, por favor?', pronunciation: '/kæn aɪ hæv ðə bɪl pliːz/',
    phonetic: 'Cén ái hev di bil pliz?',
    type: 'phrase', exampleEn: 'Excuse me, can I have the bill, please?', examplePt: 'Com licença, pode trazer a conta, por favor?',
  },
  {
    id: 'viag-005', categoryId: 'viagens', front: 'I have a reservation',
    back: 'Tenho uma reserva', pronunciation: '/aɪ hæv ə ˌrezərˈveɪʃn/',
    phonetic: 'Ái hev a rezervéichen',
    type: 'phrase', exampleEn: 'Good evening, I have a reservation under the name Santos.', examplePt: 'Boa noite, tenho uma reserva no nome Santos.',
  },
  {
    id: 'viag-006', categoryId: 'viagens', front: 'My flight has been delayed',
    back: 'Meu voo foi atrasado', pronunciation: '/maɪ flaɪt hæz biːn dɪˈleɪd/',
    phonetic: 'Mái fláit hez bin diléid',
    type: 'phrase', exampleEn: 'I\'m sorry to inform you that my flight has been delayed by 3 hours.', examplePt: 'Lamento informar que meu voo foi atrasado 3 horas.',
  },
  {
    id: 'viag-007', categoryId: 'viagens', front: 'Is this seat taken?',
    back: 'Esse lugar está ocupado?', pronunciation: '/ɪz ðɪs siːt ˈteɪkən/',
    phonetic: 'Iz dis sit téiken?',
    type: 'phrase', exampleEn: 'Excuse me, is this seat taken?', examplePt: 'Com licença, esse lugar está ocupado?',
  },
  {
    id: 'viag-008', categoryId: 'viagens', front: 'I\'d like a window seat',
    back: 'Gostaria de um assento na janela', pronunciation: '/aɪd laɪk ə ˈwɪndəʊ siːt/',
    phonetic: 'Áid láik a uíndou sit',
    type: 'phrase', exampleEn: 'When booking, I\'d like a window seat if possible.', examplePt: 'Na reserva, gostaria de um assento na janela se possível.',
  },
  {
    id: 'viag-009', categoryId: 'viagens', front: 'Do you accept credit cards?',
    back: 'Vocês aceitam cartão de crédito?', pronunciation: '/duː juː əkˈsept ˈkredɪt kɑːrdz/',
    phonetic: 'Du iu aksept crédit cards?',
    type: 'phrase', exampleEn: 'Do you accept credit cards or is it cash only?', examplePt: 'Vocês aceitam cartão de crédito ou é só dinheiro?',
  },
  {
    id: 'viag-010', categoryId: 'viagens', front: 'Could you take a photo of us?',
    back: 'Você poderia tirar uma foto da gente?', pronunciation: '/kʊd juː teɪk ə ˈfəʊtəʊ əv ʌs/',
    phonetic: 'Cud iu teik a fótou of ás?',
    type: 'phrase', exampleEn: 'Excuse me, could you take a photo of us, please?', examplePt: 'Com licença, você poderia tirar uma foto da gente?',
  },
  {
    id: 'viag-011', categoryId: 'viagens', front: 'I lost my passport',
    back: 'Perdi meu passaporte', pronunciation: '/aɪ lɒst maɪ ˈpæspɔːrt/',
    phonetic: 'Ái lost mái pésport',
    type: 'phrase', exampleEn: 'I think I lost my passport. Where is the nearest embassy?', examplePt: 'Acho que perdi meu passaporte. Onde fica a embaixada mais próxima?',
  },
  {
    id: 'viag-012', categoryId: 'viagens', front: 'How long is the wait?',
    back: 'Quanto tempo de espera?', pronunciation: '/haʊ lɒŋ ɪz ðə weɪt/',
    phonetic: 'Rau long iz di ueit?',
    type: 'phrase', exampleEn: 'Excuse me, how long is the wait for a table?', examplePt: 'Com licença, quanto tempo de espera por uma mesa?',
  },

  // ─── INGLÊS DA TV & FILMES ────────────────────────────────────────────────
  {
    id: 'tv-001', categoryId: 'tv-filmes', front: 'No way!',
    back: 'De jeito nenhum! / Não é possível!', pronunciation: '/nəʊ weɪ/',
    phonetic: 'Nôu uei!',
    type: 'expression', exampleEn: 'No way! You won the lottery?!', examplePt: 'Não é possível! Você ganhou na loteria?!',
  },
  {
    id: 'tv-002', categoryId: 'tv-filmes', front: 'What\'s the deal?',
    back: 'Qual é a parada? / O que está acontecendo?', pronunciation: '/wɒts ðə diːl/',
    phonetic: 'Uáts di dil?',
    type: 'expression', exampleEn: 'Hey, what\'s the deal with you two?', examplePt: 'Ei, qual é a parada entre vocês dois?',
  },
  {
    id: 'tv-003', categoryId: 'tv-filmes', front: 'You\'re kidding me!',
    back: 'Você está brincando!', pronunciation: '/jɔːr ˈkɪdɪŋ miː/',
    phonetic: 'Iôr kídin mi!',
    type: 'expression', exampleEn: 'They cancelled the show? You\'re kidding me!', examplePt: 'Eles cancelaram a série? Você está brincando!',
  },
  {
    id: 'tv-004', categoryId: 'tv-filmes', front: 'I\'ve got your back',
    back: 'Pode contar comigo / Estou aqui por você', pronunciation: '/aɪv ɡɒt jɔːr bæk/',
    phonetic: 'Áiv got iôr bek',
    type: 'expression', exampleEn: 'Don\'t worry about those guys. I\'ve got your back.', examplePt: 'Não se preocupe com esses caras. Pode contar comigo.',
  },
  {
    id: 'tv-005', categoryId: 'tv-filmes', front: 'That\'s messed up',
    back: 'Isso é errado / Que situação horrível', pronunciation: '/ðæts mest ʌp/',
    phonetic: 'Dáts mest áp',
    type: 'expression', exampleEn: 'He lied to her face? That\'s messed up.', examplePt: 'Ele mentiu na cara dela? Isso é muito errado.',
  },
  {
    id: 'tv-006', categoryId: 'tv-filmes', front: 'I\'m in',
    back: 'Estou dentro / Topo', pronunciation: '/aɪm ɪn/',
    phonetic: 'Áim in',
    type: 'expression', exampleEn: 'Road trip this weekend? I\'m in!', examplePt: 'Viagem de carro esse fim de semana? Estou dentro!',
  },
  {
    id: 'tv-007', categoryId: 'tv-filmes', front: 'Long story short',
    back: 'Resumindo / Em suma', pronunciation: '/lɒŋ ˈstɔːri ʃɔːrt/',
    phonetic: 'Long stóri chort',
    type: 'expression', exampleEn: 'Long story short, we missed the flight.', examplePt: 'Resumindo, perdemos o voo.',
  },
  {
    id: 'tv-008', categoryId: 'tv-filmes', front: 'That\'s what I\'m talking about!',
    back: 'É isso aí! / Sobre isso que estou falando!', pronunciation: '/ðæts wɒt aɪm ˈtɔːkɪŋ əˈbaʊt/',
    phonetic: 'Dáts uát áim tókin abáut!',
    type: 'expression', exampleEn: 'A pizza party after work? That\'s what I\'m talking about!', examplePt: 'Festa de pizza depois do trabalho? É isso aí!',
  },
  {
    id: 'tv-009', categoryId: 'tv-filmes', front: 'Cut it out!',
    back: 'Para com isso! / Chega!', pronunciation: '/kʌt ɪt aʊt/',
    phonetic: 'Cát it áut!',
    type: 'expression', exampleEn: 'Cut it out, you two! Stop arguing.', examplePt: 'Para com isso, vocês dois! Parem de discutir.',
  },
  {
    id: 'tv-010', categoryId: 'tv-filmes', front: 'Mind your own business',
    back: 'Cuide da sua vida / Não se meta no que não é seu', pronunciation: '/maɪnd jɔːr əʊn ˈbɪznɪs/',
    phonetic: 'Máind iôr ôun bízniss',
    type: 'expression', exampleEn: 'Why are you asking? Mind your own business!', examplePt: 'Por que você está perguntando? Cuide da sua vida!',
  },
  {
    id: 'tv-011', categoryId: 'tv-filmes', front: 'I owe you one',
    back: 'Devo uma a você / Te devo um favor', pronunciation: '/aɪ əʊ juː wʌn/',
    phonetic: 'Ái ôu iu uân',
    type: 'expression', exampleEn: 'Thanks for covering for me. I owe you one.', examplePt: 'Obrigado por me cobrir. Te devo uma.',
  },
  {
    id: 'tv-012', categoryId: 'tv-filmes', front: 'Whatever',
    back: 'Tanto faz / Do que for', pronunciation: '/wɒtˈevər/',
    phonetic: 'Uot-éver',
    type: 'expression', exampleEn: 'Whatever, I don\'t care anymore.', examplePt: 'Tanto faz, não me importo mais.',
  },

  // ─── CONVERSAS — expansão ────────────────────────────────────────────────────
  {
    id: 'conv-021', categoryId: 'conversas', front: 'I have no idea',
    back: 'Não tenho ideia', pronunciation: '/aɪ hæv nəʊ aɪˈdɪə/',
    phonetic: 'Ái ráv nôu aidía',
    type: 'phrase', exampleEn: 'I have no idea where I put my keys.', examplePt: 'Não tenho ideia de onde coloquei minhas chaves.',
  },
  {
    id: 'conv-022', categoryId: 'conversas', front: 'What\'s up?',
    back: 'E aí? / O que há de novo?', pronunciation: '/wɒts ʌp/',
    phonetic: 'Uáts âp?',
    type: 'phrase', exampleEn: 'Hey! What\'s up? Long time no see!', examplePt: 'Ei! E aí? Quanto tempo!',
  },
  {
    id: 'conv-023', categoryId: 'conversas', front: 'I\'m just kidding',
    back: 'Tô só brincando', pronunciation: '/aɪm dʒʌst ˈkɪdɪŋ/',
    phonetic: 'Áim djâst kídin',
    type: 'phrase', exampleEn: 'Relax, I\'m just kidding!', examplePt: 'Relaxa, tô só brincando!',
  },
  {
    id: 'conv-024', categoryId: 'conversas', front: 'It\'s on me',
    back: 'Tô pagando / É por minha conta', pronunciation: '/ɪts ɒn miː/',
    phonetic: 'Its on mi',
    type: 'phrase', exampleEn: 'Don\'t worry about the bill — it\'s on me.', examplePt: 'Não se preocupe com a conta — tô pagando.',
  },
  {
    id: 'conv-025', categoryId: 'conversas', front: 'You\'re welcome',
    back: 'De nada', pronunciation: '/jɔːr ˈwelkəm/',
    phonetic: 'Iôr uélcam',
    type: 'phrase', exampleEn: '— Thank you so much! — You\'re welcome!', examplePt: '— Muito obrigado! — De nada!',
  },
  {
    id: 'conv-026', categoryId: 'conversas', front: 'Hang on a second',
    back: 'Espera um segundo', pronunciation: '/hæŋ ɒn ə ˈsekənd/',
    phonetic: 'Ráng on e sécand',
    type: 'phrase', exampleEn: 'Hang on a second — I\'ll be right there.', examplePt: 'Espera um segundo — já vou.',
  },
  {
    id: 'conv-027', categoryId: 'conversas', front: 'I feel like...',
    back: 'Eu tô com vontade de... / Parece que...', pronunciation: '/aɪ fiːl laɪk/',
    phonetic: 'Ái fíl láik',
    type: 'phrase', exampleEn: 'I feel like eating pizza tonight.', examplePt: 'Tô com vontade de comer pizza hoje.',
  },
  {
    id: 'conv-028', categoryId: 'conversas', front: 'That\'s fair enough',
    back: 'Tá bom / Faz sentido', pronunciation: '/ðæts feər ɪˈnʌf/',
    phonetic: 'Dáts fer inâf',
    type: 'phrase', exampleEn: 'I can\'t come today. — That\'s fair enough.', examplePt: 'Não consigo vir hoje. — Tá bom.',
  },
  {
    id: 'conv-029', categoryId: 'conversas', front: 'Are you free tonight?',
    back: 'Você está livre hoje à noite?', pronunciation: '/ɑːr juː friː təˈnaɪt/',
    phonetic: 'Ar iu frí tunáit?',
    type: 'phrase', exampleEn: 'Are you free tonight? We could grab dinner.', examplePt: 'Você está livre hoje à noite? A gente podia jantar.',
  },
  {
    id: 'conv-030', categoryId: 'conversas', front: 'I\'m running late',
    back: 'Estou atrasado(a)', pronunciation: '/aɪm ˈrʌnɪŋ leɪt/',
    phonetic: 'Áim rânin lêit',
    type: 'phrase', exampleEn: 'Sorry, I\'m running late. Start without me.', examplePt: 'Desculpe, estou atrasado. Começa sem mim.',
  },
  {
    id: 'conv-031', categoryId: 'conversas', front: 'Never mind',
    back: 'Deixa pra lá / Não tem importância', pronunciation: '/ˈnevər maɪnd/',
    phonetic: 'Néver máind',
    type: 'phrase', exampleEn: 'Can you help me? — Actually, never mind, I got it.', examplePt: 'Pode me ajudar? — Na verdade, deixa pra lá, eu resolvi.',
  },
  {
    id: 'conv-032', categoryId: 'conversas', front: 'Count me in',
    back: 'Pode me incluir / Eu topo', pronunciation: '/kaʊnt miː ɪn/',
    phonetic: 'Cáunt mi in',
    type: 'phrase', exampleEn: 'We\'re going to the beach Saturday. — Count me in!', examplePt: 'A gente vai para a praia no sábado. — Eu topo!',
  },
  {
    id: 'conv-033', categoryId: 'conversas', front: 'Sounds good to me',
    back: 'Me parece ótimo / Pode ser', pronunciation: '/saʊndz ɡʊd tuː miː/',
    phonetic: 'Sáundz gud tu mi',
    type: 'phrase', exampleEn: 'Let\'s meet at 7. — Sounds good to me!', examplePt: 'Vamos nos encontrar às 7. — Me parece ótimo!',
  },
  {
    id: 'conv-034', categoryId: 'conversas', front: 'I can\'t make it',
    back: 'Não vou conseguir ir / Não vou poder', pronunciation: '/aɪ kænt meɪk ɪt/',
    phonetic: 'Ái cánt mêik it',
    type: 'phrase', exampleEn: 'I\'m sorry, I can\'t make it to the party.', examplePt: 'Desculpe, não vou conseguir ir à festa.',
  },
  {
    id: 'conv-035', categoryId: 'conversas', front: 'What\'s going on?',
    back: 'O que está acontecendo?', pronunciation: '/wɒts ˈɡəʊɪŋ ɒn/',
    phonetic: 'Uáts góuin on?',
    type: 'phrase', exampleEn: 'There\'s so much noise. What\'s going on?', examplePt: 'Tem muito barulho. O que está acontecendo?',
  },

  // ─── PHRASAL VERBS — expansão ────────────────────────────────────────────────
  {
    id: 'pv-021', categoryId: 'phrasal-verbs', front: 'to back up',
    back: 'fazer backup / dar ré / apoiar', pronunciation: '/bæk ʌp/',
    phonetic: 'Bák âp',
    type: 'phrasal verb', exampleEn: 'Back up your files before updating.', examplePt: 'Faça backup dos seus arquivos antes de atualizar.',
  },
  {
    id: 'pv-022', categoryId: 'phrasal-verbs', front: 'to break down',
    back: 'quebrar / desmoronar / analisar em partes', pronunciation: '/breɪk daʊn/',
    phonetic: 'Brêik dáun',
    type: 'phrasal verb', exampleEn: 'My car broke down on the highway.', examplePt: 'Meu carro quebrou na rodovia.',
  },
  {
    id: 'pv-023', categoryId: 'phrasal-verbs', front: 'to calm down',
    back: 'se acalmar', pronunciation: '/kɑːm daʊn/',
    phonetic: 'Cám dáun',
    type: 'phrasal verb', exampleEn: 'Take a deep breath and calm down.', examplePt: 'Respira fundo e se acalma.',
  },
  {
    id: 'pv-024', categoryId: 'phrasal-verbs', front: 'to check in',
    back: 'fazer check-in / se registrar', pronunciation: '/tʃek ɪn/',
    phonetic: 'Tchék in',
    type: 'phrasal verb', exampleEn: 'You can check in online the night before.', examplePt: 'Você pode fazer check-in online na noite anterior.',
  },
  {
    id: 'pv-025', categoryId: 'phrasal-verbs', front: 'to fall behind',
    back: 'ficar para trás / atrasar', pronunciation: '/fɔːl bɪˈhaɪnd/',
    phonetic: 'Fól biháind',
    type: 'phrasal verb', exampleEn: 'I fell behind on my homework this week.', examplePt: 'Atrassei nas minhas tarefas essa semana.',
  },
  {
    id: 'pv-026', categoryId: 'phrasal-verbs', front: 'to give in',
    back: 'ceder / desistir', pronunciation: '/ɡɪv ɪn/',
    phonetic: 'Guív in',
    type: 'phrasal verb', exampleEn: 'Don\'t give in to the pressure.', examplePt: 'Não ceda à pressão.',
  },
  {
    id: 'pv-027', categoryId: 'phrasal-verbs', front: 'to look forward to',
    back: 'estar ansioso por / aguardar com expectativa', pronunciation: '/lʊk ˈfɔːwəd tuː/',
    phonetic: 'Lúk fóruard tu',
    type: 'phrasal verb', exampleEn: 'I\'m looking forward to the weekend.', examplePt: 'Estou ansioso pelo fim de semana.',
  },
  {
    id: 'pv-028', categoryId: 'phrasal-verbs', front: 'to make up',
    back: 'inventar / se reconciliar / se maquiar', pronunciation: '/meɪk ʌp/',
    phonetic: 'Mêik âp',
    type: 'phrasal verb', exampleEn: 'They fought but made up the next day.', examplePt: 'Eles brigaram mas se reconciliaram no dia seguinte.',
  },
  {
    id: 'pv-029', categoryId: 'phrasal-verbs', front: 'to pick up',
    back: 'pegar / buscar / aprender / melhorar', pronunciation: '/pɪk ʌp/',
    phonetic: 'Pík âp',
    type: 'phrasal verb', exampleEn: 'Can you pick me up at the airport?', examplePt: 'Você pode me buscar no aeroporto?',
  },
  {
    id: 'pv-030', categoryId: 'phrasal-verbs', front: 'to run into',
    back: 'encontrar por acaso / se chocar com', pronunciation: '/rʌn ˈɪntuː/',
    phonetic: 'Rân íntu',
    type: 'phrasal verb', exampleEn: 'I ran into my old teacher at the mall.', examplePt: 'Encontrei meu antigo professor por acaso no shopping.',
  },
  {
    id: 'pv-031', categoryId: 'phrasal-verbs', front: 'to sort out',
    back: 'resolver / organizar', pronunciation: '/sɔːrt aʊt/',
    phonetic: 'Sórt áut',
    type: 'phrasal verb', exampleEn: 'We need to sort out this problem quickly.', examplePt: 'Precisamos resolver esse problema rapidamente.',
  },
  {
    id: 'pv-032', categoryId: 'phrasal-verbs', front: 'to take off',
    back: 'decolar / tirar (roupa) / deslanchar', pronunciation: '/teɪk ɒf/',
    phonetic: 'Têik of',
    type: 'phrasal verb', exampleEn: 'The plane takes off at 6 AM.', examplePt: 'O avião decola às 6 da manhã.',
  },
  {
    id: 'pv-033', categoryId: 'phrasal-verbs', front: 'to turn up',
    back: 'aparecer / aumentar o volume', pronunciation: '/tɜːrn ʌp/',
    phonetic: 'Têrn âp',
    type: 'phrasal verb', exampleEn: 'He didn\'t turn up to the meeting.', examplePt: 'Ele não apareceu na reunião.',
  },
  {
    id: 'pv-034', categoryId: 'phrasal-verbs', front: 'to wear out',
    back: 'gastar / esgotar / cansar', pronunciation: '/weər aʊt/',
    phonetic: 'Uér áut',
    type: 'phrasal verb', exampleEn: 'These shoes are completely worn out.', examplePt: 'Esses sapatos estão completamente gastos.',
  },
  {
    id: 'pv-035', categoryId: 'phrasal-verbs', front: 'to put up with',
    back: 'aguentar / tolerar', pronunciation: '/pʊt ʌp wɪð/',
    phonetic: 'Put âp uíd',
    type: 'phrasal verb', exampleEn: 'I can\'t put up with this noise anymore.', examplePt: 'Não aguento mais esse barulho.',
  },

  // ─── NEGÓCIOS — expansão ─────────────────────────────────────────────────────
  {
    id: 'neg-016', categoryId: 'negocios', front: 'game changer',
    back: 'algo que muda tudo / divisor de águas', pronunciation: '/ɡeɪm ˈtʃeɪndʒər/',
    phonetic: 'Guêim tchêindjer',
    type: 'noun', exampleEn: 'This new technology is a real game changer.', examplePt: 'Essa nova tecnologia é um verdadeiro divisor de águas.',
  },
  {
    id: 'neg-017', categoryId: 'negocios', front: 'pain point',
    back: 'ponto de dor / problema do cliente', pronunciation: '/peɪn pɔɪnt/',
    phonetic: 'Pêin póint',
    type: 'noun', exampleEn: 'We need to identify the customer\'s main pain points.', examplePt: 'Precisamos identificar os principais pontos de dor do cliente.',
  },
  {
    id: 'neg-018', categoryId: 'negocios', front: 'to align',
    back: 'alinhar / estar em sincronia', pronunciation: '/tuː əˈlaɪn/',
    phonetic: 'Tu aláin',
    type: 'verb', exampleEn: 'Let\'s align on the priorities before the meeting.', examplePt: 'Vamos alinhar as prioridades antes da reunião.',
  },
  {
    id: 'neg-019', categoryId: 'negocios', front: 'deliverable',
    back: 'entregável / produto a ser entregue', pronunciation: '/dɪˈlɪvərəbəl/',
    phonetic: 'Dilíverabel',
    type: 'noun', exampleEn: 'What are the main deliverables for this project?', examplePt: 'Quais são os principais entregáveis deste projeto?',
  },
  {
    id: 'neg-020', categoryId: 'negocios', front: 'brainstorm',
    back: 'brainstorming / tempestade de ideias', pronunciation: '/ˈbreɪnstɔːrm/',
    phonetic: 'Brêinstórm',
    type: 'noun', exampleEn: 'Let\'s brainstorm some ideas for the campaign.', examplePt: 'Vamos fazer um brainstorming de ideias para a campanha.',
  },
  {
    id: 'neg-021', categoryId: 'negocios', front: 'bottom line',
    back: 'resultado final / lucro líquido / em resumo', pronunciation: '/ˈbɒtəm laɪn/',
    phonetic: 'Bótem láin',
    type: 'noun', exampleEn: 'The bottom line is that we need to cut costs.', examplePt: 'O ponto final é que precisamos cortar custos.',
  },
  {
    id: 'neg-022', categoryId: 'negocios', front: 'to touch base',
    back: 'entrar em contato / verificar com alguém', pronunciation: '/tʌtʃ beɪs/',
    phonetic: 'Tâtch bêis',
    type: 'phrase', exampleEn: 'I\'ll touch base with the team after the call.', examplePt: 'Vou entrar em contato com o time depois da ligação.',
  },
  {
    id: 'neg-023', categoryId: 'negocios', front: 'roadmap',
    back: 'roteiro / plano de desenvolvimento', pronunciation: '/ˈrəʊdmæp/',
    phonetic: 'Rôudmáp',
    type: 'noun', exampleEn: 'The product roadmap outlines features for Q3.', examplePt: 'O roadmap do produto descreve as funcionalidades do Q3.',
  },
  {
    id: 'neg-024', categoryId: 'negocios', front: 'synergy',
    back: 'sinergia / cooperação vantajosa', pronunciation: '/ˈsɪnərdʒi/',
    phonetic: 'Sínedjy',
    type: 'noun', exampleEn: 'There\'s great synergy between our two teams.', examplePt: 'Há uma ótima sinergia entre nossas duas equipes.',
  },
  {
    id: 'neg-025', categoryId: 'negocios', front: 'to greenlight',
    back: 'aprovar / dar sinal verde para', pronunciation: '/ˈɡriːnlaɪt/',
    phonetic: 'Grínláit',
    type: 'verb', exampleEn: 'Management greenlighted the new project.', examplePt: 'A diretoria deu sinal verde para o novo projeto.',
  },

  // ─── IDIOMS — expansão ───────────────────────────────────────────────────────
  {
    id: 'id-013', categoryId: 'idioms', front: 'cost an arm and a leg',
    back: 'custar os olhos da cara', pronunciation: '/kɒst ən ɑːrm ænd ə lɛɡ/',
    phonetic: 'Cost an árm and a leg',
    type: 'idiom', exampleEn: 'That sports car costs an arm and a leg.', examplePt: 'Aquele carro esportivo custa os olhos da cara.',
  },
  {
    id: 'id-014', categoryId: 'idioms', front: 'the last straw',
    back: 'a gota d\'água', pronunciation: '/ðə lɑːst strɔː/',
    phonetic: 'De lást stró',
    type: 'idiom', exampleEn: 'Being late again was the last straw for her.', examplePt: 'Chegar tarde de novo foi a gota d\'água para ela.',
  },
  {
    id: 'id-015', categoryId: 'idioms', front: 'beat around the bush',
    back: 'enrolar / falar em rodeios', pronunciation: '/biːt əˈraʊnd ðə bʊʃ/',
    phonetic: 'Bít aráund de búch',
    type: 'idiom', exampleEn: 'Stop beating around the bush and tell me the truth.', examplePt: 'Para de falar em rodeios e me diz a verdade.',
  },
  {
    id: 'id-016', categoryId: 'idioms', front: 'hit the ground running',
    back: 'começar em ritmo acelerado / já entrar no ritmo', pronunciation: '/hɪt ðə ɡraʊnd ˈrʌnɪŋ/',
    phonetic: 'Rit de gráund rânin',
    type: 'idiom', exampleEn: 'She hit the ground running on her first day at work.', examplePt: 'Ela entrou no ritmo logo no primeiro dia de trabalho.',
  },
  {
    id: 'id-017', categoryId: 'idioms', front: 'add fuel to the fire',
    back: 'jogar lenha na fogueira / piorar a situação', pronunciation: '/æd fjuːəl tuː ðə faɪər/',
    phonetic: 'Ád fiúel tu de fáier',
    type: 'idiom', exampleEn: 'Don\'t add fuel to the fire by arguing back.', examplePt: 'Não joga lenha na fogueira respondendo à briga.',
  },
  {
    id: 'id-018', categoryId: 'idioms', front: 'the tip of the iceberg',
    back: 'a ponta do iceberg', pronunciation: '/ðə tɪp əv ðiː ˈaɪsbɜːrɡ/',
    phonetic: 'De típ ov de áisbêrg',
    type: 'idiom', exampleEn: 'The reported losses are just the tip of the iceberg.', examplePt: 'Os prejuízos divulgados são apenas a ponta do iceberg.',
  },
  {
    id: 'id-019', categoryId: 'idioms', front: 'take it with a grain of salt',
    back: 'levar com um grão de sal / não levar muito a sério', pronunciation: '/teɪk ɪt wɪð ə ɡreɪn əv sɔːlt/',
    phonetic: 'Têik it uid e grêin ov sólt',
    type: 'idiom', exampleEn: 'Take what he says with a grain of salt — he exaggerates.', examplePt: 'Leva o que ele diz com um grão de sal — ele exagera.',
  },
  {
    id: 'id-020', categoryId: 'idioms', front: 'hang in there',
    back: 'aguentar firme / não desistir', pronunciation: '/hæŋ ɪn ðeər/',
    phonetic: 'Rán in dér',
    type: 'idiom', exampleEn: 'It\'s tough, but hang in there — it gets better.', examplePt: 'Tá difícil, mas aguenta firme — melhora.',
  },

  // ─── VIAGENS — expansão ──────────────────────────────────────────────────────
  {
    id: 'viag-013', categoryId: 'viagens', front: 'How do I get to...?',
    back: 'Como eu chego a...?', pronunciation: '/haʊ duː aɪ ɡet tuː/',
    phonetic: 'Rau du ái guét tu?',
    type: 'phrase', exampleEn: 'How do I get to the city center?', examplePt: 'Como eu chego ao centro da cidade?',
  },
  {
    id: 'viag-014', categoryId: 'viagens', front: 'I\'d like a room for two nights',
    back: 'Eu gostaria de um quarto por duas noites', pronunciation: '/aɪd laɪk ə ruːm fər tuː naɪts/',
    phonetic: 'Áid láik e rúm for tu náits',
    type: 'phrase', exampleEn: 'Hi, I\'d like a room for two nights, please.', examplePt: 'Olá, eu gostaria de um quarto por duas noites, por favor.',
  },
  {
    id: 'viag-015', categoryId: 'viagens', front: 'Is there a pharmacy nearby?',
    back: 'Tem alguma farmácia aqui perto?', pronunciation: '/ɪz ðeər ə ˈfɑːrməsi ˈnɪrbaɪ/',
    phonetic: 'Iz dér e fármasi níarbai?',
    type: 'phrase', exampleEn: 'Excuse me, is there a pharmacy nearby?', examplePt: 'Com licença, tem alguma farmácia aqui perto?',
  },
  {
    id: 'viag-016', categoryId: 'viagens', front: 'Where can I exchange money?',
    back: 'Onde posso trocar dinheiro?', pronunciation: '/weər kæn aɪ ɪksˈtʃeɪndʒ ˈmʌni/',
    phonetic: 'Uér can ái ikstchêindj mâni?',
    type: 'phrase', exampleEn: 'Where can I exchange money around here?', examplePt: 'Onde posso trocar dinheiro por aqui?',
  },
  {
    id: 'viag-017', categoryId: 'viagens', front: 'The AC isn\'t working',
    back: 'O ar-condicionado não está funcionando', pronunciation: '/ðiː eɪˈsiː ɪznt ˈwɜːrkɪŋ/',
    phonetic: 'De êi-sí íznt uérkin',
    type: 'phrase', exampleEn: 'Excuse me, the AC in my room isn\'t working.', examplePt: 'Com licença, o ar-condicionado do meu quarto não está funcionando.',
  },
  {
    id: 'viag-018', categoryId: 'viagens', front: 'Can I have an extra pillow?',
    back: 'Posso ter um travesseiro extra?', pronunciation: '/kæn aɪ hæv ən ˈekstrə ˈpɪləʊ/',
    phonetic: 'Can ái ráv an éxtra pílou?',
    type: 'phrase', exampleEn: 'Can I have an extra pillow, please?', examplePt: 'Posso ter um travesseiro extra, por favor?',
  },
  {
    id: 'viag-019', categoryId: 'viagens', front: 'What time does it close?',
    back: 'A que horas fecha?', pronunciation: '/wɒt taɪm dʌz ɪt kləʊz/',
    phonetic: 'Uát táim dâz it clóuz?',
    type: 'phrase', exampleEn: 'What time does the museum close?', examplePt: 'A que horas o museu fecha?',
  },
  {
    id: 'viag-020', categoryId: 'viagens', front: 'I missed my connection',
    back: 'Perdi minha conexão (de voo)', pronunciation: '/aɪ mɪst maɪ kəˈnekʃən/',
    phonetic: 'Ái míst mái conécshan',
    type: 'phrase', exampleEn: 'I missed my connection — what should I do?', examplePt: 'Perdi minha conexão — o que devo fazer?',
  },

  // ─── TV & FILMES — expansão ──────────────────────────────────────────────────
  {
    id: 'tv-013', categoryId: 'tv-filmes', front: 'I totally get it',
    back: 'Eu entendo completamente', pronunciation: '/aɪ ˈtəʊtəli ɡet ɪt/',
    phonetic: 'Ái tóutali guét it',
    type: 'phrase', exampleEn: 'Don\'t worry, I totally get it.', examplePt: 'Não se preocupa, eu entendo completamente.',
  },
  {
    id: 'tv-014', categoryId: 'tv-filmes', front: 'You\'re killing it!',
    back: 'Você tá arrasando!', pronunciation: '/jɔːr ˈkɪlɪŋ ɪt/',
    phonetic: 'Iôr kílin it!',
    type: 'phrase', exampleEn: 'That presentation was amazing — you\'re killing it!', examplePt: 'Essa apresentação foi incrível — você tá arrasando!',
  },
  {
    id: 'tv-015', categoryId: 'tv-filmes', front: 'That\'s the thing',
    back: 'Essa é a questão / É exatamente isso', pronunciation: '/ðæts ðə θɪŋ/',
    phonetic: 'Dáts de ting',
    type: 'phrase', exampleEn: 'That\'s the thing — I don\'t know what to do.', examplePt: 'Essa é a questão — eu não sei o que fazer.',
  },
  {
    id: 'tv-016', categoryId: 'tv-filmes', front: 'Fair enough',
    back: 'Justo / Tudo bem / Faz sentido', pronunciation: '/feər ɪˈnʌf/',
    phonetic: 'Fér inâf',
    type: 'phrase', exampleEn: '— I need more time. — Fair enough.', examplePt: '— Preciso de mais tempo. — Justo.',
  },
  {
    id: 'tv-017', categoryId: 'tv-filmes', front: 'Are you serious right now?',
    back: 'Você tá falando sério agora?', pronunciation: '/ɑːr juː ˈsɪəriəs raɪt naʊ/',
    phonetic: 'Ar iu sírias ráit náu?',
    type: 'phrase', exampleEn: 'You forgot our anniversary? Are you serious right now?', examplePt: 'Você esqueceu nosso aniversário? Tá falando sério?',
  },
  {
    id: 'tv-018', categoryId: 'tv-filmes', front: 'That\'s my point exactly',
    back: 'É exatamente o que eu quis dizer', pronunciation: '/ðæts maɪ pɔɪnt ɪɡˈzæktli/',
    phonetic: 'Dáts mái póint iguizáktli',
    type: 'phrase', exampleEn: '— So you think we rushed it? — That\'s my point exactly.', examplePt: '— Então você acha que foi apressado? — É exatamente o que eu quis dizer.',
  },
  {
    id: 'tv-019', categoryId: 'tv-filmes', front: 'I\'m not buying it',
    back: 'Não estou acreditando / Não tô comprando essa ideia', pronunciation: '/aɪm nɒt ˈbaɪɪŋ ɪt/',
    phonetic: 'Áim not báiin it',
    type: 'phrase', exampleEn: 'He said it was an accident, but I\'m not buying it.', examplePt: 'Ele disse que foi acidente, mas não tô comprando.',
  },
  {
    id: 'tv-020', categoryId: 'tv-filmes', front: 'It\'s not what it looks like',
    back: 'Não é o que parece', pronunciation: '/ɪts nɒt wɒt ɪt lʊks laɪk/',
    phonetic: 'Its not uát it luks láik',
    type: 'phrase', exampleEn: 'Wait — it\'s not what it looks like!', examplePt: 'Espera — não é o que parece!',
  },
]

export const WORD_OF_THE_DAY_IDS = [
  'id-001', 'pv-001', 'conv-017', 'id-003', 'pv-007', 'id-002',
  'neg-009', 'id-006', 'pv-004', 'conv-007',
]

export function getCardCountByCategory(categoryId: string): number {
  return flashcards.filter(c => c.categoryId === categoryId).length
}

export function getFlashcardsByCategory(categoryId: string): Flashcard[] {
  return flashcards.filter(c => c.categoryId === categoryId)
}

export function getWordOfTheDay(): Flashcard {
  const dayIndex = Math.floor(Date.now() / 86400000) % WORD_OF_THE_DAY_IDS.length
  const id = WORD_OF_THE_DAY_IDS[dayIndex]
  return flashcards.find(c => c.id === id) ?? flashcards[0]
}

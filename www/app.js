/* هموم داعية — THE CONCERNS OF A PREACHER — app.js v1.0 */
/* Based on "Humum Da'iya" by Sheikh Mohammed al-Ghazali (1917-1996) */
/* Published 1983 — 299 pages — Al-Ghazali's most personal book */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'هموم داعية',
    splashSub: 'هموم الشيخ الغزالي في الدعوة والأمة',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة آل عمران ١٠٤',
    tabHome: 'الرئيسية', tabConcerns: 'الهموم', tabSolutions: 'الحلول',
    tabQuiz: 'اختبار', tabReflection: 'تأمل', tabAbout: 'الكتاب',
    concernsTitle: 'هموم الداعية',
    concernsDesc: '٢٠ قضية شغلت الشيخ الغزالي — من واقع الدعوة إلى مستقبل الأمة',
    solutionsTitle: 'رؤى وحلول',
    solutionsDesc: 'كيف رأى الغزالي طريق الإصلاح — حلول عملية من قلب الواقع',
    quizTitle: 'ماذا ستفعل؟',
    quizDesc: 'مواقف حقيقية من واقع الدعوة — اختر الأقرب لما ستفعله',
    reflectionTitle: 'تأمل يومي',
    reflectionDesc: 'يوميات الداعية — تأملات وأفكار من قلب الكتاب',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية الداعية',
    resetBtn: 'إعادة تعيين اليوم',
    dailyLabel: '🕌 تأمل اليوم',
    concern: '🔍 القضية',
    solution: '💡 رؤية الغزالي',
    action: '✊ خطوة عملية',
    verse: 'الآية',
    chapter: 'الفصل',
    share: 'مشاركة',
    searchPlaceholder: 'ابحث في الهموم...',
    streakMsg: 'يوم متتالي!',
    allDone: 'بارك الله فيك! أكملت جميع التأملات!',
    submitQuiz: 'اعرف النتيجة',
    quizAgain: 'أعد الاختبار',
    nextScenario: 'السيناريو التالي',
    scenarioOf: 'سيناريو',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    badgesLabel: 'الأوسمة',
    lifeline5050: '50/50',
    lifelineHint: 'تلميح',
    lifelineVerse: 'آية',
    splashFeatures: [
      '٢٠ قضية من هموم الداعية',
      'سيناريوهات تفاعلية: ماذا ستفعل؟',
      'تأملات يومية مع تتبع مستمر',
      'نقاط خبرة وأوسمة'
    ],
  },
  en: {
    appTitle: 'Concerns of a Preacher',
    splashSub: "Al-Ghazali's concerns about dawah and the Ummah",
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al-Imran 3:104',
    tabHome: 'Home', tabConcerns: 'Concerns', tabSolutions: 'Solutions',
    tabQuiz: 'Quiz', tabReflection: 'Reflect', tabAbout: 'Book',
    concernsTitle: "The Preacher's Concerns",
    concernsDesc: '20 issues that troubled Sheikh al-Ghazali — from dawah realities to the future of the Ummah',
    solutionsTitle: 'Visions & Solutions',
    solutionsDesc: "How al-Ghazali saw the path to reform — practical solutions from the heart of reality",
    quizTitle: 'What Would You Do?',
    quizDesc: 'Real-life dawah scenarios — choose what you would actually do',
    reflectionTitle: 'Daily Reflection',
    reflectionDesc: "A preacher's diary — reflections and insights from the heart of the book",
    helpTitle: '❓ Help',
    duaPanelTitle: "🤲 Preacher's Duas",
    resetBtn: 'Reset Today',
    dailyLabel: "🕌 Today's Reflection",
    concern: '🔍 The Issue',
    solution: "💡 Al-Ghazali's View",
    action: '✊ Practical Step',
    verse: 'Verse',
    chapter: 'Chapter',
    share: 'Share',
    searchPlaceholder: 'Search concerns...',
    streakMsg: 'day streak!',
    allDone: 'Well done! All reflections completed!',
    submitQuiz: 'See Results',
    quizAgain: 'Retake Quiz',
    nextScenario: 'Next Scenario',
    scenarioOf: 'Scenario',
    xpLabel: 'Experience Points',
    levelLabel: 'Level',
    badgesLabel: 'Badges',
    lifeline5050: '50/50',
    lifelineHint: 'Hint',
    lifelineVerse: 'Verse',
    splashFeatures: [
      "20 issues from a preacher's concerns",
      'Interactive scenarios: What would you do?',
      'Daily reflections with streak tracking',
      'Experience points and badges'
    ],
  },
  fr: {
    appTitle: "Soucis d\'un Predicateur",
    splashSub: "Les preoccupations d'al-Ghazali sur la da'wa et la Oumma",
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al-Imran 3:104',
    tabHome: 'Accueil', tabConcerns: 'Soucis', tabSolutions: 'Solutions',
    tabQuiz: 'Quiz', tabReflection: 'Reflexion', tabAbout: 'Livre',
    concernsTitle: 'Les Soucis du Predicateur',
    concernsDesc: "20 questions qui preoccupaient le Sheikh al-Ghazali — de la da'wa au futur de la Oumma",
    solutionsTitle: 'Visions et Solutions',
    solutionsDesc: "Comment al-Ghazali voyait le chemin de la reforme — des solutions concretes",
    quizTitle: 'Que Feriez-Vous ?',
    quizDesc: "Scenarios reels de da'wa — choisissez ce que vous feriez vraiment",
    reflectionTitle: 'Reflexion Quotidienne',
    reflectionDesc: "Le journal d\'un predicateur — reflexions et enseignements du coeur du livre",
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas du Predicateur',
    resetBtn: 'Reinitialiser',
    dailyLabel: '🕌 Reflexion du Jour',
    concern: '🔍 La Question',
    solution: "💡 La Vision d'al-Ghazali",
    action: '✊ Etape Pratique',
    verse: 'Verset',
    chapter: 'Chapitre',
    share: 'Partager',
    searchPlaceholder: 'Rechercher les soucis...',
    streakMsg: 'jours consecutifs !',
    allDone: 'Bravo ! Toutes les reflexions accomplies !',
    submitQuiz: 'Voir les Resultats',
    quizAgain: 'Refaire le Quiz',
    nextScenario: 'Scenario Suivant',
    scenarioOf: 'Scenario',
    xpLabel: "Points d'experience",
    levelLabel: 'Niveau',
    badgesLabel: 'Badges',
    lifeline5050: '50/50',
    lifelineHint: 'Indice',
    lifelineVerse: 'Verset',
    splashFeatures: [
      "20 questions d\'un predicateur soucieux",
      'Scenarios interactifs : Que feriez-vous ?',
      'Reflexions quotidiennes avec suivi',
      "Points d'experience et badges"
    ],
  }
};

// ═══════════════ CONCERNS DATA (20 concerns from the book) ═══════════════
const CONCERNS = [
  {
    id:1, emoji:'⚖️',
    ar:{title:'السلفية كما نعرفها ونحبها',desc:'يفرّق الغزالي بين السلفية الأصيلة (اتباع روح الصحابة وأخلاقهم وعدلهم) والسلفية المشوهة التي تهتم بالمظاهر فقط. السلفية الحقيقية تعني تكييف روح السلف مع الظروف الحديثة. يُدين من يحوّلون الخلافات الفقهية الفرعية إلى أسباب للتكفير.',solution:'علينا أن نفرّق بين الثوابت والمتغيرات. الخلاف الفقهي طبيعي لكن التعصب له مرض. يجب أن نتسع لاختلاف المذاهب كما اتسع السلف.',action:'عندما تسمع خلافاً فقهياً، اسأل: هل هذه مسألة أصول أم فروع؟ لا تُكفّر مخالفك.'},
    en:{title:'Secondary Disputes Tearing the Ummah Apart',desc:'Al-Ghazali is pained that Muslims fight over jurisprudential details while abandoning the fundamentals of faith. Secondary issues have become causes for excommunication and division, and enemies exploit this fragmentation.',solution:'We must distinguish between constants and variables. Jurisprudential disagreement is natural, but fanaticism about it is a disease. We should embrace scholarly diversity as our predecessors did.',action:'When you hear a jurisprudential dispute, ask: is this a fundamental or a secondary matter? Never excommunicate those who disagree.'},
    fr:{title:'Les Disputes Secondaires Dechirent la Oumma',desc:"Al-Ghazali souffre de voir les musulmans se battre sur des details juridiques tout en abandonnant les fondements de la foi. Les questions secondaires sont devenues des causes d'excommunication.",solution:"Il faut distinguer entre les constantes et les variables. Le desaccord juridique est naturel, mais le fanatisme est une maladie. Nous devons accepter la diversite comme nos predecesseurs.",action:"Quand vous entendez un desaccord juridique, demandez-vous : est-ce fondamental ou secondaire ? Ne prononcez jamais l'excommunication."}
  },
  {
    id:2, emoji:'🌍',
    ar:{title:'السياسة الغربية وتمزيق العالم الإسلامي',desc:'يرى الغزالي أن الاستعمار لم ينتهِ بالاستقلال. السياسة الغربية تعمل على تفتيت العالم الإسلامي من خلال رسم حدود مصطنعة وزرع الفتن بين الشعوب المسلمة.',solution:'الوعي هو السلاح الأول. يجب أن نفهم مخططات التفرقة ونبني وحدة تقوم على المصالح المشتركة والقيم الإسلامية الجامعة.',action:'اقرأ عن تاريخ بلدك الحقيقي. افهم كيف رُسمت الحدود. وابحث عن القواسم المشتركة مع المسلمين في البلدان الأخرى.'},
    en:{title:'Western Policy Fragmenting the Muslim World',desc:'Al-Ghazali sees that colonialism did not end with independence. Western policy works to fragment the Muslim world through artificial borders and sowing discord among Muslim peoples.',solution:'Awareness is the first weapon. We must understand division schemes and build unity based on common interests and unifying Islamic values.',action:'Read about your country\'s real history. Understand how borders were drawn. Seek common ground with Muslims in other countries.'},
    fr:{title:'La Politique Occidentale Fragmentant le Monde Musulman',desc:"Al-Ghazali voit que le colonialisme n'a pas pris fin avec l'independance. La politique occidentale travaille a fragmenter le monde musulman par des frontieres artificielles.",solution:"La conscience est la premiere arme. Nous devons comprendre les plans de division et construire l'unite sur des valeurs islamiques communes.",action:"Lisez la vraie histoire de votre pays. Comprenez comment les frontieres ont ete tracees. Cherchez les points communs avec les musulmans d'autres pays."}
  },
  {
    id:3, emoji:'🇵🇸',
    ar:{title:'فلسطين والتخاذل العربي',desc:'يعتبر الغزالي قضية فلسطين مرآة لحال الأمة. التخاذل العربي عن نصرة فلسطين ليس مجرد فشل سياسي بل فشل أخلاقي وديني. الأمة التي لا تنصر مظلوميها لا تستحق النصر.',solution:'القضية ليست قضية شعب واحد بل قضية أمة. يجب أن تبقى فلسطين في وجدان كل مسلم وأن نعمل بكل الوسائل المشروعة لنصرتها.',action:'ابقِ فلسطين في دعائك وفي وعيك. علّم أولادك تاريخها. وادعم أهلها بما تستطيع.'},
    en:{title:'Palestine and Arab Failure',desc:'Al-Ghazali considers Palestine a mirror of the Ummah\'s condition. Arab failure to support Palestine is not merely political failure but a moral and religious one. A nation that does not support its oppressed does not deserve victory.',solution:'This is not the cause of one people but of an entire Ummah. Palestine must remain in every Muslim\'s conscience, and we must work through all legitimate means to support it.',action:'Keep Palestine in your prayers and awareness. Teach your children its history. Support its people however you can.'},
    fr:{title:'La Palestine et la Defaillance Arabe',desc:"Al-Ghazali considere la Palestine comme un miroir de l'etat de la Oumma. La defaillance arabe n'est pas seulement un echec politique mais un echec moral et religieux.",solution:"Ce n'est pas la cause d'un seul peuple mais de toute une Oumma. La Palestine doit rester dans la conscience de chaque musulman.",action:"Gardez la Palestine dans vos prieres. Enseignez son histoire a vos enfants. Soutenez son peuple par tous les moyens possibles."}
  },
  {
    id:4, emoji:'👑',
    ar:{title:'الاستبداد السياسي',desc:'يرى الغزالي أن الاستبداد أخطر أمراض الأمة. الحاكم المستبد يفسد الدين والدنيا معاً. وكثير من الحكام يستخدمون الدين لتبرير طغيانهم.',solution:'الشورى ليست ترفاً بل فريضة إسلامية. يجب أن يكون للأمة صوت في اختيار حكامها ومحاسبتهم. العدل أساس الملك.',action:'مارس الشورى في حياتك: في بيتك، في عملك، في مجتمعك. وارفض تبرير الظلم بأي غطاء ديني.'},
    en:{title:'Political Despotism',desc:'Al-Ghazali sees despotism as the most dangerous disease of the Ummah. A despotic ruler corrupts both religion and worldly affairs. Many rulers use religion to justify their tyranny.',solution:'Consultation (Shura) is not a luxury but an Islamic obligation. The Ummah must have a voice in choosing and holding its rulers accountable. Justice is the foundation of governance.',action:'Practice consultation in your life: at home, at work, in your community. Refuse to justify injustice under any religious cover.'},
    fr:{title:'Le Despotisme Politique',desc:"Al-Ghazali voit le despotisme comme la maladie la plus dangereuse de la Oumma. Un dirigeant despotique corrompt la religion et les affaires du monde.",solution:"La consultation (Choura) n'est pas un luxe mais une obligation islamique. La Oumma doit avoir une voix dans le choix de ses dirigeants. La justice est le fondement du pouvoir.",action:"Pratiquez la consultation dans votre vie : a la maison, au travail, dans votre communaute. Refusez de justifier l'injustice sous couvert religieux."}
  },
  {
    id:5, emoji:'👩',
    ar:{title:'حقوق المرأة في الإسلام',desc:'يدافع الغزالي بقوة عن حقوق المرأة ويرى أن كثيراً مما يُنسب للإسلام من ظلم المرأة هو في الحقيقة عادات جاهلية أو تفسيرات خاطئة. المرأة شريكة الرجل في بناء الأمة.',solution:'يجب العودة إلى النصوص الأصلية وفهمها في سياقها. الإسلام أعطى المرأة حقوقها كاملة. المشكلة في التطبيق لا في الدين.',action:'راجع موقفك من المرأة: هل هو مبني على الإسلام الحقيقي أم على عادات موروثة؟ اقرأ سيرة نساء الصحابة.'},
    en:{title:"Women's Rights in Islam",desc:'Al-Ghazali strongly defends women\'s rights, arguing that much of what is attributed to Islam regarding the oppression of women is actually pre-Islamic customs or misinterpretations. Women are partners with men in building the Ummah.',solution:'We must return to the original texts and understand them in context. Islam gave women their full rights. The problem is in application, not in religion.',action:"Review your stance on women: is it based on authentic Islam or inherited customs? Read about the women among the Prophet's Companions."},
    fr:{title:'Les Droits des Femmes en Islam',desc:"Al-Ghazali defend fermement les droits des femmes. Beaucoup de ce qui est attribue a l'Islam concernant l'oppression des femmes sont en realite des coutumes pre-islamiques ou des interpretations erronees.",solution:"Il faut revenir aux textes originaux et les comprendre dans leur contexte. L'Islam a donne aux femmes tous leurs droits. Le probleme est dans l'application, pas dans la religion.",action:"Examinez votre position sur les femmes : est-elle basee sur l'Islam authentique ou sur des coutumes heritees ?"}
  },
  {
    id:6, emoji:'📚',
    ar:{title:'التعليم الديني الجامد',desc:'يشكو الغزالي من أن التعليم الديني أصبح تلقيناً بلا فهم. الطالب يحفظ النصوص دون أن يفهم مقاصدها أو يربطها بالواقع.',solution:'التعليم الديني يحتاج ثورة في المنهج. يجب ربط النص بالواقع، وتعليم الفهم لا الحفظ فقط، وفتح باب الاجتهاد.',action:'عندما تقرأ نصاً دينياً، لا تكتفِ بحفظه. اسأل: ما المقصد؟ كيف أطبقه في واقعي اليوم؟'},
    en:{title:'Stagnant Religious Education',desc:'Al-Ghazali laments that religious education has become rote memorization without understanding. Students memorize texts without grasping their purposes or connecting them to reality.',solution:'Religious education needs a revolution in methodology. We must connect text to reality, teach comprehension not just memorization, and open the door to scholarly reasoning.',action:'When you read a religious text, don\'t just memorize it. Ask: what is its purpose? How do I apply it in my reality today?'},
    fr:{title:"L'Education Religieuse Figee",desc:"Al-Ghazali deplore que l'education religieuse soit devenue une memorisation sans comprehension. Les etudiants memorisent les textes sans en saisir les objectifs.",solution:"L'education religieuse a besoin d'une revolution methodologique. Il faut relier le texte a la realite et enseigner la comprehension, pas seulement la memorisation.",action:"Quand vous lisez un texte religieux, ne vous contentez pas de le memoriser. Demandez : quel est son objectif ? Comment l'appliquer aujourd'hui ?"}
  },
  {
    id:7, emoji:'⚔️',
    ar:{title:'دور الدعاة في الحرب (1973)',desc:'يتحدث الغزالي عن دور الدعاة في حرب أكتوبر 1973. الداعية ليس منعزلاً عن الواقع بل يجب أن يكون في قلب الأحداث، يدعم الجيش ويرفع المعنويات.',solution:'الداعية يجب أن يكون حاضراً في كل ميدان: في السلم والحرب، في المسجد والمجتمع. الإسلام لا يعرف الانعزال.',action:'كن حاضراً في مجتمعك. لا تنعزل في برج عاجي. شارك في هموم الناس وقضاياهم.'},
    en:{title:'The Role of Preachers in War (1973)',desc:'Al-Ghazali discusses the role of preachers during the October 1973 war. A preacher is not isolated from reality but must be at the heart of events, supporting the army and boosting morale.',solution:'A preacher must be present in every field: in peace and war, in the mosque and in society. Islam does not know isolation.',action:'Be present in your community. Don\'t isolate yourself in an ivory tower. Share in people\'s concerns and causes.'},
    fr:{title:'Le Role des Predicateurs en Guerre (1973)',desc:"Al-Ghazali parle du role des predicateurs pendant la guerre d'octobre 1973. Le predicateur n'est pas isole de la realite mais doit etre au coeur des evenements.",solution:"Un predicateur doit etre present sur tous les terrains : en paix et en guerre, a la mosquee et dans la societe. L'Islam ne connait pas l'isolement.",action:"Soyez present dans votre communaute. Ne vous isolez pas dans une tour d'ivoire. Partagez les soucis des gens."}
  },
  {
    id:8, emoji:'🏛️',
    ar:{title:'التراث الثقافي يحتاج تنقية',desc:'يرى الغزالي أن التراث الإسلامي يحمل كنوزاً عظيمة لكنه أيضاً يحمل شوائب دخيلة. علينا أن ننقّي التراث بمنهج علمي دون أن نهدمه أو نقدسه.',solution:'المنهج هو: نأخذ ما وافق الكتاب والسنة، ونترك ما خالفهما، مع الاحترام للعلماء السابقين. التراث وسيلة لا غاية.',action:'عندما تقرأ كتاباً تراثياً، ميّز بين ما هو ثابت من الوحي وما هو اجتهاد بشري قابل للخطأ.'},
    en:{title:'Cultural Heritage Needs Purification',desc:'Al-Ghazali sees that Islamic heritage carries great treasures but also foreign impurities. We must purify heritage with scholarly methodology without demolishing or sanctifying it.',solution:'The methodology: take what aligns with the Quran and Sunnah, leave what contradicts them, while respecting previous scholars. Heritage is a means, not an end.',action:'When reading a classical text, distinguish between what is firmly established from revelation and what is human reasoning that may err.'},
    fr:{title:'Le Patrimoine Culturel Necessite une Purification',desc:"Al-Ghazali voit que le patrimoine islamique porte de grands tresors mais aussi des impuretes etrangeres. Il faut purifier le patrimoine avec une methodologie scientifique.",solution:"La methodologie : prendre ce qui s'accorde avec le Coran et la Sunna, laisser ce qui les contredit, tout en respectant les savants anterieurs.",action:"En lisant un texte classique, distinguez entre ce qui est etabli par la revelation et ce qui est un raisonnement humain susceptible d'erreur."}
  },
  {
    id:9, emoji:'🤝',
    ar:{title:'الوحدة الإسلامية حلم مؤجل',desc:'يحلم الغزالي بوحدة المسلمين لكنه يرى العقبات الكثيرة: التعصب المذهبي، الحدود المصطنعة، الأنظمة القمعية، والجهل.',solution:'الوحدة تبدأ من القاعدة لا من القمة. اعمل على توحيد القلوب قبل توحيد الأنظمة. وابدأ بما يجمع لا بما يفرق.',action:'تواصل مع مسلم من بلد آخر أو مذهب مختلف. ابحث عن القواسم المشتركة.'},
    en:{title:'Islamic Unity: A Deferred Dream',desc:'Al-Ghazali dreams of Muslim unity but sees many obstacles: sectarian fanaticism, artificial borders, oppressive regimes, and ignorance.',solution:'Unity starts from the base, not the top. Work on unifying hearts before unifying systems. Start with what unites, not what divides.',action:'Connect with a Muslim from another country or school of thought. Seek common ground.'},
    fr:{title:'Unite Islamique : Un Reve Differe',desc:"Al-Ghazali reve de l'unite des musulmans mais voit de nombreux obstacles : le fanatisme sectaire, les frontieres artificielles, les regimes oppressifs.",solution:"L'unite commence par la base, pas par le sommet. Travaillez a unifier les coeurs avant les systemes. Commencez par ce qui unit.",action:"Connectez-vous avec un musulman d'un autre pays ou d'une autre ecole de pensee. Cherchez les points communs."}
  },
  {
    id:10, emoji:'📢',
    ar:{title:'نقد الحركة الإسلامية',desc:'ينتقد الغزالي الحركة الإسلامية المعاصرة بصراحة. يرى أنها وقعت في أخطاء كثيرة: التشدد، الجمود، الانشغال بالسياسة على حساب التربية، والعزلة عن المجتمع.',solution:'الحركة الإسلامية تحتاج مراجعة جذرية: أقل تسييس، أكثر تربية. أقل تشدد، أكثر رحمة. أقل عزلة، أكثر انفتاح.',action:'قيّم نشاطك الدعوي: هل هو أقرب للتربية أم للتسييس؟ هل ينفع الناس أم ينفّرهم؟'},
    en:{title:'Critique of Islamic Activism',desc:'Al-Ghazali frankly critiques contemporary Islamic movements. He sees they have fallen into many errors: extremism, rigidity, preoccupation with politics at the expense of education, and isolation from society.',solution:'The Islamic movement needs a radical review: less politicization, more education. Less rigidity, more mercy. Less isolation, more openness.',action:'Evaluate your dawah activity: is it closer to education or politicization? Does it benefit people or repel them?'},
    fr:{title:"Critique de l'Activisme Islamique",desc:"Al-Ghazali critique franchement les mouvements islamiques contemporains. Il voit qu'ils sont tombes dans de nombreuses erreurs : extremisme, rigidite, obsession politique au detriment de l'education.",solution:"Le mouvement islamique a besoin d'une revision radicale : moins de politisation, plus d'education. Moins de rigidite, plus de misericorde.",action:"Evaluez votre activite de da'wa : est-elle plus proche de l'education ou de la politisation ?"}
  },
  {
    id:11, emoji:'🧠',
    ar:{title:'الجمود الفكري',desc:'يرى الغزالي أن كثيراً من العلماء توقفوا عن التفكير واكتفوا بترديد أقوال السابقين. العقل المسلم أصبح عاجزاً عن الاجتهاد والإبداع.',solution:'الاجتهاد فريضة وليس ترفاً. يجب إعادة فتح باب الاجتهاد في القضايا المعاصرة مع الحفاظ على الثوابت.',action:'في المرة القادمة التي تواجه فيها مسألة معاصرة، لا تبحث فقط عن فتوى جاهزة. فكّر بنفسك ثم استشر أهل العلم.'},
    en:{title:'Intellectual Stagnation',desc:'Al-Ghazali sees that many scholars have stopped thinking, merely repeating the sayings of predecessors. The Muslim mind has become incapable of scholarly reasoning and creativity.',solution:'Scholarly reasoning (ijtihad) is an obligation, not a luxury. The door to ijtihad must be reopened for contemporary issues while preserving fundamentals.',action:'Next time you face a contemporary issue, don\'t just look for a ready-made fatwa. Think for yourself, then consult scholars.'},
    fr:{title:'La Stagnation Intellectuelle',desc:"Al-Ghazali voit que beaucoup de savants ont cesse de penser et se contentent de repeter les paroles des predecesseurs. L'esprit musulman est devenu incapable de raisonnement et de creativite.",solution:"L'ijtihad (raisonnement juridique) est une obligation, pas un luxe. La porte de l'ijtihad doit etre rouverte pour les questions contemporaines.",action:"La prochaine fois que vous faites face a une question contemporaine, ne cherchez pas seulement une fatwa prete. Reflechissez vous-meme."}
  },
  {
    id:12, emoji:'💔',
    ar:{title:'الفقر والتخلف في بلاد المسلمين',desc:'يتألم الغزالي من حال الفقر والتخلف في بلاد المسلمين رغم ما تملكه من ثروات. المشكلة ليست في قلة الموارد بل في سوء الإدارة والفساد.',solution:'الحل يبدأ من محاربة الفساد وتحقيق العدالة في توزيع الثروات. والزكاة إذا طُبقت كما أمر الله لحلت أكثر مشاكل الفقر.',action:'ادفع زكاتك بإتقان. ساهم في مشروع خيري يحارب الفقر. ولا تقبل الفساد حتى في أصغر صوره.'},
    en:{title:'Poverty and Underdevelopment in Muslim Lands',desc:'Al-Ghazali is pained by poverty and underdevelopment in Muslim countries despite their wealth. The problem is not lack of resources but mismanagement and corruption.',solution:'The solution starts with fighting corruption and achieving justice in wealth distribution. If Zakat were applied as God commanded, it would solve most poverty problems.',action:'Pay your Zakat properly. Contribute to a charitable project that fights poverty. Never accept corruption even in its smallest forms.'},
    fr:{title:'La Pauvrete et le Sous-Developpement en Terres Musulmanes',desc:"Al-Ghazali souffre de la pauvrete et du sous-developpement dans les pays musulmans malgre leurs richesses. Le probleme n'est pas le manque de ressources mais la mauvaise gestion et la corruption.",solution:"La solution commence par la lutte contre la corruption et la justice dans la distribution des richesses. La Zakat, bien appliquee, resoudrait la plupart des problemes de pauvrete.",action:"Payez votre Zakat correctement. Contribuez a un projet caritatif. N'acceptez jamais la corruption, meme dans ses plus petites formes."}
  },
  {
    id:13, emoji:'🎭',
    ar:{title:'المظاهر على حساب الجوهر',desc:'ينتقد الغزالي المسلمين الذين يهتمون بمظاهر التدين دون جوهره. اللحية والثوب لا تغني عن صدق القلب ونظافة اليد وحسن الخلق.',solution:'الإسلام يبدأ من الداخل. أصلح قلبك أولاً، ثم المظهر يتبع. المعيار هو التقوى لا الشكل.',action:'راجع نفسك: هل تديّنك مظهري أم جوهري؟ هل أخلاقك تعكس إسلامك حقاً؟'},
    en:{title:'Appearance Over Substance',desc:'Al-Ghazali criticizes Muslims who care about the appearance of religiosity without its substance. A beard and a robe do not substitute for a sincere heart, clean hands, and good character.',solution:'Islam starts from within. Fix your heart first, then appearance follows. The criterion is piety, not form.',action:'Examine yourself: is your religiosity superficial or substantial? Do your morals truly reflect your Islam?'},
    fr:{title:"L'Apparence au Detriment du Fond",desc:"Al-Ghazali critique les musulmans qui se soucient de l'apparence de la religiosite sans son essence. La barbe et la robe ne remplacent pas la sincerite du coeur et le bon caractere.",solution:"L'Islam commence de l'interieur. Corrigez votre coeur d'abord, l'apparence suivra. Le critere est la piete, pas la forme.",action:"Examinez-vous : votre religiosite est-elle superficielle ou profonde ? Vos moeurs refletent-elles vraiment votre Islam ?"}
  },
  {
    id:14, emoji:'🌐',
    ar:{title:'العزلة عن العالم',desc:'يرفض الغزالي انغلاق المسلمين على أنفسهم. الأمة التي لا تتفاعل مع العالم تموت. الانفتاح على الحضارات الأخرى واجب مع الحفاظ على الهوية.',solution:'خذ من كل حضارة أحسنها. تعلّم لغات العالم وعلومه. لكن احفظ هويتك وقيمك. الانفتاح ليس ذوباناً.',action:'تعلّم شيئاً جديداً من ثقافة أخرى هذا الأسبوع، واربطه بقيمك الإسلامية.'},
    en:{title:'Isolation from the World',desc:'Al-Ghazali rejects Muslims isolating themselves. A nation that does not interact with the world dies. Openness to other civilizations is a duty while preserving identity.',solution:'Take the best from every civilization. Learn the world\'s languages and sciences. But preserve your identity and values. Openness is not dissolution.',action:'Learn something new from another culture this week, and connect it to your Islamic values.'},
    fr:{title:"L'Isolement du Monde",desc:"Al-Ghazali rejette l'enfermement des musulmans sur eux-memes. Une nation qui n'interagit pas avec le monde meurt. L'ouverture aux autres civilisations est un devoir.",solution:"Prenez le meilleur de chaque civilisation. Apprenez les langues et les sciences du monde. Mais preservez votre identite. L'ouverture n'est pas la dissolution.",action:"Apprenez quelque chose de nouveau d'une autre culture cette semaine et reliez-le a vos valeurs islamiques."}
  },
  {
    id:15, emoji:'📖',
    ar:{title:'القرآن المهجور',desc:'يحزن الغزالي من هجر المسلمين للقرآن. كثيرون يحفظونه دون فهم، وآخرون لا يقرأونه إلا في رمضان. القرآن كتاب حياة لا كتاب طقوس.',solution:'يجب تغيير علاقتنا بالقرآن: من التلاوة الشكلية إلى التدبر والعمل. اقرأ بتفسير، افهم المقاصد، طبّق في حياتك.',action:'خصص ١٠ دقائق يومياً لقراءة القرآن مع التفسير. ليس مجرد تلاوة بل تدبر وفهم.'},
    en:{title:'The Abandoned Quran',desc:'Al-Ghazali grieves that Muslims have abandoned the Quran. Many memorize it without understanding, and others only read it in Ramadan. The Quran is a book of life, not a book of rituals.',solution:'We must change our relationship with the Quran: from formal recitation to contemplation and action. Read with commentary, understand the purposes, apply in your life.',action:'Dedicate 10 minutes daily to reading the Quran with commentary. Not just recitation but contemplation and understanding.'},
    fr:{title:'Le Coran Abandonne',desc:"Al-Ghazali est attriste que les musulmans aient abandonne le Coran. Beaucoup le memorisent sans le comprendre, d'autres ne le lisent qu'en Ramadan. Le Coran est un livre de vie, pas de rituels.",solution:"Il faut changer notre relation avec le Coran : de la recitation formelle a la contemplation et l'action. Lisez avec commentaire, comprenez les objectifs, appliquez dans votre vie.",action:"Consacrez 10 minutes par jour a lire le Coran avec commentaire. Pas seulement une recitation mais une contemplation."}
  },
  {
    id:16, emoji:'👨‍👩‍👧‍👦',
    ar:{title:'تربية الأجيال',desc:'يقلق الغزالي من مستقبل الأجيال القادمة. التربية في البيوت المسلمة ضعيفة، والمدارس لا تعلم القيم، والإعلام يفسد ما بقي.',solution:'التربية مسؤولية مشتركة: الأسرة أولاً، ثم المسجد، ثم المدرسة. يجب أن نبني جيلاً يفكر ويسأل ويعمل.',action:'خصص وقتاً يومياً لتربية أبنائك على القيم. علّمهم التفكير النقدي والأخلاق العملية.'},
    en:{title:'Raising the Next Generation',desc:'Al-Ghazali worries about the future of coming generations. Education in Muslim homes is weak, schools don\'t teach values, and media corrupts what remains.',solution:'Education is a shared responsibility: family first, then the mosque, then school. We must build a generation that thinks, questions, and acts.',action:'Dedicate daily time to teaching your children values. Teach them critical thinking and practical ethics.'},
    fr:{title:'Eduquer la Prochaine Generation',desc:"Al-Ghazali s'inquiete de l'avenir des generations futures. L'education dans les foyers musulmans est faible, les ecoles n'enseignent pas les valeurs, et les medias corrompent le reste.",solution:"L'education est une responsabilite partagee : la famille d'abord, puis la mosquee, puis l'ecole. Il faut construire une generation qui pense, questionne et agit.",action:"Consacrez du temps quotidien a enseigner les valeurs a vos enfants. Enseignez-leur la pensee critique et l'ethique pratique."}
  },
  {
    id:17, emoji:'💰',
    ar:{title:'المال والسلطة يفسدان الدعوة',desc:'يحذر الغزالي من خطر ارتباط الدعوة بالمال والسلطة. الداعية الذي يبيع كلمته للحاكم أو لرجل الأعمال يفقد مصداقيته.',solution:'استقلال الداعية شرط لصدق دعوته. يجب أن يكون للداعية مورد رزق مستقل. ولا يخشى في الحق لومة لائم.',action:'اسأل نفسك: هل كلمتي حرة أم مرهونة لجهة ما؟ كن صادقاً حتى لو كلفك ذلك.'},
    en:{title:'Money and Power Corrupt Dawah',desc:'Al-Ghazali warns against the danger of linking dawah to money and power. A preacher who sells his word to a ruler or businessman loses credibility.',solution:'A preacher\'s independence is a condition for the sincerity of their calling. Preachers should have independent sources of income and fear no blame in truth.',action:'Ask yourself: is my word free or mortgaged to someone? Be truthful even if it costs you.'},
    fr:{title:"L'Argent et le Pouvoir Corrompent la Da'wa",desc:"Al-Ghazali met en garde contre le danger de lier la da'wa a l'argent et au pouvoir. Un predicateur qui vend sa parole perd sa credibilite.",solution:"L'independance du predicateur est une condition de la sincerite de son appel. Il doit avoir des sources de revenus independantes et ne craindre aucun blame.",action:"Demandez-vous : ma parole est-elle libre ou hypothequee ? Soyez sincere meme si cela vous coute."}
  },
  {
    id:18, emoji:'🔬',
    ar:{title:'العلم والإيمان',desc:'يؤكد الغزالي أنه لا تعارض بين العلم والإيمان. المشكلة في من يريد أن يفصل بينهما. الإسلام دين يحتفي بالعلم ويدعو إلى البحث والاكتشاف.',solution:'يجب أن نعيد ربط العلم بالإيمان. العالم المسلم يجب أن يكون مؤمناً، والمؤمن يجب أن يكون متعلماً.',action:'اقرأ مقالاً علمياً هذا الأسبوع وفكر كيف يزيد إيمانك بالله. اربط العلم بالتأمل.'},
    en:{title:'Science and Faith',desc:'Al-Ghazali affirms there is no contradiction between science and faith. The problem lies with those who want to separate them. Islam celebrates science and calls for research and discovery.',solution:'We must reconnect science with faith. A Muslim scientist should be a believer, and a believer should be learned.',action:'Read a scientific article this week and reflect on how it increases your faith in God. Connect knowledge with contemplation.'},
    fr:{title:'Science et Foi',desc:"Al-Ghazali affirme qu'il n'y a pas de contradiction entre la science et la foi. Le probleme vient de ceux qui veulent les separer. L'Islam celebre la science et appelle a la recherche.",solution:"Il faut reconnecter la science a la foi. Un scientifique musulman doit etre croyant, et un croyant doit etre instruit.",action:"Lisez un article scientifique cette semaine et reflechissez a comment il renforce votre foi en Dieu."}
  },
  {
    id:19, emoji:'🕊️',
    ar:{title:'الرحمة قبل الشدة',desc:'يرى الغزالي أن كثيراً من الدعاة أساءوا فهم الدين فجعلوه كله شدة وزجراً. الإسلام دين رحمة أولاً. النبي بُعث رحمة للعالمين لا عذاباً.',solution:'أسلوب الداعية يجب أن يعكس رحمة الإسلام. الكلمة الطيبة صدقة. والحكمة في الدعوة أولى من القوة.',action:'في المرة القادمة التي تريد نصح شخص فيها، ابدأ باللطف. "ادع إلى سبيل ربك بالحكمة والموعظة الحسنة."'},
    en:{title:'Mercy Before Severity',desc:'Al-Ghazali sees that many preachers have misunderstood religion, making it all about severity and rebuke. Islam is a religion of mercy first. The Prophet was sent as a mercy to all worlds, not as punishment.',solution:"A preacher's style should reflect Islam's mercy. A kind word is charity. Wisdom in dawah is more important than force.",action:'Next time you want to advise someone, start with kindness. "Invite to the way of your Lord with wisdom and good instruction."'},
    fr:{title:'La Misericorde Avant la Severite',desc:"Al-Ghazali voit que beaucoup de predicateurs ont mal compris la religion, la reduisant a la severite. L'Islam est une religion de misericorde avant tout. Le Prophete a ete envoye comme misericorde pour tous les mondes.",solution:"Le style du predicateur doit refleter la misericorde de l'Islam. Une bonne parole est une aumone. La sagesse dans la da'wa prime sur la force.",action:"La prochaine fois que vous voulez conseiller quelqu'un, commencez par la gentillesse. \"Invite au chemin de ton Seigneur avec sagesse et bonne exhortation.\""}
  },
  {
    id:20, emoji:'🌅',
    ar:{title:'الأمل رغم كل شيء',desc:'رغم كل هذه الهموم، يختم الغزالي بالأمل. التاريخ الإسلامي مليء بلحظات النهوض بعد السقوط. الأمة لا تموت ما دام فيها من يعمل ويأمل ويدعو.',solution:'لا تستسلم للإحباط. كل عمل صالح تقدمه هو لبنة في بناء المستقبل. والله لا يضيع أجر المحسنين.',action:'ابدأ اليوم بعمل إيجابي واحد مهما كان صغيراً. الأمل ليس انتظاراً بل عملاً.'},
    en:{title:'Hope Despite Everything',desc:'Despite all these concerns, al-Ghazali ends with hope. Islamic history is full of moments of rising after falling. The Ummah does not die as long as there are those who work, hope, and call to good.',solution:'Don\'t surrender to despair. Every good deed you offer is a brick in building the future. God does not waste the reward of those who do good.',action:'Start today with one positive action, no matter how small. Hope is not waiting but working.'},
    fr:{title:'Espoir Malgre Tout',desc:"Malgre tous ces soucis, al-Ghazali conclut avec espoir. L'histoire islamique est pleine de moments de renaissance apres la chute. La Oumma ne meurt pas tant qu'il y a ceux qui travaillent et esperent.",solution:"Ne cedez pas au desespoir. Chaque bonne action est une brique dans la construction du futur. Dieu ne gaspille pas la recompense de ceux qui font le bien.",action:"Commencez aujourd'hui par une action positive, aussi petite soit-elle. L'espoir n'est pas une attente mais une action."}
  }
];

// ═══════════════ SOLUTIONS DATA (8 solutions) ═══════════════
const SOLUTIONS = [
  {
    emoji:'🎓',
    ar:{title:'إصلاح التعليم',problem:'التعليم الديني يخرج حافظين لا مفكرين. والتعليم المدني يخرج متعلمين بلا قيم.',solution:'يجب إصلاح المناهج لتجمع بين العلم والقيم، وبين الحفظ والفهم، وبين التراث والمعاصرة.',verse:'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',verseRef:'سورة العلق ٩٦: ١'},
    en:{title:'Reforming Education',problem:'Religious education produces memorizers, not thinkers. Secular education produces the educated without values.',solution:'Curricula must be reformed to combine knowledge with values, memorization with understanding, heritage with modernity.',verse:'Read in the name of your Lord who created',verseRef:'Surah Al-Alaq 96:1'},
    fr:{title:"Reformer l'Education",problem:"L'education religieuse produit des memorisateurs, pas des penseurs. L'education laique produit des instruits sans valeurs.",solution:"Les programmes doivent etre reformes pour combiner savoir et valeurs, memorisation et comprehension.",verse:'Lis au nom de ton Seigneur qui a cree',verseRef:'Sourate Al-Alaq 96:1'}
  },
  {
    emoji:'⚖️',
    ar:{title:'العدل السياسي',problem:'الاستبداد يفسد الدين والدنيا. الحاكم الظالم يستخدم الدين لتبرير طغيانه.',solution:'الشورى فريضة إسلامية. العدل أساس الملك. والمسلمون مسؤولون عن محاسبة حكامهم.',verse:'إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ',verseRef:'سورة النحل ١٦: ٩٠'},
    en:{title:'Political Justice',problem:'Despotism corrupts both religion and worldly affairs. The unjust ruler uses religion to justify tyranny.',solution:'Consultation is an Islamic obligation. Justice is the foundation of governance. Muslims are responsible for holding rulers accountable.',verse:'Indeed, God commands justice and good conduct',verseRef:'Surah An-Nahl 16:90'},
    fr:{title:'La Justice Politique',problem:"Le despotisme corrompt la religion et les affaires. Le dirigeant injuste utilise la religion pour justifier la tyrannie.",solution:"La consultation est une obligation islamique. La justice est le fondement du pouvoir. Les musulmans doivent demander des comptes a leurs dirigeants.",verse:'Certes, Dieu commande la justice et la bienfaisance',verseRef:'Sourate An-Nahl 16:90'}
  },
  {
    emoji:'🤝',
    ar:{title:'الوحدة في التنوع',problem:'المسلمون يتفرقون على خلافات فرعية بينما يتركون القضايا الكبرى.',solution:'نتفق على الأصول ونتسامح في الفروع. التنوع المذهبي ثراء لا خلاف. والعدو واحد.',verse:'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا',verseRef:'سورة آل عمران ٣: ١٠٣'},
    en:{title:'Unity in Diversity',problem:'Muslims divide over secondary disputes while abandoning major causes.',solution:'Agree on fundamentals and tolerate differences in branches. Scholarly diversity is richness, not division.',verse:'And hold firmly to the rope of God all together and do not become divided',verseRef:'Surah Al-Imran 3:103'},
    fr:{title:"L'Unite dans la Diversite",problem:'Les musulmans se divisent sur des disputes secondaires en abandonnant les grandes causes.',solution:"S'accorder sur les fondamentaux et tolerer les differences. La diversite juridique est une richesse.",verse:'Et cramponnez-vous tous ensemble au cable de Dieu et ne soyez pas divises',verseRef:'Sourate Al-Imran 3:103'}
  },
  {
    emoji:'👩',
    ar:{title:'إنصاف المرأة',problem:'كثير من ظلم المرأة باسم الإسلام هو في الحقيقة عادات جاهلية.',solution:'العودة إلى النصوص الأصلية تكشف أن الإسلام أنصف المرأة. المشكلة في التطبيق لا في الدين.',verse:'وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ',verseRef:'سورة البقرة ٢: ٢٢٨'},
    en:{title:"Justice for Women",problem:'Much of the oppression of women in the name of Islam is actually pre-Islamic customs.',solution:"Returning to original texts reveals that Islam gave women justice. The problem is in application, not in religion.",verse:'And due to them is similar to what is expected of them, according to what is reasonable',verseRef:'Surah Al-Baqarah 2:228'},
    fr:{title:'Justice pour les Femmes',problem:"Beaucoup de l'oppression des femmes au nom de l'Islam sont en realite des coutumes pre-islamiques.",solution:"Le retour aux textes originaux revele que l'Islam a rendu justice aux femmes. Le probleme est dans l'application.",verse:'Et elles ont des droits equivalents a leurs obligations, conformement a la bienseance',verseRef:'Sourate Al-Baqarah 2:228'}
  },
  {
    emoji:'📖',
    ar:{title:'إحياء القرآن',problem:'القرآن صار كتاب تلاوة فقط. يُحفظ ولا يُفهم، يُرتل ولا يُعمل به.',solution:'تحويل علاقتنا بالقرآن من التلاوة إلى التدبر والعمل. القرآن كتاب حياة لا كتاب طقوس.',verse:'أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ',verseRef:'سورة النساء ٤: ٨٢'},
    en:{title:'Reviving the Quran',problem:'The Quran has become a book of recitation only. Memorized but not understood, chanted but not practiced.',solution:'Transform our relationship with the Quran from recitation to contemplation and action. The Quran is a book of life, not rituals.',verse:'Do they not then reflect upon the Quran?',verseRef:'Surah An-Nisa 4:82'},
    fr:{title:'Raviver le Coran',problem:"Le Coran est devenu un livre de recitation uniquement. Memorise mais pas compris, psalmodie mais pas pratique.",solution:"Transformer notre relation avec le Coran de la recitation a la contemplation et l'action. Le Coran est un livre de vie.",verse:'Ne meditent-ils donc pas sur le Coran ?',verseRef:'Sourate An-Nisa 4:82'}
  },
  {
    emoji:'🕊️',
    ar:{title:'دعوة بالرحمة',problem:'كثير من الدعاة يستخدمون الشدة والترهيب. فينفّرون الناس بدل أن يقربوهم.',solution:'أسلوب الدعوة يجب أن يعكس رحمة الإسلام. الحكمة والكلمة الطيبة أقوى من كل سلاح.',verse:'ادْعُ إِلَى سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ',verseRef:'سورة النحل ١٦: ١٢٥'},
    en:{title:'Dawah with Mercy',problem:'Many preachers use severity and intimidation, repelling people instead of drawing them closer.',solution:"Dawah style must reflect Islam's mercy. Wisdom and kind words are stronger than any weapon.",verse:'Invite to the way of your Lord with wisdom and good instruction',verseRef:'Surah An-Nahl 16:125'},
    fr:{title:'Da\'wa avec Misericorde',problem:'Beaucoup de predicateurs utilisent la severite et l\'intimidation, repoussant les gens au lieu de les rapprocher.',solution:"Le style de da'wa doit refleter la misericorde de l'Islam. La sagesse et la bonne parole sont plus fortes que toute arme.",verse:'Appelle au sentier de ton Seigneur par la sagesse et la bonne exhortation',verseRef:'Sourate An-Nahl 16:125'}
  },
  {
    emoji:'🔬',
    ar:{title:'العلم والإيمان معاً',problem:'فصل العلم عن الإيمان أدى إلى عالم مسلم جاهل أو متعلم ملحد.',solution:'ربط العلم بالإيمان. كل اكتشاف علمي يزيد الإيمان. وكل آية قرآنية تدعو للتفكر في الكون.',verse:'إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ',verseRef:'سورة فاطر ٣٥: ٢٨'},
    en:{title:'Science and Faith Together',problem:'Separating science from faith has led to an ignorant Muslim world or an atheist educated class.',solution:'Connect science with faith. Every scientific discovery increases faith. Every Quranic verse invites reflection on the universe.',verse:'Only those fear God, from among His servants, who have knowledge',verseRef:'Surah Fatir 35:28'},
    fr:{title:'Science et Foi Ensemble',problem:"La separation de la science et de la foi a conduit a un monde musulman ignorant ou a des instruits athees.",solution:'Relier la science a la foi. Chaque decouverte scientifique renforce la foi. Chaque verset coranique invite a la reflexion sur l\'univers.',verse:'Parmi les serviteurs de Dieu, seuls les savants Le craignent',verseRef:'Sourate Fatir 35:28'}
  },
  {
    emoji:'🌍',
    ar:{title:'الانفتاح على العالم',problem:'الانغلاق يقتل الأمة. والذوبان في الآخر يفقدها هويتها.',solution:'الانفتاح الواعي: نأخذ من كل حضارة أحسنها ونحافظ على هويتنا. التبادل الثقافي لا يعني الاستسلام.',verse:'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُمْ مِنْ ذَكَرٍ وَأُنْثَى وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا',verseRef:'سورة الحجرات ٤٩: ١٣'},
    en:{title:'Openness to the World',problem:'Isolation kills the nation. Dissolution into others loses identity.',solution:'Conscious openness: take the best from every civilization while preserving identity. Cultural exchange does not mean surrender.',verse:'O mankind, We have created you from male and female and made you peoples and tribes that you may know one another',verseRef:'Surah Al-Hujurat 49:13'},
    fr:{title:"L'Ouverture au Monde",problem:"L'isolement tue la nation. La dissolution dans l'autre fait perdre l'identite.",solution:"L'ouverture consciente : prendre le meilleur de chaque civilisation tout en preservant l'identite. L'echange culturel ne signifie pas la reddition.",verse:'O hommes, Nous vous avons crees d\'un male et d\'une femelle, et Nous avons fait de vous des nations et des tribus pour que vous vous entre-connaissiez',verseRef:'Sourate Al-Hujurat 49:13'}
  }
];

// ═══════════════ QUIZ DATA — "What Would You Do?" Scenarios ═══════════════
const QUIZ = [
  {
    ar:{scenario:'أنت داعية في مسجد. جاءك شخص يسألك عن مسألة فقهية وأنت لا تعرف الجواب.',options:['أفتي بما أظنه صحيحاً حتى لا أفقد مصداقيتي','أقول "لا أعلم" وأرشده لعالم متخصص','أتهرب من السؤال','أعطيه رأي أشد المذاهب احتياطاً'],best:1,hint:'الشجاعة في قول "لا أعلم" علامة العالم الحقيقي.'},
    en:{scenario:'You are a preacher at a mosque. Someone asks you a jurisprudential question you don\'t know the answer to.',options:['Give a fatwa based on what I think is correct to maintain credibility','Say "I don\'t know" and direct them to a specialist scholar','Avoid the question','Give the strictest opinion as a precaution'],best:1,hint:'The courage to say "I don\'t know" is the mark of a true scholar.'},
    fr:{scenario:'Vous etes predicateur dans une mosquee. Quelqu\'un vous pose une question juridique dont vous ne connaissez pas la reponse.',options:['Donner un avis base sur ce que je crois correct pour maintenir ma credibilite','Dire "je ne sais pas" et orienter vers un savant specialise','Eviter la question','Donner l\'avis le plus strict par precaution'],best:1,hint:'Le courage de dire "je ne sais pas" est la marque d\'un vrai savant.'}
  },
  {
    ar:{scenario:'في حلقة دينية، بدأ أحد الحاضرين يُكفّر مذهباً فقهياً آخر. ماذا تفعل؟',options:['أسكت حفاظاً على السلام','أوقفه بأدب وأوضح أن الخلاف الفقهي لا يبرر التكفير','أوافقه لأنه أكبر مني سناً','أترك الحلقة'],best:1,hint:'السكوت عن الباطل ليس حفاظاً على السلام بل مشاركة فيه.'},
    en:{scenario:'In a religious circle, someone starts excommunicating another school of thought. What do you do?',options:['Stay silent to keep the peace','Politely stop them and explain that jurisprudential disagreement doesn\'t justify excommunication','Agree because they are older than me','Leave the circle'],best:1,hint:'Silence about falsehood is not keeping peace but participating in it.'},
    fr:{scenario:'Dans un cercle religieux, quelqu\'un commence a excommunier une autre ecole de pensee. Que faites-vous ?',options:['Garder le silence pour maintenir la paix','L\'arreter poliment et expliquer que le desaccord juridique ne justifie pas l\'excommunication','Etre d\'accord parce qu\'il est plus age que moi','Quitter le cercle'],best:1,hint:'Le silence face au faux n\'est pas le maintien de la paix mais une participation.'}
  },
  {
    ar:{scenario:'رجل أعمال ثري يعرض عليك تمويل مشروعك الدعوي مقابل أن "تخفف" من نقدك للفساد. ماذا تفعل؟',options:['أقبل التمويل — المال يخدم الدعوة','أرفض بشكل قاطع وأبحث عن تمويل مستقل','أقبل وأحاول الموازنة','أتجاهل العرض دون رد'],best:1,hint:'استقلال الداعية شرط لصدق دعوته.'},
    en:{scenario:'A wealthy businessman offers to fund your dawah project in exchange for you "softening" your criticism of corruption. What do you do?',options:['Accept — money serves dawah','Firmly refuse and seek independent funding','Accept and try to balance','Ignore the offer without responding'],best:1,hint:'A preacher\'s independence is essential to their sincerity.'},
    fr:{scenario:'Un homme d\'affaires riche vous propose de financer votre projet de da\'wa en echange d\'"adoucir" vos critiques de la corruption. Que faites-vous ?',options:['Accepter — l\'argent sert la da\'wa','Refuser fermement et chercher un financement independant','Accepter et essayer de trouver un equilibre','Ignorer l\'offre sans repondre'],best:1,hint:'L\'independance du predicateur est essentielle a sa sincerite.'}
  },
  {
    ar:{scenario:'فتاة مسلمة تسألك: لماذا يمنعني أبي من إكمال دراستي الجامعية بحجة أن "المرأة مكانها البيت"؟',options:['أوافق أباها — المرأة مكانها البيت فعلاً','أوضح أن الإسلام يحث على التعلم للجميع وأنصحها بالحوار مع أبيها','أتجنب الموضوع','أنتقد أباها علناً'],best:1,hint:'الإسلام لم يمنع المرأة من التعلم بل حثها عليه.'},
    en:{scenario:'A Muslim girl asks: why does my father prevent me from continuing university, claiming "a woman\'s place is at home"?',options:['Agree with her father — a woman\'s place is indeed at home','Explain that Islam encourages learning for all and advise her to have a dialogue with her father','Avoid the topic','Publicly criticize her father'],best:1,hint:'Islam never prevented women from learning — it encouraged it.'},
    fr:{scenario:'Une fille musulmane demande : pourquoi mon pere m\'empeche de continuer l\'universite, pretendant que "la place de la femme est a la maison" ?',options:['Etre d\'accord avec son pere — la place de la femme est effectivement a la maison','Expliquer que l\'Islam encourage l\'apprentissage pour tous et lui conseiller de dialoguer avec son pere','Eviter le sujet','Critiquer publiquement son pere'],best:1,hint:'L\'Islam n\'a jamais interdit aux femmes d\'apprendre — il les y a encouragees.'}
  },
  {
    ar:{scenario:'شاب يقول لك: "أنا أريد أن أترك الإسلام لأنني أجد فيه قيوداً كثيرة." ماذا تفعل؟',options:['أزجره وأحذره من عذاب الله','أستمع إليه بتفهم وأسأله عن مخاوفه المحددة ثم أوضح بالحكمة','أقطع علاقتي به','أتجاهل كلامه'],best:1,hint:'الاستماع بتفهم هو أول خطوة في الدعوة بالحكمة.'},
    en:{scenario:'A young man tells you: "I want to leave Islam because I find too many restrictions." What do you do?',options:['Rebuke him and warn him of God\'s punishment','Listen to him with empathy, ask about his specific concerns, then explain with wisdom','Cut off my relationship with him','Ignore what he said'],best:1,hint:'Listening with empathy is the first step in calling to God with wisdom.'},
    fr:{scenario:'Un jeune homme vous dit : "Je veux quitter l\'Islam parce que j\'y trouve trop de restrictions." Que faites-vous ?',options:['Le reprimander et le mettre en garde contre le chatiment de Dieu','L\'ecouter avec empathie, lui demander ses preoccupations specifiques, puis expliquer avec sagesse','Couper ma relation avec lui','Ignorer ce qu\'il a dit'],best:1,hint:'Ecouter avec empathie est la premiere etape pour appeler a Dieu avec sagesse.'}
  },
  {
    ar:{scenario:'في مناقشة مع غير مسلم يسألك عن موقف الإسلام من حرية الرأي. كيف تجيب؟',options:['أقول أن الإسلام لا يسمح بأي نقد للدين','أوضح أن الإسلام يحترم حرية الفكر والحوار، مع ضوابط أخلاقية تمنع الإساءة','أرفض المناقشة','أتهمه بالتحيز ضد الإسلام'],best:1,hint:'الحوار الحضاري هو أفضل وسيلة للدعوة.'},
    en:{scenario:'In a discussion with a non-Muslim who asks about Islam\'s position on freedom of opinion, how do you respond?',options:['Say Islam doesn\'t allow any criticism of religion','Explain that Islam respects freedom of thought and dialogue, with ethical guidelines that prevent harm','Refuse to discuss','Accuse them of bias against Islam'],best:1,hint:'Civilized dialogue is the best tool for dawah.'},
    fr:{scenario:'Dans une discussion avec un non-musulman qui vous demande la position de l\'Islam sur la liberte d\'opinion, comment repondez-vous ?',options:['Dire que l\'Islam ne permet aucune critique de la religion','Expliquer que l\'Islam respecte la liberte de pensee et le dialogue, avec des principes ethiques qui empechent le prejudice','Refuser de discuter','L\'accuser de partialite contre l\'Islam'],best:1,hint:'Le dialogue civilise est le meilleur outil de da\'wa.'}
  },
  {
    ar:{scenario:'اكتشفت أن إمام مسجدك يقدم تفسيرات خاطئة للقرآن تبرر الظلم. ماذا تفعل؟',options:['أسكت احتراماً للإمام','أناقشه على انفراد بالأدلة العلمية وبأدب','أشهّر به على وسائل التواصل','أترك المسجد نهائياً'],best:1,hint:'النصيحة تكون سراً، والفضيحة تكون علناً. ابدأ بالنصيحة.'},
    en:{scenario:'You discover your mosque imam gives false Quran interpretations that justify injustice. What do you do?',options:['Stay silent out of respect for the imam','Discuss with him privately using scholarly evidence and with good manners','Expose him on social media','Leave the mosque permanently'],best:1,hint:'Advice is given privately, and scandal is public. Start with advice.'},
    fr:{scenario:'Vous decouvrez que l\'imam de votre mosquee donne de fausses interpretations du Coran qui justifient l\'injustice. Que faites-vous ?',options:['Garder le silence par respect pour l\'imam','Discuter avec lui en prive avec des preuves scientifiques et de bonnes manieres','L\'exposer sur les reseaux sociaux','Quitter la mosquee definitivement'],best:1,hint:'Le conseil se donne en prive, et le scandale est public. Commencez par le conseil.'}
  },
  {
    ar:{scenario:'يطلب منك صديق أن تنشر رسالة دينية على وسائل التواصل لكنك لست متأكداً من صحتها. ماذا تفعل؟',options:['أنشرها فوراً — الثواب لمن نشر الخير','أتحقق من صحتها أولاً ثم أقرر','أنشرها مع تحفظ','أتجاهل الطلب'],best:1,hint:'الكذب على الله ورسوله من أكبر الكبائر. تحقق أولاً.'},
    en:{scenario:'A friend asks you to share a religious message on social media, but you\'re not sure if it\'s authentic. What do you do?',options:['Share immediately — reward goes to those who spread good','Verify its authenticity first, then decide','Share it with a disclaimer','Ignore the request'],best:1,hint:'Lying about God and His Messenger is among the greatest sins. Verify first.'},
    fr:{scenario:'Un ami vous demande de partager un message religieux sur les reseaux sociaux, mais vous n\'etes pas sur de son authenticite. Que faites-vous ?',options:['Partager immediatement — la recompense va a ceux qui diffusent le bien','Verifier d\'abord son authenticite, puis decider','Le partager avec une reserve','Ignorer la demande'],best:1,hint:'Mentir sur Dieu et Son Messager est parmi les plus grands peches. Verifiez d\'abord.'}
  },
  {
    ar:{scenario:'شاب يريد أن يصبح داعية لكنه لا يملك شهادة شرعية. ينصحه البعض بعدم الكلام في الدين. ما رأيك؟',options:['يجب أن يصمت حتى يحصل على شهادة','يتعلم ويدعو في حدود علمه مع الإحالة لأهل العلم فيما يجهله','يتحدث في كل شيء بثقة','ينتظر سنوات حتى يكمل دراسته'],best:1,hint:'بلّغوا عني ولو آية. لكن لا تقل على الله ما لا تعلم.'},
    en:{scenario:'A young man wants to become a preacher but has no formal Islamic degree. Some advise him not to speak about religion. What\'s your view?',options:['He must stay silent until he gets a degree','Learn and call within his knowledge while referring to scholars for what he doesn\'t know','Speak confidently about everything','Wait years until he completes his studies'],best:1,hint:'Convey from me even a verse. But do not say about God what you do not know.'},
    fr:{scenario:'Un jeune homme veut devenir predicateur mais n\'a pas de diplome islamique. Certains lui conseillent de ne pas parler de religion. Quel est votre avis ?',options:['Il doit se taire jusqu\'a obtenir un diplome','Apprendre et precher dans les limites de ses connaissances tout en orientant vers les savants pour ce qu\'il ne sait pas','Parler avec confiance de tout','Attendre des annees jusqu\'a terminer ses etudes'],best:1,hint:'Transmettez de moi, ne serait-ce qu\'un verset. Mais ne dites pas sur Dieu ce que vous ne savez pas.'}
  },
  {
    ar:{scenario:'حاكم يطلب من العلماء إصدار فتوى تبرر قراراً سياسياً ظالماً. أنت من بين هؤلاء العلماء. ماذا تفعل؟',options:['أصدر الفتوى المطلوبة — لا بد من طاعة ولي الأمر','أرفض وأوضح أن العلم لا يخدم الظلم، مع الاستعداد لتحمل العواقب','أتظاهر بالموافقة لكن أعطي فتوى مبهمة','أستقيل بهدوء دون إثارة ضجة'],best:1,hint:'كلمة حق عند سلطان جائر أفضل الجهاد.'},
    en:{scenario:'A ruler asks scholars to issue a fatwa justifying an unjust political decision. You are among these scholars. What do you do?',options:['Issue the required fatwa — one must obey the ruler','Refuse and explain that knowledge does not serve injustice, prepared to face consequences','Pretend to agree but give a vague fatwa','Quietly resign without making a fuss'],best:1,hint:'A word of truth before an unjust ruler is the best jihad.'},
    fr:{scenario:'Un dirigeant demande aux savants d\'emettre une fatwa justifiant une decision politique injuste. Vous etes parmi ces savants. Que faites-vous ?',options:['Emettre la fatwa demandee — il faut obeir au dirigeant','Refuser et expliquer que le savoir ne sert pas l\'injustice, en etant pret a faire face aux consequences','Pretendre accepter mais donner une fatwa vague','Demissionner tranquillement sans faire de bruit'],best:1,hint:'Une parole de verite devant un dirigeant injuste est le meilleur jihad.'}
  }
];

// ═══════════════ DAILY REFLECTIONS ═══════════════
const REFLECTIONS = [
  {emoji:'🌅',ar:{text:'الداعية الحقيقي لا يعظ الناس من برج عاجي، بل يشاركهم همومهم ويعيش بينهم.',source:'هموم داعية'},en:{text:'A true preacher doesn\'t preach from an ivory tower but shares people\'s concerns and lives among them.',source:'Concerns of a Preacher'},fr:{text:'Un vrai predicateur ne preche pas depuis une tour d\'ivoire mais partage les soucis des gens.',source:"Soucis d\'un Predicateur"}},
  {emoji:'⚖️',ar:{text:'الخلاف في الفروع طبيعي، لكن التعصب له مرض. اتسع كما اتسع السلف.',source:'هموم داعية'},en:{text:'Disagreement on secondary matters is natural, but fanaticism about it is a disease.',source:'Concerns of a Preacher'},fr:{text:'Le desaccord sur les questions secondaires est naturel, mais le fanatisme est une maladie.',source:"Soucis d\'un Predicateur"}},
  {emoji:'📖',ar:{text:'القرآن كتاب حياة لا كتاب طقوس. تدبّره واعمل به.',source:'هموم داعية'},en:{text:'The Quran is a book of life, not rituals. Contemplate it and act upon it.',source:'Concerns of a Preacher'},fr:{text:'Le Coran est un livre de vie, pas de rituels. Meditez-le et agissez.',source:"Soucis d\'un Predicateur"}},
  {emoji:'🕊️',ar:{text:'الكلمة الطيبة صدقة. والدعوة بالرحمة أقوى من ألف خطبة بالترهيب.',source:'هموم داعية'},en:{text:'A kind word is charity. Dawah with mercy is stronger than a thousand threatening sermons.',source:'Concerns of a Preacher'},fr:{text:'Une bonne parole est une aumone. La da\'wa avec misericorde est plus forte que mille sermons menacants.',source:"Soucis d\'un Predicateur"}},
  {emoji:'👩',ar:{text:'المرأة شريكة الرجل في بناء الأمة. من ظلمها باسم الإسلام فقد افترى على الله.',source:'هموم داعية'},en:{text:'Women are partners with men in building the Ummah. Those who oppress them in the name of Islam fabricate lies about God.',source:'Concerns of a Preacher'},fr:{text:'Les femmes sont partenaires des hommes dans la construction de la Oumma. Ceux qui les oppriment au nom de l\'Islam mentent sur Dieu.',source:"Soucis d\'un Predicateur"}},
  {emoji:'🧠',ar:{text:'العقل المسلم يجب أن يكون حياً متجدداً. الجمود ليس من الإسلام.',source:'هموم داعية'},en:{text:'The Muslim mind must be alive and renewing. Stagnation is not from Islam.',source:'Concerns of a Preacher'},fr:{text:'L\'esprit musulman doit etre vivant et en renouvellement. La stagnation n\'est pas de l\'Islam.',source:"Soucis d\'un Predicateur"}},
  {emoji:'🤝',ar:{text:'الوحدة تبدأ من القلوب لا من الأنظمة. ابدأ بما يجمع لا بما يفرق.',source:'هموم داعية'},en:{text:'Unity starts from hearts, not systems. Start with what unites, not what divides.',source:'Concerns of a Preacher'},fr:{text:'L\'unite commence par les coeurs, pas par les systemes. Commencez par ce qui unit.',source:"Soucis d\'un Predicateur"}},
  {emoji:'💡',ar:{text:'استقلال الداعية شرط لصدق دعوته. لا تبع كلمتك لأحد.',source:'هموم داعية'},en:{text:'A preacher\'s independence is essential for their sincerity. Never sell your word.',source:'Concerns of a Preacher'},fr:{text:'L\'independance du predicateur est essentielle a sa sincerite. Ne vendez jamais votre parole.',source:"Soucis d\'un Predicateur"}},
  {emoji:'🌍',ar:{text:'الأمة التي لا تتفاعل مع العالم تموت. الانفتاح ليس ذوباناً بل قوة.',source:'هموم داعية'},en:{text:'A nation that doesn\'t interact with the world dies. Openness is not dissolution but strength.',source:'Concerns of a Preacher'},fr:{text:'Une nation qui n\'interagit pas avec le monde meurt. L\'ouverture n\'est pas une dissolution mais une force.',source:"Soucis d\'un Predicateur"}},
  {emoji:'🔬',ar:{text:'لا تعارض بين العلم والإيمان. كل اكتشاف علمي يزيدك قرباً من الله.',source:'هموم داعية'},en:{text:'There is no conflict between science and faith. Every discovery brings you closer to God.',source:'Concerns of a Preacher'},fr:{text:'Il n\'y a pas de conflit entre science et foi. Chaque decouverte vous rapproche de Dieu.',source:"Soucis d\'un Predicateur"}},
  {emoji:'🏛️',ar:{text:'التراث كنز يحتاج تنقية لا تقديس ولا هدم.',source:'هموم داعية'},en:{text:'Heritage is a treasure that needs purification, not sanctification or demolition.',source:'Concerns of a Preacher'},fr:{text:'Le patrimoine est un tresor qui a besoin de purification, pas de sanctification ni de demolition.',source:"Soucis d\'un Predicateur"}},
  {emoji:'🌅',ar:{text:'لا تستسلم للإحباط. كل عمل صالح لبنة في بناء المستقبل.',source:'هموم داعية'},en:{text:'Don\'t surrender to despair. Every good deed is a brick in building the future.',source:'Concerns of a Preacher'},fr:{text:'Ne cedez pas au desespoir. Chaque bonne action est une brique pour construire le futur.',source:"Soucis d\'un Predicateur"}}
];

// ═══════════════ DUAS ═══════════════
const DUAS = [
  {ar:{label:'دعاء الداعية',text:'اللَّهُمَّ أَرِنَا الْحَقَّ حَقًّا وَارْزُقْنَا اتِّبَاعَهُ، وَأَرِنَا الْبَاطِلَ بَاطِلاً وَارْزُقْنَا اجْتِنَابَهُ',tr:'اللهم أرنا الحق حقاً وارزقنا اتباعه'},en:{label:"Preacher's Dua",text:'اللَّهُمَّ أَرِنَا الْحَقَّ حَقًّا وَارْزُقْنَا اتِّبَاعَهُ، وَأَرِنَا الْبَاطِلَ بَاطِلاً وَارْزُقْنَا اجْتِنَابَهُ',tr:'O God, show us the truth as truth and grant us the ability to follow it, and show us falsehood as falsehood and grant us the ability to avoid it'},fr:{label:'Dua du Predicateur',text:'اللَّهُمَّ أَرِنَا الْحَقَّ حَقًّا وَارْزُقْنَا اتِّبَاعَهُ، وَأَرِنَا الْبَاطِلَ بَاطِلاً وَارْزُقْنَا اجْتِنَابَهُ',tr:"O Dieu, montre-nous la verite comme verite et accorde-nous de la suivre, et montre-nous le faux comme faux et accorde-nous de l'eviter"}},
  {ar:{label:'دعاء الهداية',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً إِنَّكَ أَنْتَ الْوَهَّابُ',tr:'ربنا لا تزغ قلوبنا بعد إذ هديتنا'},en:{label:'Dua for Guidance',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً إِنَّكَ أَنْتَ الْوَهَّابُ',tr:'Our Lord, do not let our hearts deviate after You have guided us, and grant us mercy from Yourself. Indeed, You are the Bestower.'},fr:{label:'Dua pour la Guidance',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً إِنَّكَ أَنْتَ الْوَهَّابُ',tr:"Notre Seigneur, ne fais pas devier nos coeurs apres nous avoir guides, et accorde-nous Ta misericorde. Tu es le Donateur."}},
  {ar:{label:'دعاء العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'ربي زدني علماً'},en:{label:'Dua for Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge'},fr:{label:'Dua pour le Savoir',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Mon Seigneur, augmente ma science'}},
  {ar:{label:'دعاء النصر',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'ربنا أفرغ علينا صبراً وثبت أقدامنا وانصرنا'},en:{label:'Dua for Victory',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Our Lord, pour upon us patience, and plant firmly our feet, and give us victory'},fr:{label:'Dua pour la Victoire',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Notre Seigneur, deverse sur nous la patience, affermis nos pas et donne-nous la victoire'}},
  {ar:{label:'دعاء الأمة',text:'رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِلَّذِينَ آمَنُوا',tr:'ربنا اغفر لنا ولإخواننا الذين سبقونا بالإيمان'},en:{label:'Dua for the Ummah',text:'رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِلَّذِينَ آمَنُوا',tr:'Our Lord, forgive us and our brothers who preceded us in faith and put not in our hearts any resentment toward those who believe'},fr:{label:'Dua pour la Oumma',text:'رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِلَّذِينَ آمَنُوا',tr:'Notre Seigneur, pardonne-nous ainsi qu\'a nos freres qui nous ont precedes dans la foi et ne mets dans nos coeurs aucune rancune envers les croyants'}},
  {ar:{label:'دعاء الصبر',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ',tr:'ربنا أفرغ علينا صبراً وتوفنا مسلمين'},en:{label:'Dua for Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ',tr:'Our Lord, pour upon us patience and let us die as Muslims'},fr:{label:'Dua pour la Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ',tr:'Notre Seigneur, deverse sur nous la patience et fais-nous mourir en musulmans'}}
];

// ═══════════════ BADGES & XP SYSTEM ═══════════════
const BADGES = [
  {id:'beginner', emoji:'🌟', ar:'مبتدئ', en:'Beginner', fr:'Debutant', condition:'open app'},
  {id:'reader', emoji:'📖', ar:'قارئ', en:'Reader', fr:'Lecteur', condition:'read 10 cards'},
  {id:'scholar', emoji:'🧠', ar:'عالم', en:'Scholar', fr:'Savant', condition:'complete all quizzes'},
  {id:'persistent', emoji:'🔥', ar:'مثابر', en:'Persistent', fr:'Perseverant', condition:'7-day streak'},
  {id:'expert', emoji:'🏆', ar:'خبير', en:'Expert', fr:'Expert', condition:'100% on quiz'},
  {id:'preacher', emoji:'🕌', ar:'داعية', en:'Preacher', fr:'Predicateur', condition:'read all concerns'}
];

// ═══════════════ STATE ═══════════════
let lang = localStorage.getItem('hd-lang') || 'ar';
let theme = localStorage.getItem('hd-theme') || 'earth';
const themes = ['earth', 'night', 'olive'];
const themeIcons = ['🕌', '🌙', '🫒'];
const themeNames = { earth: 'Earth / أرض', night: 'Night / ليل', olive: 'Olive / زيتون' };
let currentConcernIdx = 0;

// XP state
function getXP() { return JSON.parse(localStorage.getItem('hd-xp') || '{"points":0,"cardsRead":[],"quizDone":false,"quizScore":0}'); }
function saveXP(xp) { localStorage.setItem('hd-xp', JSON.stringify(xp)); }
function addXP(amount, reason) {
  const xp = getXP();
  xp.points += amount;
  saveXP(xp);
  showToast(`+${amount} XP — ${reason}`);
  checkBadges();
  renderXPBar();
}
function checkBadges() {
  const xp = getXP();
  const badges = JSON.parse(localStorage.getItem('hd-badges') || '[]');
  // Beginner
  if (!badges.includes('beginner')) { badges.push('beginner'); localStorage.setItem('hd-badges', JSON.stringify(badges)); }
  // Reader — 10 cards
  if (!badges.includes('reader') && xp.cardsRead && xp.cardsRead.length >= 10) { badges.push('reader'); localStorage.setItem('hd-badges', JSON.stringify(badges)); showToast('🏅 ' + (T[lang].badgesLabel) + ': ' + BADGES.find(b=>b.id==='reader')[lang]); }
  // Scholar
  if (!badges.includes('scholar') && xp.quizDone) { badges.push('scholar'); localStorage.setItem('hd-badges', JSON.stringify(badges)); showToast('🏅 ' + BADGES.find(b=>b.id==='scholar')[lang]); }
  // Expert
  if (!badges.includes('expert') && xp.quizScore >= 100) { badges.push('expert'); localStorage.setItem('hd-badges', JSON.stringify(badges)); showToast('🏅 ' + BADGES.find(b=>b.id==='expert')[lang]); }
  // Persistent
  if (!badges.includes('persistent') && getStreak() >= 7) { badges.push('persistent'); localStorage.setItem('hd-badges', JSON.stringify(badges)); showToast('🏅 ' + BADGES.find(b=>b.id==='persistent')[lang]); }
  // Preacher
  if (!badges.includes('preacher') && xp.cardsRead && xp.cardsRead.length >= CONCERNS.length) { badges.push('preacher'); localStorage.setItem('hd-badges', JSON.stringify(badges)); showToast('🏅 ' + BADGES.find(b=>b.id==='preacher')[lang]); }
}

function renderXPBar() {
  const xp = getXP();
  const badges = JSON.parse(localStorage.getItem('hd-badges') || '[]');
  const el = document.getElementById('xpBar');
  const level = Math.floor(xp.points / 100) + 1;
  const progress = xp.points % 100;
  const badgeHTML = badges.map(bid => {
    const b = BADGES.find(bb => bb.id === bid);
    return b ? `<span class="badge-icon" title="${b[lang]}">${b.emoji}</span>` : '';
  }).join('');
  el.innerHTML = `
    <div class="xp-level">${T[lang].levelLabel} ${level}</div>
    <div class="xp-bar-wrap"><div class="xp-bar-fill" style="width:${progress}%"></div></div>
    <div class="xp-points">${xp.points} XP</div>
    <div class="xp-badges">${badgeHTML || ''}</div>
  `;
}

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  setLang(lang);
  setTheme(theme);
  initSplash();
  initTabs();
  renderHome();
  renderConcerns();
  renderSolutions();
  renderQuiz();
  renderReflection();
  renderAbout();
  renderHelp();
  renderDuas();
  renderXPBar();
  initScrollReveal();
  initKeyboardNav();
  // Award beginner badge
  checkBadges();
});

// ═══════════════ SPLASH ═══════════════
function initSplash() {
  let count = 5;
  const el = document.getElementById('splashCount');
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
  const interval = setInterval(() => {
    count--;
    if (el) el.textContent = count;
    if (count <= 0) { dismissSplash(); clearInterval(interval); }
  }, 1000);
}
function dismissSplash() {
  const s = document.getElementById('splash');
  if (s) { s.classList.add('hidden'); setTimeout(() => s.style.display = 'none', 500); }
  playSound('click');
}

// ═══════════════ LANGUAGE ═══════════════
function setLang(l) {
  lang = l;
  localStorage.setItem('hd-lang', l);
  const isRTL = l === 'ar';
  document.documentElement.lang = l;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.body.dir = isRTL ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  const t = T[l];
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('appTitle', t.appTitle); set('splashSub', t.splashSub); set('splashHint', t.splashHint);
  set('tabHome', t.tabHome); set('tabConcerns', t.tabConcerns); set('tabSolutions', t.tabSolutions);
  set('tabQuiz', t.tabQuiz); set('tabReflection', t.tabReflection); set('tabAbout', t.tabAbout);
  set('concernsTitle', t.concernsTitle); set('concernsDesc', t.concernsDesc);
  set('solutionsTitle', t.solutionsTitle); set('solutionsDesc', t.solutionsDesc);
  set('quizTitle', t.quizTitle); set('quizDesc', t.quizDesc);
  set('reflectionTitle', t.reflectionTitle); set('reflectionDesc', t.reflectionDesc);
  set('helpTitle', t.helpTitle); set('duaPanelTitle', t.duaPanelTitle);
  renderHome(); renderConcerns(); renderSolutions(); renderQuiz(); renderReflection(); renderAbout(); renderHelp(); renderDuas(); renderXPBar();
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[l].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
}

// ═══════════════ THEME ═══════════════
function setTheme(t) {
  theme = t;
  document.documentElement.dataset.theme = t;
  localStorage.setItem('hd-theme', t);
  const idx = themes.indexOf(t);
  const el = document.getElementById('themeIcon');
  if (el) el.textContent = themeIcons[idx];
}
function cycleTheme() {
  const idx = (themes.indexOf(theme) + 1) % themes.length;
  setTheme(themes[idx]);
  showToast(themeNames[themes[idx]]);
  playSound('theme');
}

// ═══════════════ TABS ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('panel-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
      window.scrollTo({top: 0, behavior: 'smooth'});
      playSound('click');
    });
  });
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % REFLECTIONS.length;
  const r = REFLECTIONS[dayIdx];
  const rd = r[lang];
  (document.getElementById('dailyCard')||{}).innerHTML= `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${r.emoji} ${rd.text}</div>
    <div class="daily-body">${rd.source}</div>
    <div class="daily-action" onclick="document.querySelector('[data-tab=concerns]').click()">${t.tabConcerns} &#8594;</div>
  `;
  const sections = [
    {icon:'🔍',tab:'concerns',title:t.tabConcerns,desc:lang==='ar'?'٢٠ قضية من الكتاب':lang==='fr'?'20 questions du livre':'20 issues from the book'},
    {icon:'💡',tab:'solutions',title:t.tabSolutions,desc:lang==='ar'?'رؤى وحلول عملية':lang==='fr'?'Visions et solutions':'Visions & solutions'},
    {icon:'🤔',tab:'quiz',title:t.tabQuiz,desc:lang==='ar'?'ماذا ستفعل؟':lang==='fr'?'Que feriez-vous ?':'What would you do?'},
    {icon:'🕌',tab:'reflection',title:t.tabReflection,desc:lang==='ar'?'تأملات يومية':lang==='fr'?'Reflexions quotidiennes':'Daily reflections'},
    {icon:'📖',tab:'about',title:t.tabAbout,desc:lang==='ar'?'عن الكتاب والمؤلف':lang==='fr'?'Le livre et l\'auteur':'Book & author'},
  ];
  (document.getElementById('homeGrid')||{}).innerHTML= sections.map(s => `
    <div class="home-card" onclick="document.querySelector('[data-tab=${s.tab}]').click()">
      <span class="hc-icon">${s.icon}</span>
      <div class="hc-title">${s.title}</div>
      <div class="hc-desc">${s.desc}</div>
    </div>
  `).join('');
}

// ═══════════════ RENDER: CONCERNS ═══════════════
function renderConcerns() {
  const t = T[lang];
  const searchBar = `<div class="search-bar"><input type="text" id="concernsSearch" class="search-input" placeholder="${t.searchPlaceholder}" oninput="filterConcerns(this.value)"><span class="search-icon">🔍</span></div>`;
  const cards = CONCERNS.map((c, i) => {
    const d = c[lang];
    return `
    <div class="concern-card scroll-reveal" id="concern-${c.id}" data-search="${d.title.toLowerCase()}">
      <div class="concern-head" onclick="toggleCard('concern-${c.id}');trackCardRead(${c.id})">
        <span class="concern-num">${c.id}</span>
        <span class="concern-emoji">${c.emoji}</span>
        <span class="concern-title">${d.title}</span>
        <span class="concern-chev">&#9660;</span>
      </div>
      <div class="concern-body">
        <div class="concern-inner">
          <p class="concern-desc">${d.desc}</p>
          <div class="solution-box">
            <div class="sol-label">${t.solution}</div>
            <div class="sol-text">${d.solution}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">✊</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="event.stopPropagation();shareConcern(${i})">
            <span class="share-icon">&#128279;</span> ${t.share}
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
  (document.getElementById('concernsContainer')||{}).innerHTML= searchBar + cards;
}

function trackCardRead(id) {
  const xp = getXP();
  if (!xp.cardsRead) xp.cardsRead = [];
  if (!xp.cardsRead.includes(id)) {
    xp.cardsRead.push(id);
    xp.points += 10;
    saveXP(xp);
    checkBadges();
    renderXPBar();
  }
}

function filterConcerns(query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll('.concern-card').forEach(card => {
    const searchText = card.dataset.search || '';
    const title = card.querySelector('.concern-title');
    const titleText = title ? title.textContent.toLowerCase() : '';
    card.style.display = (!q || searchText.includes(q) || titleText.includes(q)) ? '' : 'none';
  });
}

async function shareConcern(idx) {
  const c = CONCERNS[idx];
  const d = c[lang];
  const text = `${c.emoji} ${d.title}\n\n${d.desc}\n\n✊ ${d.action}\n\n— هموم داعية | Concerns of a Preacher`;
  if (navigator.share) {
    try { await navigator.share({ title: d.title, text }); } catch(e) {}
  } else {
    try {
      await navigator.clipboard.writeText(text);
      showToast(lang === 'ar' ? 'تم النسخ!' : lang === 'fr' ? 'Copie !' : 'Copied!');
    } catch(e) { showToast('Could not copy'); }
  }
}

// ═══════════════ RENDER: SOLUTIONS ═══════════════
function renderSolutions() {
  const t = T[lang];
  (document.getElementById('solutionsContainer')||{}).innerHTML= SOLUTIONS.map(s => {
    const d = s[lang];
    return `
    <div class="solution-card scroll-reveal">
      <div class="solution-header">
        <span class="solution-emoji">${s.emoji}</span>
        <span class="solution-title">${d.title}</span>
      </div>
      <div class="solution-problem">
        <span class="solution-label">${t.concern}</span>
        ${d.problem}
      </div>
      <div class="solution-answer">
        <span class="solution-label">${t.solution}</span>
        ${d.solution}
      </div>
      <div class="verse-box">
        <div class="verse-arabic">${d.verse}</div>
        <div class="verse-ref">${d.verseRef}</div>
      </div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: QUIZ — "What Would You Do?" ═══════════════
let quizIndex = 0;
let quizScore = 0;
let quizTotal = 0;
let quizUsedLifelines = { half: false, hint: false, verse: false };

function renderQuiz() {
  quizIndex = 0;
  quizScore = 0;
  quizTotal = 0;
  quizUsedLifelines = { half: false, hint: false, verse: false };
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  if (!container) return;
  const result = document.getElementById('quizResult');
  result.classList.add('hidden');

  if (quizIndex >= QUIZ.length) {
    // Show results
    const pct = Math.round((quizScore / QUIZ.length) * 100);
    let emoji, title, desc;
    if (pct >= 80) {
      emoji = '🕌'; title = lang==='ar'?'داعية حكيم!':lang==='fr'?'Predicateur sage !':'Wise Preacher!';
      desc = lang==='ar'?'لديك حكمة الداعية الحقيقي. ادعُ بالحكمة والموعظة الحسنة.':lang==='fr'?'Vous avez la sagesse d\'un vrai predicateur.':'You have the wisdom of a true preacher.';
    } else if (pct >= 50) {
      emoji = '📚'; title = lang==='ar'?'على الطريق':lang==='fr'?'Sur la bonne voie':'On the Right Path';
      desc = lang==='ar'?'أنت تسير في الاتجاه الصحيح. استمر في التعلم والتأمل.':lang==='fr'?'Vous etes sur la bonne voie. Continuez a apprendre.':'You\'re heading in the right direction. Keep learning.';
    } else {
      emoji = '🔍'; title = lang==='ar'?'تحتاج تأمل أكثر':lang==='fr'?'Besoin de plus de reflexion':'Need More Reflection';
      desc = lang==='ar'?'راجع الهموم والحلول مرة أخرى. الحكمة تأتي بالتأمل والتعلم.':lang==='fr'?'Revisez les soucis et solutions. La sagesse vient avec la reflexion.':'Review the concerns and solutions. Wisdom comes with reflection.';
    }
    const xp = getXP();
    xp.quizDone = true;
    xp.quizScore = pct;
    xp.points += 20;
    saveXP(xp);
    checkBadges();
    renderXPBar();

    container.innerHTML = '';
    result.classList.remove('hidden');
    result.innerHTML = `
      <div class="qr-emoji">${emoji}</div>
      <div class="qr-score">${pct}%</div>
      <div class="qr-title">${title}</div>
      <div class="qr-desc">${desc}</div>
      <div class="qr-detail">${quizScore}/${QUIZ.length} ${lang==='ar'?'إجابات حكيمة':'correct'}</div>
      <button class="quiz-submit" onclick="renderQuiz()" style="margin-top:16px">${t.quizAgain}</button>
    `;
    result.scrollIntoView({ behavior: 'smooth' });
    playSound('success');
    return;
  }

  const q = QUIZ[quizIndex];
  const d = q[lang];
  container.innerHTML = `
    <div class="quiz-progress">${t.scenarioOf} ${quizIndex + 1}/${QUIZ.length}</div>
    <div class="quiz-scenario scroll-reveal">
      <div class="quiz-scenario-text">${d.scenario}</div>
      <div class="quiz-lifelines">
        <button class="lifeline-btn ${quizUsedLifelines.half?'used':''}" onclick="useLifeline('half')" ${quizUsedLifelines.half?'disabled':''}>${t.lifeline5050}</button>
        <button class="lifeline-btn ${quizUsedLifelines.hint?'used':''}" onclick="useLifeline('hint')" ${quizUsedLifelines.hint?'disabled':''}>${t.lifelineHint}</button>
      </div>
      <div class="quiz-options" id="quizOptions">
        ${d.options.map((opt, i) => `
          <button class="quiz-opt" id="quizOpt${i}" onclick="selectScenarioAnswer(${i})">${opt}</button>
        `).join('')}
      </div>
      <div id="quizHint" class="quiz-hint hidden"></div>
    </div>
  `;
}

function useLifeline(type) {
  const q = QUIZ[quizIndex];
  const d = q[lang];
  if (type === 'half' && !quizUsedLifelines.half) {
    quizUsedLifelines.half = true;
    // Remove 2 wrong answers
    const opts = d.options;
    let removed = 0;
    opts.forEach((_, i) => {
      if (i !== d.best && removed < 2) {
        const el = document.getElementById('quizOpt' + i);
        if (el) { el.style.display = 'none'; removed++; }
      }
    });
    document.querySelector('.lifeline-btn').classList.add('used');
    document.querySelector('.lifeline-btn').disabled = true;
  } else if (type === 'hint' && !quizUsedLifelines.hint) {
    quizUsedLifelines.hint = true;
    const hintEl = document.getElementById('quizHint');
    if (hintEl) { hintEl.textContent = '💡 ' + d.hint; hintEl.classList.remove('hidden'); }
    document.querySelectorAll('.lifeline-btn')[1].classList.add('used');
    document.querySelectorAll('.lifeline-btn')[1].disabled = true;
  }
  playSound('click');
}

function selectScenarioAnswer(idx) {
  const q = QUIZ[quizIndex];
  const d = q[lang];
  const opts = document.querySelectorAll('#quizOptions .quiz-opt');
  opts.forEach((o, i) => {
    o.disabled = true;
    if (i === d.best) o.classList.add('correct');
    if (i === idx && idx !== d.best) o.classList.add('wrong');
  });
  if (idx === d.best) {
    quizScore++;
    addXP(5, lang==='ar'?'إجابة صحيحة':'Correct answer');
    playSound('success');
  } else {
    playSound('click');
  }
  quizTotal++;
  // Show hint after answering
  const hintEl = document.getElementById('quizHint');
  if (hintEl && hintEl.classList.contains('hidden')) {
    hintEl.textContent = '💡 ' + d.hint;
    hintEl.classList.remove('hidden');
  }
  // Next question after delay
  setTimeout(() => {
    quizIndex++;
    renderQuizQuestion();
  }, 2000);
}

// ═══════════════ RENDER: REFLECTION (daily diary with streak) ═══════════════
function renderReflection() {
  const today = new Date().toDateString();
  let refState = JSON.parse(localStorage.getItem('hd-reflections') || '{}');
  if (refState.date !== today) {
    updateStreak(refState);
    refState = { date: today, done: [] };
    localStorage.setItem('hd-reflections', JSON.stringify(refState));
  }
  const streak = getStreak();
  const streakHTML = streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${T[lang].streakMsg}</div>` : '';
  const streakEl = document.getElementById('streakBadge');
  if (streakEl) streakEl.innerHTML = streakHTML;

  const container = document.getElementById('reflectionContainer');
  if (!container) return;
  container.innerHTML = REFLECTIONS.map((r, i) => {
    const d = r[lang];
    const isDone = refState.done.includes(i);
    return `
    <div class="reflection-item ${isDone ? 'done' : ''}" onclick="toggleReflection(${i})">
      <span class="reflection-check">${isDone ? '&#10003;' : ''}</span>
      <span class="reflection-emoji">${r.emoji}</span>
      <div>
        <div class="reflection-text">${d.text}</div>
        <div class="reflection-source">${d.source}</div>
      </div>
    </div>`;
  }).join('');
  updateReflectionProgress(refState);
}

function toggleReflection(i) {
  const today = new Date().toDateString();
  let rs = JSON.parse(localStorage.getItem('hd-reflections') || '{}');
  if (rs.date !== today) rs = { date: today, done: [] };
  const idx = rs.done.indexOf(i);
  if (idx > -1) rs.done.splice(idx, 1); else rs.done.push(i);
  localStorage.setItem('hd-reflections', JSON.stringify(rs));
  renderReflection();
  playSound(idx > -1 ? 'click' : 'success');
  if (rs.done.length === REFLECTIONS.length) {
    launchConfetti();
    showToast(T[lang].allDone);
    addXP(20, lang==='ar'?'أكمل التأملات':'All reflections done');
  }
}

function resetReflections() {
  localStorage.setItem('hd-reflections', JSON.stringify({ date: new Date().toDateString(), done: [] }));
  renderReflection();
  showToast(lang === 'ar' ? 'تم إعادة التعيين' : lang === 'fr' ? 'Reinitialise' : 'Reset');
}

function updateReflectionProgress(rs) {
  const done = rs.done.length;
  const total = REFLECTIONS.length;
  const pct = total > 0 ? (done / total * 100) : 0;
  const fill = document.getElementById('reflectionFill');
  const txt = document.getElementById('reflectionText');
  if (fill) fill.style.width = pct + '%';
  if (txt) txt.textContent = `${done}/${total}`;
}

// ═══════════════ STREAK SYSTEM ═══════════════
function updateStreak(prevState) {
  let streakData = JSON.parse(localStorage.getItem('hd-streak') || '{"count":0,"lastDate":""}');
  if (prevState && prevState.done && prevState.done.length === REFLECTIONS.length && prevState.date) {
    const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
    if (prevState.date === yesterday.toDateString()) { streakData.count++; }
    else if (prevState.date !== new Date().toDateString()) { streakData.count = prevState.done.length === REFLECTIONS.length ? 1 : 0; }
    streakData.lastDate = prevState.date;
  } else if (prevState && prevState.date) { streakData.count = 0; streakData.lastDate = prevState.date; }
  localStorage.setItem('hd-streak', JSON.stringify(streakData));
}
function getStreak() { return JSON.parse(localStorage.getItem('hd-streak') || '{"count":0}').count; }

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#4E342E','#795548','#A1887F','#8D6E63','#6D4C41','#D7CCC8','#BCAAA4'];
  for (let i = 0; i < 120; i++) {
    particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل. عُرف بالتجديد ومحاربة الجمود والتشدد والدفاع عن حقوق المرأة.',
      bookTitle: 'عن الكتاب',
      bookDesc: '"هموم داعية" (١٩٨٣) هو أكثر كتب الشيخ الغزالي شخصية. يصب فيه همومه كداعية يرى الأمة تتمزق بالخلافات الفرعية والاستبداد السياسي والتخلف الفكري. يتناول الكتاب في ٢٩٩ صفحة: نقد الحركة الإسلامية، الخلافات المذهبية، السياسة الغربية وتفتيت العالم الإسلامي، فلسطين، الاستبداد، حقوق المرأة، دور الدعاة في حرب ١٩٧٣، والتراث الثقافي.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "هموم داعية" — الشيخ محمد الغزالي — دار نهضة مصر — ١٩٨٣','القرآن الكريم','صحيح البخاري ومسلم'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner. Known for renewal, fighting rigidity, and defending women\'s rights in Islam.',
      bookTitle: 'About the Book',
      bookDesc: '"The Concerns of a Preacher" (1983) is al-Ghazali\'s most personal book. He pours out his concerns as a preacher watching the Ummah torn apart by secondary disputes, political despotism, and intellectual stagnation. The 299-page book covers: critique of Islamic activism, sectarian disputes, Western policy fragmenting the Muslim world, Palestine, despotism, women\'s rights, the role of preachers in the 1973 war, and cultural heritage.',
      sourcesTitle: 'Sources',
      sources: ['"The Concerns of a Preacher" (Humum Da\'iya) — Sheikh Mohammed al-Ghazali — Dar Nahdet Misr — 1983','The Holy Quran','Sahih al-Bukhari and Muslim'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien, surnomme "Le Litteraire de la Predication". Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Laureat du Prix Roi Faysal. Connu pour le renouveau et la defense des droits des femmes.',
      bookTitle: 'A Propos du Livre',
      bookDesc: '"Les Soucis d\'un Predicateur" (1983) est le livre le plus personnel d\'al-Ghazali. Il y verse ses preoccupations de predicateur voyant la Oumma dechiree par les disputes secondaires, le despotisme politique et la stagnation intellectuelle. Le livre de 299 pages couvre : la critique de l\'activisme islamique, les disputes sectaires, la politique occidentale, la Palestine, le despotisme, les droits des femmes, le role des predicateurs dans la guerre de 1973, et le patrimoine culturel.',
      sourcesTitle: 'Sources',
      sources: ['"Les Soucis d\'un Predicateur" (Humum Da\'iya) — Sheikh Mohammed al-Ghazali — Dar Nahdet Misr — 1983','Le Saint Coran','Sahih al-Bukhari et Muslim'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  (document.getElementById('aboutContainer')||{}).innerHTML= `
    <div class="about-disclaimer">
      <div class="about-disclaimer-title">${a.disclaimerTitle}</div>
      <p>${a.disclaimer}</p>
    </div>
    <div class="about-author">
      <span class="about-author-icon">📚</span>
      <div class="about-author-info">
        <div class="about-author-name">${a.authorName}</div>
        <div class="about-author-dates">${a.authorDates}</div>
        <div class="about-author-bio">${a.authorBio}</div>
      </div>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.bookTitle}</div>
      <p class="about-text">${a.bookDesc}</p>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.sourcesTitle}</div>
      ${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}
    </div>
    <div class="about-section">
      <p class="about-text">${a.contact}</p>
    </div>
  `;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "هموم داعية" للشيخ محمد الغزالي (١٩٨٣)، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ٢٠ قضية، ٨ حلول، سيناريوهات تفاعلية، تأملات يومية، نقاط خبرة وأوسمة.'},
      {title:'⌨️ اختصارات',body:'استخدم الأسهم (يمين/يسار) للتنقل بين الهموم. اضغط Escape لإغلاق اللوحات.'},
      {title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/humum-daiya'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},
      {title:'📚 Sources',body:'"The Concerns of a Preacher" by Sheikh Mohammed al-Ghazali (1983), the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 20 concerns, 8 solutions, interactive scenarios, daily reflections, XP and badges.'},
      {title:'⌨️ Shortcuts',body:'Use arrow keys (left/right) to navigate concerns. Press Escape to close panels.'},
      {title:'🤝 Contributing',body:'GitHub: github.com/abourdim/humum-daiya'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},
      {title:'📚 Sources',body:'"Les Soucis d\'un Predicateur" par Sheikh Mohammed al-Ghazali (1983), le Saint Coran, la Sunnah.'},
      {title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 20 soucis, 8 solutions, scenarios interactifs, reflexions quotidiennes, XP et badges.'},
      {title:'⌨️ Raccourcis',body:'Utilisez les fleches (gauche/droite) pour naviguer. Echap pour fermer les panneaux.'},
      {title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/humum-daiya'},
    ]
  };
  (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h => `
    <div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>
  `).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div><div class="dua-item-tr">${dd.tr}</div></div>`;
  }).join('');
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  function observeAll() { document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => observer.observe(el)); }
  observeAll();
  document.querySelectorAll('.tab').forEach(tab => { tab.addEventListener('click', () => setTimeout(observeAll, 100)); });
}

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const helpPanel = document.getElementById('helpPanel');
      if (!helpPanel.classList.contains('hidden')) { toggleHelp(); return; }
      const duaPanel = document.getElementById('duaPanel');
      if (!duaPanel.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.concern-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const concernsPanel = document.getElementById('panel-concerns');
      if (!concernsPanel || !concernsPanel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'concernsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.concern-card')).filter(c => c.style.display !== 'none');
      if (cards.length === 0) return;
      if (currentConcernIdx >= 0 && currentConcernIdx < cards.length) cards[currentConcernIdx].classList.remove('open');
      const dir = (document.documentElement.dir === 'rtl') ? (e.key === 'ArrowRight' ? -1 : 1) : (e.key === 'ArrowRight' ? 1 : -1);
      currentConcernIdx = Math.max(0, Math.min(cards.length - 1, currentConcernIdx + dir));
      cards[currentConcernIdx].classList.add('open');
      cards[currentConcernIdx].scrollIntoView({ behavior: 'smooth', block: 'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) {
  const card = document.getElementById(id);
  const isOpen = card.classList.contains('open');
  card.classList.toggle('open');
  playSound(isOpen ? 'click' : 'open');
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toastMsg');
  if (!toast || !msgEl) return;
  msgEl.textContent = msg;
  toast.style.display = 'block';
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.style.display = 'none', 2500);
}

function toggleHelp() {
  const p = document.getElementById('helpPanel');
  if (p) p.classList.toggle('hidden');
}

function toggleDuaPanel() {
  const p = document.getElementById('duaPanel');
  if (p) p.classList.toggle('hidden');
}

// ═══════════════ SOUND ═══════════════
function playSound(type) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    gain.gain.value = 0.08;
    if (type === 'success') { osc.frequency.value = 600; gain.gain.value = 0.1; }
    else if (type === 'theme') { osc.frequency.value = 500; }
    else if (type === 'open') { osc.frequency.value = 440; }
    else { osc.frequency.value = 350; gain.gain.value = 0.05; }
    osc.start(); osc.stop(ctx.currentTime + 0.1);
  } catch(e) {}
}

// ═══════════════ SCROLL TO TOP ═══════════════
window.addEventListener('scroll', () => {
  const btn = document.getElementById('scrollTop');
  if (btn) btn.classList.toggle('visible', window.scrollY > 300);
});


// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = {
    ar: ['📖 هموم داعية — الشيخ محمد الغزالي','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ الدعاء','⭐ اكتشف كنوز الكتاب'],
    en: ['📖 Concerns of a Preacher — Sheikh Mohammed Al-Ghazali','🏆 Earn points and badges','🌟 Try the Young Explorer mode','🤲 Remember to make dua','⭐ Discover the book\'s treasures'],
    fr: ['📖 Soucis d\'un Prédicateur — Cheikh Mohammed Al-Ghazali','🏆 Gagnez des points et des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas le dua','⭐ Découvrez les trésors du livre']
  };
  const curLang = (typeof lang !== 'undefined' && lang) || document.documentElement.lang || 'ar';
  const items = tips[curLang] || tips.ar;
  const doubled = [...items, ...items];
  const ticker = document.getElementById('tickerText');
  if (!ticker) return;
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// Auto-start ticker
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderTicker);
} else {
  renderTicker();
}

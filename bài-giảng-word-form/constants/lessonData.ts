import { Page } from '../types';

export const LESSON_PAGES: Page[] = [
  // Page 1: Title
  {
    type: 'content',
    title: "Bài giảng Word Form",
    subtitle: "Tiếng Anh Lớp 6",
    content: [
      "Chào mừng các em đến với bài học về dạng từ (Word Form) trong tiếng Anh. Trong bài học này, chúng ta sẽ cùng nhau tìm hiểu cách các từ thay đổi hình thức và chức năng trong câu. Hãy cùng bắt đầu nhé!",
      "Nhấn 'Tiếp theo' để xem mục lục."
    ]
  },
  // Page 2: Table of Contents
  {
    type: 'toc',
    title: "📚 Mục Lục (Table of Contents)"
  },
  // Page 3: What is Word Form?
  {
    type: 'content',
    title: "📝 Word form là gì?",
    content: [
      "Word form hay word formation chính là dạng của các từ vựng trong tiếng Anh. Chúng tồn tại phụ thuộc vào những ngữ cảnh nhất định. Tùy theo bối cảnh mà từ có thể xuất hiện ở dạng: danh từ, tính từ, động từ hay trạng từ.",
      "Ví dụ về word form:",
      {
        type: 'table',
        headers: ["Loại từ", "Ví dụ", "Câu ví dụ"],
        rows: [
          ["Động từ", "educate", "Teachers educate students in school. (Giáo viên giáo dục học sinh trong trường)"],
          ["Danh từ", "education", "Her father wants her to get a good education. (Cha cô ấy muốn cô ấy có được một nền giáo dục tốt)"],
          ["Tính từ", "educated", "The educated person knows many things. (Người có học thức biết rất nhiều thứ)"]
        ]
      },
      "Mặc dù 3 dạng từ được nêu bên trên đều có ý nghĩa liên quan đến giáo dục nhưng chúng lại có cách sử dụng khác nhau hoàn toàn và không thể thay thế vị trí cho nhau trong cùng bối cảnh.",
      "Bài tập word form lớp 6 thường xoay quanh các dạng bài như nhận biết và phân biệt các dạng từ, biến đổi dạng từ,... sao cho thích hợp với ngữ cảnh và cấu trúc ngữ pháp của câu. Vì vậy học sinh cần nắm vững cách thành lập danh từ, trạng từ, động từ, tính từ, và vị trí của các dạng từ trong câu thì mới có thể làm tốt các bài tập về word form."
    ]
  },
  // Page 4-7: Noun Formation
  {
    type: 'content',
    title: "✍️ Cách thành lập danh từ (Phần 1)",
    subtitle: "Hậu tố chỉ người",
    content: [
      "Danh từ là từ dùng để chỉ người, vật hoặc sự việc. Chúng ta có thể tạo danh từ bằng cách thêm các hậu tố vào sau động từ hoặc danh từ khác.",
      "Một số hậu tố phổ biến để chỉ người:",
      {
        type: 'table',
        headers: ["Cách thành lập", "Ví dụ"],
        rows: [
            ["Verb + er", "teacher, writer, singer, driver"],
            ["Verb + or", "actor, director, visitor, inventor"],
            ["Verb + ant", "attendant, assistant, participant"],
            ["Verb + ee/eer", "trainee, employee, engineer"],
            ["Noun + ist/ian", "guitarist, musician, artist, librarian"],
        ]
      }
    ]
  },
  {
    type: 'content',
    title: "✍️ Cách thành lập danh từ (Phần 2)",
    subtitle: "Hậu tố chỉ sự vật, sự việc, khái niệm",
    content: [
      "Các hậu tố sau thường được thêm vào động từ để tạo danh từ chỉ sự vật, sự việc, hành động hoặc khái niệm.",
       {
        type: 'table',
        headers: ["Cách thành lập", "Ví dụ"],
        rows: [
            ["Verb + ion/tion/sion", "action, invention, decision, collection"],
            ["Verb + ment/al", "development, movement, removal, arrival"],
            ["Verb + ing", "swimming, teaching, reading, building"],
            ["Verb + ance/ence", "difference, appearance, performance"],
        ]
      }
    ]
  },
  {
    type: 'content',
    title: "✍️ Cách thành lập danh từ (Phần 3)",
    subtitle: "Hậu tố chỉ trạng thái, tính chất",
    content: [
        "Các hậu tố sau thường được thêm vào tính từ hoặc danh từ để tạo danh từ chỉ trạng thái, tính chất, hoặc một khái niệm.",
        {
        type: 'table',
        headers: ["Cách thành lập", "Ví dụ"],
        rows: [
            ["Adj + ty/ity", "safety, loyalty, electricity, possibility"],
            ["Adj + th", "strength, truth, width, length"],
            ["Adj + dom", "freedom, wisdom, kingdom"],
            ["Noun + ism", "journalism, socialism, tourism"],
            ["Noun + ship", "friendship, scholarship, leadership"],
            ["Noun + hood", "childhood, neighbourhood, brotherhood"],
        ]
      }
    ]
  },
  {
    type: 'content',
    title: "✍️ Cách thành lập danh từ (Phần 4)",
    subtitle: "Vị trí của danh từ trong câu",
    content: [
      "Để nhận biết và sử dụng danh từ đúng, các em cần nhớ những vị trí sau:",
       {
        type: 'table',
        headers: ["Vị trí", "Ví dụ"],
        rows: [
            ["Làm chủ ngữ của câu", "<b>The sun</b> is shining."],
            ["Làm tân ngữ sau động từ", "She reads <b>a book</b>."],
            ["Sau mạo từ (a/an/the)", "Nam is <b>a teacher</b>."],
            ["Sau tính từ", "They are interesting <b>books</b>."],
            ["Sau tính từ sở hữu (my, his, her...)", "This is my <b>house</b>."],
            ["Sau giới từ (in, on, at...)", "He is interested in <b>music</b>."],
            ["Sau các từ chỉ số lượng (many, some, any...)", "I have many <b>friends</b>."]
        ]
      }
    ]
  },
  // Page 8-10: Adjective Formation
  {
    type: 'content',
    title: "💡 Cách thành lập tính từ (Phần 1)",
    subtitle: "Thêm hậu tố vào danh từ",
    content: [
      "Tính từ là những từ dùng để mô tả tính chất, đặc điểm của người, sự vật, sự việc. Cách phổ biến nhất là thêm hậu tố vào sau danh từ.",
      {
        type: 'table',
        headers: ["Cách thành lập", "Ví dụ"],
        rows: [
          ["Noun + ful (đầy, nhiều)", "hopeful, careful, beautiful, useful"],
          ["Noun + less (không có)", "careless, childless, homeless, hopeless"],
          ["Noun + ly (có tính chất như)", "manly, friendly, lovely, daily"],
          ["Noun + like (giống như)", "ladylike, childlike, lifelike"],
          ["Noun + y (có nhiều)", "dirty, rainy, sunny, snowy"],
        ]
      }
    ]
  },
   {
    type: 'content',
    title: "💡 Cách thành lập tính từ (Phần 2)",
    subtitle: "Thêm hậu tố vào danh từ và động từ",
    content: [
      "Tiếp tục với các hậu tố khác để tạo thành tính từ nhé!",
      {
        type: 'table',
        headers: ["Cách thành lập", "Ví dụ"],
        rows: [
          ["Noun + ish (có tính chất, hơi)", "selfish, girlish, childish, foolish"],
          ["Noun + al (thuộc về)", "natural, cultural, national, historical"],
          ["Noun + ous (đầy, có nhiều)", "dangerous, mountainous, famous"],
          ["Noun + ic (thuộc về)", "economic, electric, historic, heroic"],
          ["Verb + able (có thể)", "reasonable, enjoyable, washable"],
          ["Verb + tive (có tính chất)", "collective, protective, active, creative"],
        ]
      }
    ]
  },
  {
    type: 'content',
    title: "💡 Cách thành lập tính từ (Phần 3)",
    subtitle: "Vị trí của tính từ trong câu",
    content: [
      "Tính từ thường xuất hiện ở các vị trí sau:",
      {
        type: 'table',
        headers: ["Vị trí", "Ví dụ"],
        rows: [
          ["Trước danh từ", "This is an <b>interesting</b> book."],
          ["Sau động từ 'to be'", "I am <b>tired</b>."],
          ["Sau các động từ liên kết (linking verbs) như: look, feel, seem, become,...", "She looks <b>beautiful</b>."],
          ["Sau trạng từ", "It is <b>extremely cold</b>."],
          ["Trước 'enough'", "The house isn't <b>large</b> enough."],
          ["Trong câu cảm thán", "How <b>beautiful</b> the girl is!"],
        ]
      }
    ]
  },
  // Page 11-12: Adverb Formation
  {
    type: 'content',
    title: "🏃 Cách thành lập trạng từ",
    subtitle: "Thêm -ly vào tính từ",
    content: [
      "Trạng từ (phó từ) dùng để bổ nghĩa cho động từ, tính từ, hoặc một trạng từ khác. Hầu hết các trạng từ chỉ thể cách được thành lập bằng cách thêm đuôi '-ly' vào sau tính từ.",
       {
        type: 'table',
        headers: ["Cách thành lập", "Ví dụ"],
        rows: [
          ["Adj + ly", "carefully, beautifully, slowly, quickly"],
        ]
      },
      "<b>Lưu ý:</b>",
      "- Tính từ kết thúc bằng '-y' đổi thành '-i' rồi thêm '-ly'. Ví dụ: happy -> happily.",
      "- Tính từ kết thúc bằng '-le' bỏ 'e' thêm 'y'. Ví dụ: simple -> simply.",
      "- Một số trạng từ có hình thức giống tính từ: fast, hard, late, early.",
    ]
  },
  {
    type: 'content',
    title: "🏃 Cách thành lập trạng từ",
    subtitle: "Vị trí của trạng từ trong câu",
    content: [
      "Vị trí của trạng từ khá linh hoạt, nhưng đây là một số vị trí phổ biến:",
       {
        type: 'table',
        headers: ["Vị trí", "Ví dụ"],
        rows: [
          ["Đứng đầu câu, bổ nghĩa cho cả câu", "<b>Luckily</b>, he passed the exam."],
          ["Trước động từ thường", "She <b>often</b> goes to the library."],
          ["Sau động từ thường", "I live <b>happily</b> on my farm."],
          ["Sau tân ngữ", "I did my test <b>carefully</b>."],
          ["Trước tính từ", "The weather is <b>extremely</b> hot."],
          ["Trước trạng từ khác", "She runs <b>very</b> quickly."],
        ]
      }
    ]
  },
  // Page 13-14: Verb Formation
  {
    type: 'content',
    title: "🛠️ Cách thành lập động từ",
    subtitle: "Thêm tiền tố và hậu tố",
    content: [
      "Động từ diễn tả hành động của chủ thể. Chúng ta có thể tạo động từ bằng cách thêm tiền tố hoặc hậu tố vào danh từ/tính từ.",
      {
        type: 'table',
        headers: ["Cách thành lập", "Ví dụ", "Nghĩa"],
        rows: [
          ["en + Noun/Adj", "enlarge, enrich, enable", "Làm cho..."],
          ["Noun/Adj + en", "sharpen, shorten, widen", "Làm cho..."],
          ["Noun/Adj + ise/ize", "memorize, economize, modernise", "-hóa"],
          ["Noun/Adj + fy", "simplify, clarify, beautify", "-hóa"],
        ]
      },
    ]
  },
  {
    type: 'content',
    title: "🛠️ Cách thành lập động từ",
    subtitle: "Vị trí của động từ trong câu",
    content: [
      "Vị trí cơ bản và quan trọng nhất của động từ là:",
       {
        type: 'table',
        headers: ["Vị trí", "Ví dụ"],
        rows: [
          ["Đứng sau chủ ngữ", "She <b>reads</b> a book every evening."],
          ["Đứng sau trạng từ chỉ tần suất", "He usually <b>plays</b> football."],
        ]
      },
      "Nắm vững các quy tắc này sẽ giúp các em dễ dàng xác định và sử dụng đúng loại từ trong câu."
    ]
  },
  // Page 15: Introduction to Exercises
  {
    type: 'content',
    title: "✏️ Các dạng bài tập word form lớp 6",
    subtitle: "Thường gặp trong bài thi",
    content: [
      "Bây giờ, chúng ta hãy cùng nhau thực hành qua các dạng bài tập thường gặp nhé.",
      "Các bài tập sau được thiết kế dưới dạng kéo-thả để giúp các em ôn luyện một cách sinh động và thú vị hơn. Hãy đọc kỹ yêu cầu và hoàn thành bài tập nhé!"
    ]
  },
  // Page 16: Exercise 1
  {
    type: 'table_drag_drop',
    title: "Bài tập word form lớp 6 – Dạng 1",
    instruction: "Hoàn thành bảng bằng cách kéo các tính từ vào đúng cột hậu tố của nó.",
    words: ['administrative', 'additional', 'beneficial', 'logical', 'inventive', 'financial', 'effective', 'constructive', 'occupational', 'selective', 'personal', 'professional', 'official', 'commercial', 'confidential'],
    columns: [
        { header: '-ive', example: 'administrative' },
        { header: '-al', example: 'additional' },
        { header: '-ial', example: 'beneficial' },
    ],
    solution: {
        '-ive': ['administrative', 'inventive', 'effective', 'constructive', 'selective'],
        '-al': ['additional', 'logical', 'occupational', 'personal', 'professional', 'official'],
        '-ial': ['beneficial', 'financial', 'commercial', 'confidential'],
    }
  },
  // Page 17-18
  {
    type: 'content',
    title: "Ôn tập trước bài 2",
    content: [ "Tốt lắm! Bây giờ hãy ôn lại cách thành lập danh từ trước khi làm bài tập tiếp theo nhé." ]
  },
  {
    type: 'table_drag_drop',
    title: "Bài tập word form lớp 6 – Dạng 2",
    instruction: "Hoàn thành bảng bằng cách kéo các danh từ vào đúng cột hậu tố của nó.",
    words: ['acceptance', 'adaptation', 'attendance', 'availability', 'clearance', 'complexity', 'creativity', 'destruction', 'existence', 'generosity', 'maturity', 'similarity', 'simplicity', 'imagination', 'dedication'],
    columns: [
      { header: '-ance / -ence', example: 'acceptance' },
      { header: '-tion', example: 'adaptation' },
      { header: '-ity', example: 'availability' },
    ],
    solution: {
      '-ance / -ence': ['acceptance', 'attendance', 'clearance', 'existence'],
      '-tion': ['adaptation', 'destruction', 'imagination', 'dedication'],
      '-ity': ['availability', 'complexity', 'creativity', 'generosity', 'maturity', 'similarity', 'simplicity'],
    }
  },
  // Page 19-20
  {
    type: 'content',
    title: "Ôn tập trước bài 3",
    content: [ "Các em làm rất tốt! Bài tập tiếp theo sẽ về các hậu tố tính từ -ful và -less." ]
  },
  {
    type: 'table_drag_drop',
    title: "Bài tập word form lớp 6 – Dạng 3",
    instruction: "Hoàn thành bảng bằng cách kéo các tính từ vào đúng cột hậu tố của nó.",
    words: ['eventful', 'endless', 'colourful', 'colourless', 'dutiful', 'homeless', 'fruitful', 'fruitless', 'playful', 'pointless', 'successful', 'shapeless', 'thoughtful', 'thoughtless', 'youthful', 'useful', 'useless', 'fearful', 'fearless', 'worthless'],
    columns: [
      { header: '-ful', example: 'eventful' },
      { header: '-less', example: 'endless' },
      { header: '-ful / -less', example: 'colourful / colourless' },
    ],
    solution: {
      '-ful': ['eventful', 'dutiful', 'playful', 'successful', 'youthful'],
      '-less': ['endless', 'homeless', 'pointless', 'shapeless', 'worthless'],
      '-ful / -less': ['colourful', 'colourless', 'fruitful', 'fruitless', 'useful', 'useless', 'thoughtful', 'thoughtless', 'fearful', 'fearless'],
    }
  },
  // Page 21-22
  {
    type: 'content',
    title: "Bài tập nâng cao",
    content: [ "Sẵn sàng cho thử thách khó hơn chưa nào? Các bài tập sau yêu cầu các em điền dạng đúng của từ vào chỗ trống. Hãy kéo và thả từ đúng nhé!" ]
  },
  {
    type: 'gap_fill_drag_drop',
    title: "Bài tập word form lớp 6 nâng cao – Dạng 4",
    instruction: "Kéo và thả dạng từ đúng vào chỗ trống để hoàn thành câu.",
    sentences: [
      { id: 1, prefix: 'A', prompt: 'storm swept through the countryside at midnight.', answer: 'disastrous', suffix: '(DISASTER)' },
      { id: 2, prefix: 'We can store necessary', prompt: 'in a 4GB USB.', answer: 'information', suffix: '(INFORM)'},
      { id: 3, prefix: 'Fashion', prompt: 'enjoy an interesting, well-paid job.', answer: 'designers', suffix: '(DESIGN)'},
      { id: 4, prefix: 'Geographic Channel is a popular', prompt: 'program on TV.', answer: 'scientific', suffix: '(SCIENCE)'},
      { id: 5, prefix: 'A complaint letter should be ended', prompt: '.', answer: 'politely', suffix: '(POLITE)'},
      { id: 6, prefix: 'Rain will reach', prompt: 'areas at the end of this week.', answer: 'coastal', suffix: '(COAST)'},
    ],
    words: ['designers', 'disastrous', 'politely', 'information', 'scientific', 'coastal']
  },
  // Page 23-24
  {
    type: 'content',
    title: "Bài tập cuối cùng",
    content: [ "Đây là bài tập cuối cùng và cũng là bài khó nhất. Cố gắng lên nhé!" ]
  },
  {
    type: 'gap_fill_drag_drop',
    title: "Bài tập word form lớp 6 nâng cao – Dạng 5",
    instruction: "Kéo và thả dạng từ đúng vào chỗ trống để hoàn thành câu.",
    sentences: [
      { id: 7, prefix: 'Being over 60 years old', prompt: 'her to free medical treatment.', answer: 'entitles', suffix: '(TITLE)'},
      { id: 8, prefix: 'His', prompt: 'results in the exam make him feel sick.', answer: 'discouraging', suffix: '(COURAGE)'},
      { id: 9, prefix: 'Last year British manufacturing', prompt: 'fell by 14%.', answer: 'output', suffix: '(PUT)'},
      { id: 10, prefix: 'Wearing safety helmets is', prompt: 'by law.', answer: 'compulsory', suffix: '(COMPEL)'},
      { id: 11, prefix: 'Most mushrooms sold in supermarkets have been grown', prompt: 'in manure.', answer: 'artificially', suffix: '(ARTIFICIAL)'},
      { id: 12, prefix: '', prompt: 'the existing drug laws is the government\'s top priority.', answer: 'Toughening', suffix: '(TOUGH)'},
      { id: 13, prefix: 'The Education Minister made a', prompt: 'appearance at the school.', answer: 'personal', suffix: '(PERSON)'},
      { id: 14, prefix: 'Sadly, the museum has fallen into', prompt: 'over the years.', answer: 'disrepair', suffix: '(REPAIR)'},
      { id: 15, prefix: 'We want to prevent a', prompt: 'of last year\'s accidents which killed more than 100 people.', answer: 'repetition', suffix: '(REPEAT)'},
      { id: 16, prefix: 'My cousin, Petit is', prompt: 'to sea foods.', answer: 'allergic', suffix: '(ALLERGY)'},
    ],
    words: ['entitles', 'discouraging', 'output', 'compulsory', 'artificially', 'Toughening', 'personal', 'disrepair', 'repetition', 'allergic']
  },
  {
    type: 'content',
    title: 'Tổng kết bài học',
    content: [
        "Chúc mừng các em đã hoàn thành bài học về Word Form!",
        "Qua bài học này, các em đã được học về:",
        "  - Định nghĩa Word Form là gì.",
        "  - Cách thành lập Danh từ, Tính từ, Trạng từ, và Động từ.",
        "  - Vị trí của các loại từ này trong câu.",
        "  - Luyện tập qua các dạng bài tập từ cơ bản đến nâng cao.",
        "Hãy nhớ ôn bài thường xuyên để nắm vững kiến thức nhé. Chúc các em học tốt!"
    ]
  },
];
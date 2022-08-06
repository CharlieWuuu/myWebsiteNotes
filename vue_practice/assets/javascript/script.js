var app = new Vue({
  el: '#app',
  data: {
    name: 'Charlie！',
    city: '台北市',
    learn_thing: 'Vue.js',
    vue_text: '填資料空格的js前端框架',
    notation: '兩個大括號{{變數名稱}}',
    skills: ['平面設計', '網頁程式開發', '程式教學', '題目撰寫', '日文翻譯'],
    infos: {
      year: '半',
    },
    html: "<div class='block'>這是vue印出來的！</div><div class='block'>第二個自動印出來的！</div>",
  },
});

var outer_data = {
  shoplist1: ['apple', 'banana', 'papaya'],
  shoplist2: [
    {
      name: 'apple',
      price: 1000,
      produce: ['US', 'Japan'],
    },
    {
      name: 'banana',
      price: 500,
      produce: ['Taiwan', 'Philippines', 'Thailand'],
    },
    {
      name: 'papaya',
      price: 300,
      produce: ['Taiwan', 'Vietnam'],
    },
  ],
};

var vf = new Vue({
  el: '#for',
  data: outer_data,
});

var mydata = {
  name: '吳哲宇',
  message: '訊息',
  color: '000000',
  height: 100,
  books: ['哈利波特', '被討厭的勇氣', '原子習慣'],
};

var vi = new Vue({
  el: '#interact',
  data: mydata,
});

var bookdatas = [
  {
    zh_name: '正念減壓的訓練：風行全球，哈佛醫學院、Google、麥肯錫、蘋果都在用',
    en_name: 'Training in Mindfulness and Stress Reduction',
    zh_author: '陳德中',
    is_en_author: false,
    en_author: '',
    is_translator: false,
    translator: '',
    publish_house: '方智',
    img: 'https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/076/51/0010765161.jpg&v=59bbabc2k&w=348&h=348',
    price: 300,
    is_discount: true,
    discount: 0.79,
    link_book: 'https://www.books.com.tw/products/0010765161?sloc=main',
    link_author:
      'https://search.books.com.tw/search/query/key/%E9%99%B3%E5%BE%B7%E4%B8%AD/adv_author/1/',
    date: '2017/10/01',
  },
  {
    zh_name: 'Headspace冥想正念手冊',
    en_name: 'The Headspace Guide to Meditation and Mindfulness',
    zh_author: '安迪．帕帝康',
    is_en_author: true,
    en_author: 'Andy Puddicombe',
    is_translator: true,
    translator: '李芳齡',
    publish_house: '星出版',
    img: 'https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/082/07/0010820792.jpg&v=5cc03aack&w=348&h=348',
    price: 380,
    is_discount: true,
    discount: 0.79,
    link_book:
      'https://www.books.com.tw/products/0010820792?loc=P_br_r0vq68ygz_D_2aabd0_B_2',
    link_author:
      'https://search.books.com.tw/search/query/key/%E5%AE%89%E8%BF%AA%EF%BC%8E%E5%B8%95%E5%B8%9D%E5%BA%B7/adv_author/1/',
    date: '2019/05/08',
  },
  {
    zh_name:
      '逆思維：華頓商學院最具影響力的教授，突破人生盲點的全局思考【博客來獨家書封版】',
    en_name: 'Think Again: The Power of Knowing What You Don’t Know',
    zh_author: '亞當．格蘭特',
    is_en_author: true,
    en_author: 'Adam Grant',
    is_translator: true,
    translator: '簡秀如',
    publish_house: '平安文化',
    img: 'https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/092/81/0010928119.jpg&v=62b1abbbk&w=348&h=348',
    price: 420,
    is_discount: true,
    discount: 0.79,
    link_book: 'https://www.books.com.tw/products/0010928119?loc=P_0003_013',
    link_author:
      'https://search.books.com.tw/search/query/key/%E4%BA%9E%E7%95%B6%EF%BC%8E%E6%A0%BC%E8%98%AD%E7%89%B9/adv_author/1/',
    date: '2022/07/04',
  },
  {
    zh_name: '底層邏輯：看清這個世界的底牌',
    en_name: '劉潤',
    zh_author: '',
    is_en_author: false,
    en_author: '',
    is_translator: false,
    translator: '',
    publish_house: '時報出版',
    img: 'https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/091/92/0010919211.jpg&v=62386204k&w=348&h=348',
    price: 400,
    is_discount: true,
    discount: 0.79,
    link_book:
      'https://www.books.com.tw/products/0010919211?loc=P_br_r0vq68ygz_D_2aabd0_B_2',
    link_author:
      'https://search.books.com.tw/search/query/key/%E5%8A%89%E6%BD%A4/adv_author/1/',
    date: '2022/03/29',
  },
  {
    zh_name: '療癒的飲食與斷食：新時代的個人營養學',
    en_name: '',
    zh_author: '楊定一',
    is_en_author: false,
    en_author: '',
    is_translator: false,
    translator: '',
    publish_house: '天下生活',
    img: 'https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/092/46/0010924662.jpg&v=627ce1ddk&w=348&h=348',
    price: 500,
    is_discount: false,
    discount: 0.79,
    link_book: 'https://www.books.com.tw/products/0010924662?loc=P_0003_016',
    link_author:
      'https://search.books.com.tw/search/query/key/%E6%A5%8A%E5%AE%9A%E4%B8%80/adv_author/1/',
    date: '2022/05/25',
  },
  {
    zh_name: '原子習慣：細微改變帶來巨大成就的實證法則',
    en_name:
      'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    zh_author: '詹姆斯‧克利爾',
    is_en_author: true,
    en_author: 'James Clear',
    is_translator: true,
    translator: '蔡世偉',
    publish_house: '方智',
    img: 'https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/082/25/0010822522.jpg&v=5cda990ck&w=348&h=348',
    price: 330,
    is_discount: true,
    discount: 0.79,
    link_book: 'https://www.books.com.tw/products/0010822522?sloc=main',
    link_author:
      'https://search.books.com.tw/search/query/key/%E8%A9%B9%E5%A7%86%E6%96%AF%E2%80%A7%E5%85%8B%E5%88%A9%E7%88%BE/adv_author/1/',
    date: '2019/06/01',
  },
];

var vb = new Vue({
  el: '#books',
  data: {
    mode_detail: false,
    mode_size: 'big',
    books: bookdatas,
  },
});

var allData = ['pen', 'pineapple', 'apple', 'pen'];

var vf = new Vue({
  el: '#fruit',
  data: {
    fruits: allData,
    status: '',
  },
  methods: {
    remove: function (index, fname) {
      this.fruits.splice(index, 1);
      this.status = '你刪除了第' + (index + 1) + '項的' + fname;
    },
    add: function (data) {
      this.fruits.push(data);
    },
  },
  computed: {
    totals: function () {
      var total = {
        pen: 0,
        pineapple: 0,
        apple: 0,
      };
      for (var i = 0; i < allData.length; i++) {
        total[this.fruits[i]] += 1;
      }
      return total;
    },
  },
});

var apiUrl = {
  notifyData:
    'https://awiclass.monoame.com/api/command.php?type=get&name=notifydata',
  itemData:
    'https://awiclass.monoame.com/api/command.php?type=get&name=itemdata',
  hahowData:
    'https://awiclass.monoame.com/api/command.php?type=get&name=hahowdata',
};

var vml = new Vue({
  el: '#app1',
  data: {
    notifyData: '載入中......',
  },
  mounted: function () {
    $.ajax({
      url: apiUrl.notifyData,
      success: function (res) {
        vml.notifyData = res;
      },
    });
  },
});

var vm2 = new Vue({
  el: '#app2',
  data: {
    items: '',
  },
  mounted: function () {
    $.ajax({
      url: apiUrl.itemData,
      success: function (res) {
        vm2.items = JSON.parse(res);
      },
    });
  },
});

var vm3 = new Vue({
  el: '#app3',
  data: {
    hahows: '載入中......',
  },
  mounted: function () {
    $.ajax({
      url: apiUrl.hahowData,
      success: function (res) {
        vm3.hahows = JSON.parse(res);
      },
    });
  },
});

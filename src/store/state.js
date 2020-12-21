// 存放初始数据
const state = {
    // 存储购物车里的东西
    shoplist: [], // 默认购物车里没有商品
    // 所有的商品
    list: [
        {
            name: "霍格沃兹活点地图",
            image: "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=453792736,1486459029&fm=170&s=467A1AC7DC077ACC3433557103&w=600&h=400&img.JPEG",
            desc: "霍格沃兹的秘密通道",
            price: 1999
        },
        {
            name: "分院帽",
            image: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2461703682,1139107584&fm=26&gp=0.jpg",
            desc: "如果你们能找到比我更漂亮的帽子，我可以把自己吃掉",
            price: 1699
        },
        {
            name: "金色飞贼",
            image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608552488559&di=33627c8913a0246ce53b7c1806d90294&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190127%2F85816efb7be74ccc8b9ecea09cc2326b.jpeg",
            desc: "没有人能抓住我",
            price: 1699
        }

    ],
}

export default state
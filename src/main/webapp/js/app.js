new Vue({
    el: "#nav",
    data: {
        navLists: ["首页","概况","招新","培训","公告","疑难解答"],
    },
    methods: {
        
    },
    computed: {
        
    }
});
new Vue({
    el: "#LunBo",
    data: {
        slideList: ["./static/bgimg1.jpg","./static/bgimg2.jpg","./static/bgimg3.jpg",
        "./static/bgimg4.jpg","./static/bgimg5.jpg"],
        currentIndex: 0,
        timer: ""
    },
    created() {
        // dom加载后下一个tick开始轮播
        this.$nextTick(() => {
            this.timer = setInterval(() => {
                this.currentIndex++
                if(this.currentIndex > this.slideList.length - 1) {
                    this.currentIndex = 0
                }
            }, 10000)
        })
    },
    methods: {
        change(index) {
            this.currentIndex = index
        }
    }
    
})
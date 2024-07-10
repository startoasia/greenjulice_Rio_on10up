const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".bg4", // 決定scrolltrigger要以哪一個元素作為觸發基準點
        markers: false, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
        start: 'top 35%', // 前者決定 scroll-start 點，後者決定 start 點(2023/06/13勘誤)
        end: 'top -30%', // 前者決定 scroll-end 點，後者決定 end 點(2023/06/13勘誤)
        scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
        // scrub 若為數字 (0.5)，則能做到滾動平滑效果(2023/06/13新增)
    },
})
tl.to('.thing04-2', {
    top: '100%',
    yPercent: '-129',
    // duration: 20,
    position: 'absolute',
})

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".thing14-1", // 決定scrolltrigger要以哪一個元素作為觸發基準點
        markers: false, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
        start: 'top 15%', // 前者決定 scroll-start 點，後者決定 start 點(2023/06/13勘誤)
        end: 'top -30%', // 前者決定 scroll-end 點，後者決定 end 點(2023/06/13勘誤)
        scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
        // scrub 若為數字 (0.5)，則能做到滾動平滑效果(2023/06/13新增)
    },
})
tl2.to('.thing14-11', {
    top: '100%',
    yPercent: '4',
    opacity:'0',
    // duration: 20,
    position: 'absolute',
})
<template>
    <div class="scroll" ref="scroll" @scroll="scroll">
        <div style="position: fixed;top:3.7%;right:23.1%;z-index: 999;">
            <div @click="pause(true)" class="music">

                <div v-if="off===true">
                    <span style="color: white">关音乐</span>
                </div>
                <div v-if="off===false">
                    <span style="color: white">开音乐</span>
                </div>

            </div>
            <!--            controls  -->
            <audio ref="music" id="music" src="../assets/music/cn.mp3" loop="loop" preload autoplay="autoplay"></audio>
        </div>
        <v-touch @swipeup="swipeup" class="wrapper">
            <div class="main animate__animated"
                 style="background: #b5def4;height: 100vh;width: 100%;position: fixed;left: 0;top: 0;z-index: 1"
                 :class="animateEnd ? '' : 'animate__fadeOut'" v-if="mainShow">

                <div class='loader' v-show="load"></div>
                <ul class="Loading" v-show="load">
                    <li>加</li>
                    <li>载</li>
                    <li>中</li>
                    <li style=" box-shadow: 2px 2px 5px #fff;width: 15px;height: 15px"></li>
                    <li style=" box-shadow: 2px 2px 5px #fff;width: 15px;height: 15px"></li>
                </ul>
                <p class="font1 animate__animated" v-if="!load"
                   :class="animate ?' animate__bounceInDown' : 'animate__bounceOutDown'">上滑屏幕进行观看</p>
                <p class="font2 animate__animated " v-if="!load"
                   :class="animate ? 'animate__bounceInUp' : 'animate__bounceOutUp'">(请保持手机竖屏)</p>


                <img src="../assets/images/cloud.png" class="cloud1" style="width:60%;top: 18%;left: -5%"/>
                <img src="../assets/images/cloud.png" class="cloud2" style="width:35%;top: 35%;right: -10%"/>
                <img src="../assets/images/cloud.png" class="cloud3" style="width:55%;top: 51%;left: -30%"/>
                <img src="../assets/images/cloud.png" class="cloud4" style="width:40%;top: 75%;right: -15%"/>


            </div>
        </v-touch>

        <div class="main">

            <img src="../assets/images/bj.jpg" style="width: 100%;height: auto;" @load="imgLoadEnd"/>

            <img    src="../assets/images/gift.png" class="element" ref="star" style="width:50%;pointer-events: auto;" :style="star" @click="setKg">

            <img src="../assets/images/dialogue1.png" class="element" ref="dialogue1" style="width:25%"
                 :style="dialogue1"/>

            <!--            测试的东西-->
            <div class="element" style="width:31%;background: black;" ref="go" :style="go">
                <img style="width: 25%;height: auto" class="element" :src="item" v-for="(item,index) in img"
                     v-show="index === mark">
                <img src="../assets/images/dialogue7.png" class="element" style="width:49vw;left: -38vw;top: -13vw"/>
            </div>

            <img src="../assets/images/dialogue2.png" class="element" style="width:35%" :style="dialogue2"/>

            <img src="../assets/images/dialogue3.png" class="element" style="width:32%" :style="dialogue3"/>

            <img src="../assets/images/dialogue4.png" class="element" style="width:35%" :style="dialogue4"/>

            <img src="../assets/images/dialogue5.png" class="element" style="width:32%" :style="dialogue5"/>

            <img src="../assets/images/dialogue6.png" class="element" style="width:35%" :style="dialogue6"/>

            <!--这一行是做gif一直移动的-->
            <!--            :style="run"-->
            <!--            :style="dialogue7"-->
            <!--            <div class="element run" :class="this.run.className" style="width:8%">-->
            <!--                <img src="../assets/images/dialogue7.png" class="element" style="width:49vw;left: -38vw;top: -13vw"/>-->
            <!--                <img src="../assets/images/run.gif" style="width: 100%;height: auto"/>-->
            <!--            </div>-->


            <img src="../assets/images/car1.png" class="element" style="width:40%" :style="car1"/>

            <img src="../assets/images/car2.png" class="element" style="width:40%" :style="car2"/>

            <img src="../assets/images/phone1.png" class="element" style="width:35%" :style="phone1"/>

            <img src="../assets/images/phone2.png" class="element" style="width:35%" :style="phone2"/>

            <img src="../assets/images/phone3.png" class="element" style="width:35%" :style="phone3"/>

            <img src="../assets/images/dialogue8.png" class="element" style="width:50%" :style="dialogue8"/>

            <img src="../assets/images/note.gif" class="element" style="top:61.1%;left: 36%;width:24%;height: auto">

            <img src="../assets/images/dialogue9.png" class="element" style="width:60%" :style="dialogue9"/>

            <img src="../assets/images/balloon.png" class="element" style="width:70%" :style="balloon"/>

            <img src="../assets/images/dialogue10.png" class="element" style="width:40%" :style="dialogue10"/>

            <img src="../assets/images/dialogue11.png" class="element" style="width:40%" :style="dialogue11"/>

            <div class="element mc" :style="bj2">

                <div class="item1" v-show="this.gkd>87"></div>
                <img :class="this.gkd>84?'animate__animated animate__bounceInDown':''" v-show="this.gkd>84"
                     src="../assets/images/present.png" style="left: 15%;width:70%;height: auto;top:8%"
                     class="element"/>


                <img :class="this.gkd>86?'animate__animated animate__bounceInLeft':''" class="element"
                     v-show="this.gkd>86"
                     src="../assets/images/person1.png" style="left:2%;width:22%;height: auto;top:17%"/>
                <img :class="this.gkd>86?'animate__animated animate__bounceInRight':''" class="element"
                     v-show="this.gkd>86"
                     src="../assets/images/person2.png" style="right:2%;width:24%;height: auto;top:17%"/>

                <img :class="this.gkd>89?'animate__animated animate__bounceInLeft':''" class="element"
                     v-show="this.gkd>89"
                     src="../assets/images/advertising1.png" style="left:20.5%;width:60%;height: auto;top:35.3%"/>

                <img :class="this.gkd>93?'animate__animated animate__bounceInRight':''" class="element"
                     v-show="this.gkd>93"
                     src="../assets/images/prize1.png" style="right:0;width: 100%;height: auto;top:43.5%"/>

                <img :class="this.gkd>93.5?'animate__animated animate__bounceInDown':''" v-show="this.gkd>93.5"
                     src="../assets/images/prize2.png" style="left: 2%;width:100%;height: auto;top:56.4%"
                     class="element"/>

                <img :class="this.gkd>94?'animate__animated animate__bounceInLeft':''" class="element"
                     v-show="this.gkd>94"
                     src="../assets/images/advertising2.png" style="left:7.2%;width: 53%;height: auto;top:48.5%"/>

                <img :class="this.gkd>94.5?'animate__animated animate__bounceInRight':''" class="element"
                     v-show="this.gkd>94.5"
                     src="../assets/images/advertising3.png" style="left:24%;width:66%;height: auto;top:68.1%"/>

                <img :class="this.gkd>96?'animate__animated animate__zoomInDown':''" class="element"
                     v-show="this.gkd>96"
                     src="../assets/images/prize3.png" style="left:0;width:100%;height: auto;top:75.5%"/>

                <img :class="this.gkd>98?'animate__animated animate__zoomInDown':''" class="element"
                     v-show="this.gkd>98"
                     src="../assets/images/person.png" style="left:0;width:100%;height: auto;top:91%"/>

                <img :class="this.gkd>97?'animate__animated animate__rotateInDownLeft':''" class="element"
                     v-show="this.gkd>97"
                     src="../assets/images/advertising4.png" style="left:17%;width:66%;height: auto;top:79.2%"/>

                <img :class="this.gkd>98.5?'animate__animated animate__rotateIn':''" class="element"
                     v-show="this.gkd>98.5"
                     src="../assets/images/dialogue12.png" style="left:34%;width:50%;height: auto;top:85.8%"/>

<!--                <div class="hint">{{kg ? '暂停' : '播放'}}</div>-->
<!--                <div class="loader1" @click="setKg">-->
<!--                    <div class="face">-->
<!--                        <div class="circle"></div>-->
<!--                    </div>-->
<!--                    <div class="face">-->
<!--                        <div class="circle"></div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                  <div class="reminder">-->


<!--                      <img src="../assets/images/dian.gif" style="width: 5rem;height: auto;position: absolute"/></div>-->

                <!--                <div @click="setKg" class="music" style="top: 15%;right: 10%;position: fixed;background: no-repeat;border: 1px dotted white">-->
                <!--                    <span style="letter-spacing:2px;padding-left: 3px">{{kg ? '暂停' : '播放'}}</span>-->
                <!--                </div>-->
            </div>

        </div>
    </div>

</template>

<script>
    import wxapi from '../../common/wxapi.js'

    export default {
        name: "index",
        data() {
            return {
                a: 0,
                off: true,
                timer: null,
                kg: false,
                mainShow: true,
                animateEnd: true,
                animate: true,
                load: true,
                gkd: null,
                mark: 0,

                img: [require('../assets/images/0.png'), require('../assets/images/1.png'),
                    require('../assets/images/2.png')],
                go: {top: 39.1, left: 100, opacity: 1},
                star: {top: '1.5%', left: '25%'},
                dialogue1: {top: '18.2%', left: 0, opacity: 0},
                dialogue2: {top: '17.9%', left: '46%', opacity: 0},
                dialogue3: {top: '25.7%', left: 0, opacity: 0},
                dialogue4: {top: '27.5%', left: 35, opacity: 0},
                dialogue5: {top: '31.7%', left: 10, opacity: 0},
                dialogue6: {top: '33.5%', left: 45, opacity: 0},
                run: {className: ''},
                dialogue7: {top: '38.9%', left: '49%', opacity: 1},
                car1: {top: '41.7%', left: '48%'},
                car2: {top: '40.4%', left: '90%'},
                phone1: {top: '54.3%', left: 25, opacity: 0},
                phone2: {top: '54.8%', left: 62, opacity: 0},
                phone3: {top: '55.8%', left: '40%', opacity: 0},
                dialogue8: {top: '64.5%', left: 15, opacity: 0},
                dialogue9: {top: '66%', left: 45, opacity: 0},
                balloon: {top: '70.1%', left: "-12%", opacity: 1},
                dialogue10: {top: '74.3%', left: 25, opacity: 0},
                dialogue11: {top: '78.4%', left: 25, opacity: 0},
                present: {top: '82.4%', left: 25, opacity: 1},
                bj2: {top: '82.1%'},
                // bj3: {top: '91.1%'}

            }
        },
        methods: {

            setKg() {
                this.a = this.a === 1 ? 0 : this.a = 1;
                this.kg = !this.kg
                let div = this.$refs.scroll
                //网页正文全文高，包括有滚动条时的未见区域
                let scrollHeight = div.scrollHeight
                // 可视窗口的高度
                let clientHeight = div.clientHeight
                if (this.kg) {
                    this.timer = setInterval(() => {
                        div.scrollTop += 2
                    }, 10)
                }
                else {
                    clearInterval(this.timer)
                }


            },
            pause(val) {

                // console.log(this.$refs.music)
                if (this.$refs.music !== null) {
                    //检测播放是否已暂停.this.$refs.music.paused 在播放器播放时返回false.
                    // console.log(this.$refs.music.paused);
                    if (this.$refs.music.paused) {
                        this.$refs.music.play();// 这个就是播放
                        this.off = true

                    } else {
                        if (val) {
                            this.$refs.music.pause();// 这个就是暂停
                            this.off = false
                        }
                    }
                }
            },
            autoPlayAudio() {
                const _this = this
                try {
                    WeixinJSBridge.invoke('WeixinJSBridgeReady', {}, function (e) {
                        _this.pause()
                    });
                } catch (e) {
                    _this.pause()
                }
            },
            swipeup(v1) {
                this.animate = false
                setTimeout(() => {
                    this.animateEnd = false
                    setTimeout(() => {
                        this.mainShow = false
                        this.autoPlayAudio()
                    }, 400)
                }, 600)
                // console.log(v1)
            },
            //图片加载完成
            imgLoadEnd() {
                setTimeout(() => {
                    this.$nextTick(() => {
                        this.load = false
                    })
                }, 10)
            },
            souvenir(_scrolldrag, data) {
                //  滚动条滚动的距离
                // console.log(_scrolldrag)
                //滚动条滚动的数据  滚动条滚动到网页>=5的时候
                if (_scrolldrag >= 5) {
                    // window.requestAnimationFrame(this.souvenir)
                    //rs 指的是滚动条 滚动的距离-5，这个值的两个意义  1.用来做速度的判断
                    let rs = _scrolldrag - 5

                    //rs小于7 就是跟着滚动条 滚整个网页7%的位置，从5%开始滚到12%的位置
                    if (rs <= 7) {
                        //获取data里原始的star 属性
                        // let dialogue = data.star
                        //
                        // //重新给 star.top的属性 赋值上 在这里实现移动 每次移动的距离等于原始的star.top + rs
                        // this.star.top = parseFloat(dialogue.top) + rs + '%'
                        // console.log(parseFloat(dialogue.top))
                        this.scrollAnimation(rs, data)
                    }
                }
            },
            scrollAnimation(rs, data) {
                window.requestAnimationFrame(() => {
                    let dialogue = data.star
                    this.star.top = parseFloat(dialogue.top) + rs + '%'
                })
            },


            scroll(e) {
                //滚动条拖动的长度
                const scrollTop = e.target.scrollTop
                //网页正文全文高，包括有滚动条时的未见区域
                let scrollHeight = this.$refs.scroll.scrollHeight
                // 可视窗口的高度
                let clientHeight = this.$refs.scroll.clientHeight
                //减去滚动条可拖动的网页长度
                let Height = scrollHeight - clientHeight
                //滚动条滚动距离 百分比
                let scrolldrag = scrollTop / Height
                let _scrolldrag = (scrolldrag * 100).toFixed(2) * 1
                this.gkd = _scrolldrag;

                if (_scrolldrag >= 100) {
                    console.log("结束")
                    // this.a=0;
                    clearInterval(this.timer)
                }
                let data = this.$options.data()
                // console.log(_scrolldrag)

                this.souvenir(_scrolldrag, data)


                if (_scrolldrag >= 8) {
                    let rs = _scrolldrag - 8
                    if (rs <= 4) {
                        let dialogue1 = data.dialogue1
                        this.dialogue1.left = dialogue1.left + (rs * 5) + '%'
                        this.dialogue1.opacity = (rs / 3)
                    }
                    if (rs > 7) {
                        this.dialogue1.opacity = 1 - (rs - 7)
                    }
                }
                if (_scrolldrag >= 12) {
                    let rs = _scrolldrag - 12
                    if (rs <= 2) {
                        this.dialogue2.opacity = (rs / 2)
                    }
                    if (rs > 5) {
                        this.dialogue2.opacity = 1 - (rs - 5)
                    }
                }


                if (_scrolldrag >= 20) {
                    let rs = _scrolldrag - 20
                    if (rs <= 3) {
                        let dialogue = data.dialogue3
                        this.dialogue3.left = dialogue.left + (rs * 3) + '%'
                        this.dialogue3.opacity = (rs / 3)
                    }
                    if (rs > 5) {
                        this.dialogue3.opacity = 1 - (rs - 5)
                    }
                }
                if (_scrolldrag >= 23) {
                    let rs = _scrolldrag - 23
                    if (rs <= 2) {
                        let dialogue = data.dialogue4
                        this.dialogue4.left = dialogue.left - (rs * 8) + '%'
                        this.dialogue4.opacity = (rs / 2)
                    }
                    if (rs > 4) {
                        this.dialogue4.opacity = 1 - (rs - 4)
                    }
                }
                if (_scrolldrag >= 26) {
                    let rs = _scrolldrag - 26
                    if (rs <= 3) {
                        let dialogue = data.dialogue5
                        this.dialogue5.left = dialogue.left + (rs * 3) + '%'
                        this.dialogue5.opacity = (rs / 3)
                    }
                    if (rs > 5) {
                        this.dialogue5.opacity = 1 - (rs - 5)
                    }
                }
                if (_scrolldrag >= 29) {
                    let rs = _scrolldrag - 29
                    if (rs <= 2) {
                        let dialogue = data.dialogue6
                        this.dialogue6.left = dialogue.left - (rs * 4) + '%'
                        this.dialogue6.opacity = (rs / 2)
                    }
                    if (rs > 4) {
                        this.dialogue6.opacity = 1 - (rs - 4)
                    }
                }

                if (_scrolldrag >= 38.5) {
                    let rs = _scrolldrag - 38.5
                    if (rs <= 4) {
                        let dialogue = data.car1
                        this.car1.left = parseFloat(dialogue.left) - (rs * 9) + '%'
                        this.car1.top = parseFloat(dialogue.top) + (rs / 3) + '%'
                    }
                }

                //测试成功~
                if (_scrolldrag >= 34.5) {
                    let rs = _scrolldrag - 34.5
                    if (rs <= 14) {
                        //arr 为出图的顺序
                        let arr = [1, 2, 1, 2]
                        // let dialogue = data.go
                        //           100为初始位置 112为开始到结束之间的距离 从左往右所以 为减   14代表要走的步数
                        this.go.left = 100 - 112 / 14 * parseInt(rs) + '%'
                        //            39.1为初始的位置  3.4为开始到结束之间的距离 从上往下走 为加 14要和上面统一
                        this.go.top = 39.1 + 3.4 / 14 * parseInt(rs) + '%'
                        this.mark = arr[parseInt(rs) % 4];
                    }
                }


                //这里是做gif一直移动的
                // if (_scrolldrag >= 36.5) {
                //     let rs = _scrolldrag - 36.5
                //     if (rs <= 10) {
                //         // let dialogue = data.run
                //         this.run.className = 'runAnrun'
                //         // this.run.left = parseFloat(dialogue.left) - (rs * 11) + '%'
                //         // this.run.top = parseFloat(dialogue.top) + (rs / 3) + '%'
                //     } else {
                //         this.run.className = ''
                //     }
                // }

                if (_scrolldrag >= 36.5) {
                    let rs = _scrolldrag - 36.5
                    if (rs <= 10) {
                        let dialogue = data.dialogue7
                        this.dialogue7.left = parseFloat(dialogue.left) - (rs * 11) + '%'
                        this.dialogue7.top = parseFloat(dialogue.top) + (rs / 3) + '%'
                    }
                }


                if (_scrolldrag >= 40) {
                    let rs = _scrolldrag - 40
                    if (rs <= 4) {
                        let dialogue = data.car2
                        this.car2.left = parseFloat(dialogue.left) - (rs * 10) + '%'
                        this.car2.top = parseFloat(dialogue.top) + (rs / 3) + '%'
                    }
                }
                if (_scrolldrag >= 50.5) {
                    let rs = _scrolldrag - 50.5
                    if (rs <= 3) {
                        let dialogue = data.phone1
                        this.phone1.left = dialogue.left + (rs * 3) + '%'
                        this.phone1.opacity = (rs / 3)
                    }
                    if (rs > 3) {
                        this.phone1.opacity = 1 - (rs - 4)
                    }
                }
                if (_scrolldrag >= 52.5) {
                    let rs = _scrolldrag - 52.5
                    if (rs <= 2) {
                        let dialogue = data.phone2
                        this.phone2.left = dialogue.left - (rs * 8) + '%'
                        this.phone2.opacity = (rs / 3)
                    }
                    if (rs > 2) {
                        this.phone2.opacity = 1 - (rs - 4)
                    }
                }
                if (_scrolldrag >= 55) {
                    let rs = _scrolldrag - 55
                    if (rs <= 2) {
                        let dialogue = data.phone3
                        this.phone3.top = parseFloat(dialogue.top) - (rs / 4) + '%'

                        this.phone3.opacity = (rs / 3)
                    }
                    if (rs > 2) {
                        this.phone3.opacity = 1 - (rs - 4)
                    }
                }
                if (_scrolldrag >= 62) {
                    let rs = _scrolldrag - 62
                    if (rs <= 3) {
                        let dialogue = data.dialogue8
                        this.dialogue8.left = dialogue.left + (rs * 3) + '%'
                        this.dialogue8.opacity = (rs / 3)
                    }
                    if (rs > 3) {
                        this.dialogue8.opacity = 1 - (rs - 4)
                    }
                }
                if (_scrolldrag >= 64) {
                    let rs = _scrolldrag - 64
                    if (rs <= 2) {
                        let dialogue = data.dialogue9
                        this.dialogue9.left = dialogue.left - (rs * 10) + '%'
                        this.dialogue9.opacity = (rs / 3)
                    }
                    if (rs > 3) {
                        this.dialogue9.opacity = 1 - (rs - 4)
                    }
                }

                if (_scrolldrag >= 66) {
                    let rs = _scrolldrag - 66
                    if (rs <= 10) {
                        let dialogue = data.balloon
                        this.balloon.left = parseFloat(dialogue.left) + (rs * 8) + '%'
                        this.balloon.top = parseFloat(dialogue.top) - (rs / 3) + '%'
                    }

                }

                if (_scrolldrag >= 74) {
                    let rs = _scrolldrag - 74
                    if (rs <= 3) {
                        let dialogue = data.dialogue10
                        this.dialogue10.left = dialogue.left + (rs * 3) + '%'
                        this.dialogue10.opacity = (rs / 3)
                    }
                    if (rs > 3) {
                        this.dialogue10.opacity = 1 - (rs - 4)
                    }
                }
                if (_scrolldrag >= 78) {
                    let rs = _scrolldrag - 78
                    if (rs <= 2) {
                        let dialogue = data.dialogue11
                        this.dialogue11.left = dialogue.left - (rs * 8) + '%'
                        this.dialogue11.opacity = (rs / 3)
                    }
                    if (rs > 3) {
                        this.dialogue11.opacity = 1 - (rs - 4)
                    }
                }
            },

            //微信的方法
            wxRegCallback() {
                // 用于微信JS-SDK回调
                this.wxShareTimeline()
                this.wxShareAppMessage()
            },
            wxShareTimeline() {
                // 微信自定义分享到朋友圈
                let option = {
                    title: '神秘盒子惊现龙城？！', // 分享标题, 请自行替换
                    link: window.location.href.split('#')[0], // 分享链接，根据自身项目决定是否需要split
                    imgUrl: 'logo.png', // 分享图标, 请自行替换，需要绝对路径
                    success: () => {
                        alert('分享成功')
                    },
                    error: () => {
                        alert('已取消分享')
                    }
                }
                // 将配置注入通用方法
                wxapi.ShareTimeline(option)
            },
            wxShareAppMessage() {
                // 微信自定义分享给朋友
                let option = {
                    title: '神秘盒子惊现龙城？！', // 分享标题, 请自行替换
                    desc: '这些人马不停蹄地要去做什么？', // 分享描述, 请自行替换
                    link: window.location.href.split('#')[0], // 分享链接，根据自身项目决定是否需要split
                    imgUrl: '', // 分享图标, 请自行替换，需要绝对路径
                    success: () => {
                        alert('分享成功')
                    },
                    error: () => {
                        alert('已取消分享')
                    }
                }
                // 将配置注入通用方法
                wxapi.ShareAppMessage(option)
            }


        },
        created() {

        },
        mounted() {
            this.autoPlayAudio();
            wxapi.wxRegister(this.wxRegCallback);
            // this.souvenir()

        }
    }
</script>


<style scoped lang="scss">
    img {
        pointer-events: none; /* 禁止长按图片保存 */

    }

    .scroll {
        width: 100%;
        height: 100vh;
        margin: 0 auto;
        overflow-y: auto;
        overflow-x: hidden;
        background: url(../assets/images/bj.jpg) no-repeat bottom;
        background-size: 100%;
    }

    .run {
        top: 39.1%;
        left: 100%;
    }

    .runAnrun {
        animation: run 5s ease-in infinite;
    }

    @keyframes run {
        from {
            left: 100%;
            top: 39.1%;
        }
        to {
            left: -12vw;
            top: 42.5%;
        }
    }

    .main {
        position: relative;

    }

    .element {
        position: absolute;
        height: auto;
        /*top: 0;*/
        /*right: 0;*/
        /*bottom:0;*/
        /*left:0*/
    }

    ::-webkit-scrollbar {
        /*隐藏滚轮*/
        display: none;
    }

    .mc {

        width: 100vw;
        height: 17.9%;
        opacity: 1

    }

    .cloud1 {
        position: absolute;
        animation: left 4s ease infinite;
        /*过度*/
        transition: all 1s ease;
    }

    .cloud2 {
        position: absolute;
        animation: right 4s ease infinite;
        /*过度*/
        transition: all 1s ease;
    }

    .cloud3 {
        position: absolute;
        animation: left1 5s ease infinite;
        /*过度*/
        transition: all 1s ease;
    }

    .cloud4 {
        position: absolute;
        animation: right1 5s ease infinite;
        /*过度*/
        transition: all 1s ease;
    }


    @keyframes left {
        0% {
            left: -5%;
        }
        25% {
            left: +2%;
        }
        50% {
        }
        75% {
            left: -2%;
        }
        100% {

        }
    }

    @keyframes left1 {
        0% {
            transform: translate(25%, 0);
        }
        50% {
            transform: translate(-10%, 0);
        }
        100% {
            transform: translate(25%, 0);
        }
    }

    @keyframes right {
        0% {
            right: -10%
        }
        25% {
            right: +2%;
        }
        50% {
        }
        75% {
            right: -2%;
        }
        100% {

        }
    }

    @keyframes right1 {
        0% {
            transform: translate(-15%, 0);
        }
        50% {
            transform: translate(+30%, 0);
        }
        100% {
            transform: translate(-15%, 0);
        }

    }

    .font1 {
        position: absolute;
        top: 40%;
        left: 50%;
        width: 10px;
        height: auto;
        color: #3d58a2;
        font-weight: 600;
        font-size: 18px;
    }

    .font2 {

        position: absolute;
        top: 55%;
        left: 43%;
        height: auto;
        color: #3d58a2;
        font-size: 14px;
        /*transform:scale(0.8);*/
        /*-webkit-transform:scale(0.8);*/
        /*-moz-transform:scale(0.8);*/
        font-weight: 600;
        letter-spacing: 2px;
        writing-mode: tb-rl

    }

    @keyframes scale {
        0% {
            transform: scale(1)
        }
        50%, 75% {
            transform: scale(3)
        }
        78%, 100% {
            opacity: 0
        }
    }

    .item1 {
        position: absolute;

        /*background-color: #FFFF00;*/
        border-radius: 50%;
        left: 44%;
        width: 24%;
        height: 7%;
        top: 14%
        /*top: ;*/
    }

    .item1:before {
        content: '';
        display: block;
        width: 70%;
        height: 70%;
        border-radius: 50%;
        opacity: .2;
        background-color: #ffcec5;
        animation: scale 2s infinite cubic-bezier(0, 0, .49, 1.02);
        animation-delay: 200ms;
    }

    .loader {
        bottom: 2%;
        left: 2%;
        position: absolute;
        border: 7px solid;
        border-color: #00ffff #ffffff #00ccff #ffffff;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: load 2s linear infinite;
    }

    @keyframes load {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .Loading {
        color: #fff;
        position: absolute;
        bottom: 2%;
        left: 35%;
        transform: translate(-50%, -50%);
        margin: 0;
        padding: 0;
        display: flex;

        li:nth-child(2) {
            animation-delay: -1.2s;
        }

        li:nth-child(3) {
            animation-delay: -1s;
        }

        li:nth-child(4) {
            animation-delay: -.8s;
        }

        li:nth-child(5) {
            animation-delay: -.6s;
        }

        li {
            list-style-type: none;

            /*background: linear-gradient(to right, #fff, #ffb8f9);*/
            margin: 0 5px;
            border-radius: 50%;
            animation: animate 1.5s linear infinite;
            /*box-shadow: 1px 1px 5px #fff;*/
        }
    }

    @keyframes animate {
        0% {
            transform: translateY(0);
        }
        60% {
            transform: translateY(0);
        }
        80% {
            transform: translateY(-20px);
        }
        100% {
            transform: translateY(0);
        }

    }

    .music {

        position: absolute;
        width: 1.9rem;
        height: 1.5rem;
        border: 5px solid #e5f397;
        border-bottom: 0px;
        border-top-left-radius: 110px;
        border-top-right-radius: 110px;

        span {
            width: 50px;
            height: 30px;
            font-size: 11px;
            display: block;
            margin-top: 125%;
            letter-spacing: 2px;
            margin-left: -4px;
        }

    }


    .music:before {
        right: -8px;
    }

    .music:after {
        left: -7px;
    }

    .music:before, .music:after {

        content: '';
        position: absolute;
        bottom: -14px;
        width: 0.7rem;
        height: 1rem;
        background-color: #f8ffbe;
        border-radius: 5px;
    }


    .loader1 {
        width: 5em;
        height: 5em;
        font-size: 11px;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 15%;
        right: 10%;
        position: fixed;
        letter-spacing: 1px;
        color: white;
        border: 1px dotted pink;
        border-radius: 50%;
    }

    .loader1:active {
        background: yellow;
        opacity: 0.5;
        box-shadow: 5px 5px 20px 10px rgba(255, 255, 0, 0.5)
    }

    .loader1 .face {
        position: absolute;
        border-radius: 50%;
        border-style: solid;
        animation: animate2 3s linear infinite;
    }

    .loader1 .face:nth-child(1) {
        width: 100%;
        height: 100%;
        color: gold;
        border-color: currentColor transparent transparent currentColor;
        border-width: 0.2em 0.2em 0em 0em;
        --deg: -45deg;
        animation-direction: normal;
    }

    .loader1 .face:nth-child(2) {
        width: 70%;
        height: 70%;
        color: lime;
        border-color: currentColor currentColor transparent transparent;
        border-width: 0.2em 0em 0em 0.2em;
        --deg: -135deg;
        animation-direction: reverse;
    }

    .loader1 .face .circle {
        position: absolute;
        width: 50%;
        height: 0.1em;
        top: 50%;
        left: 50%;
        background-color: transparent;
        transform: rotate(var(--deg));
        transform-origin: left;
    }

    .loader1 .face .circle::before {
        position: absolute;
        top: -0.5em;
        right: -0.5em;
        content: '';
        width: 1em;
        height: 1em;
        background-color: currentColor;
        border-radius: 50%;
        box-shadow: 0 0 2em,
        0 0 4em,
        0 0 6em,
        0 0 8em,
        0 0 10em,
        0 0 0 0.5em rgba(255, 255, 0, 0.1);
    }

    @keyframes animate2 {
        to {
            transform: rotate(1turn);
        }
    }

    .hint {
        color: white;
        font-weight: 300;
        width: 5em;
        height: 5em;
        font-size: 11px;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 15%;
        right: 10%;
        position: fixed;
        letter-spacing: 2px
    }

    .reminder {
        top: 23%;
        right: 10%;
        position: fixed;
        width: 5em;
        height: 5em;

    }

</style>

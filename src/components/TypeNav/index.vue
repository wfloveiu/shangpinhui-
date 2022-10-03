<template>
    <div class="type-nav">
        <div class="container">
            <div @mouseleave="leaveIndex()" @mouseenter="enterShow()">
                <h2 class="all">全部商品分类</h2>
                <transition name="sort">
                    <div class="sort" v-show="show">
                        <div class="all-sort-list2" @click="goSearch">
                            <div class="item" v-for="(c1, index) in categoryList" :key="c1.categoryId"
                                :class="{ cur: index == currentIndex }">
                                <h3 @mouseenter="changeIndex(index)">
                                    <a :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{
                                            c1.categoryName
                                    }}</a>
                                    <!-- <router-link to="/search">{{ c1.categoryName }}</router-link> -->
                                </h3>
                                <div class="item-list clearfix"
                                    :style="{ display: currentIndex == index ? 'block' : 'none' }">
                                    <div class="subitem" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                                        <dl class="fore">
                                            <dt>
                                                <a :data-categoryName="c2.categoryName"
                                                    :data-category2Id="c2.categoryId">{{
                                                            c2.categoryName
                                                    }}</a>
                                                <!-- 直接使用编程式导航push函数也会导致调用函数的次数增加 -->
                                                <!-- <router-link to="/search">{{ c2.categoryName }}</router-link> -->
                                                <!-- 使用router-link会出现卡顿现象，不建议使用 -->
                                            </dt>
                                            <dd>
                                                <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                                                    <a :data-categoryName="c3.categoryName"
                                                        :data-category3Id="c3.categoryId">{{ c3.categoryName }}</a>
                                                    <!-- <router-link to="/search">{{ c3.categoryName }}</router-link> -->
                                                </em>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </transition>
            </div>
            <nav class="nav">
                <a href="###">服装城</a>
                <a href="###">美妆馆</a>
                <a href="###">尚品汇超市</a>
                <a href="###">全球购</a>
                <a href="###">闪购</a>
                <a href="###">团购</a>
                <a href="###">有趣</a>
                <a href="###">秒杀</a>
            </nav>

        </div>
    </div>

</template>

<script>
import _ from 'lodash';
import { mapState } from 'vuex';
export default {
    name: 'TypeNav',
    data() {
        return {
            currentIndex: -1,
            show: true,
        }
    },
    methods: {
        //鼠标经过改变背景颜色、
        // changeIndex(index) {
        //     this.currentIndex = index;
        //     // console.log(_);
        // },
        changeIndex: _.throttle(function (index) {
            this.currentIndex = index;
        }, 50),
        leaveIndex() {
            this.currentIndex = -1;
            if (this.$route.path != '/home') {
                this.show = false;
            }

        },
        goSearch(event) {
            // event是点事件
            // 最好的写法，编程式导航，加上事件委派：在父盒子上写@click函数
            // this.$router.push('/search')
            // 事件委派的问题：1.判断是a标签被点击， 需要获取参数
            let element = event.target
            // 获取事件源
            let { categoryname, category1id, category2id, category3id } = element.dataset;
            // console.log(element.dataset);
            if (categoryname) {//存在这个属性
                // 判断一级分类、二级分类、三级分类
                let location = { name: 'search' };
                let query = { categoryName: categoryname };
                // query参数，第一项是categoryname，后一项是categoryid
                if (category1id) {
                    query.categoryId = category1id;
                } else if (category2id) {
                    query.categoryId = category2id;
                } else {
                    query.categoryId = category3id;
                }
                if (this.$route.params) {
                    location.params = this.$route.params;
                    location.query = query;
                    // 路由跳转
                    this.$router.push(location);
                }
            }

        },
        enterShow() {
            this.show = true;
        }

    },
    mounted() {

        // 需要判断路由来显示是否显示
        if (this.$route.path != "/home")
            this.show = false;
    },
    computed: {
        ...mapState({
            categoryList: state => state.home.categoryList
        })
    }
}
</script>

<style scoped lang="less">
.type-nav {
    border-bottom: 2px solid #e1251b;

    .container {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        position: relative;

        .all {
            width: 210px;
            height: 45px;
            background-color: #e1251b;
            line-height: 45px;
            text-align: center;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
        }

        .nav {
            a {
                height: 45px;
                margin: 0 22px;
                line-height: 45px;
                font-size: 16px;
                color: #333;
            }
        }

        .sort {
            position: absolute;
            left: 0;
            top: 45px;
            width: 210px;
            height: 461px;
            position: absolute;
            background: #fafafa;
            z-index: 999;

            .all-sort-list2 {
                .item {
                    h3 {
                        line-height: 30px;
                        font-size: 14px;
                        font-weight: 400;
                        overflow: hidden;
                        padding: 0 20px;
                        margin: 0;

                        a {
                            color: #333;
                        }
                    }

                    .item-list {
                        display: none;
                        position: absolute;
                        width: 734px;
                        min-height: 460px;
                        background: #f7f7f7;
                        left: 210px;
                        border: 1px solid #ddd;
                        top: 0;
                        z-index: 9999 !important;

                        .subitem {
                            float: left;
                            width: 650px;
                            padding: 0 4px 0 8px;

                            dl {
                                border-top: 1px solid #eee;
                                padding: 6px 0;
                                overflow: hidden;
                                zoom: 1;

                                &.fore {
                                    border-top: 0;
                                }

                                dt {
                                    float: left;
                                    width: 54px;
                                    line-height: 22px;
                                    text-align: right;
                                    padding: 3px 6px 0 0;
                                    font-weight: 700;
                                }

                                dd {
                                    float: left;
                                    width: 415px;
                                    padding: 3px 0 0;
                                    overflow: hidden;

                                    em {
                                        float: left;
                                        height: 14px;
                                        line-height: 14px;
                                        padding: 0 8px;
                                        margin-top: 5px;
                                        border-left: 1px solid #ccc;
                                    }
                                }
                            }
                        }
                    }

                    // &:hover {
                    //     .item-list {
                    //         display: block;
                    //     }
                    // }
                }

                .cur {
                    background-color: skyblue;
                }
            }
        }

        // 进入时的高度是0
        .sort-enter {
            height: 0px;
        }

        // 完全进入的高度是461
        .sort-enter-to {
            height: 461px;
        }

        // 进入的过程动画是
        .sort-enter-active {
            transition: all 0.5s linear
        }
    }
}
</style>
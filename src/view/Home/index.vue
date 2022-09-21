<template>
    <div>
        <TypeNav></TypeNav>
        <ListContiner></ListContiner>
        <Recommand></Recommand>
        <Rank></Rank>
        <Like></Like>
        <Fllor></Fllor>
        <Fllor></Fllor>
        <Brand></Brand>
    </div>
</template>

<script>
// import TypeNav from './TypeNav/index.vue';
// <!-- 不需要引入 -->
import ListContiner from '@/view/Home/ListContiner'
// 这个不是全局组件，必须引入
import Recommand from '@/view/Home/Recommand'
import Rank from '@/view/Home/Rank'
import Like from '@/view/Home/Like'
import Fllor from '@/view/Home/Fllor'
import Brand from '@/view/Home/Brand'
export default {
    name: "NB",
    // components: { TypeNav }
    components: {
        ListContiner,
        Recommand,
        Rank,
        Like,
        Fllor,
        Brand
    }
}
</script>

<style scoped lang="less">
</style>
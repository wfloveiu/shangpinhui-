<template>
    <div>
        <TypeNav></TypeNav>
        <ListContiner></ListContiner>
        <Recommand></Recommand>
        <Rank></Rank>
        <Like></Like>
        <Floor v-for="floor in floorList" :key="floor.id" :list="floor"></Floor>

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
import Floor from '@/view/Home/Floor'
import Brand from '@/view/Home/Brand'
import { mapState } from 'vuex'
export default {
    name: "MyIndex",
    // components: { TypeNav }
    components: {
        ListContiner,
        Recommand,
        Rank,
        Like,
        Floor,
        Brand,

    },
    mounted() {
        this.$store.dispatch("home/getFloorList")
    },
    computed: {
        ...mapState("home", { floorList: "floorList" }),
    }
}
</script>

<style scoped lang="less">
</style>
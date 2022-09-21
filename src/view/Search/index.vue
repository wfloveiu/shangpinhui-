<template>
    <div>
        <h1>paramas参数-----{{ $route.params.keywords }}</h1>
        <h1>query参数-------{{ $route.query.k }}</h1>
    </div>
</template>

<script>
export default {
    name: 'NB',
}
</script>

<style scoped lang="less">
</style>
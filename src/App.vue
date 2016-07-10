<template>
    <router-view transition="fade" transition-mode="out-in" keep-alive></router-view>
</template>

<script>
</script>

<style scoped>
    [v-cloak] {
        display: none;
    }
    
    .fade-transition {
        transition: opacity .3s ease;
    }
    .fade-enter, .fade-leave {
        opacity: 0;
    }
</style>

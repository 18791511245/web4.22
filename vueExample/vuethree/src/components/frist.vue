<template>
    <div>
    <h1>开始考试</h1>
    </div>
</template>
<script>
export default {
    data() {
            return {
                canshu: '',
            }
        },
        created() {
            console.log(this.$route.params.id);
            this.canshu = this.$route.params.id
        },
}
</script>
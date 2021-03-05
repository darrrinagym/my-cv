<template>
  <section>
    <slot></slot>
  </section>
</template>

<script>
import acc-item from "src/.vuepress/components/acc-item.vue";
export default {
  components: { acc-item },
  name: "Accordion"
};

</script>

<style lang="stylus" scoped>

 section:
    max-width var(--sectionWidth)
    margin 3rem auto
    width 97%   
</style>
<template>
  <section class="acc">
    <slot ></slot>
  </section>
</template>

<script>
import AccItem from "./AccItem.vue";
export default {
  components: { AccItem },
  name: "Accordeon"
};

</script>

<style lang="stylus" scoped>

 .acc
    max-width var(--sectionWidth)
    margin 1rem auto
    padding 0rem 0 0rem 1rem
    width 96%  
    border-left 1px solid
    border-color #d5d3d6
    
</style>
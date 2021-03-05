<template>
<section>
  <details open>
    <summary>Carl Gustav Jung</summary>
    <div>
      
      <p>The Swiss psychologist and psychiatrist Carl Jung was one of the major forces responsible for bringing psychological (having to do with the mind and its processes) thought and its theories into the twentieth century.</p>
    </div>
  </details>
  <details>
    <summary>Sigmund Freud</summary>
    <div>
      
      <p>The work of Sigmund Freud, the Austrian founder of psychoanalysis, marked the beginning of a modern, dynamic psychology by providing the first well-organized explanation of the inner mental forces determining human behavior.</p>
    </div>
  </details>
  <details>
    <summary>Alfred Adler</summary>
    <div>
      
      <p>Austrian psychiatrist Alfred Adler was credited with developing several important theories on the motivation of human behavior. He founded the school of individual psychology, a comprehensive "science of living" that focuses on the uniqueness of the individual
        and a person's relationships with society.</p>
    </div>
  </details>
</section>
</template>

<script>
export default { 

}
</script>

<style lang="stylus" scoped>

section
    max-width var(--sectionWidth)
    margin 3rem auto
    width 97%
    color #000

summary
    display block
    cursor pointer
    padding 10px
    transition .3s
    // border-bottom 1px solid #d5d3d6 
    user-select none

details
    & > div
        display flex
        flex-wrap wrap
        overflow auto
        height 100%
        user-select none
        padding 0 20px
        line-height 1.5
        & > img
            align-self flex-start
            max-width 100%
            margin-top 20px
        & > p
            flex 1

details[open]
    & > summary
        color #2E26D9
        border-bottom 1px solid #2E26D9
    



</style>
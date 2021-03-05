<template>
<details>
    <summary><slot/> </summary>
    <div>
      <p><slot name="acc-p"/></p>
    </div>
  </details>
</template>

<script>

</script>

<style lang="stylus" scoped>
summary
    display block
    cursor pointer
    outline none 
    padding 0.5rem
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
        padding 0 1.25rem
        line-height 1.5
        border 1px solid #d5d3d6 
        
        & > p
            flex 1

details[open]
    & > summary
        color #2E26D9
        // border-bottom 1px solid #2E26D9
    
details[open] > div {
    animation-name: slideDown
    animation-duration 0.3s
    animation-fill-mode forwards

  }
details[open] > div > p {
    opacity: 0;
    animation-name: showContent;
    animation-duration: 0.6s;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;
    margin: 0;
    padding-left: 20px;
  }
@keyframes slideDown {
  from {
    opacity: 0;
    height: 0;
    padding: 0;
  }

  to {
    opacity: 1;
    height: var(--contentHeight);
    padding: 20px;
  }
}

@keyframes showContent {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

</style>
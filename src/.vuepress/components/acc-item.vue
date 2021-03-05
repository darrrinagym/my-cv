<template>
  <li class="accordion__item">
    <div 
      class="accordion__trigger"
      :class="{'accordion__trigger_active': visible}"
      @click="open">

      <!-- This slot will handle the title/header of the accordion and is the part you click on -->
      <slot name="accordion-trigger"></slot>
    </div>

    <transition 
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end">

      <div class="accordion__content"
        v-show="visible">
        <ul>
          <!-- This slot will handle all the content that is passed to the accordion -->
          <slot name="accordion-content"></slot>
        </ul>
      </div>
    </transition>
  </li>
</template>

<script>
export default {
  props: {},
  inject: ["Accordion"],
  data() {
    return {
      index: null
    };
  },
  computed: {
    visible() {
      return this.index == this.Accordion.active;
    }
  },
  methods: {
    open() {
      if (this.visible) {
        this.Accordion.active = null;
      } else {
        this.Accordion.active = this.index;
      }
    },
    start(el) {
      el.style.height = el.scrollHeight + "px";
    },
    end(el) {
      el.style.height = "";
    }
  },
  created() {
    this.index = this.Accordion.count++;
  }
};
</script>

<style lang="stylus" scoped>

section
    max-width var(--sectionWidth)
    margin 3rem auto
    width 97%
    // color #000

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
        & > img
            align-self flex-start
            max-width 100%
            margin-top 1.25rem
        & > p
            flex 1

details[open]
    & > summary
        color #2E26D9
        // border-bottom 1px solid #2E26D9
    
details[open] > div {
    animation-name slideDown
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
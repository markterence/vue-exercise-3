<template>
  <div
    :class="['shadow','mt-1', 'd-block', 'd-flex', 'term' ,'flex-column', 'rounded', 'bg-dark',
        termClass]"
    v-bind:style="[termStyle]"
  >
    <div class="shadow term-header-container" style="">
      <div 
        class="px-2 d-flex justify-content-between align-items-center" 
        style="max-height:42px; height:42px"
        @click.self="onHeaderClicked"
      >
        <div class="d-flex">
          <span style="color: orange; user-select:none; cursor: default;">{{title}}</span>
        </div>
        <div class="d-flex">
          <TermCircleButton :class="['bg-warning']" title="collapse" @click="hideTerm"/>
          <TermCircleButton :class="['bg-success']" title="toggle" @click="toggleTerm"/>
        </div>
      </div>
    </div>
    <div class="term-content px-2 h-100" style="overflow-y: auto">
      <div class="h-100">
        <slot />
        <div v-for="(content, i) in messages" :key="i">
          <TermMessageItem :logType="content.logType"> {{ displayMessage(content) }} </TermMessageItem>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TermCircleButton from './TermCircleButton';
import TermMessageItem from './TermMessageItem';

const MAX_TERM_HEIGHT = 300;
const MIN_TERM_HEIGHT = 160;
const MAX_VISIBLE_HEIGHT = 42;

export default {
  components: {
    TermCircleButton,
    TermMessageItem
  },
  props: {
    title: {
      type: String,
      required: false,
      default: function() {
        return "";
      }
    },
    termMessages: {
      type: Array,
      required: false,
      default: function() {
        return [];
      }
    },
    collapsed: {
      type: Boolean,
      required: false,
      default: function() {
        return false
      }
    },
    active: {
      type: Boolean,
      required: false,
      default: function() {
        return false
      }
    }
  },
  data() {
    return {
      termHeight: MIN_TERM_HEIGHT,
      showTerm: false,
      messages: this.termMessages
    };
  },
  computed: {
    termStyle() {
      return {
        height: `${this.termHeight}px`
      };
    },
    termClass() {
      return {
        active: this.$props.active, 
      };
    }
  },
  mounted(){
    if(!this.$props.collapsed) {
      this.hideTerm()
    }
  },
  methods: {
    displayMessage(content){
      if(content.tag) {
        return `<${content.tag}> ${content.message}`;
      }
      return `${content.message}`
    },
    clearTermContent() {
      this.messages = []
    },
    
    /**
     * @param {Array|Object} content
     * content.message
     * content.logType
     * content.tag 
     */
    setTermContent(content) {
      if(Array.isArray(content)) {
        this.messages.push(...content)
      }
      else {
        this.messages.push(content);
      }
    },
    hideTerm() {
      this.termHeight = this.termHeight <= MAX_VISIBLE_HEIGHT ? MAX_TERM_HEIGHT : MAX_VISIBLE_HEIGHT;
    },
    onHeaderClicked(e) {
      // https://vuejs.org/v2/guide/components-custom-events.html
      this.$emit('on-header-click',e)
    },
    toggleTerm() {
      this.termHeight =
        this.termHeight >= MAX_TERM_HEIGHT ? MIN_TERM_HEIGHT : MAX_TERM_HEIGHT;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.term {
  transition: height 0.4s;
}
.term.active {
  box-shadow: rgba(75, 0, 196, 0.6) 0px 0px 8px 4px !important;
}

</style>
<template>
  <div
    :class="['mt-1', 'd-block', 'd-flex', 'term' ,'flex-column', 'rounded', 'bg-dark',
        termClass]"
    v-bind:style="[termStyle]"
  >
    <div class="shadow term-header-container" style="">
      <div class="px-2 d-flex justify-content-between align-items-center" 
      style="max-height:42px; height:42px"
        @click.self="glowTerm"
      >
        <div class="d-flex"><span style="color: orange; user-select:none; cursor: default;">{{title}}</span>
        </div>
        <div class="d-flex">
          <button
            class="btn p-2 bg-warning rounded-circle ml-1"
            style="width:4px; height:4px;"
            @click="hideTerm"
          ></button>
          <button
            class="btn p-2 bg-success rounded-circle ml-1"
            style="width:4px; height:4px;"
            @click="toggleTerm"
          ></button>
        </div>
      </div>
    </div>
    <div class="term-content px-2  h-100" style="overflow-y: auto">
      <div class="h-100">
        <div v-for="(content, i) in messages" :key="i">
          <span :class="['p-0',  (content.warn) ? 'text-warning':'text-success' ]">
           {{  content.warn ? "&lt;Announcement&gt; ": '' }}{{content.message}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const MAX_TERM_HEIGHT = 300;
const MIN_TERM_HEIGHT = 160;
const MAX_VISIBLE_HEIGHT = 42;

export default {
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
    }
  },
  data() {
    return {
      termHeight: MIN_TERM_HEIGHT,
      isActive: false,
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
        active: this.isActive, 
      };
    }
  },
  mounted(){
    if(!this.$props.collapsed) {
      this.hideTerm()
    }
  },
  methods: {
    clearTermContent() {
      this.messages = []
    },
    setTermContent(content) {
      this.messages.push(content);
    },
    hideTerm() {
      this.termHeight = this.termHeight <= MAX_VISIBLE_HEIGHT ? MAX_TERM_HEIGHT : MAX_VISIBLE_HEIGHT;
    },
    glowTerm() {
      this.isActive = !this.isActive;
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
  box-shadow: rgba(75, 0, 196, 0.6) 0px 0px 8px 4px;
}
</style>
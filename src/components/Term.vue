<template>
  <div
    :class="['mt-1', 'd-block', 'd-flex', 'term' ,'flex-column', 'rounded', 'bg-dark',
        termClass]"
    v-bind:style="[termStyle]"
  >
    <div class="shadow term-header-container" style="max-height:30px">
      <div class="p-2 d-flex justify-content-between align-items-center" @click.self="glowTerm">
        <a href="#" style="color: orange; user-select:none; cursor: default;">{{title}}</a>
        <div>
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
    <div class="term-content px-2 text-success h-100" style="overflow-y: auto">
      <div class="h-100">
        <div v-for="(msgs, i) in termMessages" :key="i">
          <span class="p-0">{{ msgs }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const MAX_TERM_HEIGHT = 300;
const MIN_TERM_HEIGHT = 160;

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
        return [""];
      }
    }
  },
  data() {
    return {
      termHeight: MIN_TERM_HEIGHT,
      isActive: false,
      showTerm: false
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
  methods: {
    setTermContent(content) {
      this.$props.termMessages.push(content);
    },
    hideTerm() {
      this.termHeight = this.termHeight <= 30 ? MAX_TERM_HEIGHT : 30;
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
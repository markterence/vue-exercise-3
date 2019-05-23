<template>
  <div>
    <slot :list="list.filter(filter)"/> 
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: []
    },
    filter: {
      type: Boolean,
      default: true
    }
  }

/**
 * Functional JSX / Render function equivalent 
  
  export default {
    functional: true, 
    render(h, { props, data }) {
      return h(
          'div',
          data.scopedSlots.default({ list: props.list.filter(props.filter) })
        )
      }
    } 
 */
 
}
</script>
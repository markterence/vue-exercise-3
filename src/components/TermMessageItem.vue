<template>
	<span :class="['p-0',  textColor]">
		<slot />
	</span>
</template>
<script>
export default {
	props: {
		logType: {
			type: String,
			validator: function (value) {
        // The value must match one of these strings
        return ['primary', 'secondary','info', 'success', 'warning', 'danger', 'light', 'dark', 'muted', 'white', 'body', 'black-50','white-50'].indexOf(value) !== -1
			},
			default: function(){
				return 'light'
			}
		}
	},
	computed: {
		textColor(){ 
			return `text-${this.$props.logType}`
		}
	}
}
</script>

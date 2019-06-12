<template>
	<button
		:title="title"
		class="btn p-2 rounded-circle ml-1"
		style="width:4px; height:4px;" 
		v-on="
			$listeners
			// https://vuejs.org/v2/guide/components-custom-events.html#Binding-Native-Events-to-Components
		"
	></button>
</template>

<script>
export default {
	props:{
		title: {
			type: String,
			required: false,
			default: function(){
				return ''
			}
		},
	}, 
}
</script>

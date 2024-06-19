<template>
	<button class="inline-block rounded-md bg-primary py-[14px] px-11 text-base font-medium text-white hover:bg-opacity-90" >
		{{ text }}
	</button>
</template>

<script>
export default {
	name: "genericButton",
	props: {
		text: {
			type: String,
			required: true
		}
	}
}
</script>
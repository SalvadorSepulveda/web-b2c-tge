<template>
	<NuxtLink
		target="_blank"
		:to="href"
	>
		<span class="sr-only">{{ alt }}</span>
		<generic-icon :name="icon" :width="width" :alt="alt" />
	</NuxtLink>
</template>

<script>
export default {
	name: "footerIcon",
	props: {
		icon: {
			type: String,
			required: true
		},
		width: {
			type: String,
			required: false
		},
		alt: {
			type: String,
			required: true
		},
		href: {
			type: String,
			required: true
		}
	}
}
</script>
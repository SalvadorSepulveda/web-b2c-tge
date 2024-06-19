<template>
	<NuxtLink :to="href">
		<NuxtImg format="webp,png,jpg" :width="width" :src="src" :alt="alt" />
	</NuxtLink>
</template>

<script>
export default {
	name: "navbarLogo",
	props: {
		src: {
			type: String,
			required: true
		},
		alt: {
			type: String,
			required: true
		},
		href: {
			type: String,
			required: true
		},
		width: {
			type: Number,
			default: 150
		}
	}
}
</script>
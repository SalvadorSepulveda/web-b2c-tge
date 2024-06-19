<template>
	<div class="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6 mb-5 text-center">
		<NuxtImg
			loading="lazy"
			format="webp,png,jpg"
			:alt="name"
			class="mx-auto max-w-[130px] opacity-[65%] grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
			:src="image"
		/>
	</div>
</template>

<script>
export default {
	name: "clientsItem",
	props: {
		name: {
			type: String,
			default: ""
		},
		image: {
			type: String,
			default: ""
		}
	}
}
</script>
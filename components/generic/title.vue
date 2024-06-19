<template>
	<div class="container">
		<div class="mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]" >
			<h2 class="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight" data-aos="fade-up" data-aos-delay="100" >
				<span class="duration-300">{{ title }}</span>
			</h2>
			<p v-if="subtitle" class="text-bodywhite dark:text-body duration-300" data-aos="fade-up" data-aos-delay="200">
				<span class="duration-300">{{ subtitle }}</span>
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "genericTitle",
	props: {
		title: {
			type: String,
			required: true,
		},
		subtitle: {
			type: String,
			default: null,
		}
	},
}
</script>

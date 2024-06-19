<template>
	<div class="w-full px-4 md:w-1/2 lg:w-1/3">
		<div class="group mx-auto mb-[60px] max-w-[310px] text-center" >
			<div class="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-gray text-primary group-hover:bg-primary group-hover:text-white dark:bg-[#2A2E44] dark:text-white dark:group-hover:bg-primary duration-300" >
				<generic-icon :name="icon" width="44" />
			</div>
			<h3 class="mb-4 text-xl font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px] duration-300" >
				{{ title }}
			</h3>
			<p class="text-base text-bodywhite dark:text-body duration-300">
				{{ description }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "featureItem",
	props: {
		title: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		icon: {
			type: String,
			required: true
		}
	}
}
</script>
<template>
	<div class="w-full px-6 lg:w-1/2 h-full">
		<div class="my-[25px] rounded-lg bg-white py-9 px-7 shadow-card dark:bg-dark dark:shadow-card-dark sm:px-9 lg:px-7 xl:px-9 min-h-[16rem] flex flex-col justify-between duration-300">
			<div class="mb-5 border-b border-stroke dark:border-stroke-dark duration-300">
				<p class="pb-9 text-base text-bodywhite dark:text-body duration-300">
					<i>"{{ text }}"</i>
				</p>
			</div>
			<div class="items-center justify-between sm:flex gap-1 lg:block xl:flex">
				<div class="mb-4 flex items-center gap-1 sm:mb-0 lg:mb-4 xl:mb-0">
					<div class="mr-4 h-[56px] w-full max-w-[56px] rounded-full">
						<NuxtImg width="56" loading="lazy" format="webp,png,jpg" alt="author" class="h-full w-full object-cover object-center rounded-full bg-white" :src="image" />
					</div>
					<div class="flex flex-col gap-1">
						<span class="text-base font-medium text-black dark:text-white duration-300">
							{{ title }}
						</span>
						<p class="text-sm text-bodywhite dark:text-body duration-300">
							{{ subtitle }}
						</p>
					</div>
				</div>
				<div class="flex items-center space-x-3 sm:justify-end lg:justify-start xl:justify-end">
					<p class="text-base font-medium text-black dark:text-white duration-300">
						{{ rate.toFixed(1) }}
					</p>
					<generic-icon width="20" v-for="i in rate" :key="i" name="star" class="flex items-center" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "testimonialCard",
	props: {
		title: {
			type: String,
			required: true,
		},
		subtitle: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
		rate: {
			type: Number,
			default: 0,
		},
		image: {
			type: String,
			required: false,
		},
	},
};
</script>

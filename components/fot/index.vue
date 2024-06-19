<template>
	<footer>
		<div class="mt-[3rem] duration-300 bg-[#F8FAFB] pt-[1rem] pb-[1rem] dark:bg-[#15182A]">
			<div class="container max-w-[1450px]">
				<div class="grid gap-[1rem] justify-items-center items-center 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1" >
					<generic-logo :href="'/' + $i18n.locale" src="https://cdn.t3s.es/website/logo-tge-large.webp" alt="logo" :width="200" />
					<NuxtImg format="webp,png,jpg" loading="lazy" class="w-full" src="https://cdn.t3s.es/website/image-footer.webp" alt="image-footer" />
				</div>
			</div>
		</div>
		<div class="bg-primary duration-300 py-7 dark:bg-black">
			<div class="container max-w-[1450px]">
				<div class="-mx-3 flex flex-wrap">
					<div class="order-last w-full px-3 lg:order-first lg:w-1/3">
						<p class="mt-4 text-center text-base text-white lg:mt-0 lg:text-left font-[500]">
							{{ $t('textCopy')}}
						</p>
					</div>
					<div class="w-full px-3 md:w-1/2 lg:w-1/3 flex justify-center mb-4 items-center space-x-5 md:mb-0 md:justify-start lg:justify-center">
						<fot-icon v-for="item in social" :key="item.icon" :href="item.url" :alt="item.icon" :icon="item.icon" width="20" class="text-white opacity-80 hover:opacity-100" />
					</div>
					<div class="w-full px-3 md:w-1/2 lg:w-1/3  flex items-center justify-center space-x-4 sm:space-x-8 md:justify-end lg:justify-end font-[500] text-center">
						<router-link class="text-base text-white hover:text-[#ccc] dark:hover:text-primary duration-100" :to="'/' + $i18n.locale + '/privacy'">
							{{ $t('textButtonPrivacy')}}
						</router-link>
						<router-link class="text-base text-white hover:text-[#ccc] dark:hover:text-primary duration-100" :to="'/' + $i18n.locale + '/terms'">
							{{ $t('textButtonTerms')}}
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'fot',
	data: () => ({
		social: [
			{
				icon: 'facebook',
				url: 'https://www.facebook.com/topgroupexpress',
			},
			{
				icon: 'instagram',
				url: 'https://www.instagram.com/top_group_express/',
			},
			{
				icon: 'youtube',
				url: 'https://www.youtube.com/@topgroupexpress',
			},
			{
				icon: 'x',
				url: 'https://twitter.com/topgroupexpress',
			},
			{
				icon: 'linkedin',
				url: 'https://www.linkedin.com/company/top-group-express',
			},
		],
	}),
}
</script>

<template>
	<div class="container max-w-[1390px] pt-14 flex flex-col gap-20">
		<div class="w-full flex justify-center mt-14 text-center">
			<generic-fancy-text class="text-primary text-6xl font-bold leading-[5rem]">
				{{ $t('downloadTitle') }}
			</generic-fancy-text>
		</div>
		<div class="rounded-2xl bg-white flex flex-col xl:flex-row-reverse p-10 shadow-card dark:bg-dark dark:shadow-card-dark duration-300">
			<div class="flex items-center justify-center xl:w-1/2">
				<NuxtImg width="500" src="https://cdn.topgroups.travel/websites/assets/images/agencies.png" format="webp,png,jpg" alt="agencies" />
			</div>
			<div class="flex flex-col justify-around xl:w-1/2">
				<div>
					<span class="mb-4 block text-lg font-medium text-primary md:text-[22px]">
						{{ $t('miniTitleAgencyApp') }}
					</span>
					<h2 class="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[35px] md:leading-tight duration-300">
						{{ $t('titleAgencyApp') }}
					</h2>
					<p class="text-base text-bodydark dark:text-body duration-300">
						{{ $t('textAgencyApp') }}
					</p>
				</div>
				<div class="flex gap-2 justify-center flex-wrap pt-5">
					<generic-link-button small-text="Get in on" text="Google Play" icon="playStore" src="https://play.google.com/store/apps/details?id=com.tge.t3agencies" />
					<generic-link-button small-text="Download on the" text="App Store" icon="apple" src="https://apps.apple.com/bg/app/agencies-top-group-express/id1669486980" />
					<generic-link-button small-text="For android" text="Direct Download" icon="downloadCloud" src="https://agencies.topgroupexpress.com/download" />
				</div>
			</div>
		</div>
		<div class="rounded-2xl bg-white flex flex-col xl:flex-row p-10 shadow-card dark:bg-dark dark:shadow-card-dark duration-300">
			<div class="flex items-center justify-center xl:w-1/2">
				<NuxtImg width="500" src="https://cdn.topgroups.travel/websites/assets/images/hoteliers.png" format="webp,png,jpg" alt="hoteliers" />
			</div>
			<div class="flex flex-col justify-around xl:w-1/2">
				<div>
					<span class="mb-4 block text-lg font-medium text-primary md:text-[22px]">
					{{ $t('miniTitleHoteliersApp') }}
				</span>
					<h2 class="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[35px] md:leading-tight duration-300">
						{{ $t('titleHoteliersApp') }}
					</h2>
					<p class="text-base text-bodydark dark:text-body duration-300">
						{{ $t('textHoteliersApp') }}
					</p>
				</div>
				<div class="flex gap-2 justify-center flex-wrap pt-5">
					<generic-link-button small-text="Get in on" text="Google Play" icon="playStore" src="https://play.google.com/store/apps/details?id=com.tge.t3hotelier" />
					<generic-link-button small-text="Download on the" text="App Store" icon="apple" src="https://apps.apple.com/bg/app/hoteliers-top-group-express/id1661978182" />
					<generic-link-button small-text="For android" text="Direct Download" icon="downloadCloud" src="https://hoteliers.topgroupexpress.com/download" />
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	name: 'download',
	methods: {
		openLink(url) {
			window.open(url, '_blank')
		}
	}
}
</script>
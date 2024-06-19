<template>
	<section id="feature" class="relative px-4 pt-[110px]">
		<generic-title :title="$t('featureTitle')" :subtitle="$t('featureDescription')" />
		<div class="container max-w-[1390px]" data-aos="fade-up" data-aos-delay="200" >
			<div class="flex flex-wrap rounded-2xl bg-white pt-14 pb-14 shadow-card dark:bg-dark dark:shadow-card-dark md:pb-1 lg:pt-20 lg:pb-5 xl:px-10 duration-300">
				<feature-item v-for="feature in features" :key="feature.title" :title="$t(feature.title)" :description="$t(feature.description)" :icon="feature.icon" :data-aos="feature.animation" :data-aos-delay="feature.delay" />
			</div>
		</div>
		<generic-icon name="shadowRight" class="absolute top-0 right-0 -z-10 text-[#BEB3FD]" data-aos="fade-left" data-aos-delay="100" />
		<generic-icon name="shadowLeft" class="absolute left-0 -bottom-1/2 -z-10 hidden md:block text-[#FFC960]" data-aos="fade-right" data-aos-delay="100" />
	</section>
</template>

<script>
export default {
	name: "feature",
	data: () => ({
		features: [
			{
				title: 'featureApps',
				description: 'appsDescription',
				icon: 'app',
				animation: 'fade-up',
				delay: 200,
			},
			{
				title: 'featurePrices',
				description: 'pricesDescription',
				icon: 'layers',
				animation: 'fade-up',
				delay: 300,
			},
			{
				title: 'featureDashboard',
				description: 'dashboardDescription',
				icon: 'layout',
				animation: 'fade-up',
				delay: 400,
			},
			{
				title: 'featureAgility',
				description: 'agilityDescription',
				icon: 'speed',
				animation: 'fade-up',
				delay: 200,
			},
			{
				title: 'featureReservations',
				description: 'reservationsDescription',
				icon: 'sliders',
				animation: 'fade-up',
				delay: 300,
			},
			{
				title: 'featureUpdates',
				description: 'updatesDescription',
				icon: 'reload',
				animation: 'fade-up',
				delay: 400,
			},
		]
	})
}
</script>
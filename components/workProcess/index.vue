<template>
	<section id="workProcessSection" class="relative z-10 pt-[110px] p-4">
		<generic-title :title="$t('titleWorkSection')" :subtitle="$t('descriptionWorkSection')" />
		<div class="container max-w-[1390px]" data-aos="fade-up" data-aos-delay="200">
			<div class="rounded-2xl bg-white px-5 pt-14 pb-14 shadow-card dark:bg-dark dark:shadow-card-dark md:pb-1 lg:pt-20 lg:pb-5 xl:px-10 duration-300 flex flex-wrap justify-center">
				<work-process-item v-for="item in items" :key="item.title" :title="$t(item.title)" :description="$t(item.description)" :icon="item.icon" :data-aos="item.animation" :data-aos-delay="item.delay"/>
			</div>
		</div>
		<generic-icon name="shadowRight" class="absolute right-0 top-20 -z-10" data-aos="fade-left" data-aos-delay="100"/>
		<generic-icon name="shadowLeft" class="absolute -top-28 left-0 -z-10 hidden md:block" data-aos="fade-right" data-aos-delay="100"/>
	</section>
</template>

<script>
export default {
	name: 'WorkProcess',
	data: () => ({
		items: [
			{
				title: 'installTitle',
				description: 'installDescription',
				icon: 'download',
				animation: 'fade-up',
				delay: 200,
			},
			{
				title: 'registerTitle',
				description: 'registerDescription',
				icon: 'user',
				animation: 'fade-up',
				delay: 300,
			},
			{
				title: 'accessCodeTitle',
				description: 'accessCodeDescription',
				icon: 'heartHands',
				animation: 'fade-up',
				delay: 400,
			},
		]
	})
}
</script>
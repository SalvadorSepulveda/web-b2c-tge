<template>
	<div class="pt-14">
		<div class="w-full flex justify-center pb-8 mt-10 text-center" >
			<generic-fancy-text class="text-primary text-6xl font-bold leading-[5rem]">{{$t('webinarsAgency')}}</generic-fancy-text>
		</div>
		<div class="h-[1250px] l:h-[700px]" >
			<CalendlyInlineWidget v-bind="optionsAgencies" style="height: 100%" />
		</div>
		<div class="w-full flex justify-center pb-8 mt-10 text-center" >
			<generic-fancy-text class="text-primary text-6xl font-bold leading-[5rem]">{{$t('webinarsHoteliers')}}</generic-fancy-text>
		</div>
		<div class="h-[1250px] l:h-[700px]" >
			<CalendlyInlineWidget v-bind="optionsHoteliers" style="height: 100%" />
		</div>
	</div>
</template>

<script lang="ts" setup>
const { locale } = useI18n();
const optionsAgencies = computed(() => {
	const baseUrls = {
		en: 'https://calendly.com/top-group-express/group-bookings-online',
		fr: 'https://calendly.com/top-group-express/group-bookings-online',
		cn: 'https://calendly.com/top-group-express/group-bookings-online',
		es: 'https://calendly.com/top-group-express/agencias-agiles',
	};
	return {
		url: baseUrls[locale.value] || baseUrls.en,
	};
});

const optionsHoteliers = {
	url: 'https://calendly.com/top-group-express/30min',
}
</script>

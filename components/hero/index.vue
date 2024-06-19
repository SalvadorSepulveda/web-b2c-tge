<template>
	<section id="hero" class="pt-[150px] lg:pt-[200px] px-4">
		<div class="container lg:max-w-[1300px] flex items-center gap-20 flex-col lg:flex-row">
			<div class="flex flex-col gap-8" data-aos="fade-up" data-aos-delay="200">
				<h1 class=" text-4xl xs:text-6xl lg:text-5xl max-w-[600px] font-bold text-black dark:text-white duration-300">
					<span v-if="$i18n.locale === 'cn'">
						<generic-fancy-text>{{ $t('title1')}}</generic-fancy-text>
						{{ $t('title2')}}
						<generic-fancy-text>{{ $t('title3')}}</generic-fancy-text>
						{{ $t('title4')}}
					</span>
					<span v-else>
						{{ $t('title1')}}
						<generic-fancy-text>{{ $t('title2')}}</generic-fancy-text>
						{{ $t('title3')}}
						<generic-fancy-text>{{ $t('title4')}}</generic-fancy-text>
					</span>
				</h1>
				<p class="text-bodywhite dark:text-body duration-300">
					{{ $t('subtitle') }}
				</p>
				<hero-video-button :title="$t('titleVideo')" :description="$t('descriptionVideo')" :url="urlByLocale" />
			</div>
			<hero-image src="https://cdn.t3s.es/website/screens/hero.webp" data-aos="fade-up" data-aos-delay="300" />
		</div>
	</section>
</template>
<script>
export default {
	name: 'Hero',
	computed: {
		urlByLocale() {
			switch (this.$i18n.locale) {
				case 'cn':
					return 'https://www.youtube.com/watch?v=00xfTKjnLFw'
				case 'en':
					return 'https://www.youtube.com/watch?v=kLI3v6quZqU'
				case 'es':
					return 'https://www.youtube.com/watch?v=iv0BfTlx9uU'
				default:
					return 'https://www.youtube.com/watch?v=kLI3v6quZqU'
			}
		}
	}
}
</script>
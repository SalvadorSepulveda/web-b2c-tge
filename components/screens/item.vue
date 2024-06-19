<template>
	<div class="swiper-slide">
		<div class="mx-auto w-full max-w-[250px] xs:max-w-[265px] md:max-w-[215px] lg:max-w-[265px]">
			<NuxtImg loading="lazy" format="webp,png,jpg" :src="src" class="mx-auto max-w-full w-full" alt="screen" />
		</div>
	</div>
</template>

<script>
export default {
	name: "screensItem",
	props: {
		src: {
			type: String,
			default: ""
		}
	}
}
</script>
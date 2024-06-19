<template>
	<div
		class="relative z-10 mx-auto w-full max-w-[500px] pt-8 flex justify-center"
	>
		<NuxtImg
			width="350"
		  	:src="src"
		  	alt="hero-image"
			format="webp,png,jpg"
		/>
		<div class="max-auto absolute top-0 left-0 right-0 -z-10 aspect-square w-full rounded-full bg-gradient-1 hidden xs:block" >
			<generic-icon name="stars" width="65" class="absolute top-5 right-0" data-aos="zoom-in" data-aos-delay="600" />
			<generic-icon name="waves" width="65" class="absolute bottom-10 left-0" data-aos="fade-left" data-aos-delay="800" />
		</div>
	</div>
</template>

<script>
export default {
	name: "heroImage",
	props: {
		src: {
			type: String,
			required: true
		}
	}
}
</script>
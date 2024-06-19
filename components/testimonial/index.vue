<template>
	<section id="testimonials" class="py-20 relative z-10" >
		<generic-title :title="$t('titleClients')" :subtitle="$t('descriptionClients')" />
		<h3 class="mb-4 text-xl text-center font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px]" data-aos="fade-up" data-aos-delay="100" >
			<span class="duration-300">{{ $t('hotelier') }}</span>
		</h3>
		<div class="container overflow-hidden lg:max-w-[1160px] flex flex-wrap" >
			<testimonial-card
				v-for="item in testimonialsHotels"
				:key="item"
				:title="item.title"
				:subtitle="item.subtitle"
				:text="item.text"
				:image="item.src"
				:rate="5"
				:data-aos="item.animation"
				:data-aos-delay="item.delay"
			/>
		</div>
		<h3 class="mb-4 text-xl text-center font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px]" data-aos="fade-up" data-aos-delay="100" >
			<span class="duration-300">{{ $t('agency') }}</span>
		</h3>
		<div class="container overflow-hidden lg:max-w-[1160px] flex flex-wrap">
			<testimonial-card
				v-for="item in testimonialsAgencies"
				:key="item"
				:title="item.title"
				:subtitle="item.subtitle"
				:text="item.text"
				:image="item.src"
				:rate="5"
				:data-aos="item.animation"
				:data-aos-delay="item.delay"
			/>
		</div>
		<generic-icon name="shadowLeft" class="absolute top-8 left-0 -z-10 hidden md:block" data-aos="fade-right" data-aos-delay="100" />
		<generic-icon name="shadowRight" class="absolute bottom-3 right-0 -z-10" data-aos="fade-left" data-aos-delay="100" />
	</section>
</template>

<script>
export default {
	name: "testimonial",
	data: () => ({
		testimonialsHotels: [
			{
				title: 'Juan Rodríguez - Grupo Bluebay Hoteles',
				subtitle: 'Dpto de Grupos',
				text: 'Muy innovador, a seguir vendiendo!',
				rate: 5,
				src: 'https://cdn.t3s.es/website/logos/bluebay.webp',
				animation: 'fade-up',
				delay: 200,
			},
			{
				title: 'Fernando Corzo - Grupo Abades',
				subtitle: 'Director Comercial',
				text: 'Necesario, útil, sorprendente, lo mejor hasta el momento para cotizar grupos.',
				rate: 5,
				src: 'https://cdn.t3s.es/website/logos/abades.webp',
				animation: 'fade-up',
				delay: 400,
			},
			{
				title: 'Jordi - Hotel Catalonia Verdi',
				subtitle: 'Director',
				text: 'Enganchadísimo, mientras más rápido cotizo, más vendo!',
				rate: 5,
				src: 'https://cdn.t3s.es/website/logos/catalonia-verdi.webp',
				animation: 'fade-up',
				delay: 200,
			},
			{
				title: 'Jesus Graciliano - Barceló Hoteles',
				subtitle: 'Cluster zona sur',
				text: 'En constante desarrollo, adapntándose a nuestras necesidades.',
				rate: 5,
				src: 'https://cdn.t3s.es/website/logos/barcelo.webp',
				animation: 'fade-up',
				delay: 400,
			}
		],
		testimonialsAgencies: [
			{
				title: 'Grupo Cybas',
				subtitle: 'Cyberagencias',
				text: 'Herramienta necesaria, único especialista en consolidación de reservas de hoteles para grupos',
				rate: 5,
				src: 'https://cdn.t3s.es/website/logos/cybas.webp',
				animation: 'fade-up',
				delay: 200,
			},
			{
				title: 'Kayuan',
				subtitle: 'Turist department',
				text: 'Útil, único, rápido, lo que esperamos de un proveedor brillante',
				rate: 5,
				src: 'https://cdn.t3s.es/website/logos/kaytrip.webp',
				animation: 'fade-up',
				delay: 400,
			},
			{
				title: 'El Corte Inglés León',
				subtitle: 'María del Mar',
				text: 'Esto es una maravilla...',
				rate: 5,
				src: 'https://cdn.t3s.es/website/logos/el-corte-ingles.webp',
				animation: 'fade-up',
				delay: 200,
			},
			{
				title: 'Destinarium Viajes',
				subtitle: 'Ángel',
				text: 'Siempre con Top, a cualquier destino. Reservas garantizadas.',
				rate: 5,
				src: 'https://cdn.t3s.es/website/logos/destinatarium-viajes.webp',
				animation: 'fade-up',
				delay: 400,
			},
			{
				title: 'TBO',
				subtitle: 'Catherine',
				text: 'A new world of product with Top Group Express',
				rate: 5,
				src: 'https://cdn.t3s.es/website/logos/tbo.webp',
				animation: 'fade-up',
				delay: 200,
			},
			{
				title: 'Mogu',
				subtitle: 'Sara',
				text: 'step one, eficaces, el complemento perfecto totalmente adaptado',
				rate: 5,
				src: 'https://cdn.t3s.es/website/logos/mogu.webp',
				animation: 'fade-up',
				delay: 400,
			}
		]
	}),
}
</script>

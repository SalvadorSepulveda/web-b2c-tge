<template>
	<section id="clients" class="pt-5 pb-2 bg-[#F8FAFB] dark:bg-[#15182B] duration-300" >
		<div class="container overflow-hidden lg:max-w-[1200px]" >
			<div class="flex flex-wrap items-center justify-center">
				<clients-item v-for="(client, index) in clients" :key="index" :name="client.name" :image="client.image" :data-aos="client.animation" :data-aos-delay="client.delay"/>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "clients",
	data: () => ({
		clients: [
			{
				name: "Airmet",
				image: "https://cdn.t3s.es/website/clients/airmet.webp",
				animation: "fade-up",
				delay: "100",
			},
			{
				name: "Didatravel",
				image: "https://cdn.t3s.es/website/clients/dida-travel.webp",
				animation: "fade-up",
				delay: "200",
			},
			{
				name: "Viajes El Corte Inglés",
				image: "https://cdn.t3s.es/website/clients/viajes-el-corte-ingles.webp",
				animation: "fade-up",
				delay: "300",
			},
			{
				name: "Envol Espace",
				image: "https://cdn.t3s.es/website/clients/envol-espace.webp",
				animation: "fade-up",
				delay: "400",
			},
			{
				name: "Exa Travel",
				image: "https://cdn.t3s.es/website/clients/exa-travel.webp",
				animation: "fade-up",
				delay: "500",
			},
			{
				name: "Kaytrip",
				image: "https://cdn.t3s.es/website/clients/kaytrip.webp",
				animation: "fade-up",
				delay: "600",
			},
			{
				name: "TBO",
				image: "https://cdn.t3s.es/website/clients/tbo.webp",
				animation: "fade-up",
				delay: "700",
			},
			{
				name: "Travel Compositor",
				image: "https://cdn.t3s.es/website/clients/travel-compositor.webp",
				animation: "fade-up",
				delay: "800",
			},
			{
				name: "Zafiro Tours",
				image: "https://cdn.t3s.es/website/clients/zafiro-tours.webp",
				animation: "fade-up",
				delay: "900",
			}
		]
	}),
}
</script>
<template>
	<Hero />
	<Feature />
	<About />
	<Work-process />
	<Screens />
	<Clients />
	<Testimonial />
	<Faq />
	<Contact />
</template>

<script setup>
	useHead({
		title: 'Top Group Express',
		htmlAttrs: { lang: 'en-US' },
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: 'https://cdn.topgroups.travel/websites/assets/images/favicon.png' },
		],
		meta: [
			{
				name: 'description',
				content: 'Book a hotel for a group of more than 7 people online in just a few clicks right now!'
			},
			{
				property: 'og:title',
				content: 'Top Group Express',
			},
			{
				property: 'og:description',
				content: 'Book a hotel for a group of more than 7 people online in just a few clicks right now!'
			},
			{
				property: 'og:image',
				content: 'https://cdn.topgroups.travel/websites/assets/images/og-img.png'
			},
			{
				property: 'og:url',
				content: 'https://topgroupexpress.com/'
			},
			{
				name: 'twitter:title',
				content: 'Top Group Express',
			},
			{
				name: 'twitter:description',
				content: 'Book a hotel for a group of more than 7 people online in just a few clicks right now!'
			},
			{
				name: 'twitter:image',
				content: 'https://cdn.topgroups.travel/websites/assets/images/og-img.png'
			},
			{
				name: 'twitter:card',
				content: 'summary_large_image'
			}
		],
	})
</script>
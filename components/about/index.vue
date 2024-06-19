<template>
	<section id="about" class="relative pt-[150px]" >
		<div class="container lg:max-w-[1120px]">
			<about-card
				:smalltitle="$t('smallTitleAgencies')"
				:bigtitle="$t('bigTitleAgencies')"
				:description="$t('descriptionAgencies')"
				:list="[$t('oneListAgencies'), $t('twoListAgencies'), $t('threeListAgencies'), $t('fourListAgencies')]"
				image="https://cdn.t3s.es/website/screens/agencies.webp"
				alt="screen-agencies"
				left
			/>
			<about-card
				class="pt-32"
				:smalltitle="$t('smallTitleHoteliers')"
				:bigtitle="$t('bigTitleHoteliers')"
				:description="$t('descriptionHoteliers')"
				:list="[$t('oneListHoteliers'), $t('twoListHoteliers'), $t('threeListHoteliers'), $t('fourListHoteliers')]"
				image="https://cdn.t3s.es/website/screens/hoteliers.webp"
				alt="screen-hoteliers"
				right
			/>
		</div>
		<generic-icon name="circleRight" class="absolute right-0 top-36 -z-10" data-aos="fade-left" data-aos-duartion="100" />
	</section>
</template>
<script setup lang="ts">
</script>
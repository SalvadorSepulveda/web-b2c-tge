<template>
	<section id="faq" class="relative z-10 bg-[#F8FAFB] py-[110px] dark:bg-[#15182B] duration-300"	>
		<generic-title :title="$t('frequentAnswerTitle')" :subtitle="$t('frequentAnswerDescription')" />
		<div class="container">
			<div class="faqs mx-auto w-full max-w-[785px]" data-aos="fade-up" data-aos-delay="200">
				<div class="rounded-lg bg-white px-6 py-[6px] shadow-card dark:bg-black dark:shadow-card-dark duration-300">
					<faq-card :title="$t('question1')">
						{{ $t('answer1') }}
					</faq-card>
					<faq-card :title="$t('question2')">
						{{ $t('answer2') }}
						<br><br>
						{{ $t('question2_1') }}
						<br><br>
						{{ $t('answer2_1') }}
						<br><br>
						{{ $t('question2_2') }}
						<br><br>
						{{ $t('answer2_2') }}
					</faq-card>
					<faq-card :title="$t('question3')">
						{{ $t('answer3')  }}
						<br><br>
						{{ $t('question3_1') }}
						<br><br>
						{{ $t('answer3_1') }}
						<br><br>
						{{ $t('question3_2') }}
						<br><br>
						{{ $t('answer3_2') }}
						<br><br>
						{{ $t('information1') }}
						<br>
						{{ $t('information2') }}
						<br>
						{{ $t('information3') }}
						<br><br>
						{{ $t('answer3_3') }}
					</faq-card>
					<faq-card :title="$t('question4')">
						{{ $t('answer4') }}
					</faq-card>
					<faq-card :title="$t('question5')">
						{{ $t('answer5') }}
						<a href="https://agencies.topgroupexpress.com/" class="text-primary">{{ $t('answer5TextLink')}}</a>
						{{ $t('answer5_1') }}
					</faq-card>
				</div>
			</div>
		</div>
		<generic-icon name="circleRight" class="absolute right-0 -top-24 -z-10" data-aos="fade-left" data-aos-duartion="100"/>
		<generic-icon name="circleLeft" class="absolute left-0 -bottom-24 -z-10" data-aos="fade-right" data-aos-duartion="100"/>
	</section>
</template>
<script setup lang="ts">
</script>
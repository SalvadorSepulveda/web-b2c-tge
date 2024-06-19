<template>
	<main>
		<section class="pt-[150px] pb-[110px] lg:pt-[220px]">
			<div class="container overflow-hidden lg:max-w-[1250px]">
				<div class="mx-auto w-full max-w-[570px]">
					<div
						class="mb-8 w-full"
					>
						<NuxtImg
							alt="404"
							class="mx-auto max-w-full w-full"
							src="https://cdn.topgroups.travel/websites/assets/images/404.png"
						/>
					</div>

					<div
						class="text-center"
					>
						<h2
							class="mb-[18px] text-[28px] font-bold text-black dark:text-white sm:text-[35px]"
						>
							{{ $t('errorTitle') }}
						</h2>
						<p
							class="mb-[30px] text-base font-medium text-body sm:text-lg"
						>
							{{ $t('errorText') }}
						</p>

						<NuxtLink
							class="inline-flex justify-center rounded-md bg-primary py-3 px-8 text-base font-medium text-white hover:bg-opacity-90"
							:to="'/' + $i18n.locale"
						>
							{{ $t('errorButton') }}
						</NuxtLink>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script setup>
const error = useError();
</script>
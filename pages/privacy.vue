<template>
	<div class="relative">
		<div class="z-10 max-w-[1100px] mx-auto text-bodywhite duration-300 p-5 dark:text-white flex flex-col gap-8" >
			<div class="flex flex-col gap-2">
				<div class="w-full flex justify-center py-8">
					<generic-fancy-text class="text-primary text-6xl font-bold pt-14 leading-[5rem]">{{ $t('titlePrivacy') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionPrivacy') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleResponsable') }}</generic-fancy-text>
				</div>
				<ul>
					<li>
						{{ $t('razonSocial') }}
					</li>
					<li>
						{{ $t('titular') }}
					</li>
					<li>
						{{ $t('domicilioSocial') }}
					</li>
					<li>
						{{ $t('codigoPostal') }}
					</li>
					<li>
						{{ $t('poblacion') }}
					</li>
					<li>
						{{ $t('provincia') }}
					</li>
					<li>
						{{ $t('cif') }}
					</li>
					<li>
						{{ $t('telefonoSocial') }}
					</li>
					<li>
						{{ $t('correoElectronico') }} product@topgroupexpress.com
					</li>
					<li>
						{{ $t('datosRegistrales') }}
					</li>
				</ul>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleNormativo') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionNormativo') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleProteccion') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionProteccion') }}
				</p>
				<ul class="list-disc ml-10">
					<li class="pb-3">
				<span>
					{{ $t('list1Proteccion') }}
				</span>
					</li>
					<li class="pb-3">
				<span>
					{{ $t('list2Proteccion') }}
				</span>
					</li>
					<li class="pb-3">
				<span>
					{{ $t('list3Proteccion') }}
				</span>
					</li>
				</ul>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleObtencion') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionObtencion') }}
				</p>
				<ul class="list-disc ml-10">
					<li class="pb-3">
				<span>
					{{ $t('list1Obtencion') }}
				</span>
					</li>
					<li class="pb-3">
				<span>
					{{ $t('list2Obtencion') }}
				</span>
					</li>
					<li class="pb-3">
				<span>
					{{ $t('list3Obtencion') }}
				</span>
					</li>
				</ul>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleDerechosUsuario') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionDerechosUsuario1_1') }} product@topgroupexpress.com {{ $t('descriptionDerechosUsuario1_2') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleFinalidad') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionFinalidad') }}
				</p>
				<ul class="list-disc ml-10">
					<li class="pb-3">
				<span>
					{{ $t('list1Finalidad') }}
				</span>
					</li>
					<li class="pb-3">
				<span>
					{{ $t('list2Finalidad') }}
				</span>
					</li>
					<li class="pb-3">
				<span>
					{{ $t('list3Finalidad') }}
				</span>
					</li>
				</ul>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleSeguridadPersonales') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionSeguridadPersonales') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleContenidoTerceros') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionContenidoTerceros') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleLegitimacionDatos') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionLegitimacionDatos') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleConservacionDatos') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionConservacionDatos') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleExactitudDatos') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionExactitudDatos') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleCambioPrivacidad') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionCambioPrivacidad') }}
				</p>
			</div>
			<div class="flex flex-col gap-2 italic underline text-sm">
				<p>
					{{ $t('lastUpdateTerms') }}
				</p>
			</div>
		</div>
		<generic-icon name="shadowRight" class="absolute top-0 right-0 -z-10 text-[#FFC960]" data-aos="fade-left" data-aos-duartion="100" />
		<generic-icon name="shadowLeft" class="absolute bottom-1/2 left-0 -z-10 hidden md:block text-[#BEB3FD]" data-aos="fade-right" data-aos-duartion="100" />
		<generic-icon name="shadowLeft" class="absolute bottom-20 left-0 -z-10 hidden md:block text-[#FFC960]" data-aos="fade-right" data-aos-duartion="100" />
		<generic-icon name="shadowRight" class="absolute right-0 top-1/2 -z-10 text-[#BEB3FD]" data-aos="fade-left" data-aos-duartion="100" />
	</div>
</template>
<script setup lang="ts">
</script>
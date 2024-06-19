<template>
	<div class="relative">
		<div class="z-10 max-w-[1100px] mx-auto text-bodywhite dark:text-body duration-300 p-5 dark:text-white flex flex-col gap-8" >
			<div class="flex flex-col gap-2">
				<div class="w-full flex justify-center py-8">
					<generic-fancy-text class="text-primary text-6xl font-bold pt-14 leading-[5rem]">{{ $t('titleTerms') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionTerms1') }}
				</p>
				<p>
					{{ $t('descriptionTerms2') }}
				</p>
				<p>
					{{ $t('descriptionTerms3') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleSocial') }}</generic-fancy-text>
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
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titlePrincipios') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionPrincipios') }}
				</p>
				<ul class="list-disc ml-10">
					<li class="pb-3">
				<span class="font-bold">
					{{ $t('principioTitle1') }}
				</span>
						<span>
					{{ $t('principioText1') }}
				</span>
					</li>
					<li class="pb-3">
				<span class="font-bold">
					{{ $t('principioTitle2') }}
				</span>
						<span>
					{{ $t('principioText2') }}
				</span>
					</li>
					<li class="pb-3">
				<span class="font-bold">
					{{ $t('principioTitle3') }}
				</span>
						<span>
					{{ $t('principioText3') }}
				</span>
					</li>
					<li class="pb-3">
				<span class="font-bold">
					{{ $t('principioTitle4') }}
				</span>
						<span>
					{{ $t('principioText4') }}
				</span>
					</li>
				</ul>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titlePersonales') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionPersonales') }}
				</p>
				<p>
					{{ $t('textPersonales') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleDerechos') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionDerechos') }}
				</p>
				<ul class="list-disc ml-10">
					<li class="pb-3">
				<span>
					{{ $t('derecho1') }}
				</span>
					</li>
					<li class="pb-3">
				<span>
					{{ $t('derecho2') }}
				</span>
					</li>
					<li class="pb-3">
				<span>
					{{ $t('derecho3') }}
				</span>
					</li>
					<li class="pb-3">
				<span>
					{{ $t('derecho4') }}
				</span>
					</li>
					<li class="pb-3">
				<span>
					{{ $t('derecho5') }}
				</span>
					</li>
				</ul>
				<p>
					{{ $t('derechop1') }}
				</p>
				<p>
					{{ $t('derechop2_1') }} product@topgroupexpress.com {{ $t('derechop2_2') }}
				</p>
				<p>
					{{ $t('derechop3') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleTratamiento') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionTratamiento') }}
				</p>
				<p>
					{{ $t('tratamientoSection1') }}
				</p>
				<ul class="list-disc ml-10">
					<li class="pb-3">
				<span class="font-bold">
					{{ $t('tratamientoTitle1') }}
				</span>
						<span>
					{{ $t('tratamientoText1') }}
				</span>
					</li>
				</ul>
				<p>
					{{ $t('tratamientoSection2') }}
				</p>
				<ul class="list-disc ml-10">
					<li class="pb-3">
				<span>
					{{ $t('tratamiento1') }}
				</span>
					</li>
					<li class="pb-3">
				<span>
					{{ $t('tratamiento2') }}
				</span>
					</li>
					<li class="pb-3">
				<span>
					{{ $t('tratamiento3') }}
				</span>
					</li>
					<li class="pb-3">
				<span>
					{{ $t('tratamiento4') }}
				</span>
					</li>
					<li class="pb-3">
				<span>
					{{ $t('derecho5') }}
				</span>
					</li>
				</ul>
				<p>
					{{ $t('tratamientoSection3') }}
				</p>
				<ul class="list-disc ml-10">
					<li class="pb-3">
						<a href="">
							Facebook
						</a>
					</li>
					<li class="pb-3">
						<a href="">
							Twitter
						</a>
					</li>
					<li class="pb-3">
						<a href="">
							Linkedin
						</a>
					</li>
					<li class="pb-3">
						<a href="">
							Youtube
						</a>
					</li>
					<li class="pb-3">
						<a href="">
							Instagram
						</a>
					</li>
				</ul>
				<p>
					{{ $t('tratamientop2') }}
				</p>
				<p>
					{{ $t('tratamientop3') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleSeguridad') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionSeguridad') }}
				</p>
				<p>
					{{ $t('textSeguridad1') }} Cloudflare. {{ $t('textSeguridad2') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleContenido') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionContenido') }}
				</p>
				<p>
					{{ $t('textContenido') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleCookies') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionCookies') }}
				</p>
				<p>
					{{ $t('textCookies') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleLegitimacion') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionLegitimacion') }}
				</p>
				<p>
					{{ $t('textLegitimacion') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleCategorias') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionCategorias') }}
				</p>
				<ul class="list-disc ml-10">
					<li class="pb-3">
						{{ $t('categorias1') }}
					</li>
				</ul>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleConservacion') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionConservacion') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleNavegacion') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionNavegacion1_1') }} https://topgroupexpress.com {{ $t('descriptionNavegacion1_2') }}
				</p>
				<p>
					{{ $t('textNavegacion') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleExactitud') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionExactitud') }}
				</p>
				<p>
					{{ $t('textExactitud') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleAceptacion') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionAceptacion') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleRevocabilidad') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionRevocabilidad1_1') }} product@topgroupexpress.com {{ $t('descriptionRevocabilidad1_2') }}
				</p>
				<p>
					{{ $t('textRevocabilidad') }}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="w-full flex pt-8">
					<generic-fancy-text class="text-primary text-3xl font-bold">{{ $t('titleCambio') }}</generic-fancy-text>
				</div>
				<p>
					{{ $t('descriptionCambio') }}
				</p>
				<p>
					{{ $t('textCambio') }}
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
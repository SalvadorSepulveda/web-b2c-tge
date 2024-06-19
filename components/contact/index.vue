<template>
	<section id="contact" class="relative z-10 py-20">
		<generic-title :title="$t('formTitle')" :subtitle="$t('formDescription')" />
		<div class="container">
			<div class="mx-auto w-full max-w-[925px]" data-aos="fade-up" data-aos-delay="200">
				<div class=" rounded-lg bg-[#F8FAFB] px-8 py-10 shadow-card dark:bg-[#15182B] dark:shadow-card-dark sm:px-10 flex flex-wrap duration-300">
					<contact-input :placeholder="$t('insertName')" name="name" type="text" v-model="name" />
					<contact-input :placeholder="$t('insertCompany')" name="company" type="text" v-model="company" />
					<contact-input :placeholder="$t('insertEmail')" name="email" type="email" v-model="email" />
					<contact-input :placeholder="$t('insertPhone')" name="phone" type="tel" v-model="phoneNumber" />
					<contact-textarea :placeholder="$t('insertMessage')" name="message" v-model="message" />
					<div class="w-full px-[22px]">
						<div class="text-center">
							<p class="mb-5 text-center text-base text-body">
								{{ $t('textAccept') }}
							</p>
							<generic-button :text="$t('buttonContact')" @click="onSubmitFormClicked" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import useNotify from "~/composables/notify.js";
import { ref } from 'vue';

const config = useRuntimeConfig();
const { setMessage } = useNotify();

const name = ref('');
const company = ref('');
const email = ref('');
const phoneNumber = ref('');
const message = ref('');

function isValidEmail(inputEmail) {
	const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return regex.test(inputEmail);
}

const onSubmitFormClicked = async () => {
	if (!name.value || !email.value || !phoneNumber.value || !message.value) {
		setMessage('sendWarning', 'warning');
		return;
	}

	if (!isValidEmail(email.value)) {
		setMessage('sendWarningEmail', 'warning');
		return;
	}

	try {
		const response = await fetch(`${config.public.backendUrl}/ext/website/contact/send`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: name.value,
				company: company.value,
				email: email.value,
				phone_number: phoneNumber.value,
				message: message.value,
				domain: config.public.siteUrl,
				url: config.public.siteUrl,
				source: 'home',
			}),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		await response.json();
		setMessage('sendSuccessfully', 'success');
		name.value = '';
		company.value = '';
		email.value = '';
		phoneNumber.value = '';
		message.value = '';
	} catch (error) {
		console.error('Hubo un problema con la petición Fetch:', error);
		setMessage('sendError', 'error');
	}
};
</script>

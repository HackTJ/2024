<script>
	import LogoFacebook from '@svicons/ionicons-solid/logo-facebook.svelte';
	import LogoInstagram from '@svicons/ionicons-solid/logo-instagram.svelte';
	import LogoLinkedIn from '@svicons/ionicons-solid/logo-linkedin.svelte';
	import LogoTwitter from '@svicons/ionicons-solid/logo-twitter.svelte';
	import LogoGithub from '@svicons/ionicons-solid/logo-github.svelte';
	import Contact from '@svicons/ionicons-solid/mail.svelte';

	let classNames = '';
	export { classNames as class };
</script>

<div
	class="py-8 px-8 md:px-12 w-full bg-theme-100 sm:flex sm:justify-center sm:justify-end items-center text-blackberry-800 ${classNames}"
>
	<div class="flex justify-evenly space-x-4 sm:space-x-8 sm:ml-auto">
		<a href="mailto:hello@hacktj.org" target="_blank" class="hover:text-blackberry-500">
			<Contact width="30px" /></a
		>
		<a href="https://twitter.com/hacktjofficial" target="_blank" class="hover:text-blackberry-500"
			><LogoTwitter width="30px" /></a
		>
		<a
			href="https://www.linkedin.com/company/hacktj"
			target="_blank"
			class="hover:text-blackberry-500"><LogoLinkedIn width="30px" /></a
		>
		<a
			href="https://www.instagram.com/hacktjofficial"
			target="_blank"
			class="hover:text-blackberry-500"><LogoInstagram width="30px" /></a
		>
		<a
			href="https://www.facebook.com/HackTJOfficial/"
			target="_blank"
			class="hover:text-blackberry-500"><LogoFacebook width="30px" /></a
		>
		<a href="https://github.com/HackTJ" target="_blank" class="hover:text-blackberry-500"
			><LogoGithub width="30px" /></a
		>
	</div>
</div>

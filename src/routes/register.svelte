<script>
	import { base } from '$app/paths';

	import Home from '@svicons/ionicons-solid/home.svelte';
	import RegistrationColumn from '../components/Registration/RegistrationColumn.svelte';
	import Footer from '../components/Footer.svelte';

	import { event, registration } from '../constants';
</script>

<section class="text-blueberry-200 flex flex-col justify-between min-h-screen">
	<div class="p-8 md:p-12 flex flex-col grow">
		<a href="{base}/"><Home width="32px" class="text-theme-100 hover:text-theme-200" /></a>
		<h1 class="text-5xl font-black text-white mt-8 mb-2">Registration</h1>
		<p>
			{#if registration.participant.notOpenYet}
				Participant registration will open on {registration.participant.open.format(
					'MMMM D, YYYY [at] h:mm a'
				)} and will close on
				{registration.participant.close.format('MMMM D, YYYY [at] h:mm a')}.
			{:else if registration.participant.isClosed}
				Registration for participants closed on {registration.participant.close.format(
					'MMMM D, YYYY [at] h:mm a'
				)}.
				{#if registration.other.isOpen}
					You may still register to be a mentor, judge, volunteer, photographer, or workshop host.
				{/if}
			{:else}
				Registration opened on {registration.participant.open.format('MMMM D, YYYY [at] h:mm a')} and
				will close on {registration.participant.close.format('MMMM D, YYYY [at] h:mm a')}.
			{/if}
			All attendees must adhere to the
			<a
				class="text-theme-100 hover:text-theme-200 underline"
				href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
				target="_blank"
				rel="noreferrer"><b>MLH Code of Conduct</b></a
			>.<br /><br />
		</p>
		<div
			class="flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-12 mt-4 h-full grow"
		>
			<RegistrationColumn
				title="Participant"
				link="https://forms.gle/8CZHKSg2csL9ufEh6"
				linkText="Participant Registration"
				closed={!registration.participant.isOpen}
			>
				<p>
					Participants must be current high school students attending Fairfax County Public Schools.
					Computer science and engineering experience is not necessary, as we&#39;ll have workshops
					and mentors so you can learn.
				</p>
				<br />
				<p>
					Please note that registering alone does not guarantee you will receive a ticket. Admission
					decisions will be made based on a variety of factors including the date/time you register.
				</p>
			</RegistrationColumn>
			<RegistrationColumn
				title="Volunteer"
				link="https://www.signupgenius.com/go/70A0F49A8AD22AAF58-47414114-hacktj"
				linkText="Volunteer Registration"
				closed={!registration.other.isOpen}
			>
				<p>
					Volunteers help with various tasks during the hackathon, such as checking in participants,
					setting up food, and more. Computer science and engineering experience is not required.
				</p>
			</RegistrationColumn>
			<RegistrationColumn
				title="Mentor/Judge"
				link="https://forms.gle/vCxvt3tuCYoptUF76"
				linkText="Mentor/Judge Registration"
				closed={!registration.other.isOpen}
			>
				<p>
					Judges must be present during the entire judging process (8:00 a.m. to 12:00 a.m. on
					Sunday), but not necessarily during the entire hackathon. Computer science and engineering
					experience is preferred but not required.
				</p>
				<br />
				<p>
					Mentors help students if they have any technical questions, and don't have to be present
					the entire time. Computer science and engineering experience is required.
				</p>
			</RegistrationColumn>
			<RegistrationColumn
				title="Workshop Host"
				link="https://forms.gle/YqTw3Ng21dxeiMk5A"
				linkText="Workshop Host Registration"
				closed={!registration.other.isOpen}
			>
				<p>
					Workshop Hosts hold a session on a CS topic of their liking, providing participants a
					lesson on the topic and resources to learn more. These workshops will be conducted on
					{event.start.format('dddd, MMMM D')} from 2pm to 6pm. Hosting a workshop comes with perks like
					free food and service hours!
				</p>
				<br />
				<p>
					Because of county regulations, workshop hosts who are not HackTJ participants must leave
					by 10pm on {event.start.format('dddd, MMMM D')}.
				</p>
			</RegistrationColumn>
			<RegistrationColumn
				title="Photographer"
				link="https://forms.gle/BYahZGAbYFdveiU18"
				linkText="Photographer Registration"
				closed={!registration.other.isOpen}
			>
				<p>
					Photographers are only needed for 2 hours at a time (aside from the 2.5 hr shift on
					Sunday), but can sign up for multiple shifts. Participants can also be photographers.
				</p>
				<br />
				<p>
					Because of county regulations, only photographers who are part of Fairfax County Public
					Schools will be able to sign up. Additionally, only HackTJ participants can sign up for
					shifts after 10pm on {event.start.format('dddd, MMMM D')}.
				</p>
			</RegistrationColumn>
		</div>
	</div>
	<Footer class="mt-8" />
</section>

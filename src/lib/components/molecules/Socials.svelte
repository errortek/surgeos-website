<script>
	import TelegramIcon from '$lib/icons/socials/telegram.svelte';
	import GitHubIcon from '$lib/icons/socials/github.svelte';
	import LinkedInIcon from '$lib/icons/socials/linkedin.svelte';
	import EmailIcon from '$lib/icons/socials/email.svelte';
	import RssIcon from '$lib/icons/rss.svelte';
	import MastodonIcon from '$lib/icons/socials/mastodon.svelte';
</script>

<div class="socials">
	<a
		href="#"
		target="https://t.me/jpbROM"
		rel="noopener noreferrer"
		title="Join the Telegram group!"
	>
	</a>
	<a
		href="#"
		target="https://github.com/Surge-OS"
		rel="noopener noreferrer"
		title="Take a look at the source code!"
	>
	</a>
	<a
		href="#"
		target="https://discord.gg/CJcuGb7ZHA"
		rel="noopener noreferrer"
		title="Join the Discord server!"
	>
	</a>
	<a
		href="#"
		target="https://www.youtube.com/@errortechyt"
		rel="noopener noreferrer"
		title="Take a look at ErrorTek's YT channel!"
	>
	</a>
</div>

<style lang="scss">
	@import '../../scss/breakpoints.scss';
	.socials {
		display: flex;
		align-items: center;
		gap: 20px;

		a {
			transition: all 0.2s ease-in-out;
			width: 24px;
			color: var(--color--text);
			fill: var(--color--text);

			&:hover {
				color: var(--color--primary);
				fill: var(--color--primary);
				filter: drop-shadow(0px 0px 3px var(--color--primary));
			}
		}
	}
</style>

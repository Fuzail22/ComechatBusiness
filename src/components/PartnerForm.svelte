<script>
	import SpecialButton from '../elements/SpecialButton.svelte';
</script>

<div
	class="w-11/12 md:w-[528px] min-h-[434px] rounded-2xl mx-auto mt-2 mb-5 md:mt-8 px-4 py-2 text-textc1-75 font-medium"
	style="background-color: rgba(250, 250, 255, 0.08);border: 1px solid rgba(250, 250, 255, 0.04);
backdrop-filter: blur(100px);box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);"
>
	<span class="text-3xl text-textc1-95">Become a Partner</span>
	<form class="mt-6">
		<div class="form-group">
			<label for="fullname">Full name</label>
			<input type="text" id="fullname" placeholder="Type your name here..." required />
		</div>
		<div class="form-group">
			<label for="email">Email address</label>
			<input type="email" id="email" placeholder="Type your email here..." required />
		</div>
		<div class="form-group">
			<label for="company">Company's name</label>
			<input type="text" id="company" placeholder="Type your company’s name" required />
		</div>
		<SpecialButton text="Submit Application" />
	</form>
</div>

<style>
	input {
		width: 100%;
		min-height: 44px;
		padding: 0.7em;
		background: rgba(250, 250, 255, 0.02);
		border: 1px solid rgba(250, 250, 255, 0.1);
		border-radius: 14px;
	}

	.form-group {
		margin-bottom: 1.2em;
	}

	label {
		display: block;
		margin-bottom: 5px;
	}
</style>

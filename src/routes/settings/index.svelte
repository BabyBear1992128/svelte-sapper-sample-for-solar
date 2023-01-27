<script context="module">
    export function preload() {
        return this.fetch(`settings.json`).then(r => r.json()).then(user => {
            return { user };
        });
    }
</script>

<script>
    export let user;
</script>

<style>
</style>

<svelte:head>
    <title>Settings | ProfitFlow</title>
</svelte:head>

<div class="settings-page">
    <div class="container page">
        <div class="row">
            <div class="col-md-6 offset-md-3 col-xs-12">
                <h1 class="text-xs-center">Your Settings:</h1>

                <form method="POST" action="?/save">

					<fieldset class="form-group">
						<label>User Name:</label>
						<input
							class="form-control form-control-lg"
							name="username"
							type="text"
							placeholder="Username"
							value={user.name}
						/>
					</fieldset>

					<fieldset class="form-group">
						<label>Email:</label>
						<input
							class="form-control form-control-lg"
							name="email"
							type="email"
							placeholder="Email"
							value={user.email}
						/>
					</fieldset>

					<fieldset class="form-group">
						<label>Password:</label>
						<input
							class="form-control form-control-lg"
							name="password"
							type="password"
							placeholder="New Password" style="margin-bottom: 10px;"
						/>
						<input
							class="form-control form-control-lg"
							name="password"
							type="password"
							placeholder="Confirm Password"
						/>
					</fieldset>

					<button class="btn btn-lg btn-primary pull-xs-right">Save Settings</button>
				</form>
			</div>
		</div>
	</div>
</div>

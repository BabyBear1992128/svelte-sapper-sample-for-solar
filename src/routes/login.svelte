<script>
    import { goto, stores } from "@sapper/app";
    const { session } = stores();

    let password = "";
    let email = "";
    let error;

    const handleLogin = async () => {
        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const parsed = await response.json();

        if (parsed.error) {
            error = parsed.error;
        } else {
            $session.token = parsed.token;
            location.href = '/converter';
        }
    };
</script>

<svelte:head>
    <title>Login • ProfitFlow</title>
</svelte:head>

<div class="auth-page container-fluid">
    <div class="row">
        <div class="col-xs-7">
            <div>
                <h1>Welcome to ProfitFlow</h1>
            </div>
            <div>
                <p>Lorem imsum dolor sit amet
                    Lorem imsum dolor sit amet
                    Lorem imsum dolor sit amet
                    Lorem imsum dolor sit amet
                    Lorem imsum dolor sit amet
                    Lorem imsum dolor sit amet
                    Lorem imsum dolor sit amet
                    Lorem imsum dolor sit amet

            </div>
        </div>

        <div class="spliter"></div>

        <div class="">
            <div class="">
                <div class="">
                    <h1 class="text-xs-center">Login</h1>
                </div>

                <form on:submit|preventDefault="{handleLogin}" method="post">
                    <fieldset class="form-group">
                        <label>
                            <i class="far fa-user-circle"></i>
                        </label>
                        <input
                                class="form-control form-control-lg"
                                name="email"
                                type="email"
                                required
                                placeholder="Email" bind:value={email}
                        />
                    </fieldset>
                    <fieldset class="form-group">
                        <label>
                            <i class="fas fa-lock"></i>
                        </label>
                        <input
                                class="form-control form-control-lg"
                                name="password"
                                type="password"
                                required
                                placeholder="Password" bind:value={password}
                        />
                    </fieldset>

                    <fieldset class="form-group">
                        <label></label>

                        <div>
                            {#if error}
                                <p class="error-messages">{error}</p>
                            {/if}
                        </div>

                    </fieldset>

                    <div class="btn-group">
                        <button class="btn btn-lg btn-primary pull-xs-right" type="submit">Sign in</button>
                    </div>

                    <div>
                        <p class="text-xs-center">
                            Don't have an account?<br>
                            <a href="/register">Create one!</a>
                        </p>
                    </div>

                </form>
            </div>
        </div>
    </div>

</div>

<style>
    div.auth-page>div.row>div.spliter{
        width: 1px;
        padding: 0;
        background: #333;
    }
    div.auth-page>div.row>div{padding: 40px 100px;}
    div.auth-page>div.row>div:nth-child(1)>div:nth-child(1){margin-bottom: 40px;}
    div.auth-page>div.row>div:nth-child(1)>div:nth-child(2){font-size: 20px;}
    div.auth-page>div.row>div:nth-child(3)>div>div:nth-child(1){margin-bottom: 40px}
    div.auth-page>div.row>div:nth-child(3){flex-grow: 1;}
    div.auth-page>div.row>div:nth-child(3)>div>div:nth-child(1){}
    div.auth-page>div.row>div:nth-child(3) div.btn-group{
        display: flex;
        justify-content: center;
        margin-top: 40px;
        margin-bottom: 10px;
    }
    div.auth-page>div.row>div:nth-child(3) div.btn-group>button{
        background-color: #333;
        border-color: #333;
        width: 150px;
    }

    div.auth-page>div.row>div:nth-child(3) form fieldset{display: flex;}
    div.auth-page>div.row>div:nth-child(3) form fieldset>label{
        margin-bottom: 0;
        align-items: center;
        display: flex;
        font-size: 40px;
        width: 80px;
    }
    div.auth-page>div.row>div:nth-child(3) form fieldset>input{}
</style>

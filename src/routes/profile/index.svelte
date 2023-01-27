<script context="module">
    export function preload() {
        return this.fetch(`profile.json`).then(r => r.json()).then(user => {
            return { user };
        });
    }
</script>

<script>
    export let user;
</script>

<style>
    .profile-page{padding-top: 40px;}
    .profile-page>h1{margin-bottom: 40px;}
    .profile-page div.avatar{display: flex;margin-bottom: 40px;}
    .profile-page div.avatar>.photo{margin-right: 40px;}
    .profile-page div.avatar>.photo>img{width: 200px;border-radius: 100px;}
    .profile-page div.avatar>.user-name{
        display: flex;
        align-items: center;
        font-size: 24px;
    }
    .profile-page div.avatar>.user-name>div:nth-child(1){margin-right: 10px;}

    .profile-page .info{font-size: 24px;}
    .profile-page .info>div{display: flex;}
    .profile-page .info>div>div:nth-child(1){margin-right: 10px;}
</style>

<svelte:head>
    <title>Profile | ProfitFlow</title>
</svelte:head>

<div class="profile-page container">
    <h1>Profile: </h1>

    <div class="avatar">
        <div class="photo">
            <img src="/converter.png" alt="User avatar">
        </div>
        <div class="user-name">
            <div>Username: </div>
            <div>{user.name}</div>
        </div>
    </div>

    <div class="info">
        <div>
            <div class="">First Name: </div>
            <div>name</div>
        </div>
        <div>
            <div class="">Last Name: </div>
            <div>surname</div>
        </div>
        <div>
            <div class="">E-mail: </div>
            <div>{user.email}</div>
        </div>
        <div>
            <div class="">Address: </div>
            <div>Welingstraat 89, 4523FR</div>
        </div>
        <div>
            <div class="">Birthday: </div>
            <div>13-02-1990</div>
        </div>
    </div>
</div>

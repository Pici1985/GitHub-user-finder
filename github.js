class GitHub {
    constructor() {
        this.client_id = '013a6b117998a0f42dd7';
        this.client_secret = 'd41a70073ace632b734aeb219e266c87c9386f7d';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'    
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}
            ?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
 
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}
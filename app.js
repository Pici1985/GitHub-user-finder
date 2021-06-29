// init github
const github = new GitHub;

//init Ui
const ui = new UI;

// Search input 

const searchUser = document.getElementById('searchUser');

// search input eventlistener
function search() {
    console.log(searchUser.value);
    const userText = searchUser.value;
    
    if(userText !== ''){
        //make HTTP request
        github.getUser(userText)
            .then(data => {
                // console.log(data);
                if(data.profile.message === 'Not Found'){
                    // show alert
                    ui.showAlert('User not found','alert alert-danger');
                } else {
                    // show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })        
    } else {
        //clear profile
        ui.clearProfile();
    }
};    


/* searchUser.addEventListener('click',(e) => {
    // get input text
    const userText = e.target.value;
    
    if(userText !== ''){
        //make HTTP request
        github.getUser(userText)
            .then(data => {
                // console.log(data);
                if(data.profile.message === 'Not Found'){
                    // show alert
                    ui.showAlert('User not found','alert alert-danger');
                } else {
                    // show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })        
    } else {
        //clear profile
        ui.clearProfile();
    }
}); */
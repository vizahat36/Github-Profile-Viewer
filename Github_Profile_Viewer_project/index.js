
let user=document.getElementById('inf')

async function userfetch(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    let result=await response.json()
    displayuser(result)
    

    
}
  


document.getElementById('btn').addEventListener('click',() => {
    document.getElementById('userboxd').innerHTML=`<span class="loader"></span>`
    
    let userid=user.value;
    userfetch(userid)
}) 






function displayuser({
    avatar_url,
    name,
    bio,
    followers,
    following,
    public_repos,
    html_url
}){

    if(!avatar_url){
        document.getElementById('userboxd').innerHTML=`<h1>USER NOT FOUND</h1>`
        document.getElementById('userboxd').style.display='flex';
        document.getElementById('userboxd').style.justifyContent='center';
        document.getElementById('userboxd').style.alignItems = 'center';
        return
    }

    if(!bio){
        bio=''
    }
    
    document.getElementById('userboxd').innerHTML=
    `   <div class="useri">
                    <img src="${avatar_url}" alt="" class="img">
                    <div class="userd">
                    <p class="username">${name}</p>
                    <p class="userbio">${bio}</p>
                </div>
            </div>
            <div class="userf">
                <div class="follower">
                    <div class="Repo">
                        <p>Follower</p>
                        <p>${followers}</p>

                    </div>
                    <div class="Repo">
                        <p>Following</p>
                        <p>${following}</p>
                    </div>
                    <div class="Repo">
                        <p>Repo</p>
                        <p>${public_repos}</p>
                    </div>
                </div >
               <a href="${html_url}" target="_blank" class="visit">
                    Visit Profile</a>
                    </div>`
}
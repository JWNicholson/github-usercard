/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const entryPoint = document.querySelector('.cards');
axios.get("https://api.github.com/users/JWNicholson") 
    .then(response => {
      //console.log(response)
      //console.log(response.data.login)
      
     const freshCard = createCard(response.data);
      entryPoint.appendChild(freshCard)
    })
    .catch(error => {
      console.log("Error occured");
    });

    

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

// const followersArray = [ 
//   "CScori",
//   "NataliaBeckstead",
//   "Minaramzey",
//   "rofstudios",
//   "Karavil"
// ];



const followersArray = [];
 axios.get("https://api.github.com/users/JWNicholson/followers")
    .then(response => {

      console.log('Then', response);
      response.data.forEach(item => {
        followersArray.push(item);
      });
console.log('Followers Array',followersArray);
      followersArray.forEach(user => {
        console.log(user);
        const freshCard = createCard(user);
        entryPoint.appendChild(freshCard);
      })
    })
    .catch(error => {
            console.log("Error. follower data not returned.")
          })

          //console.log(followersArray)



// followersArray.forEach(user => {
//   axios.get("https://api.github.com/users/${followersArray[i]}")
//     .then(response => {
//       console.log(response);
//       const followerInfo = response.data;
//       const followerCard = document.querySelector('.cards');
//       const cardData = createCard(followerInfo);
//       followerCard.appendChild(cardData);
//     })
//     .catch(error => {
//       console.log("Error. follower data not returned.")
//     })
// })

// axios.get("https://api.github.com/users/follower")
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.log("Error")
//   })



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createCard(response){
  //create elements
  const newCard = document.createElement('div');
        newImage = document.createElement('img');
        newCardInfo = document.createElement('div');
        userName = document.createElement('h3');
        userUsername = document.createElement('p');
        userLocation = document.createElement('p');
        userProfile = document.createElement('p');
        userFollowersCount = document.createElement('p');
        userFollowingCount = document.createElement('p');
        userBio = document.createElement('p');

        //assign classes
        newCard.classList.add('card');
        newCardInfo.classList.add('card-info');
        userUsername.classList.add('username');

       //append elements
       newCard.appendChild(newImage);
       newCard.appendChild(newCardInfo);
       newCardInfo.appendChild(userName);
       newCardInfo.appendChild(userUsername);
       newCardInfo.appendChild(userLocation);
       newCardInfo.appendChild(userProfile);
       newCardInfo.appendChild(userFollowersCount);
       newCardInfo.appendChild(userFollowingCount);
       newCardInfo.appendChild(userBio);

       //set the content
       newImage.src = response.avatar_url;
       userName.textContent = response.name;
       userUsername.textContent = response.login;
       userLocation.textContent = `Location: ${response.location}`;
       userProfile.innerHTML = `Profile: <a href="${response.html_url}">${response.html_url}</a>`;
       userFollowersCount.textContent= `Followers: ${response.followers}`;
       userFollowingCount.textContent = `Following: ${response.following}`;
       userBio.textContent = `Bio: ${response.bio}`;

        return newCard;

}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

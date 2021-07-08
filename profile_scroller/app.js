const data = [
   {
      name: 'John Doe',
      age: 32,
      gender: 'male',
      lookingfor: 'female',
      location: 'Boston MA',
      image: 'https://randomuser.me/api/portraits/men/82.jpg',
   },
   {
      name: 'Jen Smith',
      age: 26,
      gender: 'female',
      lookingfor: 'man',
      location: 'Miami MA',
      image: 'https://randomuser.me/api/portraits/women/82.jpg',
   },
   {
      name: 'William Johnson',
      age: 42,
      gender: 'male',
      lookingfor: 'female',
      location: 'Washington DC',
      image: 'https://randomuser.me/api/portraits/men/42.jpg',
   },
   {
      name: 'Mary Ki',
      age: 22,
      gender: 'female',
      lookingfor: 'male',
      location: 'Boston MA',
      image: 'https://randomuser.me/api/portraits/women/12.jpg',
   },
];

const profiles = profileIterator(data);
// Call first profile
nextProfile();

// Next Event
document.querySelector('#next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
   const currentProfile = profiles.next().value;

   if (currentProfile !== undefined) {
      document.querySelector('#profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>
    `;

      document.querySelector(
         '#imageDisplay'
      ).innerHTML = `<img src="${currentProfile.image}">`;
   } else {
      //    No more profiles
      window.location.reload();
   }
}

// Profile iterator
function profileIterator(profiles) {
   let nextIndex = 0;

   return {
      next: function () {
         return nextIndex < profiles.length
            ? { value: profiles[nextIndex++], done: false }
            : { done: true };
      },
   };
}

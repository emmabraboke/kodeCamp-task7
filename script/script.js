let formValue= document.getElementById("formPosts");
let postTitle = document.getElementById("postTitle")
let postBody = document.getElementById("postBody")


formValue.addEventListener('submit', createPost)

function getPost(){
fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(response => response.json())
  .then(posts => {
      let text="";
      var content=posts;
      
      posts.forEach(e => {
      
      text +=`
      <div class="col-md-4 mb-3">
      <a class="text-decoration-none text-black" id="route" href="post.html">
        <div class="h-100" id="${e.id}">      
            <div class="border rounded p-3 round mb-3 h-100" id=${e.id}>
                    <h5 class="d-flex justify-content-end text-danger" id="number">${e.id}</h5>
                    <h5 class="mb-3 fw-bold" id="title">${e.title}</h5>
                    <p class="" id="content">${e.body}</p>
            </div>
          </div>
        </a>
      </div>`   
      });
      document.getElementById("card").innerHTML= text
     
      let news=localStorage.setItem("posts", JSON.stringify(posts));
      var card = document.querySelector("a");
  })
   
}

getPost();
 


card.addEventListener('click', (e)=>{
  let posts= JSON.parse(localStorage.getItem("posts"));
  
  let index = e.target.parentNode.id-1;
  console.log(index)
 let data={
   title: posts[index].title,
   body:  posts[index].body,
   id: posts[index].id
 }
 localStorage.setItem("id", JSON.stringify(data))

})


 
 function createPost(e){
   e.preventDefault();
   let pTitle=postTitle.value;
   let pBody= postBody.value;
   console.log(pBody, pTitle);
  fetch('https://jsonplaceholder.typicode.com/posts/', {
  method: 'POST',
  body:JSON.stringify({
    title: pTitle,
    body:  pBody,
    userId: 6
  }),

  headers: {
      'Content-type' : 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((data)=> {
    console.log('post', data);
  })
 

}


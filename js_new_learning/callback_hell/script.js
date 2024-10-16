function makeXMLHttpRequest(method, url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  // console.log(xhr);
  xhr.addEventListener("load", () => {
    // console.log(xhr.response);
    callback(xhr.response);
  });
  xhr.open(method, url);
  xhr.send();
}

makeXMLHttpRequest("GET", `https://dummyjson.com/users`, (userskaData) => {
  makeXMLHttpRequest("GET", `https://dummyjson.com/post/user/${userskaData.users[12].id}`, (postskaData)=>{
    makeXMLHttpRequest("GET", `https://dummyjson.com/comments/post/${postskaData.posts[1].id}`, (commentskaData)=>{
        makeXMLHttpRequest("GET", `https://dummyjson.com/users/${commentskaData.comments[1].user.id}`, (commentwalaUser)=>{
            console.log(commentwalaUser);
        });
    });
  });
});

// // So, this is called a Callback Hell, we can make more deep of it. Generally, these methods are not used as of now regularly because there are new JS methods and fetaures introduced recently to solve this callback hell problem. We will use Promise, Fetch, Async etc to resolve this callback issue.

const listEl = document.querySelector(".posts");
const postTem = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchBtn = document.querySelector("#available-posts button");
const list = document.querySelector("ul");

const sendHttpReq = (method, url, data) => {
  /* const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.responseType = "json";

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      // const listOfPosts = JSON.parse(xhr.response);
      } else {
        reject(new Error("error!"));
      }
    };
    // 요청 전송은 성공했으나 후에 무슨 문제가 발생했을때
    xhr.onerror = () => {
      reject(new Error("error!!!"));
    }
    // 요청 전송 자체가 실패했을때

    xhr.send(JSON.stringify(data));
  });
  return promise; */
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "appliction/json",
    },
  })
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.json();
      } else {
        return res.json().then((errorData) => {
          console.log(errorData);
          throw new Error("Error!");
        });
      }
    })
    .catch((err) => {
      console.log(err);
      throw new Error("Error");
    });
};

const fetchPosts = () => {
  sendHttpReq("GET", "https://jsonplaceholder.typicode.com/posts").then((responseData) => {
    const listOfPosts = responseData;
    for (const post of listOfPosts) {
      const postEl = document.importNode(postTem.content, true);
      postEl.querySelector("h2").textContent = post.title.toUpperCase();
      postEl.querySelector("p").textContent = post.body;
      postEl.querySelector("li").id = post.id;
      listEl.append(postEl);
    }
  });
};

/* const fetchPosts = async () => {
  const responseData = await sendHttpReq("GET", "https://jsonplaceholder.typicode.com/posts");
  const listOfPosts = responseData;
  for (const post of listOfPosts) {
    const postEl = document.importNode(postTem.content, true);
    postEl.querySelector("h2").textContent = post.title.toUpperCase();
    postEl.querySelector("p").textContent = post.body;
    listEl.append(postEl);
  }
}; */

const createPost = async (title, content) => {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };
  const fd = new FormData();
  fd.append("title", title);
  fd.append("content", content);
  fd.append("userId", userId);
  sendHttpReq("POST", "https://jsonplaceholder.typicode.com/posts");
};

fetchBtn.addEventListener("click", fetchPosts);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector("#title").value;
  const enteredContent = event.currentTarget.querySelector("#content").value;
  createPost(enteredTitle, enteredContent);
});

list.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const postId = event.target.closest("li").id;
    sendHttpReq("DELETE", `https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
});

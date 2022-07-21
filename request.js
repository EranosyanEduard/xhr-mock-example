module.exports = (body) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("post", "https://ya-praktikum.tech/api/v2/chats/");

    xhr.onload = () => {
      return resolve(JSON.parse(xhr.responseText));
    };

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(body));
  });
};

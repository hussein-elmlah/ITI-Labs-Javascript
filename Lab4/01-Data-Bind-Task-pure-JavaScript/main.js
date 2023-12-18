document.getElementById("userOne").addEventListener("click", () => {
  changeUser("userOne");
});
document.getElementById("userTwo").addEventListener("click", () => {
  changeUser("userTwo");
});

function changeUser(userName) {
  if (userName == "userOne") {
    document.getElementById("fullName").innerHTML = `Hussein Elmlah`;
    document.getElementById("position").innerHTML = `MEARN developer`;
    document.getElementById("userImg").src =
      "https://scontent.fcai27-1.fna.fbcdn.net/v/t39.30808-6/367930984_3588434821479052_4630295772595465178_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=y-cK0h-3ZjkAX-vZVBX&_nc_ht=scontent.fcai27-1.fna&oh=00_AfATMCID74Ojy1moQ9kEuQtYEQO7rBY1zGEPRbLf45P81g&oe=6586894C";
    } else if (userName == "userTwo") {
      document.getElementById("fullName").innerHTML = `Elon Musk`;
      document.getElementById("position").innerHTML = `Business man`;
      document.getElementById("userImg").src =
        "https://media.npr.org/assets/img/2022/06/16/gettyimages-1395371348-b670e119df530553e1cac24560455e51baee7324-s1100-c50.jpg";
  } else {
  }
}

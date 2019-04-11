import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("root");

const ul = document.createElement("ul");
root.appendChild(ul);

function addLiToUl(text) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "https://google.com";
  li.appendChild(a);

  const b = document.createElement("b");
  b.innerHTML = text;
  a.appendChild(b);

  const divContainer = document.createElement("div");
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "X";
  deleteBtn.addEventListener("click", () => alert("Delete"));

  const editBtn = document.createElement("button");
  editBtn.innerHTML = "Edit";
  editBtn.addEventListener("click", () => alert("Edit"));

  divContainer.append(editBtn, deleteBtn);

  li.appendChild(divContainer);

  ul.appendChild(li);
}

// addLiToUl('Google')
// addLiToUl('Facebook')
// addLiToUl('Gmail')
// addLiToUl('Twitter')

const div2 = React.createElement(
  "ul",
  null,
  ["Google", "Facebook", "Twitter", "LinkedIn"].map(x => {
    return React.createElement("li", null, [
      React.createElement(
        "a",
        { href: "https://google.com" },
        React.createElement("b", null, x)
      ),
      React.createElement("div", null, [
        React.createElement("button", { onClick: () => alert("Edit") }, "Edit"),
        React.createElement("button", { onClick: () => alert("Delete") }, "X")
      ])
    ]);
  })
);

ReactDOM.render(div2, root);

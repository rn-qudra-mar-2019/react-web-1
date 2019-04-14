import React from "react";
import ReactDOM from "react-dom";
import App from './App'

const root = document.getElementById("root");
ReactDOM.render(<App />, root);

/*

const root2 = document.createElement('div')
document.body.appendChild(root2);

const ul = document.createElement("ul");
root2.appendChild(ul);

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

let count2 = 0;

// setInterval(() => {
  ul.innerHTML = '';
  addLiToUl('Google')
  addLiToUl('Facebook')
  addLiToUl('Gmail')
  addLiToUl(count2++)
// }, 2000)

// Uppercase first letter for Component name
const Div2 = (
  props //<ul style={ {fontSize: props.size, backgroundColor: props.bgColor} }>
) => {
  // return React.createElement("ul", null, [
  //   ["Facebook", "Google", "Twitter", props.counter].map(x =>
  //     React.createElement("li", null, [
  //       React.createElement(
  //         "a",
  //         { href: `https://${x}.com` },
  //         React.createElement("b", null, x)
  //       ),
  //       React.createElement("div", null, [
  //         React.createElement(
  //           "button",
  //           {
  //             style: { fontFamily: props.btnFont },
  //             onClick: () => alert("Edit")
  //           },
  //           "Edit"
  //         ),
  //         React.createElement(
  //           "button",
  //           { 
  //             style: { fontFamily: props.btnFont },
  //             onClick: () => alert("Delete")
  //           },
  //           "Delete"
  //         )
  //       ])
  //     ])
  //   )
  // ]);

  return (
  <ul>
    {
      ["Facebook", "Google", "Twitter", props.counter]
        .map(x => (
          <li>
            <a href={`https://${x}.com`}>
              <b>{x}</b>
            </a>
            <div>
              <button style={ {fontFamily: props.btnFont} } onClick={() => alert('edit')}>Edit</button>
              <button onClick={() => alert('edit')}>Delete</button>
            </div>
          </li>
        ))
    }
  </ul>
  );
};

// ReactDOM.render(Div2({btnFont: 'monospace', bgColor: 'yellow', size: 25}), root);
let count = 0;

ReactDOM.render(<Div2 btnFont="monospace" counter={count++} bgColor="yellow" size={25} />, root);
*/
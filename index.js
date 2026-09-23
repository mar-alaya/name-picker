const user_list = document.querySelector("ol");
const user_input = document.querySelector("#input");
const save_btn = document.querySelector("#save-btn");
const generate_btn = document.querySelector("#generate-btn");
const feedback = document.querySelector("#name-feedback");

const available_names = [
  "SchnellesPferd",
  "NachtTiger",
  "BlauerBlitz",
  "GoldeneSchlange",
  "DunkleLuna",
];

const enrolled_users = ["WilderDönner", "GeisterJäger"];

function createUser(input) {
  if (enrolled_users.includes(input)) {
    feedback.innerText = "Username already exists. Write or generate other.";
  } else {
    enrolled_users.push(input);
    feedback.innerText = "Username created. You are now enrolled!";
    user_input.value = "";

    let li = document.createElement("li");
    li.innerText = input;
    user_list.appendChild(li);
  }

  if (available_names.includes(input)) {
    available_names.shift();
  }
}

// Enrolled Users List

for (let i = 0; i < enrolled_users.length; i++) {
  let li = document.createElement("li");
  li.innerText = enrolled_users[i];
  user_list.appendChild(li);
}

// Save Flow

save_btn.addEventListener("click", () => {
  let input = String(user_input.value);
  createUser(input);
});

// Generate Flow

generate_btn.addEventListener("click", () => {
  for (let i = 0; i < available_names.length; i++) {
    user_input.value = available_names[0];
  }
});

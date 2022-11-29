const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})

async function open_terminal(){
  createText("Welcome");
  await delay(700);
  createText("Starting the E.D.I.T.H Server...");
  await delay(1500);
  createText("You can get info about \"Priyansh\" from E.D.I.T.H by running several commands:");
  createText("Type \"help\" to see all available commands, all E.D.I.T.H commands are case sensitive")
  // await delay(1000)
  // createCode("about me", "Who am i and what do i do.");
  // createCode("all", "See all commands.");
  // createCode("social -a", "All my social networks.");

  await delay(500);
  new_line();
}

function new_line(){  
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/priyansh@E.D.I.T.H";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "help"){
    trueValue(value);
    createCode("projects", "My projects page with my github. Follow me there :)");
    createCode("about", "Who am I and what do I do.");
    createCode("about EDITH", "What does E.D.I.T.H do.");
    createCode("social -a", "Show all my social networks.");
    createCode("social -g", "Show Github Id.");
    createCode("social -i", "Show Instagram Id.");
    createCode("social -l", "Show Linkedin Id.");
    createCode("clear or cls", "Clean the terminal.");
  }
  else if(value === "projects"){
    trueValue(value);
    createCode("<a href='https://pk-my-meet.herokuapp.com/' target='_blank'>My-meet</a>", "<a href='https://github.com/priyanshkulshrestha/my-meet' target='_blank'>A meeting app.</a>");

    createCode("Hastebin", "<a href='https://github.com/priyanshkulshrestha/hastebin' target='_blank'>A Code template sharing platform.</a>");

    createCode("<a href='https://priyanshkulshrestha.github.io/Recipe-finder/' target='_blank'>Recipe-finder</a>", "<a href='https://github.com/priyanshkulshrestha/Recipe-finder' target='_blank'>Find Something to cook.</a>");

    createCode("<a href='https://pk-my-chatroom.herokuapp.com/' target='_blank'>My-Chatroom</a>", "<a href='https://github.com/priyanshkulshrestha/My-Chatroom' target='_blank'>A Chatroom web app.</a>");

    createCode("<a href='https://hulu-clone-2-0.vercel.app/' target='_blank'>Hulu Clone</a>", "<a href='https://github.com/priyanshkulshrestha/my-meet' target='_blank'>A clone of Hulu streaming platform</a>");

    createCode("<a href='https://file-secure-transfer.herokuapp.com/' target='_blank'>Secure Transfer</a>", "<a href='https://github.com/priyanshkulshrestha/secure-transfer' target='_blank'>A password protected file sharing app.</a>");


    createText("For more projects visit my Github")
    createText("<a href='https://github.com/priyanshkulshrestha' target='_blank'><i class='fab fa-github white'></i> github.com/priyanshkulshrestha</a>")
  }
  else if(value === "about EDITH"){
    trueValue(value);
    createText("Hello User")
    createText("This is a Javascript based web terminal developed by /'Priyansh/', You can type commands here and get Info about Priyansh.")
  }
  else if(value === "about"){
    trueValue(value);
    createText("Hello")
    createText("This is Priyansh, I am a final year student of Computer Science Engineering at Inderprastha Engineering Collge, I am a MERN stack developer. ")
  }
  else if(value === "social -a"){
    trueValue(value);
    createText("<a href='https://github.com/priyanshkulshrestha' target='_blank'><i class='fab fa-github white'></i> github.com/priyanshkulshrestha</a>")
    createText("<a href='https://www.linkedin.com/in/priyanshkulshrestha/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/priyanshkulshrestha/</a>")
    createText("<a href='https://www.instagram.com/priyansh_kulshrestha' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/priyansh_kulshreestha</a>")
  }
  else if(value === "social -g"){
    trueValue(value);
    createText("<a href='https://github.com/priyanshkulshrestha' target='_blank'><i class='fab fa-github white'></i> github.com/priyanshkulshrestha</a>")
  }
  else if(value === "social -l"){
    trueValue(value);
    createText("<a href='https://www.linkedin.com/in/priyanshkulshrestha/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/priyanshkulshrestha/</a>")
  }
  else if(value === "social -i"){
    trueValue(value);
    createText("<a href='https://www.instagram.com/priyansh_kulshrestha' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/priyansh_kulshreestha</a>")
  }
  else if(value === "social"){
    trueValue(value);
    createText("Didn't you mean: social -a?")
  }
  
  else if(value === "clear" || value === "cls"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`E.D.I.T.H: ${value} command not found`)
    // createText(`${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code}       <span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();
const ROOT_PAGE = document.getElementById("root-page");
const getById = (id) => document.getElementById(id);

const getPage = (pageName) => {
  fetch(`./pages/${pageName}.html`)
    .then((res) => res.text())
    .then((textHtml) => (ROOT_PAGE.innerHTML = textHtml));
};

getPage("home");

getById("home").addEventListener("click", () => {
  getPage("home");
});

getById("about").addEventListener("click", () => {
  getPage("about");
});

getById("contact").addEventListener("click", () => {
  getPage("contact");
});

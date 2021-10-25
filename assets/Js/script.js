/* Creare una pagina che elenchi una lists di post socials a partire da un array di oggetti.
Gli attributi minimi del modello di un post: id, contenuto, immagine,
autore (nome, avatar), numero di likes, data creazione.
Un secondo array conterrà solo gli id dei posts a cui abbiamo dato like. */

const post = [
  {
    id: "image01",
    contenuto: "lorem ipsum",
    immagine: "https://unsplash.it/300/300?image=<id>",
    autore: "Nome",
    likes: "80",
    data: "10/09/2021",
  },
  {
    id: "image02",
    contenuto: "lorem ipsum",
    immagine: "https://unsplash.it/300/300?image=<id>",
    autore: "Nome",
    likes: "5",
    data: "16/03/2021",
  },
  {
    id: "image03",
    contenuto: "lorem ipsum",
    immagine: "https://unsplash.it/300/300?image=<id>",
    autore: "Nome",
    likes: "10",
    data: "28/10/2021",
  },
];

console.log(post);

for (let i = 0; i < post.length; i++) {
  const onePost = post[i];
  /* console.log(member);
  console.log(i); */
  for (const key in onePost) {
    console.log(onePost[key]);
  }
  console.log("_____________");
}

/* Selezione elementi DOM */

document.getElementsByClassName("icon").addEventListener("click", function () {
  document.getElementsByClassName("people");
  console.log(icon);
});

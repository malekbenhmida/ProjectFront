# ToDoList Project - Team: Hamza EL BORJENI, Malek BEN HMIDA, Saif Eddine GADRI


## Présentation du Projet:
Dans ce projet, on a travaillé sur une todo list en essayant d'inclure des différents styling et animations. 
![image](https://user-images.githubusercontent.com/48828382/163670546-0c8a2e3d-2cd0-44f2-bd0d-213365f57776.png)
## Liste des fonctionnalités implémentées:

Notre application todo list inclut toutes les fonctionnalités CRUD qu'on peut utiliser:

  - Create: création d'un nouveau todo.
    Dans notre écran principal, l'utilisateur saisie le nom du nouveau todo et puis clique sur submit. La liste des todos se met à jour automatiquement en ajoutant le nouveau élément. La saisie d'un todo avant submit est obligatoire, on accepte pas un champs vide.
    
  - Read: lister tous les todos disponibles, pas encore finis et déjà finis.
    Dès le lancement de l'application, une liste complète des todos disponibles s'affiche, qu'ils soient complétés ou pas encore.
    
  - Update: modifier le nom d'un todo. 
    Le bouton "edit" sert à modifier le nom d'un todo.
    
  - Delete: supprimer un todo de la liste des todos.
    L'utilisateur peut supprimer définitivement un todo de la liste qu'ils soit marqué comme complétés ou pas.
    
Pour le routage on a utilisé la librairie 'react-router-dom' afin de naviguer entre la page principle et la page des détails du todo. 
![image](https://user-images.githubusercontent.com/48828382/163671945-08844b22-a6ff-49be-a7d5-0cb7883b05c9.png)
![image](https://user-images.githubusercontent.com/48828382/163671956-1a16439a-d2b7-46a2-9ab5-edeec1ddb0bb.png)

    
 
 
 ## Types d'aniamtion CSS utilisées: 
 
 On a essayé d'impliquer dans notre projets différentes animations CSS. 
 
  - Pour le titre du header "TodoList", on a animé le texte par une double translation d'une durée de 2 secondes.
 
 ```css
@keyframes title {
  0%   {font-size:20px;transform: translateY(250px)}
  100% {font-size:50px;transform: translateY(20px)}
}


.header h1 {
  color: rgb(246, 246, 248);
  text-align: center;
  transform: translateY(20px);
  font-family: 'Playfair Display', serif;
  font-size:50px;
  animation-name: title;
  animation-duration: 2s;
  animation-iteration-count: 2;
  letter-spacing: 4px;
  margin-bottom: 50px;
}
```
  - Au click sur le bouton de "Done", le texte du todo devient barré ce qui marque que le todo est complété. 
![image](https://user-images.githubusercontent.com/48828382/163670722-29c120b7-d172-4471-a7d4-a53a73b823b1.png)

###useState() : 
  - Lorsque l'utilisateur clique sur "See more", 5 todos de plus s'affichent (s'ils existent) sur notre todolist. Ceci est fait avec un useState.
``` javascript
const [seemore, setSeeMore] = useState(5);
```
  - On a utilisé useState() aussi pour le tracking de la modification d'un todo déjà présent dans notre liste. 

###useEffect() :
  - A la modification du champs de l'entrée d'un nouveau todo, on a utilisé un useEffect pour réccupérer la valeur entrée afin de l'envoyer à notre todolist. 

  - On a utilisé useEffect() pour ajouter au localStorage le nouveau todo lors de son ajout à notre liste. 
``` javascript
  useEffect(() => {
    localStorage.setItem("Todo", JSON.stringify(Todo));
  }, [Todo]);
```

  - On a utilisé aussi la fameuse librairie Bootstrap pour la création de notre application qui nous a aidé à travers ses classes pré-définies et design. 
La librairie nous a servit dans le design de notre todolist, aussi bien que le design du alert message lors de la suppression d'un todo comme l'exemple ci-dessous.
![image](https://user-images.githubusercontent.com/48828382/163671173-aede1e9b-527d-497c-8f73-929229d88d5c.png)
![image](https://user-images.githubusercontent.com/48828382/163671183-f9e5300f-fff0-4ad5-a98f-f927ff1a17c2.png)

 
  - FontAwsome library est une librairie d'icones qu'on a utilisé pour ajouter des icones pour ajouter plus de valeur visuelle à notre application. 


## Tests de la fonctionnalité:

  - On a testé sur le titre en haut 'TodoList' pour vérifier la couleur et la durée de l'animation du texte comme suit:
![image](https://user-images.githubusercontent.com/48828382/163671766-c3bb58b3-a7d4-486d-b57b-4e4c98cdf6ef.png)



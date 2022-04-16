# ToDoList Project - Team: Hamza EL BORJENI, Malek BEN HMIDA, Saif Eddine GADRI


## Présentation du Projet:
Dans ce projet, on a travaillé sur une todo list en essayant d'inclure des différents styling et animations. 





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
    
 
 
 ## Types d'aniamtion CSS utilisées: 
 
 On a essayé d'impliquer dans notre projets différentes animations CSS. 
 
 Pour le titre du header "TodoList", on a animé le texte par une double translation d'une durée de 2 secondes.
 
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
    
    






























# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

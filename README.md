# Todo App — React + Redux Toolkit

Petit projet de liste de tâches (todo list) fait avec React et Redux Toolkit, dans le cadre de ma formation GOMYCODE.

## Ce que fait l'application

- Ajouter une tâche
- Cocher une tâche comme faite / pas faite
- Modifier le texte d'une tâche
- Filtrer : toutes / faites / pas faites

## Technologies utilisées

- React 18
- Redux Toolkit + React-Redux
- Vite

## Comment lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:5173

Autre commande utile : `npm run build` pour créer la version de production.

## Organisation des fichiers

```
src/
├── main.jsx                    # point d'entrée
├── App.jsx                     # page principale
├── app/store.js                # le store Redux
├── features/todos/todosSlice.js # state + actions des tâches
└── components/
    ├── AddTask.jsx
    ├── TaskList.jsx
    └── Task.jsx
```

## Les actions Redux

- `addTask(description)` → ajoute une tâche
- `toggleTask(id)` → coche / décoche
- `editTask({ id, description })` → modifie une tâche
- `setFilter('all' | 'done' | 'not')` → change le filtre

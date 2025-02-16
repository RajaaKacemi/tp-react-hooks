# TP React Hooks - Application de Gestion de Produits

Ce TP a pour objectif de mettre en pratique l'utilisation des Hooks React (useState, useEffect, useContext) ainsi que la création de Hooks personnalisés.

## Installation et configuration initiale

1. Cloner le dépôt :
```bash
git clone https://github.com/pr-daaif/tp-react-hooks.git
cd tp-react-hooks
```

2. Créer votre propre dépôt sur Github et changer le remote :
```bash
# Supprimer le remote origine
git remote remove origin

# Ajouter votre nouveau remote
git remote add origin https://github.com/[votre-username]/tp-react-hooks.git

# Premier push
git push -u origin main
```

3. Installer les dépendances :
```bash
npm install
```

4. Lancer l'application :
```bash
npm start
```

## Instructions pour le TP

Pour chaque exercice :
1. Lisez attentivement l'énoncé
2. Implémentez la solution
3. Testez votre implémentation (pensez à faire des copies d'écran)
4. Mettez à jour la section correspondante dans ce README avec :
   - Une brève explication de votre solution
   - Des captures d'écran montrant le fonctionnement
   - Les difficultés rencontrées et comment vous les avez résolues
5. Commitez vos changements avec un message descriptif

### Exercice 1 : État et Effets 
#### Objectif : Implémenter une recherche en temps réel

- [ ] 1.1 Modifier le composant ProductSearch pour utiliser la recherche
- [ ] 1.2 Implémenter le debounce sur la recherche
- [ ] 1.3 Documenter votre solution ici

_Votre réponse pour l'exercice 1 :_
```
- Dans mon composant App, j'ai déclaré une state searchTerm pour gérer la valeur de recherche saisie par l'utilisateur. Cette state est partagée entre les composants ProductSearch et ProductList via les props, permettant ainsi de filtrer les produits en fonction de la valeur de recherche.

Pour optimiser les performances et éviter des mises à jour trop fréquentes pendant que l'utilisateur tape, j'ai utilisé le hook useDebounce. Ce hook permet de retarder la mise à jour de la valeur de recherche jusqu'à ce que l'utilisateur ait cessé de taper pendant un délai d'une seconde. Cela évite des requêtes ou des filtrages inutiles à chaque frappe.

![image_Alt](https://github.com/RajaaKacemi/tp-react-hooks/blob/ad96f059a54c6542514a63be1d3c5d712bc23ecf/public/assets/exercice1.png)
```

### Exercice 2 : Context et Internationalisation
#### Objectif : Gérer les préférences de langue

- [ ] 2.1 Créer le LanguageContext
- [ ] 2.2 Ajouter le sélecteur de langue
- [ ] 2.3 Documenter votre solution ici

_Votre réponse pour l'exercice 2 :_
```
D'abord j'ai créer un Context LanguageContext qui permet de partager la langue sélectionnée (par exemple, "FR" pour français ou "ENG" pour anglais) à travers tous les composants de l'application.
j'ai également ajouter un Toggle comme composant dans la composant App, afin que l'utilisateur choisir la langue souhaité.

![image_Alt]([image_url](https://github.com/RajaaKacemi/tp-react-hooks/blob/ad96f059a54c6542514a63be1d3c5d712bc23ecf/public/assets/exercice2.1.png))

![image_Alt]([image_url](https://github.com/RajaaKacemi/tp-react-hooks/blob/ad96f059a54c6542514a63be1d3c5d712bc23ecf/public/assets/exercice2.2.png))
```

### Exercice 3 : Hooks Personnalisés
#### Objectif : Créer des hooks réutilisables

- [ ] 3.1 Créer le hook useDebounce
- [ ] 3.2 Créer le hook useLocalStorage
- [ ] 3.3 Documenter votre solution ici

_Votre réponse pour l'exercice 3 :_
```
- J'ai implémenté un hook personnalisé useDebounce dans un dossier hooks qui permet de retarder l'exécution d'une fonction jusqu'à ce qu'un certain délai (delay) se soit écoulé depuis la dernière modification de la valeur (value). Ce hook est utile pour optimiser les performances.

- J'ai implémenté un hook personnalisé useStorageLanguage dans un dossier hooks qui permet de storer la valeur du langauge souhaité d'aprèsl'utilisateur dans un clé qui s'appelle language.

![image_Alt]([image_url](https://github.com/RajaaKacemi/tp-react-hooks/blob/ad96f059a54c6542514a63be1d3c5d712bc23ecf/public/assets/exercice3.1.png))
![image_Alt]([image_url](https://github.com/RajaaKacemi/tp-react-hooks/blob/ad96f059a54c6542514a63be1d3c5d712bc23ecf/public/assets/exercice3.2.png))
![image_Alt]([image_url](https://github.com/RajaaKacemi/tp-react-hooks/blob/ad96f059a54c6542514a63be1d3c5d712bc23ecf/public/assets/exercice3.png))
```

### Exercice 4 : Gestion Asynchrone et Pagination
#### Objectif : Gérer le chargement et la pagination

- [ ] 4.1 Ajouter le bouton de rechargement
- [ ] 4.2 Implémenter la pagination
- [ ] 4.3 Documenter votre solution ici

_Votre réponse pour l'exercice 4 :_
```
J'ai implémenté la pagination en appelant l'API avec les paramètres skip et limit. Chaque page contient 10 produits, et naviguer vers une nouvelle page signifie sauter 10 * (numéro de la page - 1) produits.
L'état currentPage suit le numéro de la page actuelle, et la valeur de skip est calculée dynamiquement comme 10 * (currentPage - 1). Lorsque l'utilisateur clique sur "Suivant" ou "Précédent", la valeur de currentPage est mise à jour, ce qui déclenche un nouvel appel API avec les nouvelles valeurs de skip et limit.

![image_Alt]([image_url](https://github.com/RajaaKacemi/tp-react-hooks/blob/ad96f059a54c6542514a63be1d3c5d712bc23ecf/public/assets/exercice4.png))
```

## Rendu

- Ajoutez l'URL de votre dépôt Github dans  **Classroom** et envoyer la réponse dès le démarage de votre projet.
- Les push doivent se faire au fûr et à mesure que vous avancez dans votre projet.
- Le README.md doit être à jour avec vos réponses et captures d'écran. 
- Chaques exercice doit faire l'objet d'au moins un commit avec un message mentionnant le numéro de l'exercice.

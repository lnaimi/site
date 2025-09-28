# Vérification des fichiers pour GitHub Pages

## Fichiers HTML requis :
- ✅ index.html
- ✅ services.html
- ✅ equipe.html
- ✅ documentation.html
- ✅ activites.html
- ✅ partenaires.html
- ✅ contact.html

## Fichiers CSS requis :
- ✅ styles.css

## Fichiers JavaScript requis :
- ✅ script.js

## Fichiers d'images requis :
- ✅ images/logo.png
- ✅ images/formation.jpg
- ✅ images/conseil.jpg
- ✅ images/Accompagnement.jpg
- ✅ images/Renouvelables.jpg
- ✅ images/tbs.jpg
- ✅ images/Territorial.jpg
- ✅ images/okti.PNG
- ✅ images/asmae.jpg
- ✅ images/bni.jpg
- ✅ images/gnf.jpg
- ✅ images/lamiae.jpg
- ✅ images/membres/ (dossier avec toutes les photos)

## Fichiers de vidéo requis :
- ✅ Videos/1.mp4

## Fichiers favicon requis :
- ✅ favicon.ico
- ✅ favicon-16x16.png
- ✅ favicon-32x32.png
- ✅ apple-touch-icon.png
- ✅ android-chrome-192x192.png
- ✅ android-chrome-512x512.png
- ✅ site.webmanifest

## Instructions pour GitHub Pages :

1. **Assurez-vous que tous les fichiers sont committés** :
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

2. **Vérifiez les paramètres GitHub Pages** :
   - Allez dans Settings > Pages
   - Source : Deploy from a branch
   - Branch : main
   - Folder : / (root)

3. **Attendez quelques minutes** pour que GitHub Pages se déploie

4. **Testez l'URL** : https://votre-username.github.io/votre-repo-name

## Problèmes courants et solutions :

### Si les styles ne s'affichent pas :
1. Vérifiez que `styles.css` est bien dans la racine
2. Videz le cache du navigateur (Ctrl+F5)
3. Testez en navigation privée
4. Vérifiez la console du navigateur (F12) pour les erreurs

### Si les images ne s'affichent pas :
1. Vérifiez que le dossier `images/` existe
2. Vérifiez la casse des noms de fichiers
3. Vérifiez que les images sont bien committées

### Si la vidéo ne s'affiche pas :
1. Vérifiez que le dossier `Videos/` existe
2. Vérifiez que `1.mp4` est bien dans ce dossier
3. GitHub Pages a une limite de taille de fichier (100MB)

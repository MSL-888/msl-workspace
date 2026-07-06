# L'Étiquette au Quotidien — Application web installable (PWA)

Projet complet, compilé et vérifié le 5 juillet 2026. Une seule base de code : elle sert la version web installable aujourd'hui, et servira les applications iOS et Android via Capacitor demain.

## Contenu du projet

Le dossier `src/` contient l'application (App.jsx : les douze modules, quiz, scénarios, lexique, page Académie, grades et certificat, aux couleurs de la charte). Le dossier `public/` contient le manifeste PWA, le service worker et les icônes générées depuis le logo officiel. La configuration Vite se trouve à la racine.

## Mise en route dans le Codespace (ou sur le Mac)

En règle générale, trois commandes suffisent :

```
npm install
npm run dev        # aperçu local pendant le développement
npm run build      # produit le dossier dist/ à mettre en ligne
```

Node.js version 18 ou plus récente est attendu ; le projet a été compilé avec succès sous Node 18/20 dans l'environnement de préparation.

## Déploiement sur votre hébergement

Le dossier `dist/` produit par `npm run build` est un site statique : il se dépose tel quel sur un hébergement web — par exemple un sous-domaine du type `app.letiquetteauquotidien.com` créé dans votre espace o2switch, avec le contenu de `dist/` placé à sa racine (par le gestionnaire de fichiers cPanel ou par FTP).

Deux conditions rendent l'application « installable » sur les téléphones : être servie en HTTPS (les hébergeurs le proposent généralement via un certificat gratuit à activer — à vérifier dans votre espace o2switch) et être servie à la racine du domaine ou sous-domaine. Pour un déploiement en sous-dossier, la valeur `base` de `vite.config.js` est à ajuster, comme indiqué en commentaire dans le fichier.

## Installation sur les téléphones

Sur iPhone : Safari → bouton Partager → « Sur l'écran d'accueil ». Sur Android : Chrome propose l'installation, sinon menu → « Installer l'application ». L'icône aux fleurs de lys apparaît alors sur l'écran d'accueil et l'application s'ouvre en plein écran.

## Limites connues de cette version — en toute transparence

La progression est enregistrée dans l'appareil (elle survit à la fermeture, mais pas à un changement de téléphone) ; les comptes utilisateurs avec sauvegarde en ligne, prévus au cahier des charges V1, viendront avec le branchement Supabase ou Firebase. La notification quotidienne n'est pas encore active : je ne suis pas certain de l'état actuel des notifications web sur iPhone — je crois qu'elles sont possibles pour les PWA installées depuis iOS 16.4, mais ce point est à vérifier dans la documentation Apple avant de s'y engager. La version anglaise et le cycle Prestige relèvent de la co-rédaction à venir. Enfin, les titres emploient Montserrat en substitut de Gotham, police commerciale, jusqu'à l'intégration de vos fichiers sous licence.

## L'étape suivante vers les boutiques

Le moment venu, Capacitor s'ajoute à ce même projet pour produire les applications iOS et Android ; votre Mac et Xcode prendront le relais pour la compilation et le dépôt sur l'App Store. Rien de ce qui est construit ici ne sera à refaire.

---

*L'Étiquette au Quotidien — www.letiquetteauquotidien.com — Une maison Monsieur Stephane Laurent*

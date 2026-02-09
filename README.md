# Factory Eat Website

Site web moderne et responsive pour Factory Eat - Service d'optimisation de visibilité Uber Eats pour restaurants physiques.

## 🚀 Démarrage Rapide

### Développement Local

1. **Cloner ou télécharger le projet**
```bash
cd factory-eat
```

2. **Lancer un serveur local**

Avec Python:
```bash
python -m http.server 8000
```

Avec Node.js:
```bash
npx http-server -p 8000
```

Avec PHP:
```bash
php -S localhost:8000
```

3. **Ouvrir dans le navigateur**
```
http://localhost:8000
```

## ⚙️ Configuration Requise

### 1. Google Maps API

**Fichier:** `nos-partenaires.html` (ligne ~200)

Remplacez `YOUR_API_KEY_HERE` par votre clé API Google Maps:

```html
<script async defer
  src="https://maps.googleapis.com/maps/api/js?key=VOTRE_CLE_API&callback=initMap">
</script>
```

**Obtenir une clé API:**
1. Allez sur [Google Cloud Console](https://console.cloud.google.com/)
2. Créez un nouveau projet ou sélectionnez un projet existant
3. Activez l'API "Maps JavaScript API"
4. Créez des identifiants (clé API)
5. Restreignez la clé à votre domaine pour la sécurité

### 2. Service Email (EmailJS ou Formspree)

**Fichier:** `js/form-validation.js` (lignes 100-120)

#### Option A: EmailJS (Recommandé)

1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Configurez un service email
3. Créez un template d'email
4. Décommentez et configurez dans `form-validation.js`:

```javascript
await emailjs.send(
  'YOUR_SERVICE_ID',      // Votre Service ID
  'YOUR_TEMPLATE_ID',     // Votre Template ID
  formData,
  'YOUR_PUBLIC_KEY'       // Votre Public Key
);
```

#### Option B: Formspree

1. Créez un compte sur [Formspree](https://formspree.io/)
2. Créez un nouveau formulaire
3. Décommentez et configurez dans `form-validation.js`:

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(formData)
});
```

### 3. Calendly

**Fichier:** `contact.html` (ligne ~150)

Remplacez `YOUR_USERNAME` par votre nom d'utilisateur Calendly:

```html
<div class="calendly-inline-widget" 
     data-url="https://calendly.com/VOTRE_USERNAME/30min">
```

**Configuration:**
1. Créez un compte sur [Calendly](https://calendly.com/)
2. Configurez un type d'événement (ex: "Consultation 30 min")
3. Copiez le lien de votre page de planification
4. Remplacez dans le code

### 4. Google Analytics 4

**Fichier:** `index.html` et toutes les pages (avant `</body>`)

Remplacez `G-XXXXXXXXXX` par votre ID de mesure GA4:

```javascript
gtag('config', 'G-VOTRE_ID_GA4');
```

**Obtenir un ID GA4:**
1. Allez sur [Google Analytics](https://analytics.google.com/)
2. Créez une propriété GA4
3. Copiez l'ID de mesure (format: G-XXXXXXXXXX)

## 📦 Déploiement

### Option 1: Netlify (Recommandé)

1. **Créez un compte sur [Netlify](https://www.netlify.com/)**

2. **Déployez via Git:**
```bash
# Initialisez un repo Git
git init
git add .
git commit -m "Initial commit"

# Poussez sur GitHub/GitLab
git remote add origin YOUR_REPO_URL
git push -u origin main
```

3. **Sur Netlify:**
   - New site from Git
   - Sélectionnez votre repo
   - Build settings: aucun (site statique)
   - Deploy!

4. **Configuration du domaine personnalisé:**
   - Domain settings > Add custom domain
   - Suivez les instructions DNS

### Option 2: Vercel

```bash
# Installez Vercel CLI
npm i -g vercel

# Déployez
vercel
```

### Option 3: GitHub Pages

1. Créez un repo GitHub
2. Poussez votre code
3. Settings > Pages
4. Source: main branch
5. Save

### Option 4: Hébergement traditionnel (OVH, O2Switch, etc.)

1. Compressez tous les fichiers en ZIP
2. Connectez-vous à votre FTP
3. Uploadez dans le dossier `public_html` ou `www`
4. Assurez-vous que `index.html` est à la racine

## 🔒 SSL/HTTPS

**Important:** Pour la production, utilisez HTTPS.

- Netlify/Vercel: SSL automatique gratuit
- Hébergement traditionnel: Utilisez Let's Encrypt (gratuit)

## 📱 PWA (Progressive Web App)

Le site est PWA-ready. Pour activer:

1. **Créez des icônes d'application**
   - Utilisez [PWA Asset Generator](https://www.pwabuilder.com/)
   - Générez toutes les tailles requises
   - Placez dans `/images/`

2. **Enregistrez le Service Worker**

Ajoutez dans `index.html` (avant `</body>`):

```html
<script>
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('SW registered'))
      .catch(err => console.log('SW registration failed'));
  });
}
</script>
```

3. **Testez**
   - Chrome DevTools > Application > Service Workers
   - Lighthouse > PWA audit

## 🎨 Personnalisation

### Couleurs

**Fichier:** `css/main.css` (lignes 10-20)

```css
:root {
  --color-primary: #FF6B35;     /* Orange principal */
  --color-dark: #2E3440;        /* Gris foncé */
  --color-success: #28A745;     /* Vert succès */
}
```

### Polices

**Fichier:** Toutes les pages HTML (`<head>`)

Changez le lien Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=VOTRE_POLICE&display=swap" rel="stylesheet">
```

## 📊 Suivi des Performances

### Lighthouse Audit

```bash
# Installez Lighthouse
npm install -g lighthouse

# Lancez l'audit
lighthouse http://localhost:8000 --view
```

**Objectifs:**
- Performance: >90
- Accessibility: >95
- Best Practices: >90
- SEO: >95
- PWA: >90

## 🐛 Dépannage

### La carte Google Maps ne s'affiche pas
- Vérifiez que votre clé API est valide
- Vérifiez que l'API Maps JavaScript est activée
- Vérifiez la console pour les erreurs

### Le formulaire ne s'envoie pas
- Vérifiez votre configuration EmailJS/Formspree
- Vérifiez la console pour les erreurs
- Testez avec le mode simulation (déjà actif par défaut)

### Les animations ne fonctionnent pas
- Vérifiez que `animations.js` est bien chargé
- Vérifiez la console pour les erreurs JavaScript
- Testez dans un navigateur moderne (Chrome, Firefox, Safari)

## 📞 Support

Pour toute question:
- Email: contact@factory-eat.fr
- Documentation: Ce fichier README

## 📄 Licence

© 2026 Factory Eat. Tous droits réservés.

## 🔄 Mises à jour

### Version 1.0.0 (Février 2026)
- Site initial avec 5 pages
- Intégration Google Maps
- Formulaire de contact
- PWA-ready
- Responsive design

# Installation

### Prérequis :
*A faire qu'une fois par ordinateur*

- Installer [Node.js](https://nodejs.org/en/)
- Modules node "globaux" : `sudo npm i -g gulp bower npm-check-updates`



### Installer les modules node :
`sudo npm i`

### Mise à jour :
`npm run up`

### Exécution
`gulp`

*Les commandes doivent être executées dans le repertoire du theme*

---


## CSS

### Stylus

Nous utilisons [stylus](https://learnboost.github.io/stylus/) comme preprocesseur CSS, la syntaxe est documenté ici : [https://learnboost.github.io/stylus/](https://learnboost.github.io/stylus/)

---

### Fichiers Stylus (`.styl`)

Les fichiers se trouvent dans le dossier `src/css/` et doivent avoir une extension `.styl`

Les fichiers inclus sont définis dans le fichier `all.styl`, pour créer un nouveau sous-dossier, il faut donc l'ajouter à `all.styl`

Les fichiers non utilisés ont une extension .off, pour les utiliser il suffit de les renommer en enlevant le .off

Toujours indenter avec 2 espaces.

Le css est divisé selon la structure suivante :

 - `variables.styl` : les valeurs communes (fonts, couleurs, dimensions, ...)
 - `font.styl` : les `@font-face`
 - `element/` : les éléments d'interfaces réutilisables (boutons, titres, messages, pager, form, ...)
 - `layout/` : la structure principale de l'interface (header, navigation, footer)
 - `plugin/` : pour la customisation de plugin installé avec Bower ou pour ajouter directement des plugins
 - `node/` : pour les types de contenu, et leur different view mode par exemple :
  - `node/news/news.styl`
  - `node/news/news-teaser.styl`
  - `node/news/news-slide.styl`
 - `section/` : pour le système de section, un fichier par type de section
 - `import/` : contient des mixins stylus

---

### Unités (`px` / `rem`)

Il faut utiliser le pixel comme unité.

Les `px` sont convertis automatiquement en `rem` par le module [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem)

Les valeurs de `1px` sont conservées en pixel, pour éviter par exemple que des bordures disparaissent en responsive. Paramètre : `{minPixelValue: 2}`

Si par exemple la conversion des unités d'un plugin pose problème (ca ne devrait pas arriver), il est possible de blacklister des selecteurs. Paramètre : `{selectorBlackList: []}`

---

### Medias queries

On utilise la librairie Stylus : [Rupture](https://github.com/jenius/rupture)

Exemple d'utilisation :

```
#container
  +above(500px)
    //
  +below(500px)
    //
  +between(500px, 1000px)
    //
```
et ce à n'importe quel niveau d'indentation.

---

### Responsive

La commande `npm run responsive` :

 - Installe le plugin jQuery [resizeend](https://github.com/nielse63/jquery.resizeend)
 - Active `layout/responsive.js` qui ajoute les classes :
  - `mobile` s'il s'agit d'un smartphone
  - `tablet` s'il s'agit d'une tablette
  - `portrait` ou `landscape`

*Commande à executer dès que le support tablet / mobile est requis.*

---

### Mobile

On utilise la librairie [isMobile](https://github.com/kaimallea/isMobile) pour detecter les smartphones et tablet.

Le fichier est situé ici : `/dist/js/is-mobile.js` et doit être inclus dans le `<head>` afin de pouvoir définir un viewport

Une classe `mobile` permet de cibler les smartphones, exemple :

```
.node-news
  // css commun
  .mobile &
  	// css smartphone
```

Le code ci-dessus génére le css suivant :

```css
.node-news
{
  // css commun
}
.mobile .node-news
{
  // css smartphone
}
```

Pour tester si on est sur un smartphone en JS, il suffit de tester :

```javascript
if(isMobile.phone)
{
  // smartphone
}
if(isMobile.tablet)
{
  // tablet
}
if(isMobile.any)
{
  // tablet OR smartphone
}
if(!isMobile.any)
{
  // desktop
}
```

---

### Support IE 8

Toujours savoir en début de projet s'il faut supporter IE 8.

Si c'est le cas :

 - `gulpfile.js` : Mettre `var ie8 = true;`
 - `background-size` non supporté donc trouver des solutions alternatives
 - faire des images pour les formes rondes, fond semi-transparent style rgba()

Les classes suivantes sont ajoutées pour permettre de cibler IE :

 - `.IE` : IE9 et moins
 - `.IE6` `.IE7` `.IE8` `.IE9`

Pour simplifier il faut utiliser :

```
+ie()
  // tous les IE9 et moins

+ie(8)
  // IE8

+ie(7, 8)
  // IE7 et IE8


+ie(7, 8, 9)
  // IE7 et IE8 et IE9

```

par exemple :

```
#header
  {float}
  #logo
    float left
    png-size logo
    +ie(8)
      // css spécifique IE8
```

Pour le javascript, le dossier `src/js/ie9-/` contient les fichiers js inclus uniquement sur IE9 et moins :

 - `html5.js` pour le support des balises html5 sur IE8 et moins
 - `ie.js` pour l'ajout des classes css (IE, IE6, IE7, IE8, IE9)
 - `placeholders.min.js` pour le support de l'attribut [html5 placeholder](http://docs.webplatform.org/wiki/html/attributes/placeholder)

*Vous pouvez si besoin ajouter des fichiers js dans ce dossier, il seront automatiquement inclus sur IE9 et moins*

---

### Images

Les images doivent être enregistrés dans le dossier `src/img`, elles seront automatiquement optimisés et enregistrés dans `dist/img`.
Dans certain cas il peut s'avérer nécessaire de relancer `gulp` pour que l'opération soit effectué.

Il faut essayer de classer les images dans des dossiers de façon pertinente (pas de régle contraignante), exemples : `src/img/picto/`, `src/img/home/`, `src/img/layout/`, ...

Veiller à ce que les images ne dépassent les 300 / 400 ko si possible.

Pour optimiser les PNG avec de la transparence, le logiciel [imageAlpha](http://pngmini.com/) permet de faire des PNG8 en gardant l'alpha.

---

### Bower

[Bower](http://bower.io/) facilite l'installation de plugin JS

Il faut executer les commandes bower dans le repertoire du theme.

Exemple de commande pour installer Slick carousel :

`bower i -S slick-carousel`

Il y a une liste des plugin souvent utilisé dans `src/bower/plugins.txt` avec les commandes deja faites.

Il faut relancer `gulp` apres avoir installer un plugin pour qu'il soit pris en compte.

Les fichiers css et js des plugin sont automatiquement inclus au theme.

Pour désinstaller un plugin : `bower uninstall -S slick-carousel`

---

### Plugin JS

Pour les plugin souvent utilisés, il y a des fichiers .js et .styl deja prêt (mais désactivé par defaut `.off`).

`js : src/js/plugin/`

`css: src/css/plugin/`

Ces fichiers permettent de customiser facilement et de les utiliser facilement.

Il y a des commandes qui permettent directement d'installer ces plugins et d'activer leurs fichiers.

[iCheck](https://github.com/fronteed/iCheck) : `npm run icheck`

[Slick](http://kenwheeler.github.io/slick/) : `npm run slick`

[Select2](https://select2.github.io/) : `npm run select2`

[Chosen](https://harvesthq.github.io/chosen/) : `npm run chosen` (Utiliser Select2 de préference)

[Pikaday](https://github.com/dbushell/Pikaday) : `npm run pikaday`

[Cookie](https://github.com/js-cookie/js-cookie) : `npm run cookie`

[jScrollPane](http://jscrollpane.kelvinluck.com/) : `npm run jScrollPane`

[Raty](http://wbotelhos.com/raty) : `npm run raty`

[Sharer.js](https://ellisonleao.github.io/sharer.js/) : `npm run sharer`

[jQuery.countdown](http://hilios.github.io/jQuery.countdown/) : `npm run countdown`

[fullPage.js](http://alvarotrigo.com/fullPage/) : `npm run fullpage`

[PrettyEmbed.js](https://github.com/mike-zarandona/prettyembed.js) : `npm run prettyembed`

[Sticky header](http://git.studio.gd/gd/gd/blob/d8/src/js/plugin/sticky.js.off) : `npm run sticky`

[RangeSlider](http://ionden.com/a/plugins/ion.rangeSlider/en.html) : `npm run slider`

[Featherlight.js](http://noelboss.github.io/featherlight/) : `npm run featherlight`

[Snow](http://codepen.io/anon/pen/mVJdwp) : `npm run show`

---

### Gestion scroll JS

La commande `npm run scroll` :

 - install [animatescroll](http://plugins.compzets.com/animatescroll/)
 - install [jquery-throttle-debounce](https://github.com/cowboy/jquery-throttle-debounce)
 - active `src/js/layout/scroll.js`

*pour des scroll bar custom, il faut utiliser le plugin [jScrollPane](http://jscrollpane.kelvinluck.com/) : `npm run jScrollPane`*

---

### Mixins

### Background Image

Pour mettre des images en background, il **faut** utiliser les mixins suivants :

`png-size 'nom-image' repeat top left`

`repeat` est optionnel et par defaut en `no-repeat`

Les positions sont egalement optionnelles et non présentes par defaut

exemple : `png-size 'nom-image'`

Il existe des équivalent pour les autres format d'image : `jpg-size` `gif-size` `svg-size`

Le chemin utilisé pour les images est `/dist/img/`

Si une image se trouve dans un sous dossier il faut donc le préciser :

`png-size 'picto/search'`

Ce mixin en plus de générer `background-image`, `background-position` et `background-repeat` ajoute également :

 - `background-size` avec les dimensions de l'image
 - `width` et `height` de l'image

Si vous n'avez pas besoin de `width` et `height`, vous pouvez utiliser simplement `png` `jpg` `gif` `svg` (*sans le `-size`*)

Il est possible d'utiliser la version longue de background-position (pas de support IE8), exemple :

```
png ‘logo’ right 10px bottom 10px

png ’truc’ repeat-y right 1px bottom 1px
```

Pour `background-image none` vous pouvez utiliser `img none`

---

### Position

Module [postcss-position-alt](https://github.com/sylvainbaronnet/postcss-position-alt)

Pour `position: absolute`, `position: fixed` et `position: relative`

Il faut mettre directement le type de position, suivi de sa position `top` `left` `right` `bottom`

Exemple : `absolute top 1px left -5px`

Si une valeur de position est 0, il n'est pas utile de la préciser.

Exemple : `fixed top left`

---

### Wrapper

On appelle wrapper des `<div>` servant à centrer un ensemble d'élément avec `margin: auto`

Il y a une classe par defaut `.wrapper` qu'il faut utiliser pour ça, et en créer des variantes (exemple : `.wrapper-small`)

Pour définir un wrapper, il faut utiliser `wrapper()`. Exemple :

```
.wrapper-small
  wrapper 400px
```

A définir dans `layout/layout.styl` de préférence

---

### {float}

Structurer ses éléments en utilisant des float. Le bloc `{float}` est un raccourci pour `float:left; width: 100%;`

---

### {tr}

`{tr}` est un raccourci pour `transition: all 0.3s ease`

---

### Size

`size` est un mixin pour les `width` et `height`

Exemple :

```
size 10px 20px
```

génére :

```
width 10px
height 20px
```
Si le `width` et le `height` sont les meme, pas besoin de répéter la valeur, exemple :

```
size 10px
```

génére :

```
width 10px
height 10px
```

Il est bien sur possible d'utiliser `auto` comme valeur, exemple : `size 10px auto`

---

### Circle

Pour faire des ronds avec [postcss-circle](https://github.com/jedmao/postcss-circle) :

```
circle 10px #fff
```

génére

```css
border-radius: 50%;
width: 10px;
height: 10px;
background-color: #fff;
```

La couleur est optionnel.

---

### Triangles

Pour faire des triangles css avec [postcss-triangle](https://github.com/jedmao/postcss-triangle)

Voir la [documentation](https://github.com/jedmao/postcss-triangle)

---

### `font-size` / `line-height`

Le module [postcss-short-font-size](https://github.com/jonathantneal/postcss-short-font-size) permet de mettre un `line-height` en deuxième paramètre de `font-size`

Exemple : `font-size 16px 16px`

---

### `color` / `background-color`

Le module [postcss-short-color](https://github.com/jonathantneal/postcss-short-color) permet de mettre un `background-color` en deuxième paramètre de `color`

Exemple : `color #fff #000`

Le module [postcss-color-short](https://github.com/andrepolischuk/postcss-color-short) permet de raccourcir les codes couleurs qui se répéte :

```
#f0 donne #f0f0f0
#f donne #fff

```


---

### Quantity queries

le module [postcss-quantity-queries](https://github.com/pascalduez/postcss-quantity-queries) permet de simplifier les selecteurs type `:nth-child`.

Voir la [documentation](https://github.com/pascalduez/postcss-quantity-queries)

---

### Vendor Prefix

Ne jamais ajouter de prefixe type `-moz-` ou `-webkit-`. Ils sont ajouté automatiquement par le module [Autoprefixer](https://github.com/postcss/autoprefixer)

---

### `:before` et `:after`

/!\ FONCTIONNALITÉ DÉSACTIVÉ POUR LE MOMENT (pb dans certain cas)

Pas besoin d'ajouter le `content ''`, il est ajouté automatiquement par le module [postcss-pseudo-content-insert](https://github.com/liquidlight/postcss-pseudo-content-insert)

---


### Raccourcis rgba()

Stylus permet d'utiliser les couleurs hex dans les rgba :

```
rgba(#fff, 0.5)
```

---

### Unité par defaut (px)

Le module [postcss-default-unit](https://github.com/antyakushev/postcss-default-unit) ajoute par defaut px comme unité.

Exemple `font-size 10` donne `font-size 10px`

*attention les `line-height` peuvent avoir des valeurs sans unité donc ça ne sera pas ajouté pour les `line-height`*

---

### Shorthand properties

le module [postcss-crip](https://github.com/johnie/postcss-crip) crée des alias pour les propriétés css.

Exemple :

```
.crip
  w 100px
  h 100px
  m 20px
  zi 1
```

Donne :

```css
.crip {
  width: 100px;
  height: 100px;
  margin: 20px;
  z-index: 1;
}
```

La liste complète se trouve ici : [https://github.com/johnie/crip-css-properties](https://github.com/johnie/crip-css-properties)

---

### Centrer

Le module [postcss-center](https://github.com/jedmao/postcss-center) permet de centrer facilement un élément.

*La technique utilisé ne fonctionne pas sur IE8 !*

pour centrer horizontalement : `left: center`

pour centrer verticalement : `top: center`

Le module met l'élément en absolute donc il "sort du flux"

Ca génère :

```css
position: absolute;
top: 50%;
left: 50%;
margin-right: -50%;
transform: translate(-50%, -50%)

```

Il est possible de garder l'élément dans le flux en ajoutant à la suite `position: relative;`

---

### font magician

Le module [postcss-font-magician](https://github.com/jonathantneal/postcss-font-magician) inclus automatiquement les google font utilisé dans le css.

*Ca marche aussi avec les fonts chargés en local mais j'ai pas encore testé.*


### Autres modules utilisés :

 - [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin) : Optimize PNG, JPEG, GIF and SVG images
 - [gulp-uglify](https://github.com/terinjokes/gulp-uglify) : Minify JavaScript with UglifyJS2
 - [main-bower-files](https://github.com/ck86/main-bower-files) : récupere les fichiers js et css des librairies installés avec Bower
 - [gulp-postcss](https://github.com/postcss/gulp-postcss) : Permet l'utilisation de module [PostCSS](https://github.com/postcss/postcss)
 - [csswring](https://github.com/hail2u/node-csswring) : Minify CSS
 - [css-mqpacker](https://github.com/hail2u/node-css-mqpacker) : regroupe les medias queries similaires
 - [postcss-opacity](https://github.com/jonathantneal/postcss-opacity) : ajoute le support de `opacity` à IE8
 - [postcss-normalize-charset](https://github.com/TrySound/postcss-normalize-charset) : Add necessary or remove extra `@charset`
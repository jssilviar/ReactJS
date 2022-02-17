# Carrito de compras "LadyDi Cakes"
# Descripción
Página web de compras, organización y asesoría de reuniones familiares y eventos.

# Video
[![Watch the video](./LadyDiCakes.png)](https://youtu.be/KbvULwdIpf4)
# URL's en la web
Mi página está desplegada en Heroku: [https://ladydicakes.herokuapp.com](https://ladydicakes.herokuapp.com/)

# Tecnologías usadas
- HTML
- CSS
- Javascript
- React
- reactDOM
- Bootstrap
- Firebase
- Node.js
- NPM
- Sweetalert
- useForm 

# Estructura
El proyecto está dividido de la siguiente manera:
- carpeta "public": contiene el archivo index.html, el manifest.json, así como el ícono del carrito, loading y logo de la tienda Ladydi Cakes.
- carpeta "src":
  - alerts: contiene los sweetAlerts de Checkout.js y ItemCount.js
  - components: contiene los componentes.
  - context: contiene el cartContext.js
  - firebase: contiene el connetor.js e index.js
  - hooks: contiene el useCart.js
  - mock: contiene el products.json
  - pages: contiene tods las páginas de la web (BackingPallet, Cakes, Cart, Catering, EmptyCart, Home)
  - providers: contiene el CartProvider.js
  - App.css
  - App.js
  - index.css
  - index.js
- .gitignore
- package-lock.json
- package.json
- README.md
# Requerimientos para ejecutar la app
- Tener instalado node.js v16.13.0 como mínimo
- Tener instalado NPM v8.1.0 como mínimo
- Tener una aplicación en Firebase ya que se usará el servicio "Firestore Database"

# Librerías usadas
- "@testing-library/jest-dom": "^5.16.1",
- "@testing-library/react": "^11.2.7",
- "@testing-library/user-event": "^12.8.3",
- "firebase": "^7.24.0",
- "react": "^17.0.2",
- "react-dom": "^17.0.2",
- "react-hook-form": "^7.26.1",
- "react-router-dom": "^5.3.0",
- "react-scripts": "4.0.3",
- "sweetalert2": "^11.3.6",
- "web-vitals": "^1.1.2"

# Pasos para abrir la aplicación
1. Clonar el [repositorio](https://github.com/jssilviar/mi-carrito-jesus-sanchez.git) desde Github.
2. Moverse a la carpeta descargada:
```
    cd mi-carrito-jesus-sanchez/
```
3. Iniciar la aplicación con npm start
```
    npm start
```
# [Licencia MIT](./LICENCE.md)


# Weather App

Aplicación para celular sobre el clima. Proyecto del curso de especialización en desarrollo mobile de Codo a Codo & IBM Skillsbuild.


## Autores

- [Andres Prysko](https://www.github.com/#)
- [Juan E. Chemello](https://www.github.com/me-chell)
- [María Cristina Roma](https://www.github.com/#)
- [Romina Pantano](https://www.github.com/#)

  
## Ejecutar localmente

Clonar el proyecto

```bash
  git clone https://github.com/me-chell/weather-mobile.git
```

Ir al directorio del proyecto

```bash
  cd weather-mobile
```

Instalar dependencias

```bash
  npm install
```

Start

```bash
  npm start
```

  
## Appendix

Crear branch por cada feature y enviar PR para realizar merge a `develop`.

### Branch
``` bash
    git switch -c f01-setup-navigation
    ...
    git add .
    git commit -am "Se implementó react-nativagation"
    ...
    git push -u origin f01-setup-navigation
```

### Pull request
El Pull Request se crea para hacer el merge **SIEMPRE** a `develop` y se agregan a todos los miembros del equipo como reviewers:
``` bash
https://github.com/me-chell/weather-mobile/pull/new/f01-setup-navigation
```

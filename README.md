# NhaTempo (Ionic 5 & Capacitor)

![img](https://i.ytimg.com/vi/y_UUjPkxlZ0/maxresdefault.jpg)

## Info
App feita com Ionic 5  e Capacitor, como proposito de servir e ajudar alunos a terem ideias (TCC),aprender ou dar continuidade a este projecto.

## Requisitos para rodar a APP

### Instalar Ionic, caso não o tenha, e seguir os passos na documentação official.
[https://ionicframework.com/docs/intro/cli](https://ionicframework.com/docs/intro/cli)

#

### Clone o projecto 

```
git clone https://github.com/hitmacreed/NhaTempo
```

### Inicializar a APP
```
npm i
```
#

### Correr a APP
```
npm install @capacitor/core
npm install @capacitor/cli --save-dev]
ionic capacitor run <platform> [options] --livereload

```
#

## Estrutura  da APP

 ```bash
 |-- app
        |-- interface
            |-- weather-interface.ts
        |-- services
            |-- api-calls.service.ts
            |-- loader.service.ts
        |-- utils
            |-- islands.ts
        |-- views
            |-- home(...)
            |-- shared
                |-- laoder(...)
                |-- side-menu(...)
                |-- toolbar(...)       
        |-- app-routing.module.ts
        |-- app.component.html
        |-- app.component.scss 
        |-- app.component.ts
        |-- app.module.ts  
|-- assets
        |-- icon
        |-- lottie
 |-- environments(...)           
 ```
 #

## Preview da App
<img src="art/preview.gif" width="344" height="730">

 ```bash   _
       .__(.)< (Sou um gato continua a descer... MEOW!!!)
        \___)   
 ~~~~~~~~~~~~~~~~~~
```


## License

```
MIT License

Copyright (c) 2021 Kevin Dias

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```







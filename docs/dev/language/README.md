---
sidebar_position: 4
title: Lenguaje
description: Documentación sobre lenguajes de programación.
---

```mdx-code-block
import DocCard from '@theme/DocCard';
```

## Requisitos

`/tutorial/data/type`

## Información

Primero que nada, se sugiere tener esta página abierta al mismo tiempo que tienes otra página con la documentación de álgún lenguaje de programación, por ejemplo tener la página "Java" que se encuentra en la barra de navegación a la izquierda de la pantalla mientras mantiene esta página abierta, esto con el fin de generar un conocimiento más ordenado sin tener que regresar para revisar que significaba alguna cosa.

Al decir "lenguaje de programación" NO se refiere a algo como "español" o "inglés", sino que un lenguaje de programación es una forma de hacer la misma cosa pero escribiendo el código de manera distinta, como en la vida real que puedes escribir algo en español y al mismo tiempo en inglés, las dos cosas significan lo mismo pero se escriben diferente.

### Y si hacen lo mismo, por qué hay tantos lenguajes de programación?

Porque sí.

Okno, los lenguajes de programación son creados siguiendo un estilo, concepto, composición y alcance distinto, en gran parte pueden hacer los mismo pero hay algunos que permiten hacer otras cosas de manera más fácil o bien interactuar de otras formas.

En general, si un lenguaje de programación es popular es porque puede llegar a especializarse en algo además que gran parte de empresas lo usan para distintas actividades.

La gente tiende a discutir sobre "este lenguaje es mejor que el otro", aquí solamente se hablaran de algunos lenguajes, más no se hará una comparativa para denominar que algo es mejor o peor, ya que desde un márgen general eso no es relevante, si aprendes lo suficiente sobre conceptos básicos, te será fácil aplicar esos conceptos para otros lenguajes en un futuro y por consiguiente no volver a pasar por el proceso de "aprender desde cero".

## Composición

Los lenguajes de programación son variados, pero existen cosas que entre algunos tienen en común, por lo que resulta importante remarcar.

### Orientado a objectos

Se llama "OOP Language (Object Oriented Programming Language)", recuérdalo bien.

Al decir que un lenguaje es "orientado a objetos", es básicamente decir que los valores deben ser de cierto tipo para hacer cierta cosa, de lo contrario un lenguaje que no sigue esta clase de proceso no pone atención a que clase de valores se están tratanto, y busca funcionar de esa manera hasta que se produzca un error.

No quiere decir que los lenguajes orientados a objetos no tengan errores, sino que al ser orientados a objetos es probable que experimentes con una forma "más segura" de manejar valores, pero al momento de obtener un error tendrás un problema más complejo para resolver.

Al decir "complejo" NO significa que "más difícil", sino que el error va más allá de preocuparte por el tipo de valor manejado.

### Dirigido por eventos

Se llama "Event-driven architecture", recuérdalo bien.

Este concepto es basado en el entorno donde se ejecuta el código, un entorno dirigido por eventos significa que puedes interactuar con ciertas cosas que no estás solicitando directamente, en otras palabras, tienes tu código y quieres que el entorno donde se está ejecutando le diga a tu código que haga ciertas cosas, al ser un entorno dirigido por eventos puedes hacer que al momento de ejecutarse cierto evento, tu código haga algo con la detección de ese evento.

### Programación genérica

Se llama "Generic programming", recuérdalo bien.

Como el nombre lo indica, es cuando "técnicamente" ya escribiste el código y se supone que debe ejecutarse de esa manera, pero al momento de ser ejecuta sus interacciones cambian dependiendo la forma en como se ejecute, en otras palabras, el código se va "generando" en la marcha.

Es como crear una especie de "algoritmo" donde se pretende que las cosas se ejecuten de cierta manera ignorando la información que pueda llegar a tener, es básicamente programar algo sin establecer valores.

## Conceptos básicos

Más te vale recordar siempre conceptos básicos sobre programación, porque sino **estarás jodido**.

### Bloque de código

Es una parte del código que es ejecutada, es el propio código, tiene un principio y un final.

Pueden existir múltiples bloques de código.

Dentro de los bloques pueden existir comentarios, los cuales son palabras que no son tomadas como código.

### Valor

¿Qué es un valor? Pues un valor, qué mas?

Es algo que puede o no existir, es algo que está ahí como un tipo de dato o bien como algo núlo (que no existe).

Los lenguajes de programación por lo general manejan los valores de distintas maneras:

* **variable**: Es un valor que puede variar.
* **value**: Es un valor que una vez establecido, no puede ser modificado.
* **constant**: Es "algo que está ahí", es constante como el día y la noche. Se supone que ya está establecido desde un principio.

### Método

Se llama "method", recuérdalo bien.

En algunos lenguajes existen como "function" ("función" en español) y pueden o no tener un funcionamiento distinto.

* **method**: Es un bloque de código que se ejecuta.
* **function**: Pues lo mismo que el method, pero en algunos lenguaje hace "la función" de ser ejecutado desde cualquier parte.

### Argumento

Se llama "argument", recuérdalo bien.

Si un método es una parte de código, un argumento es un valor que le estableces al método antes de ejecutarlo, de esta manera el método tendrá un valor o valores que podrá utilizar el momento de ser ejecutado.

### Condición

Se llama "condition", recuérdalo bien.

Puede ser referida como "if else" o "switch" y por lo general tiene distintas aplicación, pero en general es para lograr ejecución de código de manera condicional.

Por ejemplo, se ejecutará alguna cosa si se cumple una condición.

* **if else**: Es el típico proceso de "si se cumple alguna cosa, se ejecutará cierto bloque de código".
* **switch**: Es una revisión sobre algún valor con múltiples bloques de código en fila para ser ejecutadas, donde "si el valor es cierta cosa, se ejecutará primero cierto bloque de código y luego todo lo que siga en la fila", en la mayoría de los casos la gente evita que los bloques de la fila sean ejecutadas después del que fue ejecutado primero.

### Bucle

Se llama "loop", recuérdalo bien.

* **while**: Es donde se pretende ejecutar un bloque de código mientras se cumple cierta condición.
* **for**: Lo mismo que while, solo que aquí se puede elegir el número máximo de veces que se ejecuta el bloque código en forma de condición.

### Excepción

Se llama "exception", recuérdalo bien.

En algunos lenguajes existen como "error" y pueden o no tener un funcionamiento distinto.

Pues es lo típico, si haces algo mal te salta un error, y si lo haces bien pues también te puede saltar un error jaja.

Cuando te salta un error en cierta parte del código, hará que el bloque de código se detenga.

Los lenguajes de programación **por lo general** permiten la detección de antemano de los errores, por lo que puedes incluso ejecutar otro bloque de código en caso de que el bloque de código principal haya generado un error al momento de ser ejecutado.

### Objeto

(Solo aplica a lenguajes orientados a objetos)

Se llama "object", recuérdalo bien.

En algunos lenguajes existen como "class" ("clase" en español) y pueden o no tener un funcionamiento distinto.

Bueno pues tenemos valores y métodos, qué te parece si metemos todo junto y lo hacemos funcionar distinto y separado de lo demás? Eso es un objeto, es un nuevo tipo de dato.

Al hacer nuevos tipos de datos usando objetos, hace que existan tipos de datos incompatibls entre sí ya que tienen una denominación y funcionamiento distinto por lo que se requiere manejarlos de maneras más complicadas, pero así es la programación orientada a objetos, te terminarás acostumbrando o hartando, lo que pase primero.

### Campo

(Solo aplica a lenguajes orientados a objetos)

Se llama "field", recuérdalo bien.

Pues tenemos un objeto, por qué no hacer que el objeto tenga sus propios valores por separado? Eso es un campo, solo son valores que están dentro del objeto.

### Parámetro de tipo

(Solo aplica para la programación genérica)

Se llama "type parameter", recuérdalo bien.

Digamos que no saber que rayos estás tratando de hacer porque no tienes ninguna clase de dato, pero quieres que en caso de tener un dato se ejecute cierta cosa, pues el parámetro de tipo es una especie de denominación de "supongamos que aquí existirá cierto valor".

### Evento

(Solo aplica en entornos dirigidos por eventos)

Se llama "event", recuérdalo bien.

Es una especie de valor que "aparece" cuando sucede alguna cosa, al decir que aparece significa que el entorno donde estás ejecutando el código decidió crear un evento al hacer cierta cosa, de esta manera tu código puede darse cuenta cuando sucede algo y por consiguiente ejecutar un bloque de código una vez sucede el evento.

## Manejo de valores

El manejo de valores es otro de los aspectos básicos al momento de programar, se supone que si estás usando valores debes saber como manejarlos, porque sino **estarás jodido**.

### Operaciones

Es lo típico, sumas, restas, multiplicación, división, matemática básica haciendo que algún valor (como un número) se cambie a otra cosa luego de meterle otro valor.

### Concatenación

En los tipos de datos existen los textos (String), la concatenación es solamente hacer que 2 textos sean uno solo, por ejemplo hacer que "hola " y "buenas" formen "hola buenas". 

### Inmutabilidad

Es cuando un valor no puede ser modificado, a diferencia de los valores no variables o constantes, aquí es cuando literalmente un valor debería ser modificado en cierto sentido, pero este te dice:

![](/img/meme/nao-nao-amigao.jpg)

## Tipos

### Java

```mdx-code-block
<DocCard item={{
  type: "link",
  href: "/dev/language/java/",
  label: "Java",
  description: "Documentación sobre el lenguaje de programación Java"
  }}
/>
```

### Groovy

```mdx-code-block
<DocCard item={{
  type: "link",
  href: "/dev/language/groovy/",
  label: "Java",
  description: "Documentación sobre el lenguaje de programación Groovy"
  }}
/>
```

### Kotlin

```mdx-code-block
<DocCard item={{
  type: "link",
  href: "/dev/language/kotlin/",
  label: "Java",
  description: "Documentación sobre el lenguaje de programación Kotlin"
  }}
/>
```
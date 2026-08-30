---
titulo: "Cómo automaticé la toma de datos (y qué llega hasta mi celular)"
url_slug: como-automatice-la-toma-de-datos
categoria: automatizacion
orden: null
fecha: 2026-08-30
meta_descripcion: "A grandes rasgos, cómo automaticé la recopilación y el análisis de datos de las empresas que sigo, y qué información llega finalmente a mi celular."
tags: [automatizacion, n8n, ia, app]
enlaza_a_fundamentos: []
pilares:
  youtube: ""
  instagram: ""
estado: borrador
---

Una de las preguntas que más me hacen es cómo reviso tantas empresas sin pasarme el día
pegado a una pantalla. La respuesta corta es que no lo hago a mano: construí un sistema
que junta los datos, los evalúa contra mis propios criterios, y me deja solo la parte que
de verdad requiere mi criterio — decidir. Acá cuento, a grandes rasgos, cómo funciona ese
sistema y qué es exactamente lo que termina llegando a mi celular.

## Por qué automatizar en primer lugar

Revisar una empresa a mano —sacar sus balances, calcular razones financieras, comparar
con periodos anteriores— toma tiempo y, peor, deja mucho espacio para el sesgo: es fácil
convencerse de lo que uno quiere ver. Automatizar no es solo una comodidad, es una forma
de sacarle ruido emocional a la decisión: los mismos criterios se aplican exactamente
igual a todas las empresas, todos los días, sin que mi ánimo del momento influya en el
resultado.

## De dónde salen los datos

El sistema consulta proveedores de datos financieros de mercado —los mismos que alimentan
a la mayoría de las plataformas de inversión— para obtener precios, balances y estados de
resultados de cada empresa. Cuando el proveedor principal no tiene cobertura de algo
puntual, hay un segundo proveedor de respaldo que completa el dato. No comparto los
detalles técnicos de cómo está conectado esto porque no le aporta nada al lector y sí es
información que prefiero mantener reservada por seguridad.

## El puntaje: un mismo criterio, aplicado siempre igual

Con esos datos en bruto, el sistema calcula automáticamente un conjunto de indicadores
financieros por empresa —cosas como crecimiento de patrimonio, endeudamiento, márgenes,
rentabilidad sobre el capital— y los combina en un puntaje de 0 a 100. Ese puntaje no es
un número mágico: es simplemente cuántos de mis criterios cumple la empresa, ponderados
según qué tan importante considero cada uno.

No todas las empresas se evalúan igual. Una empresa "normal" pasa por un set de criterios,
un REIT (fondo inmobiliario) pasa por otro completamente distinto porque su forma de medir
rentabilidad es otra, y un ETF no tiene puntaje de fundamentos en absoluto —para esos
muestro datos de mercado como el dividendo, el patrimonio administrado y los retornos
históricos, que es la información relevante para ese tipo de instrumento. Prefiero no
publicar el detalle exacto de las fórmulas y umbrales que uso —es, en el fondo, mi
metodología— pero la lógica general y varios de los criterios individuales sí los muestro
dentro de la misma app, con una explicación de qué mide cada uno.

Un detalle importante: el puntaje se recalcula una vez al día, no en tiempo real. Los
fundamentos de una empresa no cambian minuto a minuto, así que no tiene sentido —ni es
sano para la infraestructura que lo sostiene— recalcular constantemente algo que
prácticamente no varía en el corto plazo.

## Dónde entra la automatización (n8n) y dónde entra la IA

Todo este proceso —consultar los datos, calcularlos, guardarlos, dejarlos listos para
consultar— corre solo, sin que yo tenga que gatillarlo a mano. Uso n8n, una herramienta de
automatización de flujos, para coordinar esas tareas en el orden correcto y en el momento
correcto.

La IA la uso en dos frentes distintos, y me parece importante no mezclarlos: por un lado,
la usé (y la sigo usando) para construir y mantener todo este sistema —el código que
calcula los puntajes, la app, la automatización misma—, algo así como un asistente técnico
permanente. Por otro lado, no es la IA la que "decide" qué empresa es buena o mala: esa
lógica está en los criterios que yo definí. La IA me ayuda a construir y mejorar la
herramienta; el criterio de qué evaluar y cómo sigue siendo mío.

## Qué llega finalmente al celular

Toda esa maquinaria termina resumida en muy poco cuando abro la app en mi celular:

- El **ticker** y nombre de la empresa
- El **precio actual**
- El **puntaje** (0–100), cuando aplica
- El **detalle de criterios** que cumple y cuáles no, con una explicación de cada uno al
  tocarlos
- El **dividendo (yield)** actual
- Para ETFs: patrimonio administrado, comisión, y retornos históricos en vez de puntaje

Nada de esto requiere que yo tenga una cuenta ni que mis datos personales viajen a
ninguna parte: la lista de empresas que sigo se guarda solo en mi propio dispositivo, y lo
único que se consulta afuera son los símbolos bursátiles, no información mía.

## Por qué cuento esto

No es un tutorial para que repliques exactamente mi sistema —hay partes que prefiero
mantener reservadas, como cualquier herramienta que uno construye con esfuerzo—, sino una
forma de ser transparente sobre cómo llego a mis decisiones: no por intuición ni por lo
que leo en un feed, sino por un proceso repetible que trato de mejorar constantemente. En
próximos artículos voy a entrar más en detalle sobre partes específicas de este sistema, a
medida que tenga sentido compartirlas.

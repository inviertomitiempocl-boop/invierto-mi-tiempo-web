---
name: ruta-articulos-invierto-mi-tiempo
descripcion: Estructura y orden de los artículos del sitio web de Invierto Mi Tiempo
actualizado: 2026-08-30
---

# Ruta de artículos — Invierto Mi Tiempo (web)

Este documento define cómo se organizan, nombran y secuencian los artículos del sitio,
para que sean fáciles de navegar para un lector nuevo y fáciles de mantener en el tiempo.
No es el artículo en sí — es el mapa que le da un lugar a cada artículo.

## Por qué una estructura ahora

Hasta ahora el canal de YouTube creció sin una estrategia de adquisición: el contenido
existía, pero no había un sistema que llevara gente de un lado a otro. La web + Instagram
cambian eso: Instagram capta atención y dirige tráfico, la web organiza y profundiza el
conocimiento, YouTube muestra el proceso completo en video. Para que ese flujo funcione,
los artículos de la web necesitan una arquitectura clara desde el primer artículo, no
después de publicar 30 y descubrir que están desordenados.

## Las 6 categorías (más una especial)

Cada artículo pertenece a exactamente una categoría. El slug de la URL siempre lleva el
prefijo de la categoría.

| # | Categoría | Slug base | Qué va aquí |
|---|---|---|---|
| 0 | Sobre el proyecto | `/proyecto/` | Bienvenida, hitos, transparencia, cambios de rumbo, roadmap. Contenido meta, no educativo. |
| 1 | Fundamentos | `/fundamentos/` | Conceptos base para alguien que parte de cero: qué es un dividendo, payout ratio, yield, DRIP, cómo leer un balance. Es la "ruta de aprendizaje" — funciona como mini-curso ordenado. |
| 2 | Dividendos | `/dividendos/` | Estrategia de dividendos en profundidad: screening, reinversión, casos aplicados con la metodología CALM. |
| 3 | Automatización | `/automatizacion/` | n8n, IA aplicada a seguimiento de cartera, dashboards, herramientas propias. |
| 4 | Resultados | `/resultados/` | Diario de cartera: aportes mensuales, hitos, errores, aprendizajes. Siempre hechos pasados narrados en primera persona (ver nota CMF abajo). |
| 5 | Chile vs. Internacional | `/mercados/` | Comparativas entre invertir en Chile (acciones, Fintual) y en el extranjero (ETFs en USD, Zesty/XTB), tributación, reforma tributaria. |
| 6 | Recursos | `/recursos/` | Glosario, herramientas, brokers usados, calculadoras, libros y canales de referencia. Contenido "de consulta", no cronológico. |

**Nota de cumplimiento (aplica a Dividendos, Resultados y Mercados especialmente):**
estas tres categorías hablan de decisiones de inversión reales, así que deben seguir el
mismo criterio que ya se usa en los guiones de video (skill `guion-cmf`): se narra lo que
el autor hizo con su propio dinero y su propia metodología, nunca lo que el lector debería
hacer con el suyo. La skill de redacción de artículos que se propone más abajo aplica esto
automáticamente.

## Orden dentro de cada categoría

- **Fundamentos** es la única categoría que se lee en orden estricto, como un curso. Cada
  artículo lleva un número de secuencia en el nombre de archivo y en el frontmatter
  (`orden: 1, 2, 3...`). El primer artículo de Fundamentos debe poder leerse sin haber
  leído nada más del sitio.
- **Dividendos, Automatización, Mercados y Recursos** se publican cronológicamente dentro
  de su categoría; no necesitan leerse en un orden fijo, pero cada uno debe enlazar al
  artículo de Fundamentos que lo sustenta la primera vez que use un término técnico.
- **Resultados** es estrictamente cronológico (un artículo por mes o por hito relevante).
- **Sobre el proyecto** es cronológico y bajo volumen (pocos artículos al año).

## Nomenclatura de archivos

Carpeta de trabajo sugerida (calza con el stack que ya usas: contenido como archivos
Markdown con frontmatter, consumible por cualquier frontend/CMS headless):

```
/articulos/
  00-proyecto/
    001-nace-la-web-invierto-mi-tiempo.md
    002-...
  01-fundamentos/
    001-que-es-un-dividendo.md
    002-payout-ratio-explicado.md
    ...
  02-dividendos/
    2026-08-mi-metodologia-calm-explicada.md
    ...
  03-automatizacion/
    2026-08-como-uso-n8n-para-mi-cartera.md
  04-resultados/
    2026-08-resultados-agosto.md
  05-mercados/
    2026-08-chile-vs-etf-en-usd.md
  06-recursos/
    001-brokers-que-uso-y-por-que.md
```

Regla simple: **Fundamentos, Recursos y Sobre el proyecto** usan numeración secuencial
(`001`, `002`...) porque importa el orden de lectura. **Dividendos, Automatización,
Mercados y Resultados** usan fecha (`AAAA-MM-slug`) porque importa la cronología, no una
secuencia didáctica.

## Frontmatter estándar (todos los artículos)

```yaml
---
titulo: ""
slug: ""
categoria: fundamentos | dividendos | automatizacion | resultados | mercados | recursos | proyecto
orden: null            # solo Fundamentos/Recursos/Proyecto
fecha: AAAA-MM-DD
meta_descripcion: ""   # máx 155 caracteres, para SEO
tags: []
enlaza_a_fundamentos: []   # slugs de artículos de Fundamentos que este artículo asume conocidos
pilares:
  youtube: ""          # link al video relacionado, si existe
  instagram: ""        # link al reel/story relacionado, si existe
estado: borrador | publicado
---
```

## Cómo se conecta con YouTube e Instagram

- **Instagram**: stories cortas que citan una idea del artículo y linkean directo a él
  (o al video de YouTube si el artículo nace de un video). Es el canal de descubrimiento.
- **YouTube**: el video profundiza en formato audiovisual; la descripción del video
  siempre linkea al artículo correspondiente para el lector que prefiere texto o quiere
  releer/citar datos.
- **Web**: es el "hub" — el único lugar donde el contenido queda organizado y buscable
  por categoría. Cada artículo nuevo se anuncia en Instagram y, cuando corresponde, en la
  descripción del video de YouTube relacionado.

## Próximo paso sugerido

1. Publicar el artículo 001 de "Sobre el proyecto" (bienvenida a la web) — ya redactado,
   ver archivo adjunto.
2. Definir y escribir los primeros 3–4 artículos de Fundamentos (son los que más tráfico
   de búsqueda y de nuevos lectores van a recibir, y sostienen el resto de las
   categorías).
3. Recién después, alimentar Dividendos/Automatización/Resultados a medida que haya
   contenido de video correspondiente.

---
name: articulos-imt
description: Escribe o edita artículos del sitio web de Invierto Mi Tiempo (Astro Content Collections, carpeta site-src/src/content/articulos/). Úsala siempre que se cree, edite o revise un artículo del sitio — incluye reglas de formato obligatorias para que el archivo se renderice bien a la primera, y el criterio de cumplimiento CMF ya usado en los guiones de video.
---

# Artículos del sitio Invierto Mi Tiempo

Esta skill existe porque el primer artículo generado (`001-nace-la-web-invierto-mi-tiempo.md`)
rompió el render dos veces: traía notas de producción mezcladas con el contenido público, y
un título duplicado. Estas reglas no son preferencia de estilo — son requisitos técnicos del
pipeline (Astro Content Collections) que si no se siguen, rompen la página.

## Regla 1 — El archivo del artículo es SOLO contenido público

`site-src/src/content/articulos/**/*.md` se renderiza **completo, tal cual, sin edición** en
la página pública del artículo (`<Content />` de Astro). Todo lo que esté en ese archivo,
un lector lo va a ver.

**Nunca pongas en el archivo del artículo:**
- Prompts de generación de imágenes (Gemini, Midjourney, etc.)
- Notas de producción, checklists de qué imagen falta, comentarios editoriales
- Cualquier meta-comentario sobre el proceso de escritura del artículo mismo

**Dónde va eso en cambio:** un archivo hermano en `site-src/docs/notas-articulos/`, con el
mismo nombre base + sufijo `.notas.md` (ej. `001-nace-la-web-invierto-mi-tiempo.notas.md`).
Ese directorio nunca se importa como Content Collection y nunca se publica.

## Regla 2 — No dupliques el título

El layout de artículo ya renderiza `titulo` del frontmatter como `<h1>`. **El cuerpo del
markdown NUNCA debe empezar con `# Título`** — si lo hace, el título aparece dos veces en
la página. El cuerpo empieza directo con la imagen de portada o el primer párrafo.

## Regla 3 — Frontmatter obligatorio

```yaml
---
titulo: ""              # se renderiza como <h1>, no lo repitas en el body
url_slug: ""             # OJO: se llama "url_slug", NO "slug" — "slug" está reservado
                          # por Astro Content Collections y rompe el build si se usa
categoria: proyecto | fundamentos | dividendos | automatizacion | resultados | mercados | recursos
orden: null               # solo Fundamentos/Recursos/Proyecto (número de secuencia)
fecha: AAAA-MM-DD
meta_descripcion: ""      # máx 155 caracteres, para SEO
tags: []
enlaza_a_fundamentos: []  # slugs de artículos de Fundamentos que este artículo asume conocidos
pilares:
  youtube: ""
  instagram: ""
estado: borrador | publicado   # ver Regla 4
---
```

Ver `site-src/docs/00-ruta-y-taxonomia-articulos.md` para el detalle completo de categorías,
nomenclatura de archivos y cómo se conecta con YouTube/Instagram.

## Regla 4 — `estado: borrador` es el default, y solo el humano lo cambia a `publicado`

Un artículo nuevo siempre nace en `estado: borrador`. El índice de artículos y las rutas
individuales filtran por `estado: publicado` — un borrador no genera página ni aparece
listado, así que es seguro dejarlo a medio trabajar en el repo. **Nunca cambies `borrador` a
`publicado` por iniciativa propia** (ni Cowork ni Claude Code) — es una decisión editorial
del usuario. Avísale que el artículo está listo para revisión y que el cambio de estado le
corresponde a él.

## Regla 5 — Imágenes

Van en `imagenes/<slug-del-articulo>/` junto al `.md` del artículo, referenciadas con rutas
relativas (`./imagenes/...`). Astro las optimiza automáticamente (WebP, tamaño reducido) al
hacer build — no hace falta comprimirlas a mano antes de subirlas.

Para consistencia visual del personaje/avatar en todas las imágenes del proyecto, usar
siempre la descripción de `site-src/docs/estilo-visual-personaje.md` al inicio de cada
prompt de generación.

## Regla 6 — Cumplimiento CMF (aplica especialmente a Dividendos, Resultados y Mercados)

Mismo criterio que la skill `guion-cmf` usa para los guiones de video: se narra lo que el
autor hizo con su propio dinero y su propia metodología, en primera persona y como hecho
pasado — nunca como recomendación de lo que el lector debería hacer con el suyo. Si hay
duda sobre si una frase cruza la línea hacia asesoría financiera regulada, formularla como
"esto fue lo que yo hice y por qué", no como "esto es lo que deberías hacer".

## Checklist antes de entregar un artículo

- [ ] El body del `.md` no repite `titulo` como encabezado `# `
- [ ] No hay prompts de imagen, notas de producción ni checklists dentro del `.md` del artículo
- [ ] `url_slug` (no `slug`) está presente y en formato kebab-case
- [ ] `estado: borrador` (a menos que el usuario haya pedido explícitamente publicarlo)
- [ ] Las imágenes referenciadas existen en `imagenes/<slug>/` con rutas relativas correctas
- [ ] El lenguaje sigue el criterio CMF de la Regla 6 si el tema es de decisiones de inversión

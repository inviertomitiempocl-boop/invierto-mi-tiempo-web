export const CATEGORIAS = {
  proyecto: 'Sobre el proyecto',
  fundamentos: 'Fundamentos',
  dividendos: 'Dividendos',
  automatizacion: 'Automatización',
  resultados: 'Resultados',
  mercados: 'Chile vs. Internacional',
  recursos: 'Recursos',
} as const;

export type Categoria = keyof typeof CATEGORIAS;

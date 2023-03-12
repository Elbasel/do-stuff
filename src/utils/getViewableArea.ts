// utils/getViewableArea.ts
export interface ViewportSize {
  width: number | 'auto';
  height: number | 'auto';
}

export function getViewableArea(): ViewportSize {
  if (window == null) return { width: 'auto', height: 'auto' };
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const documentWidth = document.documentElement.clientWidth;
  const documentHeight = document.documentElement.clientHeight;
  const width = Math.min(viewportWidth, documentWidth);
  const height = Math.min(viewportHeight, documentHeight);
  return { width, height };
}

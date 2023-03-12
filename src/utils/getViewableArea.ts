interface ViewportSize {
  width: number;
  height: number;
}

function getViewableArea(): ViewportSize {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const documentWidth = document.documentElement.clientWidth;
  const documentHeight = document.documentElement.clientHeight;
  const width = Math.min(viewportWidth, documentWidth);
  const height = Math.min(viewportHeight, documentHeight);
  return { width, height };
}

const viewableArea = getViewableArea();
console.log(
  `Current viewable area: ${viewableArea.width} x ${viewableArea.height}`
);

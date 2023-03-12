// hooks/useViewableArea.ts
import { useEffect, useState } from 'react';

import { getViewableArea, ViewportSize } from '../utils/getViewableArea';

export function useViewableArea() {
  // ? meh too much
  // * just check return statement yooo
  // : {
  // viewableArea: ViewportSize;
  // setViewableArea: (viewportSize: ViewportSize) => void;
  // }
  const [viewableArea, setViewableArea] = useState<ViewportSize>({
    ...getViewableArea(),
  });

  useEffect(() => {
    function handleResize() {
      const viewportSize = getViewableArea();
      setViewableArea({
        ...viewportSize,
      });
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { viewableArea, setViewableArea };
}

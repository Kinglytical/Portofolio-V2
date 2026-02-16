"use client";

import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";

const useMedia = (
  queries: string[],
  values: number[],
  defaultValue: number,
): number => {
  const get = () => {
    if (typeof window === "undefined") return defaultValue;
    const index = queries.findIndex((q) => window.matchMedia(q).matches);
    return values[index] ?? defaultValue;
  };

  const [value, setValue] = useState<number>(get);

  const queriesKey = JSON.stringify(queries);
  useEffect(() => {
    const handler = () => setValue(get);
    const mqls = queries.map((q) => matchMedia(q));
    mqls.forEach((mql) => mql.addEventListener("change", handler));
    return () => mqls.forEach((mql) => mql.removeEventListener("change", handler));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queriesKey]);

  return value;
};

const useMeasure = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size] as const;
};

const preloadImages = async (urls: string[]): Promise<void> => {
  await Promise.all(
    urls.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        }),
    ),
  );
};

interface Item {
  id: string;
  img: string;
  url: string;
  height: number;
}

interface GridItem extends Item {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface MasonryProps {
  items: Item[];
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom?: "bottom" | "top" | "left" | "right" | "center" | "random";
  scaleOnHover?: boolean;
  hoverScale?: number;
  blurToFocus?: boolean;
  colorShiftOnHover?: boolean;

  /** perf toggle: preload all images before animating (default true as your original) */
  preload?: boolean;
}

const Masonry: React.FC<MasonryProps> = ({
  items,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
  preload = true,
}) => {
  const columns = useMedia(
    [
      "(min-width:1500px)",
      "(min-width:1000px)",
      "(min-width:600px)",
      "(min-width:400px)",
    ],
    [5, 4, 3, 2],
    1,
  );

  const [containerRef, { width }] = useMeasure<HTMLDivElement>();
  const [imagesReady, setImagesReady] = useState(!preload);

  // Keep element refs so GSAP doesn't query DOM via selectors
  const itemEls = useRef<Map<string, HTMLDivElement>>(new Map());

  const setItemRef = (id: string) => (el: HTMLDivElement | null) => {
    const map = itemEls.current;
    if (!el) map.delete(id);
    else map.set(id, el);
  };

  const getInitialPosition = (item: GridItem) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return { x: item.x, y: item.y };

    let direction = animateFrom;
    if (animateFrom === "random") {
      const dirs = ["top", "bottom", "left", "right"] as const;
      direction = dirs[Math.floor(Math.random() * dirs.length)];
    }

    switch (direction) {
      case "top":
        return { x: item.x, y: -200 };
      case "bottom":
        return { x: item.x, y: window.innerHeight + 200 };
      case "left":
        return { x: -200, y: item.y };
      case "right":
        return { x: window.innerWidth + 200, y: item.y };
      case "center":
        return {
          x: containerRect.width / 2 - item.w / 2,
          y: containerRect.height / 2 - item.h / 2,
        };
      default:
        return { x: item.x, y: item.y + 100 };
    }
  };

  useEffect(() => {
    let cancelled = false;

    if (!preload) {
      setImagesReady(true);
      return;
    }

    setImagesReady(false);
    preloadImages(items.map((i) => i.img)).then(() => {
      if (!cancelled) setImagesReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, [items, preload]);

  const grid = useMemo<GridItem[]>(() => {
    if (!width) return [];
    const gap = 16;
    const totalGaps = (columns - 1) * gap;
    const columnWidth = (width - totalGaps) / columns;

    const colHeights = new Array(columns).fill(0);

    const result: GridItem[] = [];
    for (const child of items) {
      // find shortest column without Math.min(...spread)
      let col = 0;
      let minH = colHeights[0];
      for (let i = 1; i < colHeights.length; i++) {
        if (colHeights[i] < minH) {
          minH = colHeights[i];
          col = i;
        }
      }

      const x = col * (columnWidth + gap);
      const h = child.height / 2;
      const y = colHeights[col];

      colHeights[col] += h + gap;

      result.push({ ...child, x, y, w: columnWidth, h });
    }

    return result;
  }, [columns, items, width]);

  const totalHeight = useMemo(() => {
    let max = 0;
    for (const item of grid) max = Math.max(max, item.y + item.h);
    return max;
  }, [grid]);

  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    if (!imagesReady) return;
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // First mount: animate in
      if (!hasMounted.current) {
        grid.forEach((item, index) => {
          const el = itemEls.current.get(item.id);
          if (!el) return;

          const start = getInitialPosition(item);

          gsap.fromTo(
            el,
            {
              opacity: 0,
              x: start.x,
              y: start.y,
              width: item.w,
              height: item.h,
              ...(blurToFocus ? { filter: "blur(10px)" } : {}),
            },
            {
              opacity: 1,
              x: item.x,
              y: item.y,
              width: item.w,
              height: item.h,
              ...(blurToFocus ? { filter: "blur(0px)" } : {}),
              duration: 0.8,
              ease: "power3.out",
              delay: index * stagger,
              overwrite: "auto",
            },
          );
        });
        hasMounted.current = true;
        return;
      }

      // Subsequent layout changes: just move/resize
      grid.forEach((item) => {
        const el = itemEls.current.get(item.id);
        if (!el) return;

        gsap.to(el, {
          x: item.x,
          y: item.y,
          width: item.w,
          height: item.h,
          duration,
          ease,
          overwrite: "auto",
        });
      });
    }, container);

    return () => ctx.revert();
  }, [grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease, containerRef]);

  const handleMouseEnter = (element: HTMLElement) => {
    if (scaleOnHover) {
      gsap.to(element, {
        scale: hoverScale,
        duration: 0.25,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector(".color-overlay") as HTMLElement | null;
      if (overlay) gsap.to(overlay, { opacity: 0.3, duration: 0.25, overwrite: "auto" });
    }
  };

  const handleMouseLeave = (element: HTMLElement) => {
    if (scaleOnHover) {
      gsap.to(element, {
        scale: 1,
        duration: 0.25,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector(".color-overlay") as HTMLElement | null;
      if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.25, overwrite: "auto" });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: totalHeight }}
    >
      {grid.map((item) => (
        <div
          key={item.id}
          ref={setItemRef(item.id)}
          className="absolute box-content"
          style={{
            willChange: "transform, width, height, opacity",
            transform: "translate3d(0,0,0)", // helps GPU compositing
          }}
          onClick={() => window.open(item.url, "_blank", "noopener")}
          onMouseEnter={(e) => handleMouseEnter(e.currentTarget)}
          onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
        >
          <div
            className="relative w-full h-full bg-cover bg-center rounded-[10px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)] uppercase text-[10px] leading-[10px]"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            {colorShiftOnHover && (
              <div className="color-overlay absolute inset-0 rounded-[10px] bg-gradient-to-tr from-pink-500/50 to-sky-500/50 opacity-0 pointer-events-none" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Masonry;

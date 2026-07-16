export const scrollRight = (node: Element, position: number) =>
  requestIdleCallback(() => {
    node.scrollTo({ left: position, behavior: 'smooth' });
  });

export const scrollTop = (node: Element) =>
  requestIdleCallback(() => {
    node.scrollTo({ top: 0, behavior: 'smooth' });
  });

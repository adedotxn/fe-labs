const glitchEffect = (event: MouseEvent) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const target = event.target as HTMLElement;
  const originalText = target.dataset.value as string;
  let iterations = 0;

  const interval = setInterval(() => {
    target.innerText = target.innerText
      .split("")
      .map((letter: string, index: number) => {
        if (index < iterations && originalText !== undefined) {
          return originalText[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iterations >= originalText.length) {
      clearInterval(interval);
    }
    iterations += 1 / 3;
  }, 30);
};

export const glitch = (element: HTMLElement) => {
  element.onmouseenter = glitchEffect;
  element.onclick = glitchEffect;
};

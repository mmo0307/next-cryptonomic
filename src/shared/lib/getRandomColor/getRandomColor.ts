function getRandomColor(): string {
  const letters: string = '0123456789ABCDEF';
  let color: string = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function generateRandomColorAvatar(size: number): string[][] {
  const randomColors: string[] = [];
  const avatarColors: string[][] = [];

  for (let i = 0; i < 3; i++) {
    randomColors.push(getRandomColor());
  }

  for (let i = 0; i < size; i++) {
    avatarColors.push([]);

    for (let j = 0; j < size; j++) {
      const res = randomColors[Math.floor(Math.random() * 3)];
      avatarColors[i].push(res);
    }
  }

  return avatarColors;
}

export { generateRandomColorAvatar, getRandomColor };

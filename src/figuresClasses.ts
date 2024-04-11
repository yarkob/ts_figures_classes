type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

const roundArea = (area: number): number => {
  return Math.floor(area * 100) / 100;
};

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a + b <= c || b + c <= a || a + c <= b || a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    const s: number = 0.5 * (this.a + this.b + this.c);

    return roundArea(Math.sqrt((s - this.a) * (s - this.b) * (s - this.c) * s));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    return roundArea(this.radius ** 2 * Math.PI);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    return roundArea(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}

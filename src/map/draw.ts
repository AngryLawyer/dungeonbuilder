import { CELL_SIZE, WALL_THICKNESS } from './types';

export function wall(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.fillStyle = 'black';
  ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
}

export function floor(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'gray';
  ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
  ctx.strokeRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
}

export function cursor(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.fillStyle = 'cyan';
  ctx.strokeStyle = 'blue';
  ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
  ctx.strokeRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
}

export function door(ctx: CanvasRenderingContext2D, x: number, y: number) {
  floor(ctx, x, y);
  ctx.fillStyle = 'black';
  ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE + (CELL_SIZE / 2) - (WALL_THICKNESS / 2), CELL_SIZE, WALL_THICKNESS);
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';

  const distanceFromWall = CELL_SIZE / 4;
  ctx.fillRect(x * CELL_SIZE + (distanceFromWall), y * CELL_SIZE + (distanceFromWall), CELL_SIZE - (distanceFromWall * 2), CELL_SIZE - (distanceFromWall * 2));
  ctx.strokeRect(x * CELL_SIZE + (distanceFromWall), y * CELL_SIZE + (distanceFromWall), CELL_SIZE - (distanceFromWall * 2), CELL_SIZE - (distanceFromWall * 2));
}

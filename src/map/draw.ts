import { CELL_SIZE } from './types';

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

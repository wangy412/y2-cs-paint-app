import { Color } from "@/models/types";

/// Kind of a hack so we can easily get the type of the tool class
/// Why do i feel like everything i do is a hack
export enum ToolType { Pen, Eraser, Spray }
export type OptionType = "number" | "color";

export abstract class Tool {
  abstract readonly type: ToolType;
  abstract name: string;
  abstract options: {};
}

export interface ToolOption<T> {
  value: T;
  type: OptionType;
}

export interface PenOptions {
  size: ToolOption<number>;
  color: ToolOption<Color>;
}
export class Pen extends Tool {
  readonly type = ToolType.Pen;
  readonly name = "Pen";
  options: PenOptions;

  constructor(size?: number, color?: Color) {
    super();
    this.options = {
      size: { type: "number", value: size ?? 3 },
      color: { type: "color", value: color ?? "white" },
    };
  }
}

export interface EraserOptions {
  size: ToolOption<number>;
}
export class Eraser extends Tool {
  readonly type = ToolType.Eraser;
  readonly name = "Eraser";
  options: EraserOptions;

  constructor(size?: number) {
    super();
    this.options = { size: { type: "number", value: size ?? 10 } };
  }
}

export interface SprayOptions {
  size: ToolOption<number>;
  color: ToolOption<Color>;
}
export class Spray extends Tool {
  readonly type = ToolType.Spray;
  readonly name = "Spray";
  options: SprayOptions;

  constructor(size?: number, color?: Color) {
    super();
    this.options = {
      size: { type: "number", value: size ?? 3 },
      color: { type: "color", value: color ?? "white" },
    }
  }
}
import p5 from "p5";
import { EraserOptions, PenOptions, SprayOptions, ToolType } from "./tool";

export abstract class Shape {
  /// This is the tool the shape was made with
  abstract tool: ToolType;
  /// This is the options that the tool had at that time
  abstract options: {};
}

export class PointsShape extends Shape {
  points: p5.Vector[];

  readonly tool: ToolType;
  readonly options: PenOptions | EraserOptions;

  constructor(points: p5.Vector[], tool: ToolType, options: PenOptions | EraserOptions) {
    super();
    this.points = points;

    this.tool = tool;
    this.options = options;
  }
}

export class SprayShape extends Shape {
  // TODO: Implement this

  tool: ToolType;
  options: SprayOptions;

  constructor(tool: ToolType, options: SprayOptions) {
    super();
    this.tool = tool;
    this.options = options;
  }
}
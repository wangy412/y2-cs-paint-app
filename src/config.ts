// TODO: Save and retrieve config from local storage
export default class Config {
  changeColorShortcutPrefix = "c";
  prefixShortcutDuration = 1000;

  // The value of this map actually represents the color, but stupidly (again)
  // you can't make a p5 color without a p5 instance
  changeColorShortcutMap: { [k: string]: string } = {
    "b": "blue",
  };
}
type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  additional: string[],
  mods?: Mods
): string {
  const returningMods = mods ? mods : {};
  return [
    cls,
    ...additional,
    ...Object.entries(returningMods)
      .filter(([className, value]) => Boolean(value))
      .map(([className, value]) => className),
  ].join(" ");
}

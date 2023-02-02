type Mods = Record<string, boolean | string>;

export function classNames(
  cls?: string,
  mods?: Mods,
  additional?: string[]
): string {
  const returningMods = mods ? mods : {};
  const returniAndditional = additional.length ? additional : [];
  return [
    cls,
    ...returniAndditional,
    ...Object.entries(returningMods)
      .filter(([className, value]) => Boolean(value))
      .map(([className, value]) => className),
  ].join(" ");
}

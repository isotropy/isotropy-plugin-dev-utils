export function clean(obj) {
  return typeof obj !== "object"
    ? obj
    : Array.isArray(obj)
      ? obj.map(item => clean(item))
      : Object.keys(obj).reduce(
          (acc, key) =>
            [
              "start",
              "end",
              "loc",
              "computed",
              "shorthand",
              "extra",
              "__clone"
            ].includes(key)
              ? acc
              : {
                  ...acc,
                  [key]: clean(obj[key])
                },
          {}
        );
}

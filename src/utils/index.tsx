export function INNERHTML(el: HTMLDivElement|null, value: string|undefined) {
  if (el && value) {
    el.innerHTML = value;
  }
}

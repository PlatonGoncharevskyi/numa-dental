export function scrollToHash(hash) {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);

  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

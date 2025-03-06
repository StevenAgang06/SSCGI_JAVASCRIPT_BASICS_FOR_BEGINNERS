function isLandscape(width, height) {
  if (width <= 0 && height <= 0) return "Invalid";
  return width > height ? "Landscape" : "Portrait";
}

console.log(isLandscape(400, 200));

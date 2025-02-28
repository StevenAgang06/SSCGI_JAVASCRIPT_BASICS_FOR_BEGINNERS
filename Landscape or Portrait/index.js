function isLandscape(width, height) {
  return width > height ? "Landscape" : "Portrait";
}

console.log(isLandscape(400, 200));

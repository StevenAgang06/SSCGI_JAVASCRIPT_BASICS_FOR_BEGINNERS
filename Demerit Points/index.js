// Speed Limit 70km/h
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> suspended
function checkSpeed(speed) {
  if (speed < 70) return "OK";

  let points = (speed - 70) / 5;
  points = Math.floor(points);

  if (points > 0 && points < 12) return `Points: ${points}`;
  if (points > 11) return "License Suspended";

  return "OK";
}

console.log(checkSpeed(80));

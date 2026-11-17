// McKay Masonry — the dark brick wall behind every page.
// Standard modular running bond: 7-5/8" x 2-1/4" brick, 3/8" joint, each course offset half a brick.
// Drawn once on a canvas (no repeating tile, so no seams). Each brick gets its own shade from its
// row and column, so the wall looks the same on every visit and does not reshuffle on resize.
(function () {
  var BW = 61, BH = 18, J = 3;                       // brick and joint, in px (8 px to the inch)
  var c = document.createElement('canvas'); c.className = 'wall'; c.setAttribute('aria-hidden', 'true');
  var light = document.createElement('div'); light.className = 'wall-light'; light.setAttribute('aria-hidden', 'true');
  document.body.prepend(light); document.body.prepend(c);
  function shade(r, k) { var h = (r * 73856093) ^ (k * 19349663); h = (h ^ (h >>> 13)) * 1274126177; return ((h ^ (h >>> 16)) >>> 0) / 4294967295; }
  function draw() {
    var d = Math.min(window.devicePixelRatio || 1, 2), W = window.innerWidth, H = window.innerHeight;
    c.width = W * d; c.height = H * d; var g = c.getContext('2d'); g.scale(d, d);
    g.fillStyle = '#0B0D0C'; g.fillRect(0, 0, W, H);                       // mortar
    for (var r = 0, y = -J / 2; y < H; r++, y += BH + J) {
      var x0 = (r % 2 ? -(BW + J) / 2 : 0) - J / 2;
      for (var k = 0, x = x0; x < W; k++, x += BW + J) {
        var t = shade(r, k), v = 21 + Math.round(t * 13);                  // each brick its own tone
        g.fillStyle = 'rgb(' + v + ',' + (v + 2) + ',' + v + ')'; g.fillRect(x, y, BW, BH);
        g.fillStyle = 'rgba(255,255,255,.035)'; g.fillRect(x, y, BW, 1);   // light catching the top arris
        g.fillStyle = 'rgba(0,0,0,.22)'; g.fillRect(x, y + BH - 1, BW, 1); // shadow under the bed joint
      }
    }
  }
  var t; window.addEventListener('resize', function () { clearTimeout(t); t = setTimeout(draw, 120); });
  draw();
})();

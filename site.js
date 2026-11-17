// McKay Masonry — shared header/footer, Projects grid and photo viewer.
(function () {
  var page = document.body.dataset.page;
  var LOGO = '<img src="img/mckay-logo-horizontal-on-dark.svg" alt="McKay Masonry" width="586" height="198">';
  var links = [["index.html", "Home", "home"], ["projects.html", "Projects", "projects"], ["team.html", "Our Team", "team"], ["contact.html", "Contact", "contact"]];
  var nav = links.map(function (l) { return '<a href="' + l[0] + '"' + (l[2] === page ? ' aria-current="page"' : '') + '>' + l[1] + '</a>'; }).join('');

  var head = document.getElementById('head');
  head.innerHTML =
    '<div class="wrap"><a class="logo" href="index.html" aria-label="McKay Masonry home"><img src="img/mckay-logo-wide-on-dark.svg" alt="McKay Masonry" width="1170" height="198"></a>' +
    '<button class="menu-btn" aria-expanded="false" aria-controls="nav">Menu</button><nav class="nav" id="nav" aria-label="Main">' + nav + '<a class="tel" href="tel:+17039291156">(703) 929-1156</a><a class="btn" href="contact.html">Request a bid</a></nav></div>';
  var mb = head.querySelector('.menu-btn'), nv = head.querySelector('.nav');
  mb.addEventListener('click', function () { var o = nv.classList.toggle('open'); mb.setAttribute('aria-expanded', o); mb.textContent = o ? 'Close' : 'Menu'; });
  function onScroll() { head.classList.toggle('scrolled', window.scrollY > 12); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  document.getElementById('foot').innerHTML =
    '<div class="wrap"><div class="cols"><div>' + LOGO + '<p>Building Southern Maryland one brick at a time.<br>Commercial and residential masonry: brick, block and stone.</p></div>' +
    '<div><h4>Site</h4>' + nav + '</div>' +
    '<div><h4>Reach us</h4><a href="mailto:bids@mckaymasonry.org">bids@mckaymasonry.org</a><a href="tel:+17039291156">(703) 929-1156</a><span>PO Box 309, Valley Lee, MD 20692</span><a href="https://www.linkedin.com/company/mckay-masonry/" target="_blank" rel="noopener">LinkedIn</a></div></div>' +
    '<div class="fine">&copy; ' + new Date().getFullYear() + ' McKay Masonry, Valley Lee, Maryland.</div></div>';

  // ---- projects ----
  var P = window.MCKAY_PROJECTS || [];
  var typeName = { commercial: "Commercial", residential: "Residential" };
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  // jobs with photos first, then jobs under way, then the rest; the list order breaks ties
  function rank(p) { return p.photos.length ? 0 : p.status === 'live' ? 1 : 2; }
  function card(p, i) {
    var has = p.photos.length;
    var ph = has
      ? '<div class="ph"><img loading="lazy" decoding="async" width="800" height="600" src="img/' + p.photos[0] + '-t.jpg" alt="' + esc(p.name) + ', ' + esc(p.where) + '"><span class="count">' + has + ' photo' + (has > 1 ? 's' : '') + '</span>'
      : '<div class="ph empty"><span>Photos coming</span>';
    ph += (p.status === 'live' ? '<span class="badge live">In progress</span>' : '<span class="badge">' + typeName[p.type] + '</span>') + '</div>';
    var dl = (p.gc ? '<dt>Contractor</dt><dd>' + esc(p.gc) + '</dd>' : '') + (p.architect ? '<dt>Architect</dt><dd>' + esc(p.architect) + '</dd>' : '') + (p.engineer ? '<dt>Engineer</dt><dd>' + esc(p.engineer) + '</dd>' : '');
    var body = '<div class="body"><span class="where">' + esc(p.where) + '</span><h3>' + esc(p.name) + '</h3><p>' + esc(p.text) + '</p>' +
      '<div class="tags">' + (p.tags || []).map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('') + '</div>' + (dl ? '<dl>' + dl + '</dl>' : '') + '</div>';
    return has ? '<button class="proj reveal" data-i="' + i + '" aria-label="' + esc(p.name) + ': open ' + has + ' photos">' + ph + body + '</button>' : '<article class="proj no-photo reveal">' + ph + body + '</article>';
  }
  function row(p) {
    var meta = (p.gc ? '<div><dt>Contractor</dt><dd>' + esc(p.gc) + '</dd></div>' : '') + (p.architect ? '<div><dt>Architect</dt><dd>' + esc(p.architect) + '</dd></div>' : '') + (p.engineer ? '<div><dt>Engineer</dt><dd>' + esc(p.engineer) + '</dd></div>' : '');
    return '<article class="jobrow reveal"><div class="jr-head"><span class="where">' + esc(p.where) + '</span>' + (p.status === 'live' ? '<span class="badge live">In progress</span>' : '') + '</div>' +
      '<h3>' + esc(p.name) + '</h3><p>' + esc(p.text) + '</p>' + (meta ? '<dl>' + meta + '</dl>' : '') + '</article>';
  }
  var grid = document.getElementById('pgrid'), more = document.getElementById('more'), moreHead = document.getElementById('more-head'), tally = document.getElementById('tally');
  function draw(filter, limit) {
    var list = P.map(function (p, i) { return [p, i]; })
      .filter(function (x) { var p = x[0]; return !filter || filter === 'all' || (filter === 'live' ? p.status === 'live' : p.type === filter); })
      .sort(function (a, b) { return rank(a[0]) - rank(b[0]) || a[1] - b[1]; });
    var withPhotos = list.filter(function (x) { return x[0].photos.length; }), without = list.filter(function (x) { return !x[0].photos.length; });
    if (limit) withPhotos = withPhotos.slice(0, limit);
    grid.innerHTML = withPhotos.map(function (x) { return card(x[0], x[1]); }).join('');
    grid.style.display = withPhotos.length ? '' : 'none';
    if (more) {
      more.innerHTML = without.map(function (x) { return row(x[0]); }).join('');
      moreHead.style.display = without.length ? '' : 'none';
      moreHead.textContent = withPhotos.length ? 'More of our work' : 'Our work';
    }
    if (tally) tally.textContent = list.length + (list.length === 1 ? ' job' : ' jobs');
    watch();
  }

  // ---- gentle fade-up as things scroll into view ----
  var io = ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches)
    ? new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -8% 0px' }) : null;
  function watch() { document.querySelectorAll('.reveal:not(.in)').forEach(function (el) { if (io) io.observe(el); else el.classList.add('in'); }); }

  if (grid) {
    draw('all', +grid.dataset.limit || 0);
    document.querySelectorAll('.chip').forEach(function (c) {
      var n = P.filter(function (p) { return c.dataset.f === 'all' || (c.dataset.f === 'live' ? p.status === 'live' : p.type === c.dataset.f); }).length;
      c.insertAdjacentHTML('beforeend', ' <i>' + n + '</i>');
      c.addEventListener('click', function () {
        document.querySelectorAll('.chip').forEach(function (o) { o.setAttribute('aria-pressed', o === c); });
        draw(c.dataset.f);
      });
    });

    // ---- photo viewer ----
    var lb = document.createElement('div'); lb.className = 'lb'; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true'); lb.setAttribute('aria-label', 'Project photos');
    lb.innerHTML = '<header><b></b><button class="x">Close</button></header><div class="stage"><button class="prev" aria-label="Previous photo">&larr;</button><img alt=""><button class="next" aria-label="Next photo">&rarr;</button></div><footer><span class="t"></span><span class="n"></span></footer>';
    document.body.appendChild(lb);
    var cur = null, at = 0, opener = null, img = lb.querySelector('img');
    function show() {
      img.src = 'img/' + cur.photos[at] + '.jpg'; img.alt = cur.name + ', photo ' + (at + 1) + ' of ' + cur.photos.length;
      lb.querySelector('b').textContent = cur.name; lb.querySelector('.t').textContent = cur.where; lb.querySelector('.n').textContent = (at + 1) + ' / ' + cur.photos.length;
      var one = cur.photos.length < 2; lb.querySelector('.prev').hidden = one; lb.querySelector('.next').hidden = one;
      if (!one) { new Image().src = 'img/' + cur.photos[(at + 1) % cur.photos.length] + '.jpg'; }   // have the next one ready
    }
    function step(d) { at = (at + d + cur.photos.length) % cur.photos.length; show(); }
    function close() { lb.classList.remove('open'); document.body.style.overflow = ''; if (opener) opener.focus(); }
    grid.addEventListener('click', function (e) { var b = e.target.closest('button.proj'); if (!b) return; opener = b; cur = P[+b.dataset.i]; at = 0; show(); lb.classList.add('open'); document.body.style.overflow = 'hidden'; lb.querySelector('.x').focus(); });
    lb.querySelector('.x').addEventListener('click', close); lb.querySelector('.prev').addEventListener('click', function () { step(-1); }); lb.querySelector('.next').addEventListener('click', function () { step(1); });
    lb.addEventListener('click', function (e) { if (e.target === lb || e.target.classList.contains('stage')) close(); });
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') close(); if (e.key === 'ArrowLeft') step(-1); if (e.key === 'ArrowRight') step(1);
      if (e.key === 'Tab') { var f = [].filter.call(lb.querySelectorAll('button'), function (b) { return !b.hidden; }), i = f.indexOf(document.activeElement); e.preventDefault(); f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus(); }
    });
    var sx = null;   // swipe on a phone
    lb.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener('touchend', function (e) { if (sx === null) return; var dx = e.changedTouches[0].clientX - sx; sx = null; if (Math.abs(dx) > 50 && cur.photos.length > 1) step(dx < 0 ? 1 : -1); });
  }
  watch();
})();

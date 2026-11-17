(function () {
  var D = window.XS, C = D.company;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  var esc = function (t) { return String(t == null ? "" : t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var digits = function (p) { return String(p || "").replace(/\D/g, ""); };

  $$("[data-bind]").forEach(function (el) {
    var v = el.dataset.bind.split(".").reduce(function (o, k) { return o && o[k]; }, D);
    if (v != null) el.textContent = v;
  });
  var links = { hotline: "tel:" + digits(C.hotline), zalo1: "https://zalo.me/" + digits(C.zalo1), zalo2: "https://zalo.me/" + digits(C.zalo2), tiktok: C.tiktok, facebook: C.facebook };
  $$("[data-link]").forEach(function (a) { a.href = links[a.dataset.link] || "#"; if (/^http/.test(a.href)) { a.target = "_blank"; a.rel = "noopener"; } });

  $('[data-render="stats"]').innerHTML = D.stats.map(function (s) { return '<div class="b stat rv"><b>' + esc(s.v) + "</b><span>" + esc(s.l) + "</span></div>"; }).join("");
  $('[data-render="services"]').innerHTML = D.services.map(function (s) { return '<article class="b svc rv"><h3>' + esc(s.title) + "</h3><p>" + esc(s.desc) + "</p></article>"; }).join("");
  $('[data-render="process"]').innerHTML = D.process.map(function (s, i) { return '<div class="step rv" tabindex="0" role="button" aria-expanded="false"><div class="n">' + (i + 1) + "</div><h3>" + esc(s.title) + '</h3><span class="plus" aria-hidden="true">+</span><div class="pop"><p>' + esc(s.desc) + "</p>" + (s.time ? "<small>" + esc(s.time) + "</small>" : "") + "</div></div>"; }).join("");
  // Trên điện thoại / màn hình cảm ứng: chạm để mở, chạm lần nữa để đóng
  $$(".step").forEach(function (st) {
    var tg = function () { var o = st.classList.toggle("open"); st.setAttribute("aria-expanded", o); };
    st.addEventListener("click", tg);
    st.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); tg(); } });
  });

  var pj = $('[data-render="projects"]'), fl = $('[data-render="filters"]'), tabs = D.projectTabs, cur = tabs[0];
  function draw() {
    fl.innerHTML = tabs.map(function (r) { return '<button class="chip' + (r === cur ? " on" : "") + '" role="tab" aria-selected="' + (r === cur) + '" data-r="' + esc(r) + '">' + esc(r) + "</button>"; }).join("");
    pj.innerHTML = D.projects.map(function (p, i) { return { p: p, i: i }; }).filter(function (o) { return o.p.category === cur; }).map(function (o) {
      var p = o.p, bg = p.image ? "background-image:url(" + p.image + ")" : "background-image:linear-gradient(150deg,hsl(" + (120 + (o.i * 13) % 50) + " 38% 20%),#080c09 75%)";
      return '<article class="card"><div class="pic" style="' + bg + '"><span class="rg">' + esc(p.region) + '</span></div><div class="meta"><h3>' + esc(p.name) + "</h3><p>" + esc([p.type, p.size, p.year].filter(Boolean).join(" • ")) + "</p></div></article>";
    }).join("") || '<p class="empty">Chưa có dự án trong khu vực này.</p>';
    $$(".chip", fl).forEach(function (b) { b.onclick = function () { cur = b.dataset.r; draw(); }; });
  }
  draw();

  // Menu di động
  var bg = $(".burger"), mn = $(".menu");
  bg.onclick = function () { var o = mn.classList.toggle("open"); bg.setAttribute("aria-expanded", o); };
  $$("a", mn).forEach(function (a) { a.onclick = function () { mn.classList.remove("open"); }; });

  // Hiện dần khi cuộn
  $$(".b,.step").forEach(function (e) { e.classList.add("rv"); });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: .08 });
    $$(".rv").forEach(function (e) { io.observe(e); });
  } else $$(".rv").forEach(function (e) { e.classList.add("in"); });

  // Nút nổi
  var fab = document.createElement("div"); fab.className = "fab";
  fab.innerHTML = '<a href="' + links.zalo1 + '" target="_blank" rel="noopener" class="z">Zalo</a><a href="' + links.hotline + '" class="c">☎ Gọi ngay</a>';
  document.body.appendChild(fab);
  $("#y").textContent = new Date().getFullYear();
})();

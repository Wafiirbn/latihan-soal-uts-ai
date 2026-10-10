/* pengantar.js: loading page, pilihan awal, dan bab Pengantar "Bekal dari Nol". Dimuat SETELAH app.js */
(function () {
  const f = s => esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
  const KEY = "aiquiz-pengantar-v1";
  let P = { done: {} };
  try { P = Object.assign(P, JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) { }
  const sv = () => { try { localStorage.setItem(KEY, JSON.stringify(P)); } catch (e) { } };
  const nrm = s => String(s).toLowerCase().replace(/[\s.]/g, "");

  /* j = [salah, benar]; q = pilihan ganda {q,o,a,e} atau isian {q,i,h,e,jaw} */
  const M = [
    { t: "Peta Besar: apa yang dipelajari", u: "Seluruh bab", m: "Mata kuliah ini membangun **agent**: sesuatu yang mengindera lingkungan lalu bertindak cerdas. Ada tiga keahlian: **Search** (urutan aksi menuju tujuan), **CSP** (nilai tiap variabel agar semua aturan terpenuhi), dan **Logika** (dari fakta yang diketahui, apa yang pasti benar).", a: "Search = labirin, CSP = teka-teki silang, Logika = detektif.", c: "Search  -> Bab 3 dan 4\nCSP     -> Bab 5\nLogika  -> Bab 6 dan 7\nUrutan: Bekal > Pengantar AI > Agent > Search > Informed Search > CSP > Logika > FOL", j: ["Mengira ketiganya topik yang terpisah.", "Ketiganya adalah cara agent memutuskan apa yang dilakukan."], q: { q: "Agent mencoba jalur labirin di kepalanya sebelum melangkah. Itu keahlian apa?", o: ["CSP", "Search", "Logika", "Sensor"], a: 1, e: "Mencari urutan aksi menuju tujuan adalah Search. CSP mengisi variabel, logika menyimpulkan fakta." }, k: "Search = urutan aksi, CSP = isi variabel, Logika = simpulkan fakta." },
    { t: "Stack (LIFO) dan Queue (FIFO)", u: "DFS, BFS", m: "**Stack** mengeluarkan yang **terakhir masuk** (LIFO). **Queue** mengeluarkan yang **pertama masuk** (FIFO).", a: "Stack = tumpukan piring. Queue = antrean loket.", c: "STACK (LIFO)         QUEUE (FIFO)\n  | C | <- keluar     keluar -> | A | B | C | <- masuk\n  | B |\n  | A |", j: ["Membalik LIFO dan FIFO.", "Stack: yang paling akhir masuk keluar lebih dulu."], q: { q: "P, Q, R, S masuk stack berurutan, lalu satu diambil. Siapa yang keluar?", o: ["P", "Q", "R", "S"], a: 3, e: "LIFO: S masuk terakhir, jadi keluar duluan. Jawaban P muncul kalau tertukar dengan queue." }, k: "DFS = Stack, BFS = Queue." },
    { t: "Priority Queue dan tie-breaker", u: "UCS, Greedy, A*", m: "**Priority queue** mengeluarkan angka **terkecil** lebih dulu, bukan yang masuk lebih dulu. Kalau angka seri, pakai **tie-breaker** (FIFO atau urut abjad) dan selalu tuliskan.", a: "UGD: pasien paling gawat dilayani dulu, bukan yang datang pertama.", c: "A(4)  B(1)  C(4)  D(2)\nkeluar: B, D, A, C   (A dan C seri, A masuk dulu)", j: ["Mengira angka besar = prioritas utama.", "Angka kecil dilayani dulu."], q: { q: "A(4), B(1), C(4), D(2) dengan tie-breaker FIFO. Tulis urutan keluar, pisahkan koma.", i: ["b,d,a,c"], jaw: "B, D, A, C", h: "Urutkan dari angka terkecil. A dan C seri, A masuk lebih dulu.", e: "B(1), D(2), lalu A dan C seri di 4, sehingga FIFO memberi A kemudian C." }, k: "Priority queue: terkecil dulu, seri pakai tie-breaker, selalu ditulis." },
    { t: "Jebakan: tiga wadah, tiga cara memilih", u: "Search", m: "Semua algoritma search memakai kerangka yang sama. Bedanya hanya **wadah** yang menentukan node mana diambil: stack (terakhir), queue (pertama), priority queue (terkecil).", a: "Mengambil dari tumpukan, antrean, atau UGD.", c: "DFS            Stack           terakhir masuk\nBFS            Queue           pertama masuk\nUCS/Greedy/A*  Priority queue  nilai terkecil", j: ["Menyebut DFS memakai queue.", "DFS pakai stack, BFS pakai queue."], q: { q: "Pasangan algoritma dan wadah yang benar adalah ...", o: ["DFS-Queue, BFS-Stack", "DFS-Stack, BFS-Queue", "UCS-Stack, DFS-Priority queue", "BFS-Priority queue, UCS-Queue"], a: 1, e: "DFS memakai stack (LIFO), BFS memakai queue (FIFO). Opsi lain menukar wadah." }, k: "Wadah menentukan urutan penjelajahan." },
    { t: "Graf: kosakata dasar", u: "Search", m: "**Node** = state (kondisi). **Arc** = aksi yang bisa berarah, punya **cost**. **Path cost** = jumlah cost semua arc di jalur. **Self-loop** = arc ke diri sendiri. **Cycle** = jalur yang kembali ke node awal.", a: "Peta jalan: kota = node, jalan = arc, ongkos = cost.", c: "S -2-> B -5-> C -10-> G\npath cost = 2 + 5 + 10 = 17", j: ["Path cost dihitung dari jumlah node atau cost arc terakhir.", "Jumlahkan cost semua arc di jalur."], q: { q: "Jalur S→B→C→G memiliki cost arc 2, 5, 10. Berapa path cost-nya?", o: ["3", "10", "17", "27"], a: 2, e: "2 + 5 + 10 = 17. Angka 3 adalah jumlah node, 10 hanya cost arc terakhir." }, k: "Path cost = jumlah cost arc di jalur." },
    { t: "Pohon: root, leaf, depth, b, m, s", u: "Search", m: "**Root** punya depth 0, **leaf** tidak punya anak. **Depth** = jumlah **langkah** dari root. **b** = branching factor, **m** = depth maksimum, **s** = depth solusi terdangkal.", a: "Silsilah keluarga: root = leluhur, leaf = generasi terakhir.", c: "S        depth 0 (root)\n└ A      depth 1\n  └ C    depth 2\n    └ E  depth 3 (leaf)", j: ["Menghitung depth dari jumlah node.", "Hitung langkah (panah), bukan node."], q: { q: "Berapa depth node E pada jalur S-A-C-E?", o: ["1", "3", "4", "2"], a: 1, e: "Ada 3 langkah (S→A, A→C, C→E). Angka 4 adalah jumlah node, bukan depth." }, k: "Depth = jumlah langkah dari root." },
    { t: "Graf menjadi pohon pencarian", u: "Search", m: "Tiap node pohon pencarian mewakili satu **jalur utuh** dari start, jadi satu state bisa muncul berkali-kali. Bila ada cycle atau self-loop, pohonnya **tak hingga**.", a: "Mencatat ulang tiap kali tiba di tempat yang sama lewat rute berbeda.", c: "Graf: S→A, S→B, A→G, B→G (4 node)\nPohon: S, A, B, G, G  = 5 node (G muncul 2 kali)", j: ["Mengira jumlah node pohon sama dengan jumlah node graf.", "Hitung node pohon per jalur; G dihitung dua kali."], q: { q: "Graf S→A, S→B, A→G, B→G. Berapa total node pohon pencarian?", i: ["5"], jaw: "5", h: "Gambar pohonnya: S punya dua anak, masing-masing menuju G.", e: "S, A, B, lalu G muncul dua kali (lewat A dan lewat B) = 5." }, k: "Cycle atau self-loop membuat pohon tak hingga." },
    { t: "Big-O kasar: bᵐ vs b·m", u: "Kompleksitas DFS dan BFS", m: "**bᵐ** meledak (eksponensial), **b·m** ringan (linear). DFS hemat memori O(bm), BFS boros memori O(bˢ).", a: "Koin yang digandakan tiap hari versus ditambah Rp1.000 tiap hari.", c: "b=10, m=10:  bᵐ = 10 miliar   b·m = 100\nPohon penuh b=2, m=3: 1 + 2 + 4 + 8 = 15", j: ["Mengira b·m sama besar dengan bᵐ.", "Satu linear, satu eksponensial."], q: { q: "Pohon penuh b=2, m=3. Berapa total node?", i: ["15"], jaw: "15", h: "Jumlahkan node tiap level: 1, 2, 4, 8.", e: "1 + 2 + 4 + 8 = 15." }, k: "bᵐ meledak, b·m ringan." },
    { t: "Logika dasar: proposisi, ¬ ∧ ∨", u: "Logical Agents (Bab 6)", m: "**Proposisi** = kalimat yang pasti benar (T) atau salah (F). ¬ = NOT, ∧ = AND, ∨ = OR **inklusif** (T ∨ T = T).", a: "Saklar lampu: hanya hidup atau mati.", c: "A=T, B=F:   A∧B = F    A∨B = T    ¬A = F    A∧¬B = T", j: ["Menganggap T ∨ T = F.", "OR inklusif: T ∨ T = T."], q: { q: "A=T dan B=F. Berapa nilai A ∧ ¬B? Jawab T atau F.", i: ["t", "true"], jaw: "T", h: "Hitung ¬B dulu, lalu AND dengan A.", e: "¬B = T, sehingga A ∧ ¬B = T ∧ T = T." }, k: "OR inklusif, AND hanya benar bila keduanya T." },
    { t: "Tabel kebenaran 2ⁿ dan subset ⊆", u: "Entailment (Bab 6)", m: "n simbol memberi **2ⁿ** baris. X ⊆ Y berarti semua anggota X ada di Y. 'Benar di **semua** model' = subset; 'di sebagian model' = hanya irisan.", a: "Semua mahasiswa IPB juga mahasiswa: kelompok kecil di dalam kelompok besar.", c: "2 simbol: 4 baris   3 simbol: 8 baris   4 simbol: 16 baris\n{2,4} ⊆ {1,2,3,4}", j: ["Mengira 3 simbol = 6 baris.", "2³ = 8."], q: { q: "Tiga simbol proposisi menghasilkan berapa baris tabel kebenaran?", o: ["6", "8", "9", "3"], a: 1, e: "2³ = 8. Angka 6 muncul bila 2×3 dihitung, padahal rumusnya pangkat." }, k: "n simbol = 2ⁿ baris; subset = semua anggota ada." },
    { t: "g(n), h(n), f(n)", u: "Informed Search", m: "**g(n)** = biaya nyata dari start ke n (pasti). **h(n)** = perkiraan dari n ke goal (tebakan). **f(n) = g + h** = perkiraan total (A*). **h\\*(n)** = biaya sesungguhnya termurah n ke goal.", a: "Perjalanan: km yang sudah ditempuh (g) ditambah sisa menurut GPS (h).", c: "g = 4, h = 3  ->  f = 4 + 3 = 7", j: ["Menyamakan h dengan biaya nyata.", "h hanya perkiraan; g yang nyata."], q: { q: "Simbol apa untuk perkiraan biaya dari node n ke goal? Jawab satu huruf.", i: ["h"], jaw: "h", h: "Nama simbolnya dari kata 'heuristik'.", e: "h(n) adalah heuristik, yaitu perkiraan n ke goal. g adalah biaya nyata dari start." }, k: "g nyata, h perkiraan, f = g + h." },
    { t: "Daftar simbol logika (rujukan cepat)", u: "Bab 6 dan 7", m: "⇒ **implikasi** (jika-maka), ⇔ **jika dan hanya jika**, ⊨ **entails** (soal **kebenaran**), ⊢ **derivasi** (soal **prosedur** inferensi), ≡ **equivalent**, ∀ untuk semua, ∃ terdapat. Pada CSP, X→Y: X = tail, Y = head.", a: "⊨ seperti 'fakta di lapangan', ⊢ seperti 'langkah di kertas bukti'.", c: "KB ⊨ α   α benar di semua model KB\nKB ⊢ α   α dapat diturunkan lewat prosedur\nM(α)     himpunan semua model tempat α benar", j: ["Menukar ⊨ dan ⊢.", "⊨ untuk kebenaran, ⊢ untuk prosedur."], q: { q: "Simbol yang menyatakan derivasi lewat prosedur inferensi adalah ...", o: ["⊨", "⊢", "≡", "⇔"], a: 1, e: "⊢ = derivasi (prosedur). ⊨ = entailment (kebenaran), ≡ = sama arti, ⇔ = jika dan hanya jika." }, k: "⊨ kebenaran, ⊢ prosedur." },
    { t: "Cara membaca gambar graf soal search", u: "Seluruh soal search", m: "Angka di **panah** = cost. Tulisan **h = x** di node = heuristik (hanya dipakai Greedy dan A*). Panah melengkung = self-loop. Urutan anak diberikan, atau pakai abjad.", a: "Peta dengan ongkos di tiap jalan dan perkiraan jarak lurus di tiap kota.", c: "Graf P\nArc: S→A(1) S→B(2) A→D(2) A→G(10) B→C(2) C→G(3) D→G(20)\nh : S=3 A=2 B=5 C=3 D=1 G=0\nS-A-G = 11 | S-A-D-G = 23 | S-B-C-G = 7 (termurah)", j: ["Mengira angka di node adalah cost.", "Angka di panah = cost, 'h =' di node = heuristik."], q: { q: "Pada Graf P, berapa path cost S-B-C-G (S→B 2, B→C 2, C→G 3)?", i: ["7"], jaw: "7", h: "Jumlahkan cost tiga panah.", e: "2 + 2 + 3 = 7, jalur termurah pada Graf P." }, k: "Panah = cost, h= di node = heuristik." },
    { t: "Jembatan: wadah fringe menentukan urutan", u: "Search", m: "Semua algoritma search memakai kerangka ini; **wadah** menentukan node mana yang diambil. Untuk stack, agar A diperiksa dulu, masukkan anak dari kanan ke kiri (B lalu A).", a: "Sama-sama membongkar kardus, tetapi dari tumpukan, antrean, atau UGD.", c: "fringe <- { node awal }\nulangi:\n   ambil satu node dari fringe   <- WADAH menentukan\n   jika goal -> selesai\n   masukkan semua anak ke fringe", j: ["Memasukkan anak kiri dulu ke stack lalu heran kenapa kanan diambil.", "Stack: masukkan dari kanan ke kiri agar kiri keluar dulu."], q: { q: "A lalu B dimasukkan ke stack. Satu node diambil. Siapa?", o: ["A", "B", "Keduanya sekaligus", "Tidak dapat ditentukan"], a: 1, e: "LIFO: B masuk terakhir, jadi B yang keluar. A tetap di fringe." }, k: "DFS = Stack, BFS = Queue, UCS/Greedy/A* = Priority queue." }
  ];
  const SUM = ["Peta besar: tiga keahlian agent, yaitu search, CSP, logika.", "Tiga wadah: Stack LIFO untuk DFS, Queue FIFO untuk BFS, Priority queue untuk UCS/Greedy/A*. Tulis tie-breaker.", "Graf: node = state, arc = aksi bercost, path cost = jumlah cost arc.", "Pohon: root depth 0, b, m, s. Cycle atau self-loop membuat pohon tak hingga.", "Big-O: bᵐ meledak, b·m ringan.", "Logika: OR inklusif, 2ⁿ baris, ⊆ = semua anggota ada.", "Simbol: g nyata, h perkiraan, f = g + h. ⊨ kebenaran, ⊢ prosedur.", "Baca graf: angka di panah = cost, h= di node = heuristik."];

  const root = () => $("app");
  const bar = (n, lbl) => `<div class="exam-bar"><div class="exam-top"><button class="btn-exit" onclick="${n}">${ic("arrowL", 13)} ${lbl}</button><div class="exam-label">Pengantar · Bekal dari Nol</div></div></div>`;
  const cnt = () => M.filter((_, i) => P.done[i]).length;

  window.pgList = function () {
    run = null; dock(""); closeModal();
    const c = cnt();
    root().innerHTML = bar("home()", "Beranda") + `<div class="qbox"><div class="sec-title" style="margin-bottom:8px">Bekal dari Nol</div><p class="pgb" style="margin:0 0 10px">Materi dasar supaya kamu tidak macet di bab inti. Tiap modul: materi singkat, analogi, contoh, jebakan, lalu satu quiz mini. Cukup dikerjakan sekali, lalu jadi rujukan kapan pun lupa.</p><b style="font-size:.85rem">${c} dari ${M.length} modul selesai</b><div class="pbar" style="margin:6px 0 14px"><i style="width:${c / M.length * 100}%"></i></div><button class="btn-p" style="width:100%" onclick="pgOpen(${Math.min(c, M.length - 1)})">${c ? "Lanjutkan" : "Mulai dari Modul 0"} ${ic("arrow", 15)}</button></div><div class="pg-list">${M.map((m, i) => `<button class="pg-item" onclick="pgOpen(${i})"><span class="gn ${P.done[i] ? "dn" : ""}">${P.done[i] ? "✓" : i}</span><span><b>${esc(m.t)}</b><small>Dipakai di: ${esc(m.u)}</small></span></button>`).join("")}<button class="pg-item" onclick="pgEnd()"><span class="gn">✓</span><span><b>Ringkasan penutup</b><small>Satu butir per modul</small></span></button></div>`;
    window.scrollTo(0, 0);
  };

  window.pgOpen = function (i) {
    run = null; const m = M[i], q = m.q; P.cur = i; sv();
    const quiz = q.o ? `<div class="opts">${q.o.map((o, k) => `<button class="opt" onclick="pgPick(${i},${k})"><span class="opt-letter">${"ABCD"[k]}</span><span style="flex:1">${esc(o)}</span></button>`).join("")}</div>`
      : `<input class="fill-in" id="pgin" placeholder="Ketik jawabanmu..." autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')pgCheck(${i})"><details style="margin-top:8px"><summary style="cursor:pointer;color:var(--ink3);font-size:.85rem">Petunjuk</summary><p class="pgb" style="margin:6px 0 0">${f(q.h)}</p></details><div class="row"><button onclick="pgCheck(${i})">Periksa</button></div>`;
    root().innerHTML = bar("pgList()", "Daftar") + `<div class="qbox"><div class="qbox-hdr"><span class="pill mcq">${ic("book", 13)} Modul ${i} dari ${M.length - 1}</span><span class="qnum">Dipakai di: ${esc(m.u)}</span></div><h2 style="font-size:1.2rem;font-weight:800;margin-bottom:6px">${esc(m.t)}</h2>
      <div class="pgh">Materi</div><div class="pgb"><p>${f(m.m)}</p></div>
      <div class="pgh">Analogi</div><div class="pgx">${f(m.a)}</div>
      <div class="pgh">Contoh</div><pre class="pgpre">${esc(m.c)}</pre>
      <div class="pgh">Jebakan umum</div><div class="pgj"><div class="no">${ic("x", 13)} ${f(m.j[0])}</div><div class="yes">${ic("check", 13)} ${f(m.j[1])}</div></div>
      <div class="pgq"><div class="pgh">Latihan</div><p class="qtxt">${esc(q.q)}</p>${quiz}<div id="pgfb"></div></div>
      <div class="pgk"><b>Ingat ini:</b> ${f(m.k)}</div></div>`;
    dock(`<button class="btn-s" ${i ? "" : "disabled"} onclick="pgOpen(${i - 1})">${ic("arrowL", 13)} Sebelumnya</button><button class="btn-p" onclick="${i < M.length - 1 ? `pgOpen(${i + 1})` : "pgEnd()"}">${i < M.length - 1 ? "Modul berikutnya" : "Ringkasan"} ${ic("arrow", 15)}</button>`);
    window.scrollTo(0, 0);
  };

  function fb(i, ok, ans) {
    P.done[i] = true; sv();
    const m = M[i];
    $("pgfb").innerHTML = `<div class="fb ${ok ? "ok" : "bad"}">${ic(ok ? "check" : "x", 16)} ${ok ? "Jawaban tepat" : "Kurang tepat"}<span>${ok ? "" : "Jawaban yang benar: <b>" + esc(ans) + "</b>. "}${f(m.q.e)}</span></div>`;
  }
  window.pgPick = function (i, k) {
    const q = M[i].q; document.querySelectorAll(".pgq .opt").forEach((b, x) => { b.disabled = true; if (x === q.a) b.classList.add("right"); else if (x === k) b.classList.add("wrong"); });
    fb(i, k === q.a, q.o[q.a]);
  };
  window.pgCheck = function (i) {
    const el = $("pgin"), q = M[i].q, v = nrm(el.value); if (!v) return alert("Ketik jawaban terlebih dahulu.");
    const ok = q.i.map(nrm).includes(v); el.disabled = true; el.classList.add(ok ? "right" : "wrong"); fb(i, ok, q.jaw);
  };
  window.pgEnd = function () {
    run = null; dock(`<button class="btn-s" onclick="pgList()">${ic("list", 13)} Daftar modul</button><button class="btn-p" onclick="home()">Mulai latihan bab ${ic("arrow", 15)}</button>`);
    root().innerHTML = bar("pgList()", "Daftar") + `<div class="qbox"><div class="res-badge">Selesai</div><h2 style="font-size:1.2rem;font-weight:800;margin:6px 0 10px">Bab Bekal Selesai</h2><ul class="sumlist">${SUM.map(x => `<li>${f(x)}</li>`).join("")}</ul><p class="pgb" style="margin-top:14px">Kamu sudah mengerjakan ${cnt()} dari ${M.length} quiz modul. Lanjut ke latihan per bab, dan buka lagi Pengantar kapan pun lupa istilah.</p></div>`;
    window.scrollTo(0, 0);
  };

  /* Kartu Pengantar di beranda */
  const oh = window.home;
  window.home = function () {
    oh();
    const t = document.querySelector(".tools3");
    if (t && !t.querySelector("[data-pg]")) t.insertAdjacentHTML("afterbegin", `<button class="tc" data-pg="1" onclick="pgList()"><span class="tc-ic">${ic("book", 22)}</span><b>Pengantar: Bekal dari Nol</b><small>${cnt()} dari ${M.length} modul selesai · materi dasar + quiz mini</small></button>`);
  };
  window.home();

  /* Loading page, lalu pilihan awal */
  const sp = $("splash");
  function gate() {
    const c = cnt(), g = document.createElement("div"); g.id = "gate";
    g.innerHTML = `<h2>Mau mulai dari mana?</h2><p class="gs">Pilih satu. Kamu selalu bisa pindah lewat beranda.</p><div class="gcards"><button class="gcard rec" id="gP"><span class="gtag">Disarankan untuk pemula</span><b>Pelajari Pengantar</b><span>Bekal dari Nol: ${M.length} modul materi dasar dengan quiz mini, supaya paham seluruh materi. ${c ? c + " modul sudah selesai." : ""}</span></button><button class="gcard" id="gH"><b>Homepage</b><span>Langsung ke latihan per bab dan Simulasi UTS.</span></button></div>`;
    document.body.appendChild(g);
    const close = fn => { g.classList.add("out"); setTimeout(() => g.remove(), 450); fn && fn(); };
    $("gP").onclick = () => close(() => pgList());
    $("gH").onclick = () => close();
  }
  const go = () => { if (!sp) return gate(); sp.classList.add("out"); setTimeout(() => { sp.remove(); gate(); }, 450); };
  const t0 = Date.now(), min = matchMedia("(prefers-reduced-motion:reduce)").matches ? 400 : 1600;
  let started = false;
  const fire = () => { if (started) return; started = true; setTimeout(go, Math.max(0, min - (Date.now() - t0))); };
  if (document.readyState === "complete") fire(); else { window.addEventListener("load", fire); setTimeout(fire, 3000); } /* cadangan: loading tidak boleh macet */
})();

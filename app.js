/* ═══════════════════════════════════════════
       SVG ICONS  (replacing all emojis)
       ═══════════════════════════════════════════ */
    const IC = {
      sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`,
      moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/></svg>`,
      link: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>`,
      pen: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
      circle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/></svg>`,
      check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
      x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
      arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
      arrowL: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
      list: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
      star: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
      trophy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 010-5H6"/><path d="M18 9h1.5a2.5 2.5 0 000-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22"/><path d="M18 2H6v7a6 6 0 1012 0V2z"/></svg>`,
      info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
      refresh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></svg>`,
      chev: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
      book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>`,
      clip: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 17H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><path d="M15 3h4a2 2 0 012 2v10a2 2 0 01-2 2h-4"/><polyline points="13 8 9 12 13 16"/></svg>`,
      grid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>`,
    };
    function ic(name, w) { return `<span class="ic" style="width:${w || 16}px;height:${w || 16}px">${IC[name] || ''}</span>`; }

    /* ═══════════════════════════════════════════
       DATA  (unchanged)
       ═══════════════════════════════════════════ */
    const DATA = {"1": {"title": "Bab 1 · Pengenalan Kecerdasan Buatan", "tf": [["Turing (1950) mengganti pertanyaan 'Can machines think?' menjadi 'Can machines behave intelligently?'", true, "Benar, inilah dasar Imitation Game."], ["Perilaku rasional selalu melibatkan proses berpikir, sehingga refleks berkedip bukan tindakan rasional.", false, "Salah. Rasional = melakukan hal yang diharapkan memaksimalkan pencapaian tujuan; refleks pun bisa rasional."], ["Pendekatan statistical models dominan sebelum 1995, sedangkan logical representations dominan sejak 2000.", false, "Terbalik: logical representations sebelum 1995, statistical models sejak 2000."], ["Revolusi kognitif 1960-an melahirkan psikologi pemrosesan informasi (cognitive psychology).", true, "Benar."], ["Turing memprediksi pada tahun 2000 mesin punya peluang 30% mengelabui orang awam selama 5 menit.", true, "Benar."], ["AlphaGo mengalahkan Ke Jie pada Mei 2017.", true, "Benar."], ["Kasus alat rekrutmen Amazon 2018 yang menurunkan resume berisi 'women' adalah contoh isu privasi.", false, "Itu contoh bias."], ["UNESCO mengadopsi kesepakatan global etika AI pada November 2021.", true, "Benar."], ["Pendekatan 'thinking rationally' berbasis ilmu saraf, sedangkan 'thinking humanly' berbasis logika.", false, "Terbalik. Thinking humanly = psikologi/neurosains (cara manusia berpikir). Thinking rationally = logika (laws of thought)."], ["Brain imaging adalah cara mengamati otak saat bekerja.", true, "Benar."], ["Aristoteles mengkaji argumen dan proses berpikir yang benar.", true, "Benar."], ["Chess dan Sudoku termasuk pendekatan statistical models.", false, "Itu logical representations."]], "isian": [["Tes yang diusulkan Turing untuk menguji perilaku cerdas mesin disebut ...", "Turing Test (Imitation Game)"], ["Entitas yang mempersepsi dan bertindak disebut ...", "Agent (Agen)"], ["Pada 1997, IBM Deep Blue mengalahkan juara catur dunia bernama ...", "Garry Kasparov (Kasparov)"], ["Selain bias dan privasi, isu etika AI ketiga di slide adalah dampak ke ... (contoh: konsumsi energi untuk melatih model besar).", "Lingkungan (Environment)"], ["Nilai: UTS 80 (bobot 30%), UAS 70 (30%), praktikum 90 (10%), TP 85 (10%), PA 75 (20%). Nilai akhir = ... (hitung: tiap nilai × bobotnya, lalu jumlahkan)", "77.5"], ["Syarat hadir minimal 80% dari 14 pertemuan (80% × 14 = 11,2). Dibulatkan ke atas, minimal hadir ... kali.", "12"]], "match": [{"group": "Empat Pendekatan AI", "options": ["Thinking humanly", "Thinking rationally", "Acting humanly", "Acting rationally"], "items": [["Interrogator manusia mencoba membedakan mesin dari manusia lewat percakapan.", "Acting humanly"], ["Menyimpulkan 'Socrates fana' dari premis logika.", "Thinking rationally"], ["Merancang entitas yang memaksimalkan pencapaian tujuan dari informasi yang tersedia.", "Acting rationally"], ["Validasi model lewat data neurologis dan eksperimen pada subjek manusia.", "Thinking humanly"]]}], "mcq": [{"q": "Manakah yang BUKAN masalah pendekatan 'laws of thought'?", "o": ["Tidak semua perilaku cerdas dimediasi penalaran logis", "Sebagian besar inferensi logis intractable", "Mengabaikan masalah sulit persepsi", "Logika tidak dapat ditulis dalam notasi formal"], "a": 3, "e": "Laws of thought itu justru berbasis logika formal; masalahnya ada di tiga hal lain (tak semua perilaku cerdas logis, abaikan persepsi, inferensi intractable)."}, {"q": "Komponen utama AI menurut Turing adalah knowledge, reasoning, language understanding, dan ...", "o": ["Learning", "Robotika", "Penyimpanan data", "Jaringan"], "a": 0, "e": "Empat komponen Turing: knowledge, reasoning, language understanding, learning. Robotika dan jaringan bukan komponennya."}, {"q": "Cara mengetahui bagaimana manusia berpikir berikut ini, kecuali ...", "o": ["Introspeksi", "Eksperimen psikologi", "Brain imaging", "Turing Test"], "a": 3, "e": "Introspeksi, eksperimen psikologi, dan brain imaging mempelajari cara manusia berpikir. Turing Test menguji perilaku, bukan cara berpikir."}], "es": [{"q": "Jelaskan empat pendekatan AI menurut Russell & Norvig beserta contohnya.", "m": "Thinking humanly (cognitive modeling) meniru cara berpikir manusia, divalidasi lewat psikologi dan neurosains. Acting humanly (Turing Test) menguji apakah mesin berperilaku tak terbedakan dari manusia. Thinking rationally (laws of thought) memakai logika ala Aristoteles. Acting rationally (rational agent) bertindak memaksimalkan pencapaian tujuan berdasarkan informasi yang ada.", "p": [["Thinking humanly / cognitive modeling", "kognitif|cognitive|thinking humanly"], ["Acting humanly / Turing Test", "turing|imitation|acting humanly"], ["Thinking rationally / logika (laws of thought)", "logika|logic|aristoteles"], ["Acting rationally / rational agent", "rational agent|agen rasional|acting rationally|memaksimalkan"]]}, {"q": "Jelaskan Turing Test dan komponen AI menurut Turing.", "m": "Imitation Game (1950): interrogator manusia berkomunikasi dengan manusia dan sistem AI di balik tirai; bila tak bisa membedakan, mesin dianggap cerdas. Prediksi: tahun 2000 peluang 30% mengelabui awam 5 menit. Komponen: knowledge, reasoning, language understanding, learning.", "p": [["Imitation Game dan interrogator", "imitation|interrogator|turing"], ["Prediksi 30% dalam 5 menit", "30|5 menit"], ["Komponen AI", "knowledge|reasoning|learning|bahasa"]]}, {"q": "Uraikan tantangan etika AI dan stakeholder-nya.", "m": "Bias (Amazon 2018), privasi (Lensa AI tanpa consent), lingkungan (energi model besar). Stakeholder: akademisi, pemerintah (NSTC 2016), antarpemerintah (UNESCO 2021), nirlaba (Asilomar), perusahaan.", "p": [["Bias", "bias|amazon"], ["Privasi", "privasi|privacy|lensa"], ["Lingkungan/energi", "lingkungan|energi|environment"], ["Stakeholder", "akademisi|pemerintah|unesco|perusahaan"]]}], "sum": ["Empat pendekatan AI: thinking/acting × human/rational.", "Cognitive modeling: introspeksi, eksperimen psikologi, brain imaging; kini terpisah dari AI.", "Turing Test (1950, Imitation Game); komponen AI: knowledge, reasoning, language understanding, learning.", "Laws of thought bermasalah: tak semua perilaku cerdas logis, abaikan persepsi, inferensi intractable.", "Rational agent memaksimalkan pencapaian tujuan; logical (sebelum 1995) vs statistical (sejak 2000); Deep Blue 1997, AlphaGo 2017.", "Etika AI: bias, privasi, lingkungan; stakeholder: akademisi, pemerintah, antarpemerintah, nirlaba, perusahaan."]}, "2": {"title": "Bab 2 · Agent dan Environment", "tf": [["PEAS adalah singkatan dari Performance measure, Environment, Actuators, Sensors.", true, "Benar."], ["Lingkungan deterministik berarti state berikutnya sepenuhnya ditentukan oleh state saat ini dan aksi agen.", true, "Benar."], ["Agen simple reflex memilih aksi berdasarkan seluruh riwayat persepsi.", false, "Salah. Hanya berdasarkan persepsi saat ini (aturan condition-action)."], ["Agent adalah apa pun yang mempersepsi lingkungan lewat sensor dan bertindak lewat actuator.", true, "Definisi agent."], ["Agent function memetakan riwayat persepsi ke aksi: f: P* → A.", true, "Benar."], ["Agent program berjalan pada physical architecture untuk menghasilkan agent function.", true, "Benar."], ["Agen rasional sama dengan agen sempurna yang tidak pernah gagal.", false, "Rasional memaksimalkan kinerja yang diharapkan (expected), bukan kesempurnaan (contoh menyeberang di Champs-Élysées)."], ["Kerasionalan bergantung pada performance measure, pengetahuan awal, aksi yang mungkin, dan percept sequence.", true, "Empat hal tersebut."], ["Tanpa penalti gerak, agen vacuum yang NoOp setelah semua kotak bersih tetap rasional.", true, "Benar. Tidak ada aksi yang menaikkan skor lagi, jadi diam pun rasional. Bandingkan dengan soal penalti gerak."], ["Lingkungan episodic: pilihan aksi tiap episode hanya bergantung pada episode itu.", true, "Benar."], ["Lingkungan semidynamic: lingkungan tak berubah seiring waktu, tetapi skor kinerja agen berubah.", true, "Benar."], ["Pada lingkungan static, lingkungan terus berubah saat agen berpikir.", false, "Static = tidak berubah saat agen berdeliberasi."], ["Sensor adalah rem dan kemudi pada taksi otonom.", false, "Itu actuator."], ["Model-based reflex agent menyimpan state internal tentang dunia.", true, "Benar."], ["Istilah utility dipakai karena 'happy' kurang ilmiah.", true, "Benar."], ["Performance measure vacuum bisa berupa jumlah kotak bersih tiap time step.", true, "Benar."], ["Dengan penalti per gerakan, agen vacuum yang terus bergerak setelah semua bersih bersifat irasional.", true, "Benar, geraknya hanya mengurangi skor."]], "isian": [["Komponen agen yang menerima persepsi dari lingkungan disebut ...", "Sensor (Sensors)"], ["Ukuran yang menilai keberhasilan perilaku agen disebut ...", "Performance measure (Ukuran kinerja)"], ["Agen yang memilih aksi berdasarkan ukuran 'kebahagiaan' atau preferensi disebut agen berbasis ...", "Utility (Utilitas)"], ["Percept vacuum world berformat [lokasi, isi]. Saat agen di kotak A dan kotak A kotor, percept-nya ditulis ...", "[A,Dirty]"], ["Aksi vacuum: Left, Right, Suck, dan ...", "NoOp (No Op)"], ["Lingkungan yang sensornya mengakses state lengkap tiap saat disebut ...", "Fully observable"], ["Lingkungan dengan state berikut ditentukan penuh oleh state sekarang dan aksi agen disebut ...", "Deterministic (Deterministik)"], ["Lingkungan dengan jumlah percept dan aksi terbatas dan jelas disebut ...", "Discrete (Diskret)"], ["Agen utility-based rasional memaksimalkan ... dari hasil aksi.", "Expected utility (Utilitas yang diharapkan)"], ["Selain simple reflex, model-based, goal-based, dan utility-based, jenis agen kelima adalah ...", "Learning agent (Learning agents)"], ["Dua kotak bersih sejak awal, agen NoOp 5 time step, 1 poin per kotak bersih per step. Skor = ...", "10"], ["Dua kotak bersih sejak awal, 5 time step, 1 poin per kotak bersih per step. Agen bergerak Left/Right tiap step dan tiap gerakan kena penalti 1 poin. Skor total = ...", "5"], ["Dunia vacuum 2 kotak: konfigurasi dirt (tiap kotak bersih/kotor) × 2 lokasi agen = ... state.", "8"], ["Jumlah kemungkinan percept [lokasi, isi] pada dua kotak (A/B × Clean/Dirty) = ...", "4"]], "match": [{"group": "Jenis Agen", "options": ["Simple reflex", "Model-based reflex", "Goal-based", "Utility-based", "Learning agent"], "items": [["Aturan condition-action berdasarkan persepsi saat ini.", "Simple reflex"], ["Menyimpan state internal untuk bagian dunia yang tak teramati.", "Model-based reflex"], ["Memilih aksi demi mencapai tujuan tertentu.", "Goal-based"], ["Memilih aksi yang memaksimalkan ukuran kepuasan.", "Utility-based"], ["Memperbaiki kinerja dari pengalaman lewat critic dan learning element.", "Learning agent"]]}], "mcq": [{"q": "Lingkungan permainan catur (tanpa jam) paling tepat disebut ...", "o": ["Fully observable, deterministic, multi-agent", "Partially observable, stochastic, single-agent", "Fully observable, stochastic, single-agent", "Partially observable, deterministic, single-agent"], "a": 0, "e": "Catur tanpa jam: papan terlihat penuh, hasil langkah pasti, dan ada dua pemain, jadi fully observable, deterministic, multi-agent."}, {"q": "Agen yang punya model internal tentang cara kerja dunia adalah ...", "o": ["Simple reflex agent", "Model-based reflex agent", "Table lookup tanpa memori", "Agen acak"], "a": 1, "e": "Model-based reflex agent menyimpan state internal tentang dunia yang tak teramati. Simple reflex tidak punya memori."}, {"q": "Lingkungan taksi otonom paling tepat disebut ...", "o": ["Fully observable, static, discrete", "Partially observable, stochastic, dynamic", "Fully observable, deterministic, episodic", "Partially observable, deterministic, static"], "a": 1, "e": "Taksi: sensor tak melihat semua (partial), perilaku lalu lintas acak (stochastic), dunia terus bergerak (dynamic)."}], "es": [{"q": "Tentukan PEAS untuk taksi otonom dan jelaskan arti tiap komponennya.", "m": "Performance: aman, cepat, legal, nyaman, hemat. Environment: jalan, lalu lintas, pejalan kaki, penumpang. Actuators: kemudi, gas, rem, klakson, layar. Sensors: kamera, GPS, speedometer, sonar/lidar.", "p": [["Performance measure (aman, cepat, legal)", "aman|cepat|legal|nyaman|performance"], ["Environment (jalan, lalu lintas, pejalan kaki)", "jalan|lalu lintas|pejalan|penumpang|environment"], ["Actuators (kemudi, gas, rem)", "kemudi|rem|gas|klakson|actuator"], ["Sensors (kamera, GPS, lidar)", "kamera|gps|speedometer|sonar|lidar|sensor"]]}, {"q": "Bedakan lima jenis agent beserta cara kerjanya.", "m": "Simple reflex: condition-action pada persepsi sekarang. Model-based: menyimpan state internal. Goal-based: memilih aksi menuju tujuan. Utility-based: memaksimalkan expected utility. Learning agent: memperbaiki kinerja dari pengalaman.", "p": [["Simple reflex", "simple reflex|condition|refleks"], ["Model-based", "model-based|state internal"], ["Goal/utility", "goal|utility|tujuan"], ["Learning", "learning|belajar|pengalaman"]]}, {"q": "Jelaskan karakteristik environment dan klasifikasikan Wumpus world.", "m": "Fully/partially observable, deterministic/stochastic, episodic/sequential, static/dynamic, discrete/continuous, single/multi-agent. Wumpus: partially observable, deterministic, sequential, static, discrete, single-agent.", "p": [["Observable", "observable|teramati"], ["Deterministic", "deterministic|stochastic"], ["Episodic/static/discrete", "episodic|static|discrete"], ["Klasifikasi Wumpus", "wumpus|partially"]]}], "sum": ["Agent mempersepsi lewat sensor dan bertindak lewat actuator; agent function f: P* → A.", "Rasional = memaksimalkan kinerja yang diharapkan, bukan kesempurnaan.", "Rasional bergantung pada performance measure, pengetahuan awal, aksi, dan percept sequence.", "PEAS: Performance, Environment, Actuators, Sensors.", "Environment: observable, deterministic, episodic, static, discrete, single/multi-agent.", "Agen: simple reflex, model-based, goal-based, utility-based, learning."]}, "3": {"title": "Bab 3 · Uninformed Search", "tf": [["BFS menjamin solusi optimal jika semua step cost sama.", true, "Benar, karena memperluas node terdangkal lebih dulu."], ["DFS selalu complete pada ruang state yang memiliki loop, meski tanpa pengecekan state berulang.", false, "Salah. DFS bisa terjebak loop dan tidak complete."], ["Uniform-cost search memperluas node dengan g(n) terkecil terlebih dahulu.", true, "Benar."], ["Reflex agent mempertimbangkan konsekuensi masa depan dari aksinya.", false, "Reflex hanya melihat dunia SEKARANG; planning agent bertanya 'what if'."], ["Planning agent perlu model evolusi dunia dan goal test.", true, "Benar."], ["Search problem: state space, successor function, start state, goal test.", true, "Benar."], ["Solusi search problem adalah rangkaian aksi (plan) dari start ke goal.", true, "Benar."], ["Pada state space graph, tiap state muncul berkali-kali.", false, "Tiap state muncul sekali; pada search tree bisa berulang."], ["Setiap node search tree mewakili satu path utuh pada state space graph.", true, "Benar."], ["Fringe DFS adalah FIFO queue.", false, "DFS: LIFO stack; BFS: FIFO queue."], ["Ruang memori DFS adalah O(bm).", true, "Hanya saudara-saudara sepanjang path ke root."], ["BFS dengan solusi terdangkal pada kedalaman s berwaktu O(b^s).", true, "Benar."], ["UCS complete dan optimal jika biaya busur minimum positif dan biaya solusi berhingga.", true, "Benar."], ["Pada iterative deepening, redundansi tidak terlalu boros karena kerja terbanyak ada di level terdalam.", true, "Benar."], ["Agen tidak benar-benar mencoba semua plan di dunia nyata; planning dilakukan 'in simulation'.", true, "Benar."], ["DFS selalu menemukan solusi termurah.", false, "DFS menemukan solusi 'paling kiri'."], ["BFS optimal bila semua biaya aksi sama dengan 1.", true, "Benar."], ["UCS meluas menurut kontur biaya yang meningkat.", true, "Benar."], ["Semua algoritma search sama kecuali strategi fringe.", true, "Benar."], ["Pada graf S–A 2, S–B 5, A–G 6, B–G 2, DFS yang memilih A lebih dulu menemukan path S–A–G berbiaya 8, bukan yang termurah.", true, "Path termurah S–B–G = 7."]], "isian": [["Struktur data frontier pada BFS adalah ...", "Queue (FIFO)"], ["Struktur data frontier pada DFS adalah ...", "Stack (LIFO)"], ["Kompleksitas waktu BFS dengan branching factor b dan kedalaman solusi terdangkal (d, sama dengan s di slide) adalah ...", "b^d (O(b^d))"], ["Fringe UCS berupa ...", "Priority queue (Antrean prioritas)"], ["Prioritas node pada UCS adalah ...", "Cumulative cost (Biaya kumulatif)"], ["Ruang fringe BFS adalah ...", "b^s (O(b^s))"], ["DFS memperluas node yang paling ... terlebih dahulu.", "Dalam (Deepest)"], ["BFS menemukan path terpendek dalam jumlah ... (bukan biaya).", "Aksi (Action)"], ["Problem-solving agent memandang state sebagai satu kesatuan tanpa struktur internal, disebut representasi ...", "Atomic"], ["Pohon penuh b=2, kedalaman 3: jumlah node total (1+b+b²+b³) = ...", "15"], ["Pohon penuh b=3, kedalaman maksimum m=2: jumlah node = ...", "13"], ["Pathing 120 posisi; eat-all-dots dengan 3 dot: jumlah state 120 × 2^3 = ...", "960"], ["Graf: S→A biaya 2, S→B biaya 5, A→G biaya 6, B→G biaya 2. Biaya path termurah dari S ke G (hasil UCS) = ...", "7"], ["Pada graf yang sama (S→A=2, S→B=5, A→G=6, B→G=2), node pertama yang diperluas UCS setelah S adalah ...", "A"], ["BFS dengan b=10 dan solusi terdangkal s=3: O(b^s) = ... node.", "1000"]], "match": [{"group": "Algoritma Uninformed Search", "options": ["BFS", "DFS", "Uniform-cost", "Depth-limited", "Iterative deepening"], "items": [["Memperluas node terdangkal, frontier FIFO.", "BFS"], ["Memperluas node terdalam, frontier LIFO.", "DFS"], ["Memperluas node dengan biaya path g(n) terkecil.", "Uniform-cost"], ["DFS dengan batas kedalaman l.", "Depth-limited"], ["Depth-limited dengan batas yang dinaikkan bertahap.", "Iterative deepening"]]}], "mcq": [{"q": "Algoritma yang menggabungkan kebutuhan memori DFS dan kelengkapan BFS adalah ...", "o": ["Iterative deepening search", "Greedy search", "Uniform-cost search", "Hill climbing"], "a": 0, "e": "IDS = DFS berulang dengan batas naik: memori O(bd) seperti DFS, lengkap seperti BFS."}, {"q": "Keunggulan utama DFS dibanding BFS adalah ...", "o": ["Selalu optimal", "Kebutuhan memori linear O(bm)", "Selalu complete", "Waktu lebih cepat dari O(b^d)"], "a": 1, "e": "Keunggulan DFS adalah memori linear O(bm). DFS tidak optimal dan tidak selalu complete."}, {"q": "Uniform-cost search berperilaku sama dengan BFS bila ...", "o": ["Semua step cost sama", "Heuristik admissible", "Ruang state berhingga", "Branching factor 1"], "a": 0, "e": "Bila semua step cost sama, node dengan g(n) terkecil = node terdangkal, jadi UCS meluas persis seperti BFS."}], "es": [{"q": "Bandingkan BFS, DFS, dan IDS dari sisi completeness, optimality, kompleksitas waktu, dan ruang.", "m": "BFS complete, optimal bila step cost sama, waktu dan ruang O(b^d). DFS tidak complete pada ruang tak hingga/loop, tidak optimal, waktu O(b^m), ruang O(bm). IDS complete, optimal bila step cost sama, waktu O(b^d), ruang O(bd).", "p": [["BFS: complete, optimal, O(b^d)", "bfs|breadth"], ["DFS: tidak complete/optimal, ruang O(bm)", "dfs|depth-first|depth first|bm"], ["IDS menggabungkan keunggulan keduanya", "ids|iterative|deepening"], ["Menyebut waktu dan ruang tiap algoritma", "b^d|bd|b^m|waktu|ruang|space|time"]]}, {"q": "Jelaskan komponen search problem dan perbedaan state space graph dengan search tree.", "m": "Search problem: state space, successor function (aksi, biaya), start state, goal test. Graph: tiap state sekali. Tree: node mewakili path utuh, state bisa berulang; keduanya dibangun on demand.", "p": [["Komponen search problem", "state space|successor|start|goal"], ["Graph: state sekali", "graph|sekali"], ["Tree: node = path", "tree|path|berulang"]]}, {"q": "Jelaskan UCS beserta kelebihan dan kekurangannya.", "m": "UCS memperluas node berbiaya kumulatif terkecil memakai priority queue. Kelebihan: complete dan optimal. Kekurangan: meluas ke segala arah dan tak memakai informasi goal.", "p": [["Priority queue, biaya kumulatif", "priority|kumulatif|cumulative"], ["Complete dan optimal", "complete|optimal"], ["Kekurangan: segala arah", "segala arah|goal|informasi"]]}], "sum": ["Reflex agent melihat dunia sekarang; planning agent bertanya 'what if'.", "Search problem: state space, successor, start state, goal test; solusi = plan.", "Search tree: node = path utuh; graph: tiap state sekali.", "DFS: LIFO, waktu O(b^m), ruang O(bm), tidak optimal. BFS: FIFO, O(b^s), optimal bila biaya sama.", "UCS: priority queue berdasar biaya kumulatif; complete dan optimal.", "Iterative deepening: DFS dengan batas bertahap.", "Rumus: node pohon penuh = 1+b+…+b^m; state eat-all-dots = posisi × 2^(jumlah dot)."]}, "4": {"title": "Bab 4 · Informed Search", "tf": [["A* menggunakan f(n) = g(n) + h(n).", true, "Benar."], ["Greedy best-first search menggunakan f(n) = g(n) + h(n).", false, "Salah. Greedy hanya memakai f(n) = h(n)."], ["Heuristik admissible tidak pernah melebihi biaya sebenarnya menuju goal.", true, "Benar, tidak pernah overestimate."], ["Heuristik adalah fungsi yang mengestimasi seberapa dekat state ke goal, dirancang untuk problem tertentu.", true, "Benar."], ["Manhattan dan Euclidean distance adalah contoh heuristik pathing.", true, "Benar."], ["Greedy search selalu optimal karena memilih node yang tampak terdekat.", false, "Bisa menuju goal yang salah; worst case seperti DFS yang dipandu buruk."], ["UCS mengurutkan dengan backward cost g(n), greedy dengan forward cost h(n).", true, "Benar."], ["A* mengurutkan node dengan f(n) = g(n) + h(n).", true, "Benar."], ["A* boleh berhenti begitu goal di-enqueue ke fringe.", false, "Hanya berhenti saat goal di-dequeue."], ["Heuristik inadmissible (pesimistis) dapat merusak optimalitas A*.", true, "Rencana bagus terjebak di fringe."], ["Heuristik admissible memenuhi 0 ≤ h(n) ≤ h*(n).", true, "h* = biaya sebenarnya ke goal terdekat."], ["UCS meluas ke segala arah, A* terutama ke arah goal.", true, "Benar."], ["A* tidak punya aplikasi praktis di luar teori.", false, "Dipakai pada video game, routing, robot motion planning, machine translation, dll."], ["Greedy search hanya memakai h(n).", true, "Benar."], ["UCS memakai informasi lokasi goal.", false, "UCS tidak punya informasi goal."], ["A* adalah gabungan UCS dan greedy.", true, "Benar."], ["Heuristik admissible bernilai 0 pada goal.", true, "Benar."], ["Heuristik h(n)=0 untuk semua n adalah admissible.", true, "Trivial admissible; A* menjadi UCS."]], "isian": [["Heuristik yang tidak pernah melebihi biaya sebenarnya ke goal disebut ...", "Admissible"], ["Greedy best-first search memilih node hanya berdasarkan fungsi ...", "Heuristik (Heuristic)"], ["Algoritma local search yang selalu pindah ke tetangga terbaik dan dapat terjebak local maximum disebut ...", "Hill climbing"], ["A* mengurutkan dengan f(n) = g(n) + h(n). Bagian h(n) disebut ... cost (estimasi sisa jarak ke goal).", "Forward (Heuristik)"], ["Heuristik yang melebihi (overestimate) biaya sebenarnya ke goal disebut ...", "Inadmissible (Pesimistis)"], ["Greedy search mengurutkan berdasarkan ... cost.", "Forward cost (Forward)"], ["UCS mengurutkan berdasarkan ... cost.", "Backward cost (Backward)"], ["Heuristik admissible juga disebut heuristik ...", "Optimistic (Optimis)"], ["A* berhenti hanya saat goal di-... dari fringe.", "Dequeue (Dikeluarkan)"], ["Heuristik biasanya didesain dengan memakai ... problem.", "Relaxed"], ["Fringe: A (g=1, h=5) dan B (g=5, h=2). Node yang diperluas A* berikutnya adalah ...", "A"], ["Pada fringe yang sama, node yang dipilih greedy search adalah ...", "B"], ["f(n) untuk g(n)=4 dan h(n)=3 adalah ...", "7"], ["Biaya sebenarnya ke goal 4 dan h(n)=5. Heuristik ini bersifat ...", "Inadmissible"], ["Fringe A* berisi (g=2,h=4) dan (g=3,h=2). f terkecil = ...", "5"]], "match": [{"group": "Algoritma dan Evaluasinya", "options": ["Greedy best-first", "A*", "Uniform-cost", "Hill climbing"], "items": [["Menilai node hanya dari estimasi jarak ke goal.", "Greedy best-first"], ["Menjumlahkan biaya sejauh ini dan estimasi sisa.", "A*"], ["Mengabaikan heuristik, mengurutkan berdasarkan biaya path.", "Uniform-cost"], ["Berpindah ke tetangga terbaik tanpa menyimpan frontier.", "Hill climbing"]]}], "mcq": [{"q": "Jika h(n) = 0 untuk semua n, A* berperilaku seperti ...", "o": ["Uniform-cost search", "DFS", "Hill climbing", "Greedy search"], "a": 0, "e": "h(n)=0 menghapus bagian heuristik sehingga f(n)=g(n), yaitu persis UCS."}, {"q": "Heuristik admissible untuk 8-puzzle adalah ...", "o": ["Jumlah ubin yang salah tempat", "Jumlah ubin dikali 10", "Dua kali Manhattan distance", "Kedalaman maksimum pohon"], "a": 0, "e": "Ubin salah tempat tidak pernah melebihi jumlah langkah sebenarnya (admissible). Dua kali Manhattan bisa overestimate."}, {"q": "Kelemahan utama greedy best-first search adalah ...", "o": ["Tidak menjamin solusi optimal", "Selalu butuh memori O(1)", "Tidak memakai heuristik", "Hanya untuk graf berbobot"], "a": 0, "e": "Greedy hanya melihat h(n), jadi bisa menuju goal yang bukan jalur termurah."}], "es": [{"q": "Jelaskan cara kerja A*, syarat agar optimal, dan berikan contoh heuristik.", "m": "A* mengurutkan node dengan f(n)=g(n)+h(n), g biaya dari start, h estimasi ke goal. A* optimal bila h admissible (tree search) atau consistent (graph search). Contoh h untuk 8-puzzle: misplaced tiles atau Manhattan distance.", "p": [["f(n) = g(n) + h(n)", "g(n)|f(n)|h(n)"], ["Penjelasan g dan h", "biaya|estimasi|cost"], ["Syarat admissible/consistent", "admissible|consistent"], ["Contoh heuristik (misplaced tiles/Manhattan)", "misplaced|manhattan|ubin"]]}, {"q": "Mengapa A* tidak boleh berhenti saat goal di-enqueue, dan apa peran heuristik admissible?", "m": "Goal yang di-enqueue belum tentu jalur termurah; berhenti saat di-dequeue menjamin optimal. Heuristik admissible (optimis) tak membuang jalur bagus; inadmissible dapat menjebak rencana bagus di fringe.", "p": [["Berhenti saat dequeue", "dequeue"], ["Admissible optimis", "admissible|optimis|optimistic"], ["Inadmissible merusak optimalitas", "inadmissible|pesimis|merusak"]]}, {"q": "Bandingkan UCS, Greedy, dan A*.", "m": "UCS: g(n), optimal tapi meluas ke segala arah. Greedy: h(n), cepat tapi bisa ke goal salah. A*: g(n)+h(n), optimal bila heuristik admissible dan terarah ke goal.", "p": [["UCS: g(n)", "ucs|g(n)"], ["Greedy: h(n)", "greedy|h(n)"], ["A*: f(n)=g+h", "a\\*|g\\(n\\)\\+h|f(n)"]]}], "sum": ["Heuristik: estimasi kedekatan ke goal (Manhattan, Euclidean).", "UCS: g(n); Greedy: h(n); A*: f(n)=g(n)+h(n).", "Greedy bisa menuju goal salah; UCS meluas ke segala arah.", "A* berhenti saat goal di-dequeue, bukan di-enqueue.", "Admissible: 0 ≤ h(n) ≤ h*(n); inadmissible merusak optimalitas.", "A* optimal dengan heuristik admissible/consistent; heuristik dirancang lewat relaxed problem.", "Rumus: f(n) = g(n) + h(n); admissible bila 0 ≤ h(n) ≤ h*(n)."]}, "5": {"title": "Bab 5 · Constraint Satisfaction Problems", "tf": [["Arc X→Y konsisten bila untuk setiap x di tail ada minimal satu y di head yang bisa dipasangkan tanpa melanggar constraint.", true, "Benar. Kalau ada x yang tak punya pasangan, x dihapus dari tail."], ["Forward checking mencoret nilai dari variabel yang sudah di-assign.", false, "Salah. Yang dicoret adalah nilai pada variabel yang BELUM di-assign dan melanggar constraint dengan assignment sekarang."], ["Solusi CSP harus memenuhi semua constraint.", true, "Benar, yaitu assignment lengkap dan konsisten."], ["CSP adalah himpunan bagian khusus dari search problem.", true, "Benar."], ["State CSP didefinisikan oleh variabel Xi dengan nilai dari domain D; goal test berupa himpunan constraint.", true, "Benar."], ["CSP cocok untuk identification problem, yang penting adalah goal-nya, bukan path-nya.", true, "Benar."], ["Pada planning, yang penting adalah assignment variabel, bukan path.", false, "Itu identification; planning = urutan aksi."], ["Unary constraint melibatkan satu variabel dan setara dengan mengurangi domain.", true, "Benar."], ["Pada constraint graph biner, node adalah variabel dan busur adalah constraint.", true, "Benar."], ["Assignment [WA=red lalu NT=green] berbeda dari [NT=green lalu WA=red].", false, "Assignment bersifat komutatif."], ["Backtracking = DFS + variable ordering + fail-on-violation.", true, "Benar."], ["Forward checking tidak mendeteksi semua kegagalan dini.", true, "Contoh: NT dan SA tak bisa sama-sama biru."], ["Bila nilai X terhapus saat arc consistency, tetangga X tak perlu dicek ulang.", false, "Harus dicek ulang."], ["LCV memilih nilai yang mengesampingkan paling sedikit nilai variabel lain.", true, "Benar."], ["Boolean satisfiability adalah CSP berdomain terbatas yang NP-complete.", true, "Benar."], ["Constraint nonlinear pada domain tak hingga selalu dapat diselesaikan.", false, "Nonlinear undecidable."], ["Arc consistency dapat dipakai sebagai preprocessor.", true, "Benar."], ["Setelah arc consistency bisa tersisa nol solusi tanpa diketahui.", true, "Benar."], ["Pada 4-queens dengan satu ratu per kolom dan 4 baris, ada 4^4 = 256 complete assignment tanpa constraint.", true, "Benar."]], "isian": [["Heuristik memilih variabel dengan sisa nilai legal paling sedikit disingkat ...", "MRV (Minimum Remaining Values)"], ["Tiga komponen CSP adalah variabel, domain, dan ...", "Constraint (Constraints)"], ["Heuristik memilih nilai yang mengesampingkan paling sedikit nilai variabel lain disingkat ...", "LCV (Least Constraining Value)"], ["Pada map coloring, wilayah ... harus berbeda warna.", "Bertetangga (Adjacent)"], ["Pada contoh Australia, Tasmania adalah ... independen.", "Subproblem"], ["Variabel dengan sisa nilai legal paling sedikit disebut variabel ...", "Most constrained (Paling terkendala)"], ["Ordering MRV bersifat ... ordering.", "Fail-fast (Fail fast)"], ["Pada arc X→Y, nilai yang tidak punya pasangan dihapus dari bagian ... (variabel X, ujung belakang panah).", "Tail (Ekor)"], ["Constraint Sudoku pada tiap baris, kolom, dan region berupa ...", "Alldiff (All different)"], ["State awal formulasi standar search CSP adalah assignment ...", "Kosong (Empty)"], ["Map coloring 3 wilayah saling bertetangga, 3 warna: jumlah solusi valid = ...", "6"], ["4 variabel dengan domain 3 nilai: jumlah complete assignment tanpa constraint = ...", "81"], ["Australia 7 wilayah, 3 warna: jumlah complete assignment tanpa constraint = ...", "2187"], ["Arc consistency O(n²d³) dengan n=10, d=3 bernilai ...", "2700"], ["Domain NT awal {r,g,b}; WA=red dan WA–NT bertetangga. Setelah forward checking, nilai tersisa = ...", "2"]], "match": [{"group": "Map Coloring sebagai CSP", "options": ["Variabel", "Domain", "Constraint", "Solusi"], "items": [["Setiap wilayah pada peta.", "Variabel"], ["Himpunan warna {merah, hijau, biru}.", "Domain"], ["Wilayah bertetangga tidak boleh berwarna sama.", "Constraint"], ["Semua wilayah terwarnai tanpa konflik.", "Solusi"]]}], "mcq": [{"q": "Heuristik MRV memilih variabel yang ...", "o": ["Memiliki sisa nilai legal paling sedikit", "Memiliki domain terbesar", "Dipilih acak", "Paling sedikit constraint"], "a": 0, "e": "MRV memilih variabel dengan sisa nilai legal paling sedikit supaya kegagalan ketahuan cepat (fail-fast)."}, {"q": "Pada 4-queens dengan satu ratu per kolom, variabelnya adalah ...", "o": ["Baris ratu pada tiap kolom", "Warna petak", "Jumlah ratu", "Jumlah langkah"], "a": 0, "e": "Pada formulasi 4-queens satu ratu per kolom, tiap kolom = satu variabel dan nilainya adalah baris ratu."}], "es": [{"q": "Jelaskan backtracking search dan tiga cara memperbaikinya.", "m": "Backtracking = DFS + satu variabel per langkah + cek constraint sambil jalan (fail-on-violation). Perbaikan: ordering (MRV untuk variabel, LCV untuk nilai), filtering (forward checking, arc consistency), dan structure (mis. subproblem independen seperti Tasmania).", "p": [["Backtracking = DFS + variable ordering + fail-on-violation", "dfs|depth|fail"], ["Ordering: MRV dan LCV", "mrv|lcv|minimum remaining|least constraining"], ["Filtering: forward checking / arc consistency", "forward|arc|filtering"], ["Structure: subproblem independen", "structure|struktur|tasmania|independen"]]}, {"q": "Rumuskan map coloring dan n-queens sebagai CSP.", "m": "Map coloring: variabel = wilayah, domain = warna, constraint = wilayah bertetangga berbeda warna. N-queens: variabel = posisi ratu per kolom, domain = baris, constraint = tak saling menyerang.", "p": [["Map coloring: variabel, domain, constraint", "wilayah|warna|bertetangga"], ["N-queens: variabel dan domain", "ratu|queen|baris"], ["Constraint tak saling menyerang", "menyerang|konflik|constraint"]]}, {"q": "Bandingkan forward checking dan arc consistency.", "m": "Forward checking mencoret nilai yang melanggar constraint terhadap assignment sekarang. Arc consistency memastikan setiap arc X→Y konsisten, menghapus dari tail, dan tetangga dicek ulang, sehingga mendeteksi kegagalan lebih dini namun lebih mahal.", "p": [["Forward checking", "forward"], ["Arc consistency X→Y", "arc|tail"], ["Tetangga dicek ulang, lebih dini", "tetangga|dini|ulang"]]}], "sum": ["CSP: variabel Xi, domain D, constraint; cocok untuk identification (goal penting, path tidak).", "Contoh: map coloring, n-queens, cryptarithmetic, Sudoku (alldiff).", "Constraint: unary, binary, higher-order, soft (preferences).", "Backtracking = DFS + variable ordering + fail-on-violation.", "Filtering: forward checking dan arc consistency (cek ulang tetangga bila nilai hilang).", "Ordering: MRV (variabel) dan LCV (nilai); struktur: subproblem independen.", "Rumus: complete assignment = d^n; arc consistency O(n²d³)."]}, "6": {"title": "Bab 6 · Logical Agents dan Propositional Logic", "tf": [["P → Q bernilai salah hanya ketika P benar dan Q salah.", true, "Benar."], ["Kalimat valid (tautologi) benar pada semua model.", true, "Benar."], ["Modus ponens: dari P dan P → Q disimpulkan ¬Q.", false, "Salah. Kesimpulannya Q."], ["Knowledge base adalah himpunan kalimat dalam bahasa formal.", true, "Benar."], ["Pendekatan deklaratif: Tell agen apa yang perlu diketahui, lalu Ask apa yang harus dilakukan.", true, "Benar."], ["Wumpus world fully observable.", false, "Hanya persepsi lokal (partially observable)."], ["Wumpus world: deterministic, static, discrete, single-agent, sequential.", true, "Benar."], ["Glitter muncul iff emas ada di kotak yang sama.", true, "Benar."], ["KB ⊨ α iff α benar di semua model tempat KB benar, yaitu M(KB) ⊆ M(α).", true, "Benar."], ["Inference procedure sound bila semua yang diturunkan juga di-entail KB.", true, "Benar."], ["Inference procedure complete bila hanya menghasilkan sebagian kalimat yang di-entail.", false, "Complete = dapat menurunkan SEMUA kalimat yang di-entail."], ["KB ⊨ α iff (KB ∧ ¬α) unsatisfiable.", true, "Benar."], ["Deduction theorem: KB ⊨ α iff (KB ⇒ α) valid.", true, "Benar."], ["Truth table enumeration eksponensial terhadap jumlah simbol n.", true, "Benar."], ["Propositional logic sangat ekspresif sehingga klausanya sedikit.", false, "Terbatas; 'fisika' tiap kotak dan waktu membuat klausa membludak."], ["Agen dapat dipandang pada knowledge level maupun implementation level.", true, "Benar."], ["A ∨ ¬A adalah kalimat valid.", true, "Benar."], ["S1 ⇔ S2 benar iff S1 ⇒ S2 dan S2 ⇒ S1 benar.", true, "Benar."], ["Truth table untuk 3 simbol memiliki 6 baris.", false, "2^3 = 8."], ["Jika P=T dan Q=F, maka P ⇒ Q bernilai salah.", true, "Benar."], ["Jika P=T dan Q=F, maka ¬P ∨ Q bernilai benar.", false, "F ∨ F = salah."], ["Jika P1,2=false, P2,2=true, P3,1=false, maka ¬P1,2 ∧ (P2,2 ∨ P3,1) benar.", true, "T ∧ (T ∨ F) = T."], ["(A ∧ (A ⇒ B)) ⇒ B adalah kalimat valid.", true, "Itu modus ponens."]], "isian": [["Kalimat yang benar di semua model (misal A ∨ ¬A) disebut ...", "Valid (Tautologi)"], ["Kalimat yang benar pada setidaknya satu model disebut ...", "Satisfiable (Dapat dipenuhi)"], ["Bentuk konjungsi dari disjungsi literal disebut ...", "CNF (Conjunctive Normal Form)"], ["Deduction theorem: KB ⊨ α jika dan hanya jika (KB ⇒ α) bersifat ...", "Valid"], ["KB ⊨ α jika dan hanya jika (KB ∧ ¬α) bersifat ...", "Unsatisfiable (Tidak dapat dipenuhi)"], ["Kalimat yang tidak benar di model mana pun, mis. A ∧ ¬A, disebut ...", "Unsatisfiable"], ["Algoritma backtracking model checking yang diperbaiki bernama ...", "DPLL (Davis-Putnam-Logemann-Loveland)"], ["Stench terasa pada kotak yang ... dengan wumpus.", "Bersebelahan (Adjacent)"], ["Pada Wumpus world, emas memberi skor +1000 dan kematian ...", "-1000"], ["Tiga pilihan Boolean pit menghasilkan ... model.", "8"], ["Truth table untuk 5 simbol memiliki ... baris.", "32"], ["Dari 2 simbol, jumlah model yang membuat A ∨ B benar = ...", "3"], ["Dari 2 simbol, jumlah model yang membuat A ⇔ B benar = ...", "2"]], "match": [{"group": "Konektif Logika", "options": ["Konjungsi", "Disjungsi", "Negasi", "Implikasi", "Bikondisional"], "items": [["Benar hanya jika kedua operand benar (∧).", "Konjungsi"], ["Benar jika minimal satu operand benar (∨).", "Disjungsi"], ["Membalik nilai kebenaran (¬).", "Negasi"], ["Salah hanya bila anteseden benar dan konsekuen salah (→).", "Implikasi"], ["Benar bila kedua sisi bernilai sama (↔).", "Bikondisional"]]}], "mcq": [{"q": "Menurut De Morgan, ¬(P ∧ Q) setara dengan ...", "o": ["¬P ∨ ¬Q", "¬P ∧ ¬Q", "P ∨ Q", "P → Q"], "a": 0, "e": "De Morgan: negasi dari 'dan' menjadi 'atau' dari negasi masing-masing."}, {"q": "P → Q setara dengan ...", "o": ["¬P ∨ Q", "P ∨ ¬Q", "¬P ∧ Q", "Q → P"], "a": 0, "e": "Implikasi P→Q salah hanya saat P benar dan Q salah, sama dengan ¬P ∨ Q."}, {"q": "Truth table untuk 4 simbol proposisi memiliki berapa baris?", "o": ["8", "12", "16", "4"], "a": 2, "e": "n simbol → 2^n baris. 2^4 = 16."}], "es": [{"q": "Jelaskan entailment (KB ⊨ α), model checking dengan truth table, dan modus ponens.", "m": "KB ⊨ α berarti α benar di semua model tempat KB benar. Model checking dengan truth table menyusun 2^n baris untuk n simbol dan memeriksa semuanya. Modus ponens: dari P dan P → Q disimpulkan Q.", "p": [["Definisi entailment (benar di semua model KB)", "entail|semua model|⊨"], ["Truth table / model checking, 2^n baris", "truth table|tabel kebenaran|2^n|model checking"], ["Modus ponens: P, P→Q maka Q", "modus ponens"]]}, {"q": "Jelaskan syntax dan semantics propositional logic, serta soundness dan completeness.", "m": "Syntax: simbol proposisi dan connective ¬, ∧, ∨, ⇒, ⇔. Semantics: nilai benar/salah tiap kalimat dalam model. Sound: hanya menurunkan yang di-entail; complete: dapat menurunkan semua yang di-entail.", "p": [["Syntax dan connective", "connective|syntax|¬"], ["Semantics dan model", "semantics|model"], ["Soundness", "sound"], ["Completeness", "complete"]]}, {"q": "Jelaskan validity, satisfiability, dan deduction theorem.", "m": "Valid: benar di semua model. Satisfiable: benar di sebagian model. Unsatisfiable: tak benar di model mana pun. KB ⊨ α iff (KB ⇒ α) valid, dan iff (KB ∧ ¬α) unsatisfiable.", "p": [["Valid", "valid"], ["Satisfiable/unsatisfiable", "satisfiable"], ["Deduction theorem", "deduction|kb"]]}], "sum": ["Knowledge base = kalimat formal; pendekatan deklaratif: Tell dan Ask.", "Wumpus world: partially observable, deterministic, sequential, static, discrete, single-agent.", "Entailment: KB ⊨ α iff M(KB) ⊆ M(α); sound (hanya yang di-entail), complete (semua yang di-entail).", "Syntax: ¬, ∧, ∨, ⇒, ⇔; semantics: benar/salah terhadap model.", "Valid = benar di semua model; satisfiable = benar di sebagian; KB ⊨ α iff KB ∧ ¬α unsatisfiable.", "Model checking: truth table (eksponensial), DPLL; propositional logic kurang ekspresif.", "Rumus: truth table 2^n baris; evaluasi bertahap dari simbol ke kalimat."]}, "7": {"title": "Bab 7 · First Order Logic", "tf": [["Pernyataan 'semua mahasiswa rajin' ditulis ∀x (Mahasiswa(x) → Rajin(x)).", true, "Benar, ∀ berpasangan dengan implikasi."], ["Pasangan wajar untuk ∃ adalah implikasi: ∃x (P(x) → Q(x)).", false, "Salah. ∃ biasanya berpasangan dengan konjungsi (∧)."], ["FOL lebih ekspresif daripada propositional logic karena punya objek, relasi, dan quantifier.", true, "Benar."], ["Propositional logic hanya berurusan dengan 'fakta' dan tidak punya variabel untuk buku atau meja.", true, "Benar."], ["Dalam FOL, variabel merujuk ke hal di dunia dan dapat dikuantifikasi.", true, "Benar."], ["Term meliputi constant, variable, dan function symbol.", true, "Benar."], ["Mother-of(John) adalah predicate.", false, "Itu function symbol (term)."], ["Predicate symbol diterapkan pada nol atau lebih term membentuk kalimat atomik.", true, "Benar."], ["∀x mahasiswa(x,IPB) ∧ Genius(x) berarti semua mahasiswa IPB adalah Genius.", false, "Artinya semua objek adalah mahasiswa IPB dan Genius; yang benar memakai ⇒."], ["∃x mahasiswa(x,IPB) ⇒ pintar(x) bisa benar hanya karena ada objek yang bukan mahasiswa IPB (anteseden salah), walau tak ada mahasiswa pintar.", true, "Benar. Itulah jebakan ∃ dengan ⇒. Pakai ∧ supaya benar-benar berarti 'ada mahasiswa yang pintar'."], ["∀x∀y S sama dengan ∀y∀x S.", true, "Benar."], ["∃x∀y S sama dengan ∀y∃x S.", false, "Urutan quantifier campuran mengubah makna."], ["∃x∀y Mencintai(x,y) berarti semua orang mencintai setidaknya satu orang.", false, "Itu ∀y∃x; yang ini: ada seseorang yang mencintai semua orang."], ["Sepupu: ∀x,y Sepupu(x,y) ⇔ ∃ox,oy Orangtua(ox,x) ∧ Saudara(ox,oy) ∧ Orangtua(oy,y).", true, "Benar."], ["Contoh constant symbol: Fred, Japan, Bacterium39.", true, "Benar."], ["Contoh variabel: x, y, a.", true, "Benar."], ["∀ biasanya dipasangkan dengan connective ⇒.", true, "Benar."], ["FOL punya objects dan relations.", true, "Benar."], ["Pada model {Budi,Ani,Cici} (Mahasiswa: Budi, Ani; Genius: semua), ∀x Mahasiswa(x) ⇒ Genius(x) benar.", true, "Semua mahasiswa memang Genius."], ["Pada model {Budi,Ani,Cici} (Mahasiswa: Budi, Ani; Genius: semua), ∀x Mahasiswa(x) ∧ Genius(x) salah.", true, "Cici bukan mahasiswa."], ["Pada model {Budi,Ani,Cici} (Mahasiswa: Budi, Ani; Genius: semua), ∃x Mahasiswa(x) ∧ ¬Genius(x) benar.", false, "Tidak ada mahasiswa yang tidak Genius."], ["Pada model {Budi,Ani,Cici} (Mahasiswa: Budi, Ani; Genius: semua), ∃x Mahasiswa(x) ⇒ ¬Genius(x) benar.", true, "Cici: anteseden salah, implikasi benar."]], "isian": [["Quantifier yang berarti 'untuk semua' disebut quantifier ...", "Universal"], ["Quantifier yang berarti 'terdapat' disebut quantifier ...", "Existential (Eksistensial)"], ["Simbol yang menyatakan sifat atau relasi antar objek, mis. Saudara(x,y), disebut ...", "Predikat (Predicate)"], ["Simbol ∀ dibaca ...", "For all (Untuk semua)"], ["Simbol ∃ dibaca ...", "There exists (Terdapat)"], ["Connective yang biasanya dipakai dengan ∀ adalah ...", "Implikasi (Implies)"], ["Connective yang biasanya dipakai dengan ∃ adalah ...", "Konjungsi (And)"], ["Aturan ¬(¬α) ≡ α disebut ...", "Double-negation elimination (Eliminasi negasi ganda)"], ["Aturan (α ⇒ β) ≡ (¬β ⇒ ¬α) disebut ...", "Contraposition (Kontraposisi)"], ["Berapa pasangan (x,y) yang harus dicek untuk ∀x∀y Saudara(x,y) pada model dengan 3 objek? ...", "9"], ["Banyak objek x yang membuat Mahasiswa(x) ∧ Genius(x) benar pada model {Budi,Ani,Cici} (Mahasiswa: Budi, Ani; Genius: semua) = ...", "2"]], "match": [{"group": "Elemen FOL", "options": ["Konstanta", "Variabel", "Fungsi", "Predikat"], "items": [["Nama objek tertentu, mis. Budi.", "Konstanta"], ["Placeholder yang dapat dikuantifikasi, mis. x.", "Variabel"], ["Memetakan objek ke objek lain, mis. Ayah(Budi).", "Fungsi"], ["Bernilai benar/salah atas objek, mis. Mahasiswa(Budi).", "Predikat"]]}, {"group": "Cocokkan rumus FOL dengan artinya. Petunjuk: 'small' = ¬Big, dan ∃x (P ⇒ Q) ≡ ∃x (¬P ∨ Q).", "options": ["All cats are big", "There is a small thing or a cat", "All big things are cats", "Everything is a big cat", "All cats are small", "There is a big cat", "All small things are cat", "There is a big thing or a cat"], "items": [["∃x.Big(x) ∧ Cat(x)", "There is a big cat"], ["∃x.Big(x) ⇒ Cat(x)", "There is a small thing or a cat"], ["∃x.Big(x) ∨ Cat(x)", "There is a big thing or a cat"], ["∀x.Big(x) ∧ Cat(x)", "Everything is a big cat"], ["∀x.Big(x) ⇒ Cat(x)", "All big things are cats"]]}], "mcq": [{"q": "'Ada mahasiswa yang lulus cum laude' direpresentasikan sebagai ...", "o": ["∃x (Mahasiswa(x) ∧ CumLaude(x))", "∃x (Mahasiswa(x) → CumLaude(x))", "∀x (Mahasiswa(x) ∧ CumLaude(x))", "∀x (CumLaude(x) → Mahasiswa(x))"], "a": 0, "e": "Kata 'ada' pakai ∃ dengan ∧. Pakai → akan benar hanya karena ada objek yang bukan mahasiswa."}, {"q": "¬∀x P(x) setara dengan ...", "o": ["∃x ¬P(x)", "∀x ¬P(x)", "∃x P(x)", "¬∃x P(x)"], "a": 0, "e": "Negasi 'semua' = 'ada yang tidak'. ¬∀x P(x) ≡ ∃x ¬P(x)."}, {"q": "Fungsi seperti Ibu(x) berbeda dari predikat karena ...", "o": ["Mengembalikan objek, bukan nilai benar/salah", "Selalu bernilai benar", "Tidak punya argumen", "Hanya untuk konstanta"], "a": 0, "e": "Fungsi memetakan objek ke objek (Ibu(Budi) = seseorang). Predikat menghasilkan benar/salah."}], "es": [{"q": "Terjemahkan 'Semua mahasiswa IPB cerdas' dan 'Ada mahasiswa yang lulus cum laude' ke FOL, lalu jelaskan kesalahan umum pada ∀ dan ∃.", "m": "∀x (Mahasiswa(x) → Cerdas(x)). ∃x (Mahasiswa(x) ∧ CumLaude(x)). Kesalahan umum: ∀ dengan ∧ berarti semua objek adalah mahasiswa; ∃ dengan → menjadi benar trivial bila ada objek yang bukan mahasiswa.", "p": [["Terjemahan ∀ dengan implikasi", "∀|semua|untuk semua|forall"], ["Terjemahan ∃ dengan konjungsi", "∃|ada|terdapat|exists"], ["∀ dipasangkan →, ∃ dipasangkan ∧", "implikasi|→|konjungsi|∧"]]}, {"q": "Jelaskan syntax FOL: term, kalimat atomik, dan kalimat kompleks.", "m": "Term: constant, variable, function symbol. Kalimat atomik: predicate(term1..termn) atau term1 = term2. Kalimat kompleks: kalimat atomik digabung connective ¬, ∧, ∨, ⇒, ⇔, atau dikuantifikasi dengan ∀/∃.", "p": [["Term: constant, variable, function", "constant|variable|function"], ["Kalimat atomik", "predicate|atomik"], ["Kalimat kompleks, connective", "connective|kompleks"]]}, {"q": "Jelaskan kesalahan umum ∀ dengan ∧ dan ∃ dengan ⇒, serta urutan quantifier.", "m": "∀x mahasiswa(x) ∧ Genius(x) berarti semua objek mahasiswa dan genius. ∃x mahasiswa(x) ⇒ pintar(x) benar bila ada objek bukan mahasiswa. ∃x∀y Mencintai(x,y) berbeda dari ∀y∃x Mencintai(y,x).", "p": [["∀ dengan ∧ salah", "∀|semua"], ["∃ dengan ⇒ salah", "∃|ada"], ["Urutan quantifier berpengaruh", "urutan|mencintai"]]}], "sum": ["FOL punya objects dan relations; variabel dapat dikuantifikasi.", "Term: constant, variable, function; kalimat atomik: predicate(term…) atau term1 = term2.", "Kalimat kompleks: ¬, ∧, ∨, ⇒, ⇔; ∀ dan ∃ membentuk kalimat.", "∀ dengan ⇒; ∃ dengan ∧ (salah: ∀ dengan ∧, ∃ dengan ⇒).", "∀x∀y sama dengan ∀y∀x; ∃x∀y tidak sama dengan ∀y∃x.", "Ingat ekuivalensi: kontraposisi, eliminasi implikasi, De Morgan, distributivitas."]}};

    /* ═══════════════════════════════════════════
       STATE
       ═══════════════════════════════════════════ */
const GUIDE = {"1": [["Empat pendekatan AI: peta 2×2", "Bayangkan tabel: baris = Thinking vs Acting, kolom = Human vs Rational.\n**Humanly** = meniru manusia (termasuk salahnya). **Rationally** = melakukan yang ideal/benar menurut tujuan.\n**Thinking humanly**: modelkan cara otak bekerja (psikologi, brain imaging). **Thinking rationally**: logika Aristoteles. **Acting humanly**: Turing Test. **Acting rationally**: rational agent.", "Chatbot yang terasa seperti manusia = acting humanly. GPS yang mencari rute terbaik = acting rationally. Buku Russell & Norvig memilih acting rationally."], ["Turing Test dan 4 komponen", "Interrogator ngobrol lewat teks dengan seorang manusia dan sebuah mesin tanpa melihat mereka. Kalau tak bisa membedakan, mesin dianggap cerdas.\nTuring mengganti pertanyaan kabur 'bisakah mesin berpikir?' jadi pertanyaan yang bisa diukur: 'bisakah mesin berperilaku cerdas?'\nAgar lulus, mesin butuh: **knowledge, reasoning, language understanding, learning**.", ""], ["Kenapa 'laws of thought' tidak cukup?", "Tiga masalah: (1) tidak semua perilaku cerdas lewat penalaran logis, misal refleks menarik tangan dari api; (2) mengabaikan masalah persepsi; (3) inferensi logis sering intractable, artinya terlalu mahal dihitung.", "Soal klasik: 'Socrates manusia, manusia fana, maka Socrates fana' itu logika murni."], ["Rational agent: rasional bukan berarti sempurna", "Agen rasional memaksimalkan hasil yang **diharapkan** berdasarkan informasi yang dia punya. Tidak harus selalu menang. Berkedip karena debu juga rasional walau tanpa berpikir.\nSejarah singkat: sebelum 1995 dominan logical representations (catur, Sudoku), sejak 2000 dominan statistical models. Deep Blue menang atas Kasparov 1997, AlphaGo atas Ke Jie 2017.", ""], ["Etika AI", "**Bias**: Amazon 2018, algoritma rekrutmen menurunkan resume yang memuat kata 'women'. **Privasi**: Lensa AI memakai foto tanpa consent. **Lingkungan**: energi besar untuk melatih model. Stakeholder: akademisi, pemerintah, antarpemerintah (UNESCO 2021), nirlaba, perusahaan.", ""]], "2": [["Agent = sensor + actuator", "Agent mempersepsi lingkungan lewat **sensor** dan bertindak lewat **actuator**. Pada taksi otonom: kamera/GPS = sensor, kemudi/rem/gas = actuator (jangan tertukar).\n**Agent function** f: P* → A adalah pemetaan abstrak dari riwayat persepsi ke aksi. **Agent program** adalah kode konkret yang berjalan di mesin untuk mewujudkan fungsi itu.", ""], ["Rasional itu bergantung 4 hal", "Performance measure, pengetahuan awal tentang lingkungan, aksi yang tersedia, dan percept sequence sampai sekarang. Karena ukuran kinerja yang menentukan, agen yang sama bisa rasional di satu aturan skor tapi irasional di aturan lain.", "Vacuum tanpa penalti gerak: boleh bolak-balik. Dengan penalti 1 poin per gerakan: terus bergerak saat semua bersih = irasional."], ["PEAS: cara mendeskripsikan masalah agen", "**P**erformance (aman, cepat, legal, hemat), **E**nvironment (jalan, lalu lintas, pejalan kaki), **A**ctuators (kemudi, gas, rem, klakson), **S**ensors (kamera, GPS, speedometer). Selalu isi keempatnya untuk soal 'tentukan PEAS'.", ""], ["Jenis-jenis environment", "**Observable** (full/partial): sensor lihat state penuh atau tidak. **Deterministic/stochastic**: hasil aksi pasti atau acak. **Episodic/sequential**: tiap episode lepas atau saling memengaruhi. **Static/dynamic**: dunia diam atau berubah saat agen berpikir (semidynamic: dunia diam tapi skor menurun). **Discrete/continuous**. **Single/multi-agent**.", "Catur: fully observable, deterministic, multi-agent. Taksi: partially observable, stochastic, dynamic."], ["Lima tipe agen, makin canggih", "**Simple reflex**: aturan if-condition-then-action dari persepsi sekarang saja. **Model-based**: menyimpan state internal untuk bagian dunia yang tak terlihat. **Goal-based**: memilih aksi demi tujuan. **Utility-based**: memilih yang paling 'memuaskan' (expected utility), berguna saat ada trade-off. **Learning agent**: memperbaiki diri dari pengalaman (critic + learning element).", ""]], "3": [["Reflex vs planning agent", "Reflex agent hanya bereaksi pada dunia sekarang. Planning agent bertanya 'what if' dengan mensimulasikan rangkaian aksi **di kepala (simulation)** sebelum bertindak. Perlu model transisi dunia dan goal test.", ""], ["Search problem dan bedanya graph vs tree", "Komponen: state space, successor function (aksi + biaya), start state, goal test. Solusi = plan, yaitu rangkaian aksi dari start ke goal.\n**State space graph**: tiap state muncul sekali. **Search tree**: tiap node mewakili satu path utuh dari start, jadi satu state bisa muncul berkali-kali.", ""], ["BFS dan DFS", "**BFS**: perluas node terdangkal dulu, fringe = queue (FIFO). Waktu dan ruang O(b^s). Optimal bila semua biaya sama. **DFS**: perluas node terdalam dulu, fringe = stack (LIFO). Waktu O(b^m), ruang hanya O(bm). Tidak optimal (hasilnya solusi 'paling kiri'), dan bisa tersangkut loop.", "Graf S–A 2, S–B 5, A–G 6, B–G 2: DFS pilih A dulu → S–A–G biaya 8. Padahal S–B–G biaya 7."], ["Uniform-cost search (UCS)", "Seperti BFS tapi pakai **priority queue** berdasar biaya kumulatif g(n): node termurah keluar dulu. Complete dan optimal bila biaya tiap busur positif. Kelemahan: meluas ke segala arah karena tidak tahu di mana goal berada. Kalau semua biaya sama, UCS = BFS.", ""], ["Iterative deepening (IDS)", "Jalankan DFS dengan batas kedalaman 1, lalu 2, lalu 3, dan seterusnya. Memori kecil seperti DFS, lengkap seperti BFS. Pengulangan tidak terlalu boros karena level terdalam punya node paling banyak.", "Jumlah node pohon penuh = 1 + b + … + b^m. b=3, m=2 → 1+3+9 = 13."]], "4": [["Heuristik = tebakan terarah", "Fungsi h(n) yang mengestimasi seberapa dekat state n ke goal, dirancang khusus per masalah. Contoh pathing: jarak Manhattan atau Euclidean ke goal.", ""], ["Tiga cara mengurutkan fringe", "**UCS**: g(n), biaya dari start (backward cost). **Greedy**: h(n), estimasi ke goal (forward cost), cepat tapi bisa salah arah dan tidak optimal. **A\\***: f(n) = g(n) + h(n), gabungan keduanya.", "Fringe A(g=1,h=5) dan B(g=5,h=2): greedy pilih B (h=2). A* pilih A (f=6 vs B f=7)."], ["Kapan A* berhenti?", "Hanya saat goal **di-dequeue**, bukan saat di-enqueue. Alasannya, goal yang baru masuk fringe belum tentu lewat jalur termurah; mungkin ada node lain di fringe yang menuju goal dengan biaya lebih murah.", ""], ["Admissible: heuristik yang optimis", "0 ≤ h(n) ≤ h*(n), dengan h* = biaya sebenarnya ke goal. Artinya tidak pernah melebih-lebihkan. Kalau overestimate (inadmissible), jalur bagus bisa tertahan di fringe dan A* kehilangan optimalitas. h(n)=0 untuk semua n itu admissible (A* jadi UCS).\nMerancang heuristik: longgarkan aturan masalah (**relaxed problem**). Contoh 8-puzzle: jumlah ubin salah tempat.", ""]], "5": [["CSP: soal teka-teki, bukan soal jalan", "Pada search biasa yang penting **path** (urutan aksi). Pada CSP yang penting **assignment akhir**; jalur mencapainya tidak penting (identification problem). Tiga bahan: **variabel** Xi, **domain** D (nilai yang boleh), **constraint** (kombinasi nilai yang diizinkan).", "Map coloring: variabel = wilayah, domain = {merah, hijau, biru}, constraint = wilayah bertetangga beda warna. Sudoku: variabel = kotak kosong, domain 1–9, constraint = alldiff baris/kolom/region."], ["Jenis constraint", "**Unary**: satu variabel (SA ≠ hijau), sama dengan mengecilkan domain. **Binary**: dua variabel (SA ≠ WA). **Higher-order**: tiga atau lebih (kolom cryptarithmetic). **Soft/preference**: boleh dilanggar dengan biaya. Constraint graph: node = variabel, garis = constraint biner. Tasmania tak punya garis, jadi subproblem independen.", ""], ["Backtracking search", "DFS + dua ide: (1) satu variabel per langkah, urutan tidak penting karena assignment komutatif; (2) cek constraint **sambil jalan**, kalau melanggar langsung mundur (fail-on-violation). Jumlah complete assignment tanpa constraint = d^n (3 warna, 7 wilayah → 2187).", ""], ["Filtering: mendeteksi gagal lebih awal", "**Forward checking**: tiap kali variabel di-assign, coret nilai tetangga yang belum di-assign yang jadi tidak mungkin. **Arc consistency**: arc X→Y konsisten bila setiap x di tail punya minimal satu y di head yang cocok; kalau tidak, hapus x dari **tail**. Kalau X kehilangan nilai, tetangga X harus dicek ulang. Lebih kuat dari forward checking (NT dan SA tak bisa sama-sama biru), tapi lebih mahal dan tetap tidak menjamin ada solusi.", ""], ["Ordering: pilih urutan yang cerdas", "**MRV** (variabel): pilih yang sisa nilainya paling sedikit, supaya gagal cepat (fail-fast). **LCV** (nilai): untuk variabel terpilih, coba nilai yang paling sedikit menutup pilihan variabel lain. Gabungan MRV + LCV + filtering membuat 1000-queens layak dikerjakan.", ""]], "6": [["Knowledge-based agent: Tell dan Ask", "KB = kumpulan kalimat dalam bahasa formal. Pendekatan **deklaratif**: kita **Tell** agen apa yang dia perlu tahu, lalu agen **Ask** sendiri harus berbuat apa; jawabannya harus mengikuti (follow) dari KB. Mesin inferensi bersifat umum, isi KB khusus domain.", ""], ["Wumpus world", "Gua grid 4×4: ada wumpus (bau busuk di kotak sebelahnya), pit (angin/breeze di kotak sebelahnya), dan emas (glitter di kotak yang sama). Skor: emas +1000, mati −1000, −1 per langkah, −10 pakai panah. Sifatnya: partially observable (hanya persepsi lokal), deterministic, sequential, static, discrete, single-agent.", ""], ["Model dan entailment", "**Model** = satu 'dunia' yang memberi nilai benar/salah pada semua simbol. **KB ⊨ α** artinya α benar di **semua** model tempat KB benar, yaitu M(KB) ⊆ M(α).", "Kalau KB: 'Giants menang' dan 'Reds menang', maka 'Giants atau Reds menang' ter-entail karena benar di setiap dunia tempat KB benar."], ["Syntax, semantics, truth table", "**Syntax**: simbol P, Q + connective ¬ ∧ ∨ ⇒ ⇔. **Semantics**: aturan nilai kebenaran. P ⇒ Q salah **hanya** bila P benar dan Q salah (janji yang tidak ditepati). P ⇔ Q benar bila kedua sisi sama. n simbol → **2^n** baris truth table.", "P1,2=F, P2,2=T, P3,1=F: ¬P1,2 ∧ (P2,2 ∨ P3,1) = T ∧ (T ∨ F) = T."], ["Ekuivalensi dan aturan inferensi", "Penting dihafal: implikasi **P⇒Q ≡ ¬P ∨ Q**, kontraposisi ≡ ¬Q ⇒ ¬P, De Morgan: ¬(P∧Q) ≡ ¬P∨¬Q dan ¬(P∨Q) ≡ ¬P∧¬Q.\n**Modus ponens**: dari P dan P⇒Q, simpulkan Q. Unit resolution: dari α∨β dan ¬β, simpulkan α.", ""], ["Sound, complete, valid, satisfiable", "**Sound**: hanya menurunkan yang memang ter-entail (tidak berbohong). **Complete**: bisa menurunkan semua yang ter-entail (tidak ada yang terlewat).\n**Valid** = benar di semua model (A ∨ ¬A). **Satisfiable** = benar di minimal satu model. **Unsatisfiable** = tidak benar di model mana pun (A ∧ ¬A).\nTeorema: KB ⊨ α ⟺ (KB ⇒ α) valid ⟺ (KB ∧ ¬α) unsatisfiable. Metode: truth table (eksponensial), DPLL. Kelemahan propositional logic: klausa membludak untuk tiap kotak dan waktu, sehingga lahir FOL.", ""]], "7": [["Kenapa butuh FOL?", "Propositional logic hanya punya 'fakta' (hujan = benar/salah); tidak bisa bicara tentang 'semua buku' atau 'ada meja'. FOL punya **objek, relasi, dan quantifier**, jadi satu kalimat bisa mewakili ribuan kalimat propositional.", ""], ["Bahan kalimat FOL", "**Term** (menunjuk objek): constant (Budi), variable (x), function (Ibu(Budi), hasilnya objek). **Predicate**: sifat/relasi, hasilnya benar/salah (Mahasiswa(Budi), Saudara(a,b)). Kalimat atomik = predicate(term...) atau term1 = term2. Lalu digabung dengan ¬ ∧ ∨ ⇒ ⇔ dan ∀ ∃.", "Beda fungsi vs predikat: Ibu(x) mengembalikan orang, sedangkan Mahasiswa(x) mengembalikan benar/salah."], ["∀ (untuk semua) pasangannya ⇒", "∀x (Mahasiswa(x) ⇒ Genius(x)) = 'siapa pun yang mahasiswa, dia genius'. Kalau salah pakai ∧: ∀x (Mahasiswa(x) ∧ Genius(x)) berarti **semua objek di dunia** mahasiswa dan genius, termasuk kursi dan Anda yang bukan mahasiswa.", ""], ["∃ (terdapat) pasangannya ∧", "∃x (Mahasiswa(x) ∧ Pintar(x)) = 'ada mahasiswa yang pintar'. Kalau salah pakai ⇒: ∃x (Mahasiswa(x) ⇒ Pintar(x)) jadi benar hanya dengan menemukan satu objek yang bukan mahasiswa (anteseden salah → implikasi benar). Itu kalimat yang hampir selalu benar tanpa makna.", ""], ["Urutan quantifier", "∀x∀y sama dengan ∀y∀x, dan ∃x∃y sama dengan ∃y∃x. Tapi **∃x∀y ≠ ∀y∃x**.\n∃x∀y Mencintai(x,y) = ada satu orang yang mencintai semua orang. ∀y∃x Mencintai(y,x) = setiap orang mencintai minimal satu orang (orangnya boleh beda-beda).", ""], ["Membaca rumus quiz dan negasi", "Ubah dulu ke ekuivalen: ∃x Big(x) ⇒ Cat(x) ≡ ∃x (¬Big(x) ∨ Cat(x)) = 'ada benda kecil atau kucing'. ∀x Big(x) ⇒ Cat(x) = semua benda besar adalah kucing.\nNegasi quantifier: ¬∀x P(x) ≡ ∃x ¬P(x) dan ¬∃x P(x) ≡ ∀x ¬P(x). Praktik: Ayah ⇒ Orangtua; Saudara simetris (⇔); Ibu = Orangtua ∧ Perempuan; Sepupu = anak dari saudara orangtua.", ""]]};
    const KEY = "aiquiz-v1"; let S = {};
    try { S = JSON.parse(localStorage.getItem(KEY) || "{}") } catch (e) { S = {} }
    const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)) } catch (e) { } };
    const $ = id => document.getElementById(id);
    const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

    const norm = s => String(s).toLowerCase().replace(/[^a-z0-9]/g, "");
    // Dictionary untuk alias dua bahasa (Inggris/Indonesia) pada soal Isian
    const SYNONYMS = {
      "business process": "proses bisnis",
      "proses bisnis": "business process",
      "complementary assets": "aset komplementer",
      "aset komplementer": "complementary assets",
      "information": "informasi",
      "informasi": "information",
      "organizations": "organisasi",
      "organisasi": "organizations",
      "management": "manajemen",
      "manajemen": "management",
      "technology": "teknologi",
      "teknologi": "technology",
      "survival": "bertahan hidup",
      "bertahan hidup": "survival",
      "responsibility": "tanggung jawab",
      "tanggung jawab": "responsibility",
      "accountability": "akuntabilitas",
      "akuntabilitas": "accountability",
      "liability": "kewajiban",
      "kewajiban": "liability",
      "ethics": "etika",
      "etika": "ethics",
      "data": "data","constraint":"kendala","kendala":"constraint","pruning":"pemangkasan","pemangkasan":"pruning","universal":"universal","predicate":"predikat","predikat":"predicate","agent":"agen","agen":"agent",
      "input": "input",
      "processing": "pemrosesan",
      "pemrosesan": "processing",
      "output": "keluaran",
      "keluaran": "output",
      "feedback": "umpan balik",
      "umpan balik": "feedback",
      "sociotechnical": "sosioloteknis",
      "sosioloteknis": "sociotechnical",
      "economics": "ekonomi",
      "ekonomi": "economics"
    };

    function accepts(a) {
      const n = norm(a);
      const o = new Set([n]);
      const m = a.match(/^(.*?)\s*\((.*?)\)\s*$/);
      if (m) { o.add(norm(m[1])); o.add(norm(m[2])); }
      // Tambahkan dukungan terjemahan sinonim
      for (let term of Array.from(o)) {
        for (const [k, v] of Object.entries(SYNONYMS)) {
          if (term === norm(k)) o.add(norm(v));
        }
      }
      return o;
    }
    let run = null;

    /* ── Theme ──────────────────────────────── */
    function initTheme() { const t = localStorage.getItem("cbt_theme") || "light"; document.documentElement.setAttribute("data-theme", t); updThemeUI(t); }
    function toggleTheme() { const c = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark"; document.documentElement.setAttribute("data-theme", c); localStorage.setItem("cbt_theme", c); updThemeUI(c); }
    function updThemeUI(t) { $("themeIc").innerHTML = t === "dark" ? IC.sun : IC.moon; $("themeLbl").textContent = t === "dark" ? "Terang" : "Gelap"; }

    /* ── Dock ───────────────────────────────── */
    function dock(h) { $("dock").hidden = !h; $("dockin").innerHTML = h || ""; }
    const total = c => c.match.reduce((a, g) => a + g.items.length, 0) + c.isian.length + c.mcq.length + c.tf.length + c.es.length;

    /* ═══════════════════════════════════════════
       HOME
       ═══════════════════════════════════════════ */
    function home() {
      run = null; dock(""); closeModal(); stopTimer();
      let done = 0, tG = 0, tT = 0;
      Object.keys(DATA).forEach(n => { if (S[n]) { done++; tG += S[n].got; tT += S[n].total; } });
      const pct = tT ? Math.round(tG / tT * 100) : 0;

      $("app").innerHTML = `
  <div class="hero">
    <div class="hero-badge">${ic("book", 12)} Simulasi UTS · Closebook</div>
    <h2>Latihan Mandiri Kecerdasan Buatan</h2>
    <p class="sub">Latihan per bab, atau coba simulasi UTS campuran.</p>
    <div class="stats">
      <div class="st"><div class="v">${done}/7</div><div class="l">Bab Selesai</div></div>
      <div class="st"><div class="v">${pct}%</div><div class="l">Rata-rata Akurasi</div></div>
      <div class="st"><div class="v">${tG}/${tT || 0}</div><div class="l">Soal Benar</div></div>
    </div>
  </div>
  <div class="uts-cta"><div><div class="uts-t">Simulasi UTS</div><div class="uts-d">60 menit · soal campuran dari semua bab · timer jalan</div></div><button class="btn-go" onclick="startUTS()">Mulai ${ic("arrow", 14)}</button></div>
  <div class="sec-title" style="margin:22px 0 10px">Alat bantu belajar</div>
  <div class="tools3">
    <button class="tc" onclick="cheat()"><span class="tc-ic">${ic("list", 22)}</span><b>Cheat sheet rumus</b><small>Rumus, ekuivalensi, truth table</small></button>
    <button class="tc" onclick="viz()"><span class="tc-ic">${ic("grid", 22)}</span><b>Visualisasi interaktif</b><small>Simulasi search dan ∀ vs ∃</small></button>
    <button class="tc" onclick="wbCards()"><span class="tc-ic">${ic("refresh", 22)}</span><b>Flashcard soal salah</b><small>${(S.wb || []).length} kartu untuk diulang</small></button>
  </div>
  <div style="height:14px"></div>
  <div class="sec-hdr">
    <div class="sec-title">Pilih bab untuk dilatih</div>
    ${done ? `<button class="rst" onclick="resetAll()">Reset Riwayat</button>` : ""}
  </div>
  <div class="babs">${Object.keys(DATA).map(n => {
        const c = DATA[n], t = total(c), r = S[n], p = r ? Math.round(r.got / r.total * 100) : 0;
        return `<div class="bab">
      <div><span class="bab-pill">Bab ${n}</span>
        <h3>${esc(c.title.replace(/^Bab \d+ · /, ""))}</h3>
        <div class="bab-meta">${t} soal · latihan campuran 5 tipe</div><div class="pbar"><i style="width:${p}%"></i></div>
      </div>
      <div class="bab-foot">
        <span class="score-lbl ${r ? "done" : ""}">${r ? `${ic("check", 14)} Selesai · ${r.got}/${r.total} (${p}%)` : `Belum dikerjakan · ${t} Soal`}</span>
        <button class="btn-go" onclick="pick('${n}')">${r ? "Ulangi" : "Mulai"} ${ic("arrow", 14)}</button>
      </div>
    </div>`;
      }).join("")}</div>
  <div class="foot-tools">  <div class="prefs"><label class="sw"><input type="checkbox" ${S.mix ? "checked" : ""} onchange="toggleMix()"><span class="sw-tr"></span><span>Acak urutan soal saat latihan bab</span></label><span class="prefs-r"><button onclick="exportS()">Backup progres</button><button onclick="importS()">Pulihkan</button></span></div>
  </div>`;
    }
    function resetAll() { if (confirm("Hapus seluruh riwayat?")) { S = {}; save(); home(); } }

    /* ═══════════════════════════════════════════
       START / STEP
       ═══════════════════════════════════════════ */
    function start(n) {
      const c = DATA[n], steps = [], states = [];
      c.match.forEach(g => {
        steps.push({ t: "m", g });
        states.push({ checked: false, as: Array(g.items.length).fill("") });
      });
      c.tf.forEach(x => { steps.push({ t: "b", q: x[0], a: x[1], w: x[2] }); states.push({ checked: false, pick: null }); });
      c.isian.forEach(x => {
        steps.push({ t: "i", q: x[0], a: x[1] });
        states.push({ checked: false, val: "" });
      });
      c.mcq.forEach(x => {
        // Shuffle options
        let shuf = x.o.map((_, i) => i);
        for (let i = shuf.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuf[i], shuf[j]] = [shuf[j], shuf[i]];
        }
        steps.push({ t: "q", x, shuf });
        states.push({ checked: false, pick: null });
      });

      c.es.forEach(x => { steps.push({ t: "e", q: x.q, m: x.m, p: x.p }); states.push({ checked: false, val: "", hit: [] }); });
      if (S.mix) { const o = steps.map((_, i) => i); for (let i = o.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [o[i], o[j]] = [o[j], o[i]]; } const a = o.map(i => steps[i]), b = o.map(i => states[i]); steps.splice(0, steps.length, ...a); states.splice(0, states.length, ...b); }
    run = { n, steps, states, idx: 0, ans: Array(steps.length).fill(false), sc: { m: 0, mt: 0, i: 0, it: 0, q: 0, qt: 0, b: 0, bt: 0, e: 0, et: 0 }, wrong: [] };
      step(); window.scrollTo(0, 0);
    }
    function examNav() {
      const p = Math.round((run.idx + 1) / run.steps.length * 100);
      return `<div class="exam-bar">
    <div class="exam-top">
      <button class="btn-exit" onclick="exitExam()">${ic("arrowL", 13)} Keluar</button>
      <div class="exam-label">${esc(DATA[run.n].title)}</div>
      <button class="btn-sheet" onclick="openSheet()">${ic("grid", 13)} Soal</button>
    </div>
    <div class="prog-bar"><div class="prog-fill" style="width:${p}%"></div></div>
    <div class="seg">${segLbl()}</div>
  </div>`;
    }
    function exitExam() {
      $("modal").innerHTML = `<div class="modal-bg" onclick="closeModal()">
    <div class="modal-box" style="max-width: 340px; text-align: center; padding: 32px 24px" onclick="event.stopPropagation()">
      <div style="color: var(--err); margin-bottom: 16px; display:flex; justify-content:center">${ic("info", 46)}</div>
      <h3 style="font-size: 1.2rem; font-weight: 800; color: var(--ink); margin-bottom: 8px">Yakin Ingin Keluar?</h3>
      <p style="font-size: .88rem; color: var(--ink3); margin-bottom: 24px; line-height: 1.5">Semua progres dan jawaban pada sesi latihan bab ini <b>tidak akan disimpan</b>.</p>
      <div style="display: flex; gap: 10px">
        <button class="btn-s" style="flex: 1; justify-content: center" onclick="closeModal()">Batal</button>
        <button class="btn-p" style="flex: 1; justify-content: center; background: var(--err); box-shadow: none" onmouseover="this.style.filter='brightness(0.9)'" onmouseout="this.style.filter='brightness(1)'" onclick="home()">Ya, Keluar</button>
      </div>
    </div>
  </div>`;
    }
    function step() {
      if (run.idx >= run.steps.length) return result();
      const s = run.steps[run.idx];
      run.cur = run.states[run.idx]; // Mempertahankan state dari soal sebelumnya
      if (s.t === "m") drawM(); else if (s.t === "i") drawI(); else if (s.t === "b") drawB(); else if (s.t === "e") drawE(); else drawQ();
      window.scrollTo(0, 0);
    }
    function next() { run.idx++; step(); }

    /* ═══════════════════════════════════════════
       MATCHING  (dropdown-based)
       ═══════════════════════════════════════════ */
    function drawM() {
      const s = run.steps[run.idx], c = run.cur, g = s.g;
      $("app").innerHTML = examNav() + `<div class="qbox">
    <div class="qbox-hdr">
      <span class="pill match">${ic("link", 13)} Menjodohkan</span>
      <span class="qnum">${run.idx + 1} / ${run.steps.length}</span>
    </div>
    <p class="qtxt">${esc(g.group)}</p>
    <p class="qhint">${ic("info", 13)} Untuk setiap pernyataan, pilih istilah yang paling tepat dari menu dropdown.</p>
    <div class="match-rows">
      ${g.items.map((it, i) => {
        const v = c.as[i]; let cls = "";
        if (c.checked) cls = v === it[1] ? "right" : "wrong";
        return `<div class="match-row ${cls}">
          <div class="match-num">Pernyataan ${i + 1}</div>
          <div class="match-stmt">${esc(it[0])}</div>
          <select class="match-sel" data-i="${i}" ${c.checked ? "disabled" : ""} onchange="pickMatch(this)">
            <option value="">— Pilih jawaban —</option>
            ${g.options.map(o => `<option value="${esc(o)}" ${v === o ? "selected" : ""}>${esc(o)}</option>`).join("")}
          </select>
          ${c.checked && v !== it[1] ? `<div class="match-tip">Jawaban benar: <b>${esc(it[1])}</b></div>` : ""}
        </div>`;
      }).join("")}
    </div>
  </div>`;
      const allDone = c.as.every(v => v !== "");
      if (c.checked) {
        dock(`<button class="btn-s" onclick="openSheet()">${ic("grid", 13)} Soal</button>
      <button class="btn-p" id="nx">${run.idx === run.steps.length - 1 ? "Lihat Hasil" : "Lanjut"} ${ic("arrow", 15)}</button>`);
        $("nx").onclick = next;
      } else {
        dock(`<button class="btn-s" onclick="openSheet()">${ic("grid", 13)} Soal</button>
      <button class="btn-p" id="ck" ${allDone ? "" : "disabled"}>Periksa Jawaban</button>`);
        if ($("ck")) $("ck").onclick = () => {
          c.checked = true; run.ans[run.idx] = true;
          g.items.forEach((it, i) => { run.sc.mt++; if (c.as[i] === it[1]) run.sc.m++; else run.wrong.push({ q: it[0], a: it[1] }); });
          drawM();
        };
      }
    }
    function ovrI() { const s = run.steps[run.idx]; run.sc.i++; run.wrong = run.wrong.filter(w => w.q !== s.q); run.cur.val = s.a; drawI(); }
    document.addEventListener("keydown", e => {
      if (!run || e.ctrlKey || e.metaKey || e.altKey) return;
      const tg = e.target.tagName, typing = tg === "INPUT" || tg === "TEXTAREA" || tg === "SELECT", k = e.key.toLowerCase();
      if (e.key === "Enter" && !typing) { const b = $("nx") || $("ck"); if (b && !b.disabled) { e.preventDefault(); b.click(); } return; }
      if (typing || run.cur.checked) return;
      const st = run.steps[run.idx], opts = [...document.querySelectorAll(".opt")];
      let i = "abcd".indexOf(k); if (i < 0) i = "1234".indexOf(k);
      if (st.t === "b") i = k === "b" || k === "t" || k === "1" ? 0 : k === "s" || k === "f" || k === "2" ? 1 : -1;
      if ((st.t === "q" || st.t === "b") && opts[i]) opts[i].click();
    });

    /* ── v3: aid, peek, cheat sheet, mix, backup ── */
    ["drawM","drawI","drawB","drawQ","drawE"].forEach(n => { const o = window[n]; window[n] = function () { o(); aid(); }; });
    function aid() {
      if (!run || !run.cur.checked || !$("app").querySelector(".qbox")) return;
      const s = run.steps[run.idx]; let h = "";
      if (s.t === "q" && s.x.e) h += `<div class="model" style="margin-top:14px"><b>Kenapa begitu?</b><br>${esc(s.x.e)}</div>`;
      if (run.n !== "U" && GUIDE[run.n] && wrongNow(s)) h += `<button class="peek-l" onclick="peek()">${ic("book", 13)} Salah? Baca penjelasan konsepnya</button>`;
      $("app").querySelector(".qbox").insertAdjacentHTML("beforeend", h); const fb = document.querySelector(".fb"); if (fb) fb.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
    function peek() {
      const G = GUIDE[run.n] || [];
      $("modal").innerHTML = `<div class="modal-bg" onclick="closeModal()"><div class="modal-box" style="max-width:640px;max-height:82vh;overflow:auto" onclick="event.stopPropagation()"><div class="modal-hdr"><h3>Materi ${esc(DATA[run.n].title)}</h3><button class="modal-close" onclick="closeModal()">${ic("x", 11)} Tutup</button></div>${G.map((g, i) => `<details class="gd"><summary><span>${i + 1}. ${esc(g[0])}</span>${ic("chev", 13)}</summary><div class="gb">${gBody(g[1])}${g[2] ? `<div class="gx"><b>Contoh:</b> ${fmtG(g[2])}</div>` : ""}</div></details>`).join("")}</div></div>`;
    }
    function toggleMix() { S.mix = !S.mix; save(); home(); }
    function exportS() { const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([JSON.stringify(S)], { type: "application/json" })); a.download = "progres-ai.json"; a.click(); }
    function importS() { const i = document.createElement("input"); i.type = "file"; i.accept = ".json"; i.onchange = () => { const r = new FileReader(); r.onload = () => { try { S = JSON.parse(r.result); save(); home(); } catch (e) { alert("File tidak valid."); } }; r.readAsText(i.files[0]); }; i.click(); }
    function ttShow(op) {
      const f = { "∧": (p, q) => p && q, "∨": (p, q) => p || q, "⇒": (p, q) => !p || q, "⇔": (p, q) => p === q }[op], T = v => v ? "T" : "F";
      $("ttb").innerHTML = `<table><tr><th>P</th><th>Q</th><th>P ${op} Q</th></tr>${[[1, 1], [1, 0], [0, 1], [0, 0]].map(([p, q]) => `<tr><td>${T(p)}</td><td>${T(q)}</td><td><b>${T(f(!!p, !!q))}</b></td></tr>`).join("")}</table><p class="kbd" style="text-align:left">${op === "⇒" ? "Salah hanya di baris P=T, Q=F. Baris P=F selalu benar (janji kosong)." : op === "⇔" ? "Benar bila P dan Q sama." : op === "∧" ? "Benar hanya bila keduanya T." : "Salah hanya bila keduanya F."}</p>`;
      document.querySelectorAll(".tt button").forEach(b => b.classList.toggle("on", b.textContent === op));
    }
    function cheat() {
      run = null; dock(""); closeModal();
      const tb = (h, r) => `<table><tr>${h.map(x => `<th>${x}</th>`).join("")}</tr>${r.map(x => `<tr>${x.map(y => `<td>${y}</td>`).join("")}</tr>`).join("")}</table>`;
      $("app").innerHTML = `<div class="exam-bar"><div class="exam-top"><button class="btn-exit" onclick="home()">${ic("arrowL", 13)} Kembali</button><div class="exam-label">Cheat Sheet Rumus</div></div></div><div class="qbox cs">
      <h3>Search (b = branching, s/d = kedalaman solusi, m = kedalaman maks)</h3>${tb(["Algoritma", "Fringe", "Waktu", "Ruang", "Optimal?"], [["BFS", "Queue", "b^s", "b^s", "Ya jika biaya sama"], ["DFS", "Stack", "b^m", "bm", "Tidak"], ["UCS", "Priority g(n)", "–", "–", "Ya"], ["IDS", "DFS bertahap", "b^d", "bd", "Ya jika biaya sama"]])}
      <h3>Informed search</h3>${tb(["Algoritma", "Urut berdasar", "Catatan"], [["UCS", "g(n)", "backward cost"], ["Greedy", "h(n)", "forward cost, tak optimal"], ["A*", "g(n)+h(n)", "optimal bila h admissible: 0 ≤ h ≤ h*"]])}
      <h3>CSP</h3>${tb(["Hal", "Rumus / aturan"], [["Complete assignment", "d^n"], ["Arc consistency", "O(n²d³), hapus nilai dari tail"], ["Ordering", "MRV (variabel), LCV (nilai)"]])}
      <h3>Logika: ekuivalensi</h3>${tb(["Nama", "Bentuk"], [["Eliminasi implikasi", "P⇒Q ≡ ¬P∨Q"], ["Kontraposisi", "P⇒Q ≡ ¬Q⇒¬P"], ["De Morgan", "¬(P∧Q) ≡ ¬P∨¬Q ; ¬(P∨Q) ≡ ¬P∧¬Q"], ["Biconditional", "P⇔Q ≡ (P⇒Q)∧(Q⇒P)"], ["Negasi quantifier", "¬∀x P ≡ ∃x ¬P ; ¬∃x P ≡ ∀x ¬P"], ["KB ⊨ α", "(KB⇒α) valid ≡ (KB∧¬α) unsatisfiable"], ["Truth table", "2^n baris"]])}
      <h3>FOL</h3>${tb(["Benar", "Salah (jebakan)"], [["∀x (P(x) ⇒ Q(x))", "∀x (P(x) ∧ Q(x))"], ["∃x (P(x) ∧ Q(x))", "∃x (P(x) ⇒ Q(x))"], ["∃x∀y ≠ ∀y∃x", "∀x∀y = ∀y∀x (ini boleh)"]])}
      <h3>Coba truth table</h3><div class="tt"><button onclick="ttShow('∧')">∧</button><button onclick="ttShow('∨')">∨</button><button onclick="ttShow('⇒')">⇒</button><button onclick="ttShow('⇔')">⇔</button></div><div id="ttb"><p class="kbd" style="text-align:left">Pilih connective di atas.</p></div></div>`;
      window.scrollTo(0, 0);
    }

    /* ── v4: alur, umpan balik, visualisasi ── */
    const TN = { m: "Menjodohkan", b: "Benar/Salah", i: "Isian", q: "Pilihan Ganda", e: "Essay" };
    function segLbl() { const s = run.steps[run.idx], same = run.steps.map((x, i) => [x, i]).filter(p => p[0].t === s.t), k = same.findIndex(p => p[1] === run.idx) + 1; return `Bagian ${TN[s.t]} · ${k} dari ${same.length}` + (k === same.length ? " · bagian terakhir" : "") + (run.idx + 1 === Math.ceil(run.steps.length / 2) ? " · setengah jalan!" : ""); }
    function wrongNow(s) { const c = run.cur; if (s.t === "q") return c.pick !== s.x.a; if (s.t === "b") return c.pick !== s.a; if (s.t === "i") return !accepts(s.a).has(norm(c.val)); if (s.t === "m") return c.as.some((v, i) => v !== s.g.items[i][1]); return true; }
    function advice(r) { const L = [["Menjodohkan", r.m, r.mt], ["Isian", r.i, r.it], ["Pilihan Ganda", r.q, r.qt], ["Benar/Salah", r.b, r.bt], ["Essay", r.e, r.et]].filter(x => x[2] > 0).map(x => [x[0], x[1] / x[2], x[1], x[2]]).sort((a, b) => a[1] - b[1]); if (!L.length || L[0][1] === 1) return "Semua tipe soal sudah kuat. Coba Simulasi UTS untuk uji campuran."; const w = L[0]; return `Paling lemah di ${w[0]} (${Math.round(w[2] * 10) / 10}/${w[3]}). ` + (w[1] < .6 ? "Baca ulang Rangkuman bab ini, lalu ulangi." : "Tinggal sedikit lagi: ulangi soal yang salah lewat Flashcard."); }
    const VG = { S: [["A", 2], ["B", 5]], A: [["G", 6]], B: [["G", 2]], G: [] }, VH = { S: 6, A: 5, B: 2, G: 0 }, VP = { S: [50, 110], A: [170, 40], B: [170, 180], G: [300, 110] };
    let VZ = { alg: "BFS", i: 0, tab: "s", m: [1, 1, 0], g: [1, 1, 1] };
    function vsim(alg) {
      let fr = [{ p: ["S"], g: 0 }], ex = [], st = [];
      const key = n => alg === "UCS" ? n.g : alg === "Greedy" ? VH[n.p.at(-1)] : n.g + VH[n.p.at(-1)];
      while (fr.length) {
        let k = 0; if (alg === "DFS") k = fr.length - 1; else if (alg !== "BFS") fr.forEach((n, i) => { if (key(n) < key(fr[k])) k = i; });
        const n = fr.splice(k, 1)[0], nm = n.p.at(-1); ex.push(nm);
        if (nm === "G") { st.push({ cur: nm, ex: [...ex], fr: fr.map(x => x.p.at(-1)), note: `Goal diambil dari fringe, berhenti. Path ${n.p.join("→")}, biaya ${n.g}.`, list: fr.map(x => [x.p.join("→"), alg === "BFS" || alg === "DFS" ? "" : key(x)]) }); break; }
        const ch = VG[nm].map(([c, w]) => ({ p: [...n.p, c], g: n.g + w })); (alg === "DFS" ? [...ch].reverse() : ch).forEach(c => fr.push(c));
        st.push({ cur: nm, ex: [...ex], fr: fr.map(x => x.p.at(-1)), note: `Perluas ${nm} (path ${n.p.join("→")}, g=${n.g}). Anak dimasukkan ke fringe.`, list: fr.map(x => [x.p.join("→"), alg === "BFS" || alg === "DFS" ? "" : key(x)]) });
      }
      return st;
    }
    function viz(tab) {
      run = null; dock(""); closeModal(); if (tab) VZ.tab = tab;
      const head = `<div class="exam-bar"><div class="exam-top"><button class="btn-exit" onclick="home()">${ic("arrowL", 13)} Kembali</button><div class="exam-label">Visualisasi Interaktif</div></div><div class="tabs"><button class="tabb ${VZ.tab === "s" ? "on" : ""}" onclick="viz('s')">Search</button><button class="tabb ${VZ.tab === "f" ? "on" : ""}" onclick="viz('f')">∀ vs ∃ (FOL)</button></div></div>`;
      if (VZ.tab === "f") return vfol(head);
      const st = vsim(VZ.alg), s = VZ.i > 0 ? st[Math.min(VZ.i, st.length) - 1] : null, hint = { BFS: "fringe FIFO", DFS: "fringe LIFO, ambil yang terbaru", UCS: "ambil g(n) terkecil", Greedy: "ambil h(n) terkecil", "A*": "ambil f=g+h terkecil" }[VZ.alg], lab = VZ.alg === "UCS" ? "g" : VZ.alg === "Greedy" ? "h" : "f";
      const done = !!s && VZ.i >= st.length; const cls = n => !s ? "" : s.cur === n ? "cu" : s.ex.includes(n) ? "ex" : s.fr.includes(n) ? "fr" : "";
      const edges = Object.entries(VG).flatMap(([a, l]) => l.map(([b, w]) => `<line x1="${VP[a][0]}" y1="${VP[a][1]}" x2="${VP[b][0]}" y2="${VP[b][1]}"/><text class="ew" x="${(VP[a][0] + VP[b][0]) / 2}" y="${(VP[a][1] + VP[b][1]) / 2 - 4}">${w}</text>`)).join("");
      const nodes = Object.keys(VP).map(n => `<circle class="nd ${cls(n)}" cx="${VP[n][0]}" cy="${VP[n][1]}" r="22"/><text x="${VP[n][0]}" y="${VP[n][1] + 5}">${n}</text><text class="ew" x="${VP[n][0]}" y="${VP[n][1] + 38}">h=${VH[n]}</text>`).join("");
      $("app").innerHTML = head + `<div class="qbox vz"><p class="qhint">${ic("info", 13)} Graf: S→A (2), S→B (5), A→G (6), B→G (2). h = estimasi ke goal. Tekan Langkah berikutnya dan lihat fringe berubah. Biru = diperluas sekarang, hijau = sudah diperluas, kuning = di fringe.</p>
      <div class="row">${["BFS", "DFS", "UCS", "Greedy", "A*"].map(a => `<button class="${VZ.alg === a ? "on" : ""}" onclick="VZ.alg='${a}';VZ.i=0;viz()">${a}</button>`).join("")}</div>
      <svg viewBox="0 0 360 230">${edges}${nodes}</svg>
      <div class="note"><b>${VZ.alg}</b>: ${hint}. ${s ? esc(s.note) : "Belum mulai. Fringe berisi S."}</div>
      ${done ? (() => { const c = +(s.note.match(/biaya (\d+)/) || [0, 0])[1]; return `<div class="vdone">✓ Selesai. Biaya solusi ${c} ${c === 7 ? "(termurah)" : "(bukan yang termurah, karena ada path berbiaya 7)"}. Coba algoritma lain untuk membandingkan.</div>`; })() : ""}
      ${s ? `<table><tr><th>Path di fringe</th><th>${VZ.alg === "BFS" || VZ.alg === "DFS" ? "–" : lab}</th></tr>${s.list.length ? s.list.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join("") : `<tr><td colspan="2">kosong</td></tr>`}</table>` : ""}
      <div class="row"><button onclick="VZ.i=Math.max(0,VZ.i-1);viz()">Mundur</button><button class="${done ? "" : "on"}" ${done ? "disabled" : ""} onclick="VZ.i=Math.min(${st.length},VZ.i+1);viz()">${done ? "Selesai ✓" : "Langkah berikutnya"}</button><button onclick="VZ.i=0;viz()">Ulang</button></div></div>`;
    }
    function vfol(head) {
      const n = ["Budi", "Ani", "Cici"], M = VZ.m, G = VZ.g, f = [["∀x (Mhs(x) ⇒ Genius(x))", "all", o => !M[o] || G[o]], ["∀x (Mhs(x) ∧ Genius(x))", "all", o => M[o] && G[o]], ["∃x (Mhs(x) ∧ Genius(x))", "any", o => M[o] && G[o]], ["∃x (Mhs(x) ⇒ Genius(x))", "any", o => !M[o] || G[o]]];
      $("app").innerHTML = head + `<div class="qbox vz"><p class="qhint">${ic("info", 13)} Ada 3 objek (Budi, Ani, Cici). Tekan tombol untuk mengubah sifat tiap objek (Ya/Tidak), atau pilih contoh siap pakai. Tabel di bawah langsung menunjukkan rumus mana yang benar. Coba "Tidak ada mahasiswa". Perhatikan ∀ dengan ∧ dan ∃ dengan ⇒.</p>
      <div class="row">${[["Contoh slide", [1, 1, 0], [1, 1, 1]], ["Tidak ada mahasiswa", [0, 0, 0], [1, 1, 1]], ["Ada mahasiswa tak genius", [1, 1, 0], [1, 0, 1]]].map(p => `<button onclick="VZ.m=[${p[1]}];VZ.g=[${p[2]}];viz('f')">${p[0]}</button>`).join("")}</div>
      <div class="fobj">${n.map((x, i) => `<div class="fo"><b>${x}</b><button class="tg ${M[i] ? "y" : ""}" onclick="VZ.m[${i}]^=1;viz('f')">Mahasiswa: ${M[i] ? "Ya" : "Tidak"}</button><button class="tg ${G[i] ? "y" : ""}" onclick="VZ.g[${i}]^=1;viz('f')">Genius: ${G[i] ? "Ya" : "Tidak"}</button></div>`).join("")}</div>
      <table style="margin-top:12px"><tr><th>Rumus</th>${n.map(x => `<th>${x}</th>`).join("")}<th>Hasil</th></tr>${f.map(([name, q, fn]) => { const v = n.map((_, i) => !!fn(i)), r = q === "all" ? v.every(Boolean) : v.some(Boolean); return `<tr><td style="text-align:left">${name}</td>${v.map(b => `<td>${b ? "T" : "F"}</td>`).join("")}<td class="${r ? "ok" : "no"}">${r ? "BENAR" : "SALAH"}</td></tr>`; }).join("")}</table>
      <div class="note">∀ benar bila <b>semua</b> kolom T. ∃ benar bila <b>minimal satu</b> T. Pada ∃x (Mhs ⇒ Genius), objek yang bukan mahasiswa membuat kolomnya T otomatis, jadi rumus ini hampir selalu benar tanpa makna.</div></div>`;
    }

    function gBody(s) { return String(s).split("\n").map((p, i) => `<p class="${i === 0 ? "lead" : ""}">${fmtG(p)}</p>`).join(""); }
    function markRead(n, i, v, tot) { S.read = S.read || {}; S.read[n + "-" + i] = v; save(); const c = Array.from({ length: tot }, (_, k) => S.read[n + "-" + k]).filter(Boolean).length; $("gpt").textContent = c + " dari " + tot + " konsep sudah dipahami"; $("gpb").style.width = c / tot * 100 + "%"; const g = $("gn" + i); g.textContent = v ? "✓" : i + 1; g.classList.toggle("dn", v); }
    function pickMatch(el) { run.cur.as[+el.dataset.i] = el.value; const allDone = run.cur.as.every(v => v !== ""); if ($("ck")) $("ck").disabled = !allDone; }

    /* ═══════════════════════════════════════════
       FILL-IN
       ═══════════════════════════════════════════ */
    function drawI() {
      const s = run.steps[run.idx], c = run.cur, ok = c.checked && accepts(s.a).has(norm(c.val));
      $("app").innerHTML = examNav() + `<div class="qbox">
    <div class="qbox-hdr">
      <span class="pill fill">${ic("pen", 13)} Isian Singkat</span>
      <span class="qnum">${run.idx + 1} / ${run.steps.length}</span>
    </div>
    <p class="qtxt">${esc(s.q)}</p>
    <div class="fill-wrap">
      <input type="text" id="in" class="fill-in ${c.checked ? (ok ? "right" : "wrong") : ""}"
        value="${esc(c.val)}" placeholder="Ketik jawaban Anda di sini..."
        autocomplete="off" spellcheck="false" ${c.checked ? "disabled" : ""}>
    </div>
    ${c.checked ? (ok ? `<div class="fb ok">${ic("check", 16)} Jawaban Benar</div>`
          : `<div class="fb bad">${ic("x", 16)} Kurang Tepat<span>Jawabanmu: <b>${esc(c.val)}</b> · Kunci: <b>${esc(s.a)}</b></span><button class="ovr" onclick="ovrI()">Jawabanku sebenarnya benar (maknanya sama)</button></div>`) : ""}
  </div>`;
      const inp = $("in");
      if (!c.checked) { setTimeout(() => inp && inp.focus(), 50); inp.oninput = () => c.val = inp.value; inp.onkeydown = e => { if (e.key === "Enter" && $("ck")) $("ck").click() }; }
      if (c.checked) {
        dock(`<button class="btn-s" onclick="openSheet()">${ic("grid", 13)} Soal</button>
      <button class="btn-p" id="nx">${run.idx === run.steps.length - 1 ? "Lihat Hasil" : "Lanjut"} ${ic("arrow", 15)}</button>`);
        $("nx").onclick = next;
      } else {
        dock(`<button class="btn-s" onclick="openSheet()">${ic("grid", 13)} Soal</button>
      <button class="btn-p" id="ck">Periksa Jawaban</button>`);
        $("ck").onclick = () => { c.val = inp.value.trim(); if (!c.val) return alert("Ketik jawaban terlebih dahulu."); c.checked = true; run.ans[run.idx] = true; run.sc.it++; if (accepts(s.a).has(norm(c.val))) run.sc.i++; else run.wrong.push({ q: s.q, a: s.a }); drawI(); };
      }
    }

    /* ═══════════════════════════════════════════
       MCQ
       ═══════════════════════════════════════════ */
    function drawQ() {
      const s = run.steps[run.idx], x = s.x, c = run.cur, lt = ["A", "B", "C", "D", "E"];
      const disp = s.shuf.map(origIdx => x.o[origIdx]);
      $("app").innerHTML = examNav() + `<div class="qbox">
    <div class="qbox-hdr">
      <span class="pill mcq">${ic("circle", 13)} Pilihan Ganda</span>
      <span class="qnum">${run.idx + 1} / ${run.steps.length}</span>
    </div>
    <p class="qtxt">${esc(x.q)}</p>
    <div class="opts">${disp.map((o, dispIdx) => {
        let origIdx = s.shuf[dispIdx];
        let cls = ""; if (c.checked) { if (origIdx === x.a) cls = "right"; else if (origIdx === c.pick) cls = "wrong"; }
        return `<button class="opt ${cls}" onclick="pickQ(${origIdx})" ${c.checked ? "disabled" : ""}><span class="opt-letter">${lt[dispIdx]}</span><span style="flex:1">${esc(o)}</span></button>`;
      }).join("")}</div>
    ${c.checked ? (c.pick === x.a ? `<div class="fb ok">${ic("check", 16)} Jawaban Tepat</div>`
          : `<div class="fb bad">${ic("x", 16)} Kurang Tepat<span>Kunci: <b>${esc(x.o[x.a])}</b></span></div>`) : ""}
  </div>`;
      if (c.checked) {
        dock(`<button class="btn-s" onclick="openSheet()">${ic("grid", 13)} Soal</button>
      <button class="btn-p" id="nx">${run.idx === run.steps.length - 1 ? "Lihat Hasil" : "Lanjut"} ${ic("arrow", 15)}</button>`);
        $("nx").onclick = next;
      } else {
        dock(`<button class="btn-s" onclick="openSheet()">${ic("grid", 13)} Soal</button>
      <button class="btn-p" disabled>Pilih salah satu opsi</button>`);
      }
    }
    function pickQ(origIdx) { const x = run.steps[run.idx].x, c = run.cur; c.pick = origIdx; c.checked = true; run.ans[run.idx] = true; run.sc.qt++; if (origIdx === x.a) run.sc.q++; else run.wrong.push({ q: x.q, a: x.o[x.a] }); drawQ(); }

    /* ═══════════════════════════════════════════
       MODAL – Question Sheet
       ═══════════════════════════════════════════ */
    function openSheet() {
      $("modal").innerHTML = `<div class="modal-bg" onclick="closeModal()">
    <div class="modal-box" onclick="event.stopPropagation()">
      <div class="modal-hdr"><h3>Navigasi Soal</h3><button class="modal-close" onclick="closeModal()">${ic("x", 11)} Tutup</button></div>
      <p class="modal-hint">Klik nomor untuk berpindah ke soal tersebut.</p>
      <div class="sheet">${run.steps.map((_, i) => {
        let cls = ""; if (i === run.idx) cls = "cur"; else if (run.ans[i]) cls = "done";
        return `<button class="sh-item ${cls}" onclick="jumpTo(${i})">${i + 1}</button>`;
      }).join("")}</div>
    </div>
  </div>`;
    }
    function closeModal() { $("modal").innerHTML = ""; }
    function jumpTo(i) { closeModal(); run.idx = i; step(); }

    /* ═══════════════════════════════════════════
       RESULT
       ═══════════════════════════════════════════ */
    function result() {
      stopTimer(); const r = run.sc; r.e = run.steps.reduce((a, s, i) => s.t === "e" && run.states[i].checked ? a + run.states[i].hit.filter(Boolean).length / s.p.length : a, 0); r.et = run.steps.filter(s => s.t === "e").length;
      const got = Math.round((r.m + r.i + r.q + r.b + r.e) * 10) / 10, tot = r.mt + r.it + r.qt + r.bt + r.et, pct = Math.round(got / tot * 100), n = run.n;
      S[n] = { got, total: tot }; S.wb = S.wb || []; run.wrong.forEach(w => { if (!S.wb.some(x => x.q === w.q)) S.wb.push(w); }); save();
      const keys = Object.keys(DATA), nn = n === "U" ? null : keys[keys.indexOf(n) + 1];
      let gc = "b", gt = "MEMUASKAN (B)";
      if (pct >= 85) { gc = "a"; gt = "SANGAT MEMUASKAN (A)"; } else if (pct < 60) { gc = "d"; gt = "PERLU EVALUASI (D)"; }

      $("app").innerHTML = `<div class="res-card">
    <div><span class="res-badge">${ic("book", 11)} Transkrip Hasil CBT</span></div>
    <h2 class="res-title">${esc(DATA[n].title)}</h2>
    <div class="score-big">${got}/${tot}</div>
    <div><span class="grade ${gc}">${ic("star", 14)} ${gt} (${pct}%)</span></div>
    <div class="sum-rows">
      <div class="sum-item"><span class="la">${ic("link", 14)} Menjodohkan</span><span class="va">${r.m}/${r.mt}</span></div>
      <div class="sum-item"><span class="la">${ic("pen", 14)} Isian Singkat</span><span class="va">${r.i}/${r.it}</span></div>
      <div class="sum-item"><span class="la">${ic("circle", 14)} Pilihan Ganda</span><span class="va">${r.q}/${r.qt}</span></div>
      <div class="sum-item"><span class="la">${ic("check", 14)} Benar/Salah</span><span class="va">${r.b}/${r.bt}</span></div>
      <div class="sum-item"><span class="la">${ic("pen", 14)} Essay (poin)</span><span class="va">${Math.round(r.e*10)/10}/${r.et}</span></div>
    </div>
    <div class="model" style="margin:14px 0"><b>Saran:</b> ${advice(r)}</div>
    ${run.wrong.length ? `<div class="wrong-sec">
      <details class="rev-acc" open>
        <summary><span>Soal yang perlu diulang (${run.wrong.length})</span>${ic("chev", 13)}</summary>
        <div class="rev-list">${run.wrong.map(w => `<div class="rev-item"><div class="rev-q">${esc(w.q)}</div><div>Jawaban: <span class="rev-a">${esc(w.a)}</span></div></div>`).join("")}</div>
      </details>
    </div>`: `<div class="fb ok" style="margin-top:20px">${ic("trophy", 16)} Sempurna! Semua soal dijawab dengan benar.</div>`}
  </div>`;
      dock(`<button class="btn-s" onclick="study('${n}')">${ic("book", 13)} Rangkuman</button>
    <button class="btn-s" onclick="start('${n}')">${ic("refresh", 13)} Ulangi</button>
    ${nn ? `<button class="btn-p" onclick="start('${nn}')">Lanjut Bab ${nn} ${ic("arrow", 15)}</button>`
          : `<button class="btn-p" onclick="home()">Kembali ${ic("arrow", 15)}</button>`}`);
      window.scrollTo(0, 0);
    }


    function dk(chk, fn, lbl) {
      dock(`<button class="btn-s" onclick="openSheet()">${ic("grid", 13)} Soal</button><button class="btn-p" id="nx">${chk ? (run.idx === run.steps.length - 1 ? "Lihat Hasil" : "Lanjut") + " " + ic("arrow", 15) : lbl}</button>`);
      if (chk) $("nx").onclick = next; else if (fn) $("nx").onclick = fn; else $("nx").disabled = true;
    }
    function drawB() {
      const s = run.steps[run.idx], c = run.cur, ok = c.pick === s.a;
      $("app").innerHTML = examNav() + `<div class="qbox"><div class="qbox-hdr"><span class="pill fill">${ic("check", 13)} Benar / Salah</span><span class="qnum">${run.idx + 1} / ${run.steps.length}</span></div>
      <p class="qtxt">${esc(s.q)}</p><div class="opts">${[true, false].map(v => { let cls = ""; if (c.checked) { if (v === s.a) cls = "right"; else if (v === c.pick) cls = "wrong"; }
        return `<button class="opt ${cls}" onclick="pickB(${v})" ${c.checked ? "disabled" : ""}><span class="opt-letter">${v ? "B" : "S"}</span><span style="flex:1">${v ? "Benar" : "Salah"}</span></button>`; }).join("")}</div>
      ${c.checked ? `<div class="fb ${ok ? "ok" : "bad"}">${ic(ok ? "check" : "x", 16)} ${ok ? "Jawaban Tepat" : "Kurang Tepat"}<span>${ok ? "" : "Kamu menjawab " + (c.pick ? "Benar" : "Salah") + ". "}${esc(s.w.trim().length < 14 ? "Pernyataan itu " + (s.a ? "benar" : "salah") + " menurut materi. Cek konsepnya di Rangkuman." : s.w)}</span></div>` : ""}</div>`;
      dk(c.checked, null, "Pilih Benar atau Salah");
    }
    function pickB(v) { const s = run.steps[run.idx], c = run.cur; c.pick = v; c.checked = true; run.ans[run.idx] = true; run.sc.bt++; if (v === s.a) run.sc.b++; else run.wrong.push({ q: s.q, a: s.a ? "Benar" : "Salah" }); drawB(); }
    function drawE() {
      const s = run.steps[run.idx], c = run.cur, n = s.p.length;
      $("app").innerHTML = examNav() + `<div class="qbox"><div class="qbox-hdr"><span class="pill match">${ic("pen", 13)} Essay</span><span class="qnum">${run.idx + 1} / ${run.steps.length}</span></div>
      <p class="qtxt">${esc(s.q)}</p>
      <textarea id="es" class="essay" placeholder="Tulis jawabanmu seperti di lembar ujian..." ${c.checked ? "disabled" : ""}>${esc(c.val)}</textarea>
      ${c.checked ? `<p class="qhint" style="margin:16px 0 8px">${ic("info", 13)} Centang poin yang sudah kamu tulis (terisi otomatis dari kata kunci, boleh diubah).</p>
      <div class="pts">${s.p.map((p, i) => `<label class="pt"><input type="checkbox" ${c.hit[i] ? "checked" : ""} onchange="tgl(${i},this.checked)"><span>${esc(p[0])}</span></label>`).join("")}</div>
      <div class="model"><b>Skor poin: <span id="esc">${c.hit.filter(Boolean).length}/${n}</span></b><br>${esc(s.m)}</div>` : ""}</div>`;
      const el = $("es"); if (!c.checked) el.oninput = () => c.val = el.value;
      dk(c.checked, () => { c.val = el.value.trim(); if (!c.val) return alert("Tulis jawaban terlebih dahulu."); const v = norm(c.val); c.hit = s.p.map(p => p[1].split("|").some(k => v.includes(norm(k)))); c.checked = true; run.ans[run.idx] = true; drawE(); }, "Lihat Pembahasan");
    }
    function tgl(i, v) { run.cur.hit[i] = v; $("esc").textContent = run.cur.hit.filter(Boolean).length + "/" + run.cur.hit.length; }


const fmtG=s=>esc(s).replace(/\*\*(.+?)\*\*/g,"<b>$1</b>").replace(/\n/g,"<br>");
    let FC = null;
    function study(n, tab) {
      closeModal(); run = null; dock(""); tab = tab || "s"; const c = DATA[n];
      const head = `<div class="exam-bar"><div class="exam-top"><button class="btn-exit" onclick="home()">${ic("arrowL", 13)} Kembali</button><div class="exam-label">${esc(c.title)}</div><button class="btn-sheet" onclick="start(\'${n}\')">Kerjakan</button></div><div class="tabs"><button class="tabb ${tab === "s" ? "on" : ""}" onclick="study('${n}','s')">Rangkuman</button><button class="tabb ${tab === "f" ? "on" : ""}" onclick="study('${n}','f')">Flashcard</button></div></div>`;
      if (tab === "s") { const G = GUIDE[n] || [], rd = (S.read || {}), cnt = G.filter((_, i) => rd[n + "-" + i]).length; $("app").innerHTML = head + `<div class="qbox gprog"><div class="gprog-t"><b id="gpt">${cnt} dari ${G.length} konsep sudah dipahami</b><span class="gall"><button onclick="document.querySelectorAll('.gd').forEach(d=>d.open=true)">Buka semua</button><button onclick="document.querySelectorAll('.gd').forEach(d=>d.open=false)">Tutup semua</button></span></div><div class="pbar"><i id="gpb" style="width:${G.length ? cnt / G.length * 100 : 0}%"></i></div><p class="gprog-h">Baca satu konsep, centang kalau sudah paham, lalu lanjut ke berikutnya.</p></div>` + G.map((g, i) => `<details class="gd" ${i === 0 ? "open" : ""}><summary><span class="gn ${rd[n + "-" + i] ? "dn" : ""}" id="gn${i}">${rd[n + "-" + i] ? "✓" : i + 1}</span><span class="gt">${esc(g[0])}</span>${ic("chev", 13)}</summary><div class="gb">${gBody(g[1])}${g[2] ? `<div class="gx"><b>Contoh</b>${fmtG(g[2])}</div>` : ""}<label class="rdl"><input type="checkbox" ${rd[n + "-" + i] ? "checked" : ""} onchange="markRead('${n}',${i},this.checked,${G.length})"> Saya sudah paham konsep ini</label></div></details>`).join("") + `<details class="gd sumq"><summary><span class="gn">≡</span><span class="gt">Ringkasan kilat bab ini</span>${ic("chev", 13)}</summary><div class="gb"><ul class="sumlist">${c.sum.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div></details>`; window.scrollTo(0, 0); return; }
      const cards = [...c.isian.map(x => [x[0], x[1]]), ...c.tf.map(x => [x[0], (x[1] ? "Benar. " : "Salah. ") + x[2]]), ...c.es.map(x => [x.q, x.m])];
      for (let i = cards.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [cards[i], cards[j]] = [cards[j], cards[i]]; }
      FC = { head, cards, i: 0, f: false }; fc();
    }
    function fc() {
      const k = FC.cards[FC.i];
      $("app").innerHTML = FC.head + `<div class="qnum" style="text-align:center;margin-bottom:8px">${FC.i + 1} / ${FC.cards.length}</div><div class="fcard ${FC.f ? "back" : ""}" onclick="FC.f=!FC.f;fc()"><small>${FC.f ? "Jawaban" : "Pertanyaan (ketuk untuk membalik)"}</small><p>${esc(FC.f ? k[1] : k[0])}</p></div>`;
      dock(`<button class="btn-s" onclick="fcGo(-1)">${ic("arrowL", 13)} Sebelumnya</button><button class="btn-p" onclick="fcGo(1)">Berikutnya ${ic("arrow", 15)}</button>`);
    }
    function fcGo(d) { FC.i = (FC.i + d + FC.cards.length) % FC.cards.length; FC.f = false; fc(); }


    function pick(n) {
      $("modal").innerHTML = `<div class="modal-bg" onclick="closeModal()"><div class="modal-box" style="max-width:380px" onclick="event.stopPropagation()"><h3 style="font-weight:800;margin-bottom:4px">${esc(DATA[n].title)}</h3><p class="modal-hint">Mau mulai dari mana?</p><div class="pickl"><button class="btn-s" onclick="study('${n}','s')">${ic("book", 14)} Baca overview dulu</button><button class="btn-s" onclick="study('${n}','f')">${ic("clip", 14)} Flashcard dulu</button><button class="btn-p" onclick="closeModal();start('${n}')">Langsung kerjakan ${ic("arrow", 15)}</button></div></div></div>`;
    }
    function wbCards() {
      const w = S.wb || []; if (!w.length) return alert("Belum ada soal yang salah. Kerjakan satu bab dulu.");
      run = null; dock(""); FC = { head: `<div class="exam-bar"><div class="exam-top"><button class="btn-exit" onclick="home()">${ic("arrowL", 13)} Kembali</button><div class="exam-label">Flashcard Soal yang Pernah Salah</div></div></div>`, cards: w.map(x => [x.q, x.a]), i: 0, f: false }; fc();
    }
    let TM = null;
    function stopTimer() { clearInterval(TM); const e = $("tmr"); if (e) e.style.display = "none"; }
    function startTimer(s) {
      stopTimer(); let el = $("tmr"); if (!el) { el = document.createElement("div"); el.id = "tmr"; el.className = "tmr"; document.body.appendChild(el); }
      el.style.display = "block"; const end = Date.now() + s * 1000;
      TM = setInterval(() => { const r = Math.max(0, Math.round((end - Date.now()) / 1000)); el.textContent = "Sisa " + Math.floor(r / 60) + ":" + String(r % 60).padStart(2, "0"); if (r <= 0) { stopTimer(); if (run && run.n === "U") { alert("Waktu habis"); result(); } } }, 1000);
    }
    function startUTS() {
      const A = Object.values(DATA), pk = (k, n) => { const a = A.flatMap(c => c[k]); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a.slice(0, n); };
      Object.defineProperty(DATA, "U", { value: { title: "Simulasi UTS · Campuran", tf: pk("tf", 8), isian: pk("isian", 8), match: pk("match", 2), mcq: pk("mcq", 3), es: pk("es", 2), sum: [] }, enumerable: false, configurable: true, writable: true });
      start("U"); startTimer(3600);
    }

    initTheme(); home();

/* ===== REVISI ===== */
/* REVISI PATCH — taruh di dalam <script> baru, tepat SETELAH script utama (sebelum </body>) */
(function () {
  const D = DATA;

  /* ---------- CSS ---------- */
  const st = document.createElement("style");
  st.textContent = ".symbar{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}.symbar button{min-width:38px;padding:7px 10px;border-radius:8px;border:1px solid var(--blue-border);background:var(--card);color:var(--ink);font:700 .95rem var(--ff)}.symbar button:hover{background:var(--blue-soft)}.symhint{font-size:.76rem;color:var(--ink3);margin-top:6px}";
  document.head.appendChild(st);

  /* ---------- 1. Penilai isian toleran ---------- */
  window.accepts = function (a) {
    const set = new Set(), add = x => { const k = norm(x); if (k) set.add(k); };
    const forms = [a], m = a.match(/^(.*?)\s*\((.*)\)\s*$/);
    if (m) forms.push(m[1], m[2]);
    forms.forEach(f => {
      add(f); add(f.replace(/\^/g, " pangkat ")); add("O(" + f + ")");
      add(f.replace(/^O\((.*)\)$/i, "$1"));
    });
    for (const [k, v] of Object.entries(SYNONYMS)) if (set.has(norm(k))) add(v);
    return { has: v => set.has(v) };
  };

  /* ---------- 2. Tombol simbol (isian + essay) ---------- */
  window.insSym = function (ch) {
    const el = $("in") || $("es"); if (!el) return;
    const s = el.selectionStart, e = el.selectionEnd;
    el.value = el.value.slice(0, s) + ch + el.value.slice(e);
    el.selectionStart = el.selectionEnd = s + ch.length; el.focus();
    el.dispatchEvent(new Event("input"));
  };
  function bar() {
    if (!run || run.cur.checked) return;
    const t = run.steps[run.idx].t; if (t !== "i" && t !== "e") return;
    const box = $("app").querySelector(".qbox"); if (!box || box.querySelector(".symbar")) return;
    const a = box.querySelector(".fill-wrap") || $("es");
    a.insertAdjacentHTML("afterend", '<div class="symbar">' + ["^", "²", "∀", "∃", "⇒", "⇔", "∧", "∨", "¬", "→"].map(c => `<button type="button" onmousedown="event.preventDefault()" onclick="insSym('${c}')">${c}</button>`).join("") + '</div><div class="symhint">Simbol tidak wajib: boleh ketik kata (pangkat, implikasi, untuk semua, ada, dan, atau).</div>');
  }
  ["drawI", "drawE"].forEach(n => { const o = window[n]; window[n] = function () { o(); bar(); }; });

  /* ---------- 3. Perbaiki soal isian ambigu / pendek ---------- */
  const fq = (n, pre, txt) => { const x = D[n].isian.find(i => i[0].startsWith(pre)); if (x) x[0] = txt; };
  fq(3, "Kompleksitas waktu BFS", "Kompleksitas waktu BFS dengan branching factor b dan kedalaman solusi terdangkal d adalah ... (boleh ditulis b^d atau b pangkat d)");
  fq(3, "Ruang fringe BFS", "Kebutuhan ruang fringe BFS dengan solusi terdangkal pada kedalaman s adalah ... (boleh ditulis b^s)");
  fq(3, "Fringe UCS", "Struktur data fringe pada uniform-cost search, yang selalu mengeluarkan node berbiaya terkecil lebih dulu, berupa ...");
  fq(3, "Prioritas node pada UCS", "Nilai prioritas node pada UCS (terkecil dipilih lebih dulu) adalah biaya jenis apa, yaitu biaya dari start ke node tersebut?");
  fq(3, "Pada graf yang sama", "Graf: S→A biaya 2, S→B biaya 5, A→G biaya 6, B→G biaya 2. UCS memilih g(n) terkecil dari priority queue (tidak ada nilai seri di soal ini). Node pertama yang diperluas setelah S adalah ...");
  fq(4, "Heuristik admissible juga", "Heuristik admissible (tidak pernah melebihi biaya sebenarnya ke goal) juga disebut heuristik yang bersifat ...");
  fq(2, "Percept vacuum world", "Percept vacuum world berformat [lokasi, isi]. Agen berada di kotak A dan kotak A kotor. Tulis percept-nya dengan format [A,Dirty]:");
  Object.values(D).forEach(c => c.isian.forEach(x => { if (x[1].includes("^") && !/pangkat|\^/.test(x[0])) x[0] += " (simbol ^ boleh diganti kata 'pangkat')"; }));

  /* ---------- 4. Perbaiki penilai essay: kata kunci simbol murni selalu cocok ---------- */
  Object.values(D).forEach(c => c.es.forEach(e => e.p.forEach(p => { p[1] = p[1].split("|").filter(k => norm(k)).join("|"); })));
  const addK = (n, q, p, s) => { D[n].es[q].p[p][1] += "|" + s; };
  addK(4, 0, 0, "jumlah biaya|biaya ditambah|ditambah heuristik");
  addK(6, 0, 0, "mengikuti|ter-entail|terentail");
  addK(7, 0, 2, "implikasi|konjungsi|dan");

  /* ---------- 5. Study case (konteks lengkap, 1 jawaban terbaik) ---------- */
  const SC = (n, q, o, a, e) => D[n].mcq.push({ q: "Study case. " + q, o, a, e });
  SC(1, "Sebuah chatbot layanan mahasiswa diuji: seorang penguji berkomunikasi lewat teks dengan chatbot dan seorang manusia tanpa melihat keduanya. Penguji tidak dapat memastikan mana yang mesin. Pendekatan AI mana yang sedang diuji?", ["Acting humanly", "Thinking humanly", "Thinking rationally", "Acting rationally"], 0, "Yang dinilai perilaku yang tak terbedakan dari manusia (Turing Test) = acting humanly. Bukan thinking humanly karena cara berpikir internal tidak diperiksa.");
  SC(1, "Perusahaan memakai sistem seleksi resume yang dilatih dari data rekrutmen 10 tahun terakhir. Karena mayoritas pelamar yang diterima dahulu laki-laki, sistem menurunkan skor resume yang memuat kata 'women'. Isu etika AI yang paling tepat adalah ...", ["Bias", "Privasi", "Dampak lingkungan", "Bukan masalah etika karena sistem mengikuti data"], 0, "Pola timpang di data historis diwarisi model (kasus Amazon 2018) = bias. Privasi menyangkut penggunaan data tanpa persetujuan, bukan hasil yang diskriminatif.");
  SC(2, "Robot penyedot debu hanya memakai sensor kondisi kotak yang sedang ditempati. Jika kotor ia menyedot; jika bersih ia bergerak ke kanan. Robot tidak menyimpan riwayat lokasi atau kondisi sebelumnya. Jenis agen yang paling tepat adalah ...", ["Simple reflex agent", "Model-based reflex agent", "Goal-based agent", "Learning agent"], 0, "Aksi ditentukan langsung oleh persepsi saat ini (condition-action) tanpa state. Model-based baru benar bila robot menyimpan perkiraan kondisi kotak yang tidak sedang diamati.");
  SC(2, "Robot berada di ruangan dengan sensor yang hanya membaca satu lokasi pada satu waktu. Robot menyimpan perkiraan kondisi lokasi lain berdasarkan pengamatan sebelumnya dan memakainya saat memilih aksi. Jenis agen yang paling tepat adalah ...", ["Simple reflex agent", "Model-based reflex agent", "Goal-based agent", "Utility-based agent"], 1, "Ada internal state untuk bagian dunia yang tak teramati = model-based. Belum goal-based karena tidak disebut aksi dipilih demi tujuan tertentu.");
  SC(2, "Dua agen navigasi harus sampai ke kampus. Agen A memilih rute apa pun yang tiba di kampus. Agen B membandingkan waktu, biaya, dan kemacetan lalu memilih rute dengan nilai preferensi tertinggi. Pasangan jenis agen A dan B adalah ...", ["A goal-based, B utility-based", "A utility-based, B goal-based", "A simple reflex, B goal-based", "A goal-based, B learning agent"], 0, "A hanya peduli tujuan tercapai atau tidak; B menilai seberapa baik tiap alternatif (expected utility). Tidak ada petunjuk perbaikan dari pengalaman, jadi bukan learning agent.");
  SC(3, "Graf: S→A biaya 2, S→B biaya 5, A→G biaya 6, B→G biaya 2. DFS dengan fringe LIFO, successor diurutkan alfabetis (A diperluas lebih dulu), tanpa cek state berulang. Path yang pertama kali ditemukan adalah ...", ["S–A–G, biaya 8", "S–B–G, biaya 7", "S–A–B–G", "DFS tidak menemukan solusi"], 0, "DFS masuk ke A dulu lalu G: S–A–G (8). S–B–G (7) adalah hasil UCS. DFS tidak menjamin termurah.");
  SC(3, "UCS (priority queue, g terkecil dipilih lebih dulu). Aturan seri: pilih node yang lebih dulu masuk fringe; successor dimasukkan alfabetis. Graf: S→A 1, S→B 1, A→G 4, B→C 1, C→G 1. Urutan node diperluas sampai goal diambil, dan biaya solusinya?", ["S, A, B, C, G; biaya 3", "S, B, A, C, G; biaya 3", "S, A, G; biaya 5", "S, A, B, C, G; biaya 5"], 0, "S diperluas (A=1, B=1 seri, A masuk dulu, jadi A). A memasukkan G=5. Lalu B(1), memasukkan C=2. C(2) memasukkan G=3. G(3) dipilih sebelum G(5): biaya 3. Tanpa aturan seri, urutan S, B, A, ... juga valid, itulah sebabnya aturan harus dinyatakan.");
  SC(4, "A* dengan fringe: P (g=3, h=5), Q (g=6, h=2), R (g=2, h=7). Nilai f terkecil dipilih; bila seri, pilih node yang lebih dulu masuk fringe (urutan masuk: P, Q, R). Node yang diperluas berikutnya adalah ...", ["P", "Q", "R", "Tidak dapat ditentukan"], 0, "f(P)=8, f(Q)=8, f(R)=9. P dan Q seri, aturan FIFO memilih P. Greedy (h terkecil) akan memilih Q, itu pembedanya.");
  SC(4, "Sebuah state punya biaya sebenarnya ke goal h*=6. Seorang mahasiswa mengusulkan h=9 untuk state itu. Dampaknya pada A* adalah ...", ["Admissible, A* tetap optimal", "Inadmissible; jalur optimal bisa tertahan di fringe sehingga optimalitas A* tidak terjamin", "Admissible karena h bernilai positif", "Inadmissible tetapi A* tetap pasti optimal"], 1, "Admissible menuntut h ≤ h*. 9 > 6 berarti overestimate: f jalur bagus terlalu besar sehingga terlambat dipilih.");
  SC(5, "Pada map coloring Australia, setelah beberapa assignment dan forward checking, sisa nilai legal: NT 2 nilai, SA 1 nilai, Q 3 nilai, NSW 3 nilai. Menurut heuristik MRV, variabel yang dipilih berikutnya adalah ...", ["NT", "SA", "Q", "NSW"], 1, "MRV memilih variabel dengan sisa nilai paling sedikit (SA, 1 nilai) agar kegagalan cepat ketahuan. LCV baru dipakai untuk memilih nilai setelah variabel dipilih.");
  SC(5, "Variabel X berdomain {1,2,3}, Y berdomain {1,2}, constraint X > Y. Setelah arc X→Y dibuat konsisten, domain X menjadi ...", ["{1,2,3}", "{2,3}", "{3}", "{1,2}"], 1, "Nilai dihapus dari tail (X). x=1 tidak punya y yang lebih kecil, jadi dihapus. x=2 cocok dengan y=1, x=3 cocok. Domain Y tidak berubah di arc ini.");
  SC(6, "Wumpus world. Aturan: breeze di sebuah kotak jika dan hanya jika ada pit di kotak bertetangga. Agen di [1,1] tidak merasakan breeze. Tetangga [1,1] adalah [1,2] dan [2,1]. Kesimpulan yang ter-entail oleh KB adalah ...", ["Tidak ada pit di [1,2] maupun [2,1]", "Ada pit di keduanya", "Tidak ada pit di [1,2], tetapi [2,1] belum diketahui", "Tidak ada kesimpulan"], 0, "Breeze iff pit tetangga; tanpa breeze, tidak ada pit di semua tetangga, jadi kedua kotak aman.");
  SC(6, "KB terdiri dari dua kalimat: (A ∨ B) dan ¬A, dengan simbol hanya A dan B. Berapa model yang membuat KB benar, dan apakah KB entail B?", ["1 model (A=F, B=T); B ter-entail", "2 model; B tidak ter-entail", "1 model; B tidak ter-entail", "3 model; B ter-entail"], 0, "¬A memaksa A=F; lalu A∨B memaksa B=T. Hanya satu model, dan B benar di sana, jadi KB ⊨ B.");
  SC(7, "Seorang teman menerjemahkan 'Ada mahasiswa yang genius' menjadi ∃x (Mahasiswa(x) ⇒ Genius(x)). Di dunia berisi 3 objek tanpa satu pun mahasiswa, apa yang terjadi?", ["Rumus benar padahal kalimat asli salah, jadi terjemahannya keliru (seharusnya ∧)", "Rumus salah dan terjemahannya benar", "Rumus benar dan kalimat asli juga benar", "Rumus tidak dapat dievaluasi"], 0, "Objek non-mahasiswa membuat anteseden salah, implikasi benar, sehingga ∃ terpenuhi tanpa ada mahasiswa genius. Pasangan ∃ adalah ∧.");
  SC(7, "Pernyataan 'Ada mahasiswa IPB yang tidak lulus' paling tepat ditulis ...", ["∃x (Mhs(x) ∧ ¬Lulus(x))", "∃x (Mhs(x) ⇒ ¬Lulus(x))", "∀x (Mhs(x) ⇒ ¬Lulus(x))", "¬∃x (Mhs(x) ∧ Lulus(x))"], 0, "'Ada' = ∃ dengan ∧. Opsi D berarti tidak ada mahasiswa yang lulus; opsi C berarti semua mahasiswa tidak lulus.");

  /* ---------- 6. Tie-breaker di visualisasi ---------- */
  const ov = window.viz;
  window.viz = function (t) {
    ov(t);
    if (VZ.tab === "s") {
      const b = document.querySelector(".vz .qhint");
      if (b) b.insertAdjacentHTML("afterend", '<div class="note"><b>Aturan seri:</b> priority queue memilih nilai <b>terkecil</b>. Bila nilai seri, pilih node yang lebih dulu masuk fringe (FIFO). Successor diurutkan alfabetis (A sebelum B); pada DFS, A diperluas lebih dulu.</div>');
    }
  };

  /* ---------- 7. Rangkuman terstruktur (ditambahkan di bawah rangkuman lama) ---------- */
  const R = {
    1: { t: [["Acting humanly", "Turing Test; perilaku tak terbedakan dari manusia", "Bukan meniru cara berpikir"], ["Thinking humanly", "Cognitive modeling (psikologi, brain imaging)", "Yang diukur proses berpikir"], ["Thinking rationally", "Logika, laws of thought", "Tak semua perilaku cerdas logis"], ["Acting rationally", "Rational agent memaksimalkan tujuan", "Rasional tidak sama dengan sempurna"]], a: ["Yang dinilai perilaku atau proses berpikir?", "Patokannya manusia atau hasil ideal?", "Cocokkan dua jawaban ke peta 2×2."], e: ["Jangan tertukar thinking humanly (psikologi) dan thinking rationally (logika).", "Jebakan: kata 'rasional' bukan berarti selalu menang."] },
    2: { t: [["Simple reflex", "Condition-action dari persepsi sekarang", "Tanpa state"], ["Model-based", "Menyimpan state internal", "Punya memori tentang dunia tak teramati"], ["Goal-based", "Memilih aksi demi tujuan", "Hanya tercapai atau tidak"], ["Utility-based", "Memaksimalkan expected utility", "Menilai seberapa baik hasilnya"]], a: ["Apa yang diamati agen?", "Apakah ada state/riwayat?", "Hanya tujuan, atau membandingkan nilai?", "Adakah perbaikan dari pengalaman (learning)?"], e: ["Jangan tertukar sensor (input) dan actuator (output).", "Rasional = memaksimalkan hasil yang diharapkan, bukan sempurna.", "Cek ukuran kinerja: penalti gerak mengubah apa yang rasional."] },
    3: { t: [["BFS", "FIFO; node terdangkal dulu", "Optimal bila biaya sama"], ["DFS", "LIFO; node terdalam dulu; ruang O(bm)", "Tidak optimal, bisa loop"], ["UCS", "Priority queue g(n) terkecil", "= BFS bila semua biaya sama"], ["IDS", "DFS dengan batas bertahap", "Memori DFS, lengkap seperti BFS"]], a: ["Tentukan struktur fringe.", "Tentukan nilai prioritas dan arahnya (terkecil dulu).", "Tulis aturan seri dan urutan successor.", "Telusuri langkah demi langkah."], e: ["Jangan tertukar enqueue dan expand.", "Tanpa aturan seri, lebih dari satu urutan valid.", "DFS menemukan solusi 'paling kiri', bukan termurah."] },
    4: { t: [["UCS", "g(n): biaya dari start", "Tanpa informasi goal"], ["Greedy", "h(n): estimasi ke goal", "Cepat tapi tak optimal"], ["A*", "f(n)=g(n)+h(n)", "Optimal bila h admissible"]], a: ["Hitung f untuk tiap node di fringe.", "Pilih terkecil; bila seri pakai aturan yang ditetapkan.", "Berhenti hanya saat goal di-dequeue."], e: ["Berhenti saat dequeue, bukan enqueue.", "h=0 untuk semua node itu admissible (A* menjadi UCS).", "Overestimate (h > h*) = inadmissible."] },
    5: { t: [["MRV", "Pilih variabel sisa nilai paling sedikit", "Memilih variabel"], ["LCV", "Pilih nilai paling sedikit menutup pilihan lain", "Memilih nilai"], ["Forward checking", "Coret nilai variabel yang belum di-assign", "Hanya cek tetangga dari assignment baru"], ["Arc consistency", "Tiap x di tail punya pasangan di head", "Tetangga dicek ulang; lebih kuat dan mahal"]], a: ["Pilih variabel (MRV).", "Pilih nilai (LCV).", "Filter domain (forward checking / arc consistency).", "Mundur bila ada domain kosong."], e: ["Nilai dihapus dari tail, bukan head.", "Forward checking tidak mendeteksi semua kegagalan dini.", "Arc consistency tidak menjamin solusi ada."] },
    6: { t: [["Sound", "Hanya menurunkan yang ter-entail", "Tidak 'berbohong'"], ["Complete", "Dapat menurunkan semua yang ter-entail", "Tidak ada yang terlewat"], ["Valid", "Benar di semua model", "Satisfiable: benar di minimal satu"], ["Unsatisfiable", "Tidak benar di model mana pun", "Dasar pembuktian KB ∧ ¬α"]], a: ["Daftar simbol dan hitung 2^n model.", "Evaluasi KB di tiap model.", "Cek α di model yang membuat KB benar."], e: ["P⇒Q salah hanya saat P benar dan Q salah.", "Modus ponens menyimpulkan Q, bukan ¬Q.", "Truth table 3 simbol = 8 baris."] },
    7: { t: [["∀ dengan ⇒", "Semua yang memenuhi syarat", "∀ dengan ∧ berarti semua objek"], ["∃ dengan ∧", "Ada satu yang memenuhi keduanya", "∃ dengan ⇒ benar trivial"], ["Fungsi", "Memetakan objek ke objek, mis. Ibu(x)", "Predikat hasilnya benar/salah"], ["∃x∀y vs ∀y∃x", "Urutan quantifier campuran penting", "∀∀ dan ∃∃ boleh ditukar"]], a: ["Tentukan quantifier dari kata kunci (semua/ada).", "Pasangkan: ∀⇒, ∃∧.", "Uji di dunia kecil, termasuk objek non-mahasiswa."], e: ["Jangan pakai ∃ dengan ⇒.", "Jangan pakai ∀ dengan ∧.", "Cek kasus dunia tanpa objek yang disebut."] }
  };
  window.RS = R;
  const os = window.study;
  window.study = function (n, tab) {
    os(n, tab);
    if ((tab && tab !== "s") || !R[n]) return;
    const r = R[n], li = x => x.map(y => `<li>${esc(y)}</li>`).join("");
    $("app").insertAdjacentHTML("beforeend", `<details class="gd" open><summary><span class="gn">≠</span><span class="gt">Pembeda konsep, alur menjawab, kesalahan umum</span>${ic("chev", 13)}</summary><div class="gb cs"><h3>Konsep yang wajib dibedakan</h3><table><tr><th>Konsep</th><th>Ciri utama</th><th>Pembeda</th></tr>${r.t.map(x => `<tr><td><b>${esc(x[0])}</b></td><td>${esc(x[1])}</td><td>${esc(x[2])}</td></tr>`).join("")}</table><h3>Alur menentukan jawaban</h3><ol class="sumlist">${li(r.a)}</ol><h3>Kesalahan yang sering terjadi</h3><ul class="sumlist">${li(r.e)}</ul></div></details>`);
  };

  home();
})();


/* penjelasan.js — dimuat SETELAH app.js dan revisi-patch.js */
(function () {
  /* 1. Buang sisa istilah mata kuliah SIM dari penilai isian */
  ["business process", "proses bisnis", "complementary assets", "aset komplementer", "information", "informasi", "organizations", "organisasi", "management", "manajemen", "technology", "teknologi", "survival", "bertahan hidup", "responsibility", "tanggung jawab", "accountability", "akuntabilitas", "liability", "kewajiban", "ethics", "etika", "input", "processing", "pemrosesan", "output", "keluaran", "feedback", "umpan balik", "sociotechnical", "sosioloteknis", "economics", "ekonomi", "data"].forEach(k => delete SYNONYMS[k]);

  /* 2. Perjelas beberapa soal isian yang masih ambigu */
  const fq = (n, pre, txt) => { const x = DATA[n].isian.find(i => i[0].startsWith(pre)); if (x) x[0] = txt; };
  fq(4, "Heuristik biasanya didesain", "Heuristik biasanya didesain dengan memakai versi masalah yang aturannya dilonggarkan, disebut ... problem (satu kata Inggris).");
  fq(5, "Ordering MRV", "MRV membuat kegagalan ketahuan cepat sehingga disebut ... ordering (dua kata Inggris, mis. 'fail ...').");
  fq(3, "Problem-solving agent memandang", "Problem-solving agent memandang state sebagai satu kesatuan tanpa struktur internal. Representasi ini disebut ... (satu kata Inggris).");

  /* 3. Penjelasan untuk soal hitungan (cara menghitung) */
  const EX = [
    ["Nilai: UTS 80", "80×0,3 + 70×0,3 + 90×0,1 + 85×0,1 + 75×0,2 = 24 + 21 + 9 + 8,5 + 15 = 77,5."],
    ["Syarat hadir minimal", "80% × 14 = 11,2. Hadir 11 kali masih kurang dari 11,2, jadi dibulatkan ke atas menjadi 12."],
    ["agen NoOp 5 time step", "Dua kotak bersih × 1 poin × 5 step = 10. Diam tidak merugikan karena tidak ada penalti."],
    ["Agen bergerak Left/Right", "Tiap step: +2 poin (dua kotak bersih) − 1 (penalti gerak) = +1. Dikali 5 step = 5. Bandingkan dengan agen diam yang mendapat 10."],
    ["konfigurasi dirt", "Tiap kotak bersih/kotor: 2² = 4 konfigurasi dirt. Dikali 2 lokasi agen = 8 state."],
    ["kemungkinan percept", "Lokasi (A/B) × isi (Clean/Dirty) = 2 × 2 = 4 percept."],
    ["Pohon penuh b=2", "1 + 2 + 4 + 8 = 15 node (level 0 sampai 3)."],
    ["Pohon penuh b=3", "1 + 3 + 9 = 13 node (level 0 sampai 2)."],
    ["120 posisi", "Tiap dot sudah/belum dimakan = 2 pilihan, jadi 2³ = 8. Dikali 120 posisi = 960 state."],
    ["Biaya path termurah", "S–A–G = 2+6 = 8. S–B–G = 5+2 = 7. Termurah 7."],
    ["Node pertama yang diperluas setelah S", "Setelah S diperluas, fringe berisi A (g=2) dan B (g=5). UCS memilih g terkecil, yaitu A."],
    ["b=10 dan solusi", "O(b^s) = 10³ = 1000 node."],
    ["f(n) untuk g(n)=4", "f(n) = g(n) + h(n) = 4 + 3 = 7."],
    ["(g=2,h=4)", "f node 1 = 2+4 = 6; f node 2 = 3+2 = 5. A* memilih f terkecil, yaitu 5."],
    ["Biaya sebenarnya ke goal 4", "h=5 lebih besar dari biaya sebenarnya 4 (overestimate), jadi inadmissible. Admissible menuntut h ≤ h*."],
    ["Fringe: A (g=1, h=5)", "f(A) = 1+5 = 6, f(B) = 5+2 = 7. A* memilih A. Greedy hanya melihat h, jadi memilih B (h=2)."],
    ["Pada fringe yang sama", "Greedy hanya membandingkan h: h(B)=2 lebih kecil dari h(A)=5, jadi memilih B."],
    ["Map coloring 3 wilayah", "Warna pertama 3 pilihan, kedua 2, ketiga 1: 3 × 2 × 1 = 6 solusi."],
    ["4 variabel dengan domain", "Tiap variabel punya 3 pilihan: 3⁴ = 81 (rumus d^n)."],
    ["Australia 7 wilayah", "d^n = 3⁷ = 2187."],
    ["n=10, d=3", "n²d³ = 100 × 27 = 2700."],
    ["Domain NT awal", "WA=red, WA bertetangga dengan NT, sehingga red dicoret dari NT: {g,b} tersisa 2 nilai."],
    ["Tiga pilihan Boolean", "Tiap pit ada/tidak = 2 pilihan: 2³ = 8 model."],
    ["5 simbol", "n simbol memberi 2^n baris: 2⁵ = 32."],
    ["A ∨ B benar", "Dari 4 kombinasi, hanya F,F yang membuat A ∨ B salah. Jadi 3 model."],
    ["A ⇔ B benar", "⇔ benar bila kedua sisi sama: T,T dan F,F. Jadi 2 model."],
    ["Berapa pasangan", "3 objek untuk x × 3 objek untuk y = 9 pasangan."],
    ["Banyak objek x", "Yang mahasiswa sekaligus genius: Budi dan Ani. Cici bukan mahasiswa. Jadi 2."]
  ];

  /* 4. Pencari penjelasan otomatis dari materi (GUIDE) */
  const clean = s => String(s).replace(/\*\*/g, "").replace(/\s+/g, " ").trim();
  let POOL = null;
  function pool() {
    if (POOL) return POOL; POOL = [];
    Object.keys(GUIDE).forEach(n => GUIDE[n].forEach(g => [g[1], g[2] || ""].forEach(t =>
      clean(String(t).replace(/\n/g, ". ")).split(/(?<=[.!?])\s+/).forEach(s => { if (s.length > 25) POOL.push({ n, t: g[0], s }); }))));
    return POOL;
  }
  function find(q, ans) {
    const terms = [];
    if (ans) {
      const a = String(ans);
      [a, ...(a.match(/\(([^)]*)\)/g) || []).map(x => x.slice(1, -1)), a.replace(/\(.*\)/, "")].forEach(x => { x = x.trim().toLowerCase(); if (x.length >= 3) terms.push(x); });
    }
    const qw = [...new Set(clean(q).toLowerCase().match(/[a-z]{5,}/g) || [])];
    let best = null, bs = 0;
    pool().forEach(p => {
      const l = p.s.toLowerCase();
      let sc = terms.some(t => l.includes(t)) ? 4 : 0;
      sc += qw.filter(w => l.includes(w)).length;
      if (run && p.n === run.n) sc += 1;
      if (sc > bs) { bs = sc; best = p; }
    });
    return bs >= (ans ? 5 : 4) ? best : null;
  }
  function expHtml(q, ans) {
    const m = EX.find(e => q.includes(e[0]));
    if (m) return `<b>Cara memahaminya</b><br>${esc(m[1])}`;
    const f = find(q, ans);
    return f ? `<b>Konsep: ${esc(f.t)}</b><br>${esc(f.s)}` : `<b>Catatan</b><br>Jawaban: ${esc(ans)}. Buka Rangkuman bab ini untuk konsep terkait.`;
  }

  /* 5. Tampilkan penjelasan setelah soal diperiksa, baik benar maupun salah */
  function add() {
    if (!run || !run.cur.checked) return;
    const s = run.steps[run.idx], b = $("app").querySelector(".qbox");
    if (!b || b.querySelector(".xpl")) return;
    let h = "";
    if (s.t === "i") h = expHtml(s.q, s.a);
    else if (s.t === "m") {
      h = "<b>Pembahasan tiap pernyataan</b>" + s.g.items.map((it, i) => {
        const ok = run.cur.as[i] === it[1], f = find(it[0], it[1]);
        return `<div style="margin-top:8px"><b>${i + 1}. ${esc(it[1])}</b> ${ok ? "(kamu benar)" : "(kamu memilih: " + esc(run.cur.as[i] || "kosong") + ")"}<br>${f ? esc(f.s) : "Ciri pada pernyataan ini adalah definisi dari " + esc(it[1]) + "."}</div>`;
      }).join("");
    } else if (s.t === "b" && s.w.trim().length < 14) {
      const f = find(s.q, null);
      if (f) h = `<b>Konsep: ${esc(f.t)}</b><br>${esc(f.s)}`;
    } else if (s.t === "q" && run.cur.pick !== s.x.a) {
      const f = find(s.x.o[run.cur.pick], s.x.o[run.cur.pick]);
      if (f) h = `<b>Opsi yang kamu pilih (${esc(s.x.o[run.cur.pick])}) sebenarnya merujuk ke:</b><br>${esc(f.s)}`;
    }
    if (h) b.insertAdjacentHTML("beforeend", `<div class="model xpl" style="margin-top:14px">${h}</div>`);
  }
  ["drawM", "drawI", "drawB", "drawQ"].forEach(n => { const o = window[n]; window[n] = function () { o(); add(); }; });

  /* 6. Rangkuman terstruktur tampil duluan, rangkuman panjang lama dilipat */
  const os = window.study;
  window.study = function (n, tab) {
    os(n, tab);
    if (tab && tab !== "s") return;
    const blk = [...document.querySelectorAll(".gd")].find(d => d.textContent.includes("Pembeda konsep"));
    const gp = $("app").querySelector(".gprog");
    document.querySelectorAll(".gd").forEach(d => { d.open = false; });
    if (blk && gp) { gp.insertAdjacentElement("afterend", blk); blk.open = true; }
  };
  home();
})();


/* ===== AUDIT SOAL, PENELUSURAN ALGORITME, RANGKUMAN TERSTRUKTUR ===== */
(function () {
  const D = DATA;

  /* --- A. Audit Benar/Salah: pembahasan lengkap --- */
  const TFX = {
    "1.3": "Benar. Revolusi kognitif 1960-an memandang otak sebagai pemroses informasi, dari sinilah cognitive psychology lahir.",
    "1.4": "Benar. Prediksi Turing: pada tahun 2000 mesin punya peluang 30% mengelabui penguji awam selama 5 menit.",
    "1.5": "Benar. AlphaGo mengalahkan Ke Jie pada Mei 2017, tonggak AI di permainan Go.",
    "1.6": "Salah. Itu contoh bias: model belajar pola timpang dari data rekrutmen lama. Privasi menyangkut data pribadi tanpa persetujuan (kasus Lensa AI).",
    "1.7": "Benar. UNESCO (stakeholder antarpemerintah) mengadopsi kesepakatan global etika AI pada November 2021.",
    "1.9": "Benar. Brain imaging mengamati aktivitas otak saat bekerja; ini salah satu cara mempelajari cara manusia berpikir (thinking humanly).",
    "1.10": "Benar. Aristoteles mengkaji argumen dan proses berpikir yang benar, dasar pendekatan thinking rationally (laws of thought).",
    "2.0": "Benar. PEAS = Performance measure, Environment, Actuators, Sensors; dipakai untuk menggambarkan masalah agen.",
    "2.1": "Benar. Deterministik: tanpa unsur acak, state berikutnya ditentukan penuh oleh state sekarang dan aksi. Lawannya stochastic.",
    "2.3": "Benar. Itulah definisi agent: sensor untuk mempersepsi, actuator untuk bertindak.",
    "2.4": "Benar. Agent function memetakan seluruh riwayat persepsi (P*) ke aksi (A); ini pemetaan abstrak.",
    "2.5": "Benar. Agent program adalah kode konkret yang berjalan di physical architecture untuk mewujudkan agent function.",
    "2.7": "Benar. Empat penentu rasionalitas: performance measure, pengetahuan awal, aksi yang mungkin, percept sequence.",
    "2.9": "Benar. Episodic: tiap episode lepas dari episode lain. Lawannya sequential, saat keputusan sekarang memengaruhi berikutnya.",
    "2.10": "Benar. Semidynamic: dunia tidak berubah seiring waktu, tetapi skor kinerja agen ikut berubah.",
    "2.12": "Salah. Rem dan kemudi menggerakkan taksi, jadi itu actuator. Sensor yang mempersepsi, mis. kamera dan GPS.",
    "2.13": "Benar. Model-based reflex agent menyimpan state internal untuk bagian dunia yang tak teramati; simple reflex tidak.",
    "2.14": "Benar. Kata 'happy' dianggap kurang ilmiah, maka dipakai istilah utility untuk ukuran kepuasan agen.",
    "2.15": "Benar. Contoh performance measure vacuum: jumlah kotak bersih pada tiap time step.",
    "3.2": "Benar. UCS memakai priority queue; node dengan biaya kumulatif g(n) terkecil keluar lebih dulu.",
    "3.4": "Benar. Planning agent perlu model bagaimana dunia berubah akibat aksi, dan goal test untuk mengenali tujuan.",
    "3.5": "Benar. Empat komponen search problem: state space, successor function, start state, goal test.",
    "3.6": "Benar. Solusi berupa plan, yaitu rangkaian aksi dari start state sampai goal.",
    "3.8": "Benar. Satu node search tree mewakili seluruh path dari start, sehingga satu state bisa muncul berkali-kali.",
    "3.11": "Benar. BFS memperluas level demi level; solusi terdangkal di kedalaman s butuh waktu O(b^s).",
    "3.12": "Benar. Syaratnya biaya busur minimum positif dan biaya solusi berhingga; tanpa itu UCS bisa tidak selesai.",
    "3.13": "Benar. Level terdalam punya node paling banyak, jadi pengulangan level atas relatif murah.",
    "3.14": "Benar. Mencoba semua plan di dunia nyata berbahaya; agen mensimulasikannya di model dunia.",
    "3.17": "Benar. UCS meluas membentuk kontur biaya yang makin besar, ke segala arah dari start.",
    "3.18": "Benar. Algoritma search berbeda hanya pada strategi memilih node dari fringe (queue, stack, priority queue).",
    "4.0": "Benar. A* menjumlahkan g(n) (biaya dari start) dan h(n) (estimasi ke goal).",
    "4.3": "Benar. Heuristik h(n) mengestimasi kedekatan ke goal dan dirancang khusus untuk tiap masalah.",
    "4.4": "Benar. Pada pathing, jarak Manhattan atau Euclidean ke goal dipakai sebagai heuristik.",
    "4.6": "Benar. UCS memakai backward cost g(n); greedy memakai forward cost h(n).",
    "4.11": "Benar. UCS tidak tahu letak goal sehingga meluas ke segala arah; heuristik mengarahkan A* ke goal.",
    "4.13": "Benar. Greedy mengurutkan hanya dengan h(n), tanpa memperhitungkan biaya yang sudah ditempuh.",
    "4.15": "Benar. A* menggabungkan UCS (g) dan greedy (h): f(n) = g(n) + h(n).",
    "4.16": "Benar. Di goal sisa biaya sebenarnya 0, jadi h(goal) > 0 sudah overestimate. Admissible mensyaratkan h(goal)=0.",
    "5.3": "Benar. CSP adalah search problem khusus: state = assignment sebagian, goal test = semua constraint terpenuhi.",
    "5.4": "Benar. State CSP = assignment variabel Xi dengan nilai dari domain D; goal test berupa himpunan constraint.",
    "5.5": "Benar. CSP termasuk identification problem: yang dicari assignment akhir, bukan urutan langkahnya.",
    "5.7": "Benar. Unary constraint (mis. SA ≠ hijau) cukup menghapus nilai dari domain variabel itu.",
    "5.8": "Benar. Constraint graph biner: node = variabel, busur = constraint antara dua variabel.",
    "5.10": "Benar. Backtracking = DFS + satu variabel per langkah + mundur saat constraint dilanggar.",
    "5.12": "Salah. Bila domain X mengecil, nilai pada tetangga yang bergantung pada X bisa kehilangan pasangan, sehingga arc menuju X harus dicek ulang.",
    "5.13": "Benar. LCV memilih nilai yang paling sedikit menutup pilihan variabel lain, agar peluang menemukan solusi tetap besar.",
    "5.14": "Benar. SAT adalah CSP berdomain terbatas (benar/salah) yang NP-complete.",
    "5.16": "Benar. Arc consistency bisa dijalankan sebelum search untuk menyempitkan domain (preprocessor).",
    "5.18": "Benar. Tiap dari 4 kolom punya 4 pilihan baris: 4×4×4×4 = 4⁴ = 256 (rumus d^n).",
    "6.0": "Benar. Implikasi hanya salah pada baris P=T, Q=F; bila P salah, implikasi selalu benar.",
    "6.1": "Benar. Kalimat valid benar di semua model; contohnya A ∨ ¬A.",
    "6.3": "Benar. Knowledge base adalah himpunan kalimat dalam bahasa formal.",
    "6.4": "Benar. Pendekatan deklaratif: agen di-Tell pengetahuan, lalu di-Ask apa yang harus dilakukan.",
    "6.6": "Benar. Wumpus world: deterministic, static, discrete, single-agent, sequential, tetapi partially observable.",
    "6.7": "Benar. Glitter dirasakan jika dan hanya jika emas ada di kotak yang sama dengan agen.",
    "6.8": "Benar. Entailment: α benar di semua model tempat KB benar, sehingga M(KB) ⊆ M(α).",
    "6.9": "Benar. Sound: prosedur tidak 'berbohong', semua yang diturunkan memang di-entail KB.",
    "6.11": "Benar. Dasar pembuktian dengan kontradiksi: jika KB ∧ ¬α mustahil dipenuhi, α pasti mengikuti KB.",
    "6.12": "Benar. Deduction theorem menghubungkan entailment dengan validitas implikasi KB ⇒ α.",
    "6.13": "Benar. Truth table punya 2^n baris untuk n simbol, tumbuh eksponensial.",
    "6.15": "Benar. Knowledge level: apa yang diketahui agen; implementation level: bagaimana disimpan dan dihitung.",
    "6.16": "Benar. A ∨ ¬A selalu benar karena salah satu sisinya pasti benar.",
    "6.17": "Benar. Bikondisional setara dua implikasi bolak-balik: (S1 ⇒ S2) ∧ (S2 ⇒ S1).",
    "6.18": "Salah. 3 simbol memberi 2³ = 8 baris, bukan 6.",
    "6.19": "Benar. P=T dan Q=F adalah satu-satunya kasus yang membuat implikasi salah.",
    "6.20": "Salah. Dengan P=T, Q=F: ¬P ∨ Q = F ∨ F = salah (setara dengan P ⇒ Q yang juga salah).",
    "6.21": "Benar. ¬P1,2 = T dan (P2,2 ∨ P3,1) = T ∨ F = T, jadi T ∧ T = T.",
    "6.22": "Benar. Itulah modus ponens; benar di semua model sehingga valid.",
    "7.2": "Benar. Objek, relasi, dan quantifier membuat satu kalimat FOL mewakili banyak kalimat propositional.",
    "7.3": "Benar. Propositional logic hanya punya simbol fakta benar/salah, tanpa objek atau variabel.",
    "7.4": "Benar. Variabel FOL merujuk objek di dunia dan dapat dikuantifikasi dengan ∀ atau ∃.",
    "7.5": "Benar. Term = constant (Budi), variable (x), atau function symbol (Ibu(Budi)).",
    "7.7": "Benar. Predikat diterapkan pada term, mis. Saudara(a,b), membentuk kalimat atomik.",
    "7.10": "Benar. Quantifier sejenis boleh ditukar urutannya; quantifier campuran (∃∀ vs ∀∃) tidak.",
    "7.13": "Benar. Sepupu: orang tua x dan orang tua y bersaudara.",
    "7.14": "Benar. Constant symbol menunjuk satu objek tertentu: Fred, Japan, Bacterium39.",
    "7.15": "Benar. Variabel adalah placeholder yang dapat dikuantifikasi: x, y, a.",
    "7.16": "Benar. ∀ berpasangan dengan ⇒ ('semua yang memenuhi syarat ...'); ∃ berpasangan dengan ∧.",
    "7.17": "Benar. Dibanding propositional logic, FOL menambahkan objects dan relations.",
    "7.19": "Benar (rumusnya memang bernilai salah). ∀ dengan ∧ menuntut semua objek mahasiswa sekaligus Genius, sedangkan Cici bukan mahasiswa."
  };
  Object.entries(TFX).forEach(([k, w]) => { const [n, i] = k.split("."); D[n].tf[+i][2] = w; });
  D[2].tf[8][0] = "Skor: 1 poin per kotak bersih per time step, tanpa penalti gerak. Agen vacuum yang NoOp setelah semua kotak bersih tetap rasional.";
  D[2].tf[16][0] = "Skor: 1 poin per kotak bersih per time step, dengan penalti 1 poin tiap gerakan. Agen vacuum yang terus bergerak setelah semua kotak bersih bersifat irasional.";
  D[3].tf[16] = ["BFS optimal bila semua biaya aksi sama (mis. semuanya 1).", true, "Benar. BFS memperluas node terdangkal dulu; bila biaya tiap aksi sama, jumlah langkah terkecil berarti biaya terkecil."];
  D[4].tf[7] = ["A*: dua node di fringe sama-sama punya f(n)=8 dan soal tidak menyebut aturan seri. Maka satu node tertentu pasti diperluas berikutnya.", false, "Salah. Tanpa aturan seri (mis. FIFO atau alfabetis), kedua urutan sama-sama valid. Soal yang baik harus menyatakan aturan seri."];
  D[5].tf[17] = ["Bila semua arc pada suatu CSP sudah konsisten, CSP itu pasti punya solusi.", false, "Salah. Arc consistency hanya menyaring nilai yang pasti gagal. Contoh: tiga wilayah saling bertetangga dengan hanya 2 warna; semua arc konsisten tetapi solusi tidak ada."];

  /* --- B. Audit pilihan ganda: penjelasan tiap opsi (urutan opsi asli) --- */
  const MCQD = {
    "1.0": ["Ini masalah nyata: refleks menarik tangan dari api itu cerdas, tetapi bukan hasil penalaran logis.", "Ini masalah nyata: inferensi logis sering terlalu mahal dihitung (intractable).", "Ini masalah nyata: laws of thought mengabaikan masalah persepsi.", "KUNCI. Pernyataan ini keliru: logika justru ditulis dalam notasi formal, jadi ini bukan masalahnya."],
    "1.1": ["Benar: learning adalah komponen keempat, selain knowledge, reasoning, dan language understanding.", "Salah: robotika bukan salah satu dari empat komponen Turing.", "Salah: penyimpanan data bukan komponen kecerdasan menurut Turing.", "Salah: jaringan tidak termasuk empat komponen Turing."],
    "1.2": ["Termasuk cara: mengamati pikiran sendiri.", "Termasuk cara: eksperimen pada subjek manusia.", "Termasuk cara: mengamati otak saat bekerja.", "KUNCI (kecuali): Turing Test menilai perilaku, bukan cara manusia berpikir."],
    "2.0": ["Benar: papan terlihat penuh, hasil langkah pasti, dan ada dua pemain.", "Salah: papan terlihat penuh dan tidak ada unsur acak.", "Salah: hasil langkah pasti (bukan stochastic) dan ada lawan (bukan single-agent).", "Salah: seluruh papan terlihat (bukan partially observable) dan ada lawan."],
    "2.1": ["Salah: simple reflex hanya melihat persepsi sekarang, tanpa state internal.", "Benar: model-based menyimpan state internal tentang dunia.", "Salah: tanpa memori berarti tidak ada model internal.", "Salah: agen acak tidak memakai model dunia."],
    "2.2": ["Salah: sensor taksi tidak melihat semua, dan lalu lintas terus berubah.", "Benar: partial (sensor terbatas), stochastic (lalu lintas tak pasti), dynamic (dunia terus bergerak).", "Salah: sensor tidak melihat semua, lalu lintas tak pasti, dan keputusan saling berkaitan (bukan episodic).", "Salah: lalu lintas tidak deterministik dan dunia terus bergerak (bukan static)."],
    "3.0": ["Benar: DFS berulang dengan batas naik; memori seperti DFS, lengkap seperti BFS.", "Salah: greedy memakai heuristik dan tidak menjamin lengkap atau optimal.", "Salah: UCS lengkap tetapi memorinya besar seperti BFS.", "Salah: hill climbing adalah local search tanpa frontier."],
    "3.1": ["Salah: DFS menemukan solusi 'paling kiri', bukan termurah.", "Benar: memori DFS hanya O(bm).", "Salah: DFS bisa tersangkut loop.", "Salah: waktu DFS O(b^m) bisa lebih buruk dari O(b^d)."],
    "3.2": ["Benar: bila semua step cost sama, node dengan g(n) terkecil adalah node terdangkal.", "Salah: UCS tidak memakai heuristik.", "Salah: ukuran ruang state tidak mengubah urutan perluasan.", "Salah: jumlah cabang tidak menyamakan biaya; yang menentukan adalah step cost."],
    "4.0": ["Benar: h=0 membuat f(n)=g(n), persis UCS.", "Salah: DFS memakai stack tanpa memperhitungkan biaya.", "Salah: hill climbing tidak punya fringe.", "Salah: greedy hanya memakai h; bila h=0 ia tak punya dasar pemilihan dan tidak memakai g."],
    "4.1": ["Benar: tiap ubin salah tempat butuh minimal satu langkah, jadi tidak overestimate.", "Salah: dikali 10 membuat estimasi melebihi biaya sebenarnya.", "Salah: dua kali Manhattan bisa melebihi biaya sebenarnya.", "Salah: tidak berkaitan dengan jarak state ke goal."],
    "4.2": ["Benar: greedy hanya melihat h(n), sehingga bisa menuju goal yang bukan jalur termurah.", "Salah: fringe greedy tetap disimpan, memorinya tidak konstan.", "Salah: greedy justru hanya memakai heuristik.", "Salah: tidak ada batasan jenis graf."],
    "5.0": ["Benar: variabel dengan sisa nilai paling sedikit dipilih agar gagal cepat (fail-fast).", "Salah: itu kebalikan MRV.", "Salah: MRV bukan pemilihan acak.", "Salah: MRV melihat sisa nilai legal, bukan jumlah constraint."],
    "5.1": ["Benar: tiap kolom adalah satu variabel dan nilainya adalah baris ratu.", "Salah: warna petak tidak relevan pada n-queens.", "Salah: jumlah ratu tetap, bukan variabel.", "Salah: langkah bukan variabel pada formulasi CSP."],
    "6.0": ["Benar: De Morgan, negasi 'dan' menjadi 'atau' dari negasi masing-masing.", "Salah: ¬P ∧ ¬Q adalah hasil negasi dari P ∨ Q.", "Salah: tidak ada negasi sama sekali.", "Salah: implikasi bukan hasil negasi konjungsi."],
    "6.1": ["Benar: implikasi hanya salah bila P benar dan Q salah, sama dengan ¬P ∨ Q.", "Salah: P ∨ ¬Q setara dengan Q → P (konvers).", "Salah: konjungsi benar hanya bila P salah dan Q benar, jauh lebih sempit.", "Salah: konvers tidak setara dengan implikasi."],
    "6.2": ["Salah: 8 = 2³ untuk 3 simbol.", "Salah: bukan pangkat dua.", "Benar: 2⁴ = 16.", "Salah: 4 = 2² untuk 2 simbol."],
    "7.0": ["Benar: 'ada' memakai ∃ dengan ∧.", "Salah: dengan → rumus benar hanya karena ada objek yang bukan mahasiswa.", "Salah: ∀ dengan ∧ berarti semua objek mahasiswa dan cum laude.", "Salah: ini berarti semua yang cum laude adalah mahasiswa; tidak menyatakan ada."],
    "7.1": ["Benar: negasi 'semua' adalah 'ada yang tidak'.", "Salah: ∀x ¬P berarti tidak ada yang P, lebih kuat dari ¬∀x P.", "Salah: ∃x P tidak menyatakan ada yang tidak P.", "Salah: ¬∃x P setara dengan ∀x ¬P."],
    "7.2": ["Benar: fungsi memetakan objek ke objek.", "Salah: fungsi bukan nilai kebenaran.", "Salah: fungsi punya argumen, mis. Ibu(x).", "Salah: fungsi menerima variabel dan term lain juga."]
  };
  Object.entries(MCQD).forEach(([k, d]) => { const [n, i] = k.split("."); D[n].mcq[+i].d = d; });
  D[3].mcq[2].o[3] = "Branching factor 2";
  D[2].mcq[0].q = "Lingkungan permainan catur dua pemain bergantian (tanpa jam) paling tepat disebut ...";

  /* Pembahasan per opsi menggantikan penjelasan singkat lama bila tersedia */
  const oq = window.drawQ;
  window.drawQ = function () {
    oq();
    const s = run.steps[run.idx], c = run.cur; if (!c.checked || !s.x.d) return;
    const b = $("app").querySelector(".qbox"); if (!b) return;
    b.querySelectorAll(".xpl").forEach(e => e.remove());
    const lt = ["A", "B", "C", "D", "E"];
    b.insertAdjacentHTML("beforeend", `<div class="model xpl" style="margin-top:14px"><b>Mengapa tiap opsi benar atau salah</b>${s.shuf.map((oi, di) => `<div style="margin-top:8px"><b>${lt[di]}. ${esc(s.x.o[oi])}</b> ${oi === s.x.a ? "✓" : oi === c.pick ? "✗ (pilihanmu)" : "✗"}<br>${esc(s.x.d[oi])}</div>`).join("")}</div>`);
  };

  /* --- C. Penelusuran algoritme bertahap --- */
  const TG = {
    g1: { n: "Graf 1", E: { S: [["A", 2], ["B", 5]], A: [["G", 6]], B: [["G", 2]], G: [] }, H: { S: 6, A: 5, B: 2, G: 0 } },
    g2: { n: "Graf 2 (seri pada g)", E: { S: [["A", 1], ["B", 1]], A: [["G", 4]], B: [["C", 1]], C: [["G", 1]], G: [] }, H: { S: 3, A: 3, B: 2, C: 1, G: 0 } },
    g3: { n: "Graf 3 (seri pada f)", E: { S: [["A", 1], ["B", 2]], A: [["G", 5]], B: [["G", 3]], G: [] }, H: { S: 4, A: 3, B: 2, G: 0 } }
  };
  const RULE = { BFS: "Frontier FIFO: node yang paling lama menunggu dipilih.", DFS: "Frontier LIFO: node yang terakhir masuk dipilih. Successor dimasukkan terbalik agar yang alfabetis diperluas lebih dulu.", UCS: "Nilai = g(n). Nilai terkecil dipilih lebih dulu.", Greedy: "Nilai = h(n). Nilai terkecil dipilih lebih dulu.", "A*": "Nilai = f(n) = g(n) + h(n). Nilai terkecil dipilih lebih dulu." };
  const KL = { BFS: "Nilai (urutan masuk)", DFS: "Nilai (urutan masuk)", UCS: "g (nilai)", Greedy: "h (nilai)", "A*": "f = g + h (nilai)" };
  let TR = { g: "g2", a: "UCS", i: 0 };

  function trSim(gk, alg) {
    const g = TG[gk], E = g.E, H = g.H, fifo = alg === "BFS" || alg === "DFS";
    const keyf = n => alg === "UCS" ? n.g : alg === "Greedy" ? H[n.p[n.p.length - 1]] : alg === "A*" ? n.g + H[n.p[n.p.length - 1]] : alg === "BFS" ? n.q : -n.q;
    let fr = [{ p: ["S"], g: 0, q: 1 }], q = 2, closed = [], steps = [], ord = [];
    const snap = () => fr.map(n => ({ p: n.p.join("→"), g: n.g, h: H[n.p[n.p.length - 1]], v: fifo ? n.q : keyf(n), q: n.q }));
    while (fr.length) {
      const before = snap(), mn = Math.min(...fr.map(keyf));
      const tied = fr.filter(n => keyf(n) === mn).sort((a, b) => alg === "DFS" ? b.q - a.q : a.q - b.q);
      const ch = tied[0]; fr = fr.filter(n => n !== ch);
      const nm = ch.p[ch.p.length - 1];
      const st = { before, mn: fifo ? ch.q : mn, tied: tied.map(n => n.p.join("→")), tiedq: tied.map(n => n.q), ch: ch.p.join("→"), chq: ch.q, g: ch.g, nm, added: [], skipped: false, goal: false };
      if (closed.includes(nm)) { st.skipped = true; st.closed = [...closed]; st.after = snap(); steps.push(st); continue; }
      ord.push(nm);
      if (nm === "G") { st.goal = true; st.cost = ch.g; st.path = ch.p.join("→"); st.ord = [...ord]; st.closed = [...closed]; st.after = snap(); steps.push(st); break; }
      closed.push(nm);
      const ks = E[nm].slice(); if (alg === "DFS") ks.reverse();
      ks.forEach(([c, w]) => { if (closed.includes(c)) { st.added.push(c + " dilewati (sudah diperluas)"); return; } const n = { p: [...ch.p, c], g: ch.g + w, q: q++ }; fr.push(n); st.added.push(n.p.join("→") + " (g=" + n.g + ")"); });
      st.closed = [...closed]; st.after = snap(); steps.push(st);
    }
    return steps;
  }
  window.__trSim = trSim; /* dipakai untuk pengujian */

  const POS = { g1: { S: [45, 85], A: [170, 35], B: [170, 135], G: [295, 85] }, g3: { S: [45, 85], A: [170, 35], B: [170, 135], G: [295, 85] }, g2: { S: [40, 85], A: [135, 35], B: [135, 135], C: [230, 135], G: [320, 85] } };
  function gSvg(gk, cur, closed) {
    const g = TG[gk], P = POS[gk], R = 21; let e = "", nd = "";
    Object.entries(g.E).forEach(([a, l]) => l.forEach(([b, w]) => {
      const [x1, y1] = P[a], [x2, y2] = P[b], L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L;
      e += `<line x1="${x1 + ux * R}" y1="${y1 + uy * R}" x2="${x2 - ux * (R + 4)}" y2="${y2 - uy * (R + 4)}" marker-end="url(#ar)" style="stroke:var(--ink3);stroke-width:1.5;fill:none"/><text x="${(x1 + x2) / 2 - uy * 12}" y="${(y1 + y2) / 2 + ux * 12 + 4}" text-anchor="middle" style="font-size:12px;font-weight:800;fill:var(--ink)">${w}</text>`;
    }));
    Object.keys(P).forEach(k => {
      const [x, y] = P[k], isC = closed.includes(k), isCur = cur === k;
      const fill = isC ? "var(--blue-soft)" : "var(--card)", stroke = isCur ? "var(--ok)" : "var(--ink3)", sw = isCur ? 3.5 : 1.5;
      nd += `<circle cx="${x}" cy="${y}" r="${R}" style="fill:${fill};stroke:${stroke};stroke-width:${sw}"/><text x="${x}" y="${y - 2}" text-anchor="middle" style="font-size:14px;font-weight:800;fill:var(--ink)">${k}</text><text x="${x}" y="${y + 12}" text-anchor="middle" style="font-size:10px;fill:var(--ink3)">h=${g.H[k]}</text>`;
    });
    return `<svg viewBox="0 0 360 170" role="img" aria-label="Graf pencarian"><defs><marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" style="fill:var(--ink3)"/></marker></defs>${e}${nd}</svg>`;
  }
  window.trace = function () {
    run = null; dock(""); closeModal();
    const st = trSim(TR.g, TR.a), N = st.length, i = Math.min(TR.i, N);
    const g = TG[TR.g];
    const head = `<div class="exam-bar"><div class="exam-top"><button class="btn-exit" onclick="home()">${ic("arrowL", 13)} Kembali</button><div class="exam-label">Penelusuran Algoritme</div></div></div>`;
    const edges = Object.entries(g.E).flatMap(([a, l]) => l.map(([b, w]) => `${a}→${b} (${w})`)).join(", ");
    const hs = Object.entries(g.H).map(([k, v]) => `h(${k})=${v}`).join(", ");
    const tbl = s => `<table><tr><th>Path di frontier</th><th>g</th><th>h</th><th>${KL[TR.a]}</th><th>Masuk ke-</th></tr>${s.before.map(r => `<tr class="${r.q === s.chq ? "tr-sel" : s.tiedq.includes(r.q) ? "tr-tie" : ""}"><td>${r.p}</td><td>${r.g}</td><td>${r.h}</td><td>${r.v}</td><td>${r.q}</td></tr>`).join("")}</table>`;
    const box = (t, h) => `<div class="trs"><b class="h">${t}</b>${h}</div>`;
    const cs = i > 0 ? st[i - 1] : null, cur = cs && !cs.skipped ? cs.nm : null, clo = cs ? cs.closed : [];
    let body;
    if (i === 0) body = box("Kondisi awal", "Frontier berisi S (g=0). Belum ada node yang diperluas. Tekan Berikutnya untuk memulai.");
    else {
      const s = st[i - 1], opt = trSim(TR.g, "UCS").slice(-1)[0].cost;
      body = box("1. Kandidat di frontier", tbl(s) + `<p class="kbd" style="text-align:left">Baris hijau = dipilih; baris kuning = seri dengan yang dipilih.</p>`)
        + box("2. Aturan pemilihan", `${RULE[TR.a]} ${s.tied.length > 1 ? `Terjadi seri pada nilai ${s.mn}: ${s.tied.join(" dan ")}. Aturan seri: pilih yang lebih dulu masuk frontier, yaitu ${s.ch}.` : `Tidak ada seri; terpilih ${s.ch}.`}`)
        + box("3. Langkah yang dipilih", s.skipped ? `${s.ch} dikeluarkan, tetapi ${s.nm} sudah diperluas, jadi dilewati.` : s.goal ? `${s.ch} dikeluarkan dan ${s.nm} adalah goal. Berhenti (goal test dilakukan saat dequeue).` : `Perluas ${s.nm} lewat path ${s.ch} (g=${s.g}).`)
        + box("4. Perubahan frontier", `${s.added.length ? "Masuk: " + s.added.join("; ") + "." : "Tidak ada node baru."} Frontier sekarang: ${s.after.length ? s.after.map(r => r.p).join(", ") : "kosong"}. Sudah diperluas: ${s.closed.join(", ") || "-"}.`)
        + (s.goal ? `<div class="vdone">Hasil: path ${s.path}, biaya ${s.cost}. Urutan perluasan: ${s.ord.join(", ")}. ${s.cost === opt ? "Ini biaya termurah." : "Bukan yang termurah (UCS menemukan biaya " + opt + ")."}</div>` : "");
    }
    $("app").innerHTML = head + `<div class="qbox vz"><p class="qhint">${ic("info", 13)} Pilih graf dan algoritme, lalu telusuri satu langkah per satu langkah.</p>
      <div class="row">${Object.keys(TG).map(k => `<button class="${TR.g === k ? "on" : ""}" onclick="TRset('g','${k}')">${TG[k].n}</button>`).join("")}</div>
      <div class="row">${["BFS", "DFS", "UCS", "Greedy", "A*"].map(a => `<button class="${TR.a === a ? "on" : ""}" onclick="TRset('a','${a}')">${a}</button>`).join("")}</div>
      <div class="gviz">${gSvg(TR.g, cur, clo)}<p class="gleg">Lingkaran = state (angka <b>h</b> = estimasi ke goal). Angka di busur = biaya. Biru = sudah diperluas, tepi hijau = sedang dipilih.</p></div>
      <details class="rl"><summary>Aturan simulasi</summary><ul><li>Start S, goal G.</li><li>Successor dimasukkan urut alfabetis.</li><li>Kalau seri, pilih node yang lebih dulu masuk frontier.</li><li>State yang sudah diperluas tidak diperluas lagi.</li></ul></details>
      <p class="qnum" style="margin:8px 0">Langkah ${i} dari ${N}</p>${body}
      <div class="row"><button onclick="TRgo(-1)" ${i <= 0 ? "disabled" : ""}>Mundur</button><button class="${i >= N ? "" : "on"}" ${i >= N ? "disabled" : ""} onclick="TRgo(1)">${i >= N ? "Selesai ✓" : "Berikutnya"}</button><button onclick="TR_i(0)">Ulang</button><button onclick="TR_i(${N})">Ke hasil</button></div></div>`;
    window.scrollTo(0, 0);
  };
  window.TRset = (k, v) => { TR[k] = v; TR.i = 0; trace(); };
  window.TRgo = d => { TR.i = Math.max(0, TR.i + d); trace(); };
  window.TR_i = v => { TR.i = v; trace(); };

  /* Kartu "Penelusuran algoritme" di beranda */
  const oh = window.home;
  window.home = function () {
    oh();
    const t = document.querySelector(".tools3");
    if (t && !t.querySelector("[data-trace]")) t.insertAdjacentHTML("beforeend", `<button class="tc" data-trace="1" onclick="trace()"><span class="tc-ic">${ic("clip", 22)}</span><b>Penelusuran algoritme</b><small>Langkah demi langkah, termasuk aturan seri</small></button>`);
  };

  /* --- D. Rangkuman terstruktur sebagai tampilan utama; materi lama dilipat --- */
  const SS = {
    1: { inti: ["AI mempelajari entitas cerdas; ada 4 pendekatan: thinking/acting × humanly/rationally.", "Acting humanly diuji dengan Turing Test (1950); mesin butuh knowledge, reasoning, language understanding, learning.", "Thinking rationally (laws of thought) berbasis logika, tetapi punya 3 keterbatasan.", "Acting rationally: rational agent memaksimalkan pencapaian tujuan; ini pilihan buku acuan.", "Etika AI: bias, privasi, lingkungan, dengan banyak stakeholder."], rumus: [["Nilai akhir = Σ (nilai × bobot)", "nilai tiap komponen dikali bobotnya, lalu dijumlahkan", "80×0,3 + 70×0,3 + 90×0,1 + 85×0,1 + 75×0,2 = 77,5"], ["Hadir minimum = ⌈0,8 × jumlah pertemuan⌉", "⌈ ⌉ = pembulatan ke atas", "0,8 × 14 = 11,2 → 12 kali"]], e: ["Jangan tertukar: introspeksi, eksperimen psikologi, dan brain imaging mempelajari cara manusia berpikir; Turing Test menguji perilaku."] },
    2: { inti: ["Agent mempersepsi lewat sensor dan bertindak lewat actuator.", "Agent function f: P* → A memetakan riwayat persepsi ke aksi; agent program mewujudkannya.", "Rasional = memaksimalkan kinerja yang diharapkan, bukan sempurna.", "PEAS dan jenis environment dipakai untuk mendeskripsikan masalah.", "Lima tipe agen: simple reflex, model-based, goal-based, utility-based, learning."], rumus: [["f: P* → A", "P* = riwayat persepsi, A = aksi", "[A,Dirty] → Suck"], ["Jumlah state vacuum = 2^(jumlah kotak) × lokasi agen", "tiap kotak bersih atau kotor", "2² × 2 = 8"], ["Skor = Σ poin tiap time step − penalti", "bergantung pada performance measure yang ditetapkan", "2 kotak bersih, 5 step, +1 per kotak per step: 10"]], e: [] },
    3: { inti: ["Search problem: state space, successor function, start state, goal test; solusi berupa plan.", "State space graph: tiap state sekali; search tree: tiap node = path utuh.", "BFS (FIFO) dan DFS (LIFO) berbeda pada urutan perluasan, memori, dan optimalitas.", "UCS memakai priority queue berdasar g(n); sama dengan BFS bila semua biaya sama.", "IDS = DFS berulang dengan batas kedalaman naik."], rumus: [["Node pohon penuh = 1 + b + b² + … + b^m", "b = branching factor, m = kedalaman maksimum", "b=3, m=2: 1+3+9 = 13"], ["BFS: waktu dan ruang O(b^s)", "s = kedalaman solusi terdangkal", "b=10, s=3: 1000 node"], ["DFS: waktu O(b^m), ruang O(bm)", "m = kedalaman maksimum", "b=2, m=3: ruang sekitar 6 node"], ["State eat-all-dots = posisi × 2^(jumlah dot)", "tiap dot sudah atau belum dimakan", "120 × 2³ = 960"]], e: [] },
    4: { inti: ["Heuristik h(n) mengestimasi jarak state n ke goal.", "UCS: g(n); Greedy: h(n); A*: f(n) = g(n) + h(n).", "A* berhenti saat goal di-dequeue, bukan di-enqueue.", "Heuristik admissible (tidak overestimate) menjaga A* tetap optimal.", "Heuristik dirancang lewat relaxed problem."], rumus: [["f(n) = g(n) + h(n)", "g = biaya dari start ke n, h = estimasi n ke goal", "g=4, h=3 → f=7"], ["Admissible: 0 ≤ h(n) ≤ h*(n)", "h* = biaya sebenarnya ke goal terdekat", "h*=6: h=5 boleh, h=9 tidak"], ["Aturan seri (wajib dinyatakan)", "bila nilai sama, pakai aturan di soal, mis. FIFO", "f(P)=f(Q)=8, P masuk lebih dulu → P"]], e: [] },
    5: { inti: ["CSP = variabel, domain, constraint; yang dicari assignment akhir, bukan path.", "Backtracking = DFS + satu variabel per langkah + cek constraint sambil jalan.", "Filtering: forward checking dan arc consistency.", "Ordering: MRV (memilih variabel) dan LCV (memilih nilai).", "Struktur graph, mis. subproblem independen, mempercepat pencarian."], rumus: [["Complete assignment tanpa constraint = d^n", "d = ukuran domain, n = jumlah variabel", "3⁷ = 2187"], ["Arc consistency O(n²d³)", "n variabel, d ukuran domain", "n=10, d=3: 100 × 27 = 2700"], ["Arc X→Y konsisten", "tiap x di tail punya minimal satu y di head yang cocok", "X > Y, Y ∈ {1,2}: hapus x=1 dari X"]], e: [] },
    6: { inti: ["Knowledge base = kalimat formal; agen memakai Tell dan Ask.", "Entailment: KB ⊨ α bila α benar di semua model tempat KB benar.", "Sound = hanya menurunkan yang ter-entail; complete = menurunkan semuanya.", "Valid, satisfiable, dan unsatisfiable menggolongkan kalimat.", "Truth table eksponensial; propositional logic kurang ekspresif sehingga lahir FOL."], rumus: [["Baris truth table = 2^n", "n = jumlah simbol", "3 simbol → 8 baris"], ["P ⇒ Q ≡ ¬P ∨ Q", "salah hanya bila P=T dan Q=F", "P=T, Q=F → salah"], ["¬(P ∧ Q) ≡ ¬P ∨ ¬Q", "De Morgan", "¬(A ∧ B) benar saat A=F"], ["KB ⊨ α ⇔ (KB ∧ ¬α) unsatisfiable", "dasar pembuktian dengan kontradiksi", "KB ∧ ¬α mustahil dipenuhi → α pasti mengikuti"]], e: [] },
    7: { inti: ["FOL menambah objek, relasi, dan quantifier dibanding propositional logic.", "Term: constant, variable, function; predicate menghasilkan benar/salah.", "∀ berpasangan dengan ⇒; ∃ berpasangan dengan ∧.", "Urutan quantifier campuran mengubah makna.", "Negasi quantifier dan ekuivalensi dipakai untuk menyederhanakan."], rumus: [["∀x (P(x) ⇒ Q(x))", "semua yang P juga Q", "Semua mahasiswa genius"], ["∃x (P(x) ∧ Q(x))", "ada yang P sekaligus Q", "Ada mahasiswa yang pintar"], ["¬∀x P ≡ ∃x ¬P ; ¬∃x P ≡ ∀x ¬P", "negasi quantifier", "Tidak semua lulus ≡ ada yang tidak lulus"], ["Cek ∀x∀y pada n objek", "n × n pasangan", "3 objek → 9 pasangan"]], e: [] }
  };

  /* --- E. Flashcard konsep (recall materi), bukan soal --- */
  function cardsFor(n) {
    const X = SS[n], R = window.RS && window.RS[n], G = GUIDE[n] || [], out = [];
    G.forEach(g => out.push(["Jelaskan dengan kata-katamu:\n**" + g[0] + "**", g[1] + (g[2] ? "\n\n**Contoh:** " + g[2] : ""), "Konsep"]));
    if (R) R.t.forEach(r => out.push(["**" + r[0] + "**\nApa ciri utamanya, dan apa yang membedakannya?", "**Ciri:** " + r[1] + "\n**Pembeda:** " + r[2], "Pembeda konsep"]));
    if (X) X.rumus.forEach(r => out.push(["Apa arti simbol dan contoh pemakaian:\n**" + r[0] + "**", r[1] + "\n\n**Contoh:** " + r[2], "Rumus"]));
    return out;
  }
  window.fc = function () {
    const k = FC.cards[FC.i], back = FC.f, txt = back ? k[1] : k[0], long = back && String(txt).length > 120;
    $("app").innerHTML = FC.head + `<div class="qnum" style="text-align:center;margin-bottom:8px">${FC.i + 1} / ${FC.cards.length}${k[2] ? " · " + esc(k[2]) : ""}</div><div class="fcard ${back ? "back" : ""}" onclick="FC.f=!FC.f;fc()"><small>${back ? "Jawaban" : "Ketuk untuk membalik"}</small><p style="${long ? "width:100%;text-align:left;font-size:.98rem;font-weight:500;line-height:1.65" : ""}">${fmtG(txt)}</p></div>`;
    dock(`<button class="btn-s" onclick="fcGo(-1)">${ic("arrowL", 13)} Sebelumnya</button><button class="btn-p" onclick="fcGo(1)">Berikutnya ${ic("arrow", 15)}</button>`);
  };

  const os2 = window.study;
  window.study = function (n, tab) {
    os2(n, tab);
    if (tab === "f") { const cs = cardsFor(n); if (cs.length) { FC.cards = cs; FC.i = 0; FC.f = false; fc(); } return; }
    if (tab && tab !== "s") return;
    const X = SS[n], R = window.RS && window.RS[n]; if (!X || !R) return;
    const app = $("app"), head = app.firstElementChild.outerHTML, G = GUIDE[n] || [];
    const rd = (S.read || {}), cnt = G.filter((_, i) => rd[n + "-" + i]).length;
    const ul = (x, t) => `<${t || "ul"} class="sumlist">${x.map(y => `<li>${esc(y)}</li>`).join("")}</${t || "ul"}>`;
    const detail = G.map((g, i) => `<details class="gd"><summary><span class="gn ${rd[n + "-" + i] ? "dn" : ""}" id="gn${i}">${rd[n + "-" + i] ? "✓" : i + 1}</span><span class="gt">${esc(g[0])}</span>${ic("chev", 13)}</summary><div class="gb">${gBody(g[1])}${g[2] ? `<div class="gx"><b>Contoh</b>${fmtG(g[2])}</div>` : ""}<label class="rdl"><input type="checkbox" ${rd[n + "-" + i] ? "checked" : ""} onchange="markRead('${n}',${i},this.checked,${G.length})"> Saya sudah paham konsep ini</label></div></details>`).join("");
    app.innerHTML = head + `<div class="qbox cs">
      <h3>A. Inti bab</h3>${ul(X.inti)}
      <h3>B. Konsep yang wajib dibedakan</h3><table><tr><th>Konsep</th><th>Ciri utama</th><th>Pembeda</th></tr>${R.t.map(r => `<tr><td><b>${esc(r[0])}</b></td><td>${esc(r[1])}</td><td>${esc(r[2])}</td></tr>`).join("")}</table>
      <h3>C. Cara menentukan jawaban</h3>${ul(R.a, "ol")}
      <h3>D. Rumus dan aturan penting</h3><table><tr><th>Rumus</th><th>Arti simbol / kondisi</th><th>Contoh</th></tr>${X.rumus.map(r => `<tr><td><b>${esc(r[0])}</b></td><td>${esc(r[1])}</td><td>${esc(r[2])}</td></tr>`).join("")}</table>
      <h3>E. Kesalahan yang sering terjadi</h3>${ul([...R.e, ...X.e])}
      <h3>F. Mini recap</h3>${ul(D[n].sum.slice(0, 5))}
    </div><details class="gd"><summary><span class="gn">+</span><span class="gt">Penjelasan rinci per konsep (materi lengkap)</span>${ic("chev", 13)}</summary><div class="gb"><div class="gprog-t"><b id="gpt">${cnt} dari ${G.length} konsep sudah dipahami</b></div><div class="pbar"><i id="gpb" style="width:${G.length ? cnt / G.length * 100 : 0}%"></i></div><div style="height:10px"></div>${detail}</div></details>`;
    window.scrollTo(0, 0);
  };
  home();
})();

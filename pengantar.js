/* pengantar.js: loading page, pilihan awal, dan bab Pengantar "Bekal dari Nol". Dimuat SETELAH app.js
   Versi 2: materi lebih dalam, tiap modul punya bagian "Lebih dalam" dan 2-3 latihan (dasar + menengah). */
(function () {
  const f = s => esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
  const KEY = "aiquiz-pengantar-v2";
  let P = { q: {} };
  try { P = Object.assign(P, JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) { }
  if (!P.q) P.q = {};
  const sv = () => { try { localStorage.setItem(KEY, JSON.stringify(P)); } catch (e) { } };
  const nrm = s => String(s).toLowerCase().replace(/[\s.]/g, "");

  /* Struktur modul:
     t judul | u dipakai di | m = array paragraf materi | a analogi | c contoh (teks mono) | d = array paragraf "lebih dalam"
     j = array pasangan [salah, benar] | k ingat ini
     qs = array soal: l (0 dasar, 1 menengah), q teks; pilihan ganda {o, a} atau isian {i, h, jaw}; e penjelasan */
  const M = [
    {
      t: "Peta Besar: apa yang dipelajari", u: "Seluruh bab",
      m: [
        "Seluruh mata kuliah ini menjawab satu pertanyaan: bagaimana membuat program yang bisa memutuskan sendiri apa yang harus dilakukan? Program seperti itu disebut **agent**. Agent punya sensor untuk melihat keadaan, aktuator untuk bertindak, dan di antaranya ada \"otak\" yang memilih tindakan.",
        "Otaknya dibangun dari tiga keahlian. **Search**: kamu tahu posisimu dan tujuanmu, tapi belum tahu langkahnya, jadi agent mencoba-coba urutan langkah di kepalanya sampai ketemu yang sampai. **CSP** (Constraint Satisfaction Problem): tidak ada urutan langkah, yang dicari adalah isi untuk tiap kotak kosong supaya semua aturan terpenuhi. **Logika**: agent punya sekumpulan fakta, lalu bertanya \"dari fakta ini, apa yang pasti benar?\"",
        "Cara cepat membedakannya lewat bentuk jawaban. Kalau jawabannya berupa **rute** (S lalu A lalu G), itu Search. Kalau jawabannya **tabel isian** (A = merah, B = hijau), itu CSP. Kalau jawabannya **ya atau tidak** (\"apakah X pasti benar?\"), itu Logika."
      ],
      a: "Search itu mencari jalan keluar labirin. CSP itu mengisi teka-teki silang atau Sudoku. Logika itu detektif yang menunjuk pelaku dari petunjuk yang ada, tanpa menebak.",
      c: `Search  -> Bab 3 dan 4   jawaban: urutan aksi
CSP     -> Bab 5         jawaban: nilai tiap variabel
Logika  -> Bab 6 dan 7   jawaban: benar / salah / pasti

Urutan materi:
Bekal > Pengantar AI > Agent > Search > Informed Search > CSP > Logika > FOL`,
      d: [
        "Satu masalah sering bisa dimodelkan dengan lebih dari satu cara. Ambil contoh mewarnai peta supaya wilayah bertetangga beda warna. Sebagai **Search**: state = peta yang sudah sebagian diwarnai, aksi = mewarnai satu wilayah. Sebagai **CSP**: variabel = wilayah, domain = daftar warna, constraint = tetangga tidak boleh sama. Sebagai **Logika**: tiap kalimat \"wilayah X berwarna Y\" jadi satu proposisi.",
        "Hasil akhirnya bisa sama. Bedanya ada di efisiensi. Search murni memperlakukan state sebagai kotak hitam: ia hanya tahu \"state ini goal atau bukan\". CSP membuka kotak itu dan memakai struktur aturannya, jadi bisa memangkas banyak kemungkinan lebih awal. Itulah alasan CSP punya bab sendiri."
      ],
      j: [
        ["Mengira ketiganya topik yang terpisah.", "Ketiganya cara agent memutuskan tindakan, dan satu masalah sering bisa dimodelkan dengan ketiganya."],
        ["Mengira agent harus pintar seperti manusia.", "Agent cukup apa saja yang mengindera lalu bertindak. Termostat pun agent sederhana."]
      ],
      qs: [
        { l: 0, q: "Agent mencoba jalur labirin di kepalanya sebelum melangkah. Itu keahlian apa?", o: ["CSP", "Search", "Logika", "Sensor"], a: 1, e: "Mencari urutan aksi menuju tujuan adalah Search. CSP mengisi variabel, Logika menyimpulkan fakta." },
        { l: 1, q: "Lima mata kuliah harus dimasukkan ke 3 slot waktu ujian, dengan aturan: dua mata kuliah yang punya mahasiswa sama tidak boleh satu slot. Ini paling cocok dimodelkan sebagai ...", o: ["Search", "CSP", "Logika", "Tidak bisa dimodelkan"], a: 1, e: "Variabel = mata kuliah, domain = 3 slot, constraint = tidak boleh satu slot bila bentrok. Yang dicari adalah isian, bukan rute." },
        { l: 1, q: "KB: \"Jika hujan maka jalan basah.\" Diketahui jalan tidak basah. Apa yang pasti benar?", o: ["Hujan", "Tidak hujan", "Jalan basah", "Tidak bisa disimpulkan"], a: 1, e: "Kalau hujan, jalan pasti basah. Jalan tidak basah, jadi hujan tidak mungkin terjadi. Penarikan kesimpulan seperti ini adalah ranah Logika." }
      ],
      k: "Search = urutan aksi, CSP = isi variabel, Logika = simpulkan fakta."
    },

    {
      t: "Stack (LIFO) dan Queue (FIFO)", u: "DFS, BFS",
      m: [
        "Stack dan queue sama-sama tempat menyimpan data yang antre. Bedanya hanya satu: **siapa yang dikeluarkan duluan**. Dua operasi dasarnya adalah memasukkan dan mengeluarkan.",
        "**Stack** itu **LIFO** (Last In, First Out). Yang terakhir masuk, keluar paling dulu. Pintunya cuma satu, yaitu bagian atas, jadi masuk dan keluar lewat tempat yang sama.",
        "**Queue** itu **FIFO** (First In, First Out). Yang pertama masuk, keluar paling dulu. Masuk dari belakang, keluar dari depan."
      ],
      a: "Stack seperti tumpukan piring: kamu ambil yang paling atas, piring di dasar baru kebagian paling akhir. Tombol undo di editor teks juga stack, karena yang dibatalkan duluan adalah ketikan terakhir. Queue seperti antrean loket: yang datang duluan dilayani duluan.",
      c: `Operasi: masuk A, masuk B, masuk C, keluar, keluar

STACK : [A] -> [A,B] -> [A,B,C] -> keluar C -> keluar B   sisa [A]
QUEUE : [A] -> [A,B] -> [A,B,C] -> keluar A -> keluar B   sisa [C]`,
      d: [
        "Kenapa ini penting untuk Search: **DFS dan BFS sama persis, kecuali wadahnya**. Setiap kali sebuah node diperiksa, anak-anaknya dimasukkan ke wadah. Kalau wadahnya stack, node yang baru saja ditemukan (paling dalam) diambil lagi duluan, jadi pencarian terus menyelam. Kalau wadahnya queue, node yang sudah lama menunggu (paling dangkal) diambil duluan, jadi pencarian menyebar level demi level.",
        "Satu jebakan yang sering bikin salah di ujian adalah **urutan memasukkan anak**. Misalnya anak A dan B, dan kamu ingin A diperiksa duluan. Di queue, masukkan A lalu B. Di stack, masukkan B lalu A, karena yang terakhir masuk akan keluar duluan."
      ],
      j: [
        ["Membalik LIFO dan FIFO.", "Stack: yang paling akhir masuk keluar lebih dulu. Queue: yang paling awal masuk keluar lebih dulu."],
        ["Mengira stack dan queue itu algoritma pencarian.", "Keduanya hanya wadah. Algoritmanya (DFS atau BFS) ditentukan oleh wadah yang dipilih."]
      ],
      qs: [
        { l: 0, q: "P, Q, R, S masuk stack berurutan, lalu satu diambil. Siapa yang keluar?", o: ["P", "Q", "R", "S"], a: 3, e: "LIFO: S masuk terakhir, jadi keluar duluan. Jawaban P muncul kalau tertukar dengan queue." },
        { l: 1, q: "Stack kosong. Operasi berurutan: masuk 1, masuk 2, keluar, masuk 3, masuk 4, keluar, keluar. Angka apa yang tersisa di stack?", i: ["1"], jaw: "1", h: "Catat isi stack setelah tiap operasi. Ingat, yang keluar selalu yang paling atas.", e: "[1] > [1,2] > keluar 2 > [1] > [1,3] > [1,3,4] > keluar 4 > keluar 3 > sisa [1]." }
      ],
      k: "DFS = Stack, BFS = Queue. Di stack, masukkan anak dari kanan ke kiri agar yang kiri keluar duluan."
    },

    {
      t: "Priority queue dan tie-breaker", u: "UCS, Greedy, A*",
      m: [
        "**Priority queue** adalah antrean yang tidak peduli siapa datang duluan. Setiap item punya angka prioritas, dan yang dikeluarkan selalu yang angkanya **terkecil**. Di mata kuliah ini, kecil berarti didahulukan.",
        "Masalah muncul kalau dua item angkanya sama. Di sinilah **tie-breaker** dipakai, yaitu aturan tambahan untuk memutus seri. Yang umum: FIFO (yang masuk duluan keluar duluan) atau urut abjad. Kalau soal tidak menyebutkan, tulis sendiri aturan yang kamu pakai.",
        "Yang sering terlupa: urutan **tidak diatur sekali di awal**. Setiap kali ada item baru masuk, item itu bisa langsung melompati semua yang sudah menunggu kalau angkanya lebih kecil."
      ],
      a: "Seperti UGD rumah sakit. Pasien yang paling gawat dilayani duluan, bukan yang datang pertama. Kalau dua pasien sama gawatnya, barulah dilihat siapa yang datang lebih dulu.",
      c: `masuk  A(4), C(4), B(1)
keluar -> B(1)
masuk  D(2)               <- datang belakangan, tapi 2 < 4
keluar -> D(2)
keluar -> A(4)            <- seri dengan C, A masuk duluan (FIFO)
keluar -> C(4)`,
      d: [
        "Di Search, angka prioritas itu **dihitung**, bukan diberikan. UCS memakai g(n), Greedy memakai h(n), A* memakai g(n) + h(n). Mesinnya sama, hanya rumus angkanya yang berbeda.",
        "Satu node bisa masuk fringe lebih dari sekali lewat jalur berbeda, dengan angka berbeda. Yang angkanya lebih kecil akan keluar duluan. Tie-breaker juga sering menentukan **urutan expand**, dan di soal ujian yang dinilai biasanya urutan itu, bukan hanya jalur akhirnya."
      ],
      j: [
        ["Mengira angka besar berarti prioritas utama.", "Di sini angka kecil dilayani dulu."],
        ["Tidak menulis tie-breaker, urutan seri ditebak saja.", "Tulis aturannya, misalnya \"seri: FIFO\". Dengan begitu jawabanmu bisa diperiksa dan konsisten."]
      ],
      qs: [
        { l: 0, q: "A(4), B(1), C(4), D(2) dengan tie-breaker FIFO. Tulis urutan keluar, pisahkan koma.", i: ["b,d,a,c"], jaw: "B, D, A, C", h: "Urutkan dari angka terkecil. A dan C seri, A masuk lebih dulu.", e: "B(1), D(2), lalu A dan C seri di 4, sehingga FIFO memberi A kemudian C." },
        { l: 1, q: "Fringe berisi C(3), A(3), D(1), B(3). Tie-breaker: urut abjad. Tulis tiga node pertama yang keluar, pisahkan koma.", i: ["d,a,b"], jaw: "D, A, B", h: "D paling kecil. Sisanya seri di angka 3, jadi urut abjad.", e: "D(1) keluar dulu. A, B, C seri di 3, abjad memberi A lalu B (C menyusul kemudian)." },
        { l: 1, q: "Priority queue kosong. Masuk X(5), masuk Y(2), keluar satu. Lalu masuk Z(1), keluar satu lagi. Node apa yang keluar pada pengeluaran kedua?", o: ["X", "Y", "Z", "Tidak bisa ditentukan"], a: 2, e: "Pengeluaran pertama: Y(2). Lalu Z(1) masuk dan angkanya lebih kecil dari X(5), jadi Z langsung keluar. Item baru bisa melompati antrean." }
      ],
      k: "Priority queue: terkecil dulu, seri pakai tie-breaker, selalu ditulis."
    },

    {
      t: "Jebakan: tiga wadah, tiga cara memilih", u: "Search",
      m: [
        "Semua algoritma search memakai kerangka yang sama: ada **fringe** (daftar node yang menunggu diperiksa), ambil satu, cek apakah goal, kalau bukan masukkan anak-anaknya. Yang membedakan satu algoritma dengan yang lain hanya satu langkah: **node mana yang diambil**.",
        "Jawabannya ditentukan oleh wadah fringe. **Stack** menghasilkan DFS. **Queue** menghasilkan BFS. **Priority queue** menghasilkan UCS (prioritas g), Greedy (prioritas h), atau A* (prioritas g + h).",
        "Mengingatnya lewat gaya jalannya: stack itu **menyelam**, queue itu **menyebar**, priority queue itu **mengikuti angka**."
      ],
      a: "Sama-sama membongkar kardus. Dari tumpukan, kamu selalu ambil kardus paling atas. Dari antrean, kamu ambil yang paling lama menunggu. Dari UGD, kamu ambil yang paling darurat.",
      c: `DFS            Stack           terakhir masuk, menyelam
BFS            Queue           pertama masuk, menyebar
UCS            Priority queue  g(n) terkecil
Greedy         Priority queue  h(n) terkecil
A*             Priority queue  g(n)+h(n) terkecil`,
      d: [
        "Dari wadah ini kamu bisa menebak sifat algoritmanya. BFS menyapu level demi level, jadi solusi pertama yang ia temukan pasti punya **jumlah langkah paling sedikit**. UCS mengikuti g(n), jadi solusi pertama yang ia ambil punya **cost paling kecil**. Kedua hal ini sama hanya kalau semua cost arc sama (BFS sebenarnya UCS dengan semua cost = 1).",
        "DFS tidak punya jaminan apa-apa soal ini. Ia mengembalikan solusi **pertama yang kebetulan ia temui** saat menyelam, bisa saja jalur paling panjang dan paling mahal."
      ],
      j: [
        ["Menyebut DFS memakai queue.", "DFS pakai stack, BFS pakai queue."],
        ["Mengira BFS selalu menemukan jalur dengan cost termurah.", "BFS menemukan jalur dengan langkah paling sedikit. Untuk cost termurah pada arc yang cost-nya berbeda, pakai UCS."]
      ],
      qs: [
        { l: 0, q: "Pasangan algoritma dan wadah yang benar adalah ...", o: ["DFS-Queue, BFS-Stack", "DFS-Stack, BFS-Queue", "UCS-Stack, DFS-Priority queue", "BFS-Priority queue, UCS-Queue"], a: 1, e: "DFS memakai stack (LIFO), BFS memakai queue (FIFO). Opsi lain menukar wadah." },
        { l: 1, q: "Dari S ke G ada dua jalur: langsung S→G (1 langkah, cost 10), dan S→A→G (2 langkah, cost 2 + 3 = 5). Algoritma mana yang mengembalikan jalur langsung S→G?", o: ["BFS", "UCS", "BFS dan UCS", "Tidak satu pun"], a: 0, e: "BFS mencari langkah paling sedikit, jadi memilih S→G. UCS mencari cost terkecil, jadi memilih S→A→G dengan cost 5." }
      ],
      k: "Wadah menentukan urutan penjelajahan. BFS = langkah paling sedikit, UCS = cost paling kecil."
    },

    {
      t: "Graf: kosakata dasar", u: "Search",
      m: [
        "**Graf** adalah kumpulan **node** yang dihubungkan oleh **arc** (panah). Dalam Search, node bukan sekadar tempat. Node adalah **state**, yaitu potret kondisi dunia pada satu saat. Arc adalah **aksi** yang mengubah satu state menjadi state lain, dan tiap aksi punya **cost** (ongkos).",
        "**Path cost** adalah jumlah cost semua arc di sepanjang satu jalur. Perhatikan bahwa sebuah jalur punya dua ukuran yang berbeda: **banyak langkah** dan **path cost**. Jalur dengan langkah paling sedikit belum tentu yang paling murah.",
        "Dua istilah lain: **self-loop** adalah arc dari sebuah node ke dirinya sendiri, dan **cycle** adalah jalur yang kembali ke node awalnya. Arc itu **berarah**: panah A→B tidak otomatis berarti kamu bisa jalan B→A."
      ],
      a: "Peta tol. Gerbang tol adalah node, ruas jalan adalah arc, dan tarifnya adalah cost. Rute lewat tol langsung bisa cuma satu ruas tapi mahal, sedangkan rute lewat tiga ruas kecil bisa jauh lebih murah.",
      c: `S -(2)-> B -(5)-> C -(10)-> G    langkah 3, path cost = 2 + 5 + 10 = 17
S -(30)-> G                      langkah 1, path cost = 30

jalur kedua paling pendek, tapi bukan yang paling murah`,
      d: [
        "Karena arc berarah dan boleh membentuk cycle, ada bahaya yang disebut **loop**. Kalau ada S→A dan A→S, maka jalur S-A-S-A-S-... bisa diperpanjang tanpa batas dan pencarian tidak pernah selesai. Karena itulah ada versi pencarian yang mencatat state yang sudah pernah diperiksa (di bab berikutnya).",
        "Soal juga biasanya mengasumsikan cost arc **positif**. Kalau ada cycle bercost nol, algoritma bisa berputar tanpa cost bertambah, dan jaminan optimal UCS jadi hilang."
      ],
      j: [
        ["Menghitung path cost dari jumlah node atau dari cost arc terakhir saja.", "Jumlahkan cost semua arc di jalur."],
        ["Menganggap arc dua arah padahal gambarnya satu panah.", "Satu panah artinya hanya boleh dilewati searah panah."]
      ],
      qs: [
        { l: 0, q: "Jalur S→B→C→G memiliki cost arc 2, 5, 10. Berapa path cost-nya?", o: ["3", "10", "17", "27"], a: 2, e: "2 + 5 + 10 = 17. Angka 3 adalah jumlah langkah, 10 hanya cost arc terakhir." },
        { l: 1, q: "Arc: S→A (1), S→B (4), A→B (2), A→G (8), B→G (3). Berapa path cost jalur termurah dari S ke G?", i: ["6"], jaw: "6", h: "Tulis semua jalur dari S ke G, hitung cost masing-masing.", e: "S-A-B-G = 1+2+3 = 6. Lainnya: S-B-G = 7 dan S-A-G = 9. Yang termurah 6, padahal bukan yang paling sedikit langkah." }
      ],
      k: "Path cost = jumlah cost arc di jalur. Langkah paling sedikit tidak sama dengan cost paling kecil."
    },

    {
      t: "Pohon: root, leaf, depth, b, m, s", u: "Search",
      m: [
        "**Pohon** adalah graf tanpa cycle yang punya satu node puncak, yaitu **root**. Dalam Search, root adalah state awal. Node di bawah node lain disebut **anak** (child), dan node yang tidak punya anak disebut **leaf**.",
        "**Depth** (kedalaman) sebuah node adalah **jumlah langkah** dari root, bukan jumlah node. Root depth 0, anaknya depth 1, dan seterusnya. Jadi di jalur dengan 4 node, node paling bawah berada di depth 3.",
        "Tiga huruf yang akan muncul terus di bab Search: **b** (branching factor) adalah jumlah anak per node, **m** adalah depth terdalam di seluruh pohon, dan **s** adalah depth solusi **terdangkal**. m dan s itu berbeda, dan perbedaannya penting."
      ],
      a: "Silsilah keluarga. Root adalah leluhur paling atas, leaf adalah generasi terbawah yang belum punya anak, dan depth adalah \"generasi ke berapa\" dari leluhur. Kakek ke cucu itu 2 generasi, bukan 3.",
      c: `S            depth 0 (root)
├─ A         depth 1
│  ├─ C      depth 2   (leaf)
│  └─ D      depth 2
│     └─ F   depth 3   (leaf)
└─ B         depth 1
   └─ G      depth 2   (goal)

b = 2      m = 3 (jalur S-A-D-F)      s = 2 (G, lewat S-B-G)`,
      d: [
        "Kenapa m dan s dibedakan: solusi bisa ada di tempat dangkal, sementara pohon di tempat lain sangat dalam. BFS menyapu level demi level, jadi ia berhenti begitu mencapai level s. DFS menyelam ke arah mana pun dulu. Kalau ia memilih cabang yang dalam, ia bisa menghabiskan waktu sampai depth m sebelum sempat melihat solusi dangkal di cabang sebelah.",
        "Kalau pohonnya tak hingga (ada cycle), m = tak hingga. DFS bisa menyelam selamanya dan tidak pernah kembali, walaupun solusi ada di depth 2. Ini alasan DFS disebut tidak complete pada kondisi tertentu."
      ],
      j: [
        ["Menghitung depth dari jumlah node di jalur.", "Hitung langkah (panah), bukan node."],
        ["Menyamakan m dan s.", "m adalah depth terdalam seluruh pohon. s adalah depth solusi terdangkal. Keduanya bisa berbeda jauh."]
      ],
      qs: [
        { l: 0, q: "Berapa depth node E pada jalur S-A-C-E?", o: ["1", "3", "4", "2"], a: 1, e: "Ada 3 langkah (S→A, A→C, C→E). Angka 4 adalah jumlah node, bukan depth." },
        { l: 1, q: "Pohon: S punya anak A dan B. A punya anak C dan D. D punya anak F. B punya anak G (satu-satunya goal). Berapa m dan s?", o: ["m = 3, s = 2", "m = 2, s = 3", "m = 4, s = 3", "m = 3, s = 3"], a: 0, e: "Node terdalam adalah F (S→A→D→F), depth 3, jadi m = 3. Goal G ada di S→B→G, depth 2, jadi s = 2." }
      ],
      k: "Depth = jumlah langkah dari root. m = depth terdalam, s = depth solusi terdangkal."
    },

    {
      t: "Graf menjadi pohon pencarian", u: "Search",
      m: [
        "Algoritma search tidak berjalan **di** graf. Ia **membangun pohon** sambil mencari. Dan di pohon pencarian itu, tiap node mewakili **satu jalur utuh dari start**, bukan sekadar satu state.",
        "Akibatnya, state yang sama bisa muncul **berkali-kali** di pohon, karena bisa dicapai lewat jalur yang berbeda. Kalau G bisa dicapai lewat A dan juga lewat B, maka di pohon ada dua node G.",
        "Kalau di graf ada cycle atau self-loop, jalur bisa diperpanjang tanpa akhir. Pohonnya jadi **tak hingga**, walaupun grafnya hanya terdiri dari dua node."
      ],
      a: "Buku harian perjalanan. Kalau kemarin kamu ke warung lewat Jalan Mawar dan hari ini lewat Jalan Melati, itu dua catatan berbeda, walau tujuannya warung yang sama.",
      c: `Graf (4 node):  S→A, S→B, A→G, B→G

Pohon:        S
             / \\
            A   B
            |   |
            G   G          <- G muncul dua kali

jumlah node pohon = 5     jumlah node graf = 4`,
      d: [
        "Cara menghitung node pohon: hitung ada berapa **jalur** berawalan S, lalu setiap jalur itu satu node. Jadi bukan menghitung state unik. Soal ujian sering membedakan \"berapa node di pohon pencarian\" (hitung ganda) dengan \"berapa state yang dikunjungi\" (hitung sekali).",
        "Versi yang tidak mencatat state lama disebut **tree search**, dan rawan loop. Versi yang menyimpan daftar **explored** (state yang sudah pernah di-expand) disebut **graph search**, yang membuang node berulang. Dua versi ini bisa memberi urutan expand yang berbeda pada soal yang sama, jadi baca dulu soal memintanya yang mana."
      ],
      j: [
        ["Mengira jumlah node pohon sama dengan jumlah node graf.", "Hitung node pohon per jalur. Node G di atas dihitung dua kali."],
        ["Mengira graf kecil pasti menghasilkan pohon kecil.", "Satu cycle saja membuat pohon tak hingga."]
      ],
      qs: [
        { l: 0, q: "Graf S→A, S→B, A→G, B→G. Berapa total node pohon pencarian?", i: ["5"], jaw: "5", h: "Gambar pohonnya: S punya dua anak, masing-masing menuju G.", e: "S, A, B, lalu G muncul dua kali (lewat A dan lewat B) = 5." },
        { l: 1, q: "Graf: S→A, S→B, A→C, B→C, C→G. Gambar pohon lengkap (semua jalur dari S sampai G, tanpa berhenti di goal). Berapa total node-nya?", i: ["7"], jaw: "7", h: "Hitung per level: depth 0, 1, 2, 3.", e: "Depth 0: S (1). Depth 1: A, B (2). Depth 2: C lewat A dan C lewat B (2). Depth 3: G lewat dua C itu (2). Total 1+2+2+2 = 7." }
      ],
      k: "Satu node pohon = satu jalur. State yang sama bisa muncul berkali-kali. Cycle membuat pohon tak hingga."
    },

    {
      t: "Big-O kasar: bᵐ vs b·m", u: "Kompleksitas DFS dan BFS",
      m: [
        "Big-O adalah cara kasar menyatakan **seberapa cepat kerja bertambah kalau masalahnya membesar**. Kita tidak peduli angka persisnya, hanya pola kenaikannya.",
        "Dua pola yang akan kamu temui: **bᵐ** (eksponensial: dikali terus) dan **b·m** (linear: ditambah terus). Beda keduanya luar biasa besar. Dengan b = 10 dan m = 10, bᵐ adalah 10 miliar, sedangkan b·m hanya 100.",
        "Jumlah node pohon penuh sampai depth m adalah 1 + b + b² + ... + bᵐ. Suku terakhir (bᵐ) begitu besar sampai hampir menentukan seluruh jumlahnya, jadi dituliskan kira-kira bᵐ.",
        "Hasil yang perlu dihafal: **BFS** butuh waktu dan memori O(bˢ). **DFS** butuh waktu O(bᵐ) tetapi memori hanya O(b·m)."
      ],
      a: "Dua tabungan. Yang pertama, koinmu digandakan tiap hari (bᵐ). Yang kedua, ditambah Rp1.000 tiap hari (b·m). Seminggu pertama terlihat mirip, sebulan kemudian yang pertama sudah tidak masuk akal.",
      c: `b=10, m=10:   bᵐ = 10.000.000.000     b·m = 100

pohon penuh b=2, m=3:
  depth 0:  1 node
  depth 1:  2 node
  depth 2:  4 node
  depth 3:  8 node
  total  = 15`,
      d: [
        "Kenapa DFS hemat memori: ia hanya menyimpan **satu jalur** dari root ke node sekarang, plus saudara-saudara yang belum dicoba di tiap level. Maksimal b node per level, dikali m level, jadi b·m. Begitu satu cabang selesai, seluruh isinya dibuang.",
        "Kenapa BFS boros: ia harus mengingat **seluruh level** yang sedang disapu supaya bisa melanjutkan ke level berikutnya. Level pada depth s berisi bˢ node, dan semuanya tersimpan. Kalau solusinya dalam, memori habis lebih dulu daripada waktu.",
        "Satu sifat praktis: menambah **satu level** pada pohon penuh membuat jumlah node dikali b. Itulah arti \"meledak\"."
      ],
      j: [
        ["Mengira b·m sama besar dengan bᵐ.", "Satu linear, satu eksponensial. Selisihnya bisa miliaran."],
        ["Mengira DFS selalu lebih baik karena memorinya kecil.", "Memori kecil, tapi waktunya tetap O(bᵐ), dan DFS bisa tidak menemukan solusi dangkal."]
      ],
      qs: [
        { l: 0, q: "Pohon penuh b=2, m=3. Berapa total node?", i: ["15"], jaw: "15", h: "Jumlahkan node tiap level: 1, 2, 4, 8.", e: "1 + 2 + 4 + 8 = 15." },
        { l: 1, q: "Sebuah pohon punya b = 5 dan m = 8. Memori DFS kira-kira b·m node. Berapa?", i: ["40"], jaw: "40", h: "Kalikan b dengan m, bukan dipangkatkan.", e: "b·m = 5 × 8 = 40. Kalau dipangkatkan (5⁸ = 390.625) itu jumlah node pohonnya, bukan memori DFS." },
        { l: 1, q: "Pohon penuh dengan b = 3. Satu level ditambahkan di bagian bawah. Jumlah node kira-kira menjadi ...", o: ["2 kali lipat", "3 kali lipat", "Bertambah 3 node", "9 kali lipat"], a: 1, e: "Level baru berisi 3 kali node level terakhir, dan level terakhir sudah mendominasi jumlahnya, jadi total kira-kira dikali b = 3." }
      ],
      k: "bᵐ meledak, b·m ringan. BFS: memori bˢ. DFS: memori b·m."
    },

    {
      t: "Logika dasar: proposisi, ¬ ∧ ∨ ⇒", u: "Logical Agents (Bab 6)",
      m: [
        "**Proposisi** adalah kalimat yang bisa dipastikan benar (T) atau salah (F). \"Hari ini hujan\" proposisi. \"Tolong tutup pintu\" bukan, karena tidak bisa dibilang benar atau salah.",
        "Tiga penghubung dasar: **¬** (NOT) membalik nilai. **∧** (AND) benar hanya kalau **keduanya** benar. **∨** (OR) benar kalau **minimal satu** benar, termasuk kalau keduanya benar (OR inklusif, jadi T ∨ T = T).",
        "**⇒** (implikasi, \"jika P maka Q\") yang paling sering membingungkan. Ia salah **hanya satu kasus**: P benar tetapi Q salah. Di tiga kasus lain, ia benar."
      ],
      a: "AND itu dua saklar yang dipasang seri: lampu menyala hanya kalau keduanya on. OR itu dua saklar paralel: lampu menyala kalau salah satunya on. Implikasi itu janji: \"Kalau nilaimu 100, aku traktir.\" Janji hanya dilanggar kalau nilaimu 100 tetapi tidak ditraktir. Kalau nilaimu 70, janji tidak terlanggar apa pun yang terjadi, jadi implikasinya benar.",
      c: `P Q |  P∧Q   P∨Q   P⇒Q
T T |   T      T      T
T F |   F      T      F    <- satu-satunya baris salah untuk ⇒
F T |   F      T      T
F F |   F      F      T

A=T, B=F:   A∧B = F    A∨B = T    ¬A = F    A∧¬B = T`,
      d: [
        "Urutan pengerjaan kalau tidak ada tanda kurung: **¬** dulu, lalu **∧**, lalu **∨**, lalu **⇒**, terakhir **⇔**. Jadi ¬A ∨ B ∧ C dibaca (¬A) ∨ (B ∧ C).",
        "Satu kesetaraan yang akan dipakai berulang di bab berikutnya: **P ⇒ Q sama dengan ¬P ∨ Q**. Cek: kalau P salah, ¬P benar, jadi ¬P ∨ Q benar. Kalau P benar dan Q salah, ¬P salah dan Q salah, jadi hasilnya salah. Cocok dengan tabel di atas. Kesetaraan ini dipakai untuk mengubah kalimat ke bentuk CNF.",
        "Hati-hati dengan arahnya. **Konvers** (Q ⇒ P) tidak sama dengan P ⇒ Q. Yang sama adalah **kontraposisi**: ¬Q ⇒ ¬P. \"Kalau hujan, jalan basah\" setara dengan \"kalau jalan tidak basah, tidak hujan\". Tapi bukan setara dengan \"kalau jalan basah, hujan\" (bisa jadi habis disiram)."
      ],
      j: [
        ["Menganggap T ∨ T = F.", "OR inklusif: T ∨ T = T."],
        ["Mengira P ⇒ Q salah ketika P salah.", "Kalau P salah, P ⇒ Q otomatis benar (janji tidak terlanggar)."],
        ["Menyamakan P ⇒ Q dengan Q ⇒ P.", "Itu konvers dan tidak setara. Yang setara dengan P ⇒ Q adalah ¬Q ⇒ ¬P."]
      ],
      qs: [
        { l: 0, q: "A=T dan B=F. Berapa nilai A ∧ ¬B? Jawab T atau F.", i: ["t", "true"], jaw: "T", h: "Hitung ¬B dulu, lalu AND dengan A.", e: "¬B = T, sehingga A ∧ ¬B = T ∧ T = T." },
        { l: 1, q: "P = F dan Q = T. Berapa nilai (P ⇒ Q) ∧ (Q ⇒ P)? Jawab T atau F.", i: ["f", "false"], jaw: "F", h: "Hitung P ⇒ Q dan Q ⇒ P satu per satu dengan tabel, lalu AND-kan.", e: "P ⇒ Q: P salah, jadi T. Q ⇒ P: Q benar dan P salah, jadi F. T ∧ F = F." },
        { l: 1, q: "Kalimat mana yang setara dengan ¬P ∨ Q?", o: ["P ⇒ Q", "Q ⇒ P", "P ∧ ¬Q", "¬P ⇒ ¬Q"], a: 0, e: "P ⇒ Q setara dengan ¬P ∨ Q. Opsi P ∧ ¬Q justru kebalikannya (negasi dari P ⇒ Q)." }
      ],
      k: "OR inklusif. AND hanya benar bila keduanya T. P ⇒ Q hanya salah bila P=T dan Q=F, dan setara ¬P ∨ Q."
    },

    {
      t: "Tabel kebenaran, model, dan entailment", u: "Entailment (Bab 6)",
      m: [
        "Sebuah **model** adalah satu \"versi dunia\": satu kombinasi nilai T atau F untuk semua simbol. Kalau ada n simbol, tiap simbol punya dua pilihan, sehingga jumlah model adalah **2ⁿ**. Tabel kebenaran hanyalah daftar semua model itu.",
        "Satu notasi himpunan: **X ⊆ Y** artinya semua anggota X juga ada di Y. X adalah himpunan bagian (subset) dari Y.",
        "**KB ⊨ α** (KB entails α) artinya: lihat hanya model-model yang membuat KB benar. Di **semua** model itu, α harus ikut benar. Kalau ada satu saja model yang membuat KB benar tetapi α salah, maka KB tidak entails α. Dalam bahasa himpunan: M(KB) ⊆ M(α)."
      ],
      a: "KB itu daftar syarat masuk kampus. \"Dunia yang lolos syarat\" adalah model-model KB. Kalau semua yang lolos syarat itu ternyata juga mahasiswa IPB (α), berarti syaratnya sudah cukup untuk menjamin α. Lingkaran kecil (yang lolos syarat) ada di dalam lingkaran besar (α).",
      c: `KB = (A ∨ B) ∧ ¬A        α = B

A B | A∨B   ¬A   KB   α=B
T T |  T     F    F    -
T F |  T     F    F    -
F T |  T     T    T    T   <- satu-satunya model KB
F F |  F     T    F    -

KB benar hanya di baris A=F, B=T. Di baris itu B benar.
Jadi KB ⊨ B.

jumlah baris: 2 simbol = 4,  3 simbol = 8,  4 simbol = 16`,
      d: [
        "Dua jebakan klasik. **Pertama**, baris di mana KB salah **tidak dipakai** untuk menilai entailment. Kamu tidak boleh menolak entailment hanya karena ada baris di mana α salah, kalau di baris itu KB-nya juga salah. **Kedua**, untuk menyatakan KB tidak entails α, cukup **satu** model tandingan: KB benar, α salah.",
        "Kalau KB tidak punya satu pun model yang benar (KB kontradiktif), maka KB entails apa saja, karena tidak ada model yang bisa menjadi tandingan. Ini disebut benar secara vacuous.",
        "Kelemahan metode tabel: jumlah barisnya 2ⁿ. Untuk 20 simbol sudah sejuta baris, untuk 30 simbol lebih dari satu miliar. Karena itu ada metode lain yang tidak menghitung semua model, yaitu **inferensi** dengan aturan (simbol ⊢, di modul berikutnya)."
      ],
      j: [
        ["Mengira 3 simbol = 6 baris.", "2³ = 8. Rumusnya pangkat, bukan perkalian."],
        ["Memeriksa semua baris, termasuk yang KB-nya salah.", "Hanya baris di mana KB benar yang menentukan entailment."]
      ],
      qs: [
        { l: 0, q: "Tiga simbol proposisi menghasilkan berapa baris tabel kebenaran?", o: ["6", "8", "9", "3"], a: 1, e: "2³ = 8. Angka 6 muncul bila 2×3 dihitung, padahal rumusnya pangkat." },
        { l: 1, q: "KB: (A ⇒ B) ∧ A. Apakah KB ⊨ B?", o: ["Ya, satu-satunya model KB (A=T, B=T) membuat B benar", "Tidak, ada model KB di mana B salah", "Tidak, karena B hanya muncul sebagai konsekuen", "Tidak bisa ditentukan tanpa tabel penuh"], a: 0, e: "KB benar menuntut A = T dan (A ⇒ B) = T. Dengan A = T, implikasi hanya benar kalau B = T. Jadi di semua model KB, B benar." },
        { l: 1, q: "Ada 4 simbol (16 model). KB benar di 3 model, dan di ketiganya α juga benar. Di 13 model lainnya KB salah, dan α kebetulan salah di sebagian. Apakah KB ⊨ α? Jawab ya atau tidak.", i: ["ya", "y"], jaw: "ya", h: "Model yang menentukan hanya yang membuat KB benar.", e: "Yang dihitung hanya model di mana KB benar. Di 3 model itu α benar semua, jadi KB ⊨ α. 13 model sisanya tidak relevan." }
      ],
      k: "n simbol = 2ⁿ baris. KB ⊨ α: di semua model KB, α benar. Baris di mana KB salah diabaikan."
    },

    {
      t: "g(n), h(n), f(n)", u: "Informed Search",
      m: [
        "**g(n)** adalah biaya **nyata** dari start sampai node n, lewat jalur yang sudah kamu tempuh. Nilainya pasti karena jalurnya sudah ada.",
        "**h(n)** adalah **perkiraan** biaya dari n sampai goal. Bagian ini belum kamu tempuh, jadi hanya tebakan terdidik yang disebut **heuristik**. Biasanya nilainya diberikan di soal, misalnya jarak garis lurus ke goal.",
        "**f(n) = g(n) + h(n)** adalah perkiraan total biaya jalur yang lewat n. Tiga algoritma memakai angka yang berbeda: **UCS** memakai g saja, **Greedy** memakai h saja, A* memakai f. Ada juga **h*(n)**, yaitu biaya sebenarnya termurah dari n ke goal. Agent tidak tahu nilainya, tapi dipakai sebagai pembanding mutu heuristik."
      ],
      a: "Perjalanan Bogor ke Bandung. Kamu sudah menempuh 40 km (g, pasti). GPS bilang sisa 100 km (h, perkiraan). Perkiraan total perjalananmu 140 km (f).",
      c: `satu node:  g = 4, h = 3   ->   f = 4 + 3 = 7

tiga node di fringe:
   A:  g=2   h=6   f=8
   B:  g=9   h=1   f=10
   D:  g=1   h=4   f=5

Greedy (min h)    -> B   (h=1, tampak dekat, padahal sudah mahal)
UCS    (min g)    -> D   (g=1)
A*     (min f)    -> D   (f=5)`,
      d: [
        "Greedy gampang tertipu karena ia hanya melihat h. Node B tampak hampir sampai (h = 1), padahal untuk tiba di B sudah dibayar 9. A* menjaga keseimbangan: biaya yang sudah dibayar dan sisa perkiraan sama-sama dihitung.",
        "A* hanya terjamin optimal kalau heuristiknya **admissible**: h(n) tidak pernah **melebihi** biaya sebenarnya, yaitu h(n) ≤ h*(n) untuk semua n. Alasannya: kalau h melebih-lebihkan, node di jalur optimal bisa tampak mahal dan terus dilewati. Heuristik yang optimis (menyatakan sisa jalan lebih dekat dari kenyataan) aman, yang pesimis berbahaya.",
        "Contoh admissible: jarak garis lurus pada peta jalan. Jalan nyata tidak mungkin lebih pendek dari garis lurus. Ada juga syarat yang lebih kuat, **konsisten**: h(n) ≤ cost(n, n') + h(n') untuk tiap arc. Konsisten pasti admissible, dan dipakai agar A* pada graph search tetap optimal."
      ],
      j: [
        ["Menyamakan h dengan biaya nyata.", "h hanya perkiraan. Yang nyata adalah g."],
        ["Memakai g + h untuk semua algoritma.", "Greedy hanya h, UCS hanya g, A* memakai g + h."]
      ],
      qs: [
        { l: 0, q: "Simbol apa untuk perkiraan biaya dari node n ke goal? Jawab satu huruf.", i: ["h"], jaw: "h", h: "Nama simbolnya dari kata \"heuristik\".", e: "h(n) adalah heuristik, yaitu perkiraan n ke goal. g adalah biaya nyata dari start." },
        { l: 1, q: "Di fringe ada X (g=6, h=2), Y (g=3, h=4), Z (g=1, h=9). Node mana yang diambil A*?", o: ["X", "Y", "Z", "Seri antara X dan Y"], a: 1, e: "f(X) = 8, f(Y) = 7, f(Z) = 10. A* mengambil f terkecil, yaitu Y. Greedy akan mengambil X (h = 2), UCS akan mengambil Z (g = 1)." },
        { l: 1, q: "Di node n, h(n) = 12 sedangkan biaya sebenarnya dari n ke goal adalah 10. Apakah heuristik ini admissible di n?", o: ["Ya, karena 12 lebih besar dari 10 jadi aman", "Tidak, karena h melebihi biaya sebenarnya", "Ya, heuristik selalu admissible", "Tidak, karena h seharusnya selalu 0"], a: 1, e: "Admissible berarti h(n) ≤ h*(n). Di sini 12 > 10, jadi h melebih-lebihkan dan tidak admissible." }
      ],
      k: "g nyata, h perkiraan, f = g + h. Admissible: h tidak pernah melebihi biaya sebenarnya."
    },

    {
      t: "Daftar simbol logika (rujukan cepat)", u: "Bab 6 dan 7",
      m: [
        "Simbol yang sudah kamu kenal: ¬ ∧ ∨ ⇒. Tambahannya: **⇔** (jika dan hanya jika, artinya kedua arah berlaku), **≡** (equivalent: dua kalimat bernilai sama di semua model), **∀** (untuk semua), dan **∃** (terdapat).",
        "Dua simbol yang paling sering tertukar: **⊨** (entails) bicara soal **kebenaran**: α benar di semua model KB. **⊢** (derivasi) bicara soal **prosedur**: α bisa diturunkan dari KB dengan aturan inferensi.",
        "Perhatikan bedanya tingkat. ¬ ∧ ∨ ⇒ ⇔ dipakai **di dalam** kalimat. Sedangkan ⊨ ⊢ ≡ adalah pernyataan **tentang** kalimat. \"KB ⊨ α\" bukan kalimat yang bisa kamu masukkan ke dalam KB.",
        "Satu catatan beda konteks: pada CSP, arc X→Y menyatakan X = tail dan Y = head."
      ],
      a: "⊨ seperti fakta di lapangan: memang begitu kenyataannya. ⊢ seperti langkah-langkah di kertas bukti: kamu menurunkannya baris demi baris. Prosedur yang baik harus cocok dengan kenyataan: kertas bukti tidak boleh membuktikan hal yang salah, dan semua hal yang benar harus bisa dibuktikan.",
      c: `KB ⊨ α   α benar di semua model KB            (semantik / kebenaran)
KB ⊢ α   α dapat diturunkan lewat prosedur    (sintaks / langkah)
M(α)     himpunan model tempat α benar
P ≡ Q    P dan Q bernilai sama di semua model

sound     : kalau KB ⊢ α maka KB ⊨ α    (tidak membuktikan yang salah)
complete  : kalau KB ⊨ α maka KB ⊢ α    (tidak melewatkan yang benar)`,
      d: [
        "Dua sifat prosedur inferensi: **sound** (andal) dan **complete** (lengkap). Sound artinya semua yang berhasil diturunkan memang benar. Complete artinya semua yang benar bisa diturunkan. Prosedur yang diinginkan adalah yang sound dan complete, supaya ⊢ dan ⊨ bermakna sama.",
        "Pasangan kuantor yang aman dalam FOL: **∀ dengan ⇒**, dan **∃ dengan ∧**. \"Semua kucing adalah hewan\" ditulis ∀x Kucing(x) ⇒ Hewan(x). Kalau ditulis ∀x Kucing(x) ∧ Hewan(x), artinya \"semua benda di dunia adalah kucing sekaligus hewan\", yang jelas bukan maksudmu. Sebaliknya \"ada kucing yang hitam\" ditulis ∃x Kucing(x) ∧ Hitam(x). Kalau memakai ⇒, kalimatnya jadi sangat lemah, karena sudah benar kalau ada satu benda yang bukan kucing.",
        "Aturan negasi kuantor: ¬∀x P(x) setara dengan ∃x ¬P(x). \"Tidak semua orang lulus\" artinya \"ada orang yang tidak lulus\"."
      ],
      j: [
        ["Menukar ⊨ dan ⊢.", "⊨ untuk kebenaran, ⊢ untuk prosedur."],
        ["Memasangkan ∀ dengan ∧ dan ∃ dengan ⇒.", "Pasangan aman: ∀ dengan ⇒, ∃ dengan ∧."]
      ],
      qs: [
        { l: 0, q: "Simbol yang menyatakan derivasi lewat prosedur inferensi adalah ...", o: ["⊨", "⊢", "≡", "⇔"], a: 1, e: "⊢ = derivasi (prosedur). ⊨ = entailment (kebenaran), ≡ = sama arti, ⇔ = jika dan hanya jika." },
        { l: 1, q: "Sebuah prosedur inferensi menurunkan \"Pizza\" dari KB, padahal \"Pizza\" tidak benar di semua model KB. Sifat apa yang dilanggar prosedur ini?", o: ["Soundness", "Completeness", "Admissibility", "Konsistensi graf"], a: 0, e: "Prosedur membuktikan sesuatu yang tidak benar. Itu melanggar soundness. Completeness justru soal prosedur yang melewatkan hal yang benar." },
        { l: 1, q: "Kalimat \"Semua kucing adalah hewan\" paling tepat ditulis ...", o: ["∀x Kucing(x) ⇒ Hewan(x)", "∀x Kucing(x) ∧ Hewan(x)", "∃x Kucing(x) ⇒ Hewan(x)", "∃x Kucing(x) ∧ Hewan(x)"], a: 0, e: "Pasangan aman: ∀ dengan ⇒. Opsi kedua berarti semua benda adalah kucing sekaligus hewan." }
      ],
      k: "⊨ kebenaran, ⊢ prosedur. Sound = tidak membuktikan yang salah, complete = tidak melewatkan yang benar. ∀ dengan ⇒, ∃ dengan ∧."
    },

    {
      t: "Cara membaca gambar graf soal search", u: "Seluruh soal search",
      m: [
        "Di gambar graf soal: angka di **panah** adalah cost. Tulisan **h = x** di dalam node adalah heuristik, dan hanya dipakai oleh Greedy dan A*. BFS, DFS, dan UCS mengabaikannya. Panah yang melengkung ke node yang sama adalah self-loop.",
        "Aturan yang sering tidak ditulis: kalau urutan anak tidak diberikan, pakai **urutan abjad**. Dan **tes goal dilakukan saat node diambil dari fringe**, bukan saat node dimasukkan. Ini menentukan kapan algoritma berhenti.",
        "Cara mengerjakan yang rapi: (1) tulis isi fringe tiap langkah beserta angka prioritasnya, (2) catat node yang di-expand secara berurutan, (3) tulis jalur akhir dan path cost-nya. Dengan begitu kalau ada salah hitung, kamu bisa melacak di mana."
      ],
      a: "Peta dengan ongkos tertulis di tiap ruas jalan, dan di tiap kota ada catatan \"jarak lurus ke tujuan sekitar sekian\". Ongkos itu pasti, catatan jarak lurus itu hanya perkiraan.",
      c: `Graf P
Arc : S→A(1)  S→B(2)  A→D(2)  A→G(10)  B→C(2)  C→G(3)  D→G(20)
h   : S=3  A=2  B=5  C=3  D=1  G=0

Jalur ke G:   S-A-G = 11    S-A-D-G = 23    S-B-C-G = 7 (termurah)

Algoritma   Urutan expand     Jalur      Cost
BFS         S A B D G         S-A-G      11
DFS         S A D G           S-A-D-G    23
UCS         S A B D C G       S-B-C-G    7
Greedy      S A G             S-A-G      11
A*          S A D B C G       S-B-C-G    7`,
      d: [
        "Graf yang sama menghasilkan jawaban berbeda untuk tiap algoritma, dan itu bukan kebetulan. **DFS** menyelam ke A lalu D, dan mengembalikan jalur pertama yang ia temui (cost 23, yang terburuk). **BFS** menemukan jalur dengan langkah paling sedikit (S-A-G, 2 langkah), bukan yang termurah. **Greedy** melihat G dengan h = 0 lewat A dan langsung mengambilnya, padahal jalur itu bercost 11. **UCS** dan A* sama-sama menemukan jalur 7 yang optimal.",
        "Lihat urutan UCS: setelah G (cost 11) masuk fringe, UCS tidak langsung berhenti. Ia terus mengambil node bercost lebih kecil (B, D, C), dan dari C muncul G baru dengan cost 7 yang keluar lebih dulu daripada G bercost 11. Tes goal baru dilakukan saat G **diambil**, bukan saat dimasukkan. Itulah yang menjaga UCS tetap optimal.",
        "Pada graf kecil ini UCS dan A* sama-sama meng-expand 6 node. Keunggulan A* baru terasa pada graf besar, ketika heuristik yang baik menghindarkannya dari menjelajahi bagian peta yang menjauhi goal."
      ],
      j: [
        ["Mengira angka di dalam node adalah cost.", "Angka di panah adalah cost. Tulisan \"h =\" di node adalah heuristik."],
        ["Berhenti begitu G dimasukkan ke fringe.", "Berhenti saat G **diambil** dari fringe. Bisa jadi ada G lain, lewat jalur lain, dengan prioritas lebih kecil."]
      ],
      qs: [
        { l: 0, q: "Pada Graf P, berapa path cost S-B-C-G (S→B 2, B→C 2, C→G 3)?", i: ["7"], jaw: "7", h: "Jumlahkan cost tiga panah.", e: "2 + 2 + 3 = 7, jalur termurah pada Graf P." },
        { l: 1, q: "Pada Graf P, Greedy Best-First (memakai h saja) mengembalikan jalur apa?", o: ["S-A-G, cost 11", "S-B-C-G, cost 7", "S-A-D-G, cost 23", "S-A-G, cost 2"], a: 0, e: "Dari S, A (h = 2) lebih kecil dari B (h = 5). Dari A, G (h = 0) paling kecil. Jalur S-A-G bercost 1 + 10 = 11. Greedy tidak memperhatikan cost nyata." },
        { l: 1, q: "Pada Graf P, DFS dengan anak diurutkan abjad dan tree search mengembalikan jalur dengan path cost berapa?", i: ["23"], jaw: "23", h: "Dari S, ambil A dulu, lalu dari A ambil D (D lebih dulu dari G secara abjad).", e: "DFS: S → A → D → G. Cost = 1 + 2 + 20 = 23. DFS menemukan jalur pertama yang ia temui, bukan yang termurah." }
      ],
      k: "Panah = cost, h= di node = heuristik. Tes goal saat node diambil dari fringe. Tulis fringe tiap langkah."
    },

    {
      t: "Jembatan: wadah fringe menentukan urutan", u: "Search",
      m: [
        "Ini rangkuman yang menyatukan modul sebelumnya. Semua algoritma search memakai kerangka yang sama, dan yang beda cuma **wadah** fringe-nya. Kalau kamu hafal kerangka ini, kamu bisa mengerjakan DFS, BFS, UCS, Greedy, dan A* dengan satu pola.",
        "Hati-hati dengan urutan memasukkan anak. Kalau ingin A diperiksa dulu pada stack, masukkan anak dari kanan ke kiri (B lalu A), karena B yang masuk lebih dulu akan terkubur di bawah A."
      ],
      a: "Sama-sama membongkar kardus, tetapi dari tumpukan, antrean, atau UGD. Kerjanya sama, cuma cara memilih kardus berikutnya yang berbeda.",
      c: `fringe <- { node awal }
ulangi:
   kalau fringe kosong -> gagal
   ambil satu node dari fringe      <- WADAH menentukan
   kalau node itu goal -> selesai
   masukkan semua anaknya ke fringe

  Stack          -> DFS
  Queue          -> BFS
  Priority queue -> UCS (g), Greedy (h), A* (g+h)`,
      d: [
        "Rumus mengerjakan soal urutan expand: tulis fringe di tiap iterasi. Contoh DFS dengan anak S = {A, B}: fringe awal [S]. Ambil S, masukkan B lalu A, fringe [B, A] (A di atas). Ambil A. Anak A masuk di atas B. Dan seterusnya. B baru diambil setelah seluruh cabang A habis.",
        "Pada queue urutannya terbalik: fringe [A, B] setelah S di-expand, A diambil duluan, lalu B ikut menunggu di belakang anak-anak A. Level pertama habis dulu sebelum level kedua dimulai.",
        "Pada priority queue, tidak ada urutan tetap. Setiap iterasi, cari node dengan angka terkecil di seluruh fringe, termasuk node yang baru saja masuk."
      ],
      j: [
        ["Memasukkan anak kiri dulu ke stack lalu heran kenapa yang kanan diambil.", "Stack: masukkan dari kanan ke kiri agar kiri keluar dulu."],
        ["Memakai satu aturan untuk semua algoritma.", "Kerangkanya sama, tetapi cara mengambil dari fringe berbeda untuk tiap wadah."]
      ],
      qs: [
        { l: 0, q: "A lalu B dimasukkan ke stack. Satu node diambil. Siapa?", o: ["A", "B", "Keduanya sekaligus", "Tidak dapat ditentukan"], a: 1, e: "LIFO: B masuk terakhir, jadi B yang keluar. A tetap di fringe." },
        { l: 1, q: "Node S punya anak A dan B (berurutan abjad), dan A punya anak C dan D. DFS dengan stack, anak dimasukkan dari kanan ke kiri supaya urutan abjad dihormati. Tulis urutan node yang di-expand mulai dari S, pisahkan koma, sampai C diambil.", i: ["s,a,c"], jaw: "S, A, C", h: "Setelah S di-expand, fringe berisi A di atas, B di bawah. Ambil A, lalu masukkan anaknya di atas B.", e: "Ambil S. Masukkan B lalu A. Ambil A. Masukkan D lalu C, sehingga C di atas. Ambil C. Urutan: S, A, C." }
      ],
      k: "DFS = Stack, BFS = Queue, UCS/Greedy/A* = Priority queue. Di stack, masukkan anak dari kanan ke kiri."
    }
  ];

  const SUM = [
    "Peta besar: tiga keahlian agent. Search = urutan aksi, CSP = isi variabel, Logika = simpulkan fakta.",
    "Stack LIFO, queue FIFO. Di stack masukkan anak dari kanan ke kiri agar kiri keluar duluan.",
    "Priority queue: angka terkecil dulu, tie-breaker selalu ditulis, item baru bisa melompati antrean.",
    "Tiga wadah, tiga algoritma. BFS = langkah paling sedikit, UCS = cost paling kecil, DFS = solusi pertama yang ditemui.",
    "Graf: node = state, arc = aksi bercost, path cost = jumlah cost arc. Langkah paling sedikit tidak sama dengan paling murah.",
    "Pohon: depth = langkah dari root. m = depth terdalam, s = depth solusi terdangkal.",
    "Satu node pohon = satu jalur. State yang sama bisa muncul berkali-kali, dan cycle membuat pohon tak hingga.",
    "Big-O: bᵐ meledak, b·m ringan. BFS memori bˢ, DFS memori b·m, tambah satu level = dikali b.",
    "Logika: OR inklusif, P ⇒ Q hanya salah bila P=T dan Q=F, dan setara ¬P ∨ Q.",
    "Entailment: n simbol = 2ⁿ model. KB ⊨ α bila di semua model KB, α benar. Baris KB salah diabaikan.",
    "g nyata, h perkiraan, f = g + h. Heuristik admissible tidak pernah melebihi biaya sebenarnya.",
    "⊨ kebenaran, ⊢ prosedur. Sound dan complete. ∀ dengan ⇒, ∃ dengan ∧.",
    "Baca graf: panah = cost, h= di node = heuristik, tes goal saat node diambil. Satu graf, jawaban tiap algoritma bisa berbeda.",
    "Kerangka search sama untuk semua. Tulis fringe tiap iterasi dan urutan expand."
  ];

  const root = () => $("app");
  const bar = (n, lbl) => `<div class="exam-bar"><div class="exam-top"><button class="btn-exit" onclick="${n}">${ic("arrowL", 13)} ${lbl}</button><div class="exam-label">Pengantar · Bekal dari Nol</div></div></div>`;
  const qd = (i, j) => !!P.q[i + "-" + j];
  const modDone = i => M[i].qs.every((_, j) => qd(i, j));
  const cnt = () => M.filter((_, i) => modDone(i)).length;
  const nq = () => M.reduce((s, m) => s + m.qs.length, 0);

  window.pgList = function () {
    run = null; dock(""); closeModal();
    const c = cnt();
    root().innerHTML = bar("home()", "Beranda") + `<div class="qbox"><div class="sec-title" style="margin-bottom:8px">Bekal dari Nol</div><p class="pgb" style="margin:0 0 10px">Materi dasar supaya kamu tidak macet di bab inti. Tiap modul berisi penjelasan, analogi, contoh yang dikerjakan langkah demi langkah, bagian "Lebih dalam" untuk tingkat menengah, jebakan yang sering muncul, lalu 2 sampai 3 latihan (dasar dan menengah). Kerjakan sekali, lalu jadikan rujukan kapan pun lupa.</p><b style="font-size:.85rem">${c} dari ${M.length} modul selesai</b><div class="pbar" style="margin:6px 0 14px"><i style="width:${c / M.length * 100}%"></i></div><button class="btn-p" style="width:100%" onclick="pgOpen(${Math.min(c, M.length - 1)})">${c ? "Lanjutkan" : "Mulai dari Modul 0"} ${ic("arrow", 15)}</button></div><div class="pg-list">${M.map((m, i) => `<button class="pg-item" onclick="pgOpen(${i})"><span class="gn ${modDone(i) ? "dn" : ""}">${modDone(i) ? "✓" : i}</span><span><b>${esc(m.t)}</b><small>Dipakai di: ${esc(m.u)} · ${m.qs.length} latihan</small></span></button>`).join("")}<button class="pg-item" onclick="pgEnd()"><span class="gn">✓</span><span><b>Ringkasan penutup</b><small>Satu butir per modul</small></span></button></div>`;
    window.scrollTo(0, 0);
  };

  const paras = a => a.map(p => `<p>${f(p)}</p>`).join("");

  function quizHtml(i, j) {
    const q = M[i].qs[j];
    const lv = q.l ? `<span class="pill match">Menengah</span>` : `<span class="pill mcq">Dasar</span>`;
    const body = q.o
      ? `<div class="opts">${q.o.map((o, k) => `<button class="opt" onclick="pgPick(${i},${j},${k})"><span class="opt-letter">${"ABCD"[k]}</span><span style="flex:1">${esc(o)}</span></button>`).join("")}</div>`
      : `<input class="fill-in" id="pgin-${i}-${j}" placeholder="Ketik jawabanmu..." autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')pgCheck(${i},${j})"><details style="margin-top:8px"><summary style="cursor:pointer;color:var(--ink3);font-size:.85rem">Petunjuk</summary><p class="pgb" style="margin:6px 0 0">${f(q.h)}</p></details><div class="row"><button onclick="pgCheck(${i},${j})">Periksa</button></div>`;
    return `<div class="pgq" id="pgq-${i}-${j}"><div class="pgh" style="display:flex;align-items:center;gap:8px">Latihan ${j + 1} ${lv}</div><p class="qtxt">${esc(q.q)}</p>${body}<div id="pgfb-${i}-${j}"></div></div>`;
  }

  window.pgOpen = function (i) {
    run = null; const m = M[i]; P.cur = i; sv();
    root().innerHTML = bar("pgList()", "Daftar") + `<div class="qbox"><div class="qbox-hdr"><span class="pill mcq">${ic("book", 13)} Modul ${i} dari ${M.length - 1}</span><span class="qnum">Dipakai di: ${esc(m.u)}</span></div><h2 style="font-size:1.2rem;font-weight:800;margin-bottom:6px">${esc(m.t)}</h2>
      <div class="pgh">Materi</div><div class="pgb">${paras(m.m)}</div>
      <div class="pgh">Analogi</div><div class="pgx">${f(m.a)}</div>
      <div class="pgh">Contoh</div><pre class="pgpre">${esc(m.c)}</pre>
      <div class="pgh">Lebih dalam</div><div class="pgb">${paras(m.d)}</div>
      <div class="pgh">Jebakan umum</div><div class="pgj">${m.j.map(p => `<div class="no">${ic("x", 13)} ${f(p[0])}</div><div class="yes" style="margin-bottom:6px">${ic("check", 13)} ${f(p[1])}</div>`).join("")}</div>
      <div class="pgk"><b>Ingat ini:</b> ${f(m.k)}</div>
      ${m.qs.map((_, j) => quizHtml(i, j)).join("")}<div id="pgdone"></div></div>`;
    dock(`<button class="btn-s" ${i ? "" : "disabled"} onclick="pgOpen(${i - 1})">${ic("arrowL", 13)} Sebelumnya</button><button class="btn-p" onclick="${i < M.length - 1 ? `pgOpen(${i + 1})` : "pgEnd()"}">${i < M.length - 1 ? "Modul berikutnya" : "Ringkasan"} ${ic("arrow", 15)}</button>`);
    window.scrollTo(0, 0);
  };

  function fb(i, j, ok, ans) {
    P.q[i + "-" + j] = true; sv();
    const q = M[i].qs[j];
    $("pgfb-" + i + "-" + j).innerHTML = `<div class="fb ${ok ? "ok" : "bad"}">${ic(ok ? "check" : "x", 16)} ${ok ? "Jawaban tepat" : "Kurang tepat"}<span>${ok ? "" : "Jawaban yang benar: <b>" + esc(ans) + "</b>. "}${f(q.e)}</span></div>`;
    if (modDone(i)) $("pgdone").innerHTML = `<div class="vdone">Semua latihan modul ini sudah dikerjakan. Lanjut ke modul berikutnya.</div>`;
  }
  window.pgPick = function (i, j, k) {
    const q = M[i].qs[j];
    document.querySelectorAll("#pgq-" + i + "-" + j + " .opt").forEach((b, x) => { b.disabled = true; if (x === q.a) b.classList.add("right"); else if (x === k) b.classList.add("wrong"); });
    fb(i, j, k === q.a, q.o[q.a]);
  };
  window.pgCheck = function (i, j) {
    const el = $("pgin-" + i + "-" + j), q = M[i].qs[j], v = nrm(el.value);
    if (!v) return alert("Ketik jawaban terlebih dahulu.");
    const ok = q.i.map(nrm).includes(v); el.disabled = true; el.classList.add(ok ? "right" : "wrong"); fb(i, j, ok, q.jaw);
  };
  window.pgEnd = function () {
    run = null; dock(`<button class="btn-s" onclick="pgList()">${ic("list", 13)} Daftar modul</button><button class="btn-p" onclick="home()">Mulai latihan bab ${ic("arrow", 15)}</button>`);
    const ans = Object.keys(P.q).length;
    root().innerHTML = bar("pgList()", "Daftar") + `<div class="qbox"><div class="res-badge">Selesai</div><h2 style="font-size:1.2rem;font-weight:800;margin:6px 0 10px">Bab Bekal Selesai</h2><ul class="sumlist">${SUM.map(x => `<li>${f(x)}</li>`).join("")}</ul><p class="pgb" style="margin-top:14px">Kamu sudah mengerjakan ${ans} dari ${nq()} latihan, dan ${cnt()} dari ${M.length} modul tuntas. Lanjut ke latihan per bab, dan buka lagi Pengantar kapan pun lupa istilah.</p></div>`;
    window.scrollTo(0, 0);
  };

  /* Kartu Pengantar di beranda */
  const oh = window.home;
  window.home = function () {
    oh();
    const t = document.querySelector(".tools3");
    if (t && !t.querySelector("[data-pg]")) t.insertAdjacentHTML("afterbegin", `<button class="tc" data-pg="1" onclick="pgList()"><span class="tc-ic">${ic("book", 22)}</span><b>Pengantar: Bekal dari Nol</b><small>${cnt()} dari ${M.length} modul selesai · materi dasar + latihan dasar dan menengah</small></button>`);
  };
  window.home();

  /* Loading page, lalu pilihan awal */
  const sp = $("splash");
  function gate() {
    const c = cnt(), g = document.createElement("div"); g.id = "gate";
    g.innerHTML = `<h2>Mau mulai dari mana?</h2><p class="gs">Pilih satu. Kamu selalu bisa pindah lewat beranda.</p><div class="gcards"><button class="gcard rec" id="gP"><span class="gtag">Disarankan untuk pemula</span><b>Pelajari Pengantar</b><span>Bekal dari Nol: ${M.length} modul materi dasar dengan latihan dasar dan menengah, supaya paham seluruh materi. ${c ? c + " modul sudah selesai." : ""}</span></button><button class="gcard" id="gH"><b>Homepage</b><span>Langsung ke latihan per bab dan Simulasi UTS.</span></button></div>`;
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

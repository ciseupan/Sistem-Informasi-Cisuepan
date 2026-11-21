# Website RT 01 Kampung Ciseupan

## Isi paket
- `index.html`, `style.css`, `script.js`: tampilan website.
- `.pages.yml`: konfigurasi Pages CMS.
- `content/*.json`: data profil, pengumuman, agenda, dan program kerja.
- `media/`: tempat menyimpan foto yang diunggah melalui Pages CMS.

## Cara upload
1. Ekstrak ZIP ini di komputer.
2. Buka repository GitHub yang baru.
3. Klik **Add file → Upload files**.
4. Buka folder hasil ekstrak, pilih semua file dan folder di dalamnya (termasuk `.pages.yml`), lalu seret ke halaman Upload files.
5. Klik **Commit changes**.

Penting: unggah ISI folder hasil ekstrak, bukan folder pembungkusnya. Pastikan `.pages.yml` berada langsung di root repository, sejajar dengan `index.html`.

## Pages CMS
1. Buka https://app.pagescms.org/ dan masuk dengan GitHub.
2. Beri akses Pages CMS ke repository ini.
3. Pilih repository dan branch `main`.
4. Pages CMS membaca `.pages.yml` dan menampilkan Profil Website, Pengumuman Warga, Agenda Kegiatan, dan Program Kerja.

## Catatan
Website ini merupakan starter statis. Setelah file diunggah, aktifkan GitHub Pages melalui Settings → Pages → Deploy from a branch → `main` → `/(root)` → Save.

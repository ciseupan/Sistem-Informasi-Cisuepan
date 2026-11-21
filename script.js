async function loadJSON(path, fallback){try{const r=await fetch(path,{cache:"no-store"});if(!r.ok)throw new Error("Gagal memuat "+path);return await r.json()}catch(e){console.warn(e);return fallback}}
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const dateFmt=s=>{if(!s)return "Tanggal menyusul";const d=new Date(s+"T00:00:00");return isNaN(d)?"":new Intl.DateTimeFormat("id-ID",{day:"numeric",month:"long",year:"numeric"}).format(d)};
(async()=>{
 const [site,news,events,programs]=await Promise.all([
  loadJSON("content/site.json",{}),loadJSON("content/pengumuman.json",[]),loadJSON("content/agenda.json",[]),loadJSON("content/program.json",[])
 ]);
 const set=(id,v)=>{const el=document.getElementById(id);if(el&&v)el.textContent=v};
 document.title=(site.nama||"RT 01 Kampung Ciseupan")+" | Website Resmi";
 set("hero-title",site.judul);set("hero-desc",site.deskripsi);set("profile-desc",site.deskripsi);set("wilayah",site.wilayah);set("ketua",site.ketua_rt);set("profile-name",site.nama);set("profile-address",site.alamat);set("contact-address",site.alamat);
 set("contact-detail",[site.telepon,site.email].filter(Boolean).join(" · ")||"Kontak pengurus dapat ditambahkan melalui dashboard admin.");
 const n=document.getElementById("announcements");
 n.innerHTML=news.length?news.map(x=>`<article class="info-card"><div class="date">${esc(dateFmt(x.tanggal))}</div><h3>${esc(x.judul)}</h3><p>${esc(x.isi)}</p></article>`).join(""):'<p class="muted">Belum ada pengumuman.</p>';
 const a=document.getElementById("events");
 a.innerHTML=events.length?events.map(x=>`<article class="agenda-item"><div class="agenda-date">${esc(dateFmt(x.tanggal))}</div><div><h3>${esc(x.nama)}</h3><p>${esc(x.waktu||"")}${x.keterangan?" · "+esc(x.keterangan):""}</p></div><div class="agenda-place">${esc(x.tempat||"")}</div></article>`).join(""):'<p class="muted">Belum ada agenda kegiatan.</p>';
 const p=document.getElementById("programs");
 p.innerHTML=programs.length?programs.map(x=>`<article class="info-card"><div class="date">PROGRAM RT 01</div><h3>${esc(x.nama)}</h3><p>${esc(x.keterangan)}</p></article>`).join(""):'<p class="muted">Program kerja belum ditambahkan.</p>';
 document.getElementById("year").textContent=new Date().getFullYear();
})();
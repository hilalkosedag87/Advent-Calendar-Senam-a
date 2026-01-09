console.log("JS YÜKLENDİ");

// Takvim 1. günü 10 Ocak
const startDate = new Date(2026, 0, 10);
const today = new Date(); 


let currentDay = Math.floor((today - startDate) / (1000 * 60 * 60 * 24)) + 1;
if(currentDay < 1) currentDay = 0;
if(currentDay > 24) currentDay = 24;

const calendar = document.getElementById("calendar");
const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");
const closeBtn = document.getElementById("close");

const contents = [
  // 1
  "<img src='gun1.jpeg' width='100%'><p>İlk gün 💖 Bu takvimi senin için yaptim.Diğer günleri açmaya çalışma boşuna! Yazılımcı arkadaş advent calendar almaz yapar hadi bakalım.<3</p>",
  // 2
  "<p>Bugün de bir film olsun hadi bakim🎬</p><a href='https://www.imdb.com/title/tt0816692/?ref_=hm_fanfav_t_24_pd_fp1_r' target='_blank'>Film/a>",
  // 3
  "<p>Seversin :))</p><a href='https://open.spotify.com/intl-tr/track/5bWiYCClkRNOYjGHzGoxnT?si=575b6fabc6a44ea1' target='_blank'>Bu olmazsa olmaz, ondan 1.</a>",
  // 4
  "<p>Sınavdan önce ya da sonra izle kardesim!</p><a href='https://www.youtube.com/watch?v=-y7JiZS7_xk' target='_blank'>Bunu izlemezsen ağzina vururum</a>",

  // 5
  "<img src='gun5.jpeg' width='100%'><p>Bugün bizle ilk noodle yediğin gün ✨</p>",
  // 6
  "<p>Bugünün filmi de bu 🎥</p><a href='https://www.imdb.com/title/tt1001508/?ref_=nv_sr_srsg_1_tt_7_nm_0_in_0_q_hes%2520just' target='_blank'>Film zaten bunları listene ekle </a>",
  // 7
  "<p>Bugün bu şarkıyı dinle 🎵</p><a href='https://open.spotify.com/intl-tr/track/6ZxGlGoJp1eDntOalUNZT6?si=a42c10babcdd4dee' target='_blank'>Dinle tm mı?</a>",
  // 8
  "<p>Nasihat canım nasihat</p><a href='https://www.youtube.com/watch?v=9a_J-gTLeds' target='_blank'>Az izle de kafana birkaç şey girsin</a>",

  // 9
  "<img src='gun9.jpeg' width='100%'><p>Vay be sena ne büyüdün ya (ablanım ya ondan)</p>",
  // 10
  "<p>Bugün de film !</p><a href='https://www.imdb.com/title/tt22667880/?ref_=nv_sr_srsg_0_tt_1_nm_7_in_0_q_the%2520boy%2520the%2520mole' target='_blank'>Bak unutma!</a>",
  // 11
  "<p>Bugünde bu olsun</p><a href='https://open.spotify.com/intl-tr/track/7mBE81zjitbqaf6oN31R5u?si=7e185a6354fe4b23' target='_blank'>Dinle seversin </a>",
  // 12
  "<p>Bugünkü videooOOOOoooOO ▶️</p><a href='https://www.youtube.com/watch?v=pR5Csgk35WY' target='_blank'>Aç tavsiye olsun</a>",

  // 13
  "<img src='gun13.jpeg' width='100%'><p>Vay be düzleştirici yoktu o zaman tabii</p>",
  // 14
  "<p>Filmleri izlemeyecek gibisin de neyse</p><a href='https://www.imdb.com/title/tt0457939/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_the%2520holiday' target='_blank'>İzlemesen de listen de olsun</a>",
  // 15
  "<p>Bugünün şarkısı(nasihati)🎵</p><a href='https://open.spotify.com/intl-tr/track/44LYmTNbX7qlwSHcCxWBP2?si=0092af41470748d7' target='_blank'>Ders olur belki</a>",
  // 16
  "<p>Umarım önceden izlememişsindir</p><a href='https://www.youtube.com/watch?v=NEOt_OeW_dE' target='_blank'>İzle molanda falan</a>",

  // 17
  "<img src='gun17.jpeg' width='100%'><p>Bunu pp yapablr mym ltfen..</p>",
  // 18
  "<p>Bugünün filmi 🎥</p><a href='https://www.imdb.com/title/tt28182736/?ref_=nv_sr_srsg_1_tt_5_nm_3_in_0_q_pupp' target='_blank'>Biraz da komedi</a>",
  // 19
  "<p>Şarkı günü 🎼</p><a href='https://open.spotify.com/intl-tr/track/4cHrCNJTdMfbtY0fjc5ged?si=42db5808808a48d4' target='_blank'>Babadan biraz şarkı</a>",
  // 20
  "<p>Bugün bunu izle ▶️</p><a href='https://www.youtube.com/watch?v=Ow4h9HRkjx8' target='_blank'>Aç ve izle sarar belki</a>",

  // 21
  "<img src='gun21.jpeg' width='100%'><p>Vallaha yani glow up diyince de biz. Bok gibiyim amaa sen orda da güzlesin lan.Eşşek kızzzz eşşeeeeEEEEkkkk</p>",
  // 22
  "<p>Film önerisi (evet yine)🎬</p><a href='https://www.imdb.com/title/tt0240890/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_serend' target='_blank'>Bunu herkes çok öneriyodu o yüzden ben de izlicem sen de tm mı???</a>",
  // 23
  "<p>Kocam olmadığın için 2. Fav şarkım sana (Kocamda yok ama elbet bir gün..kırık gül emojisi emojiyi bulamadım)</p><a href='https://open.spotify.com/intl-tr/track/26STW71RUdViQnRNxs4VZX?si=c52cead43f8a4109' target='_blank'>En sevdiğim şarkı ileride ki kocama saklı o yüzden sana bu</a>",
  // 24
  "<p>Son gün lAAAANNNNN 🎄 İyi ki varsın. İyi ki hayatımdasın. Sevdiğim tek sarışınım!</p><a href='https://www.youtube.com/watch?v=W-okB3yo8Xo' target='_blank'>Bunu beni düşünerek dinlemen dileğiyle hayatım. Seni seviyorum.Sınav için hiçbir zaman stres yapma. Sadece çalış ve kimseyi kafana takma. az kaldı biliyorum azıcık dişini sık katü gelecek <3</a>"
];

function openDay(day) {
  if(day > currentDay){
    alert("Açma demedim mi eşşek kız!");
    return;
  }
  popupText.innerHTML = contents[day - 1];
  popup.style.display = "block";
}

// Takvim kutularını oluştur
for(let i = 1; i <= 24; i++){
  const box = document.createElement("div");
  box.className = "day";
  box.innerText = i;
  if(i > currentDay) box.classList.add("locked");
  box.addEventListener("click", ()=> openDay(i));
  calendar.appendChild(box);
}

// Close buton
closeBtn.addEventListener("click", ()=>{
  popup.style.display = "none";
});


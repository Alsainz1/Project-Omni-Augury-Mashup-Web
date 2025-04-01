/* 0.5.1 2020-12-04 18:40:10 */
var app=new function(){this.name="Augury",this.version="Omni Augury",this.date="2024",this.folder="asset-v1/",this.looptime=6400,this.bpm=150,this.totalframe=350,this.nbpolo=7,this.nbloopbonus=10,this.bonusloopA=!0,this.bonusendloopA=!1,this.recmaxloop=34,this.recminloop=4,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.spritepolo="polo-sprite.png",this.spritepicto="game-picto.png",this.colBck="#170723",this.col0="#573C6A",this.col1="#422758",this.col2="#2E1642",this.col3="#241036",this.col4="#170723",this.animearray=[{name:"1_bloco",color:"3C60D8",uniqsnd:!1},{name:"2_screws",color:"3C60D8",uniqsnd:!1},{name:"3_circuit",color:"3C60D8",uniqsnd:!1},{name:"4_saul",color:"3C60D8",uniqsnd:!1},{name:"5_knox",color:"3C60D8",uniqsnd:!0},{name:"6_bass",color:"A5281E",uniqsnd:!1},{name:"7_chipy",color:"A5281E",uniqsnd:!1},{name:"8_cash",color:"A5281E",uniqsnd:!1},{name:"9_muhan",color:"A5281E",uniqsnd:!1},{name:"10_bricks",color:"A5281E",uniqsnd:!1},{name:"11_polno",color:"6F3896",uniqsnd:!1},{name:"12_siren",color:"6F3896",uniqsnd:!1},{name:"13_quartz",color:"6F3896",uniqsnd:!0},{name:"14_blackwood",color:"6F3896",uniqsnd:!1},{name:"15_potion",color:"6F3896",uniqsnd:!1},{name:"16_invision",color:"3CAB9E",uniqsnd:!1},{name:"17_gemdemon",color:"3CAB9E",uniqsnd:!1},{name:"18_baylor",color:"3CAB9E",uniqsnd:!1},{name:"19_loan",color:"3CAB9E",uniqsnd:!1},{name:"20_henry",color:"3CAB9E",uniqsnd:!1},{name:"beat1_boxie",color:"293562",uniqsnd:!1},{name:"beat2_screws",color:"293562",uniqsnd:!1},{name:"beat3_tiky",color:"293562",uniqsnd:!1},{name:"beat4_chester",color:"293562",uniqsnd:!1},{name:"beat5_skull",color:"293562",uniqsnd:!0},{name:"effet6_bass",color:"953630",uniqsnd:!1},{name:"effet7_bonky",color:"953630",uniqsnd:!0},{name:"effet8_atm",color:"953630",uniqsnd:!1},{name:"effet9_mike",color:"953630",uniqsnd:!1},{name:"effet10_bricks",color:"953630",uniqsnd:!1},{name:"melo11_luis",color:"67497C",uniqsnd:!1},{name:"melo12_candles",color:"67497C",uniqsnd:!1},{name:"melo13_christal",color:"67497C",uniqsnd:!0},{name:"melo14_guard",color:"67497C",uniqsnd:!1},{name:"melo15_potion",color:"67497C",uniqsnd:!1},{name:"voice16_souls",color:"476876",uniqsnd:!1},{name:"voice17_demon",color:"476876",uniqsnd:!1},{name:"voice18_jack",color:"476876",uniqsnd:!1},{name:"voice19_loan",color:"476876",uniqsnd:!1},{name:"voice20_hehe",color:"476876",uniqsnd:!1}],this.bonusarray=[];for(var n=0,o=this.animearray.length;n<o;n++){var a=this.animearray[n].name;this.animearray[n].soundA=a+"_a",this.animearray[n].soundB=this.animearray[n].uniqsnd?a+"_a":a+"_b",this.animearray[n].anime=a+"-sprite.png",this.animearray[n].animeData=a+".json"}};

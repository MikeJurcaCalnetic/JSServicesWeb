const tradesWrap = document.querySelector('.trades-wrap .trades-wrap_values');
const tradesWrapRisk = document.querySelector('.trades-wrap .trades-wrap_risks');


Date.prototype.toMonthString = function(){
	switch(this.getMonth()){
	    
	    case 0: return 'Jan'; break;
	    case 1: return 'Feb'; break;
	    case 2: return 'Mar'; break;
	    case 3: return 'Apr'; break;
	    case 4: return 'May'; break;
	    case 5: return 'Jun'; break;
	    case 6: return 'Jul'; break;
	    case 7: return 'Aug'; break;
	    case 8: return 'Sep'; break;
	    case 9: return 'Oct'; break;
	    case 10: return 'Nov'; break;
	    case 11: return 'Dec'; break;
	    }
}
Date.prototype.getContactMonth = function(){
	switch(this.getMonth()){
    
	    case 0: return 'F'; break;
	    case 1: return 'G'; break;
	    case 2: return 'H'; break;
	    case 3: return 'J'; break;
	    case 4: return 'K'; break;
	    case 5: return 'M'; break;
	    case 6: return 'N'; break;
	    case 7: return 'Q'; break;
	    case 8: return 'U'; break;
	    case 9: return 'V'; break;
	    case 10: return 'X'; break;
	    case 11: return 'Z'; break;
	    }
}
Date.prototype.getFullDate = function(){
    const thisDate = (this.getDate()).toString()
    if(thisDate.length === 1) {
        return '0' + thisDate;
    }
    return thisDate;   
}

Date.prototype.getFullMonth = function(){
    const thisMonth = (this.getMonth() + 1).toString();
    if(thisMonth.length === 1) {
        return '0' + thisMonth
    }
    return thisMonth;   
}

document.querySelectorAll('.section-info .header .tab a').forEach(item => {

  item.addEventListener('click',(e)=>{
    e.preventDefault();
    const id = e.target.getAttribute('href');
    
    document.querySelectorAll('.section-info .tab').forEach(node =>{
    	node.classList.remove('active-tab');
    })

    document.querySelectorAll('.section-info .info-wrap .item').forEach(node => {
     	node.classList.remove('active');
    });
   
	e.target.parentElement.classList.add('active-tab');   
    document.querySelector(`#${id}`).classList.add('active');  
  })
})
function colorize() {
  return (ctx) => {
    var v = ctx.parsed.x;
    var c = v > 0? 'blue'
      : 'red'
    return  c 
  };
}

const canvas = document.querySelector('#itemGraph');
const myChart = new Chart(canvas, {
    type: 'line',
    data: {
        labels: [1,2,3,4,5,6,7,8,9,10],
        datasets: [{
            label:'MCV PLOT',
            data: [1,2,3,4,5,6,7,8,9,10], 
            borderColor: 'rgb(0,0,0)',
            tension: 0.4,
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
            ticks:{
                font:{
                    size: 10,
                    color: '#000'
                    }
                }
            },
            x: {
              display: false
            }
        },
        plugins:{
          legend:{
            display: false
          }
        }
    },
    // plugins: [
    //      quadrants = {
    //         id: 'quadrants',
    //         beforeDraw(chart, args, options) {
    //         const {ctx, chartArea: {left, top, right, bottom, width, height}, scales: {x, y}} = chart;
    //         const midX = x.getPixelForValue(0);
    //         const midY = y.getPixelForValue(0);
    //         ctx.save();
    //         ctx.fillStyle = '#F6F387';
    //         ctx.fillRect(left, top, width, height * 2 / 22);
    //         ctx.fillStyle = '#6872C2';
    //         ctx.fillRect(left, top + height * 2 / 22, width, height * 5 / 22);
    //         ctx.fillStyle = '#BAA392'
    //         ctx.fillRect(left, top + height * 7 / 22, width, height * 8 / 22);
    //         ctx.fillStyle = '#E47C7C';
    //         ctx.fillRect(left, top + height * 15 / 22, width, height * 5 / 22);
    //         ctx.fillStyle = '#F6F387';
    //         ctx.fillRect(left,top + height * 20 / 22, width, height * 2 / 22);
    //         ctx.restore();
    //       }
    //     }
    // ]
});

const canvasVolume = document.querySelector('#volumeGraph');
const volumeChart = new Chart(canvasVolume,{
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label:'Volume',
            data: [], 
            borderColor: 'rgb(0,0,0)',
            tension: 0.4,
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                // max: 11,
                // min: -11
                ticks:{
                    font:{
                        size: 10,
                        color: '#000'
                    }
                }
            },
            x: {
              display: false
            }
        },
        plugins:{
          legend:{
            display: false
          }
        }
    },
});

const canvasDiscovery = document.querySelector('#discoveryGraph');
const discoveryChart = new Chart(canvasDiscovery,{
  type: 'bar',
  data: {
        // labels: ['UT3', 'UL05+', 'UL05-', 'UL04+', 'UL04-', 'UT2++', 'UT2+', 'UT2', 'UT2-', 'UT2--', 'UL02+', 'UL02', 'UL02-',
        //          'UT1++', 'UT1+', 'UT1', 'UT1-', 'UT1--', 'CRX++', 'CRX+', 'CRX+-',  'UP++', 'UP+', 'UP',  'UP-', 'UP--', 
        //          'CR++', 'CR+', 'CR+-', 'DIR++', 'DIR+', 'DIR', 'DIR-', 'DIR--', 'CR-+', 'CR-', 'CR--', 'DP++', 'DP+', 'DP', 'DP-', 'DP--',
        //          'CRX-+', 'CRX-', 'CRX--', 'DT1++', 'DT1+', 'DT1', 'DT1-', 'DT1--', 'DL02+', 'DL02', 'DL02-',
        //          'DT2++', 'DT2+', 'DT2', 'DT2-', 'DT2--', 'DL04+', 'DL04-', 'DL05+', 'DL05-', 'DT3++', 'DT3+', 'DT3', 'DT3-', 'DT3--'],
        labels: ['UT3', '', '', '', '', '', '', 'UT2', '', '', '', '', '',
                 '', '', 'UT1', '', '', '', 'CRX+', '',  '', '', 'UP',  '', '', 
                 '', 'CR+', '', '', '', 'DIR', '', '', '', 'CR-', '', '', '', 'DP', '', '',
                 '', 'CRX-', '', '', '', 'DT1', '', '', '', 'DL02', '',
                 '', '', 'DT2', '', '', '', '', '', '', '', '', 'DT3   ', '', ''],
        datasets: [{
            label:'discovery',
            data: [], 
            tension: 0.1,
        }]
    },
    options: {
        indexAxis: 'y',
        scales:{
          x:{
            max: 1,
            min: -1,
            ticks:{
              font: {
                size: 8
              },
            },
          },
          y:{
            display: 'auto',
            ticks:{
              font: {
                size: 8
              },
            },
          },
        },
        plugins:{
          legend:{
            display: false
          }
        },
    },
    responsive: true,
});



function renderGraph(data){
  const dateToShow = data.sort((a,b) => (a.date>b.date)?1:-1 )
  myChart.data.datasets[0].data = dateToShow.map(item => item.apmd);
  myChart.data.labels = dateToShow.map(item => item.date);
  volumeChart.data.datasets[0].data = dateToShow.map(item => item.volume);
  volumeChart.data.labels = dateToShow.map(item => item.date);
  myChart.update();
  volumeChart.update();
}
function renderDiscoveryGraph(data){
  discoveryChart.data.datasets[0].data = data;
  discoveryChart.update();
}
function discoveryGraphCalculations(currentObj, last,arr){
  const currentObject = currentObj[0];
  const currentDaySymbol = currentObject.name.split('.')[0] + '.' + currentObject.name.split('.')[1] + '.D';
  const currentDay = null || currentObj[0].currentDate;
  // const currentDateObject = (currentObject.currentDate && currentObject.date != currentObject.currentDate)
  //                     ?arr.filter(item => item.name == currentDaySymbol && item.date == currentDay)[0]
  //                     :currentObj[0];

  const currentDateObject = arr.filter(item => item.name == currentDaySymbol)[0]
                                         
  const varValue = +currentObject.var;
  const adValue = +currentObject.ad;
  const lastValue = +last;
  
 class ObjectZones{
    constructor(){

    }
    set values(itemObj){
    const adValue  = +itemObj.ad,
          varValue = +itemObj.var,
          rValue   = +itemObj.r,
          cPlus    = +itemObj.cplus,
          ut4      = +itemObj.pricemap2ut4,
          ul08     = +itemObj.pricemap3ut32,
          ul07     = +itemObj.pricemap4ut31,
          ut3      = +itemObj.pricemap5ut3,
          ul05     = +itemObj.pricemap6ut22,
          ul04     = +itemObj.pricemap7ut21,
          ut2      = +itemObj.pricemap8ut2,
          ul02     = +itemObj.pricemap9ut11,
          ut1      = +itemObj.pricemap10ut1,
          crxPlux  = +itemObj.pricemap11crx,
          up       = +itemObj.pricemap12up,
          crPlus   = +itemObj.pricemap13cr,
          dir      = +itemObj.pricemap14dir,
          crMinus  = +itemObj.pricemap15cr,
          dp       = +itemObj.pricemap16dp,
          crxMinus = +itemObj.pricemap17crx,
          dt1      = +itemObj.pricemap18dt1,
          dl02     = +itemObj.pricemap19dt11,
          dt2      = +itemObj.pricemap20dt2,
          dl04     = +itemObj.pricemap21dt21,
          dl05     = +itemObj.pricemap22dt22,
          dt3      = +itemObj.pricemap23dt3,
          dl07     = +itemObj.pricemap24dt31,
          dl08     = +itemObj.pricemap25dt32,
          dt4      = +itemObj.pricemap26dt4,
          cMinus   = +itemObj.cminus

    this.RR2 = rValue + adValue
    this.RR1 = rValue + varValue
    this.RR = rValue 
    this.RR01 = rValue - varValue
    this.RR02= rValue - adValue
    this.XXX =  null
    this.AA2 = cPlus + adValue
    this.AA1 = cPlus + varValue
    this.AA = cPlus
    this.AA01 = cPlus - varValue
    this.AA02 = cPlus -adValue
    this.NO = null
    this.N2 = ut4 + adValue
    this.N1 = ut4 + varValue
    this.N = ut4 
    this.N01 = ut4 - varValue
    this.N02 = ut4 - adValue
    this.MN = (ut4 + ul08) / 2 
    this.M1 = ul08 + varValue
    this.M01 = ul08 
    this.M02 = ul08 - varValue 
    this.LM = (ul08 + ul07) / 2 
    this.K1 = ul07 + varValue 
    this.K01 = ul07 
    this.K02 = ul07 - varValue 
    this.JK = (ul07 + ut3) / 2 
    this.J2 = ut3 + adValue 
    this.H1 = ut3 + varValue
    this.J = ut3 
    this.J01 = ut3 - varValue 
    this.J02 = ut3 - adValue
    this.IJ = (ut3 + ul05) / 2 
    this.I1 = ul05 + varValue 
    this.I01 = ul05 
    this.I02 = ul05 - varValue 
    this.HI = (ul05 + ul04) / 2 
    this.HI1 = ul04 + varValue 
    this.H01 = ul04
    this.H02 = ul04 - varValue 
    this.GH = (ul04 + ut2) / 2 
    this.G2 = ut2 + adValue 
    this.G1 = ut2 + varValue
    this.G = ut2 
    this.G01 = ut2 - varValue 
    this.G02 = ut2 - adValue
    this.FG = (ul02 + ut2) / 2 
    this.F1 = ul02 + varValue 
    this.F = ul02
    this.F01 = ul02 - varValue 
    this.EF = (ul02 + ut1) / 2 
    this.E2 = ut1 + adValue 
    this.E1 = ut1 + varValue
    this.E = ut1
    this.E01 = ut1 - varValue 
    this.E02 = ut1 - adValue
    this.DE =  (ut1 + crxPlux) / 2 
    this.D1 = crxPlux + varValue 
    this.D = crxPlux 
    this.D01 = crxPlux - varValue 
    this.CD = (up + crxPlux) / 2 
    this.C2 = up + adValue 
    this.C1 = up + varValue 
    this.C = up 
    this.C01 = up - varValue 
    this.C02 = up - adValue
    this.BC = (crPlus + up) / 2 
    this.B1 = crPlus + varValue 
    this.B = crPlus 
    this.B01 = crPlus - varValue 
    this.AB = (dir + crPlus) / 2 
    this.A2 = dir + adValue
    this.A1 = dir + varValue 
    this.A = dir 
    this.A01 = dir - varValue 
    this.A02 = dir - adValue 
    this.AZ =  (dir + crMinus) / 2
    this.Z1 = crMinus + varValue 
    this.Z = crMinus
    this.Z01 = crMinus - varValue
    this.ZY = (dp + crMinus) / 2 
    this.Y2 = dp + adValue 
    this.Y1 = dp + varValue 
    this.Y = dp 
    this.Y01 = dp - varValue 
    this.Y02 = dp - adValue 
    this.YX = (dp + crxMinus) / 2  
    this.X1 = crxMinus + varValue 
    this.X = crxMinus 
    this.X01 = crxMinus - varValue 
    this.XW = (crxMinus + dt1) / 2 
    this.W2 = dt1 + adValue 
    this.W1 = dt1 + varValue 
    this.W = dt1 
    this.W01 = dt1 - varValue 
    this.W02 = dt1 - adValue 
    this.WV = (dt1 + dl02) / 2 
    this.V1 = dl02 + varValue 
    this.V = dl02 
    this.V01 = dl02 - varValue 
    this.VU = (dl02 + dt2) / 2 
    this.U2 = dt2 + adValue 
    this.U1 = dt2 + varValue 
    this.U = dt2 
    this.U01 = dt2 - varValue 
    this.U02 = dt2 - adValue 
    this.UT = (dt2 + dl04) / 2 
    this.T1 = dl04 + varValue 
    this.T = dl04 
    this.T01 = dl04 - varValue 
    this.TS = (dl04 + dl05) / 2 
    this.S1 = dl05 + varValue 
    this.S = dl05 
    this.S01 = dl05 - varValue 
    this.SR = (dl05 + dt3) / 2 
    this.R2 = dt3 + adValue 
    this.R1 = dt3 + varValue 
    this.R = dt3 
    this.R01 = dt3 - varValue 
    this.R02 = dt3 - adValue 
    this.RQ = (dt3 + dl07) / 2
    this.Q1 = dl07 + varValue 
    this.Q = dl07 
    this.Q01 = dl07 - varValue 
    this.QP = (dl07 + dl08) / 2 
    this.P1 = dl08 + varValue 
    this.P = dl08 
    this.P01 = dl08 - varValue 
    this.PO = (dl08 + dt4) / 2 
    this.O2 = dt4 + adValue 
    this.O1 = dt4 + varValue 
    this.O = dt4 
    this.O01 = dt4 - varValue 
    this.O02 = dt4 - adValue 
    this.ON = null 
    this.ZZ2 = dt4 + adValue 
    this.ZZ1 = dt4 + varValue 
    this.ZZ = dt4 
    this.ZZ01 = dt4 - varValue
    this.ZZ02 = dt4 - adValue

    
    // this.a1RR2 = rValue + adValue
    // this.a2RR1 = rValue + varValue
    // this.a3RR = rValue 
    // this.a4RR01 = rValue - varValue
    // this.a5R02= rValue - adValue
    // this.a6XXX =  null
    // this.a7AA2 = cPlus + adValue
    // this.a8AA1 = cPlus + varValue
    // this.a9AA = cPlus
    // this.a10AA01 = cPlus - varValue
    // this.a11AA02 = cPlus -adValue
    // this.a13NO = null
    // this.a14N2 = ut4 + adValue
    // this.a15N1 = ut4 + varValue
    // this.a16N = ut4 
    // this.a17N01 = ut4 - varValue
    // this.a18N02 = ut4 - adValue
    // this.a19MN = (ut4 + ul08) / 2 
    // this.a20M1 = ul08 + varValue
    // this.a21M01 = ul08 
    // this.a22M02 = ul08 - varValue 
    // this.a23LM = (ul08 + ul07) / 2 
    // this.a23K1 = ul07 + varValue 
    // this.a24K01 = ul07 
    // this.a25K02 = ul07 - varValue 
    // this.a26JK = (ul07 + ut3) / 2 
    // this.a27J2 = ut3 + adValue 
    // this.a28H1 = ut3 + varValue
    // this.a29J = ut3 
    // this.a30J01 = ut3 - varValue 
    // this.a31J02 = ut3 - adValue
    // this.a32IJ = (ut3 + ul05) / 2 
    // this.a33I1 = ul05 + varValue 
    // this.a34I01 = ul05 
    // this.a35I02 = ul05 - varValue 
    // this.a36HI = (ul05 + ul04) / 2 
    // this.a37HI1 = ul04 + varValue 
    // this.a38H01 = ul04
    // this.a39H02 = ul04 - varValue 
    // this.a40GH = (ul04 + ut2) / 2 
    // this.a41G2 = ut2 + adValue 
    // this.a42G1 = ut2 + varValue
    // this.a43G = ut2 
    // this.a44G01 = ut2 - varValue 
    // this.a45G45 = ut2 - adValue
    // this.a46FG = (ul02 + ut2) / 2 
    // this.a47F1 = ul02 + varValue 
    // this.a48F = ul02
    // this.a49F01 = ul02 - varValue 
    // this.a50EF = (ul02 + ut1) / 2 
    // this.a51E2 = ut1 + adValue 
    // this.a52E1 = ut1 + varValue
    // this.a53E = ut1
    // this.a54E01 = ut1 - varValue 
    // this.a55E02 = ut1 - adValue
    // this.a56DE =  (ut1 + crxPlux) / 2 
    // this.a57D1 = crxPlux + varValue 
    // this.a58D = crxPlux 
    // this.a59D01 = crxPlux - varValue 
    // this.a60CD = (up + crxPlux) / 2 
    // this.a61C2 = up + adValue 
    // this.a62C1 = up + varValue 
    // this.a63C = up 
    // this.a64C01 = up - varValue 
    // this.a65C02 = up - adValue
    // this.a66BC = (crPlus + up) / 2 
    // this.a67B1 = crPlus + varValue 
    // this.a68B = crPlus 
    // this.a69B01 = crPlus - varValue 
    // this.a70AB = (dir + crPlus) / 2 
    // this.a71A2 = dir + adValue
    // this.a72A1 = dir + varValue 
    // this.a73A = dir 
    // this.a74A01 = dir - varValue 
    // this.a75A02 = dir - adValue 
    // this.a76AZ =  (dir + crMinus) / 2
    // this.a77Z1 = crMinus + varValue 
    // this.a78Z = crMinus
    // this.a79Z01 = crMinus - varValue
    // this.a80ZY = (dp + crMinus) / 2 
    // this.a81Y2 = dp + adValue 
    // this.a82Y1 = dp + varValue 
    // this.a83Y = dp 
    // this.a84Y01 = dp - varValue 
    // this.a85Y02 = dp - adValue 
    // this.a86YX = (dp + crxMinus) / 2  
    // this.a87X1 = crxMinus + varValue 
    // this.a88X = crxMinus 
    // this.a89X01 = crxMinus - varValue 
    // this.a90XW = (crxMinus + dt1) / 2 
    // this.a91W2 = dt1 + adValue 
    // this.a92W1 = dt1 + varValue 
    // this.a93W = dt1 
    // this.a94W01 = dt1 - varValue 
    // this.a95W02 = dt1 - adValue 
    // this.a96WV = (dt1 + dl02) / 2 
    // this.a97V1 = dl02 + varValue 
    // this.a98V = dl02 
    // this.a99V01 = dl02 - varValue 
    // this.a100VU = (dl02 + dt2) / 2 
    // this.a101U2 = dt2 + adValue 
    // this.a102U1 = dt2 + varValue 
    // this.a103U = dt2 
    // this.a104U01 = dt2 - varValue 
    // this.a105U02 = dt2 - adValue 
    // this.a106UT = (dt2 + dl04) / 2 
    // this.a107T1 = dl04 + varValue 
    // this.a108T = dl04 
    // this.a109T01 = dl04 - varValue 
    // this.a110TS = (dl04 + dl05) / 2 
    // this.a111S1 = dl05 + varValue 
    // this.a112S = dl05 
    // this.a113S01 = dl05 - varValue 
    // this.a114SR = (dl05 + dt3) / 2 
    // this.a115R2 = dt3 + adValue 
    // this.a116R1 = dt3 + varValue 
    // this.a117R = dt3 
    // this.a118R01 = dt3 - varValue 
    // this.a119R02 = dt3 - adValue 
    // this.a120RQ = (dt3 + dl07) / 2
    // this.a121Q1 = dl07 + varValue 
    // this.a122Q = dl07 
    // this.a123Q01 = dl07 - varValue 
    // this.a124QP = (dl07 + dl08) / 2 
    // this.a125P1 = dl08 + varValue 
    // this.a126P = dl08 
    // this.a127P01 = dl08 - varValue 
    // this.a128PO = (dl08 + dt4) / 2 
    // this.a129O2 = dt4 + adValue 
    // this.a130O1 = dt4 + varValue 
    // this.a131O = dt4 
    // this.a132O01 = dt4 - varValue 
    // this.a133O02 = dt4 - adValue 
    // this.a134ON = null 
    // this.a135ZZ2 = dt4 + adValue 
    // this.a136ZZ1 = dt4 + varValue 
    // this.a137ZZ = dt4 
    // this.a138ZZ01 = dt4 - varValue
    // this.a139ZZ02 = dt4 - adValue
    }
    get priceMapZoneValues(){
      return{
        ut3 : this.J, 
        ul05p : this.I1, 
        ul05m : this.I02, 
        ul04p : this.HI1, 
        ul04m : this.H02, 
        ut2pp : this.G2, 
        ut2p : this.G1, 
        ut2 : this.G, 
        ut2m : this.G01, 
        ut2mm : this.G02,
        ul02p : this.F1,
        ul02 : this.F, 
        ul02m : this.F01, 
        ut1pp : this.E2, 
        ut1p : this.E1, 
        ut1 : this.E, 
        ut1m : this.E01, 
        ut1mm : this.E02, 
        crxPlusp : this.DT1, 
        crxPlus : this.D, 
        crxPlusm : this.D01, 
        uppp : this.C2,
        upp : this.C1, 
        up : this.C, 
        upm : this.C01, 
        upmm : this.C02, 
        crPlusp : this.B1,
        crPlus : this.B, 
        crPlusm : this.B01, 
        dirpp : this.A2, 
        dirp : this.A1, 
        dir : this.A, 
        dirm : this.A01, 
        dirmm : this.A02, 
        crMinusp : this.Z1, 
        crMinus : this.Z, 
        crMinusm : this.Z01,
        dppp : this.Y2, 
        dpp : this.Y1,
        dp : this.Y, 
        dpm : this.Y01, 
        dpmm : this.Y02, 
        crxMinusp : this.X1, 
        crxMinus : this.X, 
        crxMinusm : this.X01, 
        dt1pp : this.W2, 
        dt1p : this.W1, 
        dt1 : this.W, 
        dt1m : this.W01, 
        dt1mm : this.W02,
        dl02p : this.V1, 
        dl02 : this.V, 
        dl02m : this.V01, 
        dt2pp : this.U2, 
        dt2p : this.U1, 
        dt2 : this.U, 
        dt2m : this.U01, 
        dt2mm : this.U02, 
        dl04p : this.T1, 
        dl04 : this.T, 
        dl04m : this.T01, 
        dl05p : this.S1, 
        dl05 : this.S, 
        dl05m : this.S01,
        dt3pp : this.R2, 
        dt3p : this.R1, 
        dt3 : this.R, 
        dt3m : this.R01, 
        dt3mm : this.R02
      }
    }
    get priceMapValues(){
      return{
        ut3 : this.J, 
        ul05 : this.I01, 
        ul04 : this.H01, 
        ut2 : this.G, 
        ul02 : this.F, 
        ut1 : this.E, 
        crxPlus : this.D, 
        up : this.C, 
        crPlus : this.B, 
        dir : this.A, 
        crMinus : this.Z, 
        dp : this.Y, 
        crxMinus : this.X, 
        dt1 : this.W, 
        dl02 : this.V, 
        dt2 : this.U, 
        dl04 : this.T, 
        dl05 : this.S, 
        dt3 : this.R, 

      }
    }
    get getTopBottom(){
      return{
        ut3Top: this.JK,
        ut3Bottom: this.IJ,
        ut2Top: this.GH,
        ut2Bottom: this.FG,
        ut1Top: this.EF,
        ut1Bottom: this.DE,
        upTop: this.CD,
        upBottom: this.BC,
        dirTop: this.AB,
        dirBottom: this.AZ,
        dpTop: this.ZY,
        dpBottom: this.YX,
        dt1Top: this.XW,
        dt1Bottom: this.WV,
        dt2Top: this.VU,
        dt2Bottom: this.UT,
        dt3Top: this.SR,
        dt3Bottom: this.RQ,
      }
    }

  }

  const currentItemZonesObject = new ObjectZones();
  const currentDayZonesObject = new ObjectZones();

  currentItemZonesObject.values = currentObject;
  currentDayZonesObject.values = currentDateObject;

 // function graphDataObject(zoneObj, varValue, adValue, lastValue){
 //  return {
 //    r: countIfFive(zoneObj.RR, adValue, varValue, zoneObj.RR),

 //    ut4: countIfSeven(zoneObj.N, adValue, varValue, zoneObj.N, zoneObj.NO, zoneObj.MN),

 //    ul08: countIfThree(zoneObj.M01, varValue, zoneObj.M01),
 //    ul07: countIfThree(zoneObj.K01, varValue, zoneObj.K01),

 //    ut3: countIfSeven(zoneObj.J, adValue, varValue, zoneObj.J, zoneObj.JK, zoneObj.IJ),
 //    ul05p: countIfThree(zoneObj.I1, varValue, zoneObj.I01),
 //    ul05m: countIfThree(zoneObj.I02, varValue, zoneObj.I01),

 //    ul04p: countIfThree(zoneObj.HI1, varValue, zoneObj.H01),
 //    ul04m: countIfThree(zoneObj.H02, varValue, zoneObj.H01),

 //    ut2pp: countIfSeven(zoneObj.G2, adValue, varValue, zoneObj.G, zoneObj.GH, zoneObj.FG),
 //    ut2p: countIfSeven(zoneObj.G1, adValue, varValue, zoneObj.G, zoneObj.GH, zoneObj.FG),
 //    ut2: countIfSeven(zoneObj.G, adValue, varValue, zoneObj.G, zoneObj.GH, zoneObj.FG),
 //    ut2m: countIfSeven(zoneObj.G01, adValue, varValue, zoneObj.G, zoneObj.GH, zoneObj.FG),
 //    ut2mm: countIfSeven(zoneObj.G02, adValue, varValue, zoneObj.G, zoneObj.GH, zoneObj.FG),

 //    ul02p: countIfThree(zoneObj.F1, varValue, zoneObj.F),
 //    ul02: countIfThree(zoneObj.F, varValue, zoneObj.F),
 //    ul02m: countIfThree(zoneObj.F01, varValue, zoneObj.F),

 //    ut1pp: countIfSeven(zoneObj.E2, adValue, varValue, zoneObj.E, zoneObj.EF, zoneObj.DE),
 //    ut1p: countIfSeven(zoneObj.E1, adValue, varValue, zoneObj.E, zoneObj.EF, zoneObj.DE),
 //    ut1: countIfSeven(zoneObj.E, adValue, varValue, zoneObj.E, zoneObj.EF, zoneObj.DE),
 //    ut1m: countIfSeven(zoneObj.E01, adValue, varValue, zoneObj.E, zoneObj.EF, zoneObj.DE),
 //    ut1mm: countIfSeven(zoneObj.E02, adValue, varValue, zoneObj.E, zoneObj.EF, zoneObj.DE),

 //    crxPlusp: countIfThree(zoneObj.D1, varValue, zoneObj.D),
 //    crxPlus: countIfThree(zoneObj.D, varValue, zoneObj.D),
 //    crxPlusm: countIfThree(zoneObj.D01, varValue, zoneObj.D),

 //    uppp: countIfSeven(zoneObj.C2, adValue, varValue, zoneObj.C, zoneObj.CD, zoneObj.BC),
 //    upp: countIfSeven(zoneObj.C1, adValue, varValue, zoneObj.C, zoneObj.CD, zoneObj.BC),
 //    up: countIfSeven(zoneObj.C, adValue, varValue, zoneObj.C, zoneObj.CD, zoneObj.BC),
 //    upm: countIfSeven(zoneObj.C01, adValue, varValue, zoneObj.C, zoneObj.CD, zoneObj.BC),
 //    upmm: countIfSeven(zoneObj.C02, adValue, varValue, zoneObj.C, zoneObj.CD, zoneObj.BC),

 //    crPlusp: countIfThree(zoneObj.B1, varValue, zoneObj.B),
 //    crPlus: countIfThree(zoneObj.B, varValue, zoneObj.B),
 //    crPlusm: countIfThree(zoneObj.B01, varValue, zoneObj.B),

 //    dirpp: countIfSeven(zoneObj.A2, adValue, varValue, zoneObj.A, zoneObj.AB, zoneObj.AZ),
 //    dirp: countIfSeven(zoneObj.A1, adValue, varValue, zoneObj.A, zoneObj.AB, zoneObj.AZ),
 //    dir: countIfSeven(zoneObj.A, adValue, varValue, zoneObj.A, zoneObj.AB, zoneObj.AZ),
 //    dirm: countIfSeven(zoneObj.A01, adValue, varValue, zoneObj.A, zoneObj.AB, zoneObj.AZ),
 //    dirmm: countIfSeven(zoneObj.A02, adValue, varValue, zoneObj.A, zoneObj.AB, zoneObj.AZ),

 //    crMinusp: countIfThree(zoneObj.Z1, varValue, zoneObj.Z),
 //    crMinus: countIfThree(zoneObj.Z, varValue, zoneObj.Z),
 //    crMinusm: countIfThree(zoneObj.Z01, varValue, zoneObj.Z),

 //    dppp: countIfSeven(zoneObj.Y2, adValue, varValue, zoneObj.Y, zoneObj.ZY, zoneObj.YX),
 //    dpp: countIfSeven(zoneObj.Y1, adValue, varValue, zoneObj.Y, zoneObj.ZY, zoneObj.YX),
 //    dp: countIfSeven(zoneObj.Y, adValue, varValue, zoneObj.Y, zoneObj.ZY, zoneObj.YX),
 //    dpm: countIfSeven(zoneObj.Y01, adValue, varValue, zoneObj.Y, zoneObj.ZY, zoneObj.YX),
 //    dpmm: countIfSeven(zoneObj.Y02, adValue, varValue, zoneObj.Y, zoneObj.ZY, zoneObj.YX),

 //    crxMinusp: countIfThree(zoneObj.X1, varValue, zoneObj.X),
 //    crxMinus: countIfThree(zoneObj.X, varValue, zoneObj.X),
 //    crxMinusm: countIfThree(zoneObj.X01, varValue, zoneObj.X),

 //    dt1pp: countIfSeven(zoneObj.W2, adValue, varValue, zoneObj.W, zoneObj.XW, zoneObj.WV),
 //    dt1p: countIfSeven(zoneObj.W1, adValue, varValue, zoneObj.W, zoneObj.XW, zoneObj.WV),
 //    dt1: countIfSeven(zoneObj.W, adValue, varValue, zoneObj.W, zoneObj.XW, zoneObj.WV),
 //    dt1m: countIfSeven(zoneObj.W01, adValue, varValue, zoneObj.W, zoneObj.XW, zoneObj.WV),
 //    dt1mm: countIfSeven(zoneObj.W02, adValue, varValue, zoneObj.W, zoneObj.XW, zoneObj.WV),

 //    dl02p: countIfThree(zoneObj.V1, varValue, zoneObj.V),
 //    dl02: countIfThree(zoneObj.V, varValue, zoneObj.V),
 //    dl02m: countIfThree(zoneObj.V01, varValue, zoneObj.V),

 //    dt2pp: countIfSeven(zoneObj.U2, adValue, varValue, zoneObj.U, zoneObj.VU, zoneObj.UT),
 //    dt2p: countIfSeven(zoneObj.U1, adValue, varValue, zoneObj.U, zoneObj.VU, zoneObj.UT),
 //    dt2: countIfSeven(zoneObj.U, adValue, varValue, zoneObj.U, zoneObj.VU, zoneObj.UT),
 //    dt2m: countIfSeven(zoneObj.U01, adValue, varValue, zoneObj.U, zoneObj.VU, zoneObj.UT),
 //    dt2mm: countIfSeven(zoneObj.U02, adValue, varValue, zoneObj.U, zoneObj.VU, zoneObj.UT),

 //    dl04p: countIfThree(zoneObj.T1, varValue, zoneObj.T),
 //    dl04: countIfThree(zoneObj.T, varValue, zoneObj.T),
 //    dl04m: countIfThree(zoneObj.T01, varValue, zoneObj.T),

 //    dl05p: countIfThree(zoneObj.S1, varValue, zoneObj.S),
 //    dl05: countIfThree(zoneObj.S, varValue, zoneObj.S),
 //    dl05m: countIfThree(zoneObj.S01, varValue, zoneObj.S),

 //    dt3pp: countIfSeven(zoneObj.R2, adValue, varValue, zoneObj.R, zoneObj.SR, zoneObj.RQ),
 //    dt3p: countIfSeven(zoneObj.R1, adValue, varValue, zoneObj.R, zoneObj.SR, zoneObj.RQ),
 //    dt3: countIfSeven(zoneObj.R, adValue, varValue, zoneObj.R, zoneObj.SR, zoneObj.RQ),
 //    dt3m: countIfSeven(zoneObj.R01, adValue, varValue, zoneObj.R, zoneObj.SR, zoneObj.RQ),
 //    dt3mm: countIfSeven(zoneObj.R02, adValue, varValue, zoneObj.R, zoneObj.SR, zoneObj.RQ),

 //    dl07: countIfThree(zoneObj.Q, varValue, zoneObj.Q),
 //    dl08: countIfThree(zoneObj.P, varValue, zoneObj.P),
 //    dt4: countIfSeven(zoneObj.O, adValue, varValue, zoneObj.O, zoneObj.PO, zoneObj.ON)
 //  }

 //    function countIfThree(item, varValue,coreValue){
 //      if(item <= coreValue && item > coreValue - varValue) return -0.5;
 //      if(item > coreValue && item <= coreValue+ varValue) return 0.5;
 //      return 0; 
 //    }
 //    function countIfFive(item, adValue, varValue, lastValue){
 //        if(lastValue <= item && lastValue > item - varValue) return -1;
 //        if(lastValue <= item - varValue && lastValue > item - adValue) return -0.75;
 //        if(lastValue <= item - adValue && lastValue > item - adValue - varValue) return -1;
 //        if(lastValue >= item && lastValue < item + varValue) return 1;
 //        if(lastValue >= item + varValue && lastValue < item + adValue) return 0.75;
 //        if(lastValue >= item + adValue && lastValue < item + adValue + varValue) return 0.25;
 //        return 0;
 //    }
 //    function countIfSeven(item, adValue ,varValue ,coreValue, top, bottom){
 //        if(item <= coreValue && item > coreValue - varValue) return -1;
 //        if(item <= coreValue - varValue && item > coreValue - adValue) return -0.75;
 //        if(item <= coreValue - adValue && item > bottom) return -0.25;
 //        if(item >= coreValue && item < coreValue + varValue) return 1;
 //        if(item >= coreValue + varValue && item < coreValue + adValue) return 0.75;
 //        if(item >= coreValue + adValue && item < top) return 0.25;
 //        return 0; 
 //    }
 // }
 function graphDataObjectTest(zoneObj, varValue, adValue, lastValue, dayZoneMainObj){
  let graphValuesObj = {}
  let arrJJ = {};
  // console.log('dailyValues')
  // console.log(dayZoneMainObj.priceMapValues)
  // console.log('currentValues')
  // console.log(zoneObj.getTopBottom)
  // for(priceItem in dayZoneMainObj){
  //   let priceItemCounts = setGraphValues(zoneObj, varValue, adValue, lastValue, dayZoneMainObj[priceItem]);
  //   arrJJ.push(priceItemCounts);
  //   (priceItemCounts[priceItem] != 0)? graphValuesObj[priceItem] = priceItemCounts[priceItem]
  //                                   : graphValuesObj[priceItem] = 0;
  // }  
    for(priceMapItem in zoneObj.priceMapValues){
      let priceItemCounts = setGraphValues(zoneObj.priceMapValues[priceMapItem], varValue, adValue, lastValue, dayZoneMainObj, dayZoneMainObj.getTopBottom[`${priceMapItem}Top`], dayZoneMainObj.getTopBottom[`${priceMapItem}Bottom`])

      for(item in priceItemCounts) (graphValuesObj[item] == 0 || graphValuesObj[item] == null)? graphValuesObj[item] = priceItemCounts[item]: 0;
      arrJJ[priceMapItem] =   priceItemCounts     
       
       // console.log(`${priceMapItem} - ${zoneObj.priceMapValues[priceMapItem]}`)
    }

    function setGraphValues(zoneObj, varValue, adValue, lastValue, dayZoneObj, zoneObjTop, zoneObjBottom){

      return{
      ut3: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.J, zoneObjTop, zoneObjBottom),

      ul05p: countIfThree(zoneObj, varValue, dayZoneObj.I1),
      ul05m: countIfThree(zoneObj, varValue, dayZoneObj.I02),

      ul04p: countIfThree(zoneObj, varValue, dayZoneObj.HI1),
      ul04m: countIfThree(zoneObj, varValue, dayZoneObj.H02),

      ut2pp: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.G2, zoneObjTop, zoneObjBottom),
      ut2p: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.G1, zoneObjTop, zoneObjBottom),
      ut2: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.G, zoneObjTop, zoneObjBottom),
      ut2m: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.G01, zoneObjTop, zoneObjBottom),
      ut2mm: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.G02, zoneObjTop, zoneObjBottom),

      ul02p: countIfThree(zoneObj, varValue, dayZoneObj.F1),
      ul02: countIfThree(zoneObj, varValue, dayZoneObj.F),
      ul02m: countIfThree(zoneObj, varValue, dayZoneObj.F01),

      ut1pp: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.E2, zoneObjTop, zoneObjBottom),
      ut1p: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.E1, zoneObjTop, zoneObjBottom),
      ut1: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.E, zoneObjTop, zoneObjBottom),
      ut1m: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.E01, zoneObjTop, zoneObjBottom),
      ut1mm: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.E02, zoneObjTop, zoneObjBottom),

      crxPlusp: countIfThree(zoneObj, varValue.DT1, dayZoneObj),
      crxPlus: countIfThree(zoneObj, varValue.D, dayZoneObj),
      crxPlusm: countIfThree(zoneObj, varValue.D01, dayZoneObj),

      uppp: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.C2, zoneObjTop, zoneObjBottom),
      upp: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.C1, zoneObjTop, zoneObjBottom),
      up: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.C, zoneObjTop, zoneObjBottom),
      upm: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.C01, zoneObjTop, zoneObjBottom),
      upmm: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.C02, zoneObjTop, zoneObjBottom),

      crPlusp: countIfThree(zoneObj, varValue, dayZoneObj.B1),
      crPlus: countIfThree(zoneObj, varValue, dayZoneObj.B),
      crPlusm: countIfThree(zoneObj, varValue, dayZoneObj.B01),

      dirpp: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.A2, zoneObjTop, zoneObjBottom),
      dirp: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.A1, zoneObjTop, zoneObjBottom),
      dir: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.A, zoneObjTop, zoneObjBottom),
      dirm: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.A01, zoneObjTop, zoneObjBottom),
      dirmm: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.A02, zoneObjTop, zoneObjBottom),

      crMinusp: countIfThree(zoneObj, varValue, dayZoneObj.Z1),
      crMinus: countIfThree(zoneObj, varValue, dayZoneObj.Z),
      crMinusm: countIfThree(zoneObj, varValue, dayZoneObj.Z01),

      dppp: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.Y2, zoneObjTop, zoneObjBottom),
      dpp: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.Y1, zoneObjTop, zoneObjBottom),
      dp: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.Y, zoneObjTop, zoneObjBottom),
      dpm: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.Y01, zoneObjTop, zoneObjBottom),
      dpmm: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.Y02, zoneObjTop, zoneObjBottom),

      crxMinusp: countIfThree(zoneObj, varValue, dayZoneObj.X1),
      crxMinus: countIfThree(zoneObj, varValue, dayZoneObj.X),
      crxMinusm: countIfThree(zoneObj, varValue, dayZoneObj.X01),

      dt1pp: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.W2, zoneObjTop, zoneObjBottom),
      dt1p: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.W1, zoneObjTop, zoneObjBottom),
      dt1: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.W, zoneObjTop, zoneObjBottom),
      dt1m: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.W01, zoneObjTop, zoneObjBottom),
      dt1mm: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.S02, zoneObjTop, zoneObjBottom),

      dl02p: countIfThree(zoneObj, varValue, dayZoneObj.V1),
      dl02: countIfThree(zoneObj, varValue, dayZoneObj.V),
      dl02m: countIfThree(zoneObj, varValue, dayZoneObj.V01),

      dt2pp: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.U2, zoneObjTop, zoneObjBottom),
      dt2p: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.U1, zoneObjTop, zoneObjBottom),
      dt2: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.U, zoneObjTop, zoneObjBottom),
      dt2m: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.U01, zoneObjTop, zoneObjBottom),
      dt2mm: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.U02, zoneObjTop, zoneObjBottom),

      dl04p: countIfThree(zoneObj, varValue, dayZoneObj.T1),
      dl04m: countIfThree(zoneObj, varValue, dayZoneObj.T01),

      dl05p: countIfThree(zoneObj, varValue, dayZoneObj.S1),
      dl05m: countIfThree(zoneObj, varValue, dayZoneObj.S01),

      dt3pp: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.R2, zoneObjTop, zoneObjBottom),
      dt3p: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.R1, zoneObjTop, zoneObjBottom),
      dt3: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.R, zoneObjTop, zoneObjBottom),
      dt3m: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.R01, zoneObjTop, zoneObjBottom),
      dt3mm: countIfSeven(zoneObj, adValue, varValue, dayZoneObj.R02, zoneObjTop, zoneObjBottom),
      }
  }
    function countIfThree(coreValue, varValue, item){
      if(item <= coreValue && item > coreValue - varValue) return -0.5;
      if(item > coreValue && item <= coreValue + varValue) return 0.5;
      return 0; 
    }
    function countIfSeven(coreValue, adValue ,varValue ,item , top, bottom){
       // console.log(`NUMBER ${coreValue} TOP  ${top}   BOTTOM ${bottom}`);
        if(item <= coreValue && item > coreValue - varValue) return -1;
        if(item <= coreValue - varValue && item > coreValue - adValue) return -0.75;
        if(item <= coreValue - adValue && item > bottom) return -0.25;
        if(item >= coreValue && item < coreValue + varValue) return 1;
        if(item >= coreValue + varValue && item < coreValue + adValue) return 0.75;
        if(item >= coreValue + adValue && item < top) return 0.25;
        return 0; 
    }
  // function setGraphValues(zoneObj, varValue, adValue, lastValue, dayZoneObj){
  //   return{
  //   // r: countIfFive(zoneObj.RR, adValue, varValue, zoneObj.RR),

  //   // ut4: countIfSeven(zoneObj.N, adValue, varValue, zoneObj.N, zoneObj.NO, zoneObj.MN),

  //   // ul08: countIfThree(zoneObj.M01, varValue, zoneObj.M01),
  //   // ul07: countIfThree(zoneObj.K01, varValue, zoneObj.K01),
  //   ut3: countIfSeven(zoneObj.J, adValue, varValue, dayZoneObj, zoneObj.JK, zoneObj.IJ),

  //   ul05p: countIfThree(zoneObj.I01, varValue, dayZoneObj),
  //   ul05m: countIfThree(zoneObj.I01, varValue, dayZoneObj),

  //   ul04p: countIfThree(zoneObj.H01, varValue, dayZoneObj),
  //   ul04m: countIfThree(zoneObj.H01, varValue, dayZoneObj),

  //   ut2pp: countIfSeven(zoneObj.G, adValue, varValue, dayZoneObj, zoneObj.GH, zoneObj.FG),
  //   ut2p: countIfSeven(zoneObj.G, adValue, varValue, dayZoneObj, zoneObj.GH, zoneObj.FG),
  //   ut2: countIfSeven(zoneObj.G, adValue, varValue, dayZoneObj, zoneObj.GH, zoneObj.FG),
  //   ut2m: countIfSeven(zoneObj.G, adValue, varValue, dayZoneObj, zoneObj.GH, zoneObj.FG),
  //   ut2mm: countIfSeven(zoneObj.G, adValue, varValue, dayZoneObj, zoneObj.GH, zoneObj.FG),

  //   ul02p: countIfThree(zoneObj.F, varValue, dayZoneObj),
  //   ul02: countIfThree(zoneObj.F, varValue, dayZoneObj),
  //   ul02m: countIfThree(zoneObj.F, varValue, dayZoneObj),

  //   ut1pp: countIfSeven(zoneObj.E, adValue, varValue, dayZoneObj, zoneObj.EF, zoneObj.DE),
  //   ut1p: countIfSeven(zoneObj.E, adValue, varValue, dayZoneObj, zoneObj.EF, zoneObj.DE),
  //   ut1: countIfSeven(zoneObj.E, adValue, varValue, dayZoneObj, zoneObj.EF, zoneObj.DE),
  //   ut1m: countIfSeven(zoneObj.E, adValue, varValue, dayZoneObj, zoneObj.EF, zoneObj.DE),
  //   ut1mm: countIfSeven(zoneObj.E, adValue, varValue, dayZoneObj, zoneObj.EF, zoneObj.DE),

  //   crxPlusp: countIfThree(zoneObj.D, varValue, dayZoneObj),
  //   crxPlus: countIfThree(zoneObj.D, varValue, dayZoneObj),
  //   crxPlusm: countIfThree(zoneObj.D, varValue, dayZoneObj),

  //   uppp: countIfSeven(zoneObj.C, adValue, varValue, dayZoneObj, zoneObj.CD, zoneObj.BC),
  //   upp: countIfSeven(zoneObj.C, adValue, varValue, dayZoneObj, zoneObj.CD, zoneObj.BC),
  //   up: countIfSeven(zoneObj.C, adValue, varValue, dayZoneObj, zoneObj.CD, zoneObj.BC),
  //   upm: countIfSeven(zoneObj.C, adValue, varValue, dayZoneObj, zoneObj.CD, zoneObj.BC),
  //   upmm: countIfSeven(zoneObj.C, adValue, varValue, dayZoneObj, zoneObj.CD, zoneObj.BC),

  //   crPlusp: countIfThree(zoneObj.B, varValue, dayZoneObj),
  //   crPlus: countIfThree(zoneObj.B, varValue, dayZoneObj),
  //   crPlusm: countIfThree(zoneObj.B, varValue, dayZoneObj),

  //   dirpp: countIfSeven(zoneObj.A, adValue, varValue, dayZoneObj, zoneObj.AB, zoneObj.AZ),
  //   dirp: countIfSeven(zoneObj.A, adValue, varValue, dayZoneObj, zoneObj.AB, zoneObj.AZ),
  //   dir: countIfSeven(zoneObj.A, adValue, varValue, dayZoneObj, zoneObj.AB, zoneObj.AZ),
  //   dirm: countIfSeven(zoneObj.A, adValue, varValue, dayZoneObj, zoneObj.AB, zoneObj.AZ),
  //   dirmm: countIfSeven(zoneObj.A, adValue, varValue, dayZoneObj, zoneObj.AB, zoneObj.AZ),

  //   crMinusp: countIfThree(zoneObj.Z, varValue, dayZoneObj),
  //   crMinus: countIfThree(zoneObj.Z, varValue, dayZoneObj),
  //   crMinusm: countIfThree(zoneObj.Z, varValue, dayZoneObj),

  //   dppp: countIfSeven(zoneObj.Y, adValue, varValue, dayZoneObj, zoneObj.ZY, zoneObj.YX),
  //   dpp: countIfSeven(zoneObj.Y, adValue, varValue, dayZoneObj, zoneObj.ZY, zoneObj.YX),
  //   dp: countIfSeven(zoneObj.Y, adValue, varValue, dayZoneObj, zoneObj.ZY, zoneObj.YX),
  //   dpm: countIfSeven(zoneObj.Y, adValue, varValue, dayZoneObj, zoneObj.ZY, zoneObj.YX),
  //   dpmm: countIfSeven(zoneObj.Y, adValue, varValue, dayZoneObj, zoneObj.ZY, zoneObj.YX),

  //   crxMinusp: countIfThree(zoneObj.X, varValue, dayZoneObj),
  //   crxMinus: countIfThree(zoneObj.X, varValue, dayZoneObj),
  //   crxMinusm: countIfThree(zoneObj.X, varValue, dayZoneObj),

  //   dt1pp: countIfSeven(zoneObj.W, adValue, varValue, dayZoneObj, zoneObj.XW, zoneObj.WV),
  //   dt1p: countIfSeven(zoneObj.W, adValue, varValue, dayZoneObj, zoneObj.XW, zoneObj.WV),
  //   dt1: countIfSeven(zoneObj.W, adValue, varValue, dayZoneObj, zoneObj.XW, zoneObj.WV),
  //   dt1m: countIfSeven(zoneObj.W, adValue, varValue, dayZoneObj, zoneObj.XW, zoneObj.WV),
  //   dt1mm: countIfSeven(zoneObj.W, adValue, varValue, dayZoneObj, zoneObj.XW, zoneObj.WV),

  //   dl02p: countIfThree(zoneObj.V, varValue, dayZoneObj),
  //   dl02: countIfThree(zoneObj.V, varValue, dayZoneObj),
  //   dl02m: countIfThree(zoneObj.V, varValue, dayZoneObj),

  //   dt2pp: countIfSeven(zoneObj.U, adValue, varValue, dayZoneObj, zoneObj.VU, zoneObj.UT),
  //   dt2p: countIfSeven(zoneObj.U, adValue, varValue, dayZoneObj, zoneObj.VU, zoneObj.UT),
  //   dt2: countIfSeven(zoneObj.U, adValue, varValue, dayZoneObj, zoneObj.VU, zoneObj.UT),
  //   dt2m: countIfSeven(zoneObj.U, adValue, varValue, dayZoneObj, zoneObj.VU, zoneObj.UT),
  //   dt2mm: countIfSeven(zoneObj.U, adValue, varValue, dayZoneObj, zoneObj.VU, zoneObj.UT),

  //   dl04p: countIfThree(zoneObj.T, varValue, dayZoneObj),
  //   dl04: countIfThree(zoneObj.T, varValue, dayZoneObj),
  //   dl04m: countIfThree(zoneObj.T, varValue, dayZoneObj),

  //   dl05p: countIfThree(zoneObj.S, varValue, dayZoneObj),
  //   dl05: countIfThree(zoneObj.S, varValue, dayZoneObj),
  //   dl05m: countIfThree(zoneObj.S, varValue, dayZoneObj),

  //   dt3pp: countIfSeven(zoneObj.R, adValue, varValue, dayZoneObj, zoneObj.SR, zoneObj.RQ),
  //   dt3p: countIfSeven(zoneObj.R, adValue, varValue, dayZoneObj, zoneObj.SR, zoneObj.RQ),
  //   dt3: countIfSeven(zoneObj.R, adValue, varValue, dayZoneObj, zoneObj.SR, zoneObj.RQ),
  //   dt3m: countIfSeven(zoneObj.R, adValue, varValue, dayZoneObj, zoneObj.SR, zoneObj.RQ),
  //   dt3mm: countIfSeven(zoneObj.R, adValue, varValue, dayZoneObj, zoneObj.SR, zoneObj.RQ),

  //   // dl07: countIfThree(zoneObj.Q, varValue, dayZoneObj),
  //   // dl08: countIfThree(zoneObj.P, varValue, dayZoneObj),
  //   // dt4: countIfSeven(zoneObj.O, adValue, varValue, dayZoneObj, zoneObj.PO, zoneObj.ON)
  //   }
  // }
  //   function countIfThree(coreValue, varValue, item){
  //     if(item <= coreValue && item > coreValue - varValue) return -0.5;
  //     if(item > coreValue && item <= coreValue +varValue) return 0.5;
  //     return 0; 
  //   }
  //   function countIfFive(item, adValue, varValue, lastValue){
  //       if(lastValue <= item && lastValue > item - varValue) return -1;
  //       if(lastValue <= item - varValue && lastValue > item - adValue) return -0.75;
  //       if(lastValue <= item - adValue && lastValue > item - adValue - varValue) return -1;
  //       if(lastValue >= item && lastValue < item + varValue) return 1;
  //       if(lastValue >= item + varValue && lastValue < item + adValue) return 0.75;
  //       if(lastValue >= item + adValue && lastValue < item + adValue + varValue) return 0.25;
  //       return 0;
  //   }
  //   function countIfSeven(coreValue, adValue ,varValue ,item , top, bottom){
  //       if(item <= coreValue && item > coreValue - varValue) return -1;
  //       if(item <= coreValue - varValue && item > coreValue - adValue) return -0.75;
  //       if(item <= coreValue - adValue && item > bottom) return -0.25;
  //       if(item >= coreValue && item < coreValue + varValue) return 1;
  //       if(item >= coreValue + varValue && item < coreValue + adValue) return 0.75;
  //       if(item >= coreValue + adValue && item < top) return 0.25;
  //       return 0; 
  //   }
    // console.log(arrJJ)
  return graphValuesObj;
 } 

  let dataArrText;
  const dataObjText = graphDataObjectTest(currentItemZonesObject, varValue, adValue, lastValue, currentDayZonesObject);
  
  with(dataObjText){
  dataArrText = [ut3, ul05p, ul05m, ul04p, ul04m, ut2pp, ut2p, ut2, ut2m, ut2mm, ul02p, ul02, ul02m, 
         ut1pp, ut1p, ut1, ut1m, ut1mm, crxPlusp, crxPlus, crxPlusm, uppp,upp, up, upm, upmm, 
         crPlusp, crPlus, crPlusm, dirpp, dirp, dir, dirm, dirmm, crMinusp, crMinus, crMinusm,
         dppp, dpp, dp, dpm, dpmm, crxMinusp, crxMinus, crxMinusm, dt1pp, dt1p, dt1, dt1m, dt1mm,
         dl02p, dl02, dl02m, dt2pp, dt2p, dt2, dt2m, dt2mm, dl04p, dl04m, dl05p, dl05m,
         dt3pp, dt3p, dt3, dt3m, dt3mm] 
};
  discoveryChart.data.datasets[0].data = dataArrText
  discoveryChart.update();
  discoveryChart.options.elements.bar.backgroundColor = colorize()
};

function renderFilters(arr){

  const filterArrDates = [];
  const today = new Date();
  const nextDay = new Date();
  nextDay.setDate(today.getDate() + 1);
  const todayDayValue = `${today.getFullYear()}-${today.getFullMonth()}-${today.getFullDate()}`;
  
  // const filterArrIndicators = ['MCS','=R1','=R2','=R3','=R4','=R5','=R6','=R7','=R8','=R9'];
  const filterArrIndicators = ['MCS','MCV','MCC', 'MAC', 'DMI', 'ADX', 'RSI', 'SST', 'DC'];
  const filterBlockDates = document.querySelector('.page-jss .header .filter-date ul');
  const filterBlockIndicators = document.querySelector('.page-jss .header .filter-indicator ul');
  const filterBlockSymbols = document.querySelector('.page-jss .header .filter-symbol ul');

  //create arr of dates for filtering
  arr.filter(item => /\.D/.test(item.name)).forEach(item =>{
   if(todayDayValue <= item['date']) return
   if (!filterArrDates.includes(item['date']) && item['date']){
       filterArrDates.push(item['date']);
   }
  });
  
  filterArrDates.sort((a,b)=>(a<b)?1: -1)
                .forEach(filterArrItem =>{
                   let displayDate = new Date(filterArrItem + ' ');
                   let thisDay =  displayDate.getDay();
                   let thisDate =  displayDate.getDate();

                   // switch(thisDay){
                   //  case 1:
                   //  case 2:
                   //  case 3:
                   //  case 4:
                   //      displayDate.setDate( thisDate + 1);
                   //      break;
                   //  case 5:
                   //      displayDate.setDate( thisDate + 3);
                   //  default: 
                   //      break;    
                   // }
             
                   let filterItem = document.createElement('li');
                   filterItem.className = ('filter-item');
                   filterItem.innerText = `${displayDate.getFullYear()}-${displayDate.getMonth() + 1}-${displayDate.getDate()}`;
                   filterItem.setAttribute('value',filterArrItem);
                   filterItem.dataset.filterPull = 'date'; 

                   if(filterArrItem === filterArrDates[0]){
                   	filterItem.classList.add('active');
                   	renderBlocks(filterArrItem,arr)
                   }

                   filterBlockDates.append(filterItem);
              });

  filterArrIndicators.forEach(filterArrItem =>{
  	   let filterItem = document.createElement('li');
       filterItem.className = ('filter-item');
       filterItem.innerText = filterArrItem;
       filterItem.setAttribute('value',filterArrItem);
       filterItem.dataset.filterPull = 'indicator';

        if(filterArrItem === filterArrIndicators[0]){
         filterItem.classList.add('active');
       }

       filterBlockIndicators.append(filterItem);
  })              

  const filters = document.querySelectorAll('.filter');
  const filterItemData = document.querySelectorAll('.filter-item');

  filterItemData.forEach(item => {
      item.addEventListener('click', function(e){
      	//hot fix // fix
      if(item.dataset.filterPull === 'symbol') return;
      item.parentElement.parentElement.classList.toggle('show');
      
      if(currentFilterActiveItem(item) !== item.getAttribute('value') && item.dataset.filterPull == 'indicator' && !item.classList.contains('active')){
        filterItemsByIndicator(item.getAttribute('value'));
        filters.forEach(item => item.classList.remove('show'));
      }      
      if(currentFilterActiveItem(item) !== item.getAttribute('value') && item.dataset.filterPull == 'date' && !item.classList.contains('active')){
        renderBlocks(item.getAttribute('value'), arr);
        filters.forEach(item => item.classList.remove('show'));
        
      }
       filterItemData.forEach(closeItem => {
          if(item.dataset.filterPull == closeItem.dataset.filterPull) closeItem.classList.remove('active')
      })
      item.classList.add('active');
      
    })
  })
  function currentFilterActiveItem(item){
  		const currentFilteItems = item.parentElement.childNodes;
  		
  		currentFilteItems.forEach(filterItem => {
  			if(filterItem.classList.contains('active')) return filterItem.getAttribute('value')
  		})
  }

}

function filterItemsByIndicator(filterValue){
	const boxWrapItems = document.querySelectorAll('.boxes-wrap .item');
  boxWrapItems.forEach(item => item.classList.remove('hiden-item'));

	if(filterValue  == 'MCS'){
        boxWrapItems.forEach(item => {
            item.style.backgroundColor = item.dataset.mcsColor;
        })
		return
        // getColorMarketState(item.dataset.value, currentObject[0][item.dataset.value])
	}
       if(filterValue == 'MCV'){
        boxWrapItems.forEach(item => {
            (getColorMarketState('mcv',item.dataset.mcv))
            ?item.style.backgroundColor = getColorMarketState('mcv',item.dataset.mcv)
            :item.style.backgroundColor = 'rgb(186, 163, 146)'
        })
        return
    }
    
    if(filterValue == 'MCC'){
        boxWrapItems.forEach(item => {
            (getColorMarketState('mcc',item.dataset.mcc))
            ?item.style.backgroundColor = getColorMarketState('mcc',item.dataset.mcc)
            :item.style.backgroundColor = 'rgb(186, 163, 146)'
        })
        return
    }

    if(filterValue == 'MAC'){
        boxWrapItems.forEach(item => {
            (getColorMarketState('mac',item.dataset.mac))
            ?item.style.backgroundColor = getColorMarketState('mac',item.dataset.mac)
            :item.style.backgroundColor = 'rgb(186, 163, 146)'
        })
        return
    }
    if(filterValue == 'DMI'){
        boxWrapItems.forEach(item => {
            (getColorMarketState('dmi',item.dataset.dmi))
            ?item.style.backgroundColor = getColorMarketState('dmi',item.dataset.dmi)
            :item.style.backgroundColor = 'rgb(186, 163, 146)'
        })
        return
    }
     if(filterValue == 'ADX'){
        boxWrapItems.forEach(item => {
            (getColorMarketState('adx',item.dataset.adx))
            ?item.style.backgroundColor = getColorMarketState('adx',item.dataset.adx)
            :item.style.backgroundColor = 'rgb(186, 163, 146)'
        })
        return
    }
     if(filterValue == 'RSI'){
        boxWrapItems.forEach(item => {
            (getColorMarketState('rsi',item.dataset.rsi))
            ?item.style.backgroundColor = getColorMarketState('rsi',item.dataset.rsi)
            :item.style.backgroundColor = 'rgb(186, 163, 146)'
        })
        return
    }
     if(filterValue == 'SST'){
        boxWrapItems.forEach(item => {
            (getColorMarketState('sst',item.dataset.sst))
            ?item.style.backgroundColor = getColorMarketState('sst',item.dataset.sst)
            :item.style.backgroundColor = 'rgb(186, 163, 146)'
        })
        return
    }
     if(filterValue == 'DC'){
        boxWrapItems.forEach(item => {
            (getColorMarketState('dc',item.dataset.dc))
            ?item.style.backgroundColor = getColorMarketState('dc',item.dataset.dc)
            :item.style.backgroundColor = 'rgb(186, 163, 146)'
        })
        return
    }
 //    else{
	// boxWrapItems.forEach(item =>{
	// 	if(item.dataset.rvalue != filterValue) item.classList.add('hiden-item')
	// })
 //  }

}

function renderBlocks(blockGroup, arr){

    const blockGroupArr = arr.filter(item => item['date'] === blockGroup && item['name'].includes('.D'))
                             .sort(function(a,b){ 
                                const titleA = a.name.toLowerCase(), titleB = b.name.toLowerCase();
                                if (titleA < titleB) return -1;
                                if (titleA > titleB) return 1;
                                return 0})
    
    const boxWrap = document.querySelector('.boxes-wrap');
    let thisDateObj = new Date(blockGroup);
    // document.querySelector('.section-date p').innerText = thisDateObj.toMonthString().toUpperCase() + " " + thisDateObj.getDate();
  
    //clean symbol filter
    const filterBlockSymbols = document.querySelector('.filter-symbol ul');
    const filterBlockIndicators = document.querySelectorAll('.filter-indicator ul .filter-item')
    filterBlockSymbols.innerHTML = '';
    filterBlockIndicators.forEach(item => 
    {
      item.classList.remove('active');
      filterBlockIndicators[0].classList.add('active')
    })

    while (boxWrap.firstChild) {
     boxWrap.removeChild(boxWrap.lastChild);
    }

    blockGroupArr.forEach(blockItem => {
     let trendtypeData = getColorBlockTrendTypeObj(blockItem);
     let itemWrap = document.createElement('div');       
     let itemEffects = document.createElement('div');       
     let item = document.createElement('div');

     itemWrap.className = ('itemWrap');
     itemEffects.className = ('itemAffects');
     item.className = ('item');
     item.setAttribute('data-full-name',blockItem['name']);
     item.setAttribute('data-date',blockItem['date']);
     item.setAttribute('data-rvalue',getColorBlockRValue(blockItem));
     item.setAttribute('data-mcv',blockItem['mcv']);
     item.setAttribute('data-mcc',blockItem['mcc']);
     item.setAttribute('data-mac',blockItem['mac']);
     item.setAttribute('data-dmi',blockItem['dmi']);
     item.setAttribute('data-adx',blockItem['adx']);
     item.setAttribute('data-rsi',blockItem['rsi']);
     item.setAttribute('data-sst',blockItem['sst']);
     item.setAttribute('data-dc',blockItem['dc']);

     if(trendtypeData.bgcolor){
     item.style.backgroundColor = trendtypeData.bgcolor
     item.setAttribute('data-mcs-color',trendtypeData.bgcolor)
     // itemEffects.style.border = `5px solid ${trendtypeData.bgcolor}`;
     } else{
     item.style.backgroundColor = '#fff';
     }

     let trendtype = document.createElement('div');
     trendtype.className = ('trendtype');
     trendtype.innerText = trendtypeData.typeDectription;

     let symbol = document.createElement('div');
     symbol.className = ('symbol');
     //take just symbol name 
     const splitedName =  blockItem['name'].split('.');
     symbol.innerText = (splitedName.length == 2)? splitedName[0]: `${splitedName[0]} ${splitedName[1]}`;

     let marketState = document.createElement('div');
     marketState.className = ('marketState');
     marketState.innerText = blockItem['msb'];

     let rValue = document.createElement('div');
     rValue.className = ('rValue');
     rValue.innerText = getColorBlockRValueRegime(blockItem);

     item.append(trendtype,symbol,marketState,rValue);
     itemWrap.append(item, itemEffects);
     boxWrap.append(itemWrap);

     renderSymbolFilter(blockItem,arr);
     itemWrap.addEventListener('click',function(e){
        e.currentTarget.children[0].click()
     })
     item.addEventListener('click',function(e){
        document.querySelectorAll('.page-jss .section-boxes .boxes-wrap .item ').forEach(item => {
            item.classList.remove('active_cell')
        })
        e.currentTarget.classList.add('active_cell')    	
        renderBlockInformationOnClick(e,arr);
      	renderPriceMap(e, arr);
        setTradeHeadersValues(e,arr);
      	setSymbolFilter(e);
      	
     })

     if(blockGroupArr[0] == blockItem) item.click();
    })
}
	function renderSymbolFilter(blockItemObj,arr){
	   const filterBlockSymbols = document.querySelector('.filter-symbol ul');
       const filterItem = document.createElement('li');
       filterItem.className = ('filter-item');
       filterItem.innerText = blockItemObj['name'].split('.')[0] + '.' + blockItemObj['name'].split('.')[1];
       filterItem.setAttribute('value',blockItemObj['name'].split('.')[0]); 
       filterItem.dataset.filterPull = 'symbol';
       filterItem.dataset.fullName = blockItemObj['name'];
       filterItem.dataset.date = blockItemObj['date'];
       //filter item event repeate // fix
       filterItem.addEventListener('click',function(e){
       const item = e.currentTarget;
       const filters = document.querySelectorAll('.filter'); 
       item.parentElement.parentElement.classList.toggle('show');
      
      if(currentFilterActiveItem(item) !== item.getAttribute('value') && item.dataset.filterPull == 'date' && !item.classList.contains('active')){
      	// const filterBlockSymbols = document.querySelector('.filter-symbol ul');
      	// filterBlockSymbols.innerHTML = '';
        renderBlocks(item.getAttribute('value'), arr);
        filters.forEach(item => item.classList.remove('show'));
      }
      if(currentFilterActiveItem(item) !== item.getAttribute('value') && item.dataset.filterPull == 'symbol' && !item.classList.contains('active')){

        renderBlockInformationOnClick(e, arr)
        renderPriceMap(e, arr)
        document.querySelectorAll('.page-jss .section-boxes .boxes-wrap .item').forEach( boxItem => {
            boxItem.classList.remove('active_cell')
            if(item.dataset.fullName === boxItem.dataset.fullName) boxItem.classList.add('active_cell')
        })
        filters.forEach(item => item.classList.remove('show'));
        item.parentNode.childNodes.forEach(nodeItem => nodeItem.classList.remove('active'))
      }
      //  filterItemData.forEach(closeItem => {
      //     if(item.dataset.filterPull == closeItem.dataset.filterPull) closeItem.classList.remove('active')
      // })
      item.classList.add('active');
 
          function currentFilterActiveItem(item){
          		const currentFilteItems = item.parentElement.childNodes;
          		
          		currentFilteItems.forEach(filterItem => {
          			if(filterItem.classList.contains('active')) return filterItem.getAttribute('value')
          		})
          }
       })
       //filter item event repeate end
       filterBlockSymbols.append(filterItem);
	}

    function setSymbolFilter(e){
    	const thisBlock = e.currentTarget;
    	const thisBlockName = thisBlock.getAttribute('data-full-name').split('.')[0];
    	const symbolFilterItems = document.querySelectorAll('.filter-symbol .filter-item');

    	symbolFilterItems.forEach(item => {
    		if(item.classList.contains('active')) item.classList.remove('active')
    	})

    	symbolFilterItems.forEach(item => {
    		if(item.getAttribute('value') == thisBlockName) item.classList.add('active')
    	})

    }
function getColorBlockTrendTypeObj(blockItemObj){

      const MCSTAG = (blockItemObj.msb)?blockItemObj.msb :'ERROR';
      
      const trendtypeInfo = {

        NEU:{
          code:100,
          type: 'NT',
          typeDectription: 'NON TREND',
          mcsDescription: 'NEUTRAL DIGESTION',
          bgcolor: 'rgb(186, 163, 146)'
        },
        NPS:{
          code:110,
          type: 'NT',
          typeDectription: 'NON TREND',
          mcsDescription: 'NEUTRAL POSITIVE SHIFT',
          bgcolor: 'rgb(186, 163, 146)'
        },
        NPT:{
          code:120,
          type: 'TP',
          typeDectription: 'TREND',
          mcsDescription: 'NEUTRAL POSITIVE TRANSITION',
          bgcolor: 'rgb(186, 163, 146)'
        },
        NPE:{
          code:130,
          type: 'DVP',
          typeDectription: 'NON TREND',
          mcsDescription: 'NEUTRAL POSITIVE EXTREME',
          bgcolor: 'rgb(186, 163, 146)'
        },
        NNS:{
          code:150,
          type: 'NT',
          typeDectription: 'NON TREND',
          mcsDescription: 'NEUTRAL NEGATIVE SHIFT',
          bgcolor: 'rgb(186, 163, 146)'
        },
        NNT:{
          code:160,
          type: 'TN',
          typeDectription: 'TREND',
          mcsDescription: 'NEUTRAL NEGATIVE TRANSITION',
          bgcolor: 'rgb(186, 163, 146)'
        },
        NNE:{
          code:170,
          type: 'DVN',
          typeDectription: 'NON TREND',
          mcsDescription: 'NEUTRAL NEGATIVE EXTREME',
          bgcolor: 'rgb(186, 163, 146)'
        },
        UPC:{
          code:210,
          type: 'NT',
          typeDectription: 'NON TREND',
          mcsDescription: 'BULL TREND CORRECTION',
          bgcolor: '#FF66FF'
        },
        UPE:{
          code:220,
          type: 'DVP',
          typeDectription: 'NON TREND',
          mcsDescription: 'BULL TREND EXTREME',
          bgcolor: '#00B0F0'
        },
        UPPE:{
          code:230,
          type: 'DVP',
          typeDectription: 'NON TREND',
          mcsDescription: 'BULL TREND POSITIVE EXTREME',
          bgcolor:'#6872C2'
        },
        UPAE:{
          code:240,
          type: 'DVP',
          typeDectription: 'NON TREND',
          mcsDescription: 'BULL TREND ACCELERATION EXTREME',
          bgcolor:'#57CD63'
        },
        UPD:{
          code:250,
          type: 'NT',
          typeDectription: 'NON TREND',
          mcsDescription: 'BULL TREND DEGISTION',
          bgcolor: '#B4BAC3'
        },
        UPT:{
          code:260,
          type: 'TP',
          typeDectription: 'TREND',
          mcsDescription: 'BULL TREND',
          bgcolor:'#6872C2'
        },
        UPP:{
          code:270,
          type: 'TP',
          typeDectription: 'TREND',
          mcsDescription: 'BULL TREND POSITIVE',
          bgcolor:'#6872C2'
        },
        UPA:{
          code:280,
          type: 'TP',
          typeDectription: 'TREND',
          mcsDescription: 'BULL TREND ACCELERATION',
          bgcolor:'#57CD63'
        },
        DNA:{
          code:320,
          type: 'TN',
          typeDectription: 'TREND',
          mcsDescription: 'BEAR TREND ACCELERATION',
          bgcolor:'#FF6600'
        },
        DNN:{
          code:330,
          type: 'TN',
          typeDectription: 'TREND',
          mcsDescription: 'BEAR TREND NEGATIVE',
          bgcolor:'#E47C7C'
        },
        DNT:{
          code:340,
          type: 'TN',
          typeDectription: 'TREND',
          mcsDescription: 'BEAR TREND',
          bgcolor:'#E47C7C'
        },
        DND:{
          code:350,
          type: 'NT',
          typeDectription: 'NON TREND',
          mcsDescription: 'BEAR TREND DEGISTION',
          bgcolor:'#990000'
        },
        DNAE:{
          code:360,
          type: 'DVN',
          typeDectription: 'NON TREND',
          mcsDescription: 'BEAR TREND ACCELERATION EXTREME',
          bgcolor:'#FF9900'
        },
        DNNE:{
          code:370,
          type: 'DVN',
          typeDectription: 'NON TREND',
          mcsDescription: 'BEAR TREND NEGATIVE EXTREME',
          bgcolor:'#E47C7C'
        },
        DNE:{
          code:380,
          type: 'DVN',
          typeDectription: 'NON TREND',
          mcsDescription: 'BEAR TREND EXTREME',
          bgcolor: '#FF00FF'
        },
        DNC:{
          code:390,
          type: 'NT',
          typeDectription: 'NON TREND',
          mcsDescription: 'BEAR TREND CORRECTION',
          bgcolor:'#8CD1D1'
        },
        PE:{
          code:400,
          type: 'DVP',
          typeDectription: 'NON TREND',
          mcsDescription: 'POSITIVE EXTREME',
          bgcolor:'#FFFF00'
        },
        NE:{
          code:500,
          type: 'DVN',
          typeDectription: 'NON TREND',
          mcsDescription: 'NEGATIVE EXTREME',
          bgcolor:'#FFFF00'
        },
        NEUT:{
          code:900,
          type: 'TNT',
          typeDectription: 'TREND NON TREND',
          mcsDescription: 'NEUTRAL DIGESTION TRANSITION',
          bgcolor:'#6600CC'
        },
        NT:{
          code:1000,
          type: 'NT',
          bgcolor:'#262626'
        },
        TP:{
          code:2600,
          type: 'TP',
          bgcolor:'#6872C2'
        },
        TN:{
          code:3200,
          type: 'TN',
          bgcolor: 'rgb(153, 0, 0)'
        },
        DVP:{
          code:4000,
          type: 'DVP',
          bgcolor:'#FFFF00'
        },
        DVN:{
          code:5000,
          type: 'DVN',
          bgcolor:'#FFFF00'
        },
        TNT:{
          code:5000,
          type: 'TNT',
          bgcolor:'#FFFF00'
        },
        ERROR:{
            code:'error',
            type:'error',
            bgcolor:'#FF0000',
            typeDectription:'error',
            mcsDescription: 'error'
        }
      }
      return trendtypeInfo[MCSTAG]
    }
function getMarketActibutesByCode(code, part){
    if(code === 'error' ) return;
    const obj = {
        100:{
            1:'AttributeNoMomentum_CLEAR',
            2:'AttributeNoBias_CLEAR',
            3:'AttributeVolalityDN_CLEAR',
            4:'AttributeNonTrend_CLEAR',
        },
        110:{
            1:'AttributeNoMomentum_CLEAR',
            2:'AttributeBiasUP_CLEAR',
            3:'AttributeVolalityDN_CLEAR',
            4:'AttributeNonTrend_CLEAR',
        },
        120:{
            1:'AttributeMomentum_CLEAR',
            2:'AttributeBiasUP_CLEAR',
            3:'AttributeVolalityUP_CLEAR',
            4:'AttributeTrendPositive_CLEAR',
        },
        130:{
            1:'AttributeNoMomentum_CLEAR',
            2:'AttributeBiasDN_CLEAR',
            3:'AttributeVolalityDN_CLEAR',
            4:'AttributePositiveExtreme_CLEAR',
        },
        150:{
            1:'AttributeNoMomentum_CLEAR',
            2:'AttributeBiasDN_CLEAR',
            3:'AttributeVolalityDN_CLEAR',
            4:'AttributeNonTrend_CLEAR',
        },
        160:{
            1:'AttributeMomentum_CLEAR',
            2:'AttributeBiasDN_CLEAR',
            3:'AttributeVolalityUP_CLEAR',
            4:'AttributeTrendNegative_CLEAR',
        },
        170:{
            1:'AttributeNoMomentum_CLEAR',
            2:'AttributeBiasUP_CLEAR',
            3:'AttributeVolalityDN_CLEAR',
            4:'AttributeNegativeExtreme_CLEAR',
        },
        210:{
            1:'AttributeNoMomentum_CLEAR',
            2:'AttributeBiasDN_CLEAR',
            3:'AttributeVolalityDN_CLEAR',
            4:'AttributeNonTrend_CLEAR',
        },
        220:{
            1:'AttributeNoMomentum_CLEAR',
            2:'AttributeBiasDN_CLEAR',
            3:'AttributeVolalityDN_CLEAR',
            4:'AttributePositiveExtreme_CLEAR',
        },
        230:{
            1:'AttributeNoMomentum_CLEAR',
            2:'AttributeBiasDN_CLEAR',
            3:'AttributeVolalityDN_CLEAR',
            4:'AttributePositiveExtreme_CLEAR',
        },
        240:{
            1:'AttributeNoMomentum_CLEAR',
            2:'AttributeNoBias_CLEAR',
            3:'AttributeVolalityUP_CLEAR',
            4:'AttributePositiveExtreme_CLEAR',
        },
        250:{
            1:'AttributeNoMomentum_CLEAR',
            2:'AttributeNoBias_CLEAR',
            3:'AttributeVolalityDN_CLEAR',
            4:'AttributeNonTrend_CLEAR',
        },
        260:{
            1:'AttributeMomentum_CLEAR',
            2:'AttributeBiasUP_CLEAR',
            3:'AttributeVolalityUP_CLEAR',
            4:'AttributeTrendPositive_CLEAR',
        },
        270:{
            1:'AttributeMomentum_CLEAR',
            2:'AttributeBiasUP_CLEAR',
            3:'AttributeVolalityUP_CLEAR',
            4:'AttributeTrendPositive_CLEAR',
        },
        280:{
            1:'AttributeMomentum_CLEAR',
            2:'AttributeBiasUP_CLEAR',
            3:'AttributeVolalityUP_CLEAR',
            4:'AttributeTrendPositive_CLEAR',
        },
        320:{
            1:'AttributeMomentum_CLEAR',
            2:'AttributeBiasDN_CLEAR',
            3:'AttributeVolalityUP_CLEAR',
            4:'AttributeTrendNegative_CLEAR',
        },
        330:{
            1:'AttributeMomentum_CLEAR',
            2:'AttributeBiasDN_CLEAR',
            3:'AttributeVolalityUP_CLEAR',
            4:'AttributeTrendNegative_CLEAR',
        },
        340:{
            1:'AttributeMomentum_CLEAR',
            2:'AttributeBiasDN_CLEAR',
            3:'AttributeVolalityUP_CLEAR',
            4:'AttributeTrendNegative_CLEAR',
        },
        350:{
            1:'AttributeNoMomentum_CLEAR',
            2:'AttributeNoBias_CLEAR',
            3:'AttributeVolalityDN_CLEAR',
            4:'AttributeNonTrend_CLEAR',
        },
        360:{
            1:'AttributeNoMomentum_CLEAR',
            2:'AttributeNoBias_CLEAR',
            3:'AttributeVolalityUP_CLEAR',
            4:'AttributeNegativeExtreme_CLEAR',
        },
        370:{
            1:'AttributeNoMomentum_CLEAR',
            2:'AttributeBiasUP_CLEAR',
            3:'AttributeVolalityDN_CLEAR',
            4:'AttributeNegativeExtreme_CLEAR',
        },
        380:{
            1:'AttributeNoMomentum_CLEAR',
            2:'AttributeBiasUP_CLEAR',
            3:'AttributeVolalityDN_CLEAR',
            4:'AttributeNegativeExtreme_CLEAR',
        },
        390:{
            1:'AttributeNoMomentum_CLEAR',
            2:'AttributeBiasUP_CLEAR',
            3:'AttributeVolalityDN_CLEAR',
            4:'AttributeNonTrend_CLEAR',
        },
        400:{
            1:'AttributeNoMomentum_CLEAR',
            2:'AttributeBiasDN_CLEAR',
            3:'AttributeVolalityDN_CLEAR',
            4:'AttributePositiveExtreme_CLEAR',
        },
        500:{
            1:'AttributeNoMomentum_CLEAR',
            2:'AttributeBiasUP_CLEAR',
            3:'AttributeVolalityDN_CLEAR',
            4:'AttributeNegativeExtreme_CLEAR',
        },
        900:{
            1:'AttributePivotal_CLEAR',
            2:'AttributeNoBias_CLEAR',
            3:'AttributeVolalityMixed_CLEAR',
            4:'AttributeTrendNonTrend_CLEAR',
        }
    }
    const imagesBlock = document.createElement('div');
    imagesBlock.classList.add('imagesBlock');

    var count = 0; 

    Object.values(obj[code]).forEach(objectItem => {

        if ((part == 1 && count < 2) || (part == 2 && count >= 2)) {
            const imgName = (objectItem) ? `url('/static/assets/imgs/wsImages/${objectItem}.png')` : '';
            const imgDescription = (objectItem.includes('Bias')) ? 'Bias'
                : (objectItem.includes('Volality')) ? 'Volatility'
                    : (objectItem.includes('Momentum') || objectItem.includes('Pivotal')) ? 'Momentum'
                        : 'Type'
            const imgItem = document.createElement('div');
            const imgTitle = document.createElement('p');

            imgTitle.innerText = imgDescription;
            imgItem.classList.add('imagesBlock-item')
            imgItem.style.backgroundImage = imgName;
            imgItem.append(imgTitle);
            imagesBlock.append(imgItem);

        }

        count++;

    })

    return imagesBlock
}
function renderBlockInformationOnClick(e,arr){

  const blockData = e.currentTarget.dataset
  const curentObjectDateArr = arr.filter(item => item.name == blockData.fullName);
  const currentObject = curentObjectDateArr.filter(item => item.date == blockData.date);
  if(blockData.currentDate) currentObject[0].currentDate = (blockData.currentDate);

  const trendtypeData = getColorBlockTrendTypeObj(currentObject[0]);
  const thisRValueNumber = +getColorBlockRValue(currentObject[0]).split('').filter(item => +item);
  const trendNumber = (trendtypeData.code !== 'error')? trendtypeData.code + 10 - thisRValueNumber
                                                      :'error';
  
  const lastValueIndex = curentObjectDateArr.indexOf(blockData.date) + 1;
  const lastValue = curentObjectDateArr[lastValueIndex].close;

  const thisPhases = timePhases();
  const currentDateFixed = new Date(currentObject[0].date + ' ');
  const contactDateText = (currentObject[0].contactdate)? ` - ${currentObject[0].contactdate}`: '';
  const symbolName = `${currentObject[0].name.split('.')[0]}.${currentObject[0].name.split('.')[1]}`
  console.log(symbolName)
  
 
 

  // const lastValue 

  //state tab
  const informationBlock = document.querySelector('#tab1 .area2 div.trend-item');
  const informationBlockTrend = document.querySelector('#tab1 .area2 div.trend-item_trend');
  const informationBlockMark = document.querySelector('#tab1 .area2 div.trend-item_mark');
  const informationBlockType = document.querySelector('#tab1 .area2 div.trend-item_type');
  const infromationTrendNumberBlock = document.querySelector('#tab1 .area2 div.trend-number');
  const symbolInfo = document.querySelector('#tab1 .area2 div.symbol-info');
    const marketAttributesGraph1 = document.querySelector('#tab1 .area3 .graph');
    const marketAttributesGraph2 = document.querySelector('#tab1 .area5 .graph');
  const marketExpectationsGraph = document.querySelector('#tab1 .area4 .graph');
  const tab1Header = document.querySelector('#tab1 .area1 h3');
  const tab1Overview = document.querySelector('#tab1 .area1 p');

  //structure tab
  const marketStructureBiasGraph = document.querySelector('#tab2 .area4 .graph');
  const structureAPMD = document.querySelector('#tab2 .mmarea .mmarea_item-apmd .metric');
  const structureAPMDTicks = document.querySelector('#tab2 .mmarea .mmarea_item-apmdticks .metric');
  const structureVAR = document.querySelector('#tab2 .mmarea .mmarea_item-var .metric');
  const structureAD = document.querySelector('#tab2 .mmarea .mmarea_item-ad .metric');
  const structureMSD = document.querySelector('#tab2 .mmarea .mmarea_item-msd .metric');
  const marketStateItems = document.querySelectorAll('#tab2 .area2 .market-state .market-state_item-value');
  const tab2Header = document.querySelector('#tab2 .area1 h2');
  const tab2Overview = document.querySelector('#tab2 .area1 p');
  const informationBlockTab2 = document.querySelector('#tab2 .area5 div.trend-item');
  const informationBlockTrendTab2 = document.querySelector('#tab2 .area5 div.trend-item_trend');
  const informationBlockMarkTab2 = document.querySelector('#tab2 .area5 div.trend-item_mark');
  const informationBlockTypeTab2 = document.querySelector('#tab2 .area5 div.trend-item_type');
  const infromationTrendNumberBlockTab2 = document.querySelector('#tab2 .area5 div.trend-number');
  const symbolInfoTab2 = document.querySelector('#tab2 .area5 div.symbol-info');
  //strategy tab
  const tab3Header = document.querySelector('#tab3 .area1 h2');
  const tab3Overview = document.querySelector('#tab3 .area1 p');
  const optimalStrategyGraph = document.querySelector('#tab3 .area2 .graph');
  const hedgeStrategyGraph = document.querySelector('#tab3 .area3 .graph');
  const informationBlockTab3 = document.querySelector('#tab3 .area4 div.trend-item');
  const informationBlockTrendTab3 = document.querySelector('#tab3 .area4 div.trend-item_trend');
  const informationBlockMarkTab3 = document.querySelector('#tab3 .area4 div.trend-item_mark');
  const informationBlockTypeTab3 = document.querySelector('#tab3 .area4 div.trend-item_type');
  const infromationTrendNumberBlockTab3 = document.querySelector('#tab3 .area4 div.trend-number');
  const symbolInfoTab3 = document.querySelector('#tab3 .area4 div.symbol-info');
  // discovery tab
  const phaseDailyRst = document.querySelector('#tab4 .area2 #dailyrst .time-phase__value');
  const phaseDaily24 = document.querySelector('#tab4 .area2 #daily24h .time-phase__value');
  const phaseWeekly = document.querySelector('#tab4 .area2 #weekly .time-phase__value');
  const phaseMonthly = document.querySelector('#tab4 .area2 #monthly .time-phase__value');
  
  //state tab setdata
  [informationBlockTrend, informationBlockTrendTab2, informationBlockTrendTab3].forEach(item => item.innerText = trendtypeData.typeDectription);
  [informationBlockMark, informationBlockMarkTab2, informationBlockMarkTab3].forEach(item => item.innerText = currentObject[0].msb);
  [informationBlockType, informationBlockTypeTab2,informationBlockTypeTab3].forEach(item => item.innerText = trendtypeData.mcsDescription);
  [informationBlock,informationBlockTab2, informationBlockTab3].forEach(item => item.style.backgroundColor = trendtypeData.bgcolor);

  [symbolInfo, symbolInfoTab2, symbolInfoTab3].forEach(item => item.innerText = `${currentObject[0].name.split('.')[0]} ${getSymbolDescription(symbolName)} ${contactDateText}`)
  
  infromationTrendNumberBlock.innerText = `#${currentObject[0].msb} - ${trendtypeData.mcsDescription} - ${trendNumber}`
  infromationTrendNumberBlockTab2.innerText = `#${currentObject[0].msb} - ${trendtypeData.mcsDescription} - ${trendNumber}`
  infromationTrendNumberBlockTab3.innerText = `#${currentObject[0].msb} - ${trendtypeData.mcsDescription} - ${trendNumber}`
  
  // infromationTrendNumberBlock.style.backgroundColor = trendtypeData.bgcolor;

  marketAttributesGraph1.innerHTML = '';
  marketExpectationsGraph.style.backgroundImage = `url('/static/assets/imgs/playbook/MSB_${trendtypeData.code}.png')`;
    marketAttributesGraph1.append(getMarketActibutesByCode(trendtypeData.code, 1))

    marketAttributesGraph2.innerHTML = '';
    marketAttributesGraph2.append(getMarketActibutesByCode(trendtypeData.code, 2))
  

  // marketAttributesGraph.style.backgroundImage = `url('../imgs/playbook/MSB_${trendtypeData.code}_MA.png')`;
  // tab1Header.innerText = `MARKET STATE:#${currentObject[0].msb} - ${trendtypeData.mcsDescription}`;
  tab1Overview.innerHTML = strategy[trendtypeData.code].overview

  //structure tab set data
  structureAPMD.innerText = currentObject[0].apmd;
  structureAPMDTicks.innerText = currentObject[0].apmdticks;
  structureVAR.innerText = currentObject[0].var;
  structureAD.innerText = currentObject[0].ad;
  structureMSD.innerText = currentObject[0].msd;

  marketStateItems.forEach(item => 
  {
    if(item.dataset.value == 'mcs')
    {
      item.innerText = currentObject[0].msb || '';
      item.style.backgroundColor = getColorBlockTrendTypeObj(currentObject[0]).bgcolor
      return
    }
    item.innerText = currentObject[0][item.dataset.value] || '';
    item.style.backgroundColor = getColorMarketState(item.dataset.value, currentObject[0][item.dataset.value]) || '';
  })

  tab2Header.innerText = structure[trendNumber].theme;
  tab2Overview.innerText = structure[trendNumber].overview;
  marketStructureBiasGraph.style.backgroundImage = `url('/static/assets/imgs/playbook/MSB_${trendNumber}.png')`;
  //strategy tab set data
  tab3Header.innerHTML = strategy[trendNumber].theme;
  tab3Overview.innerHTML = strategy[trendNumber].overview;
  optimalStrategyGraph.style.backgroundImage = `url('/static/assets/imgs/playbook/MSB_${trendNumber}_O.png')`;
  hedgeStrategyGraph.style.backgroundImage = `url('/static/assets/imgs/playbook/MSB_${trendNumber}_H.png')`;

  renderGraph(arr.filter(item => item.name == blockData.fullName).map(item => {return {date: item.date,apmd: item.apmd, volume: item.volume}}))
  discoveryGraphCalculations(currentObject, lastValue, arr);

  //discovery tab
   phaseDailyRst.style.backgroundColor = `rgb(${thisPhases.dailyrst.bg})`;
   phaseDaily24.style.backgroundColor = `rgb(${thisPhases.daily24.bg})`; 
   phaseWeekly.style.backgroundColor = `rgb(${thisPhases.weekly.bg})`;
   phaseMonthly.style.backgroundColor = `rgb(${thisPhases.monthly.bg})`;

   phaseDailyRst.innerText = `${thisPhases.dailyrst.value}`;
   phaseDaily24.innerText = `${thisPhases.daily24.value}`; 
   phaseWeekly.innerText = `${thisPhases.weekly.value}`;
   phaseMonthly.innerText = `${thisPhases.monthly.value}`;
  
}
function timePhases(){
	const timePhasesObj = {};
	const currentDay = new Date();
	const currentTime = currentDay.getHours() + ':' + currentDay.getMinutes() + ':' + currentDay.getSeconds();
	const currentDayNum = currentDay.getDate();
	
	timePhasesObj['dailyrst'] = timePhaseDailyRst(currentTime);
	timePhasesObj['daily24'] = timePhaseDaily24(currentTime);
	timePhasesObj['weekly'] = timePhasesWeekly(currentDay);
	timePhasesObj['monthly'] = timePhasesMonthly(currentDayNum);

	function timePhaseDailyRst(time){
		if('8:30:00' <= time && time <= '9:29:59') return {value: 'INITIATION', 'bg': '255,255,0'}
		if('9:30:00' <= time && time <= '10:29:59') return {value: 'DISCOVERY', 'bg': '255,204,204'}
		if('10:30:00' <= time && time <= '14:29:59') return {value: 'EXPANSION', 'bg': '204,153,255'}
		if('14:30:00' <= time && time <= '15:14:59') return {value: 'SETTLEMENT', 'bg': '255,0,0'}
		return {value: '', 'bg': '255,255,255'}
	}

	function timePhaseDaily24(time){
		if('17:00:00' <= time && time <= '20:59:59') return {value: 'INITIATION', 'bg': '255,255,0'}
		if('21:00:00' <= time && '24:00:00' >= time || time <= '0:59:59') return {value: 'DISCOVERY', 'bg': '255,204,204'}
		if('1:00:00' <= time && time <= '11:59:59') return {value: 'EXPANSION', 'bg': '204,153,255'}
		if('12:30:00' <= time && time <= '15:59:59') return {value: 'SETTLEMENT', 'bg': '255,0,0'}
		return {value: '', 'bg': '255,255,255'}
	}
	function timePhasesWeekly(currentDay){
		let thisDate = currentDay.getDate();
		let dayNumber = currentDay.getDay();
		let appliedToDate = currentDay;

		if(dayNumber != 5){
			thisDate+=1
		}
		if(dayNumber == 5){
			thisDate+=2
		}

		appliedToDate.setDate(thisDate)
		let appliedToDay = appliedToDate.getDay();

		if(appliedToDay == 6 || appliedToDay == 0) return {value: 'INITIATION', 'bg': '255,255,0'}
		if(appliedToDay == 1) return {value: 'DISCOVERY', 'bg': '255,204,204'}
		if(appliedToDay == 2 || appliedToDay == 3) return {value: 'EXPANSION', 'bg': '204,153,255'}
		if(appliedToDay == 4) return {value: 'SETTLEMENT', 'bg': '255,0,0'}
		if(appliedToDay == 5) return {value: 'CLOSED', 'bg': '255,255,255'}

		return {value: 'NA', 'bg': '255,255,255'}
	}

	function timePhasesMonthly(currentDate){
		if(currentDate <= 7) return {value: 'INITIATION', 'bg': '255,255,0'}
		if(currentDate > 7 && currentDate <= 14) return {value: 'DISCOVERY', 'bg': '255,204,204'}
		if(currentDate > 14 && currentDate <= 24) return {value: 'EXPANSION', 'bg': '204,153,255'}
		if(currentDate > 7) return {value: 'SETTLEMENT', 'bg': '255,0,0'}
	}

	return timePhasesObj;
} 
function setClosestSymbolDateWeek(currentDate ,fullName, arr){
  const thisDate = new Date(currentDate + ' ');

  const fullNameDates = arr.filter(item => item.name == fullName && item.date <= currentDate)
                            .map(item => item.date)

  if(thisDate.getDay() === 5) return fullNameDates.sort((a,b) => a>b?-1:1)[0];
  return fullNameDates.sort((a,b) => a>b?-1:1)[1];
}

function setClosestSymbolDateMonth(currentDate ,fullName, arr){
  const thisDate = new Date(currentDate + ' ');
  const nextPriceDay = new Date(currentDate + ' ');
  let numberToSetDate = thisDate.getDate();

  if(thisDate.getDay() === 5){
    numberToSetDate+=3;
  }else{
    numberToSetDate+=1;
  }
  nextPriceDay.setDate(numberToSetDate)


  const fullNameDates = arr.filter(item => item.name == fullName)
                            .map(item => item.date)
  
  if(thisDate.getMonth() === nextPriceDay.getMonth()) return fullNameDates.sort((a,b) => a>b?-1:1)[1];
  return fullNameDates.sort((a,b) => a>b?-1:1)[0]
}

function setTradeHeadersValues(e,arr){
  const blockData = e.currentTarget.dataset;
  const timePeriod = document.querySelectorAll('.page-jss .section-trades .trade-wrap_headers .trade-wrap_headers-period');

   timePeriod.forEach(item => {
    if(item.classList.contains('trade-wrap_headers-day')){
      item.classList.add('active');
      item.dataset.fullName = blockData.fullName;
      item.dataset.date = blockData.date;
      item.dataset.currentDate = blockData.date;
    }
    if(item.classList.contains('trade-wrap_headers-week')){
      item.classList.remove('active');
      item.dataset.fullName = blockData.fullName.split('.')[0] + '.' + blockData.fullName.split('.')[1] + '.W';
      item.dataset.date = setClosestSymbolDateWeek(blockData.date, item.dataset.fullName, arr);
      item.dataset.currentDate = blockData.date;
    }
    if(item.classList.contains('trade-wrap_headers-month')){
      item.classList.remove('active');
      item.dataset.fullName = blockData.fullName.split('.')[0] + '.' + blockData.fullName.split('.')[1]  + '.M';
      item.dataset.date = setClosestSymbolDateMonth(blockData.date, item.dataset.fullName, arr);
      item.dataset.currentDate = blockData.date;
    }
   })

  timePeriod.forEach(item => {
    item.addEventListener('click',function(e){
     if(e.currentTarget.classList.contains('active')) return
     timePeriod.forEach(item => item.classList.remove('active'));
     item.classList.add('active');
     renderBlockInformationOnClick(e,arr);
     renderPriceMap(e, arr);   
    })
  })
}
function renderPriceMap(e, arr){

	const thisBlock = e.currentTarget;
	const [trendtype, symbol, marketState,rValue] = thisBlock.childNodes;
	const date = thisBlock.dataset.date;
	const currentPriceMap = arr.filter(item => (item.date === date && item.name === thisBlock.dataset.fullName));
	tradesWrap.innerHTML = '';
       
    tradesWrapRisk.style.gridTemplateRows = getColorBlockRRisk(currentPriceMap[0]);
    
     let maxFixed = 0;
        for(fixedItem in currentPriceMap[0]){
            if(fixedItem.includes('pricemap') && currentPriceMap[0][fixedItem].includes('.')){
                maxFixed = Math.max(maxFixed, currentPriceMap[0][fixedItem].split('.')[1].length)
            }else if(fixedItem.includes('pricemap') && currentPriceMap[0][fixedItem].includes('-')){
                maxFixed = Math.max(maxFixed, currentPriceMap[0][fixedItem].split('-')[1].length)
            } 
        }

	for(let priceMapItem in currentPriceMap[0]){

		if(priceMapItem.includes('pricemap') && !currentPriceMap[0][priceMapItem].includes('-'))  {
			renderPriceMapBlock(Number(currentPriceMap[0][priceMapItem]).toFixed(maxFixed),currentPriceMap[0]['r'],currentPriceMap[0]['name'].split('.')[0] );
		}else if(priceMapItem.includes('pricemap') && currentPriceMap[0][priceMapItem].includes('-')){
            renderPriceMapBlock(currentPriceMap[0][priceMapItem],currentPriceMap[0]['r'],currentPriceMap[0]['name'].split('.')[0] );
        }
	}

	function renderPriceMapBlock(text,rValue,symbol){
        
		let item = document.createElement('div');
        if(text.includes('.') && +text == +rValue || text == rValue) {
          item.style.backgroundColor = '#57CD63';
          item.style.color= 'rbg(0,0,0)'
          
          let blockR = document.createElement('div');
          let block = document.createElement('div');
          blockR.innerText = 'R'
          block.innerText = text;
          item.append(blockR, block);
          item.className = ('item itemR');
          tradesWrap.append(item);

          document.querySelector('.section-date p').innerText = `${symbol} R = ${text}`

          return
        }
 		item.className = ('item');
  	    item.innerText = text; 
 		tradesWrap.append(item);
	}
}
function getColorMarketState(stateTitle,value){
  const valueColor = {
    '2': 'rgb(87, 205, 99)',
    '1': 'rgb(104, 114, 194)',
    '0.5':'rgb(87, 205, 99)',
    '0':'rgb(186, 163, 146)',
    '-0.5':'rgb(255, 102, 255)',
    '-1':'rgb(228, 124, 124)',
    '-2':'rgb(255, 102, 0)'
  }
  const valueColorADX ={
    '0':'rgb(186, 163, 146)',
    '2':'rgb(194, 104, 191)'
  }
  const valueColorMCV = {
    '-11':'rgb(246, 243, 135)',
    '-10':'rgb(246, 243, 135)',
    '-9':'rgb(228, 124, 124)',
    '-8':'rgb(228, 124, 124)',
    '-7':'rgb(228, 124, 124)',
    '-6':'rgb(228, 124, 124)',
    '-5':'rgb(228, 124, 124)',
    '-4':'rgb(228, 124, 124)',
    '-3':'rgb(186, 163, 146)',
    '-2':'rgb(186, 163, 146)',
    '-1':'rgb(186, 163, 146)',
    '0':'rgb(186, 163, 146)',
    '1':'rgb(186, 163, 146)',
    '2':'rgb(186, 163, 146)',
    '3':'rgb(186, 163, 146)',
    '4':'rgb(104, 114, 194)',
    '5':'rgb(104, 114, 194)',
    '6':'rgb(104, 114, 194)',
    '7':'rgb(104, 114, 194)',
    '8':'rgb(104, 114, 194)',
    '9':'rgb(104, 114, 194)',
    '10':'rgb(246, 243, 135)',
    '11':'rgb(246, 243, 135)',
  }
  function getValueColorMCV(value){
    if(value < -9) return 'rgb(246, 243, 135)';
    if(value >= -9 && value < -3) return 'rgb(228, 124, 124)';
    if(value >= -3 && value < 4) return 'rgb(186, 163, 146)';
    if(value >= 4 && value < 10) return 'rgb(104, 114, 194)';
    if(value >= 10) return 'rgb(246, 243, 135)';

  }
  const valueColorMCC = {
    '-22':'rgb(246, 243, 135)',
    '-21':'rgb(246, 243, 135)',
    '-20':'rgb(246, 243, 135)',
    '-19':'rgb(246, 243, 135)',
    '-18':'rgb(246, 243, 135)',
    '-17':'rgb(246, 243, 135)',
    '-16':'rgb(255, 102, 0)',
    '-15':'rgb(255, 102, 0)',
    '-14':'rgb(255, 102, 0)',
    '-13':'rgb(255, 102, 0)',
    '-12':'rgb(255, 102, 0)',
    '-11':'rgb(255, 102, 0)',
    '-10':'rgb(228, 124, 124)',
    '-9':'rgb(228, 124, 124)',
    '-8':'rgb(228, 124, 124)',
    '-7':'rgb(228, 124, 124)',
    '-6':'rgb(228, 124, 124)',
    '-5':'rgb(228, 124, 124)',
    '-4':'rgb(228, 124, 124)',
    '-3':'rgb(228, 124, 124)',
    '-2':'rgb(186, 163, 146)',
    '-1':'rgb(186, 163, 146)',
    '0':'rgb(186, 163, 146)',
    '1':'rgb(186, 163, 146)',
    '2':'rgb(186, 163, 146)',
    '3':'rgb(104, 114, 194)',
    '4':'rgb(104, 114, 194)',
    '5':'rgb(104, 114, 194)',
    '6':'rgb(104, 114, 194)',
    '7':'rgb(104, 114, 194)',
    '8':'rgb(104, 114, 194)',
    '9':'rgb(104, 114, 194)',
    '10':'rgb(104, 114, 194)',
    '11':'rgb(0, 255, 0)',
    '12':'rgb(0, 255, 0)',
    '13':'rgb(0, 255, 0)',
    '14':'rgb(0, 255, 0)',
    '15':'rgb(0, 255, 0)',
    '16':'rgb(0, 255, 0)',
    '17':'rgb(246, 243, 135)',
    '18':'rgb(246, 243, 135)',
    '19':'rgb(246, 243, 135)',
    '20':'rgb(246, 243, 135)',
    '21':'rgb(246, 243, 135)',
    '22':'rgb(246, 243, 135)',
  }
   function getValueColorMCC(value){
    if(value < -10) return 'rgb(246, 243, 135)';
    if(value >= -10 && value < -2) return 'rgb(228, 124, 124)';
    if(value >= -2 && value < 3) return 'rgb(186, 163, 146)';
    if(value >= 3 && value < 11) return 'rgb(104, 114, 194)';
    if(value >= 1 && value < 17) return 'rgb(0, 255, 0)';
    if(value >= 17) return 'rgb(246, 243, 135)';

  }
  if(stateTitle == 'mcv'){
    return getValueColorMCV(value);
  }
  if(stateTitle == 'mcc'){
    return getValueColorMCC(value)
  }
  else if(stateTitle != 'mcs' && stateTitle != 'mcv' && stateTitle != 'mcc' && stateTitle != 'adx'){
    return valueColor[value]
  }else if(stateTitle == 'adx'){
    return valueColorADX[value]
  }

}
function getColorBlockRValue(blockItemObj){
      const R = blockItemObj.r;

      const rValue = {
        r9:'=R9',
        r8:'=R8',
        r7:'=R7',
        r6:'=R6',
        r5:'=R5',
        r4:'=R4',
        r3:'=R3',
        r2:'=R2',
        r1:'=R1'
      }

      if(R > blockItemObj.pricemap10ut1) return rValue.r9;
      if(R == blockItemObj.pricemap10ut1) return rValue.r8;
      if(R == blockItemObj.pricemap11crx) return rValue.r7;
      if(R == blockItemObj.pricemap12up) return rValue.r6;
      if(R == blockItemObj.pricemap14dir) return rValue.r5;
      if(R == blockItemObj.pricemap16dp) return rValue.r4;
      if(R == blockItemObj.pricemap17crx) return rValue.r3;
      if(R == blockItemObj.pricemap18dt1) return rValue.r2;
      if(R < blockItemObj.pricemap18dt1) return rValue.r1;
    }
function getSymbolDescription(blockItemObj){
    const description = {
        'ES':'SP500 e-mini',
        'VX':  'VIX Futures',
        'NQ':  'NASDAQ 100 e-mini',
        'YM':  'DOW Futures e-mini',
        'RTY': 'Russell 2000 e-mini',
        'NIY': 'Nikkei 225 Yen',
        'NKD': 'Nikkei 225 CME',
        'MME': 'MSCI Emerging Market Index',
        'MFS': 'MSCI EAFE Index',
        'DSX': 'EuroSTOXX',
        'FVS': 'VSTOXX',
        'DD':  'DAX',
        'QF':  'FTSE 100',
        'UL':  'Ultra Bond',
        'US':  '30yr T-BOND',
        'TY':  '10yr T-NOTE',
        'FV':  '5yr T-NOTE',
        'DB':  'BUND',
        'DL':  'BOBL',
        'QG':  'Long Gilt',
        'BTP': 'Long-Term BTP',
        'OAT': 'Euro OAT',
        'CL':  'Crude Oil',
        'HO':  'Heating Oil',
        'RB':  'RBOB',
        'NG':  'Natural Gas',
        'QO':  'Brent Crude',
        'QP':  'Gas Oil',
        'GC':  'Gold',
        'SI':  'Silver',
        'CP':  'Copper',
        'S':   'Soybeans',
        'SM':  'Soybean Meal',
        'BO':  'Soybean Oil',
        'C' :  'Corn',
        'W' :  'Wheat',
        'SU':  'Sugar',
        'CT':  'Cotton',
        'CC':  'Cocoa',
        'CF':  'Coffee',
        'LC':  'Live Cattle',
        'LH':  'Lean Hogs',
        'DX':  'Dollar Index',
        'EU':  'EuroFX',
        'BP':  'British Pound',
        'SF':  'Swiss Franc',
        'CD':  'Canadian Dollar',
        'JY':  'Japanese Yen',
        'DA':  'Aussie Dollar',
        'NE':  'New Zealand Dollar',
        'MX':  'Mexican Peso',
        'BTC': 'Bitcoin Futures',
        'PIL': 'CAC40 Index',
        'WIN': 'Ibovespa e-mini',
        'DOL': 'Brazil Dollar Index',
        'SPY': 'SP500 SPDR',
        'VXX': 'VIX ETF',
        'QQQ': 'NASDAQ 100 ETF',
        'DIA': 'DJIA ETF',
        'IWM': 'Russell 2000 ETF',
        "EEM": 'MSCI Emerging Market ETF',
        'EURUSD':  'EURUSD',
        'GBPUSD':  'GBPUSD',
        'USDCHF':  'USDCHF',
        'USDCAD':  'USDCAD',
        'USDJPY':  'USDJPY',
        'AUDUSD':  'AUDUSD',
        'NZDUSD':  'NZDUSD',
        'MXNUSD':  'MXNUSD',
        'SPX': 'SP500 CASH Index',
        'VIX': 'VIX CASH Index',
        'ETHUSD': 'ETHUSD',
        'ETHBTC': 'ETHBTC',
        'ATOMETH': 'ATOMETH',
        'BTCUSD':'BTCUSD',
        'ATOMBTC':'ATOMBTC',
        'ATOMUSD':'ATOMUSD',
        'USDMXN' : 'USDMXN',
        'EURJPY' : 'EURJPY',
        'USDBRL' : 'USDBRL',
        'GDAX.ETHUSD' : 'Coinbase ETHUSD',
        'GDAX.ETHEUR' : 'Coinbase ETHEUR',
        'GDAX.ETHGBP' : 'Coinbase ETHGBP',
        'GDAX.BTCUSD' : 'Coinbase BTCUSD',
        'GDAX.BTCEUR' : 'Coinbase BTCEUR',
        'GDAX.BTCGBP' : 'Coinbase BTCGBP',
        'GDAX.ETHBTC' : 'Coinbase ETHBTC',
        'GDAX.BCHUSD' : 'Coinbase BCHUSD',
        'GDAX.BCHBTC' : 'Coinbase BCHBTC',
        'GDAX.LTCUSD' : 'Coinbase LTCUSD',
        'GDAX.LTCBTC' : 'Coinbase LTCBTC',
        'GDAX.ATOMUSD' : 'Coinbase ATOMUSD',
        'GDAX.ATOMBTC' : 'Coinbase ATOMBTC',
        'KRAKEN.ETHUSD' : 'KRAKEN ETHUSD',
        'KRAKEN.ETHEUR' : 'KRAKEN ETHEUR',
        'KRAKEN.ETHGBP' : 'KRAKEN ETHGBP',
        'KRAKEN.BTCUSD' : 'KRAKEN BTCUSD',
        'KRAKEN.BTCEUR' : 'KRAKEN BTCEUR',
        'KRAKEN.BTCGBP' : 'KRAKEN BTCGBP',
        'KRAKEN.ETHBTC' : 'KRAKEN ETHBTC',
        'KRAKEN.BCHUSD' : 'KRAKEN BCHUSD',
        'KRAKEN.BCHBTC' : 'KRAKEN BCHBTC',
        'KRAKEN.LTCUSD' : 'KRAKEN LTCUSD',
        'KRAKEN.LTCBTC' : 'KRAKEN LTCBTC',
        'KRAKEN.ATOMUSD' : 'KRAKEN ATOMUSD',
        'KRAKEN.ATOMBTC' : 'KRAKEN ATOMBTC',
        'KRAKEN.XRPUSD' : 'KRAKEN XRPUSD',
        'KRAKEN.XRPBTC' :  'KRAKEN XRPBTC',
        'BITFINEX.ETHUSD' : 'BITFINEX ETHUSD',
        'BITFINEX.ETHEUR': 'BITFINEX ETHEUR',
        'BITFINEX.ETHGBP' : 'BITFINEX ETHGBP',
        'BITFINEX.BTCUSD' : 'BITFINEX BTCUSD',
        'BITFINEX.BTCEUR' : 'BITFINEX BTCEUR',
        'BITFINEX.BTCGBP' : 'BITFINEX BTCGBP',
        'BITFINEX.ETHBTC' : 'BITFINEX ETHBTC',
        'BITFINEX.BCHUSD' : 'BITFINEX BCHUSD',
        'BITFINEX.BCHBTC' : 'BITFINEX BCHBTC',
        'BITFINEX.LTCUSD' :'BITFINEX LTCUSD',
        'BITFINEX.LTCBTC' : 'BITFINEX LTCBTC',
        'BITFINEX.XRPUSD' : 'BITFINEX XRPUSD',
        'BITFINEX.XRPBTC' : 'BITFINEX XRPBTC',
        'POLO.ETHUSD' : 'POLO ETHUSD',
        'POLO.BTCUSD' : 'POLO BTCUSD',
        'POLO.ETHBTC' : 'POLO ETHBTC',
        'POLO.BCHUSD' : 'POLO BCHUSD',
        'POLO.BCHBTC' : 'POLO BCHBTC',
        'POLO.LTCUSD' : 'POLO LTCUSD',
        'POLO.LTCBTC' : 'POLO LTCBTC',
        'POLO.ATOMUSD' : 'POLO ATOMUSD',
        'POLO.ATOMBTC' : 'POLO ATOMBTC',
        'POLO.XRPUSD' : 'POLO XRPUSD',
        'POLO.XRPBTC' : 'POLO XRPBTC',
        'BINANCE.ETHUSDT' : 'BINANCE ETHUSDT',
        'BINANCE.BTCUSDT' : 'BINANCE BTCUSDT',
        'BINANCE.ETHBTC' : 'BINANCE ETHBTC',
        'BINANCE.BCHUSD' : 'BINANCE BCHUSD',
        'BINANCE.BCHBTC' : 'BINANCE BCHBTC',
        'BINANCE.LTCUSD' : 'BINANCE LTCUSD',
        'BINANCE.LTCBTC' : 'BINANCE LTCBTC',
        'BINANCE.ATOMUSD' : 'BINANCE ATOMUSD',
        'BINANCE.ATOMBTC' : 'BINANCE ATOMBTC',
        'BINANCE.XRPUSD' : 'BINANCE XRPUSD'

    }
    return (description[blockItemObj])? `- ${description[blockItemObj]}`: '';
}

function getColorBlockRValueRegime(blockItemObj){
      const R = blockItemObj.r;

      const rValue = {
        r9:'>UT1',
        r8:'=UT1',
        r7:'=CRX+',
        r6:'=UP',
        r5:'=DIR',
        r4:'=DP',
        r3:'=CRX-',
        r2:'=DT1',
        r1:'<DT1'
      }

      if(R > blockItemObj.pricemap10ut1) return rValue.r9;
      if(R == blockItemObj.pricemap10ut1) return rValue.r8;
      if(R == blockItemObj.pricemap11crx) return rValue.r7;
      if(R == blockItemObj.pricemap12up) return rValue.r6;
      if(R == blockItemObj.pricemap14dir) return rValue.r5;
      if(R == blockItemObj.pricemap16dp) return rValue.r4;
      if(R == blockItemObj.pricemap17crx) return rValue.r3;
      if(R == blockItemObj.pricemap18dt1) return rValue.r2;
      if(R < blockItemObj.pricemap18dt1) return rValue.r1;
    }
function getColorBlockRRisk(blockItemObj){
      const R = blockItemObj.r;

      const rRisk = {
        r9:'6fr 3fr 0px 6fr 10fr 0px',
        r8:'8fr 1fr 0px 6fr 10fr 0px',
        r7:'8fr 1fr 0px 6fr 10fr 0px',
        r6:'9fr 1fr 0px 5fr 10fr 0px',
        r5:'10fr 2fr 1fr 2fr 10fr 0px',
        r4:'10fr 5fr 0px 1fr 9fr 0px',
        r3:'10fr 6fr 0px 1fr 8fr 0px',
        r2:'10fr 6fr 0px 1fr 8fr 0px',
        r1:'10fr 6fr 0px 3fr 6fr 0px'
      }

      if(R >= blockItemObj.pricemap10ut1) return rRisk.r9;
      if(R == blockItemObj.pricemap10ut1) return rRisk.r8;
      if(R == blockItemObj.pricemap11crx) return rRisk.r7;
      if(R == blockItemObj.pricemap12up) return rRisk.r6;
      if(R == blockItemObj.pricemap14dir) return rRisk.r5;
      if(R == blockItemObj.pricemap16dp) return rRisk.r4;
      if(R == blockItemObj.pricemap17crx) return rRisk.r3;
      if(R == blockItemObj.pricemap18dt1) return rRisk.r2;
      if(R <= blockItemObj.pricemap18dt1) return rRisk.r1;
    }

    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    const url = 'https://script.google.com/macros/s/AKfycbxQs42wQk_i7AwbnjrCMY0WRwCyb_chCX1e6GeG-5Dydh2xvopFqZkXeoWtpgD3cx4/exec';
    fetch(`${url}?getdata=price_map_crypto`, requestOptions)
      .then(response => response.text())
      .then(result => afterFetch(result))
      .catch(error => console.log('error', error));

    function afterFetch(json){
      let priceMapData = JSON.parse(json).map(item => item['data']).flat();
      fetch(`${url}?getdata=indicators_crypto`, requestOptions)
      .then(response => response.text())
      .then(result => addPriceMapData(priceMapData, result))
      .catch(error => console.log('error', error));

      function addPriceMapData(arr, newJSON){
        let indicatorsData = JSON.parse(newJSON).map(item => item['data']).flat();

        arr.forEach(arrItem =>
        {
         //  for(key in arrItem){
         //    if(key === 'name' || key === 'symbol' || key === 'value' || key === 'date' || key === 'count' || key === 'contactdate') {
         //    }else if(arrItem[key].includes('-')){
         //        arrItem[key] = arrItem[key].replace('-','.')
         //    }
            
         // }
          let jj = indicatorsData.filter(indicatorsDataItem => 
            (indicatorsDataItem.date == arrItem.date && indicatorsDataItem.name == arrItem.name)
          )

          if(jj && jj.length >= 1) 
          {
            arrItem.msb = jj[0].msb
            arrItem.mcv = jj[0].mcv
          }
        })
       
      fetch(`${url}?getdata=market_colors`, requestOptions)
      .then(response => response.text())
      .then(result => addMarketColorsData(priceMapData, result))
      .catch(error => console.log('error', error));   
      }

      function addMarketColorsData(arr, newJSON){
         let marcetColorData = JSON.parse(newJSON).map(item => item['data']).flat();
         
        //  arr.forEach(arrItem =>
        // {
        //   let jj = marcetColorData.filter(marcetColorDataItem => 
        //     (marcetColorDataItem.date == arrItem.date && marcetColorDataItem.symbol == arrItem.name.split('.')[0])
        //   )
          
        //   if(jj && jj.length >= 1) 
        //   {
        //     arrItem.mcc = jj[0].mcc
        //     arrItem.mac = jj[0].mac
        //     arrItem.dmi = jj[0].dmi
        //     arrItem.adx = jj[0].adx
        //     arrItem.rsi = jj[0].rsi
        //     arrItem.sst = jj[0].sst
        //     arrItem.dc = jj[0].dc
        //   }
        // })
              arr.forEach(arrItem =>
        {
          
            arrItem.mcc = 0
            arrItem.mac = 0
            arrItem.dmi = 0
            arrItem.adx = 0
            arrItem.rsi = 0
            arrItem.sst = 0
            arrItem.dc = 0
          
        })
         document.querySelector('.page-jss-loading').style.display = 'none';
         renderFilters(arr);
      }
    }

//local
// localData(priceMapData, indicatorsData, marketColorsData)

// function localData(price,indicator,market){
// 	let thisPrices = price[0].data;
// 	let thisIndicator = indicator[0].data;
// 	let thisMarket = market[0].data;

// 	thisPrices.forEach(arrItem =>{
//       let jj = thisIndicator.filter(indicatorsDataItem => 
//         (indicatorsDataItem.date == arrItem.date && indicatorsDataItem.name == arrItem.name))
//       if(jj && jj.length >= 1) 
//       {
//         arrItem.msb = jj[0].msb
//         arrItem.mcv = jj[0].mcv
//       }
//     })

//     thisPrices.forEach(arrItem =>
//     {
//       let jj = thisMarket.filter(marcetColorDataItem => 
//         (marcetColorDataItem.date == arrItem.date && marcetColorDataItem.symbol == arrItem.name.split('.')[0])
//       )
      
//       if(jj && jj.length >= 1) 
//       {
//         arrItem.mcc = jj[0].mcc
//         arrItem.mac = jj[0].mac
//         arrItem.dmi = jj[0].dmi
//         arrItem.adx = jj[0].adx
//         arrItem.rsi = jj[0].rsi
//         arrItem.sst = jj[0].sst
//         arrItem.dc = jj[0].dc
//       }
//     })

// 	document.querySelector('.page-jss-loading').style.display = 'none';
//     renderFilters(thisPrices);
// }
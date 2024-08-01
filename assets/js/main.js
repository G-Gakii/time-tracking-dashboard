// // function to get data

// async function getData() {
//   const response = await fetch("data.json");
//   const data = await response.json();

//   //getting containers from html
//   let dailytask1 = (document.getElementById("element1").innerText =
//     data[0].title);
//   let dailytask1currenthours = (document.getElementById(
//     "element1Hours"
//   ).innerText = data[0].timeframes.daily.current);
//   let dailytask1previoushours = (document.getElementById(
//     "element6Previouselement1Previous"
//   ).innerText = data[0].timeframes.daily.previous);

//   let dailytask2 = (document.getElementById("element2").innerText =
//     data[1].title);
//   let dailytask2currenthours = (document.getElementById(
//     "element2Hours"
//   ).innerText = data[1].timeframes.daily.current);
//   let dailytask2previoushours = (document.getElementById(
//     "element6Previous"
//   ).innerText = data[1].timeframes.daily.previous);

//   let dailytask3 = (document.getElementById("element3").innerText =
//     data[2].title);
//   let dailytask3currenthours = (document.getElementById(
//     "element3Hours"
//   ).innerText = data[2].timeframes.daily.current);
//   let dailytask3previoushours = (document.getElementById(
//     "element6Previous"
//   ).innerText = data[2].timeframes.daily.previous);

//   let dailytask4 = (document.getElementById("element3").innerText =
//     data[3].title);
//   let dailytask4currenthours = (document.getElementById(
//     "element4Hours"
//   ).innerText = data[3].timeframes.daily.current);
//   let dailytask4previoushours = (document.getElementById(
//     "element6Previous"
//   ).innerText = data[3].timeframes.daily.previous);

//   let dailytask5 = (document.getElementById("element4").innerText =
//     data[4].title);
//   let dailytask5currenthours = (document.getElementById(
//     "element5Hours"
//   ).innerText = data[4].timeframes.daily.current);
//   let dailytask5previoushours = (document.getElementById(
//     "element6Previous"
//   ).innerText = data[4].timeframes.daily.previous);

//   let dailytask6 = (document.getElementById("element5").innerText =
//     data[5].title);
//   let dailytask6currenthours = (document.getElementById(
//     "element6Hours"
//   ).innerText = data[5].timeframes.daily.current);
//   let dailytask6previoushours = (document.getElementById(
//     "element6Previous"
//   ).innerText = data[5].timeframes.daily.previous);

//   //weekly
//   // let weeklytask1=document.getElementById("").innerText=data.
//   // let weeklytask1currenthours=document.getElementById("").innerText=data.
//   // let weeklytask1previoushours=document.getElementById("").innerText=data.

//   // let weeklytask2=document.getElementById("").innerText=data.
//   // let weeklytask2currenthours=document.getElementById("").innerText=data.
//   // let weeklytask2previoushours=document.getElementById("").innerText=data.

//   // let weeklytask3=document.getElementById("").innerText=data.
//   // let weeklytask3currenthours=document.getElementById("").innerText=data.
//   // let weeklytask3previoushours=document.getElementById("").innerText=data.

//   // let weeklytask4=document.getElementById("").innerText=data.
//   // let weeklytask4currenthours=document.getElementById("").innerText=data.
//   // let weeklytask4previoushours=document.getElementById("").innerText=data.

//   // let weeklytask5=document.getElementById("").innerText=data.
//   // let weeklytask5currenthours=document.getElementById("").innerText=data.
//   // let weeklytask5previoushours=document.getElementById("").innerText=data.

//   // let weeklytask6=document.getElementById("").innerText=data.
//   // let weeklytask6currenthours=document.getElementById("").innerText=data.
//   // let weeklytask6previoushours=document.getElementById("").innerText=data.
//   //monthly
//   // let monthlytask1=document.getElementById("").innerText=data.
//   // let monthlytask1currenthours=document.getElementById("").innerText=data.
//   // let monthlytask1previoushours=document.getElementById("").innerText=data.

//   // let monthlytask2=document.getElementById("").innerText=data.
//   // let monthlytask2currenthours=document.getElementById("").innerText=data.
//   // let monthlytask2previoushours=document.getElementById("").innerText=data.

//   // let monthlytask3=document.getElementById("").innerText=data.
//   // let monthlytask3currenthours=document.getElementById("").innerText=data.
//   // let monthlytask3previoushours=document.getElementById("").innerText=data.

//   // let monthlytask4=document.getElementById("").innerText=data.
//   // let monthlytask4currenthours=document.getElementById("").innerText=data.
//   // let monthlytask4previoushours=document.getElementById("").innerText=data.

//   // let monthlytask5=document.getElementById("").innerText=data.
//   // let monthlytask5currenthours=document.getElementById("").innerText=data.
//   // let monthlytask5previoushours=document.getElementById("").innerText=data.

//   // let monthlytask6=document.getElementById("").innerText=data.
//   // let monthlytask6currenthours=document.getElementById("").innerText=data.
//   // let monthlytask6previoushours=document.getElementById("").innerText=data.
// }
// getData().catch((error) => {
//   console.log("error");
//   console.error(error);
// });

import { compose, withState } from 'recompose';

import GridView from './GridsView';

 Number.prototype.format = function (n = 2, x = 3, s = '.', c = ',') {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')', num = this.toFixed(Math.max(0, ~~n));
    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
  };


getQuations=()=>{
  let listData = [
    
  ];



//Peticion para cotizacion del dolar
  fetch('https://api.cambio.today/v1/quotes/USD/ARS/json?quantity=1&key=2088|qsFN6SwbBoo^F*cmNTKkHSwaJ1kk59Lq')
  .then((response) =>response.json()
)    .then((responseJson) => {
    //alert(responseJson.result.value);
   listData.push({
    id: 1,
    title: 'USD Dolar',
    subtitle: 'Cotizacion de 1 dolar respecto al peso argentino',
    price: responseJson.result.value.format(),
    image:
      'https://images5.alphacoders.com/431/thumb-350-431731.jpg',
  },)

  })
  .catch((error) => {
    console.error(error);
  });

//Peticion para cotizacion del euro
fetch('https://api.cambio.today/v1/quotes/EUR/ARS/json?quantity=1&key=2088|qsFN6SwbBoo^F*cmNTKkHSwaJ1kk59Lq')
.then((response) =>response.json()
)    .then((responseJson) => {
  //alert(responseJson.result.value);
 listData.push({
  id: 2,
  title: 'EUR Euro',
  subtitle: 'Cotizacion de 1 Euro respecto al peso argentino',
  price: responseJson.result.value.format(),
  image:
    'https://mises-media.s3.amazonaws.com/styles/social_media_1200_x_1200/s3/static-page/img/euro_1.PNG?itok=cVxNebm6',
},)

})
.catch((error) => {
  console.error(error);
});

//Peticion para cotizacion del real
fetch('https://api.cambio.today/v1/quotes/BRL/ARS/json?quantity=1&key=2088|qsFN6SwbBoo^F*cmNTKkHSwaJ1kk59Lq')
.then((response) =>response.json()
)    .then((responseJson) => {
  //alert(responseJson.result.value);
 listData.push({
  id: 3,
  title: 'BRL Real',
  subtitle: 'Cotizacion de 1 Real respecto al peso argentino',
  price: responseJson.result.value.format(),
  image:
    'https://www.latercera.com/wp-content/uploads/2018/06/Real-brasileno.jpg',
},)

})
.catch((error) => {
  console.error(error);
});





  return listData;
};


export default compose(
  withState('tabIndex', 'setTabIndex', 0),
  withState('tabs', 'setTabs', ['Grid', 'List 1', 'List 2']),
  withState('data', 'setData', getQuations()),
)(GridView);

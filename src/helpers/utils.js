export const setCategoryImage=(category)=>{
    switch (category) {
      case 'electronics':
        return "https://www.diariodenavarra.es/uploads/2020/09/18/60afe9cad4d7f.jpeg";
      case 'jewelery':
        return "https://cnnespanol.cnn.com/wp-content/uploads/2021/11/211104095613-01-russian-royal-jewels-auction-scli-intl.jpg?quality=100&strip=info&w=1024"
      case 'men\'s clothing':
        return "https://media.revistagq.com/photos/6093c65f235a5910299c9296/16:9/w_2560%2Cc_limit/massimo%2520dutti%2520sean_opry.jpeg"
      case 'women\'s clothing':
        return 'https://img.freepik.com/foto-gratis/conjunto-falda-sueter-ropa-mujer-moda-sandalias-accesorios-vista-superior-endecha-plana_169016-15668.jpg?size=626&ext=jpg&ga=GA1.2.1361906581.1641168000'
        default:
        break;
    }
  }
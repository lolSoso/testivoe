import axios from "axios"


export const fetchData = async (body) => {
  try {
    console.log('fetchData:::',body);
    await axios.post(process.env.API_URL, body, {
      headers: {
      'Content-Type': 'application/json'
      }
    })
    alert('данные успешно отправленны ');
  } catch (err) {
    alert('ошибка отпраывки данных')
    console.log(err);
  }
}
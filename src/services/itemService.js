import { URL_DEV } from '../config/environment';

export class ItemService {
   headers = { 'Content-Type': 'application/json' }
  searchItems = async (query) => {
    const url = `${URL_DEV}/items?q=${query}`;
    const response = await fetch(url);
    if (response) {
      return response.json();
    }
 }

 getItemDetail = async (id) => {
  const url = `${URL_DEV}/items/${id}`;
  const response = await fetch(url);
  if (response) {
    return response.json();
  }
 }
}
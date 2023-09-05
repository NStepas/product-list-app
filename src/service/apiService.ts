export const apiService = async (url:string, method: string, body?:BodyInit | undefined | null) => {

   return await fetch(url, {
      method,
      headers: {
         'Content-Type': 'application/json',
      },
      body: body ? body : null,
   }).then(res => {
      return res.json();
   });
};

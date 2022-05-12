import React from "react";


export const useFetch = <T>(api:(<V>(arg1?:V) => Promise<T>)) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [data, setData] = React.useState<T|null>(null);


  React.useEffect(()=>{
    let timer: NodeJS.Timeout;
  const getData = async () => {
    try {
      setLoading(true);
      setError("")
      const res =await api();
      console.log("res", res);
        
      const delay=()=>{
         return new Promise((resolve)=>{
       timer= setTimeout(resolve,1000)
        })
      }
        console.log("before delay");

        await delay()
        console.log("after delay");

        setData(res)
        //eslint-disable-next-line
    } catch (error:any) {
      console.error(error)

      setError(error?.message ?error?.message:JSON.stringify(error));
      setData(null)

    } finally {
      setLoading(false);
    }
  };
  getData()
  return ()=>{
    clearTimeout(timer)
  }

  },[api])
  
  return [data, loading, error] as const;
};

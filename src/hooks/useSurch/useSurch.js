import { useEffect, useState } from 'react'

function useSurch() {
    const [useSurch, setUseSurch] = useState({
      surch:''
    });
    useEffect (()=> {
      setUseSurch({
        surch:''
      })
    },[setUseSurch]);
    
  return [useSurch, setUseSurch];
}
export default useSurch;
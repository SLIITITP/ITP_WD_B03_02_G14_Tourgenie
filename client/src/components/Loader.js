import React ,{useState} from 'react'
import { HashLoader } from "react-spinners";



function Loader() {
    let [loading, setLoading] = useState(true);
  return (
    <div style={{marginTop:'15px'}}>
        <div className="sweet-loading">

          <HashLoader
          color='#000'
          loading={loading}
          cssOverride=''
          size={80}/>
    </div>
    </div>
  )
}

export default Loader
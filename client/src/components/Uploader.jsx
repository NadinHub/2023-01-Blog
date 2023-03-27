 //upload file inside a server
import axios from 'axios';


 const Upload = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file)
      const res = await axios.post(`http://localhost:8801/api/upload`, formData)
      return res.data //res.data - contains file name
    } catch (err) {
      console.log(err)
    }
  }

  export default Upload
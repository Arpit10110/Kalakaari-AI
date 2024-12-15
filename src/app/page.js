// "use client";
// import React, { useState } from "react";
// import axios from "axios";
// const Page = () => {
//   const [imageSrc, setImageSrc] = useState(null);

//   const query = async () => {
//     try {
//       const response = await fetch(
//         "https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
//         {
//           headers: {
//             Authorization: "Bearer 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",
//             "Content-Type": "application/json",
//           },
//           method: "POST",
//           body: JSON.stringify({ inputs: "Astronaut riding a horse" }),
//         }
//       );

//       const blob = await response.blob();
//       // Convert the Blob to an Object URL
//       const imageUrl = URL.createObjectURL(blob);
//       setImageSrc(imageUrl);
//     } catch (error) {
//       console.error("Error fetching the image:", error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={query}>Generate Image</button>
//       {imageSrc && (
//         <div>
//           <h3>Generated Image:</h3>
//           <img src={imageSrc} alt="Generated" style={{ maxWidth: "100%" }} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Page;

import Navbar from '@/Components/Navbar'
import Genrator from '@/Components/Genrator'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Genrator/>
    </div>
  )
}

export default page

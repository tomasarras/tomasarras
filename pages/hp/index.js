import React from 'react'
import { useRouter } from 'next/router'
import styles from "./HP.module.css";
import { useEffect, useState } from 'react'
import FingerprintJS from '@fingerprintjs/fingerprintjs'
import Image from 'next/image'

const fpPromise = FingerprintJS.load()

export default function HP() {
  const r = useRouter();
  const [object, setObject] = useState(null);
  const [testing, setTesting] = useState(false);

  const getDate = async () => {
    // const fp = await fpPromise
    // const result = await fp.get()
  
    // // This is the visitor identifier:
    // const visitorId = result.visitorId
    // console.log(visitorId)
  }

  useEffect(() => {
    if (typeof r.query.o === "string")
      setObject(r.query.o);
  }, [r]);

  const getEnc = (n) => {
    let enc = "";
    n.forEach(c => {
      enc += typeof c === "string" ? c : String.fromCharCode(c);
    });
    return enc;
  }

  useEffect(() => {
    if (object !== null) {
      const b = {};
      b[getEnc([97, 112, 105, "K", 101, 121])] = getEnc([57, "9", 54, 55, "f", 51, 48, 54, 45, 48, 97, 52, 50, 45, 52, 54, "6", 48,45,98,99,101, 57, 45, 52, 48, 99, 55,48, 97, 51, 100, 99, 54, "1", "8"]);

      getDate();
    if (object === "w") {
      b.message = "Wallet";
    } else if (object === "p") {
      b.message = "Phone";

    } else if (object === "test") {
      setTesting(true);
    }
    }
    
  }, [object]);
  return testing ? 
    (<div className={styles.div}><Image priority alt="j" fill src="/hackerman.webp"/></div>) : <div></div>
}

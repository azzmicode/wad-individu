import { useState, useEffect } from "react";

export function useLocalStorageState(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// import { useState, useEffect } from "react";

// export function useLocalStorageState(key, initialValue) {
//    const [angka, setAngka] = useState(() => {
//         const saved = localStorage.getItem("angka");
//         const parsed = saved ? parseInt(saved, 10) : 0;
//     return isNaN(parsed) ? 0 : parsed;
//     });

//     useEffect(() => {
//         localStorage.setItem('angka', angka);
//     }, [angka]);

//   return [value, setValue];
// }


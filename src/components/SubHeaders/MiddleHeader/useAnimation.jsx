import gsap from "gsap";
import { useRef } from "react";
export const useAnimation = ()=>{
    const fadeInRef = useRef(null);
    const slideInRef = useRef();

  const fadeInFun = ()=>{
    
    gsap.fromTo(fadeInRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
  }
  const slideInFun = (index) => {
    gsap.fromTo(
      slideInRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4 }
    );
  }


    return { fadeInRef, fadeInFun, slideInRef, slideInFun };
} 
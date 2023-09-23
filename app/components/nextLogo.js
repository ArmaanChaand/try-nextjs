'use client'
import Image from "next/image"
export function NextLogo(){
    function openInNewTab(){
        window.open('https://nextjs.org/docs')
      }
    return (
        <div className="next-logo" onClick={openInNewTab}>
        <Image
          className="next-svg"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    )
}
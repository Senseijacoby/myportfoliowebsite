import Image from "next/image";
import Link from "next/link";

export default function SocialMedia() {
  return (
    <div className="flex justify-center my-10 md:justify-start gap-7">
      <Link
        className="transition duration-500 hover:opacity-50"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        
          <Image alt="linkedin-link" src="/assets/linkedin.png" 
          width={30}
          height={30}
          />
        
      </Link>
      <Link
        className="transition duration-500 hover:opacity-50"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        
          <Image alt="twitter-link" src="/assets/twitter.png"
           width={30}
          height={30}
           />
        
      </Link>
      <Link
        className="transition duration-500 hover:opacity-50"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        
          <Image alt="facebook-link" src="/assets/facebook.png"
           width={30}
          height={30}
           />
        
      </Link>
      <Link
        className="transition duration-500 hover:opacity-50"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        
          <Image alt="instagram-link" src="/assets/instagram.png" 
           width={30}
          height={30}
          
          />
        
      </Link>
    </div>
  );
}

export default function SocialMedia() {
  return (
    <div className="flex justify-center my-10 md:justify-start gap-7">
      <a
        className="transition duration-500 hover:opacity-50"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <picture>
          <img alt="linkedin-link" src="/assets/linkedin.png" />
        </picture>
      </a>
      <a
        className="transition duration-500 hover:opacity-50"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <picture>
          <img alt="twitter-link" src="/assets/twitter.png" />
        </picture>
      </a>
      <a
        className="transition duration-500 hover:opacity-50"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <picture>
          <img alt="facebook-link" src="/assets/facebook.png" />
        </picture>
      </a>
      <a
        className="transition duration-500 hover:opacity-50"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <picture>
          <img alt="instagram-link" src="/assets/instagram.png" />
        </picture>
      </a>
    </div>
  );
}

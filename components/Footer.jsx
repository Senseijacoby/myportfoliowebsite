import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <footer className="h-64 pt-10 bg-red">
      <div className="w-10/12 mx-auto">
        <SocialMedia />
        <div className="justify-center text-center md:flex md:justify-between ">
          <p className="text-2xl font-semibold font-playfair text-yellow">
            Jack Migwambo
          </p>
          <p className="font-playfair text-md text-yellow">
           &copy; {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

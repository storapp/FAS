import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center m-20">
      {/* Image Div */}
      <div className="md:w-1/2 mb-4 md:mb-0 p-4">
        <Image
          width="400"
          height="400"
          src="/images/za.webp"
          alt="About Us"
          className="rounded-md"
        />
      </div>

      {/* Text Div */}
      <div className="md:w-1/2 md:ml-4 p-4">
        <h3>ABOUT US</h3>
        <p className="text-lg text-white">
          My love for Africa and culture let me to Tanzania while I was
          researching the Tinga-Tinga arts I learnt about the fabrics and I was
          experimenting if I could mix African fabrics with European designs and
          here you have the outcome be the judge yourself that is the foundation
          of the Cziska label, which I started in 2011. As a fashion designer, I
          studied Anthropology and love working with African fabrics made of
          Batik, Located in Dar Es Salaam Tanzania. From there is also the
          inspiration of the designs. the place of its origin. During my stay I
          discovered several different methods of waxing batik and natural dye
          which, immediately, became my choice of heart. My life vision is a
          sustainable type of life. We all live in one planet and we need to
          treat it well, we can change a lot just based on our own choices. As a
          cultural anthropologist it is possible to capture the inspiration and
          cultural influence of my travels in each fabric. My aim is to work
          with local artists and craftsmen in Tanzania to support the local
          economy. Behind every person involved in the manufacturing of the
          fabric is an interesting story. And that is what I like.
        </p>
        <Link href="/contact">
          <Button variant="secondary">Contact Us</Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;

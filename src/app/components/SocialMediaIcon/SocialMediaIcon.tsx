import Image from "next/image";

import instagram from "./instagram.svg";
import facebook from "./facebook.svg";
import linkedin from "./linkedin.svg";
import youtube from "./youtube.svg";

export type SocialMediaIconVariant =
  | "instagram"
  | "facebook"
  | "linkedin"
  | "youtube";

type SocialMediaIconProps = {
  variant: SocialMediaIconVariant;
};

const icons = {
  instagram,
  facebook,
  linkedin,
  youtube,
};

export function SocialMediaIcon({ variant }: SocialMediaIconProps) {
  return (
    <Image
      src={icons[variant]}
      width={20}
      height={20}
      alt=""
      className="inline-block"
    />
  );
}

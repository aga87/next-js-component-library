import { EnvelopeIcon } from "@heroicons/react/24/outline";

type MailIconProps = {
  className?: string;
};

export const MailIcon = ({ className }: MailIconProps) => {
  return <EnvelopeIcon className={className} aria-hidden="true" />;
};

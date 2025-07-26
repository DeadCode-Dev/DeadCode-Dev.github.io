import ContactInformations from "@/config/ContactInformations";
import Link from "next/link";
import { JSX, ClassAttributes, HTMLAttributes } from "react";

type ContactIconsProps = JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & {
  limit?: number;
};

const ContactIcons = (props: ContactIconsProps) => {
  return (
    <div className="flex items-center justify-center h-full" {...props}>
      {ContactInformations.Accounts.map((account) => (
        <Link
          href={account.url}
          key={account.platform}
          className="flex items-center justify-center w-10 h-10 m-2 rounded-full transition-colors"
        >
          {account.Icon}
        </Link>
      )).slice(0, props.limit || ContactInformations.Accounts.length)}
    </div>
  );
};
export default ContactIcons;

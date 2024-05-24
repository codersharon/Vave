import type { NextPage } from "next";
import Form from "./form";

export type CTAType = {
  className?: string;
};

const CTA: NextPage<CTAType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-black overflow-hidden flex flex-col items-center justify-start pt-[127px] pb-0 pr-5 pl-[21px] box-border gap-[236px] max-w-full mq725:gap-[118px] mq725:pt-[54px] mq725:box-border mq1050:pt-[83px] mq1050:box-border ${className}`}
    >
      <div className="w-[1280px] h-[1047px] relative bg-black hidden max-w-full" />
      <Form
        joinUs="Join-us"
        phoneNumberPlaceholder="Phone-Number"
        dateOfBirthDDMMPlaceholde="Date Of Birth (DD/MM/YYYY)"
      />
      <Form
        joinUs="News-Letter"
        phoneNumberPlaceholder="Interests"
        dateOfBirthDDMMPlaceholde="Date Of Birth"
        propFontSize="20px"
        propHeight="24px"
      />
    </section>
  );
};

export default CTA;
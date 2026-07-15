import FadeIn from "./FadeIn";

type Props = {
  label: string;
  title: string;
  lead?: string;
};

// KITOWA流の二段見出し: 小さな英語ラベル + 控えめな日本語見出し
export default function SectionHeader({ label, title, lead }: Props) {
  return (
    <FadeIn className="text-center">
      <p className="text-[11px] tracking-[0.5em] text-mist">{label}</p>
      <h2 className="mt-7 font-mincho text-xl font-medium tracking-[0.25em] text-ink sm:text-2xl">
        {title}
      </h2>
      {lead && (
        <p className="mx-auto mt-10 max-w-xl text-sm leading-loose tracking-[0.08em] text-sumi">
          {lead}
        </p>
      )}
    </FadeIn>
  );
}

type SkilsProps = {
  Image: any;
  title: string;
  description: string;
};

export default function Skils({ Image, description, title }: SkilsProps) {
  return (
    <div className="flex gap-x-4">
      {Image}
      <div>
        <span className="font-semibold text-xl">{title}</span>
        <p>{description}</p>
      </div>
    </div>
  );
}

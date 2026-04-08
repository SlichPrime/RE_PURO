type CardProps = {
  img: string;
  text: string;
};

function Card({ img, text }: CardProps) {
  return (
    <div className="bg-white shadow rounded p-4">
      <img src={img} className="rounded mb-2" />
      <p className="text-sm text-[#1f3f6b]">{text}</p>
    </div>
  );
}

export default function Story() {
  return (
    <div className="px-6 py-10 space-y-6">
      <h2 className="text-center text-2xl font-bold text-[#1f3f6b]">
        Our Story
      </h2>

      <Card
        img="/story1.png"
        text="Started from a simple idea between friends."
      />
      <Card
        img="/story2.png"
        text="Growing into a passionate coffee brand."
      />
    </div>
  );
}

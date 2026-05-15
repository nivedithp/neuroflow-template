type Props = {
  badge: string;
  title: string;
  description?: string;
  center?: boolean;
};

export default function SectionHeader({
  badge,
  title,
  description,
  center = false,
}: Props) {
  return (
    <div
      className={`mb-20 ${
        center ? "text-center" : ""
      }`}
    >

      <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-300">

        {badge}

      </p>

      <h2 className="mx-auto max-w-5xl text-5xl font-bold leading-tight md:text-7xl">

        {title}

      </h2>

      {description && (
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">

          {description}

        </p>
      )}

    </div>
  );
}
type PlaygroundNavItem = {
  id: string;
  label: string;
};

type PlaygroundNavProps = {
  items: PlaygroundNavItem[];
};

export const PlaygroundNav = ({ items }: PlaygroundNavProps) => {
  return (
    <nav>
      <ul className="flex flex-col gap-1">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="block text-sm text-brand-primary underline hover:text-brand-secondary transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

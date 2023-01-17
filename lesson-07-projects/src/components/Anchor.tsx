type Props = {
  id?: string;
  name?: string;
  href?: string;
  children?: React.ReactNode;
};

export function Anchor({ name, id, href, children }: Props) {
  return (
    <a id={id} href={href} target="_blank" rel="noreferrer">
      {children || name}
    </a>
  );
}

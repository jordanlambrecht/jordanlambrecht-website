import cn from "classnames";

interface Props {
  className?: string;
  children: any;
  id: string;
}
const Section = ({ children, id, className }: Props) => {
  return (
    <section
      id={id}
      className={cn("max-w-7xl", {
        [`${className}`]: className,
      })}
    >
      {children}
    </section>
  );
};
export default Section;

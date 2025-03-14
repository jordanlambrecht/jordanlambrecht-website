import cn from "classnames";
type Props = {
  className?: string;
  innerClassName?: string;
  innerMaxWidth?: string;
  color?: string;
  id: string;
  disableSpacing?: boolean;
  fullWidth?: boolean;
  ref?: any;
};
export default function PageSection({
  className,
  children,
  color,
  id,
  disableSpacing,
  fullWidth,
  ref,
}: // eslint-disable-next-line no-undef
React.PropsWithChildren<Props>) {
  return (
    <section
      ref={ref}
      className={cn(
        { [`bg-${color}`]: color != undefined },
        { [`my-4 py-12 px-8 lg:py-32`]: !disableSpacing && !fullWidth },
        { [`w-full`]: fullWidth },
        { [`${className}`]: className }
      )}
      id={id}
    >
      {children}
    </section>
  );
}

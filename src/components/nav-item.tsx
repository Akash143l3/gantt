import { cva, VariantProps } from "class-variance-authority";

const navItemVariants = cva(

  "flex items-center h-10 px-4 gap-3 w-full text-sm text-accent-foreground",

  {
    variants: {
      isActive: {
        true: "bg-primary/10 border-2 border-primary/30 text-black rounded-xl ",
      },
    },
  },
);

export interface NavItemProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof navItemVariants> {}

export default function NavItem({
  className,
  children,
  isActive,
  ...props
}: NavItemProps) {
  return (
    <button className={navItemVariants({ className, isActive })} {...props}>
      {children}
    </button>
  );
}

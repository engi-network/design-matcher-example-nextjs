import React from "react";

type ButtonProps = {
  size?: 'large' | 'default' | 'small';
  variant?: 'primary' | 'default' | 'tag' | 'link';
};

export default function Button({
  size,
  variant,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props}></button>;
}

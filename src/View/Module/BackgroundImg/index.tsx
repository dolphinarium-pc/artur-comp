import React, { useMemo } from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  url: string;
  defaultUrl?: string;
  dependencies?: any[];
}

export const BackgroundImg: React.FC<Props> = ({
  url,
  children,
  defaultUrl,
  dependencies,
  ...props
}) => {
  return useMemo(
    () => (
      <section
        {...props}
        style={{ 
            ...props.style, backgroundImage: `url(${url || defaultUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}
      >
        {children}
      </section>
    ),
    [url]
  );
};
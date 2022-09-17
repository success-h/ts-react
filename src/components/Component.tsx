import { ReactElement, ReactNode, useState } from "react";

interface t {
  title: ReactNode;
  children: ReactNode;
}
type containerProps = { children: ReactNode } & typeof defaultContainerProps;

const defaultContainerProps = {
  heading: <strong>My Heading Here</strong>,
};

export const Heading = ({ title, children }: t) => {
  return (
    <div>
      {children}
      <h1>{title}</h1>
    </div>
  );
};

export const Container = ({
  heading,
  children,
}: containerProps): ReactElement => {
  return (
    <div className="">
      <h1>{heading}</h1>
      {children}
    </div>
  );
};

Container.defaultProps = defaultContainerProps;

// functional props

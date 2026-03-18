"use client";

import { Wrapper } from "./Wrapper";

/**
 * Abstracting root layout of the page so that we can omit it on the 404 page.
 **/

type PageLayoutProps = {
  children: React.ReactNode;
};

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="grow">
        <Wrapper>
          <div className="pb-24 pt-6">{children}</div>
        </Wrapper>
      </div>
    </div>
  );
};

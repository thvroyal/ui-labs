import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export default function HeroBanner() {
  return (
    <div className="pt-8">
      <div className="relative mx-auto flex max-w-3xl flex-col items-center">
        <div className="mb-8 flex">
          <a
            href="https://github.com/thvroyal/ui-labs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]" />
              <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full bg-white px-3 py-1 text-xs font-medium leading-5 text-slate-600 backdrop-blur-xl dark:bg-black dark:text-slate-200">
                New elements ⚡️
                <span className="inline-flex items-center pl-2 text-black dark:text-white">
                  Read more{" "}
                  <ArrowRight
                    className="pl-0.5 text-black dark:text-white"
                    size={16}
                  />
                </span>
              </div>
            </span>
          </a>
        </div>
        <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-6xl dark:text-gray-50">
          Collection of beautiful,{" "}
          <span className="inline-flex leading-tight">
            UI element snippets
          </span>
        </h2>
        <p className="mt-6 text-center text-lg leading-6 text-gray-600 dark:text-gray-200">
        Looking for inspiration for your website? Check out these stunning examples with cutting-edge design and engaging features.
        </p>
        <div className="mt-10 flex gap-4">
          <a
            href="https://github.com/thvroyal/ui-labs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <Button>
              Go to GitHub <ArrowRight className="pl-0.5" size={16} />
            </Button>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

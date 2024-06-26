import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full bg-transparent flex justify-between items-center pb-14 pt-7">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-0 mt-0">
        <Link className="hover:underline" href="/">
          Decoding Disney
        </Link>
        .
      </h2>

      {/* <div className="flex justify-end">
        <a
          href="https://www.pinterest.com/decodingdisney/"
          rel="noreferrer"
          target="_blank"
          className="text-gray-900 transition hover:opacity-90 mr-4"
        >
          <span className="sr-only">Pinterest</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.235 2.65 7.855 6.405 9.317-.09-.79-.165-2.008.033-2.873.18-.781 1.169-4.97 1.169-4.97s-.297-.602-.297-1.482c0-1.388.806-2.436 1.814-2.436.856 0 1.267.646 1.267 1.42 0 .866-.55 2.165-.83 3.362-.235.998.498 1.807 1.482 1.807 1.778 0 3.14-1.876 3.14-4.576 0-2.398-1.72-4.067-4.183-4.067-2.848 0-4.519 2.144-4.519 4.354 0 .861.33 1.783.74 2.282.082.098.091.189.066.285-.073.346-.247 1.095-.279 1.245-.04.194-.129.234-.3.134-1.142-.678-1.86-2.808-1.86-4.513 0-3.664 2.682-7.026 7.72-7.026 4.053 0 7.203 2.881 7.203 6.73 0 4.015-2.53 7.253-6.065 7.253-1.186 0-2.302-.616-2.684-1.347 0 0-.602 2.287-.746 2.84-.282 1.081-1.033 2.434-1.62 3.256C8.33 22.41 10.145 23 12 23c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/decodingdisney/"
          rel="noreferrer"
          target="_blank"
          className="text-gray-900 transition hover:opacity-90 mr-4"
        >
          <span className="sr-only">Instagram</span>

          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <a
          href="https://twitter.com/decodedisney"
          rel="noreferrer"
          target="_blank"
          className="text-gray-900 transition hover:opacity-90"
        >
          <span className="sr-only">Twitter</span>

          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </a>
      </div> */}
    </header>
  );
};

export default Header;

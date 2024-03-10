import Container from '@/app/_components/container';

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-10 flex flex-col items-center">
          <h3 className="text-xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-8 lg:pr-4">
            Decoding the secrets of Disney parks to create magical experiences
            for everyone.
          </h3>
          <p className="text-center mt-8 text-xs text-gray-500 sm:mt-0">
            Copyright &copy; 2024 Decoding Disney. All rights reserved. Built
            with 🔥 in Cincinnati, Ohio.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

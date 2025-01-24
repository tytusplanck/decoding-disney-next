import Container from '@/app/_components/container';

export function Footer() {
  return (
    <footer>
      <Container>
        <div className="py-10 flex flex-col items-center">
          <p className="text-center mt-8 text-xs text-gray-500 sm:mt-0">
            Copyright &copy; 2025 Decoding Disney. All rights reserved. Built
            with 🔥 in Cincinnati, Ohio.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

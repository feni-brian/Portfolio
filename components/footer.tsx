export default function Footer() {
	return (
		<footer className="mb-10 px-4 text-center text-gray-500">
			<small className="mb-2 block text-xs">&copy; 2030 Feni. All rights reserved.</small>
			<p className="text-xs">
				<span className="font-semibold">About this website:</span> built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend,
				Vercel hosting.
			</p>
			<p className="text-xs italics">
				<span className="font-semibold">Coolors affiliate link: </span>
				<a href="https://coolors.co/?ref=64e5f6fd7885d4000bfabfaf" target="_blank" rel="noopener noreferrer">
					Check out some color schemes from Coolors.com
				</a>
			</p>
			<p className="text-xs">
				<span className="font-semibold">App browser icon affiliate link: </span>
				<a target="_blank" href="https://icons8.com/icon/HdfGOpihWFSr/soul">
					Soul
				</a>{" "}
				icon by{" "}
				<a target="_blank" href="https://icons8.com">
					Icons8
				</a>
			</p>
		</footer>
	);
}

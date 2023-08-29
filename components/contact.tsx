"use client";

import { sendEmail } from "@/actions/send-email";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import SectionHeading from "./section-heading";
import SubmitButton from "./submit-button";

export default function Contact() {
	const { ref } = useSectionInView("Contact");

	return (
		<motion.section
			id="contact"
			ref={ref}
			className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			viewport={{ once: true }}
		>
			<SectionHeading>Contact Me</SectionHeading>

			<p className="text-gray-700 -mt-6 dark:text-white/80">
				Please contact me directly at <a>dev.fenibrian.com</a> or through this
				form
			</p>

			<form
				className="mt-10 flex flex-col dark:text-black"
				action={async (formData) => {
					const { data, error } = await sendEmail(formData);
					if (error) {
						toast.error(error);
						return;
					}
					toast.success("Email sent successfully!");
				}}
			>
				<input
					type="email"
					name="senderEmail"
					placeholder="Your email"
					maxLength={100}
					required
					className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
				/>
				<textarea
					name="message"
					placeholder="Your message here"
					maxLength={5000}
					required
					className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
				/>
				<SubmitButton />
			</form>
		</motion.section>
	);
}

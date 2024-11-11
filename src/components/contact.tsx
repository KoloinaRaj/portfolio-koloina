"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/src/lib/hooks";
import { sendEmail } from "@/src/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contactez moi</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Vous pouvez me contacter directement sur{" "} <br/>
        <a className="underline" href="mailto:koloinaraj@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />{" "}
          <span>koloinaraj@gmail.com</span>
        </a>{" "}
        ou au <br/><FontAwesomeIcon icon={faPhone} /> +261 32 62 261 19.
      </p>

      {/* <form
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
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Votre adresse email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Votre message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form> */}
    </motion.section>
  );
}

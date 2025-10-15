"use client";

import React from "react";
import ProfileCard from "@/components/profile/ProfileCard/ProfileCard";
import ContactMethods from "@/components/profile/ContactMethods/ContactMethods";
import SocialMediaLinks from "@/components/profile/SocialMediaLinks/SocialMediaLinks";
import GalleryWithModal from "@/components/cardContent/GalleryWithModal/GalleryWithModal";
import Slider from "@/components/cardContent/Slider/Slider";
import EducationExperience from "@/components/cardContent/EducationExperience/EducationExperience";
import BankInfo from "@/components/cardContent/PaymentInfo/PaymentInfo";
import CallToAction from "@/components/cardContent/cta/cta";
import SimpleYouTubeEmbed from "@/components/cardContent/VideoPlayer/SimpleYouTubeEmbed";
import VideoPlayer from "@/components/cardContent/VideoPlayer/VideoPlayer";
import Testimonials from "@/components/cardContent/Testimonials/Testimonials";

import { servicesItems } from "@/data/products";
import { educationEntries } from "@/data/education";
import { slidesData } from "@/data/slides";
import { banksData } from "@/data/banks";
import { contactsData } from "@/data/contact";
import { socialLinks } from "@/data/socialLinks";
import { profileData } from "@/data/profile";
import { profileGalleryItems } from "@/data/profileGallery";
import { galleryItems } from "@/data/gallery";
import { testimonialsData } from "src/data/testimonial";

export default function TemplateCard() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-light">
      {/* Perfil */}
      <section id="inicio" className="w-full bg-gradient-primary text-light">
        <ProfileCard
          profile={profileData}
          // 🎨 Layout del texto
          layoutOptions={{
            bgColor: "bg-transparent",
            textColor: "text-light",
            borderColor: "border-terciary",
            nameSize: "text-size-6 sm:text-size-9",
            titleSize: "text-size-3 sm:text-size-4",
            descriptionSize: "text-size-2 sm:text-size-3",
          }}
          // 🖼️ Imagen (reemplazada por slider si useSliderAsProfile = true)
          imageOptions={{
            width: 300,
            height: 300,
            size: "w-[300px] h-[420px] sm:w-[400px] sm:h-[550px]",
            rounded: "rounded-xl",
            shadow: "shadow-md shadow-accent",
          }}
          // 🎞️ Animación
          animationOptions={{
            duration: 0.8,
          }}
          // 📦 Botones
          buttonOptions={{
            type: "btn-rounded",
            bgColor: "bg-secondary shadow-lg shadow-dark",
            textColor: "text-black",
            textSize: "text-size-2 sm:text-3",
            saveLabel: "Guardar Contacto",
            whatsappLabel1: "Citas",
            whatsappLabel2: "Consultas",
            vcfLink: "/assets/vcards/karenfreire.vcf",
            whatsappMessage1: "Hola, deseo agendar una cita odontológica.",
            whatsappMessage2: "Hola, tengo una consulta sobre tratamientos.",
            shareLabel: "Compartir Tarjeta",
            shareMessage:
              "Te comparto la tarjeta digital de la Dra. Karen Freire 🦷✨",
            shareUrl: "https://karenfreire.anvetcard.com",
          }}
          // 🎠 Activar imagen de perfil como slider
          useSliderAsProfile={false}
          profileSliderItems={profileGalleryItems}
        />
        <ContactMethods
          contacts={contactsData}
          variant="with-text"
          layoutOptions={{
            bgColor: "bg-transparent",
            gap: "gap-4",
            padding: "pt-spacing-4 pb-spacing-2",
          }}
          buttonOptions={{
            buttonType: "btn-rounded",
            bgColor: "bg-secondary",
            textColor: "text-dark",
            textSize: "text-size-2",
            iconSize: "w-9 h-9 sm:w-12 sm:h-12",
          }}
          modalOptions={{
            modalBgColor: "bg-gradient-secondary",
            modalTextColor: "text-light",
            modalTextSize: "text-base",
            modalTitle: "Ubicación y Horarios",
            modalButtonText: "Cerrar",
            animationDuration: 0.5,
          }}
        />
        <SocialMediaLinks
          socialLinks={socialLinks}
          variant="icon-only"
          layoutOptions={{
            layout: "row",
            gap: "gap-2",
            componentBgColor: "bg-transparent",
            padding: "p-4 pb-spacing-3",
          }}
          buttonOptions={{
            buttonType: "btn-rounded",
            bgColor: "bg-secondary",
            hoverColor: "hover:bg-accent hover:text-dark",
            iconSize: "w-9 h-9 sm:w-12 sm:h-12",
          }}
          animate={true}
        />
      </section>

      {/* Video principal */}
      {/* <section className="bg-gradient-contrast py-8">
        <VideoPlayer
          videoUrl="/assets/videos/video1.mp4"
          titleOptions={{
            text: "Salud y estética para tu sonrisa",
            color: "text-black",
            size: "text-size-5 sm:text-size-7",
            weight: "font-bold",
            alignment: "text-center",
            marginBottom: "mb-spacing-3",
          }}
          containerOptions={{
            bgColor: "bg-gradient-primary",
            padding: "p-10",
            borderColor: "border border-secondary",
            borderRadius: "rounded-xl",
            shadow: "shadow-md shadow-secondary",
            maxWidth: "max-w-10xl",
            ratio: "16/9",
          }}
        />
      </section> */}

      {/* Beneficios */}
      <section className="bg-gradient-contrast">
        <EducationExperience
          entries={educationEntries}
          componentTitle="¿Por qué elegir a la Dra. Karen Freire?"
          titleOptions={{
            text: "Experiencia, tecnología y resultados",
            color: "text-light",
            size: "text-size-5 sm:text-size-7",
          }}
          blockOptions={{ gap: "gap-6", bgColor: "bg-transparent" }}
          accordionOptions={{
            bgColor: "bg-light",
            borderColor: "border border-gray-300",
            contentBgColor: "bg-gradient-subtle",
          }}
          textOptions={{
            titleColor: "text-dark",
            titleSize: "text-size-2 sm:text-3",
            detailColor: "text-light",
            detailSize: "text-size-1 sm:text-2",
          }}
          behaviorOptions={{ useBulletPoints: true, animate: true }}
        />
      </section>

      {/* Servicios */}
      <section id="services" className="bg-gradient-dark">
        <GalleryWithModal
          items={servicesItems}
          whatsappNumber="593985351894"
          titleOptions={{
            text: "Tratamientos Odontológicos",
            color: "text-secondary",
            size: "text-size-5 sm:text-size-7",
            subtitle: "Conoce nuestros procedimientos.",
            subtitleColor: "text-secondary",
            subtitleSize: "text-size-2 sm:text-size-3",
            description: " Haz clic en cada imagen para más información.",
            descriptionColor: "text-secondary",
            descriptionSize: "text-size-1 sm:text-size-2",
          }}
          galleryOptions={{
            bgColor: "bg-transparent",
            itemBg: "bg-light shadow-lg shadow-dark",
            titleColor: "text-secondary",
            titleSize: "text-size-2 sm:text-3",
          }}
          modalOptions={{
            bgColor: "bg-gradient-primary",
            titleColor: "text-dark",
            titleSize: "text-size-4 sm:text-size-5",
            descriptionColor: "text-dark",
            descriptionSize: "text-base sm:text-lg",
            highlightColor: "text-secondary",
            highlightSize: "text-size-4 sm:text-size-5",
            aspectRatio: "4/3",
          }}
          buttonOptions={{
            text: "Solicitar Información",
            type: "btn-rounded",
            size: "text-base sm:text-lg",
            bgColor: "bg-secondary",
            textColor: "text-dark",
            hoverColor: "hover:bg-secondary hover:text-dark",
          }}
        />
      </section>

      {/* Tercer video */}
      <section className="bg-gradient-primary py-8">
        <SimpleYouTubeEmbed
          video="https://www.youtube.com/watch?v=IVFPRBUx7uU"
          titleOptions={{
            text: "Conoce nuestros procedimientos",
            color: "text-black",
            size: "text-size-4 sm:text-size-7",
            weight: "font-bold",
            alignment: "text-center",
            marginBottom: "mb-spacing-3",
          }}
          containerOptions={{
            bgColor: "bg-gradient-primary",
            padding: "p-1 sm:p-2",
            borderColor: "border border-secondary",
            borderRadius: "rounded-xl",
            shadow: "shadow-md shadow-secondary",
            maxWidth: "max-w-6xl",
            ratio: "16/9",
          }}
        />
      </section>

      {/* Slider de casos */}
      <section id="galeria" className="bg-gradient-secondary">
        <Slider
          slides={slidesData}
          titleOptions={{
            text: "Transformaciones reales, sonrisas felices",
            color: "text-light",
            size: "text-size-5 sm:text-size-7",
            weight: "font-semibold",
          }}
          carouselOptions={{
            bgColor: "bg-transparent",
            borderColor: "border border-light",
            borderRadius: "rounded-xl",
            shadow: "shadow-xl",
            imageSize: "w-3/4 sm:w-1/2",
            gap: "gap-6",
          }}
          buttonOptions={{
            bgColor: "bg-secondary",
            textColor: "text-light",
            hoverColor: "hover:bg-light hover:text-dark",
            activeBgColor: "bg-light",
            activeTextColor: "text-dark",
          }}
          behaviorOptions={{
            animationSpeed: 1.0,
            loop: true,
            autoplay: true,
            autoplaySpeed: 4000,
            showIndicators: false,
          }}
        />
      </section>

      {/* Testimonios */}
      <section className="bg-gradient-accent">
        <Testimonials
          testimonials={testimonialsData}
          titleOptions={{
            text: "Lo que dicen nuestros pacientes",
            color: "text-dark",
            size: "text-size-5 sm:text-size-7 ",
            alignment: "text-center ",
          }}
          carouselOptions={{
            autoplay: true,
            loop: true,
            animationSpeed: 0.8,
          }}
          cardOptions={{
            bgColor: "bg-light",
            textColor: "text-dark",
            borderRadius: "rounded-xl",
            shadow: "shadow-xl shadow-dark",
          }}
          textOptions={{
            nameColor: "text-dark",
            nameSize: "text-size-3",
            titleColor: "text-secondary font-semibold",
            titleSize: "text-size-1",
            messageColor: "text-dark",
            messageSize: "text-size-1 sm:text-size-2",
            imageSize: 240,
            imageMobileSize: 170,
          }}
        />
      </section>

      {/* Información de Pago */}
      <section id="info_pago" className="bg-gradient-subtle">
        <BankInfo
          banks={banksData}
          titleOptions={{
            text: "Formas de Pago",
            color: "text-secondary",
            size: "text-size-4 sm:text-size-5",
            description: "Haz clic en el logo para ver los datos bancarios",
            descriptionSize: "text-size-1 sm:text-size-2 ",
            descriptionColor: "text-secondary",
          }}
          layoutOptions={{
            bgColor: "bg-transparent",
            layout: "row",
            iconSize: 100,
            borderColor: "border border-accent",
          }}
          modalOptions={{
            bgColor: "bg-gradient-primary",
            titleColor: "text-dark",
            textColor: "text-dark",
            buttonType: "btn-rounded",
            buttonBgColor: "bg-secondary",
            buttonTextColor: "text-dark",
            copyButtonText: "Copiar",
            closeButtonText: "Cerrar",
          }}
        />
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-dark">
        <CallToAction
          titleOptions={{
            text: "Reserva tu cita hoy",
            color: "text-light",
            size: "text-3xl sm:text-4xl",
            weight: "font-extrabold",
          }}
          buttonOptions={{
            text: "Contactar por WhatsApp",
            phoneNumber: "+593985351894",
            type: "btn-rounded",
            bgColor: "bg-secondary",
            textColor: "text-dark",
            hoverColor: "hover:bg-light hover:text-dark",
            borderColor: "border border-transparent",
            textSize: "text-lg sm:text-xl",
          }}
          layoutOptions={{
            bgColor: "bg-transparent",
            borderColor: "border-none",
            borderRadius: "rounded-xl",
            shadow: "shadow-xl",
            backgroundImage: "/assets/images/cta-back.jpg",
          }}
        />
      </section>
    </main>
  );
}

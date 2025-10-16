


"use client";

import React from "react";
import LocaleSwitchPill from "@/components/common/LocaleSwitchPill"
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

// 👉 i18n
import { useI18n } from "@/hooks/useI18n";

// 🔹 Datos ES
import { servicesItems as servicesItemsES } from "@/data/es/products";
import { educationEntries as educationEntriesES } from "@/data/es/education";
import { slidesData as slidesDataESEntry } from "@/data/es/slides";
import { banksData as banksDataES } from "@/data/es/banks";
import { contactsData as contactsDataES } from "@/data/es/contact";
import { socialLinks as socialLinksES } from "@/data/es/socialLinks";
import { profileData as profileDataES } from "@/data/es/profile";
import { profileGalleryItems as profileGalleryItemsES } from "@/data/es/profileGallery";
import { galleryItems as galleryItemsES } from "@/data/es/gallery";
import { testimonialsData as testimonialsDataES } from "@/data/es/testimonial";

// 🔹 Datos EN
import { servicesItems as servicesItemsEN } from "@/data/en/products";
import { educationEntries as educationEntriesEN } from "@/data/en/education";
import { slidesData as slidesDataENEntry } from "@/data/en/slides";
import { banksData as banksDataEN } from "@/data/en/banks";
import { contactsData as contactsDataEN } from "@/data/en/contact";
import { socialLinks as socialLinksEN } from "@/data/en/socialLinks";
import { profileData as profileDataEN } from "@/data/en/profile";
import { profileGalleryItems as profileGalleryItemsEN } from "@/data/en/profileGallery";
import { galleryItems as galleryItemsEN } from "@/data/en/gallery";
import { testimonialsData as testimonialsDataEN } from "@/data/en/testimonial";

export default function TemplateCard() {
  const { t, locale } = useI18n();

  // 🧠 Selector de datasets por idioma (ES por defecto)
  const servicesItems = locale === "en" ? servicesItemsEN : servicesItemsES;
  const educationEntries = locale === "en" ? educationEntriesEN : educationEntriesES;
  const slidesData = locale === "en" ? slidesDataENEntry : slidesDataESEntry;
  const banksData = locale === "en" ? banksDataEN : banksDataES;
  const contactsData = locale === "en" ? contactsDataEN : contactsDataES;
  const socialLinks = locale === "en" ? socialLinksEN : socialLinksES;
  const profileData = locale === "en" ? profileDataEN : profileDataES;
  const profileGalleryItems = locale === "en" ? profileGalleryItemsEN : profileGalleryItemsES;
  const galleryItems = locale === "en" ? galleryItemsEN : galleryItemsES;
  const testimonialsData = locale === "en" ? testimonialsDataEN : testimonialsDataES;


  return (
    <main className="min-h-screen flex flex-col bg-gradient-light">
      

      {/* Perfil */}
<section id="inicio" className="w-full bg-gradient-primary text-light">
  <div className="relative max-w-7xl mx-auto">
    {/* Pill ES/EN arriba-derecha */}
    <div className="absolute right-4 top-4 z-20">
      {/* Importa y usa el nuevo componente */}
      {/* import LocaleSwitchPill from "@/components/common/LocaleSwitchPill"; (arriba en imports) */}
      <LocaleSwitchPill />
    </div>

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
        saveLabel: t.profile.saveContactLabel,
        whatsappLabel1: t.profile.whatsappAppointmentsLabel,
        whatsappLabel2: t.profile.whatsappQueriesLabel,
        vcfLink: "/assets/vcards/karenfreire.vcf",
        whatsappMessage1: t.profile.whatsappMessage1,
        whatsappMessage2: t.profile.whatsappMessage2,
        shareLabel: t.profile.shareCardLabel,
        shareMessage: t.profile.shareCardMessage,
        shareUrl: "https://karenfreire.anvetcard.com",
      }}
      // 🎠 Activar imagen de perfil como slider
      useSliderAsProfile={false}
      profileSliderItems={profileGalleryItems}
    />
  </div>

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
      modalTitle: t.contact.locationHoursTitle,
      modalButtonText: t.contact.modalClose,
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



      {/* Beneficios */}
      <section className="bg-gradient-contrast">
        <EducationExperience
          entries={educationEntries}
          componentTitle={t.education.whyChooseTitle}
          titleOptions={{
            text: t.education.experienceSubtitle,
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
            text: t.services.title,
            color: "text-secondary",
            size: "text-size-5 sm:text-size-7",
            subtitle: t.services.subtitle,
            subtitleColor: "text-secondary",
            subtitleSize: "text-size-2 sm:text-size-3",
            description: t.services.description,
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
            text: t.services.buttonText,
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
            text: t.video.proceduresTitle,
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
            text: t.slider.title,
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
            text: t.testimonials.title,
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
            text: t.banks.title,
            color: "text-secondary",
            size: "text-size-4 sm:text-size-5",
            description: t.banks.description,
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
            copyButtonText: t.banks.copyButtonText,
            closeButtonText: t.banks.closeButtonText,
          }}
        />
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-dark">
        <CallToAction
          titleOptions={{
            text: t.cta.title,
            color: "text-light",
            size: "text-3xl sm:text-4xl",
            weight: "font-extrabold",
          }}
          buttonOptions={{
            text: t.cta.buttonText,
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

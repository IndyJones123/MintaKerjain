import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import clsx from "clsx";

const accordionData = [
    {
        id: uuid(),
        title: "Minta Kerjain Apa Sih?",
        isOpen: true,
        content:
            "Minta Kerjain Adalah Platform Untuk Membantu Anda Dalam Menyelesaikan Tugas Baik Akademik Maupun Non Akademik"
    },
    {
        id: uuid(),
        title: "Siapa Yang Mengerjakan?",
        isOpen: false,
        content:
            "Team MintaKerjain Seluruhnya Adalah Lulusan Lulusan Terbaik Universitas Ternama Di Indonesia Serta Ahli Pada Bidangnya"
    },
    {
        id: uuid(),
        title: "Berapa Lama Pengerjaan?",
        isOpen: false,
        content: "Lama Pengerjaan Bergantung Pada Kesusahan Tugas Yang Diberikan dan Banyaknya Tugas Dengan Standart Yang Telah Kami Tentukan Sesuai Moto Kami Murah & Cepat"
    },
    {
        id: uuid(),
        title: "Berapa Harga Service Yang Ingin Saya Gunakan?",
        isOpen: false,
        content:
            "Harga Bergantung Dengan Kesusahan Tugas Serta Waktu Pengerjaan (Deadline)"
    }
];

const accordionItemType = {
    top: "rounded-t-lg",
    default: "border rounded-none border-t-0",
    bottom: "border border-t-0 rounded-b-lg"
};

export const Accordion = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const accordionClickHandle = (id) => {
        setActiveAccordion(id === activeAccordion ? null : id);
    };

    return (
        <SectionContainer className="accordion--container my-16 drop-shadow-xl max-w-3xl mx-auto offset-y-0 offset-x-8">
            {accordionData.map((accordionItem, index) => (
                <div
                    key={accordionItem.id}
                    id={accordionItem.id}
                    className={clsx(
                        "accordion-item--container border border-neutral-200 bg-white overflow-hidden",
                        {
                            [accordionItemType.top]: index === 0,
                            [accordionItemType.default]:
                                index > 0 && index < accordionData.length - 1,
                            [accordionItemType.bottom]:
                                index === accordionData.length - 1
                        }
                    )}
                >
                    <h2 className="accordion-item--heading mb-0">
                        <button
                            className="group relative flex w-full font-semibold items-center rounded-t-lg border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition"
                            type="button"
                            aria-expanded={accordionItem.isOpen}
                            onClick={() =>
                                accordionClickHandle(accordionItem.id)
                            }
                        >
                            {accordionItem.title}
                            <Icon
                                icon="material-symbols:keyboard-arrow-up-rounded"
                                className="ml-auto h-8 w-8 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out motion-reduce:transition-none"
                            />
                        </button>
                    </h2>
                    <div
                        className={clsx(
                            "accordion-item--content py-4 px-5 text-base",
                            {
                                hidden: activeAccordion !== accordionItem.id, // Use hidden class to animate height to 0
                                "!visibility block":
                                    activeAccordion === accordionItem.id // Use block class to show content again
                            }
                        )}
                    >
                        <p>{accordionItem.content}</p>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};

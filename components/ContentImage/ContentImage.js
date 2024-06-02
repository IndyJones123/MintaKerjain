import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { v4 as uuid } from "uuid";

const ContentImageData = [
    {
        id: uuid(),
        title: "Publish Jurnal Sinta (MULTIDISIPLIN) & HKI",
        content:
            "MintaKerjain hadir untuk memudahkan Anda dalam mempublikasikan hasil penelitian di jurnal-jurnal bereputasi yang terindeks oleh SINTA (Science and Technology Index). Kami menyediakan layanan publikasi jurnal untuk semua tingkatan, mulai dari SINTA 6 hingga SINTA 1. Dengan bantuan tim ahli kami, proses publikasi jurnal Anda akan menjadi lebih cepat, efisien, dan terjamin kualitasnya. Tak hanya itu kami juga menyediakan jasa publish HKI",
        align: "right",
        image: "/Sinta.jpg"
    },
    {
        id: uuid(),
        title: "Tugas Kuliah/Sekolah (Multidisiplin)",
        content:
            "MintaKerjain hadir untuk membantu Anda dalam menyelesaikan tugas-tugas kuliah dan sekolah dengan cepat dan berkualitas. Kami memahami bahwa terkadang beban akademis bisa sangat berat dan waktu sangat terbatas. Dengan layanan kami, Anda dapat menyerahkan tugas-tugas Anda kepada para ahli dan profesional di bidangnya, sehingga Anda dapat fokus pada hal-hal lain yang lebih penting.",
        align: "left",
        image: "/task.png"
    }
];

export const ContentImage = () => {
    return (
        <SectionContainer className="process-items mt-16 space-y-16">
            {ContentImageData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="process-item--container grid md:grid-cols-2 gap-y-8"
                >
                    <div
                        className={`process-item--image rounded-3xl ${
                            item.align === "left" ? "md:order-1" : ""
                        }`}
                    >
                        <Image
                            src={item.image}
                            width={512}
                            height={512}
                            objectFit="cover"
                            alt="Process Banner 1"
                            className="drop-shadow-xl w-full offset-y-0 offset-x-8 blur-16"
                        />
                    </div>
                    <div
                        className={`process-item--content ${
                            item.align === "left"
                                ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                                : "md:pl-16 lg:pl-24 xl:pl-32  mr-auto"
                        } my-auto content text-black/60`}
                    >
                        <h3 className="mb-6 h4 md:h3 font-semibold text-black">
                            {item.title}
                        </h3>
                        <p>{item.content}</p>
                        <ul className="process-item--list space-y-3">
                            {item.listItems?.length &&
                                item.listItems.map((listItem) => (
                                    <li
                                        id={listItem.id}
                                        key={listItem.id}
                                        className="inline-grid grid-flow-col-dense"
                                    >
                                        <Icon
                                            icon="ph:seal-check-bold"
                                            className="w-6 h-6 text-secondary-500 mr-2"
                                        />
                                        {listItem.content}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};

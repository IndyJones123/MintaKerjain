import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { Columns } from "@components/Columns";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { Accordion } from "@components/Accordion";
import { MotionBTTContainer } from "@components/Motion";
import SEO from "@components/SEO/SEO";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";

export default function Home() {
    return (
        <Layout className="">
            <SEO
                title="Minta Kerjain - Joki Tugas 🚀"
                description="Minta Kerjain Platform Yang Membantumu Mengerjakan Segala Tugas Yang Kamu Miliki"
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Features */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer
                            id="features"
                            className="features py-20 "
                        >
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Services</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Selesaikan Semua Dengan
                                <h1>MintaKerjain</h1>
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Hallo Semua! MintaKerjain Telah Hadir, Kami
                                    Menawarkan Kemudahan Bagi Anda Menyelesaikan
                                    Tugasmu &apos; Hubungi Kami Segera ! &apos;
                                </p>
                            </Content>
                            <ContentImage />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Card Container Tabs */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="feature-tabs">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Services Lainnya</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                NEW Services
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    MintaKerjain kini juga menawarkan layanan
                                    baru yang mencakup dua bidang yang menarik
                                    yakni joki game, pembuatan game, website,
                                    dan coding.
                                </p>
                            </Content>
                            <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-24 md:grid-cols-2">
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-yellow-600/20 p-12 items-center">
                                        <div className="w-full flex justify-center">
                                            <CardImage
                                                src="/Code.png"
                                                alt="Customizable Layouts image used"
                                            />
                                        </div>
                                        <h3 className="text-center m-3">
                                            Coding
                                        </h3>
                                        <p className="text-center">
                                            MintaKerjain hadir untuk mewujudkan
                                            impian Anda dalam pembuatan game dan
                                            website. Kami juga siap membantu
                                            Anda mengatasi kendala dalam
                                            pemrograman atau pengembangan
                                            perangkat lunak dengan layanan
                                            troubleshoot code. Hubungi kami
                                            sekarang untuk solusi yang tepat dan
                                            berkualitas!
                                        </p>
                                    </CardBody>
                                </Card>
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-yellow-600/20 p-12">
                                        <div className="w-full flex justify-center">
                                            <CardImage
                                                src="/JokiGame.jpeg"
                                                alt="Customizable Layouts image used"
                                            />
                                        </div>
                                        <h3 className="text-center m-3">
                                            Joki Game
                                        </h3>

                                        <p className="text-center">
                                            MintaKerjain menawarkan layanan joki
                                            game untuk sejumlah game populer
                                            seperti Dota 2, Valorant, Mobile
                                            Legends, Honor of Kings, dan Genshin
                                            Impact. Tim kami yang ahli siap
                                            membantu Anda meningkatkan peringkat
                                            dan keterampilan dalam permainan
                                            favorit Anda. Hubungi kami sekarang
                                            untuk pengalaman bermain game yang
                                            lebih baik!
                                        </p>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Testimonials */}

                    {/* Accordions */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="faq" className="faq m-10 py-20">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>FAQ</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            ></PageTitle>
                            <Accordion />
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}

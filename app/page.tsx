import Image from "next/image";
import Social from "./../img/social-media.png";
import Skils from "@/components/skils";

import Img1 from "./../img/ilustrações/ilustração-1.jpg";
import Img2 from "./../img/ilustrações/ilustração-2.jpg";
import Img3 from "./../img/ilustrações/ilustração-3.jpg";
import Img4 from "./../img/ilustrações/ilustração-4.jpg";
import Img5 from "./../img/ilustrações/ilustração-5.jpg";
import Img6 from "./../img/ilustrações/ilustração-6.jpg";
import Img7 from "./../img/ilustrações/ilustração-7.jpg";
import Img8 from "./../img/ilustrações/ilustração-8.jpg";

import outros2 from "./../img/outros/front.jpg";
import outros3 from "./../img/outros/joy.jpeg";
import outros4 from "./../img/outros/joylogo.jpeg";
import outros5 from "./../img/outros/keanu.jpg";
import outros6 from "./../img/outros/logo-1.jpg";
import outros7 from "./../img/outros/marketing.jpeg";
import outros8 from "./../img/outros/racismo.jpg";
import outros9 from "./../img/outros/sniper.jpeg";
import vita from "./../img/outros/qwer.jpeg";

import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiBlender,
  SiCanva,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="">
      <section className="grid grid-cols-2 gap-x-[10%] pl-[10%] bg-[#111111]">
        <div className="text-white flex justify-center flex-col">
          <h1 className="text-3xl font-bold">
            Revolucionando a experiência visual
          </h1>
          <p>
            Aqui você encontrará uma coleção diversificada de minhas obras de
            arte, capturando minha paixão pela expressão visual. Cada peça é um
            reflexo de minha jornada artística e meu compromisso com a
            excelência.
          </p>

          <button className="mt-4 bg-gradient-to-r from-[#FFD100] to-[#ED3C28] py-3 rounded-sm font-bold">
            Fale comigo
          </button>
        </div>
        <div>
          <Image src={Social} alt="Rede social" />
        </div>
      </section>

      <section className="max-w-[80%] m-auto mb-32">
        <h2 className="text-3xl mt-32 mb-10 font-bold">Domínio sobre</h2>

        <div className="grid grid-cols-2 gap-6">
          <Skils
            Image={<SiAdobeillustrator size={80} color="#ED3C28" />}
            title="Adobe Illustrator"
            description="Criação de logotipos, Design de ilustrações, Design de websites..."
          />
          <Skils
            Image={<SiAdobephotoshop size={80} color="#ED3C28" />}
            title="Adobe Photoshop"
            description="Criação de ilustrações digitais,Composição de imagens,Edição de fotos"
          />
          <Skils
            Image={<SiAdobepremierepro size={70} color="#ED3C28" />}
            title="Adobe Premiere"
            description="Edição de áudio,Efeitos visuais,Edição de vídeo"
          />
          <Skils
            Image={<SiCanva size={110} color="#ED3C28" className="-mt-4" />}
            title="Canva"
            description="Criação de posts para mídias sociais,Criação de apresentações, Criação de logotipos e identidade visual"
          />
        </div>

        <h2 className="text-3xl my-10 font-bold">Estudando sobre</h2>

        <div className="grid grid-cols-2 gap-6">
          <Skils
            Image={<SiAdobeaftereffects size={100} color="#ED3C28" />}
            title="Adobe After Effects"
            description="Animação de texto e gráficos, Animação de personagens, Criação de motion graphics"
          />
          <Skils
            Image={<SiBlender size={70} color="#ED3C28" />}
            title="Blender"
            description="Animação 3D, Modelagem 3D, Renderização"
          />
        </div>
      </section>

      <section className="bg-[#111]  px-[10%] py-[40px]">
        <Tabs defaultValue="Ilustrações">
          <TabsList className="bg-[#111] border-b-2 rounded-none text-white gap-x-2 py-10">
            <TabsTrigger value="Ilustrações">Ilustrações</TabsTrigger>
            <TabsTrigger value="Vídeos">Vídeos</TabsTrigger>
            <TabsTrigger value="Outros trabalhos">Outros trabalhos</TabsTrigger>
          </TabsList>
          <TabsContent value="Ilustrações">
            <div className="grid grid-cols-3 gap-8 mt-10">
              <Image src={Img1} alt="ilustração-1" />
              <Image src={Img2} alt="ilustração-2" />
              <Image src={Img3} alt="ilustração-3" />
              <Image src={Img4} alt="ilustração-4" />
              <Image src={Img5} alt="ilustração-5" />
              <Image src={Img6} alt="ilustração-6" />
              <Image src={Img7} alt="ilustração-7" />
              <Image src={Img8} alt="ilustração-8" />
            </div>
          </TabsContent>
          <TabsContent value="Vídeos" className="grid grid-cols-2 gap-8 mt-10">
            <div>
              <h3 className="text-white font-semibold text-2xl">
                Documentário: Racismo
              </h3>
              <video loop className="w-full" controls>
                <source src="/racismo.mp4" />
              </video>
            </div>

            <div>
              <h3 className="text-white font-semibold text-2xl">
                Documentário: Cidade grande
              </h3>
              <video loop className="w-full" controls>
                <source src="/cidade.mp4" />
              </video>
            </div>

            <div>
              <h3 className="text-white font-semibold text-2xl">
                Youtube: Piores efeitos de filmes
              </h3>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/PRxny0psBGs?si=k6BbHVxLZSiqpI0u"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              />
            </div>

            <div>
              <h3 className="text-white font-semibold text-2xl">
                Youtube: Series mais hypadas
              </h3>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/NFVAREfJFsk?si=GDcGa51H3sURGnr4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              />
            </div>
          </TabsContent>

          <TabsContent value="Outros trabalhos">
            <div className="grid grid-cols-3 gap-8 mt-10">
              <Image src={outros2} alt="ilustração-2" />
              <Image src={outros5} alt="ilustração-5" />
              <Image src={outros8} alt="ilustração-8" />
              <Image src={outros7} alt="ilustração-7" />
              <Image src={outros3} alt="ilustração-3" />
              <Image src={vita} alt="vita" />
              <Image src={outros4} alt="ilustração-4" />
              <Image src={outros6} alt="ilustração-6" />
              <Image src={outros9} alt="ilustração-9" />
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="grid grid-cols-2 gap-x-10 max-w-[80%] m-auto py-[75px]">
        <div>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/P7R2cUsB7ZQ?si=ye8rBJHV5BKv_kNk"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </div>


        <div>
          <h3 className="font-semibold text-2xl">
            Conheça meu canal no youtube!
          </h3>
          <p>
            Gosta de mergulhar fundo nos programas, filmes e jogos mais
            recentes? Desejando análises criteriosas e discussões animadas? Não
            procure mais! Meu canal no YouTube é o seu balcão único para tudo
            relacionado ao entretenimento. Dissecamos lançamentos de séries,
            analisamos os filmes mais populares e exploramos o emocionante mundo
            dos jogos. Então, se você é um fã obstinado ou está apenas
            procurando sua próxima dose de cultura pop, clique no botão de
            inscrição e participe da conversa! Você não vai se arrepender.
          </p>

          <Button className="mt-4 bg-gradient-to-r from-[#FFD100] to-[#ED3C28] py-3 rounded-sm font-bold w-full">
            Acessar canal
          </Button>
        </div>
      </section>
    </main>
  );
}

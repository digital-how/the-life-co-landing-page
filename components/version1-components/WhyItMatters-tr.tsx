"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function WhyItMattersTR() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4" style={{ color: '#01609C' }}>
            Kalıcı Değişimin Başladığı Yer
          </h2>
          <div className="w-20 h-1 bg-[#01609C] mx-auto"></div>
        </div>
        
        {/* Section 1: Because you already know */}
        <div className="mb-16 space-y-4">
          <h3 className="text-2xl md:text-3xl mb-6" style={{ color: '#01609C' }}>
            Farklı bir yaklaşımın zamanı geldiğini bilenler için.
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Bu sadece kilo vermekle ilgili olsaydı burada olmazdınız.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Yediklerinizi kontrol etmeyi de denediniz. Daha fazla zorlamayı da, disiplinli olmayı da. Detoksu, metabolizmayı, dengeyi biliyorsunuz. Eksik olan çaba ya da bilgi değildi.
          </p>
          <div className="space-y-1 my-6">
            <p className="text-lg text-gray-700">Doğru ortam.</p>
            <p className="text-lg text-gray-700">Doğru rehberlik.</p>
            <p className="text-lg text-gray-700">Bedeninizin gerçekten neye ihtiyacı olduğunu bilen ve sizi yakından izleyen bir ekiple olma hissi.</p>
          </div>
          <p className="text-lg text-gray-900 font-medium mt-6">
            TheLifeCo tam da burada başlar.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-12"></div>

        {/* Section 2: We Know the Pattern */}
        <div className="mb-16 space-y-4">
          <h3 className="text-2xl md:text-3xl mb-6" style={{ color: '#01609C' }}>
            Bu Döngüyü Biliyoruz — ve Nasıl Kırılacağını da
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            On binlerce kişiye, tereddütle umut arasında gidip gelinen ve "bu kez farklı olmalı" duygusunun hissedildiği bu yol ayrımında rehberlik ettik.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Programlarımız bu deneyimle şekillenir: tıbbi temelli, sürekli gözlemlenen ve bedeninizin verdiği yanıta göre ayarlanan. Belirsizlikle tek başınıza mücadele etmeniz beklenmez
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-12"></div>

        {/* Section 3: This Is Where You Let Go */}
        <div className="mb-16 space-y-4">
          <h3 className="text-2xl md:text-3xl mb-6" style={{ color: '#01609C' }}>
            Burada Yüklerinizi Güvenle Bırakırsınız
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Burada, kilo kaybı zorlanmaz.<br />
            İzin verilir.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Kısıtlamanın yerini beslenme alır. Tahminlerin yerini gözlem. Kontrolün yerini denge.
            Ve bu alanda değişim — çoğu zaman beklenenden çok daha doğal biçimde — başlar.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-12"></div>

        {/* Section 4: An Invitation */}
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl mb-6" style={{ color: '#01609C' }}>
            Bir Davet
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            TheLifeCo'yu seçmek, her şeyi tek başınıza yönetmeyi bırakmanıza izin veren bilinçli bir adımdır.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Konaklamanız boyunca yönlendirilir, desteklenir ve gözlemlenirsiniz; bedeninizin verdiği yanıta göre her unsur uyarlanır.
          </p>
          <div className="space-y-1 mt-6">
            <p className="text-lg text-gray-700">Yeni bir stratejiye daha ihtiyacınız yok.</p>
            <p className="text-lg text-gray-900 font-medium">Bedeninizin nihayet yanıt verebileceği bir yere ihtiyacınız var.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-6 mt-16">
        <div className="bg-gradient-to-r from-[#01609C] to-[#014a7a] rounded-2xl p-8 md:p-12 shadow-2xl text-center">
          <h3 className="text-2xl md:text-3xl mb-4 text-white">
            Dönüşümünüze Başlayın
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Kişiye özel wellness programlarımızla hayatını dönüştüren binlerce kişiye katılın
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="E-posta adresinizi girin" 
              className="flex-1 bg-white border-gray-300"
            />
            <Button className="bg-white hover:bg-gray-100 text-[#01609C] px-8 font-medium">
              Başlayın
            </Button>
          </div>
          <p className="text-xs text-white/80 mt-4">
            4 günden uzun konaklamalara kadar esnek programlar • Hazır olduğunuzda başlayın
          </p>
        </div>
      </div>
    </section>
  );
}


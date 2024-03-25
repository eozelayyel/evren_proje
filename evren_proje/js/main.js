document.addEventListener("DOMContentLoaded", function () {
  const bmwButton = document.getElementById("bmw");
  const audiButton = document.getElementById("audi");
  const mercedesButton = document.getElementById("mercedes");
  const porscheButton = document.getElementById("porsche");

  bmwButton.addEventListener("click", function () {
    changeContent("bmw");
  });
  audiButton.addEventListener("click", function () {
    changeContent("audi");
  });
  mercedesButton.addEventListener("click", function () {
    changeContent("mercedes");
  });
  porscheButton.addEventListener("click", function () {
    changeContent("porsche");
  });

  function changeContent(type) {
    const classImage = document.querySelector("#classImage");
    const choosingText = document.getElementById("choosing");
    const whyText = document.getElementById("why");
    const whoText = document.getElementById("who");
    const personalityText = document.getElementById("personality");

    switch (type) {
      case "bmw":
        classImage.src = "images/BMW Logo.png";
        choosingText.innerHTML = "Neden BMW Tercih Etmelisin?";
        whyText.innerHTML = "BMW, mükemmeliyetin simgesidir. İleri teknolojisi, zarif tasarımı ve üstün performansıyla sizi ayrıcalıklı kılar. Güvenilirlik, konfor ve prestiji bir arada sunan BMW, sürüş deneyiminizi benzersiz kılar. Her detayı özenle düşünülmüş bu marka, sadece bir araç değil, yaşam tarzınızın bir parçası olacak. BMW, seçkinliğin ve kalitenin simgesidir. Size her zaman en iyisini sunar.";
        break;
      case "audi":
        classImage.src = "images/AUDI Logo.png";
        choosingText.innerHTML = "Neden AUDI Tercih Etmelisin?";
        whyText.innerHTML = "Audi, sadece bir otomobil değil, yaşam tarzınızın bir yansımasıdır. Prestij, kalite ve üstün performansın simgesi olan Audi, her detayı özenle tasarlanmış araçlarıyla sürüş deneyimini benzersiz kılar. Zarif ve etkileyici tasarımıyla dikkat çekerken, ileri teknolojisi ve dinamik sürüş özellikleriyle de performans tutkunlarını cezbetmektedir.";
        break;
      case "mercedes":
        classImage.src = "images/MERCEDES Logo.png";
        choosingText.innerHTML = "Neden MERCEDES Tercih Etmelisin?";
        whyText.innerHTML = "Mercedes, lüksün ve üstün kalitenin sembolüdür. Zarif tasarımı, ileri teknolojisi ve kusursuz sürüş deneyimiyle sizi ayrıcalıklı kılar. Prestij sahibi ve kalite arayışında olanlar için Mercedes, ilk tercihtir. Güvenilirlik, konfor ve estetiği bir arada sunan Mercedes, yaşam tarzınıza değer katar. Her detayı özenle düşünülmüş bu marka, sadece bir araç değil, bir yaşam tarzıdır.";
        break;
      case "porsche":
        classImage.src = "images/PORSCHE Logo.png";
        choosingText.innerHTML = "Neden PORSCHE Tercih Etmelisin?";
        whyText.innerHTML = "Porsche, tutku ve performansın simgesidir. Efsanevi tasarımı, üstün teknolojisi ve yüksek performansıyla sürüş deneyimini benzersiz kılar. Hız tutkunları ve lüks araç arayanlar için Porsche, ayrıcalıklı bir seçimdir. Estetik ve güç arasındaki mükemmel dengeyi sunan Porsche, sürücüye eşsiz bir bağ kurar. Her detayıyla mükemmel Porsche, sizi hayallerinize taşır.";
        break;
    }
  }

  const header = document.getElementById("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 870) {
      header.classList.add("navbar-scrolled");
    } else {
      header.classList.remove("navbar-scrolled");
    }
  });
} );

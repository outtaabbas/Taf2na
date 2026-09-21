const PLAN_DATA = {
  Home: {
    name: "Taf2na Home",
    price: 50,
    visits: 2,
    area: "لحد 150 م²"
  },

  Premium: {
    name: "Taf2na Premium",
    price: 120,
    visits: 4,
    area: "فوق 150 م²"
  }
};


// اختيار الخطة
function selectPlan(planName) {

  const plan = document.getElementById("plan");

  plan.value = planName;

  document
    .getElementById("subscribe")
    .scrollIntoView({ behavior: "smooth" });
}


// Form
document
  .getElementById("subscribeForm")
  .addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const area = document.getElementById("area").value.trim();
    const size = Number(document.getElementById("size").value);
    const planName = document.getElementById("plan").value;
    const issue = document.getElementById("issue").value.trim();

    if (!PLAN_DATA[planName]) {
      alert("اختار الخطة أولاً.");
      return;
    }

    const plan = PLAN_DATA[planName];

    // التأكد من مساحة البيت
    if (planName === "Home" && size > 150) {
      alert("خطة Home مخصصة للبيوت لحد 150 م². للبيوت الأكبر اختار Premium.");
      return;
    }

    if (planName === "Premium" && size <= 150) {
      alert("خطة Premium مخصصة للبيوت فوق 150 م².");
      return;
    }

    const request = {
      id: "REQ-" + Date.now(),

      customer: {
        name,
        phone,
        area,
        houseSize: size,
        issue
      },

      plan: {
        name: plan.name,
        price: plan.price,
        visitsIncluded: plan.visits
      },

      paymentStatus: "Pending",
      subscriptionStatus: "New Request",

      visitsUsed: 0,
      visitsRemaining: plan.visits,

      startDate: null,
      expiryDate: null,

      createdAt: new Date().toISOString()
    };


    // حفظ مؤقت على الجهاز
    const requests =
      JSON.parse(localStorage.getItem("taf2naRequests") || "[]");

    requests.push(request);

    localStorage.setItem(
      "taf2naRequests",
      JSON.stringify(requests)
    );


    // WhatsApp message
    const message = `
*Taf2na — New Subscription Request*

Name: ${name}
Phone: ${phone}
Area: ${area}
House Size: ${size} m²

Plan: ${plan.name}
Price: $${plan.price}
Visits: ${plan.visits}

Issue:
${issue || "N/A"}

Request ID:
${request.id}
`;

    const whatsapp =
      "https://wa.me/96176950998?text=" +
      encodeURIComponent(message);

    document.getElementById("successMessage").innerHTML =
      `تم إرسال طلبك بنجاح ✓<br>
       رقم الطلب: <b>${request.id}</b><br>
       رح نتابع معك لتأكيد الدفع.`;

    window.open(whatsapp, "_blank");

    this.reset();
  });


/* ================= CURRENT YEAR ================= */

document.getElementById("year").textContent =
  new Date().getFullYear();

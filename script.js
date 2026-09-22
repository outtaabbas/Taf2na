const PLAN_DATA = {
  Home: {
    name: "Taf2na Home",
    price: 50,
    visits: 2,
    maxSize: 150
  },

  Premium: {
    name: "Taf2na Premium",
    price: 120,
    visits: 4,
    minSize: 150
  }
};

function selectPlan(planName) {
  const planSelect = document.getElementById("plan");

  if (!planSelect) return;

  planSelect.value = planName;

  document.getElementById("subscribe")
    ?.scrollIntoView({
      behavior: "smooth"
    });
}


document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("subscribeForm");

  if (!form) {
    console.error("subscribeForm not found");
    return;
  }

  form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const area = document.getElementById("area").value.trim();
    const size = Number(document.getElementById("size").value);
    const planName = document.getElementById("plan").value;
    const issue = document.getElementById("issue").value.trim();

    const success = document.getElementById("successMessage");

    if (!name || !phone || !area || !size || !planName) {
      success.textContent = "رجاءً عبّي كل المعلومات المطلوبة.";
      success.style.color = "#ff7777";
      return;
    }

    const plan = PLAN_DATA[planName];

    if (!plan) {
      success.textContent = "الخطة غير صحيحة.";
      success.style.color = "#ff7777";
      return;
    }

    // التحقق من مساحة البيت
    if (planName === "Home" && size > 150) {
      success.textContent =
        "خطة Home للبيوت لحد 150 م². اختار Premium.";
      success.style.color = "#ff7777";
      return;
    }

    if (planName === "Premium" && size <= 150) {
      success.textContent =
        "خطة Premium للبيوت فوق 150 م².";
      success.style.color = "#ff7777";
      return;
    }


    const request = {
      id: "REQ-" + Date.now(),

      customer: {
        name: name,
        phone: phone,
        area: area,
        houseSize: size,
        issue: issue
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


    // حفظ الطلب
    try {

      const requests = JSON.parse(
        localStorage.getItem("taf2naRequests") || "[]"
      );

      requests.push(request);

      localStorage.setItem(
        "taf2naRequests",
        JSON.stringify(requests)
      );

    } catch (error) {

      console.error(error);

      success.textContent =
        "صار خطأ بحفظ الطلب. جرّب مرة ثانية.";

      success.style.color = "#ff7777";

      return;
    }


    // رسالة WhatsApp
    const message =
`Taf2na - New Subscription Request

Request ID: ${request.id}

Name: ${name}
Phone: ${phone}
Area: ${area}
House Size: ${size} m²

Plan: ${plan.name}
Price: $${plan.price}
Visits: ${plan.visits}

Issue:
${issue || "N/A"}

Payment:
Whish Money - 03 950 998`;


    const whatsappURL =
      "https://wa.me/96176950998?text=" +
      encodeURIComponent(message);


    success.innerHTML =
      `تم إرسال طلبك بنجاح ✓<br>
       رقم الطلب: <b>${request.id}</b><br>
       رح نتواصل معك لتأكيد الدفع.`;

    success.style.color = "#8df0a9";


    // افتح WhatsApp بعد نجاح حفظ الطلب
    setTimeout(() => {
      window.open(whatsappURL, "_blank");
    }, 300);


    form.reset();

  });

});
/* ================= CURRENT YEAR ================= */

document.getElementById("year").textContent =
  new Date().getFullYear();

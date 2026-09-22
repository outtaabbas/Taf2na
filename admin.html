<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Taf2na Admin</title>

  <link rel="stylesheet" href="taf2na.css">

  <style>

    body {
      background: #07111f;
    }

    .admin {
      padding: 50px 6%;
    }

    .admin-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 35px;
      gap: 20px;
      flex-wrap: wrap;
    }

    .admin-header h1 {
      font-size: 38px;
    }

    .admin-header p {
      color: #8d9bad;
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 15px;
      margin-bottom: 30px;
    }

    .stat {
      background: rgba(255,255,255,.045);
      border: 1px solid rgba(255,255,255,.09);
      border-radius: 18px;
      padding: 25px;
    }

    .stat span {
      color: #8d9bad;
      font-size: 13px;
    }

    .stat strong {
      display: block;
      font-size: 35px;
      color: #ffd43b;
    }

    .table-box {
      background: rgba(255,255,255,.035);
      border: 1px solid rgba(255,255,255,.09);
      border-radius: 20px;
      overflow-x: auto;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      min-width: 1100px;
    }

    th,
    td {
      padding: 17px;
      text-align: right;
      border-bottom: 1px solid rgba(255,255,255,.07);
    }

    th {
      color: #ffd43b;
      font-size: 13px;
    }

    td {
      color: #d6dce5;
      font-size: 13px;
    }

    .status {
      display: inline-block;
      padding: 4px 9px;
      border-radius: 30px;
      font-size: 11px;
      font-weight: 800;
    }

    .pending {
      background: rgba(255,212,59,.12);
      color: #ffd43b;
    }

    .active {
      background: rgba(77,220,120,.12);
      color: #67e08a;
    }

    .expired {
      background: rgba(255,80,80,.12);
      color: #ff7777;
    }

    .actions {
      display: flex;
      gap: 6px;
    }

    .action {
      border: 0;
      padding: 7px 10px;
      border-radius: 8px;
      cursor: pointer;
      font-family: inherit;
      font-size: 11px;
      font-weight: 700;
    }

    .confirm {
      background: #ffd43b;
      color: #111;
    }

    .visit {
      background: #18324d;
      color: white;
    }

    .whatsapp {
      background: #163b2c;
      color: #6ef29a;
    }

    .empty {
      padding: 50px;
      text-align: center;
      color: #8d9bad;
    }

    @media(max-width: 900px) {
      .stats {
        grid-template-columns: repeat(2, 1fr);
      }
    }

  </style>
</head>

<body>

<div class="admin">

  <div class="admin-header">

    <div>
      <div class="logo">
        Taf<span>2</span>na
      </div>

      <h1>Admin Dashboard</h1>

      <p>
        إدارة الاشتراكات والزيارات
      </p>
    </div>

    <a href="index.html" class="nav-btn">
      فتح الموقع
    </a>

  </div>


  <div class="stats">

    <div class="stat">
      <span>New Requests</span>
      <strong id="newRequests">0</strong>
    </div>

    <div class="stat">
      <span>Active Members</span>
      <strong id="activeMembers">0</strong>
    </div>

    <div class="stat">
      <span>Pending Payment</span>
      <strong id="pendingPayment">0</strong>
    </div>

    <div class="stat">
      <span>Visits Used</span>
      <strong id="visitsUsed">0</strong>
    </div>

  </div>


  <div class="table-box">

    <table>

      <thead>

        <tr>
          <th>Customer</th>
          <th>Phone</th>
          <th>Plan</th>
          <th>Price</th>
          <th>Visits</th>
          <th>Payment</th>
          <th>Status</th>
          <th>Expiry</th>
          <th>Actions</th>
        </tr>

      </thead>

      <tbody id="requestsTable"></tbody>

    </table>

  </div>

</div>


<script>

const STORAGE_KEY = "taf2naRequests";


function getRequests() {

  return JSON.parse(
    localStorage.getItem(STORAGE_KEY) || "[]"
  );

}


function saveRequests(requests) {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(requests)
  );

}


function formatDate(date) {

  if (!date) return "-";

  return new Date(date).toLocaleDateString(
    "en-GB"
  );

}


function updateDashboard() {

  const requests = getRequests();

  const active = requests.filter(
    r => r.subscriptionStatus === "Active"
  );

  const pending = requests.filter(
    r => r.paymentStatus === "Pending"
  );

  const newRequests = requests.filter(
    r => r.subscriptionStatus === "New Request"
  );

  const visitsUsed = requests.reduce(
    (total, r) => total + Number(r.visitsUsed || 0),
    0
  );


  document.getElementById("newRequests").textContent =
    newRequests.length;

  document.getElementById("activeMembers").textContent =
    active.length;

  document.getElementById("pendingPayment").textContent =
    pending.length;

  document.getElementById("visitsUsed").textContent =
    visitsUsed;


  const table =
    document.getElementById("requestsTable");

  table.innerHTML = "";


  if (!requests.length) {

    table.innerHTML = `
      <tr>
        <td colspan="9">
          <div class="empty">
            ما في طلبات بعد.
          </div>
        </td>
      </tr>
    `;

    return;
  }


  requests
    .slice()
    .reverse()
    .forEach(request => {

      const tr = document.createElement("tr");

      const paymentClass =
        request.paymentStatus === "Confirmed"
          ? "active"
          : "pending";

      const statusClass =
        request.subscriptionStatus === "Active"
          ? "active"
          : request.subscriptionStatus === "Expired"
          ? "expired"
          : "pending";


      tr.innerHTML = `

        <td>
          <strong>${request.customer.name}</strong><br>
          <small>${request.customer.area}</small>
        </td>

        <td>${request.customer.phone}</td>

        <td>${request.plan.name}</td>

        <td>$${request.plan.price}</td>

        <td>
          ${request.visitsUsed}
          /
          ${request.plan.visitsIncluded}
          <br>
          <small>
            Remaining:
            ${request.visitsRemaining}
          </small>
        </td>

        <td>
          <span class="status ${paymentClass}">
            ${request.paymentStatus}
          </span>
        </td>

        <td>
          <span class="status ${statusClass}">
            ${request.subscriptionStatus}
          </span>
        </td>

        <td>
          ${formatDate(request.expiryDate)}
        </td>

        <td>

          <div class="actions">

            ${
              request.paymentStatus !== "Confirmed"
              ? `
                <button
                  class="action confirm"
                  onclick="confirmPayment('${request.id}')">
                  Confirm Payment
                </button>
              `
              : ""
            }

            ${
              request.subscriptionStatus === "Active"
              ? `
                <button
                  class="action visit"
                  onclick="useVisit('${request.id}')">
                  Use Visit
                </button>
              `
              : ""
            }

            <button
              class="action whatsapp"
              onclick="openWhatsApp('${request.customer.phone}')">
              WhatsApp
            </button>

          </div>

        </td>
      `;

      table.appendChild(tr);

    });

}


function confirmPayment(id) {

  const requests = getRequests();

  const request = requests.find(
    r => r.id === id
  );

  if (!request) return;


  const now = new Date();

  const expiry = new Date(now);

  expiry.setMonth(
    expiry.getMonth() + 1
  );


  request.paymentStatus = "Confirmed";

  request.subscriptionStatus = "Active";

  request.startDate = now.toISOString();

  request.expiryDate = expiry.toISOString();

  request.visitsUsed = 0;

  request.visitsRemaining =
    request.plan.visitsIncluded;


  saveRequests(requests);

  updateDashboard();

}


function useVisit(id) {

  const requests = getRequests();

  const request = requests.find(
    r => r.id === id
  );

  if (!request) return;


  if (request.visitsRemaining <= 0) {

    alert(
      "ما عاد في visits متبقية بهالاشتراك."
    );

    return;
  }


  const confirmed =
    confirm(
      "تأكيد استخدام زيارة واحدة؟"
    );

  if (!confirmed) return;


  request.visitsUsed += 1;

  request.visitsRemaining -= 1;


  saveRequests(requests);

  updateDashboard();

}


function openWhatsApp(phone) {

  let number = phone
    .replace(/\D/g, "");

  if (number.startsWith("0")) {
    number = "961" + number.substring(1);
  }

  window.open(
    "https://wa.me/" + number,
    "_blank"
  );

}


updateDashboard();

</script>

</body>
</html>

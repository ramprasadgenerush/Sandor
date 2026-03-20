import { NextResponse } from "next/server";
import { SendMailClient } from "zeptomail";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, product, organisation, source } = body;

    // Validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const token = process.env.NEXT_PUBLIC_ZEPTO_TOKEN!;

    const client = new SendMailClient({
      url: "api.zeptomail.com/",
      token: `Zoho-enczapikey ${token}`,
    });

    await client.sendMail({
      from: {
        address: "noreply@sandor.co.in",
        name: "Sandor Website",
      },
      to: [
        {
          email_address: {
            address: "info@sandor.co.in",
            name: "Sandor Contact",
          },
        },
      ],
      subject: `New Call Back Request from ${name}`,
      htmlbody: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sandor.co.in</title>
</head>

<body style="background-color:#e6e6e6;font-family:Arial,Helvetica,sans-serif;margin:0;padding:0;">
  <div style="background-color:#e6e6e6;padding:40px 0;">
    <div style="width:580px;background-color:#fff;margin:10px auto;font-size:13px">

      <!-- Header -->
      <div style="text-align:center;padding:18px 0;border-bottom:5px solid #002fb1">
        <img src="https://sandor.co.in/assets/img/logo/logo-1.png" style="height:40px" alt="Sandor logo">
      </div>

      <!-- Content -->
      <div style="padding:30px;color:#000">

        <!-- Greeting -->
        <div style="margin-bottom:10px;font-weight:600;font-size:16px;">
          Hello ${name || "User"},
        </div>

        <!-- Message -->
        <div style="font-size:13px;line-height:22px;">
          <p style="margin:5px 0;">Thank you for requesting a call back!</p>

          <p style="margin:10px 0;">
            We have received your request successfully. Our team will review your details
            and get in touch with you shortly.
          </p>

          <p style="margin:10px 0;">
            Meanwhile, you can explore our website:
            <a href="https://sandor.co.in" target="_blank" style="color:#002fb1;font-weight:600;">
              sandor.co.in
            </a>
          </p>

          <p>We look forward to assisting you.</p>
        </div>

        <!-- Section Title -->
        <div style="color:#002fb1;font-weight:700;font-size:18px;margin-top:25px;">
          Request Details:
        </div>

        <!-- Table -->
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:15px;line-height:28px;font-size:13px;">
          <tbody>
            <tr>
              <td width="35%"><b>Full Name</b></td>
              <td width="5%">:</td>
              <td width="60%">${name || "N/A"}</td>
            </tr>
            <tr>
              <td><b>Email Address</b></td>
              <td>:</td>
              <td>${email || "N/A"}</td>
            </tr>
            <tr>
              <td><b>Phone Number</b></td>
              <td>:</td>
              <td>${phone || "N/A"}</td>
            </tr>
            <tr>
              <td><b>Product</b></td>
              <td>:</td>
              <td>${product || "N/A"}</td>
            </tr>
            <tr>
              <td><b>Organisation</b></td>
              <td>:</td>
              <td>${organisation || "N/A"}</td>
            </tr>
            <tr>
              <td><b>Source</b></td>
              <td>:</td>
              <td>${source || "N/A"}</td>
            </tr>
          </tbody>
        </table>

        <!-- Footer Message -->
        <div style="margin-top:25px;font-size:14px;line-height:22px;">
          <span>Warm regards,</span><br>
          <b>Sandor Team</b><br>
          <a href="https://sandor.co.in" target="_blank" style="color:#002fb1;font-weight:600;">
            www.sandor.co.in
          </a>
        </div>
      </div>

      <!-- Bottom Footer -->
      <div style="background-color:#222;color:#fff;text-align:center;padding:15px;font-size:12px;">
        © ${new Date().getFullYear()} Sandor.co.in All Rights Reserved
      </div>

    </div>
  </div>
</body>
</html>
`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("ZeptoMail Error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}

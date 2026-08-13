import { Resend } from "resend";
import { NextResponse } from "next/server";
import { supabase } from "../../../lip/supabase";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      fullName,
      company,
      email,
      phone,
      country,
      address,
      cart,
      total,
    } = data;

    // Validate required data
    if (!fullName || !email || !cart) {
      return NextResponse.json(
        {
          error: "Missing required quote information",
        },
        { status: 400 }
      );
    }

    // Save quote request to Supabase
    const { data: savedQuote, error: supabaseError } = await supabase
      .from("quote_requests")
      .insert({
        full_name: fullName,
        company: company || null,
        email,
        phone: phone || null,
        country: country || null,
        address: address || null,
        cart,
        total: Number(total) || 0,
      })
      .select()
      .single();

    if (supabaseError) {
      console.error("Supabase error:", supabaseError);

      return NextResponse.json(
        {
          error: "Failed to save quote request",
          details: supabaseError.message,
        },
        { status: 500 }
      );
    }

    // Create product rows for email
    const productRows = cart
      .map(
        (item: any) => `
          <tr>
            <td style="padding:12px;border-bottom:1px solid #eee;">
              ${item.name}
            </td>

            <td style="padding:12px;border-bottom:1px solid #eee;text-align:center;">
              ${item.quantity}
            </td>

            <td style="padding:12px;border-bottom:1px solid #eee;text-align:right;">
              ${item.price}
            </td>
          </tr>
        `
      )
      .join("");

    // Get Resend API key at runtime
    const resendApiKey = process.env["RESEND_API_KEY"];

    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not configured");

      return NextResponse.json(
        {
          error: "Email service is not configured",
        },
        { status: 500 }
      );
    }

    // Create Resend client at runtime
    const resend = new Resend(resendApiKey);

    // Send email through Resend
    const { data: emailData, error: emailError } =
      await resend.emails.send({
        from: "Genius Medical <quotes@genius.com.sa>",
        to: "hani.nahwi@gmail.com",
        subject: "New Quote Request - Genius Medical",

        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8" />
              <title>New Quote Request</title>
            </head>

            <body
              style="
                margin:0;
                padding:0;
                background:#f4f4f5;
                font-family:Arial,Helvetica,sans-serif;
              "
            >
              <div
                style="
                  max-width:700px;
                  margin:30px auto;
                  background:#ffffff;
                  border-radius:8px;
                  overflow:hidden;
                "
              >

                <!-- Header -->
                <div
                  style="
                    background:#6d28d9;
                    padding:28px;
                    text-align:center;
                    color:#ffffff;
                  "
                >
                  <h1 style="margin:0;font-size:28px;">
                    Genius Medical
                  </h1>

                  <p style="margin:12px 0 0;font-size:16px;">
                    New Quote Request
                  </p>
                </div>

                <!-- Customer Information -->
                <div style="padding:30px;">

                  <h2
                    style="
                      color:#6d28d9;
                      font-size:20px;
                      margin-top:0;
                    "
                  >
                    Customer Information
                  </h2>

                  <table
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    style="border-collapse:collapse;"
                  >
                    <tr>
                      <td style="padding:8px 0;font-weight:bold;">
                        Name
                      </td>
                      <td style="padding:8px 0;">
                        ${fullName}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:8px 0;font-weight:bold;">
                        Company
                      </td>
                      <td style="padding:8px 0;">
                        ${company || "-"}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:8px 0;font-weight:bold;">
                        Email
                      </td>
                      <td style="padding:8px 0;">
                        <a href="mailto:${email}">
                          ${email}
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:8px 0;font-weight:bold;">
                        Phone
                      </td>
                      <td style="padding:8px 0;">
                        ${phone || "-"}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:8px 0;font-weight:bold;">
                        Country
                      </td>
                      <td style="padding:8px 0;">
                        ${country || "-"}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:8px 0;font-weight:bold;">
                        Address
                      </td>
                      <td style="padding:8px 0;">
                        ${address || "-"}
                      </td>
                    </tr>
                  </table>

                  <hr
                    style="
                      border:none;
                      border-top:1px solid #ddd;
                      margin:30px 0;
                    "
                  />

                  <!-- Products -->
                  <h2
                    style="
                      color:#6d28d9;
                      font-size:20px;
                    "
                  >
                    Requested Products
                  </h2>

                  <table
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                      border-collapse:collapse;
                      margin-top:15px;
                    "
                  >
                    <thead>
                      <tr style="background:#f3f3f3;">
                        <th
                          style="
                            padding:12px;
                            text-align:left;
                          "
                        >
                          Product
                        </th>

                        <th
                          style="
                            padding:12px;
                            text-align:center;
                          "
                        >
                          Qty
                        </th>

                        <th
                          style="
                            padding:12px;
                            text-align:right;
                          "
                        >
                          Price
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      ${productRows}
                    </tbody>
                  </table>

                  <!-- Total -->
                  <div
                    style="
                      margin-top:25px;
                      padding:20px;
                      background:#f5f0ff;
                      border-left:4px solid #6d28d9;
                    "
                  >
                    <h2
                      style="
                        margin:0;
                        color:#6d28d9;
                      "
                    >
                      Total: $${total}
                    </h2>
                  </div>

                  <hr
                    style="
                      border:none;
                      border-top:1px solid #ddd;
                      margin:30px 0;
                    "
                  />

                  <p
                    style="
                      text-align:center;
                      color:#777;
                      font-size:13px;
                    "
                  >
                    This quote request was submitted from the
                    Genius Medical website.
                  </p>

                </div>
              </div>
            </body>
          </html>
        `,
      });

    if (emailError) {
      console.error("Resend error:", emailError);

      return NextResponse.json(
        {
          error: "Quote was saved, but email failed",
          details: emailError.message,
          quoteId: savedQuote?.id,
        },
        { status: 500 }
      );
    }

    // Everything succeeded
    return NextResponse.json({
      success: true,
      message: "Quote request saved and email sent successfully",
      quote: savedQuote,
      email: emailData,
    });
  } catch (error) {
    console.error("Unexpected error:", error);

    return NextResponse.json(
      {
        error: "Failed to process quote request",
      },
      { status: 500 }
    );
  }
}

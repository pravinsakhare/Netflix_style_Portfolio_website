export async function onRequestPost(context) {
  try {
    const req = context.request;
    const body = await req.json();

    const name = (body.name || '').trim();
    const email = (body.email || '').trim();
    const message = (body.message || '').trim();
    const website = (body.website || '').trim(); // honeypot

    if (website) {
      return new Response(JSON.stringify({ message: 'Ignored' }), { status: 200 });
    }

    if (!name) return new Response(JSON.stringify({ message: 'Name is required' }), { status: 400 });
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) return new Response(JSON.stringify({ message: 'Valid email is required' }), { status: 400 });
    if (!message) return new Response(JSON.stringify({ message: 'Message is required' }), { status: 400 });
    if (message.length > 2000) return new Response(JSON.stringify({ message: 'Message too long' }), { status: 400 });

    const apiKey = context.env.RESEND_API_KEY;
    const toEmail = context.env.CONTACT_TO_EMAIL;

    if (!apiKey || !toEmail) {
      console.error('Missing RESEND_API_KEY or CONTACT_TO_EMAIL');
      return new Response(JSON.stringify({ message: 'Server not configured' }), { status: 500 });
    }

    const payload = {
      from: 'Portfolio <onboarding@resend.dev>',
      to: toEmail,
      subject: `Portfolio contact from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br/>')}</p>`,
      reply_to: email,
    };

    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    if (!resp.ok) {
      console.error('Resend API error', await resp.text());
      return new Response(JSON.stringify({ message: 'Failed to send message' }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: 'Message sent' }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: 'Failed to send message' }), { status: 500 });
  }
}

const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  if (!body.firstName || !body.lastName || !body.email || !body.attendance) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'A required fields data is not found' });
  }

  const message = `
    From: ${body.firstName} ${body.lastName}\r\n
    Email: ${body.email}\r\n
    Attendance: ${body.attendance}\r\n
    ${body.attendance === 'Accept with pleasure' ? `Number of Guests: ${body.guests}\r\n` : ''}
    ${body.firstNamePlusOne && body.lastNamePlusOne && `Plus One's Name: ${body.firstNamePlusOne} ${body.lastNamePlusOne}\r\n`}
    ${body.attendance === 'Accept with pleasure' ? `Requested Song: ${body.song ? body.song : 'None'}` : ''}
  `;

  const data = {
    to: 'shannonandanthony@outlook.com',
    from: 'shannonandanthony@outlook.com',
    subject: `Wedding RSVP from ${body.firstName} ${body.lastName}`,
    text: message,
    html: message.replace(/\r\n/g, '<br />'),
  };

  await mail.send(data);

  res.status(200).json({ status: 'OK' });

};
import MailTemplate from '@/app/components/MailTemplate'
import { Resend } from 'resend'

export async function POST(request: Request) {
  const resend = new Resend('re_69pgH3je_Fuj12U1Xe62vJDMty34wjVCx')

  try {
    // Get the form data from request
    const formData = await request.formData()
    const file = formData.get('file') as File | null
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      interest: formData.get('interest') as string,
      message: formData.get('message') as string
    }

    // Base email configuration
    const emailConfig = {
      from: 'liber@devdilan.online',
      to: 'rh@liberindustrial.com.br',
      subject: 'Novo curriculo cadastrado',
      react: MailTemplate({ ...data }),
      attachments: [] as { filename: string; content: string }[]
    }

    // Add attachment if file exists
    if (file) {
      const fileBuffer = await file.arrayBuffer()
      const fileBase64 = Buffer.from(fileBuffer).toString('base64')
      emailConfig.attachments.push({
        filename: file.name,
        content: fileBase64
      })
    }

    await resend.emails.send(emailConfig)

    return Response.json({ message: 'Email sent successfully' })
  } catch (error: any) {
    return Response.json(
      {
        message: 'Failed to send email',
        error: error.message
      },
      { status: 500 }
    )
  }
}

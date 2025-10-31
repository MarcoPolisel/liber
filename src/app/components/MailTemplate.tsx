interface EmailTemplateProps {
  name: string
  email: string
  phone: string
  interest: string
  message: string
}

const MailTemplate = ({
  email,
  interest,
  message,
  name,
  phone
}: EmailTemplateProps) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h1 style={{ color: '#333' }}>Nova candidatura de {name}!</h1>
      <p>
        <strong>Nome:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Telefone:</strong> {phone}
      </p>
      <p>
        <strong>Área de Interesse:</strong> {interest}
      </p>
      <p>
        <strong>Mensagem:</strong>
      </p>
      <p
        style={{
          whiteSpace: 'pre-wrap',
          backgroundColor: '#f9f9f9',
          padding: '10px',
          borderRadius: '5px'
        }}
      >
        {message}
      </p>
    </div>
  )
}

export default MailTemplate

import Image from 'next/image'

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/5511916011694"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 bg-transparent  p-4 rounded-full "
    >
      <Image
        src="/zap zap.svg"
        alt=""
        width={48}
        height={48}
        className="shadow-md"
      />
    </a>
  )
}

export default WhatsAppButton

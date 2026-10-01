import { useRef, useState } from "react"

const OtpDesign = () => {
    const [otpFields, setOtpFields] = useState<string[]>(Array(6).fill(''))
    const refs = useRef<(HTMLInputElement | null)[]>([])

    const handleDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace') {
            setOtpFields(prev => {
                const updated = [...prev]
                updated[index] = ''
                return updated
            })
            if (index > 0) refs.current[index - 1]?.focus()
        } else if (/^\d$/.test(e.key)) {
            setOtpFields(prev => {
                const updated = [...prev]
                updated[index] = e.key
                return updated
            })
            if (index < otpFields.length - 1) refs.current[index + 1]?.focus()
        }
    }

    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            {otpFields.map((field, index) => (
                <input
                    key={index}
                    ref={el => refs.current[index] = el}
                    maxLength={1}
                    value={field}
                    style={{ width: '24px' }}
                    onChange={() => {}}
                    onKeyDown={(e) => handleDown(e, index)}
                />
            ))}
        </div>
    )
}

export default OtpDesign

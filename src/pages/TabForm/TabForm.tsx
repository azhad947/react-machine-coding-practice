import { useState } from 'react'
import Form from '../../components/Form'
import './TabForm.css'

const TABS = ["Profile", "Interest", "Setting"]

type FormState = {
    name: string
    email: string
    number: string
    techStack: string
    gender: string
}

const TabForm = () => {
    const [activeTab, setActiveTab] = useState("Profile")
    const [formData, setFormData] = useState<FormState>({
        name: '',
        email: '',
        number: '',
        techStack: '',
        gender: ''
    })

    const handleChange = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [field]: e.target.value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <div>
            <div className="tab-form-tabs">
                {TABS.map((tab) => (
                    <button key={tab} className={activeTab === tab ? 'active' : ''} onClick={() => setActiveTab(tab)}>
                        {tab}
                    </button>
                ))}
            </div>
            <Form type={activeTab} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
    )
}

export default TabForm



type FormState = {
    name: string
    email: string
    number: string
    techStack: string
    gender: string
}

type FormProps = {
    type: string
    formData: FormState
    handleChange: (field: keyof FormState) => (e) => void
    handleSubmit: (e) => void
}

const Form = ({ type, formData, handleChange, handleSubmit }: FormProps) => {
    return (
        <form className="tab-form-fields" onSubmit={handleSubmit}>
            {type === 'Profile' && <>
                <input type="text" placeholder="Name" value={formData.name} onChange={handleChange('name')} />
                <input type="email" placeholder="Email" value={formData.email} onChange={handleChange('email')} />
                <input type="number" placeholder="Number" value={formData.number} onChange={handleChange('number')} />
            </>}
            {type === 'Interest' && <>
                <input type="text" placeholder="Tech Stack" value={formData.techStack} onChange={handleChange('techStack')} />
            </>}
            {type === 'Setting' && <>
                <input type="text" placeholder="Gender" value={formData.gender} onChange={handleChange('gender')} />
            </>}
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form

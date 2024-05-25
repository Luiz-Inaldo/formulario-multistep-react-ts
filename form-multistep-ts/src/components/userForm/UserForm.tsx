type UserProps = {
    data: {
        name: string,
        email: string
    }
    updateFieldHandler: (key:string, value:string) => void;
}

export const UserForm = ({ data, updateFieldHandler }: UserProps) => {
    return (
        <>
            <div className="form-control">
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" id='name'
                    value={data.name}
                    placeholder="Digie o seu nome"
                    required
                    onChange={e => updateFieldHandler('name', e.target.value)} />
            </div>
            <div className="form-control">
                <label htmlFor="Email">E-mail:</label>
                <input type="email" name="email" id='email'
                    value={data.email}
                    placeholder="Digie o seu e-mail"
                    required
                    onChange={e => updateFieldHandler('email', e.target.value)} />
            </div>
        </>
    )
}

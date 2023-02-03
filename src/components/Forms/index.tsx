import { useForm } from '../../hooks/useForm/index'

export const Forms = () => {
  const { formState, email, password, handleFormDataChange } = useForm({
    email: 'test@test.com',
    password: '123456',
  })

  return (
    <>
      <h3 className="is-size-4 has-text-weight-semibold mb-2 has-text-centered">
        Register Form
      </h3>
      <form>
        {/* Email */}
        <div className="field">
          <label htmlFor="email" className="label">
            Email:
          </label>
          <div className="control has-icons-left has-icons-right">
            <input
              type="email"
              className="input"
              placeholder="Email input"
              id="email"
              value={email}
              onChange={({ target: { value } }) =>
                handleFormDataChange(value, 'email')
              }
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
          </div>
        </div>
        {/* Password */}
        <div className="field">
          <label htmlFor="password" className="label">
            Password:
          </label>
          <div className="control has-icons-left has-icons-right">
            <input
              type="text"
              className="input"
              placeholder="Password input"
              id="password"
              value={password}
              onChange={({ target: { value } }) =>
                handleFormDataChange(value, 'password')
              }
            />
            <span className="icon is-small is-left">
              <i className="fas fa-key"></i>
            </span>
          </div>
        </div>
      </form>

      <code>
        <pre>{JSON.stringify(formState, null, 2)}</pre>
      </code>
    </>
  )
}

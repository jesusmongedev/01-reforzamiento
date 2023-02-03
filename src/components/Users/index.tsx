import { User } from '../../interfaces/Users/index.interface'
import { useUsers } from '../../hooks/useCounter/useUsers'

export const Users = () => {
  const { handleTablePage, page, users } = useUsers()

  const renderUserDetails = ({
    id,
    first_name,
    last_name,
    avatar,
    email,
  }: User) => (
    <tr key={id.toString()} className={`${id % 2 === 0 ? 'is-selected' : ''}`}>
      <td>
        <figure className="image is-48x48">
          <img src={avatar} alt={first_name} className="is-rounded" />
        </figure>
      </td>
      <td>
        {first_name} {last_name}
      </td>
      <td>{email}</td>
    </tr>
  )

  return (
    <>
      <h3 className="is-size-5 has-text-weight-semibold mb-2">Usuarios:</h3>

      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        {/* <tbody>{users.map((user) => renderUserDetails(user))}</tbody> */}
        {/* This is the same as */}
        <tbody>{users.map(renderUserDetails)}</tbody>
      </table>
      <button
        disabled={page !== 2}
        className="button is-info mr-3"
        onClick={() => handleTablePage(-1)}
      >
        Previous
      </button>
      <button
        disabled={page !== 1}
        className="button is-primary "
        onClick={() => handleTablePage(1)}
      >
        Next
      </button>
    </>
  )
}

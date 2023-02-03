import { useEffect, useState } from 'react'
import { getUsers } from '../../../api/getUsers'
import { ReqResList, User } from '../../../interfaces/Users/index.interface'

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchUsers()
  }, [page])

  const fetchUsers = async () => {
    const {
      data: { data: users },
    } = await getUsers.get<ReqResList>('/users', {
      params: { page },
    })
    setUsers(users)
  }

  const handleTablePage = (value: number) => setPage(page + value)

  return {
    users,
    page,
    handleTablePage,
  }
}

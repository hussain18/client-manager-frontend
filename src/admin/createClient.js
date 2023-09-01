import Dashboard from './dashboard/dashboard'

const CreateClientView = () => {
  return <div>Create Clients Page</div>
}

export const CreateClientPage = () => {
  return (
    <Dashboard
      DisplayElement={CreateClientView}
      tabSelected={{ dashboard: false, addClient: true }}
    />
  )
}

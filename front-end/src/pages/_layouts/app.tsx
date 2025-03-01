import { Outlet } from 'react-router'

export function AppLayout() {
  return (
    <>
      <title>dashboard | pizza.shop</title>
      <div>
        <h1>Cabeçalho</h1>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  )
}

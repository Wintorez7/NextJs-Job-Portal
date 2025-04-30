
import { currentUser } from '@clerk/nextjs/server'
import Header from "../Header";


async function CommonLayout({ children }) {

  const user = await currentUser()

  return (
    <div className="mx-auto max-w-7xl p-6 lg:px-8">
      {/* Header Component */}
       <Header user={JSON.parse(JSON.stringify(user))}/> 
       

      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
}

export default CommonLayout;



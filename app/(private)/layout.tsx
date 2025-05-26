
const  Layout = async({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {

     
    return ( 
        <div>
             {children}
        </div>
     );
}
 
export default Layout;
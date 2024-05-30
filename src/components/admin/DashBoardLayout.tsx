import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Footer, Header,Content } from "antd/es/layout/layout";
import { ReactNode } from "react";

interface dashboardLayoutProps{
    children: ReactNode
}
const DashBoardLayout:React.FC<dashboardLayoutProps> = ({children})=>{
  return(
    <>
    <Layout>
      <Header>header</Header>
      <Layout>
        <Sider>left sidebar</Sider>
        <Content>{children}</Content>
        <Sider>right sidebar</Sider>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
    </>
    ); 
} 
 export default DashBoardLayout
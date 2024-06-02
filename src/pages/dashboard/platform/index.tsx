import { Image, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState,AppDispatch } from  '@/libs/redux/store'
import { useEffect } from "react";
import { fetchPlatform } from "@/libs/redux/slices/platformSlice";
import format from "@/hooks/dayjsformatter";
import { useRouter } from "next/router";
import DashBoardLayout from "@/components/admin/DashBoardLayout";
import { GetStaticPropsContext } from "next";
const Page = ()=>{
    const dispatch = useDispatch();
    const router =  useRouter();
    const {platforms, isPending, isError, isSuccess} = useSelector((state:RootState)=>state.platformSlice)
    useEffect(()=>{
        dispatch(fetchPlatform());
    }, [dispatch])
      
      const columns = [
        {
          title: 'No.',
          dataIndex: 'key',
          key: 'key',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Icon',
          dataIndex: 'icon',
          key: 'icon',
          render:(text:string)=>{
            return (
              <>
              <Image  src={text}  width={25} alt=""/>
              </>
            )
          }
        },
        {
          title: 'Created At',
          dataIndex: 'createdAt',
          key: 'createdAt',
          render:(text:string)=>(<>
          {format(text, router.locale||"en")}
          </>)
        }
      ];
  return(
    <>
    <DashBoardLayout>
    <Table dataSource={platforms} columns={columns} loading={isPending}/>
    </DashBoardLayout>
    </>
    ); 
} 
 export default Page

 export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../../messages/${locale}.json`)).default,
    },
  };
}

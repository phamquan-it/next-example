import { Inter } from "next/font/google";
import { GetStaticPropsContext } from "next";
import PageLayout from "@/components/PageLayout";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/libs/redux/store";
import { increment, decrement, incrementByAmount } from '../libs/redux/slices/someSlice';
import { Button, Menu } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import LocaleSwitcher from "@/components/general/LocaleSwitcher";
import PlatformSelect from "@/components/general/PlatformSelect";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const t = useTranslations('Index');
  const d = useTranslations('PageLayout')
  const  value = useSelector((state:RootState)=> state.someSlice.value)
  const dispatch = useDispatch<AppDispatch>();
  const items = [
    { label: '菜单项一', key: 'item-1' }, // 菜单项务必填写 key
    { label: '菜单项二', key: 'item-2' },
    {
      label: '子菜单',
      key: 'submenu',
      children: [{ label: '子菜单项', key: 'submenu-item-1' }],
    },
  ];
  return (
    <main
      className={`${inter.className}`}
    >
       <PageLayout title={t('title')}>
      <p>{t('description')}</p>
      <div>
      <Button type="primary">Button</Button>
      <h1>Value: {value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
    <p>{d('pageTitle')}</p>
    </PageLayout>
    <ToastContainer/>
    <Menu items={items} />
    <Button type="primary" onClick={()=>{
      toast.success("successfully");
    }}>Success</Button>
    
    <Button type="default" onClick={()=>{
      router.push("/login")
    }}>Login</Button>
    </main>
  );
}
export async function getStaticProps({locale}: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}
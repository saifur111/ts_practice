import Image from 'next/image'
import styles from './page.module.css'
import { Button, ConfigProvider } from 'antd';
import theme from '@/theme/themeConfig';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <ConfigProvider theme={theme}>
      <div className="App">
        <Navbar/>
      </div>
    </ConfigProvider>
  )
}

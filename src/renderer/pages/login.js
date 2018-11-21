import styles from './login.css';
import {Button} from 'antd'
import Link from 'umi/link';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page login</h1>
      <Button>登录</Button>
      <Link to="/">首页</Link>
    </div>
  );
}

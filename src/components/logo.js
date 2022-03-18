/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import LogoSvg from 'components/icons/logo';
import logoPng from '../assets/images/tocando-logo.png'

export default function Logo({ isSticky, footer, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      <Image src={logoPng} height={75} width={75} />
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    svg: {
      height: 'auto',
      width: [128, null, '100%'],
    },
  },
};

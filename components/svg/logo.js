import { createIcon, defaultProps, Icon } from '@chakra-ui/react';
import { useColorModeSwitcher } from '../../utils/hooks/useColorModeSwitcher';

const LogoBase = createIcon({
  defaultProps,
  displayName: 'LogoBase',
  viewBox: '0 0 144 191',
  path: (
    <path d="M 0 0 C 0 82 0 164 78 168 C 162 165 189 99 168 0 C 153 -18 135 -15 120 0 C 132 42 144 105 90 123 C 42 117 36 60 45 0 C 30 -12 12 -12 0 0" />
  )
});

export const Logo = ({ boxSize = '3rem', ...props }) => {
  const { colorLight, colorDark } = useColorModeSwitcher();
  return (
    <Icon
      {...props}
      strokeWidth="2px"
      stroke="currentcolor"
      boxSize={boxSize}
      as={LogoBase}
    />
  );
};

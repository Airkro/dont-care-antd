import { ConfigProvider, theme } from 'antd';
import { useDarkMode } from 'use-dark-mode-ts';
import type { ReactNode } from 'react';

interface ThemeWrapperProps {
  children: ReactNode;
}

export function ThemeWrapper({ children }: ThemeWrapperProps) {
  const isDarkMode = useDarkMode();

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
}

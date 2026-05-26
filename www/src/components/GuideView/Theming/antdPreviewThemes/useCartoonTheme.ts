import { useMemo } from 'react';
import { theme } from 'antd';
import type { ConfigProviderProps } from 'antd';
import { createStyles } from 'antd-style';

/**
 * Adapted from Ant Design website ThemePreview source:
 * https://github.com/ant-design/ant-design/blob/398420c1599c431e02e639f557c6c59ef1fa2d1b/.dumi/pages/index/components/ThemePreview/previewThemes/cartoonTheme.ts
 *
 * Original code is licensed under MIT by the Ant Design authors.
 */
const useStyles = createStyles(({ css, cssVar }) => {
  const sharedBorder = {
    border: `${cssVar.lineWidth} ${cssVar.lineType} ${cssVar.colorBorder}`,
  };

  return {
    sharedBorder,
    progressTrack: css({
      ...sharedBorder,
      marginInlineStart: `calc(-1 * ${cssVar.lineWidth})`,
      marginBlockStart: `calc(-1 * ${cssVar.lineWidth})`,
    }),
  };
});

export function useCartoonTheme(): ConfigProviderProps {
  const { styles } = useStyles();

  return useMemo(
    () => ({
      theme: {
        algorithm: theme.defaultAlgorithm,
        token: {
          colorText: '#51463B',
          colorPrimary: '#225555',
          colorError: '#DA8787',
          colorInfo: '#9CD3D3',
          colorInfoBorder: '#225555',
          colorBorder: '#225555',
          colorBorderSecondary: '#225555',
          lineWidth: 2,
          lineWidthBold: 2,
          borderRadius: 18,
          borderRadiusLG: 18,
          borderRadiusSM: 18,
          controlHeightSM: 28,
          controlHeight: 36,
          colorBgBase: '#FAFAEE',
        },
        components: {
          Button: {
            primaryShadow: 'none',
            dangerShadow: 'none',
            defaultShadow: 'none',
          },
          Modal: {
            boxShadow: 'none',
          },
          Card: {
            colorBgContainer: '#BBAA99',
          },
          Tooltip: {
            borderRadius: 6,
            colorBorder: '#225555',
            algorithm: true,
          },
          Select: {
            optionSelectedBg: '#CBC4AF',
          },
        },
      },
      modal: {
        classNames: {
          container: styles.sharedBorder,
        },
      },
      colorPicker: {
        arrow: false,
      },
      popover: {
        classNames: {
          container: styles.sharedBorder,
        },
      },
      progress: {
        classNames: {
          rail: styles.sharedBorder,
          track: styles.progressTrack,
        },
        styles: {
          rail: {
            height: 16,
          },
          track: {
            height: 16,
          },
        },
      },
    }),
    [styles.progressTrack, styles.sharedBorder],
  );
}

import { CSSProperties, useMemo, useState } from 'react';
import {
  Button,
  Card,
  ConfigProvider,
  Progress,
  Segmented,
  Space,
  Switch,
  Tag,
  Typography,
  theme as antTheme,
  type ConfigProviderProps,
  type ThemeConfig,
} from 'antd';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  RechartsThemeProvider,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  rechartsFromAntd,
} from 'recharts';
import { useBootstrapTheme } from './antdPreviewThemes/useBootstrapTheme.ts';
import { useCartoonTheme } from './antdPreviewThemes/useCartoonTheme.ts';
import { useGeekTheme } from './antdPreviewThemes/useGeekTheme.ts';
import { useGlassTheme } from './antdPreviewThemes/useGlassTheme.ts';
import { useIllustrationTheme } from './antdPreviewThemes/useIllustrationTheme.ts';
import { useMuiTheme } from './antdPreviewThemes/useMuiTheme.ts';
import { useShadcnTheme } from './antdPreviewThemes/useShadcnTheme.ts';

const chartData = [
  { quarter: 'Q1', revenue: 42, cost: 24, forecast: 39 },
  { quarter: 'Q2', revenue: 48, cost: 28, forecast: 44 },
  { quarter: 'Q3', revenue: 53, cost: 32, forecast: 49 },
  { quarter: 'Q4', revenue: 61, cost: 36, forecast: 58 },
];

type PreviewThemeName =
  | 'default'
  | 'dark'
  | 'bootstrap'
  | 'cartoon'
  | 'geek'
  | 'glass'
  | 'illustration'
  | 'mui'
  | 'shadcn';

const previewThemeOptions: Array<{ label: string; value: PreviewThemeName }> = [
  { label: 'Default', value: 'default' },
  { label: 'Dark', value: 'dark' },
  { label: 'Bootstrap', value: 'bootstrap' },
  { label: 'Cartoon', value: 'cartoon' },
  { label: 'Geek', value: 'geek' },
  { label: 'Glass', value: 'glass' },
  { label: 'Illustration', value: 'illustration' },
  { label: 'MUI-like', value: 'mui' },
  { label: 'shadcn-like', value: 'shadcn' },
];

function isPreviewThemeName(value: string | number): value is PreviewThemeName {
  return (
    value === 'default' ||
    value === 'dark' ||
    value === 'bootstrap' ||
    value === 'cartoon' ||
    value === 'geek' ||
    value === 'glass' ||
    value === 'illustration' ||
    value === 'mui' ||
    value === 'shadcn'
  );
}

function getBuiltInThemeConfig(activeThemeName: Extract<PreviewThemeName, 'default' | 'dark'>): ThemeConfig {
  switch (activeThemeName) {
    case 'dark':
      return {
        algorithm: antTheme.darkAlgorithm,
      };
    default:
      return {
        algorithm: antTheme.defaultAlgorithm,
      };
  }
}

function AntdThemePreviewCard({
  activeThemeName,
  onThemeChange,
}: {
  activeThemeName: PreviewThemeName;
  onThemeChange: (nextThemeName: PreviewThemeName) => void;
}) {
  const { token } = antTheme.useToken();
  const rechartsTheme = useMemo(
    () =>
      rechartsFromAntd(token, {
        name: `antd-${activeThemeName}`,
      }),
    [activeThemeName, token],
  );

  const chartFrameStyle: CSSProperties = {
    height: 320,
    backgroundColor: token.colorBgContainer,
    border: `1px solid ${token.colorBorderSecondary ?? token.colorBorder}`,
    borderRadius: token.borderRadiusLG,
    padding: 12,
  };

  return (
    <Card
      style={{
        marginBottom: 24,
        backgroundColor: token.colorBgContainer,
        borderColor: token.colorBorder,
      }}
    >
      <Space orientation="vertical" size="large" style={{ display: 'flex' }}>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Segmented
            options={previewThemeOptions}
            value={activeThemeName}
            onChange={value => {
              if (isPreviewThemeName(value)) {
                onThemeChange(value);
              }
            }}
          />
          <Space wrap>
            <Button type="primary">Primary action</Button>
            <Switch defaultChecked />
            <Tag color="processing">Ant Design</Tag>
          </Space>
        </div>

        <Typography.Text type="secondary">
          Default and dark come from Ant Design&apos;s built-in algorithms. Bootstrap, Cartoon, Geek, Glass,
          Illustration, MUI-like, and shadcn-like are adapted from the Ant Design website ThemePreview sources. The
          chart itself is styled implicitly by <code>RechartsThemeProvider</code> using{' '}
          <code>rechartsFromAntd(token)</code>.
        </Typography.Text>

        <Progress percent={65} showInfo={false} />

        <div style={chartFrameStyle}>
          <RechartsThemeProvider theme={rechartsTheme}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 16, right: 16, bottom: 8, left: 0 }}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="quarter" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line dataKey="revenue" name="Revenue" />
                <Line dataKey="cost" name="Cost" />
                <Line dataKey="forecast" name="Forecast" />
              </LineChart>
            </ResponsiveContainer>
          </RechartsThemeProvider>
        </div>
      </Space>
    </Card>
  );
}

function AntdThemePreview() {
  const [activeThemeName, setActiveThemeName] = useState<PreviewThemeName>('default');
  const bootstrapTheme = useBootstrapTheme();
  const cartoonTheme = useCartoonTheme();
  const geekTheme = useGeekTheme();
  const glassTheme = useGlassTheme();
  const illustrationTheme = useIllustrationTheme();
  const muiTheme = useMuiTheme();
  const shadcnTheme = useShadcnTheme();

  const providerConfig: ConfigProviderProps =
    /* eslint-disable no-nested-ternary */
    activeThemeName === 'bootstrap'
      ? bootstrapTheme
      : activeThemeName === 'cartoon'
        ? cartoonTheme
        : activeThemeName === 'geek'
          ? geekTheme
          : activeThemeName === 'glass'
            ? glassTheme
            : activeThemeName === 'illustration'
              ? illustrationTheme
              : activeThemeName === 'mui'
                ? muiTheme
                : activeThemeName === 'shadcn'
                  ? shadcnTheme
                  : { theme: getBuiltInThemeConfig(activeThemeName) };

  return (
    <ConfigProvider {...providerConfig}>
      <AntdThemePreviewCard activeThemeName={activeThemeName} onThemeChange={setActiveThemeName} />
    </ConfigProvider>
  );
}

export default AntdThemePreview;

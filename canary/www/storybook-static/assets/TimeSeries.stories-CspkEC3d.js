import{e}from"./iframe-Ddtg6pJD.js";import{X as s}from"./XAxis-BuVbltIt.js";import{R as y}from"./arrayEqualityCheck-CG9XTfyR.js";import{C as g}from"./ComposedChart-BM48fs1-.js";import{L as x}from"./Line-YleTGVwT.js";import{R as S}from"./RechartsHookInspector-CCfITcFS.js";import{M as E,N as M,O as r,P as A,Q as C,R as k,S as b,T as w,U as D}from"./axisSelectors-yUV1wcMm.js";import{T as O}from"./Tooltip-CQdauUmp.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BClOIvLb.js";import"./CartesianAxis-Bg_xmACB.js";import"./Layer-DFCJKk43.js";import"./Text-Dr3Q50hE.js";import"./DOMUtils-ClD35WUk.js";import"./Label-DVFU8Pe0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BmeIxVaP.js";import"./zIndexSlice-Ccg2qy_d.js";import"./types-ClXtAg6j.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-DMJ48TSK.js";import"./RechartsWrapper-_aZbub_8.js";import"./CartesianChart-BJB0TrzH.js";import"./chartDataContext-rtX1npPB.js";import"./CategoricalChart-DEs3YJXi.js";import"./ReactUtils-Cw8MXjHP.js";import"./ActivePoints-Ds6wCLcR.js";import"./Dot-CLk6qXvT.js";import"./RegisterGraphicalItemId-QH6oSkLG.js";import"./ErrorBarContext-CvI528BI.js";import"./GraphicalItemClipPath-3Plpc9D_.js";import"./SetGraphicalItem-CMBgXv4K.js";import"./useAnimationId-CURyQWbL.js";import"./getRadiusAndStrokeWidthFromDot-dgSAwQ2V.js";import"./ActiveShapeUtils-DMR6fW_T.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DJ8F3yH0.js";import"./Trapezoid-CtTP1eQD.js";import"./Sector-ClpHZ9p-.js";import"./Symbols-TieKMT2F.js";import"./Curve-C-ksUiT7.js";import"./index-DxoUglm9.js";import"./ChartSizeDimensions-CSjlsLF1.js";import"./OffsetShower-B4ALlsP9.js";import"./PlotAreaShower-B9MEGcsm.js";import"./useElementOffset--qyUsfM-.js";import"./iteratee-TDlx1PX0.js";import"./Cross-D5DVzTTn.js";const It={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Lt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Lt as __namedExportsOrder,It as default};

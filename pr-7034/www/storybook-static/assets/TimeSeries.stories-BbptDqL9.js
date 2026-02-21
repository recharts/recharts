import{e}from"./iframe-CRTFvrj9.js";import{X as s}from"./XAxis-BSKb_OYU.js";import{R as y}from"./arrayEqualityCheck-C-72eKdK.js";import{C as g}from"./ComposedChart-DTMWU6Jk.js";import{L as x}from"./Line-CiAwxFS9.js";import{R as S}from"./RechartsHookInspector-D5fTK36V.js";import{t as T,s as A,a as r,b as C,c as M,d as b,e as k,f as w,g as D}from"./d3-scale-B3vyKD8X.js";import{T as V}from"./Tooltip-BeZSxngh.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-UwfPUOGl.js";import"./Layer-CS75NGqW.js";import"./resolveDefaultProps-D1q6QfKc.js";import"./Text-B5hVsXUE.js";import"./DOMUtils-DFZ-Lmef.js";import"./Label-B8ukM34Q.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-T_Qg2faX.js";import"./zIndexSlice-CeN_cpGA.js";import"./immer-C2wqAH-O.js";import"./types-DqJmRq78.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Clwuxehj.js";import"./hooks-6Wtbcjpq.js";import"./axisSelectors-Da0NuHcy.js";import"./RechartsWrapper-BSniLpj2.js";import"./index-DTIfmw9b.js";import"./CartesianChart-BA-bIZkf.js";import"./chartDataContext-BdW7EA-o.js";import"./CategoricalChart-C4w7U3Tr.js";import"./ReactUtils-FOFjsaAB.js";import"./ActivePoints-DqiWJefE.js";import"./Dot-Bs4qVlF8.js";import"./RegisterGraphicalItemId-CQsCOMci.js";import"./ErrorBarContext-V9kNDrvg.js";import"./GraphicalItemClipPath-D3uyj9j1.js";import"./SetGraphicalItem-BKYxWNub.js";import"./useAnimationId-D4atK31V.js";import"./getRadiusAndStrokeWidthFromDot-BycfBkgL.js";import"./ActiveShapeUtils-Dvtjmakf.js";import"./isPlainObject-DWQ5xGNV.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CtzeM3od.js";import"./Trapezoid-BHEoFJyV.js";import"./Sector-CAdVxu4l.js";import"./Symbols-DQD-u_Ga.js";import"./symbol-CqE7w4As.js";import"./step-D-1eA3Al.js";import"./Curve-cG-fhaEi.js";import"./index-Bed0KFZ4.js";import"./ChartSizeDimensions-8pWs_Ibt.js";import"./OffsetShower-BF3aeG8w.js";import"./PlotAreaShower-D8bDGspZ.js";import"./useElementOffset-DO0yKBop.js";import"./uniqBy-bOCgIGO4.js";import"./iteratee-BwIi7ReL.js";import"./Cross-B5FBqdbb.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const zt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,zt as __namedExportsOrder,jt as default};

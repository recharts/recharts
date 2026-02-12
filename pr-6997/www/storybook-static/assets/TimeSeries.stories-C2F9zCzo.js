import{e}from"./iframe-D4XW71qE.js";import{X as s}from"./XAxis-B7adFIe7.js";import{R as y}from"./arrayEqualityCheck-Ct0H2J7-.js";import{C as g}from"./ComposedChart-F9p-LUMw.js";import{L as x}from"./Line-Ds1mFxVO.js";import{R as S}from"./RechartsHookInspector-9aXKf5pi.js";import{M as E,N as M,O as r,P as A,Q as C,R as k,S as b,T as w,U as D}from"./axisSelectors-DIlwx-_h.js";import{T as O}from"./Tooltip-Du8Gdhpt.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BtLFSBo9.js";import"./CartesianAxis-8-c0TmU5.js";import"./Layer-_WbjJ9WY.js";import"./Text-B9RQv17s.js";import"./DOMUtils-CsdAV10D.js";import"./Label-B64y4UV8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-uUtlF8oG.js";import"./zIndexSlice-DRfQm_zr.js";import"./types-CVucT5VX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-B5BtkbT7.js";import"./RechartsWrapper-C0DDkfJP.js";import"./CartesianChart-DkcK7QB-.js";import"./chartDataContext-6vD_4ehm.js";import"./CategoricalChart-CiMFuwJC.js";import"./ReactUtils-Dt1V4s2Z.js";import"./ActivePoints-Dec3rykj.js";import"./Dot-xgW2ThBu.js";import"./RegisterGraphicalItemId-c0aUNxuE.js";import"./ErrorBarContext-CYBrSxT_.js";import"./GraphicalItemClipPath-sDej9Lnv.js";import"./SetGraphicalItem-BB8zeoY-.js";import"./useAnimationId-BXlO72m4.js";import"./getRadiusAndStrokeWidthFromDot-CmN5e2Eb.js";import"./ActiveShapeUtils-BcGwy2uj.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CSkUH-X3.js";import"./Trapezoid-BC7P1jMa.js";import"./Sector-AFsZXlCO.js";import"./Symbols-CZhPoTol.js";import"./Curve-BM6HUAhp.js";import"./index-r8aHoL1L.js";import"./ChartSizeDimensions-YAYg9XQP.js";import"./OffsetShower-D_rHwW7U.js";import"./PlotAreaShower-BEJsFdI1.js";import"./useElementOffset-Cyi-tiOQ.js";import"./iteratee-_d0iWEtc.js";import"./Cross-f5Oc3nUV.js";const It={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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

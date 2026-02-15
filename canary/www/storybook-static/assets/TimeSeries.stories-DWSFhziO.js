import{e}from"./iframe-CcI14rjx.js";import{X as s}from"./XAxis-CzdMAN4d.js";import{R as y}from"./arrayEqualityCheck-B8tVyMzV.js";import{C as g}from"./ComposedChart-FcFBNN0D.js";import{L as x}from"./Line-BGLDYswm.js";import{R as S}from"./RechartsHookInspector-BirTV-4S.js";import{M as E,N as M,O as r,P as A,Q as C,R as k,S as b,T as w,U as D}from"./axisSelectors-RKSisFMT.js";import{T as O}from"./Tooltip-C7_EF9Yf.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-po8mUv-4.js";import"./CartesianAxis-Vu_uTkrX.js";import"./Layer-8dVuGqJD.js";import"./Text-D_czYdq0.js";import"./DOMUtils-BjGcEiQ0.js";import"./Label-Dpi6i3BM.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DuQEL0lP.js";import"./zIndexSlice-BZyTHnj4.js";import"./types-Ce3J44ym.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-CRZN5urL.js";import"./RechartsWrapper-Ds5PaNoP.js";import"./CartesianChart-DnBMHEHS.js";import"./chartDataContext-BY-Xyvma.js";import"./CategoricalChart-DcuTq1rr.js";import"./ReactUtils-C84uddRP.js";import"./ActivePoints-Ca2XV1yH.js";import"./Dot-B9LqMTkT.js";import"./RegisterGraphicalItemId-hDx3Uu0O.js";import"./ErrorBarContext-CRPnKTk6.js";import"./GraphicalItemClipPath-CPgfiSVt.js";import"./SetGraphicalItem-GKBrKzuX.js";import"./useAnimationId-B5oI4zFf.js";import"./getRadiusAndStrokeWidthFromDot-TOKn8Uzz.js";import"./ActiveShapeUtils-DL6WZdbr.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DSZATy_S.js";import"./Trapezoid-D4oUuF48.js";import"./Sector-DCwH9VE3.js";import"./Symbols-CXif55_q.js";import"./Curve-CHXnr1rt.js";import"./index-DRUD6mwN.js";import"./ChartSizeDimensions-DOkJnWBq.js";import"./OffsetShower-CLsXqqyI.js";import"./PlotAreaShower-BWzOW3_u.js";import"./useElementOffset-B1zTkUQu.js";import"./iteratee-ljczhaBr.js";import"./Cross-B9T7z20x.js";const It={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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

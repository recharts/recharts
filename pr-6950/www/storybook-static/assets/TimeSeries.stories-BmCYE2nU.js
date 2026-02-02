import{e}from"./iframe-CBadok3R.js";import{X as s}from"./XAxis-CuDJTYDf.js";import{R as y}from"./arrayEqualityCheck-D8DZf4E7.js";import{C as g}from"./ComposedChart-Dc_UJsoP.js";import{L as x}from"./Line-vL2LKnJQ.js";import{R as S}from"./RechartsHookInspector-Ccr9vg9I.js";import{M as E,N as M,O as r,P as A,Q as C,R as k,S as b,T as w,U as D}from"./axisSelectors-7aa3p4xy.js";import{T as O}from"./Tooltip-VKl52Hto.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DOVzV-iD.js";import"./CartesianAxis-BWCbP_kU.js";import"./Layer-CZpxdYtD.js";import"./Text-CvdY0hNo.js";import"./DOMUtils-DOxIp63n.js";import"./Label-B9arnFZu.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-gNsJWqo_.js";import"./zIndexSlice-Cb0fYcD4.js";import"./types-D0Nc3U-x.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-CvcnYJr5.js";import"./RechartsWrapper-BOMW4Wfi.js";import"./CartesianChart-DhdNdBtI.js";import"./chartDataContext-PjfwFb0T.js";import"./CategoricalChart-DgHJ04hm.js";import"./ReactUtils-BQuPA_dW.js";import"./ActivePoints-C4zMx6Rr.js";import"./Dot-D8cjCII1.js";import"./RegisterGraphicalItemId-BOD2PtEe.js";import"./ErrorBarContext-DNzUHuOB.js";import"./GraphicalItemClipPath-BGNJr3YU.js";import"./SetGraphicalItem-tnjDANmy.js";import"./useAnimationId-DFBNL1tZ.js";import"./getRadiusAndStrokeWidthFromDot-B43QJ_Z5.js";import"./ActiveShapeUtils-ZvkivxeS.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DyKJpDnd.js";import"./Trapezoid-BHZLmvdE.js";import"./Sector-hPIyOnR6.js";import"./Symbols-mEW1LXrD.js";import"./Curve-D-ytcwuR.js";import"./index-AunjJ6Z9.js";import"./ChartSizeDimensions-rprNa-Kn.js";import"./OffsetShower-Dh3F56nH.js";import"./PlotAreaShower-CfQIUSEt.js";import"./useElementOffset-CRBaCWHR.js";import"./iteratee-9Y6z12tH.js";import"./Cross-C0Q6IQ13.js";const It={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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

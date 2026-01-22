import{e}from"./iframe-qFyPNvi_.js";import{X as s}from"./XAxis-B5Ueyu7e.js";import{R as y}from"./arrayEqualityCheck-BR44KOOG.js";import{C as g}from"./ComposedChart-ANDNIb_y.js";import{L as x}from"./Line-uOvaDpg7.js";import{R as S}from"./RechartsHookInspector-Ce3qLbRt.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-De9afnke.js";import{T as O}from"./Tooltip-CMoU0mbE.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CiVGu3Bt.js";import"./CartesianAxis-BrVa5ao-.js";import"./Layer-B9wfXqHf.js";import"./Text-icE1XF3t.js";import"./DOMUtils-EYrslgiu.js";import"./Label-CaGvlJzM.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-B3rHEP_M.js";import"./zIndexSlice-yXhSr7sB.js";import"./types-BhYGGyZO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-aCDbeiPX.js";import"./CategoricalChart-Bg7JUw0R.js";import"./RechartsWrapper-DM4_tnRN.js";import"./CartesianChart-DplX7WDC.js";import"./chartDataContext-byZU3wA9.js";import"./ReactUtils-Dn42083y.js";import"./ActivePoints-B2Q4-VFp.js";import"./Dot-BYbcpD57.js";import"./RegisterGraphicalItemId-Dwao3Q82.js";import"./ErrorBarContext-tV2jexXK.js";import"./GraphicalItemClipPath-SzdiLGTP.js";import"./SetGraphicalItem-C4lKL51b.js";import"./useAnimationId-CBoODHVq.js";import"./getRadiusAndStrokeWidthFromDot-CpZPzij5.js";import"./ActiveShapeUtils-m1fmtbZZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C4WR-Qi1.js";import"./Trapezoid-hMqWhzEj.js";import"./Sector-CLe_yWi6.js";import"./Symbols-CPIOcRRv.js";import"./Curve-Bf-6f0us.js";import"./index-CxM5gQIi.js";import"./ChartSizeDimensions-QfvN_Ah7.js";import"./OffsetShower-BUMougLk.js";import"./PlotAreaShower-CjC9fWZt.js";import"./useElementOffset-DOXz1Ew0.js";import"./iteratee-CbT9mAc7.js";import"./Cross-Cx9wV6KX.js";const Ht={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const It=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,It as __namedExportsOrder,Ht as default};

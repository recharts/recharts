import{e}from"./iframe-CxI43GLZ.js";import{X as s}from"./XAxis-DH2Q1e34.js";import{R as y}from"./arrayEqualityCheck-BfVdm9jV.js";import{C as g}from"./ComposedChart-4DvSTtTI.js";import{L as x}from"./Line-C6Ka3jci.js";import{R as S}from"./RechartsHookInspector-DtRN3lc4.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-BTfB0Z1c.js";import{T as O}from"./Tooltip-DqOvky8-.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-UONb-avO.js";import"./CartesianAxis-CGSh7ZG4.js";import"./Layer-CmGdcww6.js";import"./Text-DPcraT74.js";import"./DOMUtils-DgzzSI6D.js";import"./Label-B09Q27rq.js";import"./PolarUtils-DHQUPcK8.js";import"./ZIndexLayer-B1TtTzTT.js";import"./zIndexSlice-DIL5Sqm1.js";import"./types-KA7-71SW.js";import"./hooks-B1NTMNRK.js";import"./CategoricalChart-diS0yBUq.js";import"./RechartsWrapper--eelc2ZG.js";import"./CartesianChart-Dk9gAZsf.js";import"./chartDataContext-VKjrZIk0.js";import"./ReactUtils-elXAGoBP.js";import"./ActivePoints-BnPOypie.js";import"./Dot-KNUzVwuJ.js";import"./RegisterGraphicalItemId-CrQ7lfko.js";import"./ErrorBarContext-D61wHuQh.js";import"./GraphicalItemClipPath-D5JGy8J4.js";import"./SetGraphicalItem-CwpQjYla.js";import"./useAnimationId-CTE4KFOU.js";import"./getRadiusAndStrokeWidthFromDot-CXjnDYBP.js";import"./ActiveShapeUtils-Cos1S8ib.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bz1Foak7.js";import"./Trapezoid-B_Aa80Lz.js";import"./Sector-BrRXNJ4R.js";import"./Symbols-CSvR9izB.js";import"./Curve-BWaqjCRV.js";import"./index-QQ_t_uQR.js";import"./ChartSizeDimensions-DCRd00II.js";import"./OffsetShower-CdLtWmQh.js";import"./PlotAreaShower-B89fMbPB.js";import"./useElementOffset-iAMlLSj3.js";import"./iteratee-BhYORJq7.js";import"./Cross-DIFk52zL.js";const Lt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Ht=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Ht as __namedExportsOrder,Lt as default};

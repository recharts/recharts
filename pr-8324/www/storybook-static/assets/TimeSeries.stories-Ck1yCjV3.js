import{R as e}from"./iframe-CxHJIaxn.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BtFfwAik.js";import{R as h}from"./zIndexSlice-B4J4SBJt.js";import{C as g}from"./ComposedChart-ZJvCku8z.js";import{L as x}from"./Line-BGusFgF3.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./diverging-AJjDHMaN.js";import{T as V}from"./Tooltip-Cl9vkhW-.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-VB2vAzvZ.js";import"./get-CjriyByo.js";import"./CartesianAxis-DtD-UOrB.js";import"./Layer-CkJdGJLp.js";import"./Text-BkIUM7GL.js";import"./ZIndexLayer-B_7zdP5R.js";import"./index-CTXNW52Q.js";import"./index-CCCil_M9.js";import"./Label-M_CthLgf.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Cypa3mep.js";import"./throttle-zrHO1Lk3.js";import"./types-BGw9U51_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BLYVCU7c.js";import"./index-DATl4CJn.js";import"./index-CNK9YebA.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-DToVA1z_.js";import"./RechartsWrapper-lHGqaVDW.js";import"./index-WkAKiv7J.js";import"./fillDefinitions-DRREg7Kz.js";import"./CartesianChart-BVZvuLTX.js";import"./chartDataContext-DfmCl9OG.js";import"./CategoricalChart-DlLRA4vO.js";import"./getRadiusAndStrokeWidthFromDot-D_HaNWL6.js";import"./Curve-D6sUhEtt.js";import"./step-DotuH85W.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-DnDN_vpi.js";import"./ActivePoints-R1_oETV-.js";import"./Dot-Dme7I_-s.js";import"./activeStyles-BwCU-iTy.js";import"./useAnimationId-D_Yg6oAr.js";import"./Symbols-IHTx3wL0.js";import"./symbol-C32Av6Of.js";import"./ErrorBarContext-BUUfXJQl.js";import"./SetGraphicalItem-Cp9BSKiw.js";import"./ActiveShapeUtils-BHoE966L.js";import"./useEffectiveDataKey-BI2pOOYW.js";import"./useElementOffset-D0XE9GLh.js";import"./uniqBy-Xde66OV6.js";import"./iteratee-BBskpsD7.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DjanSu9o.js";import"./Rectangle-AwN8DkOy.js";import"./util-Dxo8gN5i.js";import"./Sector-B4ZR08uK.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};

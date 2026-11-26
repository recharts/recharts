import{R as e}from"./iframe-B9Tl-Ens.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DgmkF9Yy.js";import{R as h}from"./zIndexSlice-CeB5DPsb.js";import{C as g}from"./ComposedChart-BkpfzGMq.js";import{L as x}from"./Line-DsiP8Uyr.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./diverging-Cl0QaiN4.js";import{T as V}from"./Tooltip-jUi0yI8j.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Dx7qzCwA.js";import"./get-CjriyByo.js";import"./CartesianAxis-BYNQxUMc.js";import"./Layer-Bu8k813y.js";import"./Text-Bu0oCoIY.js";import"./ZIndexLayer-Ci5oHiVJ.js";import"./index-DuaVn5It.js";import"./index-DQWwV-s1.js";import"./Label-Dez-agGk.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C83zEpXU.js";import"./throttle-dfeJw9jR.js";import"./types-BDfLdEx1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BtRpF17f.js";import"./index-166nmvSm.js";import"./index-iYKKcn13.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-x8C92zXU.js";import"./RechartsWrapper-DeTgaRib.js";import"./index-fTBi_u0-.js";import"./fillDefinitions-BDEW-tdf.js";import"./CartesianChart-BbmwDwWI.js";import"./chartDataContext-DkV3RH4w.js";import"./CategoricalChart-BLl8H6lt.js";import"./getRadiusAndStrokeWidthFromDot-DojBXQgy.js";import"./Curve-pkk8Hz5i.js";import"./step-BuRhJuEF.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-DvmFQkM4.js";import"./ActivePoints-D0ERAXFA.js";import"./Dot-DzsU10RZ.js";import"./activeStyles-B1QGMcNg.js";import"./useAnimationId-eoD8CiMN.js";import"./Symbols-BkCPJOBN.js";import"./symbol-CcaxO5ZF.js";import"./ErrorBarContext-BP3iz7Vb.js";import"./SetGraphicalItem-BRGOOFmX.js";import"./ActiveShapeUtils-CP-Ler3I.js";import"./useEffectiveDataKey-BhVu78c2.js";import"./useElementOffset-O98GivjF.js";import"./uniqBy-COJiZ3F4.js";import"./iteratee-6n8bYTkS.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CPeavNPd.js";import"./Rectangle-BHPo4ax_.js";import"./util-Dxo8gN5i.js";import"./Sector-B3gJsk8n.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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

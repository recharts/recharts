import{R as e}from"./iframe-Cg_iar9N.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CGc4hdT9.js";import{R as h}from"./zIndexSlice-BjUOfyjh.js";import{C as g}from"./ComposedChart-BFCZD_8N.js";import{L as x}from"./Line-D_Ww1q7V.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DPBNOBhz.js";import{T as V}from"./Tooltip-m2cQU-qg.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DTSDaMdx.js";import"./get-CjriyByo.js";import"./CartesianAxis-DOu6asA8.js";import"./Layer-Bzrsb6mZ.js";import"./Text-B2P7H0Ri.js";import"./ZIndexLayer-CSE-z-0P.js";import"./index-7C4ywAbx.js";import"./index-CwdEjpHW.js";import"./Label-BJnLd782.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-B1d4qlCW.js";import"./throttle-BblIHJT1.js";import"./types-ltSKN6AB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CLd9gyLd.js";import"./index-VP3OIQj6.js";import"./index-jWuQwiwF.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-CZOBtonL.js";import"./RechartsWrapper-C7ImdcI0.js";import"./index-V_wxvl63.js";import"./fillDefinitions-DSB60PQ6.js";import"./CartesianChart-B4msnQ_2.js";import"./chartDataContext-BigsU9AL.js";import"./CategoricalChart-CPdnXejQ.js";import"./getRadiusAndStrokeWidthFromDot-DxfCADw-.js";import"./Curve-CPf1VG57.js";import"./step-DiiLfVQZ.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-CxwfrkTv.js";import"./ActivePoints-b69yWwyo.js";import"./Dot-BA3Hs1sQ.js";import"./activeStyles-BGKrSIuv.js";import"./useAnimationId-9EHB1qr6.js";import"./Symbols-HGWe4NLb.js";import"./symbol-BYuJahfe.js";import"./ErrorBarContext-CGI8-gVI.js";import"./SetGraphicalItem-B4YPaENS.js";import"./ActiveShapeUtils-CsQyYPRe.js";import"./useEffectiveDataKey-Cs5zYK5x.js";import"./useElementOffset-hhsDlGuK.js";import"./uniqBy-DOt34CrH.js";import"./iteratee-DBE5xjg2.js";import"./isArguments-yB-y1yaH.js";import"./Cross-JN070_fL.js";import"./Rectangle-C_eYXhuf.js";import"./util-Dxo8gN5i.js";import"./Sector-BaDDZluv.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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

import{R as e}from"./iframe-CMzJyxaT.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-IIW9Jscf.js";import{R as h}from"./zIndexSlice-Dud0JIgm.js";import{C as g}from"./ComposedChart-D637W0rC.js";import{L as x}from"./Line-Be4wWJHL.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DRT9BUPN.js";import{T as V}from"./Tooltip-B4t-72_f.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-CqeHr0V2.js";import"./Layer-AKX63atr.js";import"./resolveDefaultProps-D90TgEnc.js";import"./Text-RRbVz4t0.js";import"./ZIndexLayer-D9_6vJMt.js";import"./index-CHmRWuG6.js";import"./index-CsXUOZ6h.js";import"./Label-BnlLNWzo.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DrN1Djr4.js";import"./throttle-BTIGJM4c.js";import"./types-Dl8VwStK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DM-R4GMo.js";import"./index-BuF3Ul7s.js";import"./index-Ihh44ZOg.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-Bq81Ao7M.js";import"./RechartsWrapper-CfktXOMD.js";import"./index-CNV21azp.js";import"./fillDefinitions-BTSqEgwz.js";import"./CartesianChart-BO8uDP04.js";import"./chartDataContext-CDPuAaqS.js";import"./CategoricalChart-DPQZGg1m.js";import"./Curve-Be5_WgCt.js";import"./step-Bwzmrw1Q.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-bJA9yLxO.js";import"./ActivePoints-C14hYzDD.js";import"./Dot-CJPE3X0k.js";import"./activeStyles-D3ZF14ZM.js";import"./useAnimationId-CAh3JWUx.js";import"./Symbols-d_VeINkv.js";import"./symbol-DKhDQ6iW.js";import"./ErrorBarContext-DaqV69Oh.js";import"./SetGraphicalItem-DihoZDul.js";import"./getRadiusAndStrokeWidthFromDot-DeK2Mko4.js";import"./ActiveShapeUtils-q9dSSXz9.js";import"./useEffectiveDataKey-DeMvidhj.js";import"./useElementOffset-BbjAediX.js";import"./uniqBy-BYP-xu74.js";import"./iteratee-DHrbjV55.js";import"./isArguments-yB-y1yaH.js";import"./Cross-C0i8Q6it.js";import"./Rectangle-CL2UaBeU.js";import"./util-Dxo8gN5i.js";import"./Sector-BjzMwCaG.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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

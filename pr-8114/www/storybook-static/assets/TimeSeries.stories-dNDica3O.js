import{R as e}from"./iframe-C2PRwgnl.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BncsxFZ4.js";import{R as h}from"./zIndexSlice-weNxwEm8.js";import{C as g}from"./ComposedChart-BLjSf-Hf.js";import{L as x}from"./Line-D8_px741.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BIUnlP6Z.js";import{T as V}from"./Tooltip-BI5i1InD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-DaiAwxt0.js";import"./Layer-botuDyHz.js";import"./resolveDefaultProps-aJLviuy-.js";import"./Text-D4lV4Imp.js";import"./pageBackground-B4m54nd8.js";import"./ZIndexLayer-BWmWIjtz.js";import"./index-BtXSjXZr.js";import"./index-BqBIYX05.js";import"./Label-DdFUcTtW.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DmG4l4yE.js";import"./throttle-CVlDdGyC.js";import"./types-CHq7dG9p.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-FbCZKIWz.js";import"./index-BxVmRSNz.js";import"./index-CkiHrneS.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-nSy-fV9M.js";import"./RechartsWrapper-BOct7ur6.js";import"./index-BeFazHyq.js";import"./CartesianChart-CtjN8ua0.js";import"./ZIndexPortal-CKd--WGA.js";import"./CategoricalChart-gCAaZAhY.js";import"./Curve-CQnefVPR.js";import"./step-Dw_YruiA.js";import"./path-DyVhHtw_.js";import"./LabelList-Deq7UXnp.js";import"./ActivePoints-BH2xo60h.js";import"./Dot-2eC8WQef.js";import"./activeStyles-a6dnVtfT.js";import"./useAnimationId-Dx5Gkjhg.js";import"./dataEntryStyles-BHwXjzhI.js";import"./Symbols-CiyVK5wN.js";import"./symbol-VU_gnnhL.js";import"./ErrorBarContext-C59RBxai.js";import"./SetGraphicalItem-DeBA8bqw.js";import"./getRadiusAndStrokeWidthFromDot-Dzgyitlt.js";import"./ActiveShapeUtils-BV6ZL_JX.js";import"./useEffectiveDataKey-lRQnp3q-.js";import"./useElementOffset-Cm5L0n6p.js";import"./uniqBy-B3CDwPKv.js";import"./iteratee-BrcMUC4D.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BNFlSaHC.js";import"./Rectangle-BnH84tO-.js";import"./util-Dxo8gN5i.js";import"./Sector-CPqNaTT0.js";const Pt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},jt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,jt as __namedExportsOrder,Pt as default};

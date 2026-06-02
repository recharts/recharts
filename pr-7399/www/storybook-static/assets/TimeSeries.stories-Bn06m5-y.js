import{c as e}from"./iframe-BRX46Ivk.js";import{t as n}from"./Time-D4Einjlh.js";import{X as s}from"./XAxis-BCLXDtwM.js";import{g as y}from"./zIndexSlice-DWdWmCIF.js";import{C as g}from"./ComposedChart-CDM_AzxP.js";import{L as x}from"./Line-DersmD4z.js";import{t as T,s as A,f as C,e as E,b as M,g as b,h as w,i as D,c as r}from"./d3-scale--l5c2rdM.js";import{T as V}from"./Tooltip-CVUewvSq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Co_O7Bis.js";import"./CartesianAxis-D25s55eU.js";import"./Layer-CnAnt2-w.js";import"./resolveDefaultProps-yU7jT9_k.js";import"./Text-Dab8pblH.js";import"./DOMUtils-DYK5KdOd.js";import"./isWellBehavedNumber-CB_DAa3f.js";import"./Label-BF8y58w-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CPddneQ7.js";import"./index-aVTX2b-6.js";import"./index-B93cWPAb.js";import"./types-BPLmhp3x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B8vMnOQc.js";import"./immer-B8PXb0jM.js";import"./RechartsWrapper-C2N_lXXj.js";import"./index-WXfBYNk1.js";import"./index-C_nDec_P.js";import"./axisSelectors-CxAtIunO.js";import"./CartesianChart-CXTTTHcm.js";import"./chartDataContext-Liihjxia.js";import"./CategoricalChart-CQuPTVMV.js";import"./Curve-DevGF9dB.js";import"./step-DohD2rXx.js";import"./path-DyVhHtw_.js";import"./ReactUtils-CZBp5YIk.js";import"./ActivePoints-zyPb8mdq.js";import"./Dot-DrpVqpH-.js";import"./RegisterGraphicalItemId-D97Nzm32.js";import"./ErrorBarContext-OAvmaR3P.js";import"./GraphicalItemClipPath-BoMPcOm_.js";import"./SetGraphicalItem-Ddj-tLej.js";import"./useAnimationId-HcldwJQz.js";import"./getRadiusAndStrokeWidthFromDot-CjA9U0Zs.js";import"./ActiveShapeUtils-DpAig7qv.js";import"./useElementOffset-De3qQeYf.js";import"./uniqBy-CtWhPXaz.js";import"./iteratee-B6B5J5uM.js";import"./Cross-BvuakeTj.js";import"./Rectangle-BGEQUwuw.js";import"./Sector-DKv1-que.js";const Xt={component:s},S={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),R=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?F(t):b(t)<t?w(t)<t?L(t):R(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Bt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Bt as __namedExportsOrder,Xt as default};

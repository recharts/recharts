import{R as e}from"./iframe-D-W27Aye.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-gk42ZI-1.js";import{R as h}from"./zIndexSlice-DGQfYPGt.js";import{C as g}from"./ComposedChart-DJkZQXCm.js";import{L as x}from"./Line-DtGbdsRs.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BQjrtTI1.js";import{T as V}from"./Tooltip-BHjgq3bQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BDQ-VaUY.js";import"./CartesianAxis-zyf7i4Uk.js";import"./Layer-BBvq20uw.js";import"./resolveDefaultProps-BroczFsN.js";import"./Text-Ch5M4wnL.js";import"./DOMUtils-ClafKG0n.js";import"./isWellBehavedNumber-Du_dam65.js";import"./Label-xP0TYJi-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-g9kGWnPX.js";import"./index-CWu2xMKi.js";import"./index-DLfEBe63.js";import"./types-DQNR05Kl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CN4MtC-5.js";import"./immer-CbhGTgvn.js";import"./RechartsWrapper-D3NlvT8L.js";import"./index-DE37ce3k.js";import"./index-Cnxyq0Mm.js";import"./axisSelectors-BvFrWOiO.js";import"./CartesianChart-BPw6EL6m.js";import"./chartDataContext-mE2SEo_G.js";import"./CategoricalChart-CsqvwlsS.js";import"./Curve-CDWlC7vY.js";import"./step-e-ZH1_z5.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DVypXaLh.js";import"./useAnimationId-Bs22yXlG.js";import"./string-B6fdYHAA.js";import"./ActivePoints-DIioQ5_v.js";import"./Dot-BRpnxUKp.js";import"./RegisterGraphicalItemId-EzN9TJ6u.js";import"./ErrorBarContext-CUSYqY7l.js";import"./GraphicalItemClipPath-C_UztI7f.js";import"./SetGraphicalItem-50FO49Qg.js";import"./getRadiusAndStrokeWidthFromDot-DqIa6S6d.js";import"./ActiveShapeUtils-D1Ceary0.js";import"./useElementOffset-B60rjUQO.js";import"./uniqBy-Wx1pUBZp.js";import"./iteratee-DbBg1eKT.js";import"./Cross-CoPyHlfO.js";import"./Rectangle-BaBIbp7f.js";import"./Sector-BdTeyyH9.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Yt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Yt as __namedExportsOrder,Bt as default};

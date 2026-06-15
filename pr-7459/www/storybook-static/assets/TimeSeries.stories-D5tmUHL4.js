import{R as e}from"./iframe-CoKy4elT.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DsRQf7G7.js";import{R as h}from"./zIndexSlice-CY4yYEbq.js";import{C as g}from"./ComposedChart-BVJUWbH_.js";import{L as x}from"./Line-SzjmsAH7.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-xTkB24fT.js";import{T as V}from"./Tooltip-K6a2MI97.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BfSl0Rns.js";import"./CartesianAxis-DoYCv6Ih.js";import"./Layer-k2Wdsuzq.js";import"./resolveDefaultProps-CDt21lVt.js";import"./Text-DL1Q3xYK.js";import"./DOMUtils-YWM1N8Io.js";import"./isWellBehavedNumber-1a8W8TdO.js";import"./Label-MtH_fF3i.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Gbc9J2Kq.js";import"./index-Bjw5bEKW.js";import"./index-B3BiA27P.js";import"./types-Du-R6iBe.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DBzopiP-.js";import"./immer-lWVojOeC.js";import"./RechartsWrapper-DkPhnPXC.js";import"./index-B6XlI2wQ.js";import"./index-C3h5ViMU.js";import"./axisSelectors-D-8m2pyG.js";import"./CartesianChart-DX79lhQp.js";import"./chartDataContext-JpjBb8GI.js";import"./CategoricalChart-DaCgDPQn.js";import"./Curve-B2xh1z9j.js";import"./step-DAyKFUyW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CIond_pq.js";import"./useAnimationId-DCY8-kt_.js";import"./string-B6fdYHAA.js";import"./ActivePoints-BzkJ5aTL.js";import"./Dot-CVh_JGUT.js";import"./RegisterGraphicalItemId-CuDS2LmP.js";import"./ErrorBarContext-DteVVWve.js";import"./GraphicalItemClipPath-BE9EOFft.js";import"./SetGraphicalItem-Bcs0Y3bf.js";import"./getRadiusAndStrokeWidthFromDot-DFePIRu3.js";import"./ActiveShapeUtils-CdBo7Ldv.js";import"./useElementOffset-DOdjfFuB.js";import"./uniqBy-CtAtk69m.js";import"./iteratee-BljMhTLe.js";import"./Cross-Bpe2S7--.js";import"./Rectangle-CO7CILtg.js";import"./Sector-COV7TTg8.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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

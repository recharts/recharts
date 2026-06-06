import{R as e}from"./iframe-CfFwYGba.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-C1PjqHUu.js";import{R as h}from"./zIndexSlice-DfErsUYp.js";import{C as g}from"./ComposedChart-9_Y3XLOf.js";import{L as x}from"./Line-1W0aDq6r.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CO_OUUyv.js";import{T as V}from"./Tooltip-D9G1T0b-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-VqHCUeFt.js";import"./CartesianAxis-DYBfrE-6.js";import"./Layer-CIeZ6xN1.js";import"./resolveDefaultProps-CNXn3RtZ.js";import"./Text-6g8FEB5n.js";import"./DOMUtils-CelkDAhh.js";import"./isWellBehavedNumber-DNsnRpQn.js";import"./Label-BfJ1m9lw.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CO0_v3Z6.js";import"./index-B1M76gQx.js";import"./index-DKyALkfw.js";import"./types-B8Ju2LTD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CeRHVXP-.js";import"./immer-ChF14mwi.js";import"./RechartsWrapper-BG04mOMU.js";import"./index-jr7opHAK.js";import"./index-DNhYiVbG.js";import"./axisSelectors-DhigzgEo.js";import"./CartesianChart-BKL_0SO1.js";import"./chartDataContext-CvyqEHRa.js";import"./CategoricalChart-D8Sfn5Og.js";import"./Curve-CvFToXA1.js";import"./step-Cz7LQHZ8.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DufJJ5tM.js";import"./useAnimationId-q4Azt8JP.js";import"./string-B6fdYHAA.js";import"./ActivePoints-BvFcDKGx.js";import"./Dot-CQusYe0D.js";import"./RegisterGraphicalItemId-DuA2mhLl.js";import"./ErrorBarContext-yluf_OAo.js";import"./GraphicalItemClipPath-CycB6t93.js";import"./SetGraphicalItem-BVwnEQ5r.js";import"./getRadiusAndStrokeWidthFromDot-ClnovYdE.js";import"./ActiveShapeUtils-BoiiDjBc.js";import"./useElementOffset-DHiFNrkV.js";import"./uniqBy-2uTalxV9.js";import"./iteratee-CgWzIoT6.js";import"./Cross-CJdDez7_.js";import"./Rectangle-Dp-9d2wb.js";import"./Sector-BK2jXRga.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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

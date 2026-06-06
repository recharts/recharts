import{R as e}from"./iframe-DSGjjpNU.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CyP8TOeF.js";import{R as h}from"./zIndexSlice-CA6E8vFi.js";import{C as g}from"./ComposedChart-DrbKDWrp.js";import{L as x}from"./Line-_u_cC6u5.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DFnee9kt.js";import{T as V}from"./Tooltip-DRaTN_7A.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DWY5eETe.js";import"./CartesianAxis-Cj3_cZt6.js";import"./Layer-CQXD14hs.js";import"./resolveDefaultProps-C7JBpnaB.js";import"./Text-CzUj4xGW.js";import"./DOMUtils-91PmpcqE.js";import"./isWellBehavedNumber-DJkwFvMJ.js";import"./Label-BCa7jxpl.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BY8ImL1x.js";import"./index-zgKj8xSX.js";import"./index-BP6oFGIz.js";import"./types-C1TBc4OL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dt_MkN4R.js";import"./immer-Py-Ymz2c.js";import"./RechartsWrapper-DLTVJ7et.js";import"./index-BppypMuk.js";import"./index-BXnOwVVg.js";import"./axisSelectors-ChSlicBm.js";import"./CartesianChart-Dc9cHP3f.js";import"./chartDataContext-dw-RuqgE.js";import"./CategoricalChart-4qFfYNuc.js";import"./Curve-gomJXmPu.js";import"./step-MzBMmcWb.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DmxYIflg.js";import"./useAnimationId-Da38KlFl.js";import"./string-B6fdYHAA.js";import"./ActivePoints-CI7vIZx0.js";import"./Dot-BA1tdqH4.js";import"./RegisterGraphicalItemId-Cr8a7rd9.js";import"./ErrorBarContext-LCSn87i7.js";import"./GraphicalItemClipPath-JjCltWFk.js";import"./SetGraphicalItem-CMSYXoAN.js";import"./getRadiusAndStrokeWidthFromDot-B6xtN6Lv.js";import"./ActiveShapeUtils-c7K_sKfu.js";import"./useElementOffset-DuixBUl9.js";import"./uniqBy-sInfNE8L.js";import"./iteratee-BfP38f8d.js";import"./Cross-5PMfY0nB.js";import"./Rectangle-DkHbTKKp.js";import"./Sector-B0jiapeC.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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

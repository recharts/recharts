import{R as e}from"./iframe-Csitbru2.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-GSkuRjug.js";import{R as h}from"./zIndexSlice-BG9qkId4.js";import{C as g}from"./ComposedChart-BUYN4Cux.js";import{L as x}from"./Line-Dlr3zu4o.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-ruaAtfZ3.js";import{T as V}from"./Tooltip-DUtc5Of5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DUq6txa7.js";import"./CartesianAxis-625Se9fv.js";import"./Layer-CzMJ0aPe.js";import"./resolveDefaultProps-zVEOPP5d.js";import"./Text-CCtHFY4v.js";import"./DOMUtils-QGCjuYeS.js";import"./isWellBehavedNumber-_7tyBBfO.js";import"./Label-ipIcHgJV.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BXMbhl4p.js";import"./index-DY2vKHdm.js";import"./index-82VYn5V_.js";import"./types-CUGjGCsQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DArjmdb9.js";import"./immer-DZIxrqNF.js";import"./RechartsWrapper-CJrqmvjr.js";import"./index-BUYeukup.js";import"./index-3rUoeV7Y.js";import"./axisSelectors-BKzg4uht.js";import"./CartesianChart-CQCv9B95.js";import"./chartDataContext-5AtwXdKv.js";import"./CategoricalChart-CH47Oqt0.js";import"./Curve-B3wzhPX7.js";import"./step-Cvs1IljU.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-nKsPTqFW.js";import"./useAnimationId-co5Blost.js";import"./ActivePoints-CJkfV15x.js";import"./Dot-Wnlr8zt6.js";import"./RegisterGraphicalItemId-4_42U9Tt.js";import"./ErrorBarContext-CNfKV2VL.js";import"./GraphicalItemClipPath-DmSSVMHB.js";import"./SetGraphicalItem-H4qAywSp.js";import"./getRadiusAndStrokeWidthFromDot-BVPCo9J9.js";import"./ActiveShapeUtils-BJwvh2Jx.js";import"./useElementOffset-BFAuBBXU.js";import"./uniqBy-BiKJ-0mt.js";import"./iteratee-DCHecb74.js";import"./Cross-CXKlPB_s.js";import"./Rectangle-Bp3a_jVT.js";import"./util-Dxo8gN5i.js";import"./Sector-r30QQkHv.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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

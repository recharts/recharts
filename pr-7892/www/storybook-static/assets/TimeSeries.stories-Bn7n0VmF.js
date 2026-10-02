import{R as e}from"./iframe-C0YxDW4G.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Cpmqfpq_.js";import{R as h}from"./zIndexSlice-DZlnymAS.js";import{C as g}from"./ComposedChart-D72s1HZM.js";import{L as x}from"./Line-Cpl-VXWr.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DUyT1Gjc.js";import{T as V}from"./Tooltip-zR4Uhk69.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-d866ov5z.js";import"./Layer-tJBN4qpr.js";import"./resolveDefaultProps-DJlTwR1C.js";import"./Text-BVHk9liS.js";import"./DOMUtils-CbyUgj5a.js";import"./isWellBehavedNumber-BBCyva1N.js";import"./useId-DohVK8l3.js";import"./useBackwardsCompatibleTheme-CKP3ZQ-p.js";import"./Label-gEQqlFEh.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D7SEoPy2.js";import"./index-BVdk1KvG.js";import"./index-CKK11yAc.js";import"./types-CmslNM9O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BVS-v-zq.js";import"./throttle-DOQHZSoJ.js";import"./index-BIhmmbcr.js";import"./index-B97k9itH.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BlkZ7fGa.js";import"./axisSelectors-nVTOJQip.js";import"./index-Cpic7GAq.js";import"./CartesianChart-CyMga4mL.js";import"./chartDataContext-DVZlfd-d.js";import"./CategoricalChart-BIr7jbpw.js";import"./Curve-ID0kLGRf.js";import"./step-BuTfKpR_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DNNl8m9z.js";import"./useAnimationId-BpnQNYpV.js";import"./ActivePoints-mPjd9m9U.js";import"./Dot-DVL9KKRs.js";import"./RegisterGraphicalItemId-DyGH3H1s.js";import"./ErrorBarContext-_SzMhsus.js";import"./GraphicalItemClipPath-BMlAd1SQ.js";import"./SetGraphicalItem-BTB5LVHV.js";import"./getRadiusAndStrokeWidthFromDot-DYSx7Sm5.js";import"./ActiveShapeUtils-ZNrpT7nq.js";import"./useGraphicalItemIdentity-BFvVeiu2.js";import"./useElementOffset-k9b-gsJZ.js";import"./uniqBy-eGdnF5ge.js";import"./iteratee-Cy8fxwlM.js";import"./Cross-DLa943FX.js";import"./Rectangle-Cdyy37-n.js";import"./util-Dxo8gN5i.js";import"./Sector-iXZx7oIx.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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

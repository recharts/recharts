import{R as e}from"./iframe-B6gM4DBh.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BPzJdn5a.js";import{R as h}from"./zIndexSlice-B4H70akx.js";import{C as g}from"./ComposedChart-DAUNCbv-.js";import{L as x}from"./Line-DR958mka.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CI-CA5sR.js";import{T as V}from"./Tooltip-LOl6iYza.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-BQyu91wk.js";import"./Layer-BvISteiU.js";import"./resolveDefaultProps-HOpiV2UA.js";import"./Text-D8H4cfwv.js";import"./DOMUtils-BD82E1of.js";import"./isWellBehavedNumber-oWfLE68q.js";import"./useId-DmdpXOpx.js";import"./useBackwardsCompatibleTheme-9Vtrcjiv.js";import"./Label-uI-6_naX.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C4neE0Nt.js";import"./index-CaHvefGu.js";import"./index-DbvGR5AH.js";import"./types-B56u5L7u.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C9ov5r2C.js";import"./throttle-CinY1Cg6.js";import"./index-kpSUoDvk.js";import"./index-8y1uh0JJ.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-D2vZVe4g.js";import"./axisSelectors-D78GfHI7.js";import"./index-CgCBhtWH.js";import"./CartesianChart-DHo5twJf.js";import"./chartDataContext-SMCrbflL.js";import"./CategoricalChart-COvMpWfW.js";import"./Curve-BJ4EcGmY.js";import"./step-hz5YCF7J.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DoXh_8P-.js";import"./useAnimationId-B9APFvDh.js";import"./ActivePoints-Dyp1po5C.js";import"./Dot-DPENikpb.js";import"./RegisterGraphicalItemId-Bqoy6nT5.js";import"./ErrorBarContext-BH6HTwRn.js";import"./GraphicalItemClipPath-BlpQx9et.js";import"./SetGraphicalItem-CtntmLYm.js";import"./getRadiusAndStrokeWidthFromDot-B_TRGaiU.js";import"./ActiveShapeUtils-DnLJRiwf.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-B_AujER3.js";import"./uniqBy-gLmjoiP9.js";import"./iteratee-DAM7e3NH.js";import"./Cross-Cw_vUoRT.js";import"./Rectangle-BJ2YLML2.js";import"./util-Dxo8gN5i.js";import"./Sector-Cy7n_hv5.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Pt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};

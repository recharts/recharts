import{R as e}from"./iframe-wiglGnBh.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DcNyXe69.js";import{R as h}from"./zIndexSlice-DGL63V4L.js";import{C as g}from"./ComposedChart-BkMMlDzm.js";import{L as x}from"./Line-9lFzyWlx.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Bn4UFc1s.js";import{T as V}from"./Tooltip-CHvNNyUg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-CUoTvBNy.js";import"./Layer-nH5sm9p4.js";import"./resolveDefaultProps-BM8NmOex.js";import"./Text-BTuAOKpf.js";import"./DOMUtils-LT1AML3l.js";import"./isWellBehavedNumber-DsqaaTNJ.js";import"./Label-B3PbOJvm.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-jQgtLS9e.js";import"./index-Mz84GrVY.js";import"./index-s4-LlFgK.js";import"./types-BoamgyWM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BYFI-WHt.js";import"./throttle-BMNVPqSq.js";import"./RechartsWrapper-5SoXlYEo.js";import"./index-WWLocB5H.js";import"./index-1ZP6iUpr.js";import"./axisSelectors-BaS0q6Il.js";import"./CartesianChart-Us5vBUdh.js";import"./chartDataContext-JmkVpeXS.js";import"./CategoricalChart-D2_16EkL.js";import"./Curve-BWqxyQw0.js";import"./step-eMzlrjiD.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B9y47QYM.js";import"./useAnimationId-2tqnpEoJ.js";import"./ActivePoints-DHpr5egm.js";import"./Dot-BqBjCBos.js";import"./RegisterGraphicalItemId-BK4vqvvE.js";import"./ErrorBarContext-BdKRNCre.js";import"./GraphicalItemClipPath-RZ6a2McD.js";import"./SetGraphicalItem-BXbX8E7N.js";import"./getRadiusAndStrokeWidthFromDot-DbINMjnd.js";import"./ActiveShapeUtils-C95mhFam.js";import"./useElementOffset-D_K1pLUb.js";import"./uniqBy-DMsRc3l-.js";import"./iteratee-D4MnoddV.js";import"./Cross-DLj_PIJa.js";import"./Rectangle-Bid_fSIj.js";import"./util-Dxo8gN5i.js";import"./Sector-BQxZVz0K.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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

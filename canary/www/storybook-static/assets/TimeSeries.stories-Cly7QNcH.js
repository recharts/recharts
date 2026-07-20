import{R as e}from"./iframe-DSiB0Y2h.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DKaEKDyo.js";import{R as h}from"./zIndexSlice-DXbXK2p0.js";import{C as g}from"./ComposedChart-VI9g2q1H.js";import{L as x}from"./Line-DQiu1uRI.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DOzMXTTX.js";import{T as V}from"./Tooltip-D8Llh9Of.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-CTswAcYo.js";import"./Layer-GefPfHKN.js";import"./resolveDefaultProps-dV1CHodA.js";import"./Text-CK2osH-3.js";import"./DOMUtils-DPI9rQIs.js";import"./isWellBehavedNumber-CZNGJ9iq.js";import"./Label-SBQmZETs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DpR0ZeoC.js";import"./index-N88jlccS.js";import"./index-BxYFwyjs.js";import"./types-Ctc34oVc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BPUsumAR.js";import"./throttle-B3UghvKT.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-CKOYxrgU.js";import"./index-DX0fo1e7.js";import"./index-BwXkalY4.js";import"./axisSelectors-m-5JnBq3.js";import"./CartesianChart-BjQVh-35.js";import"./chartDataContext-DRuezjZY.js";import"./CategoricalChart-GJIpj0Il.js";import"./Curve-CSkrO1uF.js";import"./step-D7_MEDCW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DcXITJ0o.js";import"./useAnimationId-CcRzR4wj.js";import"./ActivePoints-B6ujEarC.js";import"./Dot-h09Lg4V6.js";import"./RegisterGraphicalItemId-ZES9vfqK.js";import"./ErrorBarContext-BQTwLW9q.js";import"./GraphicalItemClipPath-CUbr_GNl.js";import"./SetGraphicalItem-CMw9Vzf1.js";import"./getRadiusAndStrokeWidthFromDot-D73h4AtU.js";import"./ActiveShapeUtils-BbSbze6M.js";import"./useElementOffset-DgOlx547.js";import"./uniqBy-CyF01TCc.js";import"./iteratee-1FMy2Yxx.js";import"./Cross-tJLVE_Wj.js";import"./Rectangle-DI-L60n8.js";import"./util-Dxo8gN5i.js";import"./Sector-DLgetutF.js";const Yt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const _t=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,_t as __namedExportsOrder,Yt as default};

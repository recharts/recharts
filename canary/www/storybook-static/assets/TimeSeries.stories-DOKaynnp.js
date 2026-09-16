import{R as e}from"./iframe-DpsH3FWg.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-D8_Sc658.js";import{R as h}from"./zIndexSlice-DpXR3r86.js";import{C as g}from"./ComposedChart-CPIOfZdo.js";import{L as x}from"./Line-BXZUAWkK.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Cs9sdONk.js";import{T as V}from"./Tooltip-B-xTPBdJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-CWPiqkJL.js";import"./Layer-Btr6yg86.js";import"./resolveDefaultProps-B653NMBN.js";import"./Text-SIhZd4Wm.js";import"./DOMUtils-BqoTnLQ5.js";import"./isWellBehavedNumber-CtQQO4KW.js";import"./useId-T5MCLwe8.js";import"./useBackwardsCompatibleTheme-Buw_TzFQ.js";import"./Label-3DC01MfC.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DviGCp3_.js";import"./index-nXowbRrq.js";import"./index-DYUXUABx.js";import"./types-FBSj3Ggh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DrH2a5-v.js";import"./throttle-pd_IuHQK.js";import"./index-CIajmslP.js";import"./index-DxSZbnRs.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-WUMeUOBJ.js";import"./axisSelectors-Cnsws1ta.js";import"./index-CVZddw2l.js";import"./CartesianChart-C8K3fZMD.js";import"./chartDataContext-_uRDQIfr.js";import"./CategoricalChart-DsF0HvmF.js";import"./Curve-CkFcG6My.js";import"./step-DUO82dEI.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BAz_Z0dD.js";import"./useAnimationId-CkVnF8is.js";import"./ActivePoints-8WobBp4l.js";import"./Dot-ykdJ8Wuo.js";import"./RegisterGraphicalItemId-Byr_SbEj.js";import"./ErrorBarContext-Dy-Oq2cq.js";import"./GraphicalItemClipPath--FUz8cke.js";import"./SetGraphicalItem-eZDMBVc_.js";import"./getRadiusAndStrokeWidthFromDot-BIoTJvPK.js";import"./ActiveShapeUtils-DHwgxjaA.js";import"./useGraphicalItemIdentity-DH6n4cBQ.js";import"./useElementOffset-eYeZo5wP.js";import"./uniqBy-BuW3nUeI.js";import"./iteratee-Burh-v8j.js";import"./Cross-CV91Ua2U.js";import"./Rectangle-B1vLC_1K.js";import"./util-Dxo8gN5i.js";import"./Sector-BjUs49MP.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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

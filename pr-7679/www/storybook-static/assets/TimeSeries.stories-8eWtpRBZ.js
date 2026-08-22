import{R as e}from"./iframe-DXHKQ-h8.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Ckl7Pa3u.js";import{R as h}from"./zIndexSlice-CsQg_s5y.js";import{C as g}from"./ComposedChart-C6cxeCbV.js";import{L as x}from"./Line-BiDvAtOX.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-x1kkipsN.js";import{T as V}from"./Tooltip-CaMm8fLh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-eQGKlaa2.js";import"./Layer-D8Of9gCi.js";import"./resolveDefaultProps-CH3DJ1U7.js";import"./Text-Bb1JrkH_.js";import"./DOMUtils-BSgnm9w6.js";import"./isWellBehavedNumber-B2OYT9p4.js";import"./useId-DlJk-nhm.js";import"./useBackwardsCompatibleTheme-DuqY5Wqi.js";import"./Label-BCe67yO0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DLuwldtV.js";import"./index-BoMz0vXG.js";import"./index-Bfb_F_qW.js";import"./types-C9KPOeuA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B6yr5Yhh.js";import"./throttle-CSmQrAIR.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-NUOxXBTc.js";import"./index-D51whMVe.js";import"./index-DQazPbcg.js";import"./axisSelectors-C2FhXeDp.js";import"./CartesianChart-BAA2O-Wi.js";import"./chartDataContext-Co2nG42J.js";import"./CategoricalChart-njav6Y1l.js";import"./Curve-CiIvzF30.js";import"./step-Bw_C9qgc.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BnmUd_N9.js";import"./useAnimationId-WfbS1c84.js";import"./ActivePoints-BXDp0MVl.js";import"./Dot-yuxaqmcb.js";import"./RegisterGraphicalItemId-B_2bGmJg.js";import"./ErrorBarContext-CdeH4fn3.js";import"./GraphicalItemClipPath-BZQLFBTi.js";import"./SetGraphicalItem-CODvRDn4.js";import"./getRadiusAndStrokeWidthFromDot-C7lzhg_f.js";import"./ActiveShapeUtils-C_tGIq0b.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-CgmBroAF.js";import"./uniqBy-iZsqe27X.js";import"./iteratee-BWIQYiSv.js";import"./Cross-CKDUda6N.js";import"./Rectangle-CKUxhVqo.js";import"./util-Dxo8gN5i.js";import"./Sector-CDqnRj6s.js";const It={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const qt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,qt as __namedExportsOrder,It as default};

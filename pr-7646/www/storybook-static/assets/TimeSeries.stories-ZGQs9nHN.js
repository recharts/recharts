import{R as e}from"./iframe-CdVkyLHS.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CRNnSUZ9.js";import{R as h}from"./zIndexSlice-GOyP9Zss.js";import{C as g}from"./ComposedChart-CG8DoDIZ.js";import{L as x}from"./Line-Piz3hUqR.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-C_ybSH9a.js";import{T as V}from"./Tooltip-CA_3aYjj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-Cg3yJD5r.js";import"./Layer-DsEuCMxp.js";import"./resolveDefaultProps-CH_tZ1CV.js";import"./Text-Bg49R2O8.js";import"./DOMUtils-yV6fdCO6.js";import"./isWellBehavedNumber-CukO4dTL.js";import"./useBackwardsCompatibleTheme-BUV415Lc.js";import"./Label-Cwb8kt4E.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CnILDHp4.js";import"./index-QyElv-Xn.js";import"./index-DvCc_EAq.js";import"./types-D7MUQAXd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-nlBTJT3n.js";import"./throttle-CdLGvlu3.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DJIttxHk.js";import"./index-OMOk9pzv.js";import"./index-DysuFDaN.js";import"./axisSelectors-BJboZDv2.js";import"./CartesianChart-DH_QKR3e.js";import"./chartDataContext-vMtbxlvm.js";import"./CategoricalChart-Bmub6W6K.js";import"./Curve-BU_gswLL.js";import"./step-CTvr7swL.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B_5qg-lC.js";import"./useAnimationId-CnyNJ0d7.js";import"./ActivePoints-D2jscU_r.js";import"./Dot-J0nM858J.js";import"./RegisterGraphicalItemId-D7VKY1D2.js";import"./ErrorBarContext-BWl2zb09.js";import"./GraphicalItemClipPath-kU06yTtA.js";import"./SetGraphicalItem-CKTCd1Uv.js";import"./getRadiusAndStrokeWidthFromDot-Clc9jd4p.js";import"./ActiveShapeUtils-C96E8Hlz.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-hZq7XyZb.js";import"./uniqBy-DAdYZ9zP.js";import"./iteratee-Bb8Y4tsd.js";import"./Cross-CSXpNGes.js";import"./Rectangle-nloq3-mC.js";import"./util-Dxo8gN5i.js";import"./Sector-BmwK_MH9.js";const Ht={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const It=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,It as __namedExportsOrder,Ht as default};

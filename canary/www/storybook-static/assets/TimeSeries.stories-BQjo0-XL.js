import{R as e}from"./iframe-C20wDroG.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-bncj55mF.js";import{R as h}from"./zIndexSlice-Dn977bIM.js";import{C as g}from"./ComposedChart-fc9zkA9M.js";import{L as x}from"./Line-BK0Z6C9x.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CMJeOIiZ.js";import{T as V}from"./Tooltip-_ToFbj_m.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-BCVPeUYs.js";import"./Layer-DDCJtugd.js";import"./resolveDefaultProps-DUXs9b9S.js";import"./Text-DGWMJ0hU.js";import"./DOMUtils-CaGG5Hmm.js";import"./isWellBehavedNumber-CiTmvWUm.js";import"./useId-HPBRJy0D.js";import"./useBackwardsCompatibleTheme-CdR6FU4E.js";import"./Label-DkS9BWG5.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DPgbR3ka.js";import"./index-Drz6B1BJ.js";import"./index-D0HNPWdm.js";import"./types-BDuMvVkF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CDLV8c3e.js";import"./throttle-D_pKwmSO.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-ajeFxaVY.js";import"./index-B_Gj3SOI.js";import"./index-CwuSxHdI.js";import"./axisSelectors-D2d7y5tB.js";import"./CartesianChart-D0DqF69B.js";import"./chartDataContext-BN_dA9lB.js";import"./CategoricalChart-BPRT5cE8.js";import"./Curve-CmAw5S9J.js";import"./step-cmv5QLzJ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BeGp4Wik.js";import"./useAnimationId-Bc7mxzMe.js";import"./ActivePoints-Bxc8A2aK.js";import"./Dot-tDq1zpNX.js";import"./RegisterGraphicalItemId-CBXEWS4T.js";import"./ErrorBarContext-B7iknVLS.js";import"./GraphicalItemClipPath-DnJzFjkV.js";import"./SetGraphicalItem-DfmFtgCH.js";import"./getRadiusAndStrokeWidthFromDot-BXHe0lbi.js";import"./ActiveShapeUtils-BjalrG5Q.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-Dnes-XqG.js";import"./uniqBy-2EVv77Lm.js";import"./iteratee-CfZ0Y8VA.js";import"./Cross-D4jIbQ8y.js";import"./Rectangle-Bmy5AWRQ.js";import"./util-Dxo8gN5i.js";import"./Sector-B3XUnZrl.js";const It={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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

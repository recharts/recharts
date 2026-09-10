import{R as e}from"./iframe-5h9djFbt.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-C-anAgqA.js";import{R as h}from"./zIndexSlice-BdIKrmmY.js";import{C as g}from"./ComposedChart-DzFMSgfQ.js";import{L as x}from"./Line-B8MRMMxJ.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BcvXASmu.js";import{T as V}from"./Tooltip-BQkvIQ3b.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-B0pvT4G3.js";import"./Layer-CyvtfT-W.js";import"./resolveDefaultProps-P7Da5mqR.js";import"./Text-KAAJmctl.js";import"./DOMUtils-ccwVme2-.js";import"./isWellBehavedNumber-DStaytIC.js";import"./useId-C3MUzbkU.js";import"./useBackwardsCompatibleTheme-DY45QFX2.js";import"./Label-CP2XtCyN.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BBvGlV3x.js";import"./index-CEJvLeX_.js";import"./index-B9x0kJ-U.js";import"./types-CcKw46qs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BUXo475V.js";import"./throttle-BRkWLUiC.js";import"./index-BetN_RMo.js";import"./index-DkJjmLoR.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-QvnV0uNt.js";import"./axisSelectors-DjHfkPnH.js";import"./index-C__FEdkF.js";import"./CartesianChart-CEUQRdCg.js";import"./chartDataContext-Bq32LFRB.js";import"./CategoricalChart-DAp11J6f.js";import"./Curve-DtF4KeGP.js";import"./step-DzAe_mUU.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-s0U1kgXJ.js";import"./useAnimationId-B4WX31v5.js";import"./ActivePoints-W3o0JREG.js";import"./Dot-BTGCUhRH.js";import"./RegisterGraphicalItemId-zWnNyz48.js";import"./ErrorBarContext-COzjx-TB.js";import"./GraphicalItemClipPath-DH9zOtRz.js";import"./SetGraphicalItem-CXIeHIB6.js";import"./getRadiusAndStrokeWidthFromDot-PgyeTlLk.js";import"./ActiveShapeUtils-VwknAe2e.js";import"./useGraphicalItemIdentity-BGObpJ42.js";import"./useElementOffset-BuZJXmgl.js";import"./uniqBy-CIugontL.js";import"./iteratee-LMEmminV.js";import"./Cross-Cvbxo2SM.js";import"./Rectangle-igHY6SME.js";import"./util-Dxo8gN5i.js";import"./Sector-QzXYvk4Z.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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

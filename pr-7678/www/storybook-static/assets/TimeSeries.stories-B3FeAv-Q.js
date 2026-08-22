import{R as e}from"./iframe-ZEpSIPPd.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-rWesO0MY.js";import{R as h}from"./zIndexSlice-BjIiWKqJ.js";import{C as g}from"./ComposedChart-DfYyrCdH.js";import{L as x}from"./Line-CI-w3eB1.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BCV9yzNX.js";import{T as V}from"./Tooltip-BXklL5Cj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-B5C14IH-.js";import"./Layer-BhDP8tdE.js";import"./resolveDefaultProps-BfzNSowR.js";import"./Text-BkbZubVW.js";import"./DOMUtils-DDyTL2Su.js";import"./isWellBehavedNumber-BXmyHjL9.js";import"./useId-DFrG6yke.js";import"./useBackwardsCompatibleTheme-6dZyRN7A.js";import"./Label-DozjEBv8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BvS-888Y.js";import"./index-DwRwpWpN.js";import"./index-BYZIueV1.js";import"./types-PAtN0CzN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DKo3nyKY.js";import"./throttle-c8LVmlRW.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BN48ENvM.js";import"./index-BaEUmZiD.js";import"./index-GhGxj3CA.js";import"./axisSelectors-kRjPN5q_.js";import"./CartesianChart-BcBN8Odf.js";import"./chartDataContext-6sDrIT9e.js";import"./CategoricalChart-DKY1LJu7.js";import"./Curve-BJ_Zw60j.js";import"./step-C4QDvCzF.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BTDiJp51.js";import"./useAnimationId-DTOSNt54.js";import"./ActivePoints-LnlHxcy0.js";import"./Dot-YOcb-22K.js";import"./RegisterGraphicalItemId-gZSXozCr.js";import"./ErrorBarContext-CVqGi1a9.js";import"./GraphicalItemClipPath-DI_H7WUy.js";import"./SetGraphicalItem-C95qHxIx.js";import"./getRadiusAndStrokeWidthFromDot-BLf7D-Zv.js";import"./ActiveShapeUtils-D9QeB7oI.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-DQwuldho.js";import"./uniqBy-CJQjOwF2.js";import"./iteratee-9quGMIsm.js";import"./Cross-BCEMcaNt.js";import"./Rectangle-CSNmICnV.js";import"./util-Dxo8gN5i.js";import"./Sector-DmVcb_8a.js";const It={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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

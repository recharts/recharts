import{R as e}from"./iframe-IEvG1YpM.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DtybEOgK.js";import{R as h}from"./zIndexSlice-Cihis5J4.js";import{C as g}from"./ComposedChart-BBH3eYaa.js";import{L as x}from"./Line-CUy9vJUP.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-TRidtPn4.js";import{T as V}from"./Tooltip-CuSaJkwq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-CPXu2kHS.js";import"./Layer-BKPgTeR2.js";import"./resolveDefaultProps-bAVDGQbe.js";import"./Text-Dae-pI4X.js";import"./DOMUtils-DCB2CSvd.js";import"./isWellBehavedNumber-tc8VJoOF.js";import"./useId-CcNvwQMQ.js";import"./useBackwardsCompatibleTheme-BUS5d1Jo.js";import"./Label-CuRdPt5D.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DyfcVau_.js";import"./index-POEf-RyB.js";import"./index-CK_MpSkX.js";import"./types-CuB5x_0O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CllAnVPd.js";import"./throttle-By8-YJwd.js";import"./index-BBOVdE4u.js";import"./index-DwR3lO_P.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-CcfL5xRi.js";import"./axisSelectors-Df8E9bUD.js";import"./index-DdsMrJb_.js";import"./CartesianChart-DCzoDDQF.js";import"./chartDataContext-xd-wjTQ9.js";import"./CategoricalChart-DdwxNdAm.js";import"./Curve--AmmIjVJ.js";import"./step-DtrjPrha.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-UW_5IIXp.js";import"./useAnimationId-qJZeznSq.js";import"./ActivePoints-C4j-E_4c.js";import"./Dot-Dp0Tai_6.js";import"./RegisterGraphicalItemId-CAU5eRLw.js";import"./ErrorBarContext-BWjTRxXS.js";import"./GraphicalItemClipPath-BuVEsdiO.js";import"./SetGraphicalItem-Du-9XCGr.js";import"./getRadiusAndStrokeWidthFromDot-DStXY72J.js";import"./ActiveShapeUtils-BSvyuOAY.js";import"./useGraphicalItemIdentity-BKM5eyt0.js";import"./useElementOffset-D5R4rosy.js";import"./uniqBy-CGJXAfXB.js";import"./iteratee-ilBKujfJ.js";import"./Cross-D5MxY4H5.js";import"./Rectangle-BjOMJxA-.js";import"./util-Dxo8gN5i.js";import"./Sector-BZhYQRRH.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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

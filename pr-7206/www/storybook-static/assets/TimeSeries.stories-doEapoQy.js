import{e}from"./iframe-h6RyBADW.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-C2Gh6oi-.js";import{R as y}from"./arrayEqualityCheck-uwQbgtgj.js";import{C as g}from"./ComposedChart-TyzmibOv.js";import{L as x}from"./Line-COeb2reN.js";import{R as S}from"./RechartsHookInspector-BC4p3bxF.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-B_V_eZSW.js";import{T as V}from"./Tooltip-e_pYBj_B.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-D_8tywby.js";import"./Layer-CUjlXR2J.js";import"./resolveDefaultProps-B6F9Tq8Y.js";import"./Text-DawNGEOi.js";import"./DOMUtils-CZxQTbW4.js";import"./Label-BhurGsu4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-wKcmD7IL.js";import"./zIndexSlice-CGsXWVT5.js";import"./immer-Bfj3ZeVH.js";import"./types-QtI883v9.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CB3omCIm.js";import"./hooks-DTtRusoK.js";import"./axisSelectors-BdNfc6Ph.js";import"./RechartsWrapper-jkN30DDj.js";import"./index-D7nUYq7y.js";import"./CartesianChart-MMvNBqn6.js";import"./chartDataContext-CxcxsnMq.js";import"./CategoricalChart-B30uA3Pl.js";import"./ReactUtils-CdvzfmpN.js";import"./ActivePoints-OkqDIVjO.js";import"./Dot-D8rKYkPw.js";import"./RegisterGraphicalItemId-IGv_NVoe.js";import"./ErrorBarContext-B3I7qVXU.js";import"./GraphicalItemClipPath-DyVzZO4a.js";import"./SetGraphicalItem-CuEfojVc.js";import"./useAnimationId-B4b4HoxB.js";import"./getRadiusAndStrokeWidthFromDot-D2N5NH_l.js";import"./ActiveShapeUtils-BzQm0dMt.js";import"./isPlainObject-BxrxHDzC.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bxs0ztC_.js";import"./Trapezoid-6Ll4yFmM.js";import"./Sector-Dimczp4z.js";import"./Symbols-CkhqMYHd.js";import"./symbol-CuOhUCvG.js";import"./step-BtU2_rsP.js";import"./Curve-1roVG56o.js";import"./index-DLs_tRY-.js";import"./ChartSizeDimensions-BDuSdsYs.js";import"./OffsetShower-MxH05TXA.js";import"./PlotAreaShower-CRP0xEOQ.js";import"./useElementOffset-B4f3I-gy.js";import"./uniqBy-Czbdu-mV.js";import"./iteratee-Ds-0edgw.js";import"./Cross-CVI905Tb.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const zt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,zt as __namedExportsOrder,jt as default};

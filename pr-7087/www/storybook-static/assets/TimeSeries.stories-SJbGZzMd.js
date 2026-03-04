import{e}from"./iframe-kEab-1de.js";import{X as s}from"./XAxis-B2e8gJVO.js";import{R as y}from"./arrayEqualityCheck-CYrh2cjl.js";import{C as g}from"./ComposedChart-CBB2EZz-.js";import{L as x}from"./Line-WaM8nLHp.js";import{R as S}from"./RechartsHookInspector-CC5UoVXz.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-sz-3qxpi.js";import{T as V}from"./Tooltip-TX44mn0w.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-3YcfdTBf.js";import"./Layer-Dvp9QxpM.js";import"./resolveDefaultProps-D3Hyj-pA.js";import"./Text-DdI2ODY4.js";import"./DOMUtils-WUqQkZq5.js";import"./Label-CVjBmkuR.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DOe9AOBU.js";import"./zIndexSlice-BaIw-MhD.js";import"./immer-C4eWxQIR.js";import"./types-B8qtknYP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BrUKQsnm.js";import"./hooks-CJ2fHPGA.js";import"./axisSelectors-Tp_fxU6n.js";import"./RechartsWrapper-CML9BKQL.js";import"./index-D1RE61xO.js";import"./CartesianChart-BAMega6b.js";import"./chartDataContext-DvTCGmxA.js";import"./CategoricalChart-C5mOLgQl.js";import"./ReactUtils-BiGj3rxx.js";import"./ActivePoints-E55BUQ9b.js";import"./Dot-oRWifsYs.js";import"./RegisterGraphicalItemId-Z8hxEYqU.js";import"./ErrorBarContext-CSP8NLhc.js";import"./GraphicalItemClipPath-CrzbaPUK.js";import"./SetGraphicalItem-D6ZVSQU1.js";import"./useAnimationId-DmziQOA2.js";import"./getRadiusAndStrokeWidthFromDot-CUkSAeld.js";import"./ActiveShapeUtils-DS-9aDIa.js";import"./isPlainObject-DYt69ZGI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bb8G2Q0h.js";import"./Trapezoid-DOWeSYXh.js";import"./Sector-DyyTlWTh.js";import"./Symbols-eEknJRPm.js";import"./symbol-Mwvb6Rn8.js";import"./step-BiRjne67.js";import"./Curve-B815kJjs.js";import"./index-DRJo_4d4.js";import"./ChartSizeDimensions-D96mYFyL.js";import"./OffsetShower-Db9WbllM.js";import"./PlotAreaShower-_gQbuJS1.js";import"./useElementOffset-D67KLAg1.js";import"./uniqBy-fOXykw6h.js";import"./iteratee-DB8hmdOG.js";import"./Cross-Cu4bh41C.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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

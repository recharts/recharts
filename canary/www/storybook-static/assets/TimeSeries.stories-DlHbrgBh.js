import{e}from"./iframe-BqavfRSI.js";import{X as s}from"./XAxis-DMyHdO-k.js";import{R as y}from"./arrayEqualityCheck-Ra3gjxaW.js";import{C as g}from"./ComposedChart-B1SQxHiJ.js";import{L as x}from"./Line-DNpMvcz0.js";import{R as S}from"./RechartsHookInspector-DIZI_dr5.js";import{M as E,N as M,O as r,P as A,Q as C,R as k,S as b,T as w,U as D}from"./axisSelectors-CrlizjCS.js";import{T as O}from"./Tooltip-lF-68z_O.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BagVy590.js";import"./CartesianAxis--LdiM4X3.js";import"./Layer-7F20iT3S.js";import"./Text-D8aeDJgV.js";import"./DOMUtils-BJ4FDKUp.js";import"./Label-DNJA6zIC.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BDqdije3.js";import"./zIndexSlice-cuW5CNY3.js";import"./types-etyYATxu.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-BhizAxMH.js";import"./RechartsWrapper-BQN53ECK.js";import"./CartesianChart-ANLepPjj.js";import"./chartDataContext-eZIgvl_0.js";import"./CategoricalChart-IGjGR71r.js";import"./ReactUtils-wyfG9-H0.js";import"./ActivePoints-OGEKIs-O.js";import"./Dot-JmokcpW7.js";import"./RegisterGraphicalItemId-BslGmMBw.js";import"./ErrorBarContext-CMc8E4Ed.js";import"./GraphicalItemClipPath-yqNdVZ5Z.js";import"./SetGraphicalItem-Chc8WLtN.js";import"./useAnimationId-CE6HvtJ3.js";import"./getRadiusAndStrokeWidthFromDot-D8tTG8Mp.js";import"./ActiveShapeUtils-Dcqmnzwc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CxU_uLMj.js";import"./Trapezoid-B5zHDmOP.js";import"./Sector-BUeJdgSe.js";import"./Symbols-Dkh1Olqs.js";import"./Curve-Bl7M7m7v.js";import"./index-BwE92fQv.js";import"./ChartSizeDimensions-uf7awrTX.js";import"./OffsetShower-CmxTasWx.js";import"./PlotAreaShower-RwBV7968.js";import"./useElementOffset-DWXh0cP9.js";import"./iteratee-CEGyMYpE.js";import"./Cross-Ceg3F-Eh.js";const It={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Lt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Lt as __namedExportsOrder,It as default};

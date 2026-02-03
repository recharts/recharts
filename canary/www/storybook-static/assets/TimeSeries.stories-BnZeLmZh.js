import{e}from"./iframe-BP2nTpch.js";import{X as s}from"./XAxis-CXtp3tfD.js";import{R as y}from"./arrayEqualityCheck-uIVE1gVz.js";import{C as g}from"./ComposedChart-DZabq8it.js";import{L as x}from"./Line-DWbyZqWl.js";import{R as S}from"./RechartsHookInspector-DAq4QekR.js";import{M as E,N as M,O as r,P as A,Q as C,R as k,S as b,T as w,U as D}from"./axisSelectors-D2SDnJRJ.js";import{T as O}from"./Tooltip-WOVTHsaw.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-pblYALGE.js";import"./CartesianAxis-Dig3Hc3j.js";import"./Layer-2wKCZbds.js";import"./Text-DczL9Pqa.js";import"./DOMUtils-LYwP3kAp.js";import"./Label-CpYvd4nZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-571M2aB4.js";import"./zIndexSlice-4Wz4F4SZ.js";import"./types-7mx8q_Dg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-C4-fdNyt.js";import"./RechartsWrapper-B99qXj5r.js";import"./CartesianChart-FpzVruv-.js";import"./chartDataContext-ijRrdm1r.js";import"./CategoricalChart-Dwlif2jD.js";import"./ReactUtils-8y56L2KY.js";import"./ActivePoints-wLrf3G7J.js";import"./Dot-UJc7CKGe.js";import"./RegisterGraphicalItemId-BxTYuwSX.js";import"./ErrorBarContext-NtZ5hNP2.js";import"./GraphicalItemClipPath-CFJzNYVk.js";import"./SetGraphicalItem-Cd_T2Vk8.js";import"./useAnimationId-BKvpnK5Z.js";import"./getRadiusAndStrokeWidthFromDot-CWkvHCAb.js";import"./ActiveShapeUtils-CDlOYSnz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-OJy3hMDx.js";import"./Trapezoid-n9rYv4uE.js";import"./Sector-iFxFptm9.js";import"./Symbols-99I1PudQ.js";import"./Curve-DDVqNpBq.js";import"./index-B3FDMrYE.js";import"./ChartSizeDimensions-Dleof4F0.js";import"./OffsetShower-DpRHCxQ6.js";import"./PlotAreaShower-DWs7AY7M.js";import"./useElementOffset-BA3_qNb-.js";import"./iteratee-oCzkJu6y.js";import"./Cross-BYyTd8EV.js";const It={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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

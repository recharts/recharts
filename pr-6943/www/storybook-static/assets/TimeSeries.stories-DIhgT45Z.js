import{e}from"./iframe-CdO7Aj1B.js";import{X as s}from"./XAxis-B3LqZDEz.js";import{R as y}from"./arrayEqualityCheck-DSjGda-c.js";import{C as g}from"./ComposedChart-D7sGpZBQ.js";import{L as x}from"./Line-hwrXWpiM.js";import{R as S}from"./RechartsHookInspector-8WkUE3nw.js";import{M as E,N as M,O as r,P as A,Q as C,R as k,S as b,T as w,U as D}from"./axisSelectors-Cz6m7_H_.js";import{T as O}from"./Tooltip-BkDTaU7p.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Dyq-HTDO.js";import"./CartesianAxis-C5xy13MG.js";import"./Layer-oFeUaaGY.js";import"./Text-gQNQGlDJ.js";import"./DOMUtils-Dc62r5Je.js";import"./Label-BR3nHz9_.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-Dre2jW6R.js";import"./zIndexSlice-Cqlz5Qvk.js";import"./types-DFIEYgnV.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-ByFk5pNE.js";import"./RechartsWrapper-CFINL4TS.js";import"./CartesianChart-K1VjCNnA.js";import"./chartDataContext-CXvLn27W.js";import"./CategoricalChart-CJknGgTn.js";import"./ReactUtils-D5Zl77ai.js";import"./ActivePoints-qmc9cdem.js";import"./Dot-BR-Bd9Ri.js";import"./RegisterGraphicalItemId-DmbEzUCY.js";import"./ErrorBarContext-DHKDzrNN.js";import"./GraphicalItemClipPath-C-aricuY.js";import"./SetGraphicalItem-Bu99Otwj.js";import"./useAnimationId-Ci_KtL1a.js";import"./getRadiusAndStrokeWidthFromDot-CcsWdYYV.js";import"./ActiveShapeUtils-BhQSb30R.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Ct8C5CYW.js";import"./Trapezoid-UgLOqUt_.js";import"./Sector-D64_Ht99.js";import"./Symbols-DohrOtO1.js";import"./Curve-BvwXZ_2X.js";import"./index-B2k25Twf.js";import"./ChartSizeDimensions-ximU9rqf.js";import"./OffsetShower-zZ47YVPO.js";import"./PlotAreaShower-D_H3WfKK.js";import"./useElementOffset-C9w_HigE.js";import"./iteratee-Cj9gdGcD.js";import"./Cross-DnWet5eO.js";const It={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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

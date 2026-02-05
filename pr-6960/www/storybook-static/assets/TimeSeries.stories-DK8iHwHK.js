import{e}from"./iframe-BDkb7FkG.js";import{X as s}from"./XAxis-CmGav0vS.js";import{R as y}from"./arrayEqualityCheck-B0TJyWD5.js";import{C as g}from"./ComposedChart-Ccent4P8.js";import{L as x}from"./Line-CgXkRzu8.js";import{R as S}from"./RechartsHookInspector-BNEsfHz6.js";import{M as E,N as M,O as r,P as A,Q as C,R as k,S as b,T as w,U as D}from"./axisSelectors-BNLmthUg.js";import{T as O}from"./Tooltip-DLj7yf-b.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BeK5tOdD.js";import"./CartesianAxis-CqOMvTf3.js";import"./Layer-DN29fGq2.js";import"./Text-DNxSgO5d.js";import"./DOMUtils-DkX8_PYo.js";import"./Label-557v0PPI.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CSKx51xZ.js";import"./zIndexSlice-CEfchlTx.js";import"./types-lD78ZLRW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-DxXidz5r.js";import"./RechartsWrapper-mZGj0Z3E.js";import"./CartesianChart-D8s7iQvN.js";import"./chartDataContext-BN0HTO99.js";import"./CategoricalChart-QMn_55Fk.js";import"./ReactUtils-Bu2m7OLZ.js";import"./ActivePoints-CkZqhQS2.js";import"./Dot-Cj5br_BU.js";import"./RegisterGraphicalItemId-CVSGS5U1.js";import"./ErrorBarContext-Cklgrfin.js";import"./GraphicalItemClipPath-PGYoXjM4.js";import"./SetGraphicalItem-D0--qzX6.js";import"./useAnimationId-Dt_DMrVN.js";import"./getRadiusAndStrokeWidthFromDot-B9swL3GN.js";import"./ActiveShapeUtils-BT6H0snO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CdEMe32h.js";import"./Trapezoid-BYTF93yz.js";import"./Sector-BDLqy63u.js";import"./Symbols-cZo6AVu-.js";import"./Curve-BhcGGWB4.js";import"./index-BiD0RfS5.js";import"./ChartSizeDimensions-DMf6nTY3.js";import"./OffsetShower-CLob0hRN.js";import"./PlotAreaShower-DdbC7e3E.js";import"./useElementOffset-Cm-nycv7.js";import"./iteratee-BCcKgiDG.js";import"./Cross-D9nqiwKw.js";const It={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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

import{e}from"./iframe-DCqI0XZE.js";import{R as n}from"./arrayEqualityCheck-HYppUqbL.js";import{C as s}from"./ComposedChart-BQWkPeDZ.js";import{C as p}from"./CartesianGrid-DdImbUj4.js";import{X as c}from"./XAxis-v6adQsXq.js";import{Y as f}from"./YAxis-B8A2N8DW.js";import{R as l}from"./ReferenceDot-59tfjSXO.js";import{R as h}from"./RechartsHookInspector-fFyRgJJZ.js";import{p as d}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DeYA34uT.js";import"./PolarUtils-CVPwvSfi.js";import"./RechartsWrapper-CqZMRsqw.js";import"./hooks-D1LIxGLf.js";import"./axisSelectors-fdj65aw8.js";import"./zIndexSlice-DaD55gZL.js";import"./CartesianChart-DjU-EYVa.js";import"./chartDataContext-T8I8ugzh.js";import"./CategoricalChart-3Iob9H8U.js";import"./CartesianAxis-fqcCbsgg.js";import"./Layer-BuGX0g6x.js";import"./Text-CDyXfqgn.js";import"./DOMUtils-B_HAxUS-.js";import"./Label-4-POpI1D.js";import"./ZIndexLayer-C1uRVibY.js";import"./types-DHuf88Dj.js";import"./Dot-Bi8GIran.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BSYEM6yU.js";import"./ChartSizeDimensions-lrWbrtxv.js";import"./OffsetShower-bO0_8mku.js";import"./PlotAreaShower-CRs_o2Tz.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,Q={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const {
      findByText
    } = within(canvasElement);
    /**
     * assert that when ifOverflow="extendDomain" 1900 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const V=["IfOverflow"];export{t as IfOverflow,V as __namedExportsOrder,Q as default};

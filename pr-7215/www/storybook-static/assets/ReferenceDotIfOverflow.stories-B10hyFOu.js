import{e}from"./iframe-BziMfoUa.js";import{g as n}from"./arrayEqualityCheck-jGW3YXEm.js";import{C as s}from"./ComposedChart-DS1ZldOY.js";import{p}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-Bxirurkp.js";import{X as f}from"./XAxis-zue1oO_9.js";import{Y as l}from"./YAxis-Cam7yyHt.js";import{R as h}from"./ReferenceDot-CYJtnJ0a.js";import{R as d}from"./RechartsHookInspector-C7iBq9Tv.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BqM-Yvij.js";import"./immer-Bs1CBStC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Duw6h7Bm.js";import"./index-BIuRyLTB.js";import"./hooks-_tZAqQmm.js";import"./axisSelectors-CAcjMuVN.js";import"./d3-scale-GlbhO23R.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-lEo1dtRN.js";import"./renderedTicksSlice-v3j9k7Mr.js";import"./CartesianChart-Cq-jUzWL.js";import"./chartDataContext-Cp7Sw1KM.js";import"./CategoricalChart-BjhCCKH7.js";import"./CartesianAxis-CBXn4WUR.js";import"./Layer-CoMuIaZe.js";import"./Text-fxmSEe5L.js";import"./DOMUtils-c_Zm-hwi.js";import"./Label-Qwg870Bc.js";import"./ZIndexLayer-CIYsspBg.js";import"./types-CX5BQ__A.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-3fkMyAwB.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Cu69lm6g.js";import"./ChartSizeDimensions-DfprWSX6.js";import"./OffsetShower-Cr3DxjzZ.js";import"./PlotAreaShower-OmwxkN4u.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const oe=["IfOverflow"];export{t as IfOverflow,oe as __namedExportsOrder,re as default};

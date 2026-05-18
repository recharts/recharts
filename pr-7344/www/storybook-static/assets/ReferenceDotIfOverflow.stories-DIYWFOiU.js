import{e}from"./iframe-DZ8hthY-.js";import{g as n}from"./arrayEqualityCheck-CM4xUg98.js";import{C as s}from"./ComposedChart-BBz9TwIo.js";import{p}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-AfBrBDPo.js";import{X as f}from"./XAxis-miaKL81g.js";import{Y as l}from"./YAxis-DtEBtR9E.js";import{R as h}from"./ReferenceDot-ZsHjN9dg.js";import{R as d}from"./RechartsHookInspector-UTj_zoVi.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B_ys-f75.js";import"./immer-BecrFbrr.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BUTuEf4Y.js";import"./index-D76bsI4z.js";import"./hooks-DoB3DHlQ.js";import"./axisSelectors-DgKTbZDy.js";import"./d3-scale-DZsU5NlZ.js";import"./zIndexSlice-DRYSH0d1.js";import"./renderedTicksSlice-B11M6loL.js";import"./CartesianChart-zFbedmPR.js";import"./chartDataContext-CrXAevUQ.js";import"./CategoricalChart-Bvtk9acs.js";import"./CartesianAxis-CAIPbX_H.js";import"./Layer-CVDrdQdQ.js";import"./Text-CCJtZgZH.js";import"./DOMUtils-DNsRktQS.js";import"./Label-NDKa2SGb.js";import"./ZIndexLayer-CigE4wdP.js";import"./types-CeA2W1WE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-CK1-CRkK.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DZqpEK_T.js";import"./ChartSizeDimensions-ULUEOeMz.js";import"./OffsetShower-BU-kozBz.js";import"./PlotAreaShower-BchYlFwA.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const re=["IfOverflow"];export{t as IfOverflow,re as __namedExportsOrder,te as default};

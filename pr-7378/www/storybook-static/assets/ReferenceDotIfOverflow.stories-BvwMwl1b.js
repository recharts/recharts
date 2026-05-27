import{e}from"./iframe-oV1i-tzu.js";import{g as n}from"./arrayEqualityCheck-Dfz61M-V.js";import{C as s}from"./ComposedChart-CghDMMCH.js";import{p}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-D9DyNXZ-.js";import{X as f}from"./XAxis-DW0bS2aQ.js";import{Y as l}from"./YAxis-BMPOd6W0.js";import{R as h}from"./ReferenceDot-C2AfAcyO.js";import{R as d}from"./RechartsHookInspector-1T59QrJN.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cn2RP2Pv.js";import"./immer-Ct3YneiL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Saljze2a.js";import"./index-DdCYMcV3.js";import"./hooks-B5b3yGZZ.js";import"./axisSelectors-BRcov9Qp.js";import"./d3-scale-BCcM-CgQ.js";import"./zIndexSlice-CXZMcCd3.js";import"./renderedTicksSlice-C78Emj3z.js";import"./CartesianChart-DROGNedD.js";import"./chartDataContext-DEEDOj20.js";import"./CategoricalChart-otVHfWKe.js";import"./CartesianAxis-DOaYzv5V.js";import"./Layer-e51vonqH.js";import"./Text-rK0alIz0.js";import"./DOMUtils-DKzrOEzB.js";import"./Label-C9DqArbR.js";import"./ZIndexLayer-Hy5H_WVm.js";import"./types-BU-8R6yi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-3SDu6TG_.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DHpYxSIP.js";import"./ChartSizeDimensions-COgON8GA.js";import"./OffsetShower-CXxqX1ML.js";import"./PlotAreaShower-DiLwgL_i.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

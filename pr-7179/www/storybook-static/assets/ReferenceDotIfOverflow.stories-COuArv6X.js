import{e}from"./iframe-C27-mxY1.js";import{R as n}from"./arrayEqualityCheck-D-5eU_dz.js";import{C as s}from"./ComposedChart-KJkIi4eH.js";import{C as p}from"./CartesianGrid-BenP0TUi.js";import{X as c}from"./XAxis-Bkm5Gu7p.js";import{Y as f}from"./YAxis-CPvAYGY0.js";import{R as l}from"./ReferenceDot-FZC4xFLO.js";import{R as h}from"./RechartsHookInspector-C_T85NFo.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B1dYXzyb.js";import"./immer-CWybgQyF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BXh7or_8.js";import"./index-Cipx1Q0g.js";import"./hooks-DsYJGE2Z.js";import"./axisSelectors-DwTIaSff.js";import"./d3-scale-OsBLx27H.js";import"./zIndexSlice-BLW0sC1L.js";import"./renderedTicksSlice-CUE3MGhg.js";import"./CartesianChart-D9sILVKg.js";import"./chartDataContext-YAUKbSg3.js";import"./CategoricalChart-CJAeAbHf.js";import"./CartesianAxis-DZAE-TXK.js";import"./Layer-DIVtJdsU.js";import"./Text-CElC0_ua.js";import"./DOMUtils-D5gfPOoi.js";import"./Label-B6Z4EDvc.js";import"./ZIndexLayer-B-pky4ZU.js";import"./types-DbJv915h.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-DiMYf5U7.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-B878aojC.js";import"./ChartSizeDimensions-DFVuZGv4.js";import"./OffsetShower-r-mNA0Bt.js";import"./PlotAreaShower-ulVkY6PA.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

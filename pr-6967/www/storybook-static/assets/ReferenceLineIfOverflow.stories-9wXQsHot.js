import{e}from"./iframe-C-p_RB-q.js";import{R as n}from"./arrayEqualityCheck-B-MvrmN7.js";import{C as p}from"./ComposedChart-Bt7ixjRo.js";import{C as s}from"./CartesianGrid-BwIpVtPi.js";import{X as c}from"./XAxis-C08WqI39.js";import{Y as f}from"./YAxis-D8H0bjJG.js";import{L as l}from"./Line-f8-Tfw2u.js";import{R as d}from"./ReferenceLine-Cu2jB27S.js";import{R as h}from"./RechartsHookInspector-A7vZopTv.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BfiJbh6P.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DIdR0t3A.js";import"./hooks-DG7RHIxl.js";import"./axisSelectors-P0AOwwEl.js";import"./zIndexSlice-5lbCpu3W.js";import"./CartesianChart-DeBYB_B4.js";import"./chartDataContext-CVzSSW0I.js";import"./CategoricalChart-yUclNHQf.js";import"./CartesianAxis-B6zbzI9s.js";import"./Layer-C7f6suDu.js";import"./Text-DfkyYgyy.js";import"./DOMUtils-BepXqo9m.js";import"./Label-C5MK-SLm.js";import"./ZIndexLayer-DCWgaX-H.js";import"./types-GK0667Eh.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Dp-34n25.js";import"./ActivePoints-CNFNRQXL.js";import"./Dot-D0Fu4E1o.js";import"./RegisterGraphicalItemId-x_swwYN6.js";import"./ErrorBarContext-DqfvC5Ba.js";import"./GraphicalItemClipPath-DWus76r9.js";import"./SetGraphicalItem-B3lQSLw7.js";import"./useAnimationId-DU1HvgwT.js";import"./getRadiusAndStrokeWidthFromDot-6LmPg7Vv.js";import"./ActiveShapeUtils-CQt1QMv8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C3AEn-NX.js";import"./Trapezoid-3HlUouXc.js";import"./Sector-Dx36qTvv.js";import"./Symbols-pu40Z5kC.js";import"./Curve-p-GL7vDw.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-wD3bNdwk.js";import"./ChartSizeDimensions-CiN-UjJt.js";import"./OffsetShower-zEoXuM_S.js";import"./PlotAreaShower-Di2aU-hi.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <Line dataKey="uv" />
          <ReferenceLine ifOverflow="extendDomain" y={1700} />
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
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const he=["IfOverflow"];export{t as IfOverflow,he as __namedExportsOrder,de as default};

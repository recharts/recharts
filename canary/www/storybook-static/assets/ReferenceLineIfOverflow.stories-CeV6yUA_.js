import{e}from"./iframe-DG5XGAD6.js";import{R as n}from"./arrayEqualityCheck-j51cHR5x.js";import{C as p}from"./ComposedChart-CB1EKJXL.js";import{C as s}from"./CartesianGrid-Cc33JTQ2.js";import{X as c}from"./XAxis-oYzB5LXw.js";import{Y as f}from"./YAxis-CCH0cAJm.js";import{L as l}from"./Line-B4ZoNHaw.js";import{R as d}from"./ReferenceLine-C84Yetr-.js";import{R as h}from"./RechartsHookInspector-YgQTDZfw.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DwLx5uNW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BwgBVkto.js";import"./hooks-CabgqhJI.js";import"./axisSelectors-pumdcMrp.js";import"./zIndexSlice-DIZTBSXC.js";import"./CartesianChart-DBiWbn6Y.js";import"./chartDataContext-CNLpatE7.js";import"./CategoricalChart-DngyMm0O.js";import"./CartesianAxis-a2JFC2mr.js";import"./Layer-CzlbLnCA.js";import"./Text-BWrPtZHP.js";import"./DOMUtils-Qi6quj9W.js";import"./Label-bn2tJ_cj.js";import"./ZIndexLayer-CKRqVJn0.js";import"./types-D0CjTngR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Vfgvf3cC.js";import"./ActivePoints-Bx-JcGPq.js";import"./Dot-BL1VekhN.js";import"./RegisterGraphicalItemId-BNmuyZFV.js";import"./ErrorBarContext-DyIY829R.js";import"./GraphicalItemClipPath-C48puZ8B.js";import"./SetGraphicalItem-Dt76N-O-.js";import"./useAnimationId-NyrgIauS.js";import"./getRadiusAndStrokeWidthFromDot-CqQuGbib.js";import"./ActiveShapeUtils-Cyi76-oO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-xQMUTm.js";import"./Trapezoid-C7Z3OQT2.js";import"./Sector-B5if7fUR.js";import"./Symbols-C5H0HNIV.js";import"./Curve-BnD4_LTQ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-ZiVRns4Q.js";import"./ChartSizeDimensions-C2G7tyo6.js";import"./OffsetShower-BRHEzN4x.js";import"./PlotAreaShower-nvVM3hzT.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

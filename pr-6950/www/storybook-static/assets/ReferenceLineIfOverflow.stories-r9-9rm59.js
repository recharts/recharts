import{e}from"./iframe-CBadok3R.js";import{R as n}from"./arrayEqualityCheck-D8DZf4E7.js";import{C as p}from"./ComposedChart-Dc_UJsoP.js";import{C as s}from"./CartesianGrid-NQ1HzpRF.js";import{X as c}from"./XAxis-CuDJTYDf.js";import{Y as f}from"./YAxis-CkBODHFa.js";import{L as l}from"./Line-vL2LKnJQ.js";import{R as d}from"./ReferenceLine-CJJRfYms.js";import{R as h}from"./RechartsHookInspector-Ccr9vg9I.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DOVzV-iD.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-BOMW4Wfi.js";import"./hooks-CvcnYJr5.js";import"./axisSelectors-7aa3p4xy.js";import"./zIndexSlice-Cb0fYcD4.js";import"./CartesianChart-DhdNdBtI.js";import"./chartDataContext-PjfwFb0T.js";import"./CategoricalChart-DgHJ04hm.js";import"./CartesianAxis-BWCbP_kU.js";import"./Layer-CZpxdYtD.js";import"./Text-CvdY0hNo.js";import"./DOMUtils-DOxIp63n.js";import"./Label-B9arnFZu.js";import"./ZIndexLayer-gNsJWqo_.js";import"./types-D0Nc3U-x.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BQuPA_dW.js";import"./ActivePoints-C4zMx6Rr.js";import"./Dot-D8cjCII1.js";import"./RegisterGraphicalItemId-BOD2PtEe.js";import"./ErrorBarContext-DNzUHuOB.js";import"./GraphicalItemClipPath-BGNJr3YU.js";import"./SetGraphicalItem-tnjDANmy.js";import"./useAnimationId-DFBNL1tZ.js";import"./getRadiusAndStrokeWidthFromDot-B43QJ_Z5.js";import"./ActiveShapeUtils-ZvkivxeS.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DyKJpDnd.js";import"./Trapezoid-BHZLmvdE.js";import"./Sector-hPIyOnR6.js";import"./Symbols-mEW1LXrD.js";import"./Curve-D-ytcwuR.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-AunjJ6Z9.js";import"./ChartSizeDimensions-rprNa-Kn.js";import"./OffsetShower-Dh3F56nH.js";import"./PlotAreaShower-CfQIUSEt.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

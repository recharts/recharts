import{e}from"./iframe-Bp7wnAMR.js";import{R as n}from"./arrayEqualityCheck-DxE10Oy_.js";import{C as p}from"./ComposedChart-DcPTD6P5.js";import{C as s}from"./CartesianGrid-BQDtpVC4.js";import{X as c}from"./XAxis-CYwkaB_4.js";import{Y as f}from"./YAxis-8qVMRpFM.js";import{L as l}from"./Line-CVqT-b_7.js";import{R as d}from"./ReferenceLine-BVB9fwnC.js";import{R as h}from"./RechartsHookInspector-DHfob8nJ.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-73ODOPj1.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-C4djzgpQ.js";import"./hooks-CNofKjzo.js";import"./axisSelectors-hHhjBbva.js";import"./zIndexSlice-CRBGxDjV.js";import"./CartesianChart-Dno3SfYe.js";import"./chartDataContext-nk0Pjs0Z.js";import"./CategoricalChart-CZ-Ak8iT.js";import"./CartesianAxis-j6YjD7Sk.js";import"./Layer-7joqFoN-.js";import"./Text-DwUQNXUe.js";import"./DOMUtils-dKVtaV9j.js";import"./Label-Tu9yek-h.js";import"./ZIndexLayer-CSCYRG22.js";import"./types-7BwnP8OD.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DrfTY3Od.js";import"./ActivePoints-Ctmx7Brj.js";import"./Dot-CALDlJiD.js";import"./RegisterGraphicalItemId-DL9uxaj9.js";import"./ErrorBarContext-D_srHYiC.js";import"./GraphicalItemClipPath-8AiwXJLZ.js";import"./SetGraphicalItem-Bo7sM5w_.js";import"./useAnimationId-goMb22IV.js";import"./getRadiusAndStrokeWidthFromDot-FCZZS-qa.js";import"./ActiveShapeUtils-B5LL2uEb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Ck3EAtYG.js";import"./Trapezoid-eO_srE68.js";import"./Sector-BGL47Yd8.js";import"./Symbols-B3gxOXiD.js";import"./Curve-C9HH72jI.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D6AxLi4e.js";import"./ChartSizeDimensions-DwflQZom.js";import"./OffsetShower-B6O-ZqIp.js";import"./PlotAreaShower-B0Yqyt4M.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

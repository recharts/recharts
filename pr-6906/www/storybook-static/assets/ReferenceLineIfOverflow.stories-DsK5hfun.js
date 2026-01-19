import{e}from"./iframe-DwwP6BDm.js";import{R as n}from"./arrayEqualityCheck-CXp0SSuS.js";import{C as p}from"./ComposedChart-DKKiCSIk.js";import{C as s}from"./CartesianGrid-1armELAk.js";import{X as c}from"./XAxis-CWc7NM0U.js";import{Y as f}from"./YAxis-BtN4txUd.js";import{L as l}from"./Line-CEmF7sWe.js";import{R as d}from"./ReferenceLine-BEB6nSFG.js";import{R as h}from"./RechartsHookInspector-CJI_KtjH.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-fclRL42w.js";import"./PolarUtils-Dg8SPN1d.js";import"./RechartsWrapper-DfwiyTzK.js";import"./hooks-COs4f3qd.js";import"./axisSelectors-B_EC2kA9.js";import"./zIndexSlice-B2wHCWq0.js";import"./CartesianChart-CSvI-_HL.js";import"./chartDataContext-GZk7dH94.js";import"./CategoricalChart-LzovMGTR.js";import"./CartesianAxis-eabYiytD.js";import"./Layer-CFoQxLn1.js";import"./Text-BQatnNw9.js";import"./DOMUtils-B0inai4d.js";import"./Label-DDS3-7t-.js";import"./ZIndexLayer-BDklLudV.js";import"./types-B_qGOwmF.js";import"./ReactUtils-DUdaZBrS.js";import"./ActivePoints-C7W41Iaj.js";import"./Dot-Ce0NiHJU.js";import"./RegisterGraphicalItemId-DERA-43u.js";import"./ErrorBarContext-CdRKq8JD.js";import"./GraphicalItemClipPath-CGcYTlQM.js";import"./SetGraphicalItem-BEgWdOjU.js";import"./useAnimationId-DSGl_EXu.js";import"./getRadiusAndStrokeWidthFromDot-y51lXwYL.js";import"./ActiveShapeUtils-TYQt8YFp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BIC-oKaI.js";import"./Trapezoid-D_UTfuwy.js";import"./Sector-CBezTXxj.js";import"./Symbols-C6tHIL3l.js";import"./Curve-CYEqd5kN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BPFUjSxJ.js";import"./ChartSizeDimensions-Bw79VUZb.js";import"./OffsetShower-BCg2GNSc.js";import"./PlotAreaShower-DXMXrPtG.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const de=["IfOverflow"];export{t as IfOverflow,de as __namedExportsOrder,le as default};

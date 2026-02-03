import{e}from"./iframe-Bsm65lpu.js";import{R as n}from"./arrayEqualityCheck-pVpwfhw9.js";import{C as p}from"./ComposedChart-DLKCNB3k.js";import{C as s}from"./CartesianGrid-B77oMTii.js";import{X as c}from"./XAxis-TRGWr1gg.js";import{Y as f}from"./YAxis-B-wKWhdg.js";import{L as l}from"./Line-CrEkPYWQ.js";import{R as d}from"./ReferenceLine-CuUhSU8g.js";import{R as h}from"./RechartsHookInspector-Clmx80vb.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-rxG_-3GU.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-De8mSPBF.js";import"./hooks-C8-QiYSZ.js";import"./axisSelectors-BL5_jCnI.js";import"./zIndexSlice-CyooY4AF.js";import"./CartesianChart-COAh2GwA.js";import"./chartDataContext-BzZNyNeo.js";import"./CategoricalChart-CpYGwsdd.js";import"./CartesianAxis-BtMXIbHW.js";import"./Layer-wMrNll4f.js";import"./Text-qBvU-JXf.js";import"./DOMUtils-D61cKDLm.js";import"./Label-BJg3D3z3.js";import"./ZIndexLayer-B9ntexjH.js";import"./types-DNFwz7vs.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Dg23rHrH.js";import"./ActivePoints-RliMcJhX.js";import"./Dot-Cn8YAJTC.js";import"./RegisterGraphicalItemId-D7Q-Ng9s.js";import"./ErrorBarContext-ypCLG3pm.js";import"./GraphicalItemClipPath-DmxStlHE.js";import"./SetGraphicalItem-BK1cbA1C.js";import"./useAnimationId-dI2bK3sU.js";import"./getRadiusAndStrokeWidthFromDot-DbjDS3xp.js";import"./ActiveShapeUtils-D74FXmj1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CqOp_VNA.js";import"./Trapezoid-DD-HamH_.js";import"./Sector-BjJSeVtU.js";import"./Symbols-lC3l514a.js";import"./Curve-Dwdi27bs.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CU5fePgk.js";import"./ChartSizeDimensions-CraFDmRl.js";import"./OffsetShower-Cb2JVvak.js";import"./PlotAreaShower-Bu5CsAfQ.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

import{e}from"./iframe-C_JnpPxC.js";import{R as n}from"./arrayEqualityCheck-sT-8H7T8.js";import{C as p}from"./ComposedChart-BOL0KSYh.js";import{C as s}from"./CartesianGrid-DA_b3ABB.js";import{X as c}from"./XAxis-BpjCkomw.js";import{Y as f}from"./YAxis-DzTe-R4y.js";import{L as l}from"./Line-CYhOsuSD.js";import{R as d}from"./ReferenceLine-wLvIJ7ny.js";import{R as h}from"./RechartsHookInspector-C-nhVX4u.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DMs63srN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Be1xWQVx.js";import"./hooks-CilDgeMs.js";import"./axisSelectors-BYc0e3fJ.js";import"./zIndexSlice-DoGitowx.js";import"./CartesianChart-DVAMnmgu.js";import"./chartDataContext-DiOyHIUd.js";import"./CategoricalChart-CBvXep6K.js";import"./CartesianAxis-VwfEIEjI.js";import"./Layer-WpsYuzZU.js";import"./Text-BdVB7IGp.js";import"./DOMUtils-CDXVQVNr.js";import"./Label-CxS5BAR7.js";import"./ZIndexLayer-B-ShVZV-.js";import"./types-BnNymUFW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-D29wERIN.js";import"./ActivePoints-JrhNNaZp.js";import"./Dot-DS8ISMrc.js";import"./RegisterGraphicalItemId-DO88ATNs.js";import"./ErrorBarContext-BfsPTak7.js";import"./GraphicalItemClipPath-CZbJihCA.js";import"./SetGraphicalItem-oGTsK5LX.js";import"./useAnimationId-BOqolhoS.js";import"./getRadiusAndStrokeWidthFromDot-DoVJFvmy.js";import"./ActiveShapeUtils-Ft9Dseux.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CnZDt0bN.js";import"./Trapezoid-D9fBkVlH.js";import"./Sector-H2-tBEz5.js";import"./Symbols-fhVjgxn_.js";import"./Curve-qS1_4eph.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BwFDqC8u.js";import"./ChartSizeDimensions-b9L3p-kX.js";import"./OffsetShower-D08e_oKq.js";import"./PlotAreaShower-g5XUniHF.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

import{e}from"./iframe-B5r3cecm.js";import{R as n}from"./arrayEqualityCheck-Czqc1yJH.js";import{C as p}from"./ComposedChart-C_4RZTQj.js";import{C as s}from"./CartesianGrid-DNHyoKf7.js";import{X as c}from"./XAxis-BkMRDr4M.js";import{Y as f}from"./YAxis-TYBY8JO1.js";import{L as l}from"./Line-8GNUN2KY.js";import{R as d}from"./ReferenceLine-BAxO9N1I.js";import{R as h}from"./RechartsHookInspector-DV5jRegM.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B0ReOK4v.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CS6LSkHo.js";import"./hooks-Cgvn8GGi.js";import"./axisSelectors-DlyGXsEB.js";import"./zIndexSlice-BBl8Rk0R.js";import"./CartesianChart-ByljlebW.js";import"./chartDataContext-CLEPAMGZ.js";import"./CategoricalChart-BNRlOmyd.js";import"./CartesianAxis-Xf3h13YN.js";import"./Layer-5sA9M2a_.js";import"./Text-DBsFj5kG.js";import"./DOMUtils-BMUc0bMB.js";import"./Label-CuwvUyc2.js";import"./ZIndexLayer-CK5fYLk5.js";import"./types-0ytZb3l6.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CFOSv3NQ.js";import"./ActivePoints-DfhhgqoQ.js";import"./Dot-DgWJfR-O.js";import"./RegisterGraphicalItemId-C9-Dm0DM.js";import"./ErrorBarContext-VyPM_pF3.js";import"./GraphicalItemClipPath-BBRif3g7.js";import"./SetGraphicalItem-D_EjQgzP.js";import"./useAnimationId-BDFPsv26.js";import"./getRadiusAndStrokeWidthFromDot-Csm1bRHk.js";import"./ActiveShapeUtils-4xjvutom.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CEg1ZuEo.js";import"./Trapezoid-B9ic5-qM.js";import"./Sector-Dx2gEVnp.js";import"./Symbols-B2Id_P0j.js";import"./Curve-BkRyhV0i.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BkOLfLi3.js";import"./ChartSizeDimensions-BCzYpqeT.js";import"./OffsetShower-BgXcnRpM.js";import"./PlotAreaShower-CbYe2LCs.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

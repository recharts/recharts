import{e}from"./iframe-CT4QuQ5L.js";import{R as n}from"./arrayEqualityCheck-CUEtHgfA.js";import{C as p}from"./ComposedChart-DZSwiMb4.js";import{C as s}from"./CartesianGrid-B5eEZuRf.js";import{X as c}from"./XAxis-DHcCUjsJ.js";import{Y as f}from"./YAxis-BZSCjBeJ.js";import{L as l}from"./Line-DZ2dCTzj.js";import{R as d}from"./ReferenceLine-Bze99Lfc.js";import{R as h}from"./RechartsHookInspector-lcTlhUAW.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CTWHIHtK.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-Dw0rEgTJ.js";import"./hooks-CidIT9Ht.js";import"./axisSelectors-DlMKUcSY.js";import"./zIndexSlice-BbZ3gLFC.js";import"./CartesianChart-ChOeo1co.js";import"./chartDataContext-BO8jZHln.js";import"./CategoricalChart-DmUQY6Sd.js";import"./CartesianAxis-ByfjT7H_.js";import"./Layer-BIxjtyeO.js";import"./Text-ZzNZJtBS.js";import"./DOMUtils-CDXEyiOj.js";import"./Label-CFlrJOC9.js";import"./ZIndexLayer-B4whtcRw.js";import"./types-CGMRlxY8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BD8G1aYb.js";import"./ActivePoints-5c917mHb.js";import"./Dot-COXd4F6H.js";import"./RegisterGraphicalItemId-CxRMjxHS.js";import"./ErrorBarContext-DQ9IsJoH.js";import"./GraphicalItemClipPath-BaTdDRki.js";import"./SetGraphicalItem-BrCNGFd6.js";import"./useAnimationId-ByA7rgvy.js";import"./getRadiusAndStrokeWidthFromDot-dH9jVCiW.js";import"./ActiveShapeUtils-Pkd70I7I.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BJlDY3Tg.js";import"./Trapezoid-C3eKH3hP.js";import"./Sector-BFKxB58R.js";import"./Symbols-NgG1d1Uj.js";import"./Curve-CwfbqPR9.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DDx2nU6r.js";import"./ChartSizeDimensions-71uSM08s.js";import"./OffsetShower-bHCqATCI.js";import"./PlotAreaShower-DYHCw4lK.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

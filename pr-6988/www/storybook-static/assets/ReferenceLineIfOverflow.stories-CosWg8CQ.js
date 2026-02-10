import{e}from"./iframe-Bg6hY-Lh.js";import{R as n}from"./arrayEqualityCheck-BDis9FaH.js";import{C as p}from"./ComposedChart-BrWT8Xtr.js";import{C as s}from"./CartesianGrid-CjQk98d1.js";import{X as c}from"./XAxis-CuwyE-Aw.js";import{Y as f}from"./YAxis-D_u72_vn.js";import{L as l}from"./Line-Dg5CPa1P.js";import{R as d}from"./ReferenceLine-BODyE_wn.js";import{R as h}from"./RechartsHookInspector-C0SDsqLX.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BI7FFBV-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DkqFGzuB.js";import"./hooks-DM-gzZjo.js";import"./axisSelectors-GHndRTSk.js";import"./zIndexSlice-DBH2YRr7.js";import"./CartesianChart-B3uSsgOm.js";import"./chartDataContext-BNQKMBbL.js";import"./CategoricalChart-fiMHtwty.js";import"./CartesianAxis-vJmkqZaZ.js";import"./Layer-CbLnIqdO.js";import"./Text-G-UMIUqa.js";import"./DOMUtils-BOstDSsm.js";import"./Label-XrRQ-MXs.js";import"./ZIndexLayer-DyYnxyDJ.js";import"./types-CCzU0McW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CFjZLDuN.js";import"./ActivePoints-DvypOqa9.js";import"./Dot-BIrCeUw-.js";import"./RegisterGraphicalItemId-DQWcO4Xr.js";import"./ErrorBarContext-BJIGtpIX.js";import"./GraphicalItemClipPath-CQF6nnWi.js";import"./SetGraphicalItem-B1--8enS.js";import"./useAnimationId-9L0wWVYf.js";import"./getRadiusAndStrokeWidthFromDot-B6sH4uog.js";import"./ActiveShapeUtils-YlmjpsSF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-cIsPACi8.js";import"./Trapezoid-BJ7F2nGX.js";import"./Sector-CEFw5FZM.js";import"./Symbols-CxwFL1-B.js";import"./Curve-J_xBTbd1.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-C3KvIg2I.js";import"./ChartSizeDimensions-oau-P_ha.js";import"./OffsetShower-B8fezjcj.js";import"./PlotAreaShower-_vIJxFcu.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

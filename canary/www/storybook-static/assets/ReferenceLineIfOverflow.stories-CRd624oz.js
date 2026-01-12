import{e}from"./iframe-BlK4-FEU.js";import{R as n}from"./arrayEqualityCheck-D3CpbvMw.js";import{C as p}from"./ComposedChart-B-MlCPo2.js";import{C as s}from"./CartesianGrid-CMvJe24R.js";import{X as c}from"./XAxis-XTRCC8r6.js";import{Y as f}from"./YAxis-Bo0KVWV0.js";import{L as l}from"./Line-V5hq-jRR.js";import{R as d}from"./ReferenceLine-CyvW1Mpw.js";import{R as h}from"./RechartsHookInspector-C2emUIYz.js";import{p as w}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CZGT4OJp.js";import"./PolarUtils-Bw67yi1j.js";import"./RechartsWrapper-CfP2CNrR.js";import"./hooks-CsC49iNH.js";import"./axisSelectors-t10Pjb8y.js";import"./zIndexSlice-BTFlkBrM.js";import"./CartesianChart-BYkRfU90.js";import"./chartDataContext-_WqeN7e1.js";import"./CategoricalChart-CsSPHay3.js";import"./CartesianAxis-D9Vnd4ZX.js";import"./Layer-1XFlzVag.js";import"./Text-BHa3XVhG.js";import"./DOMUtils-DL2vfQ8H.js";import"./Label-B5t3anSs.js";import"./ZIndexLayer-BXfqJV7n.js";import"./types-nGVhtMBW.js";import"./ReactUtils-CLW_TYB_.js";import"./ActivePoints-Ub5O0fxy.js";import"./Dot-Ci8eNhkT.js";import"./RegisterGraphicalItemId-Co3MVnsu.js";import"./ErrorBarContext-Kty8e015.js";import"./GraphicalItemClipPath-P9ZnzsFU.js";import"./SetGraphicalItem-DuRVqxef.js";import"./useAnimationId-H0jghrnG.js";import"./getRadiusAndStrokeWidthFromDot-BZzhWtQa.js";import"./ActiveShapeUtils-BFViKF1F.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bu9j2f9q.js";import"./Trapezoid-DhJdPhvd.js";import"./Sector-6gruqe2O.js";import"./Symbols-7-jwnY-l.js";import"./Curve-CwI3FqjW.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-B4rQ1OLH.js";import"./ChartSizeDimensions-DNL5OR5F.js";import"./OffsetShower-DbODKAvT.js";import"./PlotAreaShower-C8cqHodv.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

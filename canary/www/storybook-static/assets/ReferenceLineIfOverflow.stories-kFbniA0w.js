import{e}from"./iframe-BfI_ST9A.js";import{R as n}from"./arrayEqualityCheck-Dpn6Yh1q.js";import{C as p}from"./ComposedChart-C5RXmCa-.js";import{C as s}from"./CartesianGrid-B6zMTXDB.js";import{X as c}from"./XAxis-BmtgQOLB.js";import{Y as f}from"./YAxis-DTgMZjXd.js";import{L as l}from"./Line-DGppnglh.js";import{R as d}from"./ReferenceLine-y3VZHedF.js";import{R as h}from"./RechartsHookInspector-CVEQV9do.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-AaslCT8i.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-B_X6-_SZ.js";import"./hooks-DvK6IaUs.js";import"./axisSelectors-DDmdM9p6.js";import"./zIndexSlice-DXwF7pA6.js";import"./CartesianChart-DXCnOxpF.js";import"./chartDataContext-CeBJp2Px.js";import"./CategoricalChart-DD3vhlwU.js";import"./CartesianAxis-DmSsZovB.js";import"./Layer-Y7LjbTmX.js";import"./Text-rhuK2TCR.js";import"./DOMUtils-bXouPdN4.js";import"./Label-bNYHk-eM.js";import"./ZIndexLayer-BqmPWyE4.js";import"./types-C63RoX8s.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DCNpXtNn.js";import"./ActivePoints-2nVhg-uB.js";import"./Dot-4aiHSk1j.js";import"./RegisterGraphicalItemId-B5NRYeBm.js";import"./ErrorBarContext-Dkb4HGWS.js";import"./GraphicalItemClipPath-Dc-fHHFr.js";import"./SetGraphicalItem-CI8DucV2.js";import"./useAnimationId-COKmXqbi.js";import"./getRadiusAndStrokeWidthFromDot-gYu2i8Au.js";import"./ActiveShapeUtils-DHutry9j.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ClKhcP1j.js";import"./Trapezoid-BD9djYD6.js";import"./Sector-65rnMIz8.js";import"./Symbols-BZnP9syB.js";import"./Curve-CQI60C70.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-ChuKY9XN.js";import"./ChartSizeDimensions-BiyrgYor.js";import"./OffsetShower-SG_pY0kd.js";import"./PlotAreaShower-DWEL4ESW.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

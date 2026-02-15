import{e}from"./iframe-NOjYqVDf.js";import{R as n}from"./arrayEqualityCheck-CKPvr2Sv.js";import{C as p}from"./ComposedChart-DP1DcGpI.js";import{C as s}from"./CartesianGrid-CbxaQV6M.js";import{X as c}from"./XAxis-gQef3nNh.js";import{Y as f}from"./YAxis-R69UNor-.js";import{L as l}from"./Line-1TE9oZ2s.js";import{R as d}from"./ReferenceLine-BQbIufU-.js";import{R as h}from"./RechartsHookInspector-CZuAKH0J.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B4jksYlp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CYtF97y_.js";import"./hooks-DkToD0vA.js";import"./axisSelectors-_b35tTPj.js";import"./zIndexSlice-Doe50Ljr.js";import"./renderedTicksSlice-CNdDn6G4.js";import"./CartesianChart-DlSo8JUa.js";import"./chartDataContext-BCOGOXd9.js";import"./CategoricalChart-BxTZW61W.js";import"./CartesianAxis-DmPLGWaH.js";import"./Layer-C5eEc_aO.js";import"./Text-C7FUzYMA.js";import"./DOMUtils-BMDxU690.js";import"./Label-DSmhxnyp.js";import"./ZIndexLayer-CmnykYAa.js";import"./types-Cdrp97aK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-B9O68L3J.js";import"./ActivePoints-CQfp67or.js";import"./Dot-B8-r0lP5.js";import"./RegisterGraphicalItemId-YVRRFCp2.js";import"./ErrorBarContext-BzRoxPBz.js";import"./GraphicalItemClipPath-C6swNonr.js";import"./SetGraphicalItem-BeKk8_xu.js";import"./useAnimationId-DyWolGb_.js";import"./getRadiusAndStrokeWidthFromDot-Cr1dXyad.js";import"./ActiveShapeUtils-BNzKmu3G.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B01634cJ.js";import"./Trapezoid-BprYBPWk.js";import"./Sector-Bz2V5crH.js";import"./Symbols-CYsc0tYe.js";import"./Curve-DR3tx7PX.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Ioy1DO1u.js";import"./ChartSizeDimensions-CVj6kL6N.js";import"./OffsetShower-BtzaIgV3.js";import"./PlotAreaShower-BDFeD2A4.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,he={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const we=["IfOverflow"];export{t as IfOverflow,we as __namedExportsOrder,he as default};

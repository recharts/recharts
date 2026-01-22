import{e}from"./iframe-DZKc3wlS.js";import{R as n}from"./arrayEqualityCheck-DjWYx_fN.js";import{C as p}from"./ComposedChart-B72QYvLv.js";import{C as s}from"./CartesianGrid-CHpJW8RT.js";import{X as c}from"./XAxis-kwyNZCQz.js";import{Y as f}from"./YAxis-BIjjeUdJ.js";import{L as l}from"./Line-Dedd9k3r.js";import{R as d}from"./ReferenceLine-t_gzJpjr.js";import{R as h}from"./RechartsHookInspector-Co_Fh5Fl.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CVgEU2hP.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CFmROmVB.js";import"./hooks-DW00eoGN.js";import"./axisSelectors-D0TaSUJl.js";import"./zIndexSlice-B0ARFS3L.js";import"./CartesianChart-EIvq8INt.js";import"./chartDataContext-DWjoQixe.js";import"./CategoricalChart-CckqKMR_.js";import"./CartesianAxis-zQUlpkZ2.js";import"./Layer-DH-WpK_h.js";import"./Text-D1upxTDv.js";import"./DOMUtils-32kvDN7M.js";import"./Label-CCWjKoRR.js";import"./ZIndexLayer-DokrlvR2.js";import"./types-CL0cTInA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-rr4vsGZe.js";import"./ActivePoints-BuT4hzZo.js";import"./Dot-COwBL4NX.js";import"./RegisterGraphicalItemId-DnhKaSZS.js";import"./ErrorBarContext-DvKtKMAK.js";import"./GraphicalItemClipPath-7NYVrtJx.js";import"./SetGraphicalItem-DvZbVWHx.js";import"./useAnimationId-NX8Gitos.js";import"./getRadiusAndStrokeWidthFromDot-CDBmxzKc.js";import"./ActiveShapeUtils-BkixNy1s.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BC7Fny-7.js";import"./Trapezoid-B-GT8XQC.js";import"./Sector-Bdu3v8S8.js";import"./Symbols-CqfdXGpW.js";import"./Curve-gwVQ8PMT.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-ZKZvtgb5.js";import"./ChartSizeDimensions-Dn532-gh.js";import"./OffsetShower-2bIokmPy.js";import"./PlotAreaShower-FcIufD8Q.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

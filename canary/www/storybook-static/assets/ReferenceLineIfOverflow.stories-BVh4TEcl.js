import{e}from"./iframe-CoxmJKyj.js";import{R as n}from"./arrayEqualityCheck-BiMa-XSg.js";import{C as p}from"./ComposedChart-CnWrvDY-.js";import{C as s}from"./CartesianGrid-BvUKtn8y.js";import{X as c}from"./XAxis-ByfqRbuq.js";import{Y as f}from"./YAxis-CBdXzckK.js";import{L as l}from"./Line-BdzKDbXD.js";import{R as d}from"./ReferenceLine--InyIrh_.js";import{R as h}from"./RechartsHookInspector-DxKqckh3.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-sn4NzjIu.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-BeGnBw32.js";import"./hooks-C3tSBkhO.js";import"./axisSelectors-Cx1Cm9h8.js";import"./zIndexSlice-BS5hTNaN.js";import"./CartesianChart-TnRBDpKI.js";import"./chartDataContext-88-zaTIw.js";import"./CategoricalChart-CyysacNR.js";import"./CartesianAxis-C3XzKlXq.js";import"./Layer-FnVtSY9f.js";import"./Text-CbKrSYiu.js";import"./DOMUtils-p48KsCFt.js";import"./Label-BaauyrMN.js";import"./ZIndexLayer-C9Rpc0HU.js";import"./types-VgYnwRoj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DelGq7vW.js";import"./ActivePoints-D0nFSc_H.js";import"./Dot-BifkMnm9.js";import"./RegisterGraphicalItemId-CJCmzU4Y.js";import"./ErrorBarContext-Ce5dqlrV.js";import"./GraphicalItemClipPath-B39q-JPL.js";import"./SetGraphicalItem-_WwZUCgQ.js";import"./useAnimationId-DMb1Vy6w.js";import"./getRadiusAndStrokeWidthFromDot-k8J8eAkm.js";import"./ActiveShapeUtils-DHfcpEHc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-KCszVTMh.js";import"./Trapezoid-CHWx_77j.js";import"./Sector-De_XHewT.js";import"./Symbols-3p0hcDOB.js";import"./Curve-BcGu8BmK.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BjMwiY7v.js";import"./ChartSizeDimensions-CtAc8nGI.js";import"./OffsetShower-BIEGpqN_.js";import"./PlotAreaShower-B9vM17qm.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

import{R as e}from"./iframe-B91k2IcJ.js";import{R as a}from"./zIndexSlice-DPjnHRkm.js";import{C as p}from"./ComposedChart-SUsOIgRZ.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-yndteJZg.js";import{X as f}from"./XAxis-Kxgks0Q-.js";import{Y as l}from"./YAxis-MGmz2Csl.js";import{L as d}from"./Line-B6diu4jO.js";import{R as h}from"./ReferenceLine-BkFXE-6J.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BM2gK96G.js";import"./index-BbCiI-kx.js";import"./index-C5xeHmjj.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D3docOoh.js";import"./isWellBehavedNumber-TAwJ2tp1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BMFvDMkV.js";import"./axisSelectors-CcYA9DrF.js";import"./d3-scale-C4mP0o3d.js";import"./index-DlE4la4O.js";import"./index-DagyI5pu.js";import"./renderedTicksSlice-C1MLxybq.js";import"./index-D5HKNOOG.js";import"./CartesianChart-B7_E8FCz.js";import"./chartDataContext-DjizePAa.js";import"./CategoricalChart-CUc2SRJ3.js";import"./CartesianAxis-D1fr-7So.js";import"./Layer-mmJAUotg.js";import"./Text-CiRRF6pE.js";import"./pageBackground-BjpY-vWv.js";import"./useId-DkzElDsG.js";import"./useBackwardsCompatibleTheme-CU4zQS7V.js";import"./Label-BsntnuTl.js";import"./ZIndexLayer-GgF7R--c.js";import"./types-DevBWE8M.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BM89L-Dm.js";import"./step-BZw5QhTt.js";import"./path-DyVhHtw_.js";import"./activeStyles-U0RfMPfz.js";import"./useAnimationId-CRCBGZGy.js";import"./dataEntryStyles-yNODtHFO.js";import"./ActivePoints-BkA-bCTx.js";import"./Dot-D09SInS_.js";import"./ErrorBarContext-C_xJpakb.js";import"./GraphicalItemClipPath-C22168NG.js";import"./SetGraphicalItem-BDS20UwV.js";import"./getRadiusAndStrokeWidthFromDot-leGQ2dWC.js";import"./ActiveShapeUtils-djGvUgMr.js";import"./useGraphicalItemIdentity-WURDsQ2E.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ye as __namedExportsOrder,ve as default};

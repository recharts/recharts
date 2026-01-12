import{e}from"./iframe-CnJUGyj2.js";import{R as n}from"./arrayEqualityCheck-DS-98WmY.js";import{C as p}from"./ComposedChart-CfffBHBx.js";import{C as s}from"./CartesianGrid-Dgw7xuDw.js";import{X as c}from"./XAxis-BXjKhibu.js";import{Y as f}from"./YAxis-BOMJi5bn.js";import{L as l}from"./Line-LC_xllE3.js";import{R as d}from"./ReferenceLine-Cc-95lk4.js";import{R as h}from"./RechartsHookInspector-D9NSExUN.js";import{p as w}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BzjH9Fll.js";import"./PolarUtils-DUXYMnUd.js";import"./RechartsWrapper-CvN69gVe.js";import"./hooks-DtPou_4w.js";import"./axisSelectors-B3UBVlXk.js";import"./zIndexSlice-BtlphbRl.js";import"./CartesianChart-DarKL8UC.js";import"./chartDataContext-BL3jGdF-.js";import"./CategoricalChart-3iTekVlo.js";import"./CartesianAxis-DVo4bkjd.js";import"./Layer-BsUJcQkF.js";import"./Text-sLuusAcx.js";import"./DOMUtils-CjNSxgDj.js";import"./Label-DpPDMM47.js";import"./ZIndexLayer-Dc_RcEv2.js";import"./types-D9HbD0yL.js";import"./ReactUtils-BNR-lOsN.js";import"./ActivePoints-Z1vNPH_9.js";import"./Dot-BlTBScXS.js";import"./RegisterGraphicalItemId-BM4OoSas.js";import"./ErrorBarContext-5qx9m8qh.js";import"./GraphicalItemClipPath-FClbaDV6.js";import"./SetGraphicalItem-BuXMx1_s.js";import"./useAnimationId-CPv9iP46.js";import"./getRadiusAndStrokeWidthFromDot-A9oPyYzt.js";import"./ActiveShapeUtils-DTauRdeB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DAmamxSx.js";import"./Trapezoid-B9_fPQiM.js";import"./Sector-CiIkZPTJ.js";import"./Symbols-kQyDCWDP.js";import"./Curve-B_FGldsa.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CeIzyUzp.js";import"./ChartSizeDimensions-CoD815Xi.js";import"./OffsetShower-QmDVJyKt.js";import"./PlotAreaShower-CTJ4RF1E.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

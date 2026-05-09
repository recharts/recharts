import{e}from"./iframe-LVl3b4xQ.js";import{R as n}from"./arrayEqualityCheck-TRBYdTbW.js";import{C as p}from"./ComposedChart-DtWLSg2c.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BMi0iJ7M.js";import{X as f}from"./XAxis-S2uC6fKQ.js";import{Y as l}from"./YAxis-D2De-1fU.js";import{L as d}from"./Line-OO1-Czbq.js";import{R as h}from"./ReferenceLine-D54Cpc6P.js";import{R as w}from"./RechartsHookInspector-CoEhmUtx.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-sS_sTty7.js";import"./immer-BbMxIj75.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bu4njem6.js";import"./index-DpK2I5Z8.js";import"./hooks-M6iVHT7c.js";import"./axisSelectors-DOBrNYLg.js";import"./d3-scale-DZf6r7Db.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-bvE0U60U.js";import"./renderedTicksSlice-C1IOrkRp.js";import"./CartesianChart-B4Aoe2Gv.js";import"./chartDataContext-C_HtZ8Jd.js";import"./CategoricalChart-BY9PLUYv.js";import"./CartesianAxis-B7v1DDAM.js";import"./Layer-BDK9FNAf.js";import"./Text-ByeLUm9f.js";import"./DOMUtils-DEoaEH8S.js";import"./Label-Jb4Mxx6L.js";import"./ZIndexLayer-BcAyFnZg.js";import"./types-C5WHI9Oq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-BuzdDAXz.js";import"./step-Fn6xoHVy.js";import"./AnimatedItems-u-a6HbBD.js";import"./useAnimationId-aZVu4KkL.js";import"./ActivePoints-J2-wBKLN.js";import"./Dot-CLoMxYtv.js";import"./RegisterGraphicalItemId-msSYtbNf.js";import"./ErrorBarContext-C1aiTzSR.js";import"./GraphicalItemClipPath-DJ_qeJGz.js";import"./SetGraphicalItem-C3QtaGQ_.js";import"./getRadiusAndStrokeWidthFromDot-CHyMZ3bi.js";import"./ActiveShapeUtils-BFF6hf2y.js";import"./isPlainObject-B64torjy.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DUhT-B0R.js";import"./Trapezoid-ZdBmwUBu.js";import"./Sector-zScvcglH.js";import"./Symbols-Fu_kPQSr.js";import"./symbol-hh9GMAPc.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CZHbmvmq.js";import"./ChartSizeDimensions-Bx00VSUB.js";import"./OffsetShower-DPJMHPD2.js";import"./PlotAreaShower-DoIFP8gZ.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Ce={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const Oe=["IfOverflow"];export{t as IfOverflow,Oe as __namedExportsOrder,Ce as default};

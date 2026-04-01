import{e}from"./iframe-D2iPyEE3.js";import{R as n}from"./arrayEqualityCheck-BQ52A-KD.js";import{C as p}from"./ComposedChart-C_oRmZ51.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-ClNpEo5p.js";import{X as f}from"./XAxis-Ca5xFIBT.js";import{Y as l}from"./YAxis-r-zcSEA9.js";import{L as d}from"./Line-0zLbnlDG.js";import{R as h}from"./ReferenceLine-Cz-x4SKk.js";import{R as w}from"./RechartsHookInspector-pMynMK3d.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B2qn9BK_.js";import"./immer-5DUlJX3y.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D9hxchsK.js";import"./index-CGzhf8ES.js";import"./hooks-DmQVapf1.js";import"./axisSelectors-Bf33qp9J.js";import"./d3-scale-D333UmOT.js";import"./zIndexSlice-B-uvLuMe.js";import"./renderedTicksSlice-Cw8jJmSY.js";import"./CartesianChart-C44XCUUQ.js";import"./chartDataContext-B0bZnblU.js";import"./CategoricalChart-kNyVXZoh.js";import"./CartesianAxis-Bd7Gtpgp.js";import"./Layer-CIGoVUHw.js";import"./Text-B4mK5G2Y.js";import"./DOMUtils-BDNid5QK.js";import"./Label-CjmamkRK.js";import"./ZIndexLayer-ClfHdlij.js";import"./types-DfbbSUKg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DlxpINgd.js";import"./ActivePoints-DO1blp6A.js";import"./Dot-D8o3tU3P.js";import"./RegisterGraphicalItemId-De4zP5NP.js";import"./ErrorBarContext-6PvhO17o.js";import"./GraphicalItemClipPath-oM0pOvEZ.js";import"./SetGraphicalItem-3fLhXJ7X.js";import"./useAnimationId-fkVW7SyB.js";import"./getRadiusAndStrokeWidthFromDot-CFwxR8E8.js";import"./ActiveShapeUtils-cVE6agUq.js";import"./isPlainObject-BVZ5R7gX.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BIa7eyeJ.js";import"./Trapezoid-CD49191V.js";import"./Sector-CON_U0ZW.js";import"./Symbols-Dh7LCKpa.js";import"./symbol-DAG115Zm.js";import"./step-NQkLQHEn.js";import"./Curve-gyPLT6fj.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DZX1BXuq.js";import"./ChartSizeDimensions-CYgvj-Lj.js";import"./OffsetShower-BwoPAHAo.js";import"./PlotAreaShower-phVVNo9A.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const Ce=["IfOverflow"];export{t as IfOverflow,Ce as __namedExportsOrder,Re as default};

import{e}from"./iframe-BOKMyF_X.js";import{R as n}from"./arrayEqualityCheck-CqOdBUpx.js";import{C as p}from"./ComposedChart-CM0vmQ8b.js";import{C as s}from"./CartesianGrid-CODw85-L.js";import{X as c}from"./XAxis-CZEffDuF.js";import{Y as f}from"./YAxis-CBNt9JSX.js";import{L as l}from"./Line-Brl3Q2FA.js";import{R as d}from"./ReferenceLine-EfKR0ZIp.js";import{R as h}from"./RechartsHookInspector-CyXtWZCT.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D-2ZbLU8.js";import"./immer-BWwXhaAr.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BbOfJK_v.js";import"./index-DyqnJuAH.js";import"./hooks-BSpUdl1W.js";import"./axisSelectors-DKV-tPdL.js";import"./d3-scale-DFwrAk_i.js";import"./zIndexSlice-5HlspQCC.js";import"./renderedTicksSlice-BzcMdbXv.js";import"./CartesianChart-DhtZ13KG.js";import"./chartDataContext-CzpIjlkZ.js";import"./CategoricalChart-BuHiBizY.js";import"./CartesianAxis-DfkQ8mC4.js";import"./Layer-jqqI8J4h.js";import"./Text-v3vniUMj.js";import"./DOMUtils-BpFKs9GQ.js";import"./Label-D-SjomvA.js";import"./ZIndexLayer-BPVGtKRn.js";import"./types-BRMSpD9x.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-D8BtYMdD.js";import"./ActivePoints-BkUW_jI5.js";import"./Dot-BV_14ZK_.js";import"./RegisterGraphicalItemId-CT98v8Eq.js";import"./ErrorBarContext-hDWWdNkc.js";import"./GraphicalItemClipPath-C2O7VO_H.js";import"./SetGraphicalItem-C9j26hww.js";import"./useAnimationId-CQeaLNgU.js";import"./getRadiusAndStrokeWidthFromDot-BEKHGib6.js";import"./ActiveShapeUtils-B0yU484R.js";import"./isPlainObject-DIE9lg5n.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DaPP8vxp.js";import"./Trapezoid-Ckkc98J5.js";import"./Sector-DFBFkrCL.js";import"./Symbols-Bgq4WsjW.js";import"./symbol-BbSh3W4q.js";import"./step-CSZdFR4k.js";import"./Curve-B4PvFjai.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-C_V29KK9.js";import"./ChartSizeDimensions-BzpSoNcH.js";import"./OffsetShower-DzkfGY4a.js";import"./PlotAreaShower-Djb9Eb2x.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

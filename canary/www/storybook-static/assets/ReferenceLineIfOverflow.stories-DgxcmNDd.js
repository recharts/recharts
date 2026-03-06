import{e}from"./iframe-D0SJPJ1y.js";import{R as n}from"./arrayEqualityCheck-CYS0izrw.js";import{C as p}from"./ComposedChart-CGWtCm1x.js";import{C as s}from"./CartesianGrid-DpDtCUwn.js";import{X as c}from"./XAxis-CwSSbwpc.js";import{Y as f}from"./YAxis-DF4qEhbE.js";import{L as l}from"./Line-BC_Nvy_p.js";import{R as d}from"./ReferenceLine-fe1KCvfR.js";import{R as h}from"./RechartsHookInspector-4NIikMun.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CnSf9MnV.js";import"./immer-BFjNfeIQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DR1v2TsK.js";import"./index-CPz14I3O.js";import"./hooks-V_cOlgcg.js";import"./axisSelectors-Bl05SH9I.js";import"./d3-scale-CYyK-SUf.js";import"./zIndexSlice-CqQsXxK3.js";import"./renderedTicksSlice-oZMg51oo.js";import"./CartesianChart-CwFfh_0J.js";import"./chartDataContext-Jo-HA9ql.js";import"./CategoricalChart-FrfPjT_B.js";import"./CartesianAxis-D59EO1CG.js";import"./Layer-Dax6EhgB.js";import"./Text-CvTZwd3j.js";import"./DOMUtils-DfKOz27u.js";import"./Label-Cf3oENl6.js";import"./ZIndexLayer-DYNk2l8y.js";import"./types-Cyc_Gww5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-a6BVn4Bt.js";import"./ActivePoints-DG08NKKZ.js";import"./Dot-B2ZduEOn.js";import"./RegisterGraphicalItemId-CivjBHhq.js";import"./ErrorBarContext-Bzp3Zzcb.js";import"./GraphicalItemClipPath-637j1oGj.js";import"./SetGraphicalItem-C-583XhE.js";import"./useAnimationId-wUwzbzyQ.js";import"./getRadiusAndStrokeWidthFromDot-DToYTxGi.js";import"./ActiveShapeUtils-CH3V2Gcs.js";import"./isPlainObject-CjD1Y_nD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dj_IkvMc.js";import"./Trapezoid-Dz2cKjjq.js";import"./Sector-2V2J5PIx.js";import"./Symbols-Doo8obb_.js";import"./symbol--3m7hGn6.js";import"./step-RKAN_I-J.js";import"./Curve-Cx3Ohe6s.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CBc708fQ.js";import"./ChartSizeDimensions-ChXleD3h.js";import"./OffsetShower-D49YcvPA.js";import"./PlotAreaShower-BqwlsAkt.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

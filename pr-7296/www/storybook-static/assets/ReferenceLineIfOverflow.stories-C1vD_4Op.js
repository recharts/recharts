import{e}from"./iframe-BIeRAvIs.js";import{R as n}from"./arrayEqualityCheck-Bo5lKgUH.js";import{C as p}from"./ComposedChart-Bm_hB9iQ.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-C9tgilzn.js";import{X as f}from"./XAxis-Bz_wbRMX.js";import{Y as l}from"./YAxis-ChIFeHGD.js";import{L as d}from"./Line-CNyBQv9K.js";import{R as h}from"./ReferenceLine-CQ_8Xeia.js";import{R as w}from"./RechartsHookInspector-ZnpsfR9f.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B7afBTwD.js";import"./immer-5-lHdrEI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CM54gdPj.js";import"./index-DwT1n7qR.js";import"./hooks-DF9hzSyO.js";import"./axisSelectors-DpIQAzCF.js";import"./d3-scale-B0zeFeqw.js";import"./zIndexSlice-C0VSrdrd.js";import"./renderedTicksSlice-Bjl9R1bd.js";import"./CartesianChart-2ONA7LeG.js";import"./chartDataContext-C2nJuVrb.js";import"./CategoricalChart-BhjQzYI5.js";import"./CartesianAxis-2__l5TP8.js";import"./Layer-BzoHvM-S.js";import"./Text-CrBefNhw.js";import"./DOMUtils-lW54g6QP.js";import"./Label-B1v8zCXy.js";import"./ZIndexLayer-BTjArk6I.js";import"./types-DQojIKJi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-hS7xEmGS.js";import"./ActivePoints-efPNJuTS.js";import"./Dot-pi2zX1oI.js";import"./RegisterGraphicalItemId-oCC6rABF.js";import"./ErrorBarContext-BHrSsU01.js";import"./GraphicalItemClipPath-C63EteST.js";import"./SetGraphicalItem-DsNhb24c.js";import"./useAnimationId-C9Uv8ueb.js";import"./getRadiusAndStrokeWidthFromDot-D7Vs4ffU.js";import"./ActiveShapeUtils-Bps_BZs-.js";import"./isPlainObject-l3KiUXnf.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CYSY3nrg.js";import"./Trapezoid-C_yuwcEm.js";import"./Sector-EPL29HSF.js";import"./Symbols-BeXKfzK2.js";import"./symbol-CFCWUA3z.js";import"./step-CNOKEUU2.js";import"./Curve-BwmaiqIM.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CG5u5SYH.js";import"./ChartSizeDimensions-DyfQXYwz.js";import"./OffsetShower-VB1mbOI0.js";import"./PlotAreaShower-Dt-mgpmA.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

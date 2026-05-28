import{e}from"./iframe-B1pz1HPh.js";import{g as n}from"./arrayEqualityCheck-CGszzuoD.js";import{C as p}from"./ComposedChart-DL9Bpu5J.js";import{p as s}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-DO8_5Fqv.js";import{X as f}from"./XAxis-BVzuhrCO.js";import{Y as l}from"./YAxis-CEBdEAk1.js";import{L as d}from"./Line-CPHgJ6LO.js";import{R as h}from"./ReferenceLine-DzeyZJl8.js";import{R as w}from"./RechartsHookInspector-Ba9PVlAC.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BMF326Ad.js";import"./immer-D5ZK6-zj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B_DMEy6X.js";import"./index-CONuoc65.js";import"./hooks-_Fqb7rcn.js";import"./axisSelectors-rNwEbhlr.js";import"./d3-scale-COb-tvd6.js";import"./zIndexSlice-D685U5bi.js";import"./renderedTicksSlice-CvGe_rQ2.js";import"./CartesianChart-DW92cNBQ.js";import"./chartDataContext-CaM10qH-.js";import"./CategoricalChart-Bv4j4Ty_.js";import"./CartesianAxis-C3QEFHfw.js";import"./Layer-hEcP7t1Y.js";import"./Text-ZPZaoHNl.js";import"./DOMUtils-CC-NDZXa.js";import"./Label-C7IOirY6.js";import"./ZIndexLayer-B25MTFPC.js";import"./types-pm80QyIf.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-B-sQG2bq.js";import"./step-C-YdGbob.js";import"./path-DyVhHtw_.js";import"./ReactUtils-D8aneK3l.js";import"./ActivePoints-B2GiDi4o.js";import"./Dot-ISDNc-Qe.js";import"./RegisterGraphicalItemId-xTBgBnJK.js";import"./ErrorBarContext-uQPI7qhW.js";import"./GraphicalItemClipPath-uUb78tLM.js";import"./SetGraphicalItem-CRAPBDcO.js";import"./useAnimationId-DfZh1iG1.js";import"./getRadiusAndStrokeWidthFromDot--ZrL2R-3.js";import"./ActiveShapeUtils-vc7pcnW8.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-rYM0k6kK.js";import"./ChartSizeDimensions-DucsnCfP.js";import"./OffsetShower-C5l1TQVl.js";import"./PlotAreaShower-D97eaCHy.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const ve=["IfOverflow"];export{t as IfOverflow,ve as __namedExportsOrder,we as default};

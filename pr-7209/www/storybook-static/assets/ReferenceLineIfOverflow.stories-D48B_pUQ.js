import{e}from"./iframe-Bw8DjNMK.js";import{R as n}from"./arrayEqualityCheck-RqErd5pi.js";import{C as p}from"./ComposedChart-CjS8ycfQ.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-QdqFE8Kt.js";import{X as f}from"./XAxis-DXXKhKWM.js";import{Y as l}from"./YAxis-DdDXncps.js";import{L as d}from"./Line-BnxQLC5H.js";import{R as h}from"./ReferenceLine-C989WNjF.js";import{R as w}from"./RechartsHookInspector-Dkw7rNs4.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CZAfNVom.js";import"./immer-D8iSY20c.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-78h_uQ3C.js";import"./index-BrpMLpeL.js";import"./hooks-DIsqzK2K.js";import"./axisSelectors-BE5DsmIW.js";import"./d3-scale-D3xSJxj4.js";import"./zIndexSlice-DyW-bn5P.js";import"./renderedTicksSlice-BK1GDE8h.js";import"./CartesianChart-D3IHNwey.js";import"./chartDataContext-Dz8istsE.js";import"./CategoricalChart-D7TuKkne.js";import"./CartesianAxis-vRL28WoM.js";import"./Layer-DM0-BU9E.js";import"./Text-e8mIqlAu.js";import"./DOMUtils-D0bDfEmn.js";import"./Label-E6zUfHhJ.js";import"./ZIndexLayer-DWrSmtv7.js";import"./types-BIXu7WCc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-lXsqpfha.js";import"./ActivePoints-DlNvY9xF.js";import"./Dot-CNEj_K0i.js";import"./RegisterGraphicalItemId-Bd8mrNJF.js";import"./ErrorBarContext-Ds7SXBSd.js";import"./GraphicalItemClipPath-Kk-xgOZj.js";import"./SetGraphicalItem-BPCW0ywk.js";import"./useAnimationId-EQy0eofc.js";import"./getRadiusAndStrokeWidthFromDot-BenKvZMl.js";import"./ActiveShapeUtils-DUc-QBSd.js";import"./isPlainObject-B10acXuk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-cql93QQN.js";import"./Trapezoid-Q5mzP7fr.js";import"./Sector-DbOLYdsA.js";import"./Symbols-ZPRqUnx6.js";import"./symbol-DGPSkh8h.js";import"./step-DLR3mlGm.js";import"./Curve-DtKt2A2q.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BAnsiokJ.js";import"./ChartSizeDimensions-BVLi1gDh.js";import"./OffsetShower-CGTxNqXv.js";import"./PlotAreaShower-Bs-62jbH.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

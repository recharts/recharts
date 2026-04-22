import{e}from"./iframe-CIRDBmnY.js";import{R as n}from"./arrayEqualityCheck-Ccl-pv9u.js";import{C as p}from"./ComposedChart-D2raJxM1.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CXFgbD5_.js";import{X as f}from"./XAxis-Bxd0aLo-.js";import{Y as l}from"./YAxis-Cm87CNGN.js";import{L as d}from"./Line-DaxOykpy.js";import{R as h}from"./ReferenceLine-DYZS--_2.js";import{R as w}from"./RechartsHookInspector-CW5oWR2W.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-WvlII-Nx.js";import"./immer-CEyiSkJ_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-G6A0M6aO.js";import"./index-BtQYyCmS.js";import"./hooks-CXRZ7L0i.js";import"./axisSelectors-BG6ANmCy.js";import"./d3-scale-DeHMkDWI.js";import"./zIndexSlice-Dncpv5eL.js";import"./renderedTicksSlice-D7QGUU6q.js";import"./CartesianChart-DU23w57v.js";import"./chartDataContext-CjureaJk.js";import"./CategoricalChart-0dU2cdKG.js";import"./CartesianAxis-DDkNiZWI.js";import"./Layer-Ba8IePkn.js";import"./Text-DFNv1G75.js";import"./DOMUtils-U3UN3Upo.js";import"./Label-DBOJ1SQQ.js";import"./ZIndexLayer-BEbEcElf.js";import"./types-Tac8hqr1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-B6lO7UVh.js";import"./ActivePoints-ASRgwgve.js";import"./Dot-qDjeeFl4.js";import"./RegisterGraphicalItemId-CcpQzZXr.js";import"./ErrorBarContext-itdE-Ouz.js";import"./GraphicalItemClipPath-DsfyRwV1.js";import"./SetGraphicalItem-KCmHDaFB.js";import"./useAnimationId-8KJrDx3h.js";import"./getRadiusAndStrokeWidthFromDot-C6XbVpCy.js";import"./ActiveShapeUtils--5PkurDt.js";import"./isPlainObject-BNuWTbsi.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BSNMtd6V.js";import"./Trapezoid-DXcU-3dd.js";import"./Sector-DxkSpspk.js";import"./Symbols-CshwXNPg.js";import"./symbol-BUAsdTvL.js";import"./step-Db3ooEEu.js";import"./Curve-D42dBTuL.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CZZFGVCv.js";import"./ChartSizeDimensions-DXL_JkvM.js";import"./OffsetShower-BD7Cp3wL.js";import"./PlotAreaShower-lKDhtFbm.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

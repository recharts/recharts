import{e as t}from"./iframe-8w6hSOb3.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-BcSkIFjy.js";import{B as p}from"./BarChart-CFra5o55.js";import{X as l}from"./XAxis-AMaL4weY.js";import{Y as h}from"./YAxis-Bf2ShXUT.js";import{B as c}from"./Brush-GDk_E05y.js";import{B as x}from"./Bar-Cf8k4GKl.js";import{R as u}from"./RechartsHookInspector-64iDxMAV.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B5HxWc-X.js";import"./immer-CNp4ouR9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CJbnro3S.js";import"./index-DPLqP4cy.js";import"./hooks-DH6TblVT.js";import"./axisSelectors-DJq9vOix.js";import"./d3-scale-DocPO7gd.js";import"./zIndexSlice-xR0tBw_b.js";import"./renderedTicksSlice-CehvSBlF.js";import"./CartesianChart-Bnp5U_KI.js";import"./chartDataContext-CHxjExdF.js";import"./CategoricalChart-C3Pb3oJs.js";import"./CartesianAxis-B-EZEcGt.js";import"./Layer-VbLV2S9I.js";import"./Text-Bl83wQcg.js";import"./DOMUtils-DpW_Dxz8.js";import"./Label-CbTww8i0.js";import"./ZIndexLayer-BZxHBglw.js";import"./types-DDD23-V2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BmmqtSz1.js";import"./ReactUtils-RNztsw35.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CG73MWk5.js";import"./isPlainObject-UED8GYmG.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CYl8kbGp.js";import"./useAnimationId-kYjgFxKg.js";import"./Trapezoid-BJuggP_P.js";import"./Sector-C0Mog3VL.js";import"./Symbols-HCV45nTw.js";import"./symbol-DDPk1XI3.js";import"./step-CO9P-pBw.js";import"./Curve-DCDk8LQV.js";import"./RegisterGraphicalItemId-vJe763ER.js";import"./ErrorBarContext-BMaq7Beg.js";import"./GraphicalItemClipPath-CMalPiCh.js";import"./SetGraphicalItem-CLkVCWjn.js";import"./getZIndexFromUnknown-CJD10RPr.js";import"./graphicalItemSelectors-CTgr6Ywa.js";import"./index-1JoQw62M.js";import"./ChartSizeDimensions-BdSUC2dN.js";import"./OffsetShower-CDnSCRp1.js";import"./PlotAreaShower-xfHEq74j.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [dragIndexes, setDragIndexes] = React.useState<BrushStartEndIndex>({
      startIndex: 0,
      endIndex: dateWithValueData.length - 1
    });
    return (
      // Calc compensates for the text above the chart
      <div style={{
        width: '100%',
        height: 'calc(100% - 84px)'
      }}>
        <div>
          Start index:
          {dragIndexes.startIndex}
        </div>
        <div>
          End index:
          {dragIndexes.endIndex}
        </div>
        <ResponsiveContainer>
          <BarChart data={dateWithValueData}>
            <XAxis dataKey="value" />
            <YAxis />
            <Brush dataKey="name" height={30} onDragEnd={indexes => {
              setDragIndexes(indexes as BrushStartEndIndex);
            }} />
            <Bar dataKey="value" />
            <RechartsHookInspector />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const vt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,vt as __namedExportsOrder,It as default};

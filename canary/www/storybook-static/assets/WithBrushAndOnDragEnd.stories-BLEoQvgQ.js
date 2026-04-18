import{e as t}from"./iframe-C7MtdY8E.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DgrHMpGx.js";import{B as p}from"./BarChart-DddiBUv_.js";import{X as l}from"./XAxis-3uF26BVq.js";import{Y as h}from"./YAxis-D_0wuDlr.js";import{B as c}from"./Brush-7sB18WdV.js";import{B as x}from"./Bar-EyxNTDtI.js";import{R as u}from"./RechartsHookInspector-DFQ9rNFJ.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BARk_uhU.js";import"./immer-tybRsQ9G.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BCy35Z8x.js";import"./index-ZRFMj45p.js";import"./hooks-CRCNzzkU.js";import"./axisSelectors-BszE-kHQ.js";import"./d3-scale--QLdYl1D.js";import"./zIndexSlice-3LN6T8_r.js";import"./renderedTicksSlice-Vrp6ItcJ.js";import"./CartesianChart-CIdWsL9L.js";import"./chartDataContext-bU1HBY0X.js";import"./CategoricalChart-DeBE8RoO.js";import"./CartesianAxis-B2QCJlN1.js";import"./Layer-Ulref4PH.js";import"./Text-D3CPw6sI.js";import"./DOMUtils-Caf6EbGd.js";import"./Label-DSRQ68Gc.js";import"./ZIndexLayer-Chbgzy16.js";import"./types-BR6al878.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DDE-S1vt.js";import"./ReactUtils-BhCHdCFE.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Bu5dlaov.js";import"./isPlainObject-CwNYxtMJ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Ci3DSaKm.js";import"./useAnimationId-xNATfe3s.js";import"./Trapezoid-CKW8i93u.js";import"./Sector-AhRoIGMa.js";import"./Symbols-DB88izld.js";import"./symbol-Ct681S22.js";import"./step-DOKoL0Mc.js";import"./Curve-DoPC-oTP.js";import"./RegisterGraphicalItemId-DRO9PQuR.js";import"./ErrorBarContext-DwrVEdn2.js";import"./GraphicalItemClipPath-CvFbG0n3.js";import"./SetGraphicalItem-4oFR7JPf.js";import"./getZIndexFromUnknown-DE3FneEP.js";import"./graphicalItemSelectors-DMCp-er8.js";import"./index-B1uIQZ_f.js";import"./ChartSizeDimensions-jmlBhTx2.js";import"./OffsetShower-DHj-Abix.js";import"./PlotAreaShower-94ccGUzR.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

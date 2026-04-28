import{e as t}from"./iframe-C-pXZx8X.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-3ozDp3-_.js";import{B as p}from"./BarChart-BnXNophf.js";import{X as l}from"./XAxis-Cso_vWau.js";import{Y as h}from"./YAxis-Cf-PEWST.js";import{B as c}from"./Brush-MrX5rt2y.js";import{B as x}from"./Bar-CRFMpqtg.js";import{R as u}from"./RechartsHookInspector-BtUn4E77.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-cEBRbYcQ.js";import"./immer-BPSGuEHb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DAPnfiXY.js";import"./index-BNdn82my.js";import"./hooks-r8g2kJ2v.js";import"./axisSelectors-DSvN8duu.js";import"./d3-scale-DB0MXZYa.js";import"./zIndexSlice-DrJF7HQv.js";import"./renderedTicksSlice-DMz1msG5.js";import"./CartesianChart-DOSPFIH6.js";import"./chartDataContext-DGhRpyKC.js";import"./CategoricalChart-DtUHVQpT.js";import"./CartesianAxis-DSUJUk3Y.js";import"./Layer-B6gfj40j.js";import"./Text-BgpDM3B5.js";import"./DOMUtils-DRd1JeLt.js";import"./Label-CSYOUhma.js";import"./ZIndexLayer-C3MbX-IF.js";import"./types-TOcuhXpR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BunrfaQ9.js";import"./ReactUtils-H7Wf3vTm.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-ytK3Mr7g.js";import"./isPlainObject-CpM-pRk6.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DKyirF4T.js";import"./useAnimationId-Cz59vryg.js";import"./Trapezoid-DrJg1aIg.js";import"./Sector-D1AnDLTs.js";import"./Symbols-B0EVt28X.js";import"./symbol-Cn7BoW2g.js";import"./step-CZ17sXck.js";import"./Curve-CX8mbWGt.js";import"./RegisterGraphicalItemId-DGn9oQ3L.js";import"./ErrorBarContext-DCKdVGWu.js";import"./GraphicalItemClipPath-DVPpijAl.js";import"./SetGraphicalItem-BA0j0x-s.js";import"./getZIndexFromUnknown-B_-dA5m_.js";import"./graphicalItemSelectors-CUmdQ9g7.js";import"./index-jtYe93T2.js";import"./ChartSizeDimensions-7zC2ccyN.js";import"./OffsetShower--ZPGXMQT.js";import"./PlotAreaShower-tlilFsff.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

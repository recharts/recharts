import{e as t}from"./iframe-DJ6q0UO-.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-BTG2-4hW.js";import{B as p}from"./BarChart-DdHKaLpc.js";import{X as l}from"./XAxis-DlTasNrE.js";import{Y as h}from"./YAxis-BkUPDN4D.js";import{B as c}from"./Brush-CazcIGt1.js";import{B as x}from"./Bar-B7Y_r55G.js";import{R as u}from"./RechartsHookInspector-CMjN7xhZ.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-ClNXOKlU.js";import"./immer-DZ05EljQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CC4bWY2k.js";import"./index-h_islmiW.js";import"./hooks-BoprsZkg.js";import"./axisSelectors-tM2Ez228.js";import"./d3-scale-_iIYR1pZ.js";import"./zIndexSlice-BmNGt8JH.js";import"./renderedTicksSlice-D51KP5us.js";import"./CartesianChart-CehgIYHu.js";import"./chartDataContext-CvUYCtAC.js";import"./CategoricalChart-CFoaXUlO.js";import"./CartesianAxis-CbTmm20n.js";import"./Layer-DYjtWcck.js";import"./Text-DLyfATo-.js";import"./DOMUtils-DG6JE6vP.js";import"./Label-Cfw2XXr5.js";import"./ZIndexLayer-nrCDqpeq.js";import"./types-Ds0jwWEi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BTNw1VO2.js";import"./ReactUtils-eTAsrJ6L.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BXYjh8cu.js";import"./isPlainObject-BG7kj9kW.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BMamn6k9.js";import"./useAnimationId-DdUAPJ1J.js";import"./Trapezoid-BT8qRaiE.js";import"./Sector-CzkjfA5d.js";import"./Symbols-CZ9XpzM5.js";import"./symbol-C9svRAEA.js";import"./step-B8mY4Wsq.js";import"./Curve-CUiTauC8.js";import"./RegisterGraphicalItemId-CMX_3-4x.js";import"./ErrorBarContext-Dz-CTdIG.js";import"./GraphicalItemClipPath-DQW1wzar.js";import"./SetGraphicalItem-DKRiAGC0.js";import"./getZIndexFromUnknown-BUVxoklA.js";import"./graphicalItemSelectors-DXspcLFK.js";import"./index-Drj3rz67.js";import"./ChartSizeDimensions-Az2tJg6r.js";import"./OffsetShower-FoNPoJYn.js";import"./PlotAreaShower-DMVJxorS.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

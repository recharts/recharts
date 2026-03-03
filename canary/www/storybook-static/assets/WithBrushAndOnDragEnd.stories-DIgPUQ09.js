import{e as t}from"./iframe-DrGUwCNH.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-B-thuthJ.js";import{B as p}from"./BarChart-4z1Crc2p.js";import{X as l}from"./XAxis-DG0gA5yQ.js";import{Y as h}from"./YAxis-CXzGtzv8.js";import{B as c}from"./Brush-DJD98yKX.js";import{B as x}from"./Bar-DFHinX5t.js";import{R as u}from"./RechartsHookInspector-DVkoldVn.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B8l4f8zq.js";import"./immer-BtgqId3I.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B5QstiPk.js";import"./index-BPQwAQcQ.js";import"./hooks-MsD78rw6.js";import"./axisSelectors-DWkWWbr7.js";import"./d3-scale-ByzzBKwW.js";import"./zIndexSlice-C-eL6wuf.js";import"./renderedTicksSlice-BCPFeSIm.js";import"./CartesianChart-BEBwYk77.js";import"./chartDataContext-DU0L_61O.js";import"./CategoricalChart-CUzGTCjp.js";import"./CartesianAxis-BAqDA5_7.js";import"./Layer-DOWBbL5h.js";import"./Text-D0fVjYHK.js";import"./DOMUtils-Jzh5BZY9.js";import"./Label-B7C6-KkD.js";import"./ZIndexLayer-CBw-SdHg.js";import"./types-P3EO869A.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DrtKfZE5.js";import"./ReactUtils-C94_zE_J.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-xJQks6Bh.js";import"./isPlainObject-Bv08dW3C.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DeFl-4jd.js";import"./useAnimationId-CM7jQqD0.js";import"./Trapezoid-BR-nBhBU.js";import"./Sector-2SvHHXh3.js";import"./Symbols-DUBAqkb2.js";import"./symbol-Bc0Cydwk.js";import"./step-DKLDrfb1.js";import"./Curve-ywtP4oOQ.js";import"./RegisterGraphicalItemId-CU0Tu66M.js";import"./ErrorBarContext-Bia10oLS.js";import"./GraphicalItemClipPath-DHoOCBG2.js";import"./SetGraphicalItem-BU2rvKVc.js";import"./getZIndexFromUnknown-kZY2cf95.js";import"./graphicalItemSelectors-DdKGU9xu.js";import"./index-3x6YcQkr.js";import"./ChartSizeDimensions-DRKtapfC.js";import"./OffsetShower-7BYMSgLY.js";import"./PlotAreaShower-BXy-ESLg.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

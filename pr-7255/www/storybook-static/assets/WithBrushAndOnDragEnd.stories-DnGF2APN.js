import{e as t}from"./iframe-Bs9ufhmU.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-bNviqcqR.js";import{B as p}from"./BarChart-X_8tZ0Ma.js";import{X as l}from"./XAxis-vN0EOhjQ.js";import{Y as h}from"./YAxis-Dy4N7pk9.js";import{B as c}from"./Brush-8HhdM3jv.js";import{B as x}from"./Bar-DikLeVmF.js";import{R as u}from"./RechartsHookInspector-BLOzRcf9.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CGjn5uwQ.js";import"./immer-7dvTdnME.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BZIvkK7Y.js";import"./index-Dj-F8bgJ.js";import"./hooks-DNTcenQI.js";import"./axisSelectors-B6DmQDXD.js";import"./d3-scale-QYSZWFrh.js";import"./zIndexSlice-B-DHuVWa.js";import"./renderedTicksSlice-D4shqqjC.js";import"./CartesianChart-BB1EgM6J.js";import"./chartDataContext-pLUBtclw.js";import"./CategoricalChart-jwpeEM8k.js";import"./CartesianAxis-Dy-A2DW9.js";import"./Layer-BeNhTzXz.js";import"./Text-hajrhHnl.js";import"./DOMUtils-DooEv1Ok.js";import"./Label-DU0nM-QI.js";import"./ZIndexLayer-BNfspdHK.js";import"./types-iG6YPFqe.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BemE5Utq.js";import"./ReactUtils-DhI6Oe1E.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BF7TNpr9.js";import"./isPlainObject-DsuLoG7m.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DUsMUIL7.js";import"./useAnimationId-B97gwkv5.js";import"./Trapezoid-5VBN_EIn.js";import"./Sector-mpY_PZJM.js";import"./Symbols-D0Ncjn54.js";import"./symbol-BG2oG_xM.js";import"./step-Egwu_prR.js";import"./Curve-B9iYmKCN.js";import"./RegisterGraphicalItemId-_wgk5kOH.js";import"./ErrorBarContext-E0MFYBlH.js";import"./GraphicalItemClipPath-cqIDCUaZ.js";import"./SetGraphicalItem-DGPcT5tY.js";import"./getZIndexFromUnknown-6lFgwBH1.js";import"./graphicalItemSelectors-DaJdvWiA.js";import"./index-bM7E3l5J.js";import"./ChartSizeDimensions-SAcKlyRY.js";import"./OffsetShower-BK-2MEQe.js";import"./PlotAreaShower-BHBQx0G4.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

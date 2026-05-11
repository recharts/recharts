import{e as t}from"./iframe-CBxZ3YEm.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-Blj5Aeqs.js";import{B as p}from"./BarChart-Cd477x7h.js";import{X as l}from"./XAxis-C1aLPlbC.js";import{Y as h}from"./YAxis-myA84OCs.js";import{B as c}from"./Brush-CRzg-CKS.js";import{B as x}from"./Bar-DuDTdJBZ.js";import{R as u}from"./RechartsHookInspector-CqBmfRxm.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BEDeUj8t.js";import"./immer-CcXWnMnm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-gLcbW_Rw.js";import"./index-HycHHMGp.js";import"./hooks-DYoyM5tD.js";import"./axisSelectors-CzPcR0bZ.js";import"./d3-scale-BQHKXGzh.js";import"./zIndexSlice-De9OMF5H.js";import"./renderedTicksSlice-f_j9Tm_g.js";import"./CartesianChart-BE_qH18M.js";import"./chartDataContext-DvlevAqI.js";import"./CategoricalChart-Bg-fk5CT.js";import"./CartesianAxis-DW4xU2v8.js";import"./Layer-8oMMti5m.js";import"./Text-7hG94G_y.js";import"./DOMUtils-v8LS_cLE.js";import"./Label-C9wjKN1h.js";import"./ZIndexLayer-B7fniKOv.js";import"./types-CzApK6LP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CUBAUkFW.js";import"./ReactUtils-c7YX91Ex.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-D6xdRanx.js";import"./isPlainObject-SwII21m1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BWauEswa.js";import"./useAnimationId-Dgk97qlj.js";import"./Trapezoid-BfLDWvDz.js";import"./Sector-E_Gangzj.js";import"./Symbols-CfjjfEBZ.js";import"./symbol-CgH1RbEA.js";import"./step-i7QSy-8Q.js";import"./Curve-CyXQFnOW.js";import"./RegisterGraphicalItemId-lPm6fXRN.js";import"./ErrorBarContext-C-jVrcMZ.js";import"./GraphicalItemClipPath-DGUbYWDL.js";import"./SetGraphicalItem-8ezKiNwU.js";import"./getZIndexFromUnknown-Bv0gJF7R.js";import"./graphicalItemSelectors-Cc9iuBFD.js";import"./index-FhOfqCjV.js";import"./ChartSizeDimensions-D6Chm1KW.js";import"./OffsetShower-Cf5FndXJ.js";import"./PlotAreaShower-Bk6tssdT.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

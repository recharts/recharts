import{e as t}from"./iframe-CUlKjRv5.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./arrayEqualityCheck-DBgCs58d.js";import{B as p}from"./BarChart-GrNlqd5G.js";import{X as l}from"./XAxis-CO_kz_i5.js";import{Y as h}from"./YAxis-CKyv_Ble.js";import{B as c}from"./Brush-BxY8Erg9.js";import{B as x}from"./Bar-DwYBALo4.js";import{R as u}from"./RechartsHookInspector-DIUnr0hb.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-_1GgMiat.js";import"./immer-DSTsi-PZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CERDCORy.js";import"./index-k3Ta7lxE.js";import"./hooks-CnLCGSHs.js";import"./axisSelectors-DDDlTFJI.js";import"./d3-scale-BHCIS0TK.js";import"./zIndexSlice-ygbvIPwo.js";import"./renderedTicksSlice-j7r-ksqS.js";import"./CartesianChart-DIQmD_un.js";import"./chartDataContext-CEx1iXe-.js";import"./CategoricalChart-B3EUrP3A.js";import"./CartesianAxis-BeQQMY3-.js";import"./Layer-BRPUehgK.js";import"./Text-D0vEHMRY.js";import"./DOMUtils-2QlatUUm.js";import"./Label-CsCoT34Y.js";import"./ZIndexLayer-Dzag2pwA.js";import"./types-cseKagnM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CW5tzjbG.js";import"./ReactUtils-Dhd-bIVM.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-6qGjBTVG.js";import"./isPlainObject-D3iLjTkd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BeDuyTKv.js";import"./useAnimationId-527k5CUF.js";import"./Trapezoid-Bhuw_sBY.js";import"./Sector-DGUTJhGS.js";import"./Symbols-SwNF5E59.js";import"./symbol-ByAU1LjM.js";import"./step-ndBpbuBv.js";import"./Curve-Dj9MPAvc.js";import"./RegisterGraphicalItemId-0Us56BlX.js";import"./ErrorBarContext-CXV3xnHJ.js";import"./GraphicalItemClipPath-CUJ2i_OT.js";import"./SetGraphicalItem-DXTqVkON.js";import"./getZIndexFromUnknown-TVijfWfN.js";import"./graphicalItemSelectors-ByldMGNB.js";import"./index-CsGwSrdN.js";import"./ChartSizeDimensions-7oIIj1ej.js";import"./OffsetShower-CPkU8Ejw.js";import"./PlotAreaShower-BQaO0vts.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

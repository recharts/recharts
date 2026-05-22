import{e as t}from"./iframe-CagDbm-R.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./arrayEqualityCheck-Bn08yLiN.js";import{B as p}from"./BarChart-tqFgxs0y.js";import{X as l}from"./XAxis-CyILEj33.js";import{Y as h}from"./YAxis-Qo8_bXaH.js";import{B as c}from"./Brush-x28CgeOe.js";import{B as x}from"./Bar-B4bHhIXH.js";import{R as u}from"./RechartsHookInspector-pMEJlnqX.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BrU5Uy_m.js";import"./immer-DWuco0BF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DdluFIAh.js";import"./index-DXI37oHl.js";import"./hooks-DvlDA_Iq.js";import"./axisSelectors-Cqpe6Z2t.js";import"./d3-scale-BKLsEBZa.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-Tvm87iuX.js";import"./renderedTicksSlice-71Fk0cz1.js";import"./CartesianChart-BXvauOXS.js";import"./chartDataContext-DU5Nphzy.js";import"./CategoricalChart-DAMUlb45.js";import"./CartesianAxis-6zuZSvBM.js";import"./Layer-D2JglvMB.js";import"./Text-BNs6VPhb.js";import"./DOMUtils-Bw-DvePw.js";import"./Label-COowhm97.js";import"./ZIndexLayer-BqsAA_KH.js";import"./types-D2ON-SRi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CGOz3fKt.js";import"./AnimatedItems-HQORsnaH.js";import"./useAnimationId-BEBp-SWr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B56fHVHN.js";import"./ActiveShapeUtils-4DOuAOib.js";import"./RegisterGraphicalItemId-WhTYY9X4.js";import"./ErrorBarContext-txnn70dD.js";import"./GraphicalItemClipPath-DMoOkNN1.js";import"./SetGraphicalItem-aSNUvlix.js";import"./getZIndexFromUnknown-DoTS1eJA.js";import"./graphicalItemSelectors-69ZupsNd.js";import"./index-BDeX6XER.js";import"./ChartSizeDimensions-DNx0LPdc.js";import"./OffsetShower-BNTdFgyM.js";import"./PlotAreaShower-B8l1iW5J.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ht=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};

import{e as t}from"./iframe-BDkb7FkG.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-B0TJyWD5.js";import{B as p}from"./BarChart-DgImeKAk.js";import{X as l}from"./XAxis-CmGav0vS.js";import{Y as h}from"./YAxis-Q5HYawHS.js";import{B as c}from"./Brush-C4JcF-1I.js";import{B as x}from"./Bar-BtjbD41A.js";import{R as u}from"./RechartsHookInspector-BNEsfHz6.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BeK5tOdD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-mZGj0Z3E.js";import"./hooks-DxXidz5r.js";import"./axisSelectors-BNLmthUg.js";import"./zIndexSlice-CEfchlTx.js";import"./CartesianChart-D8s7iQvN.js";import"./chartDataContext-BN0HTO99.js";import"./CategoricalChart-QMn_55Fk.js";import"./CartesianAxis-CqOMvTf3.js";import"./Layer-DN29fGq2.js";import"./Text-DNxSgO5d.js";import"./DOMUtils-DkX8_PYo.js";import"./Label-557v0PPI.js";import"./ZIndexLayer-CSKx51xZ.js";import"./types-lD78ZLRW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BT8nO4h9.js";import"./ReactUtils-Bu2m7OLZ.js";import"./ActiveShapeUtils-BT6H0snO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CdEMe32h.js";import"./useAnimationId-Dt_DMrVN.js";import"./Trapezoid-BYTF93yz.js";import"./Sector-BDLqy63u.js";import"./Symbols-cZo6AVu-.js";import"./Curve-BhcGGWB4.js";import"./RegisterGraphicalItemId-CVSGS5U1.js";import"./ErrorBarContext-Cklgrfin.js";import"./GraphicalItemClipPath-PGYoXjM4.js";import"./SetGraphicalItem-D0--qzX6.js";import"./getZIndexFromUnknown-CxznuSwf.js";import"./graphicalItemSelectors-CvnRNsih.js";import"./index-BiD0RfS5.js";import"./ChartSizeDimensions-DMf6nTY3.js";import"./OffsetShower-CLob0hRN.js";import"./PlotAreaShower-DdbC7e3E.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const pt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,pt as __namedExportsOrder,st as default};

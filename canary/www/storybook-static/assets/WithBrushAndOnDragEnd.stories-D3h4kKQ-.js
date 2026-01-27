import{e as t}from"./iframe-DwqRYk2I.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DgzFlSOI.js";import{B as p}from"./BarChart-Ch3Z7HA0.js";import{X as l}from"./XAxis-Cyh_YOcY.js";import{Y as h}from"./YAxis-QYWka3EJ.js";import{B as c}from"./Brush-JgETFpIL.js";import{B as x}from"./Bar-BsqE6w07.js";import{R as u}from"./RechartsHookInspector-DYt25tbN.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DNDo_DVE.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-C7VpHEZH.js";import"./hooks-D1ZMD5tV.js";import"./axisSelectors-BOQABpOz.js";import"./zIndexSlice-CZHcI390.js";import"./CartesianChart-DcDVXLOL.js";import"./chartDataContext-Ctj-_rOR.js";import"./CategoricalChart-BLGSXnLr.js";import"./CartesianAxis-0yio1lEn.js";import"./Layer-CKGvS6fh.js";import"./Text-DFlmLHAl.js";import"./DOMUtils-KiKr0dq-.js";import"./Label-BBrY7asM.js";import"./ZIndexLayer-14WaUFCY.js";import"./types-DQBQm6yM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-D4tYLNyP.js";import"./ReactUtils-CSQ_QEna.js";import"./ActiveShapeUtils-DqRUZVTG.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bp9O5e-s.js";import"./useAnimationId-BgtwKRIK.js";import"./Trapezoid-DufcdAFp.js";import"./Sector-0XUVx_Z1.js";import"./Symbols--4uQfBg4.js";import"./Curve-MGg7iv1Z.js";import"./RegisterGraphicalItemId-Bfk0jvW8.js";import"./ErrorBarContext-DWBN2nFH.js";import"./GraphicalItemClipPath-D2KsqG86.js";import"./SetGraphicalItem-099u0L0c.js";import"./getZIndexFromUnknown-DetDeQ8A.js";import"./graphicalItemSelectors-0SR2nuDA.js";import"./index-B__3XDnp.js";import"./ChartSizeDimensions-BDK5RpWT.js";import"./OffsetShower-CMnq-Zau.js";import"./PlotAreaShower-DGemeH0F.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

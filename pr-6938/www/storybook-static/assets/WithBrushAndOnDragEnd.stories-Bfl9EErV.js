import{e as t}from"./iframe-DE0S0nct.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-njkWtJmX.js";import{B as p}from"./BarChart-DUWDS4KR.js";import{X as l}from"./XAxis-HiP-oMgI.js";import{Y as h}from"./YAxis-ASXYxn9M.js";import{B as c}from"./Brush-C5W3-H_P.js";import{B as x}from"./Bar-B-U9S6BR.js";import{R as u}from"./RechartsHookInspector-dBbs_0nU.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DuoQUEeP.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-C5KB-qxr.js";import"./hooks-DWbbdqvJ.js";import"./axisSelectors-BfEHf8Yv.js";import"./zIndexSlice-Blf1dc2N.js";import"./CartesianChart-BBxR-i6W.js";import"./chartDataContext-CPGe86t4.js";import"./CategoricalChart-CSOSO7HJ.js";import"./CartesianAxis-CwKKuba7.js";import"./Layer-BleDqXEW.js";import"./Text-DM7a8pWI.js";import"./DOMUtils-A7wZFaJD.js";import"./Label-DgM-_lJi.js";import"./ZIndexLayer-Dp1Pf4so.js";import"./types-B8SW-iMR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DoH9SX65.js";import"./ReactUtils-BtFFfC7o.js";import"./ActiveShapeUtils-2Zcp-jd_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DpQeIB4m.js";import"./useAnimationId-BumXreuS.js";import"./Trapezoid-BZphNEJe.js";import"./Sector-DcADG8WR.js";import"./Symbols-w5RZTm0Y.js";import"./Curve-BVDZfIkI.js";import"./RegisterGraphicalItemId-BfeEISo0.js";import"./ErrorBarContext-CdBsOezF.js";import"./GraphicalItemClipPath-JwwxWQFx.js";import"./SetGraphicalItem-DO-9Utur.js";import"./getZIndexFromUnknown-BSrIwc_Z.js";import"./graphicalItemSelectors-BHZKT-wG.js";import"./index-C9PHO12n.js";import"./ChartSizeDimensions-Bvtmd44U.js";import"./OffsetShower-6Tlh9GY1.js";import"./PlotAreaShower-C2nHCOpp.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

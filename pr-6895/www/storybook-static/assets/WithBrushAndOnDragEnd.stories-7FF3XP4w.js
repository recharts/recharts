import{e}from"./iframe-BmaSkXVD.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DFn-H49U.js";import{B as p}from"./BarChart-CxVjIM8N.js";import{X as l}from"./XAxis-C3x6dMLi.js";import{Y as h}from"./YAxis-bl9CTFgn.js";import{B as c}from"./Brush-B3FQ_dyK.js";import{B as x}from"./Bar-ZmKTP5oc.js";import{R as u}from"./RechartsHookInspector-C0qStJOJ.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Cjwd7qt6.js";import"./PolarUtils-fSNmW3dt.js";import"./RechartsWrapper-CKnhTxOl.js";import"./hooks-DXbNb-JH.js";import"./axisSelectors-CSGKwTAZ.js";import"./zIndexSlice-DNtltYbu.js";import"./CartesianChart-D0l2Cukl.js";import"./chartDataContext-CSlbi7PQ.js";import"./CategoricalChart-BDvQLJnr.js";import"./CartesianAxis-CTYOybg_.js";import"./Layer-kGCv99f8.js";import"./Text-D7kjMnBu.js";import"./DOMUtils-Ci6czfq_.js";import"./Label-Ba2fKD7_.js";import"./ZIndexLayer-B0Nv_sMb.js";import"./types-B1enpQ2U.js";import"./tooltipContext-C34n9vuI.js";import"./ReactUtils-DF_Mupxs.js";import"./ActiveShapeUtils-450HsfaK.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DuCzHhek.js";import"./useAnimationId-CSP1LMrK.js";import"./Trapezoid-B-uAYGkA.js";import"./Sector-BIUOjaCq.js";import"./Symbols-BOIH3U2b.js";import"./Curve-Ct1DVFB9.js";import"./RegisterGraphicalItemId-DmnuQhvD.js";import"./ErrorBarContext-DJ_jm3x0.js";import"./GraphicalItemClipPath-BaRcGmKq.js";import"./SetGraphicalItem-Dkq9thq_.js";import"./getZIndexFromUnknown-2YRDrp7G.js";import"./graphicalItemSelectors-B6sYLObk.js";import"./index-D8VqDYui.js";import"./ChartSizeDimensions-BIJ2rdc4.js";import"./OffsetShower-CSh__zJW.js";import"./PlotAreaShower-B9ocgXZz.js";const me={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},t={render:()=>{const[r,d]=e.useState({startIndex:0,endIndex:a.length-1});return e.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},e.createElement("div",null,"Start index:",r.startIndex),e.createElement("div",null,"End index:",r.endIndex),e.createElement(s,null,e.createElement(p,{data:a},e.createElement(l,{dataKey:"value"}),e.createElement(h,null),e.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),e.createElement(x,{dataKey:"value"}),e.createElement(u,null))))}};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const se=["WithBrushAndOnDragEnd"];export{t as WithBrushAndOnDragEnd,se as __namedExportsOrder,me as default};

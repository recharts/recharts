import{e}from"./iframe-C75Mon5f.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-CCinF1xg.js";import{B as p}from"./BarChart-MjHDxPag.js";import{X as l}from"./XAxis-D7rtUFHm.js";import{Y as h}from"./YAxis-BkOESioE.js";import{B as c}from"./Brush-BFnbgsIM.js";import{B as x}from"./Bar-C1CjDvQG.js";import{R as u}from"./RechartsHookInspector-DeYlN7PD.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DdslWj5k.js";import"./PolarUtils-gc7ouCGw.js";import"./RechartsWrapper-DtD9QMMH.js";import"./hooks-CF17bvZj.js";import"./axisSelectors-DwNVm2PQ.js";import"./zIndexSlice-Ch2lslkG.js";import"./CartesianChart-BO0IyvRA.js";import"./chartDataContext-CSddlAqh.js";import"./CategoricalChart-CjaXzYYa.js";import"./CartesianAxis-DsQ2XPjm.js";import"./Layer-DOYjA-jF.js";import"./Text-s5ZlGFzn.js";import"./DOMUtils-Bv5mFBkh.js";import"./Label-BHT6Zr6z.js";import"./ZIndexLayer-1hGb0ezX.js";import"./types-CgyKhdli.js";import"./tooltipContext-BAau_RNO.js";import"./ReactUtils-D5lwbz2E.js";import"./ActiveShapeUtils-PNhhpaVz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DTY1SpY4.js";import"./useAnimationId-BM6GD1p3.js";import"./Trapezoid-D1lAuCqF.js";import"./Sector-PYXr-REd.js";import"./Symbols-BKwRHYAq.js";import"./Curve-uThrsaDe.js";import"./RegisterGraphicalItemId-6Y3WjFD5.js";import"./ErrorBarContext-Dgxj0rk9.js";import"./GraphicalItemClipPath-CJQxttXy.js";import"./SetGraphicalItem-CMCPtKvr.js";import"./getZIndexFromUnknown-Df5WNTBt.js";import"./graphicalItemSelectors-DfMtWIPt.js";import"./index-B1HMmzG7.js";import"./ChartSizeDimensions-DU3pXVrB.js";import"./OffsetShower-C98qoUcb.js";import"./PlotAreaShower-CzYV5sJZ.js";const me={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},t={render:()=>{const[r,d]=e.useState({startIndex:0,endIndex:a.length-1});return e.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},e.createElement("div",null,"Start index:",r.startIndex),e.createElement("div",null,"End index:",r.endIndex),e.createElement(s,null,e.createElement(p,{data:a},e.createElement(l,{dataKey:"value"}),e.createElement(h,null),e.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),e.createElement(x,{dataKey:"value"}),e.createElement(u,null))))}};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

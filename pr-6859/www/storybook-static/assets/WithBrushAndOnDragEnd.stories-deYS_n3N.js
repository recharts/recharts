import{e}from"./iframe-DmHHE4lP.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-t0Foyoao.js";import{B as p}from"./BarChart-CfZouxRn.js";import{X as l}from"./XAxis-DgoG7wOz.js";import{Y as h}from"./YAxis-7nE9-RZi.js";import{B as c}from"./Brush-BuDAkM_Z.js";import{B as x}from"./Bar-C6ldBGSs.js";import{R as u}from"./RechartsHookInspector-BtHYkDer.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BLzxoPkq.js";import"./PolarUtils-BW7uHe1I.js";import"./RechartsWrapper-C1weQJJR.js";import"./hooks-bj9uygVC.js";import"./axisSelectors-Cnyrx2M2.js";import"./zIndexSlice-hpqEhuIa.js";import"./CartesianChart-C2N9FbeV.js";import"./chartDataContext-DxXmJ6_0.js";import"./CategoricalChart-dxXdOniQ.js";import"./CartesianAxis-BgTM8D2n.js";import"./Layer-B8hcK7zD.js";import"./Text-CR1SXK76.js";import"./DOMUtils-v_MlezWk.js";import"./Label-BJNNtMeT.js";import"./ZIndexLayer-Cu-NSXrz.js";import"./types-BHzH6qVj.js";import"./tooltipContext-xBV0Wx8f.js";import"./ReactUtils-ChDQdCA9.js";import"./ActiveShapeUtils-DlVOZy2E.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DV7CNXNv.js";import"./useAnimationId-DURIfTWV.js";import"./Trapezoid-Bb17YseS.js";import"./Sector-DhfQ1iXA.js";import"./Symbols-CRlDXm6y.js";import"./Curve-Dz5aWL22.js";import"./RegisterGraphicalItemId-D2_orhVu.js";import"./ErrorBarContext-D_EijXm5.js";import"./GraphicalItemClipPath-CceA_Jya.js";import"./SetGraphicalItem-CnsK4wo_.js";import"./getZIndexFromUnknown-B1q3hXKr.js";import"./graphicalItemSelectors-BuXcKGQd.js";import"./index-B2ii1mag.js";import"./ChartSizeDimensions-DBLPZq_x.js";import"./OffsetShower-D9qv0nDO.js";import"./PlotAreaShower-rpYBhLSK.js";const me={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},t={render:()=>{const[r,d]=e.useState({startIndex:0,endIndex:a.length-1});return e.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},e.createElement("div",null,"Start index:",r.startIndex),e.createElement("div",null,"End index:",r.endIndex),e.createElement(s,null,e.createElement(p,{data:a},e.createElement(l,{dataKey:"value"}),e.createElement(h,null),e.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),e.createElement(x,{dataKey:"value"}),e.createElement(u,null))))}};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

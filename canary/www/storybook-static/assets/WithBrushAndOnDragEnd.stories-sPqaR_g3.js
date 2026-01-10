import{e}from"./iframe-C7VEdwDl.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-BFuWEF_2.js";import{B as p}from"./BarChart-CpUSwmGq.js";import{X as l}from"./XAxis-lTITefqV.js";import{Y as h}from"./YAxis-BhBQhR2H.js";import{B as c}from"./Brush-BBn5cG46.js";import{B as x}from"./Bar-CM-GTHTd.js";import{R as u}from"./RechartsHookInspector-zossHO9I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BUd4YoeE.js";import"./PolarUtils-DHfJA17M.js";import"./RechartsWrapper-DEcROWOI.js";import"./hooks-BW_tvarJ.js";import"./axisSelectors-F4Rfzy8w.js";import"./zIndexSlice-BJ_Gr8zy.js";import"./CartesianChart-Csxz-3BL.js";import"./chartDataContext-CfkWD6kk.js";import"./CategoricalChart-0Xeq1mM5.js";import"./CartesianAxis-C8p5zhNH.js";import"./Layer-CPbMT7hg.js";import"./Text-BdIA0mDm.js";import"./DOMUtils-BLCIXtr_.js";import"./Label-BR_hSEq_.js";import"./ZIndexLayer-BPo_6GDC.js";import"./types-CRh2J3nK.js";import"./tooltipContext-Bt-pgH_N.js";import"./ReactUtils-DGKDkYPZ.js";import"./ActiveShapeUtils-DxCy-J0g.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dk5aROAI.js";import"./useAnimationId-BiiYSys9.js";import"./Trapezoid-CiHao4Jj.js";import"./Sector-foYN3hhu.js";import"./Symbols-HruIKh8l.js";import"./Curve-DE9HnzTx.js";import"./RegisterGraphicalItemId-CQVzSIpL.js";import"./ErrorBarContext-D5Rmuma9.js";import"./GraphicalItemClipPath-B3ICEpzV.js";import"./SetGraphicalItem-CDbWAttj.js";import"./getZIndexFromUnknown-DPeqgChD.js";import"./graphicalItemSelectors-B_N0zK0y.js";import"./index-D3VqoZ-t.js";import"./ChartSizeDimensions-DdGVjbyp.js";import"./OffsetShower-BIF6rOJj.js";import"./PlotAreaShower-YHRv7s4A.js";const me={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},t={render:()=>{const[r,d]=e.useState({startIndex:0,endIndex:a.length-1});return e.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},e.createElement("div",null,"Start index:",r.startIndex),e.createElement("div",null,"End index:",r.endIndex),e.createElement(s,null,e.createElement(p,{data:a},e.createElement(l,{dataKey:"value"}),e.createElement(h,null),e.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),e.createElement(x,{dataKey:"value"}),e.createElement(u,null))))}};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

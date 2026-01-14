import{e}from"./iframe-_im4GKTL.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DQWePApg.js";import{B as p}from"./BarChart-FeXM24yC.js";import{X as l}from"./XAxis-BtqRyYI3.js";import{Y as h}from"./YAxis-D-u8YWMK.js";import{B as c}from"./Brush-D8sFuiYM.js";import{B as x}from"./Bar-CpazbVeP.js";import{R as u}from"./RechartsHookInspector-2hFEojhh.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CaxhqgES.js";import"./PolarUtils-DcWiW1XO.js";import"./RechartsWrapper-DKFQy6Ae.js";import"./hooks-DKOVFqS5.js";import"./axisSelectors-DpIDWeTq.js";import"./zIndexSlice-CPIWfeLh.js";import"./CartesianChart-DG1wjONq.js";import"./chartDataContext-DX2vSSsK.js";import"./CategoricalChart-CQUZMGEq.js";import"./CartesianAxis-BZEJptN1.js";import"./Layer-ojK6bjXb.js";import"./Text-DEtZyA_I.js";import"./DOMUtils-BcupyZUP.js";import"./Label-CTy8eywr.js";import"./ZIndexLayer-DmWCVoEY.js";import"./types-CFuB44L5.js";import"./tooltipContext-BHy7B8jS.js";import"./ReactUtils-CAkOWUwD.js";import"./ActiveShapeUtils-rIph4crd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ejGTCKcw.js";import"./useAnimationId-iCdU_Q_k.js";import"./Trapezoid-C1OI6suu.js";import"./Sector-BGg8SpOK.js";import"./Symbols-aMSa3fiu.js";import"./Curve-CjWJcBC1.js";import"./RegisterGraphicalItemId-B4K3Ftz3.js";import"./ErrorBarContext-NodAal-E.js";import"./GraphicalItemClipPath-BfdvnoI7.js";import"./SetGraphicalItem-fuqPKC-n.js";import"./getZIndexFromUnknown-DyzgZIxl.js";import"./graphicalItemSelectors-BsyuKHhZ.js";import"./index-B3zuwbjl.js";import"./ChartSizeDimensions-Db8YW_qh.js";import"./OffsetShower-C0adziBs.js";import"./PlotAreaShower-BEBglPgm.js";const me={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},t={render:()=>{const[r,d]=e.useState({startIndex:0,endIndex:a.length-1});return e.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},e.createElement("div",null,"Start index:",r.startIndex),e.createElement("div",null,"End index:",r.endIndex),e.createElement(s,null,e.createElement(p,{data:a},e.createElement(l,{dataKey:"value"}),e.createElement(h,null),e.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),e.createElement(x,{dataKey:"value"}),e.createElement(u,null))))}};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

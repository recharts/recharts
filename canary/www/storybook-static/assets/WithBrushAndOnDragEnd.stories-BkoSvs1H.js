import{R as t}from"./iframe-D-xaWYx8.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-D3SQ2MTt.js";import{B as p}from"./BarChart-Drrjol_X.js";import{X as l}from"./XAxis-CMZs7JPg.js";import{Y as h}from"./YAxis-DvS3ruRg.js";import{B as x}from"./Brush-BmuSg5nY.js";import{B as c}from"./Bar-CbTn4WuX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Js9uooEF.js";import"./throttle-BmvgL6Rb.js";import"./index-B0Sv0m1A.js";import"./index-CA946KFv.js";import"./RechartsWrapper-BqPcQfd6.js";import"./axisSelectors-DG_H3BOM.js";import"./polarAxisSelectors-B6of_7Ld.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-fHLtEQjZ.js";import"./index-DJEWl4Hb.js";import"./index-ByDoJ5qb.js";import"./renderedTicksSlice-L8xFZ5qK.js";import"./index-BBNxXXGk.js";import"./CartesianChart-Dmz6gYzC.js";import"./ZIndexPortal-BwYTG8oV.js";import"./CategoricalChart-q3kg2ZZV.js";import"./CartesianAxis-Df6qFn96.js";import"./Layer-BIK5Xkd-.js";import"./Text-0YUR20e7.js";import"./pageBackground-DVX0bm4d.js";import"./ZIndexLayer-E_Dtb0Mx.js";import"./Label-1rgKTcFA.js";import"./types-Bc5RKUKD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-ZtaAtRMQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DbRUJHHI.js";import"./useAnimationId-CvbEaa0a.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-wywHDhQW.js";import"./tooltipContext-nIaZWK7s.js";import"./dataEntryStyles-Dh5c7_-V.js";import"./ErrorBarContext-ChtZm3AF.js";import"./activeStyles-QtdqAqWx.js";import"./SetGraphicalItem-DMIM43_P.js";import"./getZIndexFromUnknown-BBqLZbMG.js";import"./useEffectiveDataKey-D7oticDs.js";import"./omit-C9bmV5yv.js";import"./isArguments-yB-y1yaH.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};

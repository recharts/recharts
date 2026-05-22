import{e as t}from"./iframe-DgFUiQiK.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./arrayEqualityCheck-LPKQSaXm.js";import{B as p}from"./BarChart-Dea3OGcu.js";import{X as l}from"./XAxis-CWlzFfKK.js";import{Y as h}from"./YAxis-B1_SZb1V.js";import{B as c}from"./Brush-48OZMk2o.js";import{B as x}from"./Bar-CZs7Jc4h.js";import{R as u}from"./RechartsHookInspector-BQ9yzd9s.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C_bUtyXy.js";import"./immer-Ca0Cy3ce.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Deqq_iXZ.js";import"./index-BBnacJAP.js";import"./hooks-CisH2h_f.js";import"./axisSelectors-Q9bQQnzw.js";import"./d3-scale-HhLt2ZCp.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-DXOhyCux.js";import"./renderedTicksSlice-CX5tvx9V.js";import"./CartesianChart-Br6s862c.js";import"./chartDataContext-BrtjpLFC.js";import"./CategoricalChart-vPZ8jvpO.js";import"./CartesianAxis-n56eB7xd.js";import"./Layer-CKwu47GO.js";import"./Text-BqcFD908.js";import"./DOMUtils-DG_6devH.js";import"./Label-BFkeduE8.js";import"./ZIndexLayer-DZ2vjGZc.js";import"./types-D_oNXqce.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-JWKlDLNL.js";import"./AnimatedItems-BOr9vF6Q.js";import"./useAnimationId-CCpHVl00.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-A65MZM5i.js";import"./ActiveShapeUtils-BELkaCyh.js";import"./RegisterGraphicalItemId-fp2G-2V_.js";import"./ErrorBarContext-Ompx7WAJ.js";import"./GraphicalItemClipPath-Be4OXw7H.js";import"./SetGraphicalItem-CngLT_zh.js";import"./getZIndexFromUnknown-DNormy02.js";import"./graphicalItemSelectors-KNBgCa0N.js";import"./index-DgA4mNoJ.js";import"./ChartSizeDimensions-B1UuSRJB.js";import"./OffsetShower-BmC__2iI.js";import"./PlotAreaShower-CI2PfPEp.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

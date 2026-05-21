import{e as t}from"./iframe-CWtGA3nN.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./arrayEqualityCheck-SSZ_TbBR.js";import{B as p}from"./BarChart-BEToriSp.js";import{X as l}from"./XAxis-DW0rJY1W.js";import{Y as h}from"./YAxis-BNqIiiyx.js";import{B as c}from"./Brush-D12RTw7n.js";import{B as x}from"./Bar-DPt3FqP7.js";import{R as u}from"./RechartsHookInspector-C5rf562U.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DAVWEwBG.js";import"./immer-BFspOnss.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BtFvOF_N.js";import"./index-CJJNMar2.js";import"./hooks-2GkvPwk3.js";import"./axisSelectors-B2ypiSef.js";import"./d3-scale-QF4ItY9H.js";import"./zIndexSlice-DXFiHolo.js";import"./renderedTicksSlice-dpcUCF55.js";import"./CartesianChart-CjBRb4BQ.js";import"./chartDataContext-BDE8JW6h.js";import"./CategoricalChart-VkWulsmh.js";import"./CartesianAxis-Bxj1i8r5.js";import"./Layer-CPnmijdU.js";import"./Text-C8joD4Pq.js";import"./DOMUtils-CParKcwz.js";import"./Label-C--aO5Ak.js";import"./ZIndexLayer-DtffmqPt.js";import"./types-DgK_EaWG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CnfOawa_.js";import"./ReactUtils-JfqC4NUj.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CNr5V-0I.js";import"./useAnimationId-B0ac7aow.js";import"./ActiveShapeUtils-CdHtuYAv.js";import"./RegisterGraphicalItemId-6R0wFFYv.js";import"./ErrorBarContext-Bkb8bdCY.js";import"./GraphicalItemClipPath-636H-9xI.js";import"./SetGraphicalItem-DcEByKaS.js";import"./getZIndexFromUnknown-CDklThju.js";import"./graphicalItemSelectors-BfrjCcn5.js";import"./index-DsA403Ur.js";import"./ChartSizeDimensions-BdcGth4f.js";import"./OffsetShower-BzgHuzNu.js";import"./PlotAreaShower-5_nPAcLw.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const lt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};

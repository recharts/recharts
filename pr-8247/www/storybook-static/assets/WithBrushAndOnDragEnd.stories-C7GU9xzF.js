import{R as t}from"./iframe-CcEsDsPt.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-B6RUMmkk.js";import{B as p}from"./BarChart-B4FyxkJ6.js";import{X as l}from"./XAxis-BYDL1VAX.js";import{Y as h}from"./YAxis-ioZsuscH.js";import{B as x}from"./Brush-D69O_Emf.js";import{B as c}from"./Bar-DMdUcgyA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CG7EywaD.js";import"./throttle-DZ4rLUZb.js";import"./index-BtX-QQGe.js";import"./index-BVtuMGKw.js";import"./RechartsWrapper-Clhdkuph.js";import"./axisSelectors-CKb6nzHd.js";import"./polarAxisSelectors-DR_PitVn.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CJ6MxznC.js";import"./index-SbP6Yowi.js";import"./index--ncHqsRr.js";import"./renderedTicksSlice-ModyArOC.js";import"./index-Cos4qCXe.js";import"./fillDefinitions-C6z_LMZM.js";import"./CartesianChart-C019ixZ1.js";import"./chartDataContext-DMXCxnSO.js";import"./CategoricalChart-BMAmMdOt.js";import"./CartesianAxis-BUPldUtv.js";import"./Layer-fXDLQXYt.js";import"./Text-wPKGoZhq.js";import"./ZIndexLayer-DOqZSl62.js";import"./Label-CMmdEaqf.js";import"./types-DELOeU-O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-frn6yaTB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ZV4Rn0ty.js";import"./useAnimationId-qpAzE9JI.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CMoHIOd4.js";import"./tooltipContext-CGOWsEmb.js";import"./ErrorBarContext-CPIS3FDy.js";import"./activeStyles-CiUshd_8.js";import"./SetGraphicalItem-CHwZeAHG.js";import"./getZIndexFromUnknown-BuuOwQKA.js";import"./useEffectiveDataKey-B9tlhySB.js";import"./omit-DY-nh95c.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};

import{R as t}from"./iframe-D4kLWznI.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-B28gm5Zj.js";import{B as p}from"./BarChart-DCpaS6ve.js";import{X as l}from"./XAxis-CIt9BLfr.js";import{Y as h}from"./YAxis-DTOW1dZ3.js";import{B as x}from"./Brush-7ht7MZ4e.js";import{B as c}from"./Bar-L9sZCWod.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CJYKgT8A.js";import"./get-CjriyByo.js";import"./throttle-q19G1wYU.js";import"./index-K9fqWjcX.js";import"./index-BZ6MCrYJ.js";import"./RechartsWrapper-Brhd5wtn.js";import"./axisSelectors-ByHGSv-T.js";import"./polarAxisSelectors-Jvx5Hvrj.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-COuExidI.js";import"./index-BukBKnfG.js";import"./index-BSDf5RkV.js";import"./renderedTicksSlice-BRzk6Zuy.js";import"./index-Cxoy9Bx4.js";import"./fillDefinitions-uAqib7o2.js";import"./CartesianChart-CYGJ7Vi6.js";import"./chartDataContext-ExwO8N-9.js";import"./CategoricalChart-lvaD8ywk.js";import"./CartesianAxis-BbZQB26a.js";import"./Layer-BiQ6tIpf.js";import"./Text-NG93JaM3.js";import"./ZIndexLayer-DTTyUNkX.js";import"./Label-CC2QlraV.js";import"./types-C0VOENzr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-CQy-JarL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BzREhQg7.js";import"./useAnimationId-Cda-LmXY.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CmC5_l1r.js";import"./tooltipContext-BfGQtnp7.js";import"./ErrorBarContext-D-e_coEF.js";import"./activeStyles-B6xOxwnr.js";import"./SetGraphicalItem-BpVaXpzF.js";import"./getZIndexFromUnknown-AewYoVT7.js";import"./useEffectiveDataKey-KQzX-PyK.js";import"./omit-DVO_AIbf.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

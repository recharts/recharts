import{R as t}from"./iframe-B6IWu9YI.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CiiKnRRR.js";import{B as p}from"./BarChart-C_insBZF.js";import{X as l}from"./XAxis-Dlj0iAIW.js";import{Y as h}from"./YAxis-MTRfWgoi.js";import{B as x}from"./Brush-DZWQlnzM.js";import{B as c}from"./Bar-DtJxtlCs.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D5gBkMry.js";import"./throttle-BURJLM__.js";import"./index-BTlMcQeh.js";import"./index-BGlqIfcK.js";import"./RechartsWrapper-ut8KRm06.js";import"./axisSelectors-DNbDiKxI.js";import"./polarAxisSelectors-sP0_8T_l.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BnDY_Nfy.js";import"./index-D9tAsY9i.js";import"./index-gbAMyFwS.js";import"./renderedTicksSlice-C5_vrS83.js";import"./index-DqMscQEy.js";import"./fillDefinitions-CycD80fW.js";import"./CartesianChart-CXZ1AepY.js";import"./chartDataContext-CXAoEtMH.js";import"./CategoricalChart-dyk1Sqmj.js";import"./CartesianAxis-Q1_hDZPE.js";import"./Layer-DH6wa-As.js";import"./Text-BO6nkoy7.js";import"./ZIndexLayer-6PrGVGr8.js";import"./Label-DTgwgIlk.js";import"./types-CluQiZar.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-B1GQ2fCv.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DojOoXFW.js";import"./useAnimationId-CU9aT4qK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bk4aWoxM.js";import"./tooltipContext-BPoH_Fh4.js";import"./ErrorBarContext-DvofuvtM.js";import"./activeStyles-BITXl8mO.js";import"./SetGraphicalItem-BnKu0Jsk.js";import"./getZIndexFromUnknown-C22CLdSs.js";import"./useEffectiveDataKey-B8xnYYq1.js";import"./omit-BJqo31UA.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

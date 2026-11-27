import{R as t}from"./iframe-Dt7VmJVd.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CsJRlQGe.js";import{B as p}from"./BarChart-B5badkDm.js";import{X as l}from"./XAxis-6DHVILmw.js";import{Y as h}from"./YAxis-BGz_S1YP.js";import{B as x}from"./Brush-DeZ7frQM.js";import{B as c}from"./Bar-lKzcet16.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D90LOu0B.js";import"./get-CjriyByo.js";import"./throttle-DKLEp5Cv.js";import"./index-DIUBesy2.js";import"./index-r5JwRAUa.js";import"./RechartsWrapper-DmetyJsw.js";import"./axisSelectors-DsQjGGXt.js";import"./polarAxisSelectors-CfQ5T7pN.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-DKSFl2hd.js";import"./index-L0jXhzhq.js";import"./index-4O_IsFKD.js";import"./renderedTicksSlice-Dq9RCDmE.js";import"./index-CJYqS20C.js";import"./fillDefinitions-cJ_Pkre2.js";import"./CartesianChart-DLv9S8DO.js";import"./chartDataContext-DwcTyBcz.js";import"./CategoricalChart-DfxrMEj6.js";import"./CartesianAxis-D2lewiOd.js";import"./Layer-CKqAbqeS.js";import"./Text-CcewevJy.js";import"./ZIndexLayer-DkTMeL_u.js";import"./Label-DBOYMKjR.js";import"./types-D6xyOnmX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-BTAsZYzb.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dhd8BSnf.js";import"./useAnimationId-CZxgU6AP.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Boj2HH09.js";import"./tooltipContext-CB1f6TvU.js";import"./ErrorBarContext-BfQEnsTO.js";import"./activeStyles-CXzu6olF.js";import"./SetGraphicalItem-meI4aCtS.js";import"./getZIndexFromUnknown-CDVfEwyz.js";import"./useEffectiveDataKey-DfkEl2f7.js";import"./omit-BkInlzwT.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

import{R as t}from"./iframe-J6essBJs.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BsmeZsA8.js";import{B as p}from"./BarChart-D1FOUlHo.js";import{X as l}from"./XAxis-Oxu4uJGF.js";import{Y as h}from"./YAxis-Ou9wZ7uM.js";import{B as x}from"./Brush-CpvHd1dp.js";import{B as c}from"./Bar-BUbxm_XB.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B0dQjUYN.js";import"./get-CjriyByo.js";import"./throttle-rB4iKGhW.js";import"./index-BfoAYr9-.js";import"./index-B048aLjq.js";import"./RechartsWrapper-CQZiUgoa.js";import"./axisSelectors-COh-2QwC.js";import"./polarAxisSelectors-DoWbS56a.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-mCWeQZGc.js";import"./index-CDhxvRQi.js";import"./index-B6b_sXBt.js";import"./renderedTicksSlice-CxD0Hqd-.js";import"./index-CrSQFTfs.js";import"./fillDefinitions-DxPSgWUP.js";import"./CartesianChart-89WXJ_-l.js";import"./chartDataContext-BzXVBn_L.js";import"./CategoricalChart-BsPicsjO.js";import"./CartesianAxis-BlggDoMg.js";import"./Layer-ePHruQv_.js";import"./Text-Ik43AMmT.js";import"./ZIndexLayer-CqPJfsaa.js";import"./Label-DrwYb9eR.js";import"./types-B8ASDW8U.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-BOxNMiFO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D7oaCIG9.js";import"./useAnimationId-TXNHUPXz.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CpyR9gHD.js";import"./tooltipContext-DSBQQpWt.js";import"./ErrorBarContext-BsKM5vJT.js";import"./activeStyles-Bv4vkUPt.js";import"./SetGraphicalItem-DrwlXMoh.js";import"./getZIndexFromUnknown-B_FQ6YGb.js";import"./useEffectiveDataKey-XIQJdOoE.js";import"./omit-BLhRN2pu.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

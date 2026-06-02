import{c as t}from"./iframe-QM_Hy95O.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./zIndexSlice-BlNPxokt.js";import{B as p}from"./BarChart-DZc7n4kR.js";import{X as l}from"./XAxis-k_T7UBmN.js";import{Y as h}from"./YAxis-ByuMssjK.js";import{B as x}from"./Brush-SR9DJduv.js";import{B as c}from"./Bar-BT3DLKCh.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-fQ35ak9n.js";import"./index-CPQwco96.js";import"./index-CyaeIqvy.js";import"./get-in6fAyvy.js";import"./resolveDefaultProps-BlXEfe9z.js";import"./isWellBehavedNumber-COg8tf3N.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ls9ymLSy.js";import"./index-rIa8t0ZL.js";import"./index-CGSa8iwo.js";import"./renderedTicksSlice-CdDiUgXh.js";import"./axisSelectors-CnIWqyv7.js";import"./d3-scale-CDUvP8fj.js";import"./CartesianChart-BOBGMUhC.js";import"./chartDataContext-Cuzu216J.js";import"./CategoricalChart-C66Yjwv3.js";import"./CartesianAxis-B-Qfc6z6.js";import"./Layer-DMLrZzOp.js";import"./Text-CiqEhbxu.js";import"./DOMUtils-O0X-t8NY.js";import"./Label-D4PO75Y9.js";import"./ZIndexLayer-BiKPrQca.js";import"./types-B29_egWp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-BHpqlu0M.js";import"./ReactUtils-BIEdgNAL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dfia817X.js";import"./useAnimationId-BxdIxPQQ.js";import"./ActiveShapeUtils-Ben0Z5Gs.js";import"./RegisterGraphicalItemId-Ch0Vf5AU.js";import"./ErrorBarContext-BHFsn856.js";import"./GraphicalItemClipPath-BHIKYbjI.js";import"./SetGraphicalItem-DzbZ3uGV.js";import"./getZIndexFromUnknown-DQuy0pqP.js";import"./graphicalItemSelectors-BTjfDUNL.js";const ot={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const dt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,dt as __namedExportsOrder,ot as default};

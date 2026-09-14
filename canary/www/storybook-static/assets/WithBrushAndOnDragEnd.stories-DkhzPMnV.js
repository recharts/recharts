import{R as t}from"./iframe-29nHamCu.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CZafadFX.js";import{B as p}from"./BarChart-DMh9knIm.js";import{X as l}from"./XAxis-cHqDX1J9.js";import{Y as h}from"./YAxis-bbUKYKRn.js";import{B as x}from"./Brush-D6kx6yMp.js";import{B as c}from"./Bar-BEwgL4gT.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BMJYFYDy.js";import"./index-B7e8weS_.js";import"./index-C0L5A02v.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BjAFj7Tx.js";import"./isWellBehavedNumber-DyxIwD8w.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BavJbx8L.js";import"./axisSelectors-DXKrHL3Y.js";import"./d3-scale-hLJByxX9.js";import"./index-pQY_ysof.js";import"./index-wUuIvtYb.js";import"./renderedTicksSlice-Dofh94RU.js";import"./index-Dx-xeLKA.js";import"./CartesianChart-1Z_jkdOD.js";import"./chartDataContext-CCKAe3q7.js";import"./CategoricalChart-Vufmz-V6.js";import"./CartesianAxis-BV_FsFXh.js";import"./Layer-DIXDf-ah.js";import"./Text-CjGTSUlm.js";import"./DOMUtils-77SlA1GE.js";import"./useId-D5dycxfw.js";import"./useBackwardsCompatibleTheme-DOdaTjfK.js";import"./Label-BEXPduDP.js";import"./ZIndexLayer-DAa-R99d.js";import"./types-DxO-1x0s.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Cl8F531s.js";import"./useAnimationId-BJ08w86T.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-VhVaxtJC.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DXdVOUCI.js";import"./tooltipContext-B1ggJUWB.js";import"./RegisterGraphicalItemId-C0MFc77r.js";import"./ErrorBarContext-D_EVW9Tx.js";import"./GraphicalItemClipPath-BHF9lgk1.js";import"./SetGraphicalItem-CPEqj7GM.js";import"./getZIndexFromUnknown-B2y4Cw_c.js";import"./useGraphicalItemIdentity-BP_5vAW2.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

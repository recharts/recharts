import{R as t}from"./iframe-L3U4PXsg.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DEY0PQhJ.js";import{B as p}from"./BarChart-COv859Wc.js";import{X as l}from"./XAxis-Cr6XecvK.js";import{Y as h}from"./YAxis-f7uBkTcv.js";import{B as x}from"./Brush-D5NxqT4I.js";import{B as c}from"./Bar-BpysXjwb.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-1AGwrNmW.js";import"./index-Bc6oV31c.js";import"./index-DwDM_7Ax.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DZ-vNTge.js";import"./isWellBehavedNumber-BwlzE5Kb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dhr4IQZK.js";import"./index-kTWfYntd.js";import"./index-ywjMrX_X.js";import"./axisSelectors-BUQrPPfP.js";import"./d3-scale-BML9T1At.js";import"./renderedTicksSlice-D2JO8twM.js";import"./CartesianChart-INIUEhvM.js";import"./chartDataContext-EPhxp5b3.js";import"./CategoricalChart-mkEHtD3F.js";import"./CartesianAxis-DJ55n4uj.js";import"./Layer-CK7JaaLc.js";import"./Text-DovToi-v.js";import"./DOMUtils-BtvfpILU.js";import"./Label-B7Q2YiAq.js";import"./ZIndexLayer-Bn3RUVWt.js";import"./types-oKR4keO9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CsEJ0H_M.js";import"./isBuffer-BG75eWKN.js";import"./tooltipContext-q_KI6h-9.js";import"./AnimatedItems-Cx-Jnru-.js";import"./useAnimationId-BO1w5K0N.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C4EXzzh1.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DLAF0QLB.js";import"./RegisterGraphicalItemId-CUZSiPzN.js";import"./ErrorBarContext-BscpV9GC.js";import"./GraphicalItemClipPath-BgQIEIQL.js";import"./SetGraphicalItem-BkVYHSQy.js";import"./getZIndexFromUnknown-CDHNrHbY.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BJYLeCHd.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const lt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};

import{R as t}from"./iframe-Bzk7zQca.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CmFEWq1r.js";import{B as p}from"./BarChart-CZRwSOsY.js";import{X as l}from"./XAxis-BwFTdCod.js";import{Y as h}from"./YAxis-SS3sg1KC.js";import{B as x}from"./Brush-DT6JMWHv.js";import{B as c}from"./Bar-D7T9SqkV.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CcXYFoUI.js";import"./index-CeYl3XRo.js";import"./index-D8DPmuyK.js";import"./get-CihDQax7.js";import"./resolveDefaultProps-CJmyog69.js";import"./isWellBehavedNumber-CzHA7xI4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DcMBMMpz.js";import"./index-CKgE1yXu.js";import"./index-OXAI-BjX.js";import"./renderedTicksSlice-CLAMxmGy.js";import"./axisSelectors-BZF8A_qV.js";import"./d3-scale-MuAf3A9e.js";import"./string-B6fdYHAA.js";import"./CartesianChart-C4aLau3c.js";import"./chartDataContext-CKqg-aWy.js";import"./CategoricalChart-BpAfwFxI.js";import"./CartesianAxis-BuH3LaY7.js";import"./Layer-C58in0aX.js";import"./Text-D9hBaYLe.js";import"./DOMUtils-DFVOZKBs.js";import"./Label-CTPsCXr1.js";import"./ZIndexLayer-DxzvrsVM.js";import"./types-BYFlfVWD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-Ccz7S-_U.js";import"./AnimatedItems-Bm1dVVre.js";import"./useAnimationId-3u1Yr1gs.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CDk6Iz6Z.js";import"./ActiveShapeUtils-Dm9siI7l.js";import"./RegisterGraphicalItemId-C-C-Ugyg.js";import"./ErrorBarContext-C883JGGF.js";import"./GraphicalItemClipPath-Bjzuz5Yo.js";import"./SetGraphicalItem-BZrvK3UD.js";import"./getZIndexFromUnknown-CpdBFIll.js";import"./graphicalItemSelectors-B0IMupcf.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const mt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,mt as __namedExportsOrder,dt as default};

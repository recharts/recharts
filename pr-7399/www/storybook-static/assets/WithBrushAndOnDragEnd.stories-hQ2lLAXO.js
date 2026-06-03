import{c as t}from"./iframe-CSdIsBuA.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./zIndexSlice-Cwyv9NeI.js";import{B as p}from"./BarChart-CAleagis.js";import{X as l}from"./XAxis-4daNYmE3.js";import{Y as h}from"./YAxis-ONZy-yVZ.js";import{B as x}from"./Brush-UmMLI8_2.js";import{B as c}from"./Bar-ClL7ZYN-.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DsufihQm.js";import"./index-Cpoemtz2.js";import"./index-DE5N2T-X.js";import"./get-Duntrb6V.js";import"./resolveDefaultProps-DILKQm8l.js";import"./isWellBehavedNumber-C3OI8iVg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B89fPpLO.js";import"./index-BTvkQKhU.js";import"./index-Bec9HE3p.js";import"./renderedTicksSlice-B5Ptxudq.js";import"./axisSelectors-BnFkCmMm.js";import"./d3-scale-B9s2XGKQ.js";import"./CartesianChart-Bk8EQL3g.js";import"./chartDataContext-BUAn3ipS.js";import"./CategoricalChart-DbkFDn9v.js";import"./CartesianAxis-DbuOwL9w.js";import"./Layer-B_G2sVc2.js";import"./Text-B3fnIIS6.js";import"./DOMUtils-BrUe4Qn6.js";import"./Label-BjSFKFzq.js";import"./ZIndexLayer-D0Yli8nf.js";import"./types-Ct8C6hXI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-CRnt8zGA.js";import"./ReactUtils-BhhiwOUg.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CPwzoQtY.js";import"./useAnimationId-B6008U_B.js";import"./ActiveShapeUtils-9x_mtGFa.js";import"./RegisterGraphicalItemId-DM7h7YxF.js";import"./ErrorBarContext-BgoP0PAw.js";import"./GraphicalItemClipPath-DPD0FrgU.js";import"./SetGraphicalItem-D2hWeYSE.js";import"./getZIndexFromUnknown-BaumsgSV.js";import"./graphicalItemSelectors-COfuKnh5.js";const ot={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

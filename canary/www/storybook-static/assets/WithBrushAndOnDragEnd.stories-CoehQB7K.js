import{c as t}from"./iframe-CJZgj0uU.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./zIndexSlice-BZ2O-OQH.js";import{B as p}from"./BarChart-C3420kez.js";import{X as l}from"./XAxis-BSW-Wlgv.js";import{Y as h}from"./YAxis-BAQCElzz.js";import{B as x}from"./Brush-CTWiiDVU.js";import{B as c}from"./Bar-KGmct2vF.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BIrrzgtK.js";import"./index-BaU2Z89k.js";import"./index-BRhVkoAq.js";import"./get-BEAZ2r52.js";import"./resolveDefaultProps-FKfcMfmF.js";import"./isWellBehavedNumber-Nplq3bnb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DQ7nKJcr.js";import"./index-CU49z8K0.js";import"./index-KU4xeJqQ.js";import"./renderedTicksSlice-Bd5uuDyd.js";import"./axisSelectors-Q9vNN-fQ.js";import"./d3-scale-DdptYiWa.js";import"./CartesianChart-BaL0sKso.js";import"./chartDataContext-BuQzXvR1.js";import"./CategoricalChart-Q8RRHSJw.js";import"./CartesianAxis-BX7jntaJ.js";import"./Layer-ydyUpJJb.js";import"./Text-D112bEeq.js";import"./DOMUtils-BgafkoVk.js";import"./Label-CJIrHnSQ.js";import"./ZIndexLayer-DPHRw4Ib.js";import"./types-CiRy8kfJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-DdsaO4dB.js";import"./ReactUtils-GZ1OoiCv.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DN1lBA6W.js";import"./useAnimationId-Bs6-Zm7y.js";import"./ActiveShapeUtils-BjI4G98c.js";import"./RegisterGraphicalItemId-Y2xEXS3n.js";import"./ErrorBarContext-CS0wxcMb.js";import"./GraphicalItemClipPath-DHmOdu8W.js";import"./SetGraphicalItem-xXSm9JS4.js";import"./getZIndexFromUnknown-Cnah0vsn.js";import"./graphicalItemSelectors-CK02F2-J.js";const ot={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

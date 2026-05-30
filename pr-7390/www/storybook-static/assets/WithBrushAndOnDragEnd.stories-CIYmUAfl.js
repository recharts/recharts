import{c as t}from"./iframe-UCAhYs-z.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./zIndexSlice-D1yLUW4N.js";import{B as p}from"./BarChart-B-dfHpMY.js";import{X as l}from"./XAxis-DQ_rFapE.js";import{Y as h}from"./YAxis-COo7eY63.js";import{B as x}from"./Brush-BjksiGNO.js";import{B as c}from"./Bar-9Zu4jCDx.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-C7lWlBZP.js";import"./index-DNUUkfMj.js";import"./index-DUfS7S-b.js";import"./get-_XX617w0.js";import"./resolveDefaultProps-x5qwSX1Y.js";import"./isWellBehavedNumber-km_cSMyX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DH9U6NxN.js";import"./index-CWyZ4H7B.js";import"./index-CgqmNVZ9.js";import"./renderedTicksSlice-c5635lKm.js";import"./axisSelectors-DDRfemS2.js";import"./d3-scale-4iD7H2_D.js";import"./CartesianChart-W_64lWDO.js";import"./chartDataContext-tDfcFOTc.js";import"./CategoricalChart-D1LSz5Gs.js";import"./CartesianAxis-UsQkFlnQ.js";import"./Layer-BbZFEpf4.js";import"./Text-Rw6qQ1RF.js";import"./DOMUtils-BWCSYHt1.js";import"./Label-CtGR-die.js";import"./ZIndexLayer-CEmXwARt.js";import"./types-tyluCCo2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-BjQ73eS5.js";import"./ReactUtils-CzulCaS-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-_bYQmpgX.js";import"./useAnimationId-BjOATGeC.js";import"./ActiveShapeUtils-BWM9wxaW.js";import"./RegisterGraphicalItemId-ByRoWgeN.js";import"./ErrorBarContext-Cvfv4OR0.js";import"./GraphicalItemClipPath-C-wdvxqO.js";import"./SetGraphicalItem-X5GoC_bE.js";import"./getZIndexFromUnknown-mCZj_BBm.js";import"./graphicalItemSelectors-BSW7Id0m.js";const ot={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

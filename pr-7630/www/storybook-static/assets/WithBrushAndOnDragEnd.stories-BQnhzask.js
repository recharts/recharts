import{R as t}from"./iframe-osdC7w3x.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-deUrzjsz.js";import{B as p}from"./BarChart-CfHRLWa3.js";import{X as l}from"./XAxis-B__lQt6h.js";import{Y as h}from"./YAxis-DYUQr3XS.js";import{B as x}from"./Brush-B0W3ZPVr.js";import{B as c}from"./Bar-C8jawNzS.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-yBEImYyh.js";import"./index-Dk6HIvLW.js";import"./index-DYD_OYQh.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BjlKs9r7.js";import"./isWellBehavedNumber-Ch_81v8O.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BwYigjFj.js";import"./index-0D71YoJz.js";import"./index-BnccS2yU.js";import"./axisSelectors-D59_Gagr.js";import"./d3-scale-Dxvyh_dk.js";import"./renderedTicksSlice-BzoWiF6G.js";import"./CartesianChart-D55rucOT.js";import"./chartDataContext-DGjFZnBH.js";import"./CategoricalChart-CACDpCto.js";import"./CartesianAxis-D1s41LT1.js";import"./Layer-CRq3eSZM.js";import"./Text-HkDUvF78.js";import"./DOMUtils-CpdlvjrD.js";import"./Label-CRRMP5SS.js";import"./ZIndexLayer-C_4Zumz8.js";import"./types-PJaZpOTb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-4-tV1CA2.js";import"./isBuffer-BG75eWKN.js";import"./tooltipContext-DugeM6MB.js";import"./AnimatedItems-DHXks09V.js";import"./useAnimationId-T5o_BkmZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-IzVRkUh0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DA6oNeNX.js";import"./RegisterGraphicalItemId-Bpt47ePh.js";import"./ErrorBarContext-DDxN4O9o.js";import"./GraphicalItemClipPath-CchViqUF.js";import"./SetGraphicalItem-Qozm5Dg5.js";import"./getZIndexFromUnknown-CDLEPKSa.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DAicamNa.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

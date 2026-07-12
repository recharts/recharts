import{R as t}from"./iframe-U4mOrMwe.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BlSgM3ea.js";import{B as p}from"./BarChart-Q_UdB7wa.js";import{X as l}from"./XAxis-DG6xcemZ.js";import{Y as h}from"./YAxis-DLdDDS3Z.js";import{B as x}from"./Brush-Bt2nnfx5.js";import{B as c}from"./Bar-CApePqjt.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C66Yjghp.js";import"./index-DUYa25JH.js";import"./index-BegtHHbP.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DeLH2ecz.js";import"./isWellBehavedNumber-K_DMN0Z2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ccy1_TNc.js";import"./index-CECNT87F.js";import"./index-CnEU82E2.js";import"./renderedTicksSlice-DIBgsBMZ.js";import"./axisSelectors-D_j8BHYk.js";import"./d3-scale-DcD2sPeq.js";import"./CartesianChart-BwiXZARa.js";import"./chartDataContext-ClSkA-dc.js";import"./CategoricalChart-wt8G0fhK.js";import"./CartesianAxis-B1Bb8VCA.js";import"./Layer-Dh2FttVt.js";import"./Text-5DtlWUUA.js";import"./DOMUtils-CsYBkNDR.js";import"./Label-CcnC99yA.js";import"./ZIndexLayer-yVDcLD3J.js";import"./types-B0fbEwRP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-xXTHrz3J.js";import"./AnimatedItems-Moj_u834.js";import"./useAnimationId-R6vuYPvP.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CsJy8j3I.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils--yBfM0nT.js";import"./RegisterGraphicalItemId-BryVNAH7.js";import"./ErrorBarContext-_tOLdnG2.js";import"./GraphicalItemClipPath-IA0cC_pI.js";import"./SetGraphicalItem-BzboYsPC.js";import"./getZIndexFromUnknown-BppCEeG-.js";import"./graphicalItemSelectors-DwntOUL-.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

import{R as t}from"./iframe-bG7_G66g.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BYtx9lI3.js";import{B as p}from"./BarChart-ByFuOsXS.js";import{X as l}from"./XAxis-BJQkDMRF.js";import{Y as h}from"./YAxis-C7HJKNEA.js";import{B as x}from"./Brush-C-hD7xYW.js";import{B as c}from"./Bar-BzCbXELW.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DhTjJvAV.js";import"./index-B_EgrjTd.js";import"./index-7ZZfYU54.js";import"./get-CKlYZxfa.js";import"./resolveDefaultProps-BJM1u8ue.js";import"./isWellBehavedNumber-CMDCTp3P.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BMMQbU53.js";import"./index-BEtPY2hf.js";import"./index-CrGTyESs.js";import"./renderedTicksSlice-0KFrvLOH.js";import"./axisSelectors-SAI4sVeE.js";import"./d3-scale-FKA3mwBv.js";import"./CartesianChart-VkV_7YNc.js";import"./chartDataContext-BcyTHSzL.js";import"./CategoricalChart-BHq-0gkK.js";import"./CartesianAxis-Dnx9Ro6b.js";import"./Layer-ky2aT-iX.js";import"./Text-BQWDG8GB.js";import"./DOMUtils-C65D4AnI.js";import"./Label-B0PcRW41.js";import"./ZIndexLayer-BRupmzoF.js";import"./types-DAUYWUcJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-ifqM4yjs.js";import"./AnimatedItems-C0ftWhjM.js";import"./useAnimationId-NfEwsoHb.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-xxCREvqc.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BZT2pA_A.js";import"./RegisterGraphicalItemId-Bi5SE-vz.js";import"./ErrorBarContext-BmWpZ9Bv.js";import"./GraphicalItemClipPath-CwKLVu4X.js";import"./SetGraphicalItem-DrtiSYcp.js";import"./getZIndexFromUnknown-5r75UkC2.js";import"./graphicalItemSelectors-DMrbzbso.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

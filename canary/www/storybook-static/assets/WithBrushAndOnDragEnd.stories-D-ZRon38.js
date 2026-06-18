import{R as t}from"./iframe-JB04ITxe.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BedYLUjR.js";import{B as p}from"./BarChart-Cqtdq3qQ.js";import{X as l}from"./XAxis-2CswrS5Z.js";import{Y as h}from"./YAxis-v1vqqyLW.js";import{B as x}from"./Brush-DwtFIIZX.js";import{B as c}from"./Bar-TWpjxOw1.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-D_wC7bH8.js";import"./index-CloOaeIj.js";import"./index-BR_ntmTV.js";import"./get-BDmTa2no.js";import"./resolveDefaultProps-DnK0dHNE.js";import"./isWellBehavedNumber-CWoD1Zwt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D_Mnb6wJ.js";import"./index-BMvw03mU.js";import"./index-BEbfCQUB.js";import"./renderedTicksSlice-C53CIbMu.js";import"./axisSelectors-OGGKPVta.js";import"./d3-scale-BSQ4FewF.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Ck5tcGy8.js";import"./chartDataContext-gfaUTl-k.js";import"./CategoricalChart-PrNOUwgL.js";import"./CartesianAxis-Ck1yZ59m.js";import"./Layer-CC5P43nm.js";import"./Text-C7k8RhMi.js";import"./DOMUtils-B7gcLuLP.js";import"./Label-D1e3845Y.js";import"./ZIndexLayer-tYN38LXC.js";import"./types-BtpCwQ36.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-LAC0OsGE.js";import"./AnimatedItems-BaII0Say.js";import"./useAnimationId-IX-vmahP.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DdFk3cFe.js";import"./ActiveShapeUtils-BF3URPPF.js";import"./RegisterGraphicalItemId-DJtDudBg.js";import"./ErrorBarContext-oGwgz47-.js";import"./GraphicalItemClipPath-B64UzPte.js";import"./SetGraphicalItem-bHcm5Lyp.js";import"./getZIndexFromUnknown-s2OGhK2v.js";import"./graphicalItemSelectors-C6AmRAQJ.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

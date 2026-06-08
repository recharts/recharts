import{R as t}from"./iframe-QMSevZ_Z.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CqmMHsGQ.js";import{B as p}from"./BarChart-BR5dqBOh.js";import{X as l}from"./XAxis-C0cN_JCK.js";import{Y as h}from"./YAxis-CX1GPX_T.js";import{B as x}from"./Brush-e2cvdgmW.js";import{B as c}from"./Bar-DIAZY5dc.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CSWl79hr.js";import"./index-BO7EkBYF.js";import"./index-LDm5_5xU.js";import"./get-Dt9ZBUsD.js";import"./resolveDefaultProps-D1-FsOZY.js";import"./isWellBehavedNumber-BPQ0SJ_C.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DMF7GIN4.js";import"./index-CIER62SJ.js";import"./index-pi0GgTlW.js";import"./renderedTicksSlice-C-zK2PEt.js";import"./axisSelectors-ClPssgYV.js";import"./d3-scale-BdG0BwVM.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Cs7lfMyS.js";import"./chartDataContext-CxmQ7H3R.js";import"./CategoricalChart-Euguz-0O.js";import"./CartesianAxis-fxCqdamK.js";import"./Layer-BIlvUco-.js";import"./Text-B1kcN_-d.js";import"./DOMUtils-B2SIzhm8.js";import"./Label-CDZiRvSt.js";import"./ZIndexLayer-CEBsGFM8.js";import"./types-P1jJ2pmT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-BaJfxc5d.js";import"./AnimatedItems-BDsdaMkZ.js";import"./useAnimationId-DlcOUKTA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-lJXzMoVm.js";import"./ActiveShapeUtils-Bwe4ExnQ.js";import"./RegisterGraphicalItemId-YPLe9nYm.js";import"./ErrorBarContext-CmLe_bSh.js";import"./GraphicalItemClipPath-D6ZPyI0A.js";import"./SetGraphicalItem-CL5I6sew.js";import"./getZIndexFromUnknown-CL3JCHGf.js";import"./graphicalItemSelectors-risRb6qe.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

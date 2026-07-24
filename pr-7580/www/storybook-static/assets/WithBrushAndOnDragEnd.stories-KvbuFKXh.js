import{R as t}from"./iframe-DkECMRhY.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DrphCOe8.js";import{B as p}from"./BarChart-CtXbwaMu.js";import{X as l}from"./XAxis-CnIY0uCY.js";import{Y as h}from"./YAxis-DYBfxLcG.js";import{B as x}from"./Brush-CxobJ2m1.js";import{B as c}from"./Bar-C_yg52s2.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-OeP2NIwG.js";import"./index-Bs5MO9B0.js";import"./index-B2EkAXQG.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-9kFOeAbx.js";import"./isWellBehavedNumber-C5D-spqh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DT2t4UUR.js";import"./index-CubO9nle.js";import"./index-48_ZTq2u.js";import"./renderedTicksSlice-Dz89v3et.js";import"./axisSelectors-O1utMkLJ.js";import"./d3-scale-DCyD-m6k.js";import"./CartesianChart-DlZ9N_1W.js";import"./chartDataContext-Buh6poim.js";import"./CategoricalChart-Ctl-0XVF.js";import"./CartesianAxis-Bbd2gVOF.js";import"./Layer-BR_lx081.js";import"./Text-D0YGp1Dc.js";import"./DOMUtils-m9hSMA-C.js";import"./Label-D0EmKjrf.js";import"./ZIndexLayer-CJnfUCXF.js";import"./types-BhAPDMfv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./tooltipContext-CvlaqRHM.js";import"./AnimatedItems-D_PfprH1.js";import"./useAnimationId-BLnnlAbr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DN85SES_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BkWJCflD.js";import"./RegisterGraphicalItemId-DM_TAUFh.js";import"./ErrorBarContext-Do1YuZSV.js";import"./GraphicalItemClipPath-B9n7ZYaN.js";import"./SetGraphicalItem-AXvs4ZTf.js";import"./getZIndexFromUnknown-eIjSqIJi.js";import"./graphicalItemSelectors-BSInLqmO.js";const mt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const st=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,st as __namedExportsOrder,mt as default};

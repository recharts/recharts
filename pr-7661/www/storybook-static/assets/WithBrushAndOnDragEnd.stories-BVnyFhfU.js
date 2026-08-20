import{R as t}from"./iframe-Bxb7fTI_.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Dc8AhsBR.js";import{B as p}from"./BarChart-CNqHs2K2.js";import{X as l}from"./XAxis-CkOknljo.js";import{Y as h}from"./YAxis-nAknvnvN.js";import{B as x}from"./Brush-Cvn4L3sD.js";import{B as c}from"./Bar-D-A_PtMs.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CFHzUNT1.js";import"./index-Cx8Wpi4i.js";import"./index-Bo-C2AfN.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BI7lk0Xh.js";import"./isWellBehavedNumber-CwdI5Moi.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DZ0rQEPQ.js";import"./index-DTEA-FIe.js";import"./index-C-XRKF5d.js";import"./axisSelectors-B6Hc05Ed.js";import"./d3-scale-Dc6IGH61.js";import"./renderedTicksSlice-CGX0B5OX.js";import"./CartesianChart-DeUsHf5g.js";import"./chartDataContext-BelA56cJ.js";import"./CategoricalChart-D-PTwWFe.js";import"./CartesianAxis-CMkdpaa1.js";import"./Layer-DjfrzuA0.js";import"./Text-CjptF509.js";import"./DOMUtils-pu9LPEtL.js";import"./useId-BnCOmIJ8.js";import"./useBackwardsCompatibleTheme-4TZTHq_s.js";import"./Label-CTFdx9tw.js";import"./ZIndexLayer-oyOyBp5p.js";import"./types-sJxYiwgt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-C_-SWE1b.js";import"./useAnimationId-BhzzmCcY.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CCwWx1xN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-bT-Xy9SL.js";import"./tooltipContext-CMpYJro3.js";import"./RegisterGraphicalItemId-B823gFGg.js";import"./ErrorBarContext-D8MkcOwe.js";import"./GraphicalItemClipPath-BKsG1i1n.js";import"./SetGraphicalItem-DB73g3d2.js";import"./getZIndexFromUnknown-59T52RrH.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DU_mD4XQ.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const ht=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};

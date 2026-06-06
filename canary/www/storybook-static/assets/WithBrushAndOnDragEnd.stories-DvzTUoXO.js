import{R as t}from"./iframe-CLfZCDGm.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CA_idCig.js";import{B as p}from"./BarChart-D8RCirWa.js";import{X as l}from"./XAxis-BYpmzEP_.js";import{Y as h}from"./YAxis-DF5Jxdkx.js";import{B as x}from"./Brush-CQOs0mvo.js";import{B as c}from"./Bar-B0p7ODcV.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-QRpJ3co-.js";import"./index-DnUMf4Cl.js";import"./index-CDzW5wMM.js";import"./get-DkSz9-jm.js";import"./resolveDefaultProps-x0HcBOxj.js";import"./isWellBehavedNumber-COd4_fF0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-atPiLOuE.js";import"./index-DssGAL0P.js";import"./index-BOf2N6VY.js";import"./renderedTicksSlice-Chi1ci-p.js";import"./axisSelectors-DMG299p3.js";import"./d3-scale-Xh1lphWt.js";import"./string-B6fdYHAA.js";import"./CartesianChart-B0jH1uhv.js";import"./chartDataContext-BNkTUWKr.js";import"./CategoricalChart-BbsCvjmJ.js";import"./CartesianAxis-CvEaQSy2.js";import"./Layer-Byvx6_V4.js";import"./Text-CGIrE8uN.js";import"./DOMUtils-BuwrxSLS.js";import"./Label-D3bkn6cZ.js";import"./ZIndexLayer-DyKLPJQn.js";import"./types-Dbi5OTiB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-CHFypPPU.js";import"./AnimatedItems-2Sc0l-_O.js";import"./useAnimationId-vAkCmZi7.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D_xKR8pa.js";import"./ActiveShapeUtils-CmBRxm29.js";import"./RegisterGraphicalItemId-BL3S-b5-.js";import"./ErrorBarContext-ltXyVCQ2.js";import"./GraphicalItemClipPath-DB3DHpQ4.js";import"./SetGraphicalItem-MghETS_R.js";import"./getZIndexFromUnknown-B-cH9CYE.js";import"./graphicalItemSelectors-DVpE8neB.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

import{R as t}from"./iframe-CdVkyLHS.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-GOyP9Zss.js";import{B as p}from"./BarChart-BrfPKR2L.js";import{X as l}from"./XAxis-CRNnSUZ9.js";import{Y as h}from"./YAxis-BxGuypq0.js";import{B as x}from"./Brush-DbOzkT33.js";import{B as c}from"./Bar-8u3LEPrW.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CdLGvlu3.js";import"./index-QyElv-Xn.js";import"./index-DvCc_EAq.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CH_tZ1CV.js";import"./isWellBehavedNumber-CukO4dTL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DJIttxHk.js";import"./index-OMOk9pzv.js";import"./index-DysuFDaN.js";import"./axisSelectors-BJboZDv2.js";import"./d3-scale-C_ybSH9a.js";import"./renderedTicksSlice-nlBTJT3n.js";import"./CartesianChart-DH_QKR3e.js";import"./chartDataContext-vMtbxlvm.js";import"./CategoricalChart-Bmub6W6K.js";import"./CartesianAxis-Cg3yJD5r.js";import"./Layer-DsEuCMxp.js";import"./Text-Bg49R2O8.js";import"./DOMUtils-yV6fdCO6.js";import"./useBackwardsCompatibleTheme-BUV415Lc.js";import"./Label-Cwb8kt4E.js";import"./ZIndexLayer-CnILDHp4.js";import"./types-D7MUQAXd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./tooltipContext-BhbzqtV1.js";import"./AnimatedItems-B_5qg-lC.js";import"./useAnimationId-CnyNJ0d7.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-nloq3-mC.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C96E8Hlz.js";import"./RegisterGraphicalItemId-D7VKY1D2.js";import"./ErrorBarContext-BWl2zb09.js";import"./GraphicalItemClipPath-kU06yTtA.js";import"./SetGraphicalItem-CKTCd1Uv.js";import"./getZIndexFromUnknown-BHk6aPgl.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DkF3XWLk.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

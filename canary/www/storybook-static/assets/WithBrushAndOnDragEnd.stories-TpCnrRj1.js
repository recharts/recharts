import{R as t}from"./iframe-BLfLpZux.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BdrEPl1y.js";import{B as p}from"./BarChart-CMqsznoW.js";import{X as l}from"./XAxis-CxCuOvko.js";import{Y as h}from"./YAxis-D5k-HM91.js";import{B as x}from"./Brush-Cb9ZipNN.js";import{B as c}from"./Bar-AKqccxUx.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-fbWpHloR.js";import"./index-iIj_N3fe.js";import"./index-CK4MQXPT.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BZWZ2sNL.js";import"./isWellBehavedNumber-D4oOe6S5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CTW173I9.js";import"./index-rWKftsTY.js";import"./index-B91Ea_y6.js";import"./renderedTicksSlice-Bmm8hDp0.js";import"./axisSelectors-y8UfcIHb.js";import"./d3-scale-DPpDzINu.js";import"./CartesianChart-DkG-1GT9.js";import"./chartDataContext-DtPI9Rf-.js";import"./CategoricalChart-DDKWOc6b.js";import"./CartesianAxis-BLCGjb7w.js";import"./Layer-Bul18HQO.js";import"./Text-BhOJQRua.js";import"./DOMUtils-CsfQH6x5.js";import"./Label-BjZvH2GY.js";import"./ZIndexLayer-BVA4IMdO.js";import"./types-CXyRetpj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-C475OCAK.js";import"./AnimatedItems-DJFtUIBr.js";import"./useAnimationId-CIoZmDPD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B8GMZRm_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BK3uHCCg.js";import"./RegisterGraphicalItemId-CYVd3_VS.js";import"./ErrorBarContext-CNNRNaxb.js";import"./GraphicalItemClipPath-DsE8A5bl.js";import"./SetGraphicalItem-DGLUBmAF.js";import"./getZIndexFromUnknown-P7nUO6wX.js";import"./graphicalItemSelectors-nW53RAvp.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

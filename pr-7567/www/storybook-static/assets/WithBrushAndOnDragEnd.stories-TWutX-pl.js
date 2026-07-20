import{R as t}from"./iframe-S_Q04LyU.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Bxg2BBQ3.js";import{B as p}from"./BarChart-DL2OZLcX.js";import{X as l}from"./XAxis-D78GJHE5.js";import{Y as h}from"./YAxis-Cd8RwLuY.js";import{B as x}from"./Brush-CErS2O3U.js";import{B as c}from"./Bar-Cgnnx9ML.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-sJ5Xwj7N.js";import"./index-B7fnCzo3.js";import"./index-bxbAArpl.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Dy-13YZo.js";import"./isWellBehavedNumber-B7JVG4WI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DllIXhjL.js";import"./index-rMJKouwD.js";import"./index-TooQEcPQ.js";import"./renderedTicksSlice-xSk0hPIv.js";import"./axisSelectors-BPn6DSnk.js";import"./d3-scale-C2cmQNtP.js";import"./CartesianChart-BKdvFgR6.js";import"./chartDataContext-pLCds2Ae.js";import"./CategoricalChart-90tJb_l9.js";import"./CartesianAxis-DhttszFl.js";import"./Layer-gdhaFlzY.js";import"./Text-C30Me8vu.js";import"./DOMUtils-b86ja7SN.js";import"./Label-DpgEyudD.js";import"./ZIndexLayer-Cyu3q_2t.js";import"./types-B2JQaABL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./tooltipContext-Dkeeb5v3.js";import"./AnimatedItems-BE3OLqfb.js";import"./useAnimationId-CWYmV7EH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Qt7Z3o8D.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CQj2Q4HD.js";import"./RegisterGraphicalItemId-C_r44y5X.js";import"./ErrorBarContext-TTmfdmNR.js";import"./GraphicalItemClipPath-BhFzIWrz.js";import"./SetGraphicalItem-CmPnocAL.js";import"./getZIndexFromUnknown-DVwprQMK.js";import"./graphicalItemSelectors-DI4Jnxhi.js";const mt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

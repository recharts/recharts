import{R as t}from"./iframe-BdYAncLR.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-5bpfVQyA.js";import{B as p}from"./BarChart-CwAkEP9g.js";import{X as l}from"./XAxis-CbeL6UmM.js";import{Y as h}from"./YAxis-BEJGzNud.js";import{B as x}from"./Brush-CQ_B36ol.js";import{B as c}from"./Bar-DipcjUVR.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BjujQpzW.js";import"./index-CGm2P49p.js";import"./index-B2x5-TIo.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-5h8_lZEQ.js";import"./isWellBehavedNumber-_Cj0WZhc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B45z8Y-R.js";import"./index-Du0b8e_w.js";import"./index-B0-wIR84.js";import"./renderedTicksSlice-L4Igrea0.js";import"./axisSelectors-zM0j77wa.js";import"./d3-scale-23ottKw2.js";import"./CartesianChart-BhQs_YPC.js";import"./chartDataContext-CgP-nFTi.js";import"./CategoricalChart-Bp8IO2Nw.js";import"./CartesianAxis-BX7MbhnQ.js";import"./Layer-DIV0oEbW.js";import"./Text-C319EuNs.js";import"./DOMUtils-DBahITf2.js";import"./Label-JmhQBV8Y.js";import"./ZIndexLayer-TIVdTQGS.js";import"./types-OsxZUaOH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-D707JDBS.js";import"./isBuffer-Crkas5dz.js";import"./tooltipContext-CYasNncA.js";import"./AnimatedItems-Dy_aktOc.js";import"./useAnimationId-CVihXN2U.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D5kCmVGB.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DqTrL5g1.js";import"./RegisterGraphicalItemId-CwjribNO.js";import"./ErrorBarContext-IO5KIe3b.js";import"./GraphicalItemClipPath-1-xikmiv.js";import"./SetGraphicalItem-QdG8FGgR.js";import"./getZIndexFromUnknown-DLbx2sXa.js";import"./graphicalItemSelectors-CZ0r_s02.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const pt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,pt as __namedExportsOrder,st as default};

import{R as t}from"./iframe-CUx1TCgW.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CyWJB_IO.js";import{B as p}from"./BarChart-C9Jngy04.js";import{X as l}from"./XAxis-XVUuusjp.js";import{Y as h}from"./YAxis-DnVtyTYT.js";import{B as x}from"./Brush-x_S2OKjy.js";import{B as c}from"./Bar-DQ7kFI3Y.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BjWBzxHj.js";import"./index-DFl4S33S.js";import"./index-BJ8mfrgX.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BueptT4L.js";import"./isWellBehavedNumber-CUV8846M.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DPzAHq-Z.js";import"./index-CvhQIsHS.js";import"./index-BwmXDkUH.js";import"./renderedTicksSlice-DwQTH0-L.js";import"./axisSelectors-VAnXlTNN.js";import"./d3-scale-BarhEeTK.js";import"./CartesianChart-BiT6vKeC.js";import"./chartDataContext-DUiXobBm.js";import"./CategoricalChart-BV_ZCc_1.js";import"./CartesianAxis-BocxUsAL.js";import"./Layer-DkHmdg7h.js";import"./Text-C0Bz7-yS.js";import"./DOMUtils-D7djwgJL.js";import"./Label-Bd7WMI0X.js";import"./ZIndexLayer-B-tk4cwY.js";import"./types-5kZg7jgz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-DTyIxN16.js";import"./AnimatedItems-ScvXBbCb.js";import"./useAnimationId-Cx6lzC6E.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C2v-PTgf.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D9lVsXDE.js";import"./RegisterGraphicalItemId-BLmhcDXv.js";import"./ErrorBarContext-h5QrqZl2.js";import"./GraphicalItemClipPath-J1io5uDl.js";import"./SetGraphicalItem-CaISs0rU.js";import"./getZIndexFromUnknown-Cp7pymDZ.js";import"./graphicalItemSelectors-BKEsqN5X.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

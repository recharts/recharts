import{R as t}from"./iframe-C76fCBLt.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BsJGnMmn.js";import{B as p}from"./BarChart-Dt12CmIF.js";import{X as l}from"./XAxis-BrBJ2mML.js";import{Y as h}from"./YAxis-DFPJpwmP.js";import{B as x}from"./Brush-CQVEHENW.js";import{B as c}from"./Bar-TwoaKyrm.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DuTovYxH.js";import"./index-DNHm-Slh.js";import"./index-DdHCa9pO.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-B-pRQb2R.js";import"./isWellBehavedNumber-6CN-Ynbl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dp2Q4tlU.js";import"./index-CKV5D6qs.js";import"./index-CdgAhURM.js";import"./renderedTicksSlice-ChQt8XEs.js";import"./axisSelectors-44DsbA90.js";import"./d3-scale-X-nthEaw.js";import"./CartesianChart-DpIJVUtf.js";import"./chartDataContext-xuvA9xY5.js";import"./CategoricalChart-BizDpfsn.js";import"./CartesianAxis-Cfu8bLFh.js";import"./Layer-COsfpmfI.js";import"./Text-BtH4Ru5e.js";import"./DOMUtils-BPYJD_VQ.js";import"./Label-Dx0etugK.js";import"./ZIndexLayer-DTL30j5z.js";import"./types-BiK_KtGv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-qhCREoUJ.js";import"./AnimatedItems-QpEnlZxo.js";import"./useAnimationId-CEbYcbZq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CCZ51hnY.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-PxqP6tZ6.js";import"./RegisterGraphicalItemId-D4GJEFJb.js";import"./ErrorBarContext-BvNNYD9p.js";import"./GraphicalItemClipPath-B6FRGk7o.js";import"./SetGraphicalItem-C9ktGnfi.js";import"./getZIndexFromUnknown-CqNbAGN-.js";import"./graphicalItemSelectors-CANcD4oO.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

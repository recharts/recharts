import{R as t}from"./iframe-rlLReeiH.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-dET_x_8J.js";import{B as p}from"./BarChart-C3bzYEM1.js";import{X as l}from"./XAxis-BANsvQjN.js";import{Y as h}from"./YAxis-BPC8NcBR.js";import{B as x}from"./Brush-CGzptgpZ.js";import{B as c}from"./Bar-CqTFwf2A.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-7RYQhcti.js";import"./index-CKdVYzDL.js";import"./index-Bbfl3u8C.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Df8vYP0G.js";import"./isWellBehavedNumber-BS7XWWNW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-2Dg61vQO.js";import"./index-BOTGdiK-.js";import"./index-QXSF1qjq.js";import"./renderedTicksSlice-D5uSNu5L.js";import"./axisSelectors-RWAxTq2z.js";import"./d3-scale-kKXY2gAc.js";import"./CartesianChart-keWWrUD3.js";import"./chartDataContext-ylOfrWr_.js";import"./CategoricalChart-z2rCkgdR.js";import"./CartesianAxis-DB3D7e8-.js";import"./Layer-yUpNfqTk.js";import"./Text-Bv5QIM4O.js";import"./DOMUtils-DlxBAltB.js";import"./Label-D0R02xnC.js";import"./ZIndexLayer-s_cuGEJZ.js";import"./types-Dt7L5GFC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./tooltipContext-C1weWIDV.js";import"./AnimatedItems-DR-XZCrI.js";import"./useAnimationId-Dx24Y47b.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-IWxXL7PH.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BqK4gs0R.js";import"./RegisterGraphicalItemId-CQs7WMwj.js";import"./ErrorBarContext-DLDAQNmT.js";import"./GraphicalItemClipPath-DSUy1vxD.js";import"./SetGraphicalItem-D7UC0AFj.js";import"./getZIndexFromUnknown-BWg4rIjr.js";import"./graphicalItemSelectors-C-KZryd0.js";const mt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

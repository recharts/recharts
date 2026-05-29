import{e}from"./iframe-Dq2D9WMR.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./zIndexSlice-CMIgpwRl.js";import{B as p}from"./BarChart-CQyENlHp.js";import{X as l}from"./XAxis-BEqsZJa-.js";import{Y as h}from"./YAxis-CJVhWVm-.js";import{B as x}from"./Brush-Bxz-oFUW.js";import{B as c}from"./Bar-C49e8k3x.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DBox_88Y.js";import"./get-Dg89qnmN.js";import"./resolveDefaultProps-CL0P-2Ye.js";import"./isWellBehavedNumber-CElaIhJa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Coa45hTw.js";import"./index-Vw7ge0ya.js";import"./index-toY2TPxE.js";import"./index-ComImMI9.js";import"./renderedTicksSlice-CfboEt5t.js";import"./axisSelectors-sK2-dJnb.js";import"./d3-scale-CJAlquTP.js";import"./CartesianChart-DTsAEBhV.js";import"./chartDataContext-DSYMXmV-.js";import"./CategoricalChart-DqFO3fer.js";import"./CartesianAxis-9djuB4O0.js";import"./Layer-CNg3jf3H.js";import"./Text-DsY1ckdl.js";import"./DOMUtils-DuGpXxvH.js";import"./Label-DafpBHua.js";import"./ZIndexLayer-BazpBvjE.js";import"./types-C93vTFKm.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DPzld1EZ.js";import"./ReactUtils-CnckncOE.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BslqwIXI.js";import"./useAnimationId-uSyAtuoQ.js";import"./ActiveShapeUtils-C8zRj9nc.js";import"./RegisterGraphicalItemId-27foWtUc.js";import"./ErrorBarContext-ClYGb34v.js";import"./GraphicalItemClipPath-DwKkk3VM.js";import"./SetGraphicalItem-D7EoJphE.js";import"./getZIndexFromUnknown-C2CqlFtj.js";import"./graphicalItemSelectors-Di7DaTSh.js";const ne={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},t={render:()=>{const[r,d]=e.useState({startIndex:0,endIndex:a.length-1});return e.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},e.createElement("div",null,"Start index:",r.startIndex),e.createElement("div",null,"End index:",r.endIndex),e.createElement(s,null,e.createElement(p,{data:a},e.createElement(l,{dataKey:"value"}),e.createElement(h,null),e.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),e.createElement(c,{dataKey:"value"}))))}};var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const oe=["WithBrushAndOnDragEnd"];export{t as WithBrushAndOnDragEnd,oe as __namedExportsOrder,ne as default};

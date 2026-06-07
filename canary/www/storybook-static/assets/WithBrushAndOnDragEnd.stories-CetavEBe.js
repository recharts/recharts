import{R as t}from"./iframe-RDkqVuG2.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-C4ZKGTQh.js";import{B as p}from"./BarChart-DUeyNzZa.js";import{X as l}from"./XAxis-DEACd4mi.js";import{Y as h}from"./YAxis-4GVW-TXE.js";import{B as x}from"./Brush-CkuxFcBc.js";import{B as c}from"./Bar-BYU8vxI_.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-tJ0TJl6x.js";import"./index-9iQIkkD_.js";import"./index-C0Sw1Z_f.js";import"./get-qTOI2Rj3.js";import"./resolveDefaultProps-CrvfBHpF.js";import"./isWellBehavedNumber-B7BMWvxG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BeMiseSr.js";import"./index-DIx3ZRGh.js";import"./index-Bl5JBY4m.js";import"./renderedTicksSlice-BbGCSG_u.js";import"./axisSelectors-ChiETq8M.js";import"./d3-scale-CNXGEtqn.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CkUHBUTg.js";import"./chartDataContext-DCYgbhWK.js";import"./CategoricalChart-DKO530-y.js";import"./CartesianAxis-BXGLIO05.js";import"./Layer-DnJxeL60.js";import"./Text-euyAwdDa.js";import"./DOMUtils-B1kyH5Gm.js";import"./Label-kl9r3lv0.js";import"./ZIndexLayer-ChplAtHB.js";import"./types-BwJsYmye.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-CKhyGnG7.js";import"./AnimatedItems-wlRh2tbg.js";import"./useAnimationId-DWgEGQGL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cf0Ils5n.js";import"./ActiveShapeUtils-BGYROLTx.js";import"./RegisterGraphicalItemId-BjCxIzIU.js";import"./ErrorBarContext-DhtRtcJb.js";import"./GraphicalItemClipPath-fh46Mv1_.js";import"./SetGraphicalItem-C_Bitdri.js";import"./getZIndexFromUnknown-D8aFDo5v.js";import"./graphicalItemSelectors-_gyjbiax.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

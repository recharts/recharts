import{R as t}from"./iframe-DqSUlz6e.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DtAX5jMh.js";import{B as p}from"./BarChart-DFvPcc_K.js";import{X as l}from"./XAxis-DmD7UEym.js";import{Y as h}from"./YAxis-DegTMzbt.js";import{B as x}from"./Brush-DQromLT0.js";import{B as c}from"./Bar-BTYRpRZj.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DHy4hNYv.js";import"./index-CvBr5MD5.js";import"./index-Dw4JWeKW.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CwPSCmmx.js";import"./isWellBehavedNumber-DsplX-23.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B0IxRf2C.js";import"./axisSelectors-Bh_wIpJu.js";import"./d3-scale-CkMKmC-4.js";import"./index-BuJIoyr5.js";import"./index-7NBQQOYh.js";import"./renderedTicksSlice-Iw1xe9hi.js";import"./index-GNQmxyz-.js";import"./CartesianChart-BZt0ttBq.js";import"./chartDataContext-DLE2_VFr.js";import"./CategoricalChart-Chjdlx8c.js";import"./CartesianAxis-BPJ_bm1Z.js";import"./Layer-CcVS5xmO.js";import"./Text-rxtWTnFK.js";import"./DOMUtils-BO-LSrQT.js";import"./useId-DIxfitZT.js";import"./useBackwardsCompatibleTheme-Cpo7LNnn.js";import"./Label-COTXmSNC.js";import"./ZIndexLayer-w7X3Qx8i.js";import"./types-BK6ZMP2B.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DZn2nJaS.js";import"./useAnimationId-B7qxPui8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C5vSLqhQ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D4bP4Qte.js";import"./tooltipContext-DVKBLdRP.js";import"./RegisterGraphicalItemId-GuyP8w5W.js";import"./ErrorBarContext-C2faiS6t.js";import"./GraphicalItemClipPath-CXwxXFyI.js";import"./SetGraphicalItem-BNDeXFGY.js";import"./getZIndexFromUnknown-B1qMJt2L.js";import"./useGraphicalItemIdentity-P2fDicxj.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};

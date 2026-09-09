import{R as t}from"./iframe-WBosH1gH.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DY0UoJ4l.js";import{B as p}from"./BarChart-BOWphmTh.js";import{X as l}from"./XAxis-m7Q_C79b.js";import{Y as h}from"./YAxis-CenhW_SV.js";import{B as x}from"./Brush-BTnJ29V_.js";import{B as c}from"./Bar-DoQkJol7.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-XsvTB-sR.js";import"./index-BwqgnM9k.js";import"./index-VfXF9cRB.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B2r9_mKe.js";import"./isWellBehavedNumber-BkYn7WHA.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B0qr77rU.js";import"./axisSelectors-DVaMQoZI.js";import"./d3-scale-D0rOwI1X.js";import"./index-vxpjOmvK.js";import"./index-0eRMU_eW.js";import"./renderedTicksSlice-w1R0M-NQ.js";import"./index-C25eF-tn.js";import"./CartesianChart-DVqibfCK.js";import"./chartDataContext-CniWriLR.js";import"./CategoricalChart-DG5t8KxI.js";import"./CartesianAxis-Bjry6SmX.js";import"./Layer-DlEXHs0c.js";import"./Text-DUKo7lId.js";import"./DOMUtils-Cua0edvn.js";import"./useId-QCeL7Xpe.js";import"./useBackwardsCompatibleTheme-Dm9WBqGk.js";import"./Label-BCHXbIDv.js";import"./ZIndexLayer-Ceqldfm9.js";import"./types-CXdVyMYF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DJehR24_.js";import"./useAnimationId-B1IfIBZT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CCQKHFOK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DhiQ5sHd.js";import"./tooltipContext-C_Mku4Mk.js";import"./RegisterGraphicalItemId-CooVBKDB.js";import"./ErrorBarContext-LEGekQDa.js";import"./GraphicalItemClipPath-t-5ZkTcv.js";import"./SetGraphicalItem-C5z9UzHr.js";import"./getZIndexFromUnknown-BPqJjSTB.js";import"./useGraphicalItemIdentity-BcmjlH91.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

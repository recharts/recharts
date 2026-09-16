import{R as t}from"./iframe-CKDPSKer.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BPEXBnkz.js";import{B as p}from"./BarChart-CwqqbLHU.js";import{X as l}from"./XAxis-A_9Io6kM.js";import{Y as h}from"./YAxis-aBoPLQiN.js";import{B as x}from"./Brush-CBQWbmFj.js";import{B as c}from"./Bar-dsf1sJWy.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BxISGQ-D.js";import"./index-b8m7PcKP.js";import"./index-BCb8LTpu.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BHhxWlvh.js";import"./isWellBehavedNumber-B7M1fd8R.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DXJuSLgb.js";import"./axisSelectors-BCmNu8mb.js";import"./d3-scale-b7USrreT.js";import"./index-Yn8E1RQt.js";import"./index-YNG8abLs.js";import"./renderedTicksSlice-D_KOvBCE.js";import"./index-CdVjfuR9.js";import"./CartesianChart-8JudaFqK.js";import"./chartDataContext-BPq1GFdD.js";import"./CategoricalChart-C1cfNrgi.js";import"./CartesianAxis-CjGSghd8.js";import"./Layer-B33l4zSF.js";import"./Text-C2JOwhg7.js";import"./DOMUtils-YKVjc3tQ.js";import"./useId-Ci63Vlud.js";import"./useBackwardsCompatibleTheme-CrbUBK8p.js";import"./Label-dc-yhDIk.js";import"./ZIndexLayer-U3HIU8rZ.js";import"./types-CtnAz4fT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DQZ1vYlx.js";import"./useAnimationId-BJ5AGKlq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B5okrLSf.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Wg41V-yZ.js";import"./tooltipContext-BG1A-VRG.js";import"./RegisterGraphicalItemId-DPP3dtMc.js";import"./ErrorBarContext-DUmIK13m.js";import"./GraphicalItemClipPath-CwqjQ5yI.js";import"./SetGraphicalItem-oK4eoPFb.js";import"./getZIndexFromUnknown-Bg3Y29-C.js";import"./useGraphicalItemIdentity-SlGiSA9D.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

import{R as t}from"./iframe-C8yGgO2d.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CuRdZ-8K.js";import{B as p}from"./BarChart-B2NmVWr7.js";import{X as l}from"./XAxis-DkqGLCT1.js";import{Y as h}from"./YAxis-CkFD-fPK.js";import{B as x}from"./Brush-CL8yTKFp.js";import{B as c}from"./Bar-C0m_JxaU.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dr0khojT.js";import"./index-DWs1UuF8.js";import"./index-B_Sqvp8j.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BEnwhFtj.js";import"./isWellBehavedNumber-P0iskoF8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DxEsBzKb.js";import"./axisSelectors-w7bw2H0b.js";import"./d3-scale-Cb_6Er0t.js";import"./index-_ZrsSmBD.js";import"./index-C4w1OcUY.js";import"./renderedTicksSlice-D5n2q9tr.js";import"./index-_435W0Be.js";import"./CartesianChart-NwzcHRhr.js";import"./chartDataContext-CYKs2BJc.js";import"./CategoricalChart-3Evm6NoG.js";import"./CartesianAxis-BHyGAXdi.js";import"./Layer-tDZThP1f.js";import"./Text-N9mhAN-H.js";import"./DOMUtils-BOgsOCmi.js";import"./useId-CKVmols2.js";import"./useBackwardsCompatibleTheme-AfUploH6.js";import"./Label-BtCjiiK8.js";import"./ZIndexLayer-C7uHg4Vj.js";import"./types-DDTipNBU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DmW46OuC.js";import"./useAnimationId-Bie7xBo-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DMqwvRGF.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BmVfGkD_.js";import"./tooltipContext-D2TMP3rH.js";import"./RegisterGraphicalItemId-BaYY2Lpp.js";import"./ErrorBarContext-DNGGPxUD.js";import"./GraphicalItemClipPath-DlJK_MCm.js";import"./SetGraphicalItem-DHV9mQDm.js";import"./getZIndexFromUnknown-C_-Lvn3v.js";import"./useGraphicalItemIdentity-B0pPIliE.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

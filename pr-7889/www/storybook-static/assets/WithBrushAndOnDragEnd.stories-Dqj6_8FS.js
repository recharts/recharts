import{R as t}from"./iframe-C55SonNK.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DasulNlo.js";import{B as p}from"./BarChart-qUpHweaT.js";import{X as l}from"./XAxis-BWJ2ABmI.js";import{Y as h}from"./YAxis-C3mB-_5C.js";import{B as x}from"./Brush-hdxLjqdp.js";import{B as c}from"./Bar-C_-Wweec.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-G3ECa8tr.js";import"./index-DlZLgaYD.js";import"./index-BwYupLtq.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BmNtE2rS.js";import"./isWellBehavedNumber-hNTnQGF2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BfpEIOv-.js";import"./axisSelectors-pQ0Se0UH.js";import"./d3-scale-BMtFe6cd.js";import"./index-ConF1OJd.js";import"./index-BPMo8MBn.js";import"./renderedTicksSlice-LEZPKkpV.js";import"./index-Czl7SMar.js";import"./CartesianChart-BihUZ5nW.js";import"./chartDataContext-CzjQbFCV.js";import"./CategoricalChart-BO0KKDhg.js";import"./CartesianAxis-Sfv4H3gX.js";import"./Layer-Bpfyjb4F.js";import"./Text-BGO9kFr7.js";import"./DOMUtils-B--wunTb.js";import"./useId-Ph5cHYEn.js";import"./useBackwardsCompatibleTheme-CMxCV-uY.js";import"./Label-XuIK8xgk.js";import"./ZIndexLayer-xKUTxtZr.js";import"./types-DWD7ie2J.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-mUQIEGKr.js";import"./useAnimationId-Dfy40kVz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle--EhuiCVU.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CaNZ8cmS.js";import"./tooltipContext-KFWtgpFU.js";import"./RegisterGraphicalItemId-CAAWrCM1.js";import"./ErrorBarContext-K46B69nM.js";import"./GraphicalItemClipPath-5x7FHKUZ.js";import"./SetGraphicalItem-CASyq9nQ.js";import"./getZIndexFromUnknown-C-VWG9Qg.js";import"./useGraphicalItemIdentity-DFmFmERc.js";import"./dataEntryStyles-Bcs_VkDa.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,xt as __namedExportsOrder,ht as default};

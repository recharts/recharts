import{R as t}from"./iframe-VTxubO5w.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BFYFcuFW.js";import{B as p}from"./BarChart-_gvFvpF8.js";import{X as l}from"./XAxis-3pFA-Nf-.js";import{Y as h}from"./YAxis-bVdfj-ty.js";import{B as x}from"./Brush-DoytqSpc.js";import{B as c}from"./Bar-DfGDyJrk.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bj7f8bZe.js";import"./index-4Jh92J2Q.js";import"./index-DdjkBMS_.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BFp7OOq4.js";import"./isWellBehavedNumber-yx76n7CA.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bsatjkvb.js";import"./axisSelectors-CvnfJ2AM.js";import"./d3-scale-BMdsVvRJ.js";import"./index-DtWT2JaI.js";import"./index-Cr87dMf9.js";import"./renderedTicksSlice-BrmgGQgk.js";import"./index-1-3dFAhM.js";import"./CartesianChart-BDdGXWds.js";import"./chartDataContext-DH5kQpc3.js";import"./CategoricalChart-DxD0BnY1.js";import"./CartesianAxis-C-En2Edk.js";import"./Layer-D1MCI5Ak.js";import"./Text-uR2Yj3PM.js";import"./DOMUtils-BAN1xftN.js";import"./useId-DFmSC7ae.js";import"./useBackwardsCompatibleTheme-BYtc2o9v.js";import"./Label-DNcqVwFA.js";import"./ZIndexLayer-NKRjvkpW.js";import"./types-CDzvAUga.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-YcLJd9jr.js";import"./useAnimationId-DPVDnlp2.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C-w4cEpw.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DG8apj0w.js";import"./tooltipContext-IUJpGMFY.js";import"./RegisterGraphicalItemId-BW5kojHS.js";import"./ErrorBarContext-BlpBbu3_.js";import"./GraphicalItemClipPath-qDNJ-tN3.js";import"./SetGraphicalItem-BqDT3cr3.js";import"./getZIndexFromUnknown-C09cG1lr.js";import"./useGraphicalItemIdentity-jWQRhRf0.js";import"./dataEntryStyles-DvC98tT9.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

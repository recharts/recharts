import{R as t}from"./iframe-BkEvAth1.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-nf1W2Gc-.js";import{B as p}from"./BarChart-CFvwQ96E.js";import{X as l}from"./XAxis-RdR0TVxW.js";import{Y as h}from"./YAxis-DLVoYarI.js";import{B as x}from"./Brush-D_S1DTqT.js";import{B as c}from"./Bar-DWRK7KGu.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D101QSOu.js";import"./index-WgwKlZAp.js";import"./index-DEguUzrn.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-0lxOPE_6.js";import"./isWellBehavedNumber-CFPi8ujN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BQMoxy31.js";import"./axisSelectors-Tv8O7Qi2.js";import"./d3-scale-CLBHc1rG.js";import"./index-B8WpKNcF.js";import"./index-BRKc8NTQ.js";import"./renderedTicksSlice-DA-CVNBV.js";import"./index-BKOJ-Qmj.js";import"./CartesianChart-ByLTz-Wk.js";import"./chartDataContext-DQU-1klM.js";import"./CategoricalChart-CFWcsDQS.js";import"./CartesianAxis-BTQZoIY0.js";import"./Layer-B86MwzYN.js";import"./Text-BZ3mS1RC.js";import"./DOMUtils-BcdnRDzA.js";import"./useId-C4p8DCEP.js";import"./useBackwardsCompatibleTheme-C9UXAGCH.js";import"./Label-C6aq5sgc.js";import"./ZIndexLayer-CV-ewbAJ.js";import"./types-CCpLRaHh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DAE7yXHk.js";import"./useAnimationId-BXkgTCLA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CPSx8OX_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-l5lysgay.js";import"./tooltipContext-DSWceIOC.js";import"./RegisterGraphicalItemId-7FSphn26.js";import"./ErrorBarContext-TeZDWbxG.js";import"./GraphicalItemClipPath-B-LRUwBU.js";import"./SetGraphicalItem-CKJc8ABb.js";import"./getZIndexFromUnknown-vhCcbLMS.js";import"./useGraphicalItemIdentity-C648VAOs.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

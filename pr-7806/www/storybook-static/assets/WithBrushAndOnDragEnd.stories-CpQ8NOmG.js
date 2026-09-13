import{R as t}from"./iframe-DMwBeJR9.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BP1SI4lk.js";import{B as p}from"./BarChart-B_zuOSs-.js";import{X as l}from"./XAxis-CXH1fd9N.js";import{Y as h}from"./YAxis-CzX5Dj-l.js";import{B as x}from"./Brush-BobOHLGV.js";import{B as c}from"./Bar-DjMhhasp.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-JhdtWwel.js";import"./index-W8It9SHe.js";import"./index-CW9TVSnL.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-FbHkIvMQ.js";import"./isWellBehavedNumber-BWBsnwkO.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DQf4ekbV.js";import"./axisSelectors-BzRm_10h.js";import"./d3-scale-CTZXeK9y.js";import"./index-C4TxoYVJ.js";import"./index-KvfSCZEN.js";import"./renderedTicksSlice-Dl_Tlvvx.js";import"./index-CR-86fOk.js";import"./CartesianChart-C4QG-pAm.js";import"./chartDataContext-ClQA_jr_.js";import"./CategoricalChart-BZsjmvUf.js";import"./CartesianAxis-BJRJUBpp.js";import"./Layer-DMhp_Srr.js";import"./Text-BAFoSTNm.js";import"./DOMUtils-DtiMQzYq.js";import"./useId-BlKh4dfu.js";import"./useBackwardsCompatibleTheme-ujSziCXW.js";import"./Label-B67df_fL.js";import"./ZIndexLayer-CFNoJ68M.js";import"./types-CMazcurm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-H6knMzOg.js";import"./useAnimationId-1Z-BMfjp.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-eD4VGTbA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D9qWvVvy.js";import"./tooltipContext-BL0IMRcx.js";import"./RegisterGraphicalItemId-D2Rdl-pC.js";import"./ErrorBarContext-DyCS0eIu.js";import"./GraphicalItemClipPath-DH2vwsgS.js";import"./SetGraphicalItem-BmbkJBqp.js";import"./getZIndexFromUnknown-U3IR9nod.js";import"./useGraphicalItemIdentity-1ETpT5kl.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

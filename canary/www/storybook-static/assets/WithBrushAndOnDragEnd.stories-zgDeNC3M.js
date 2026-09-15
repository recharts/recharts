import{R as t}from"./iframe-WV_asirj.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-GixElPZ_.js";import{B as p}from"./BarChart-DPKygSvr.js";import{X as l}from"./XAxis-DD-Khhe3.js";import{Y as h}from"./YAxis-DRMYGn-2.js";import{B as x}from"./Brush-CvtJupxf.js";import{B as c}from"./Bar-DP7v7Qb-.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Ba7gBaVO.js";import"./index-BTbJQRbi.js";import"./index-FtwXBSMR.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CXdIXtb2.js";import"./isWellBehavedNumber-CU2jbRyM.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CsCMkadb.js";import"./axisSelectors-8uL09VjP.js";import"./d3-scale-Cy0pMHbr.js";import"./index-DNMQn43Q.js";import"./index-BrA93ln9.js";import"./renderedTicksSlice-Dr2G7YjO.js";import"./index-5piGZExt.js";import"./CartesianChart-BSNtd9by.js";import"./chartDataContext-DkG6gPSF.js";import"./CategoricalChart-DnjLzrnf.js";import"./CartesianAxis-BGGDzNNT.js";import"./Layer-D1F1s_Cb.js";import"./Text-Dsqc9k19.js";import"./DOMUtils-CnLU0pz8.js";import"./useId-CWlmqz6v.js";import"./useBackwardsCompatibleTheme-DtOSIckQ.js";import"./Label-Q870r3oo.js";import"./ZIndexLayer-rRlGaKvU.js";import"./types-Cgo928Y8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-xMF2BQb6.js";import"./useAnimationId-DlwLI8cF.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-WQEGXCsY.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils--kX-_F3I.js";import"./tooltipContext-BelwVgHR.js";import"./RegisterGraphicalItemId-B1qksrkN.js";import"./ErrorBarContext-CGrnfAaP.js";import"./GraphicalItemClipPath-BBN-JnlO.js";import"./SetGraphicalItem-BpDA6gwY.js";import"./getZIndexFromUnknown-CbAFMGkr.js";import"./useGraphicalItemIdentity-DUG11jyw.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

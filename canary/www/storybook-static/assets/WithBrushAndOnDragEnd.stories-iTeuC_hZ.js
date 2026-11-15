import{R as t}from"./iframe-r3x3_yf4.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-NMb2vrpT.js";import{B as p}from"./BarChart-BFEHAgs4.js";import{X as l}from"./XAxis-CR4ARCer.js";import{Y as h}from"./YAxis-DqWMDxyr.js";import{B as x}from"./Brush-DwRDxmKm.js";import{B as c}from"./Bar-CY-EhoMk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D1EJxC7c.js";import"./throttle-8hacI6eE.js";import"./index-DCzxVT24.js";import"./index-BmCC5OWu.js";import"./RechartsWrapper-_voIQt-f.js";import"./axisSelectors-vmwSvweQ.js";import"./polarAxisSelectors-jpdu1VNr.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Dyg5lSMz.js";import"./index-CXlPhSWr.js";import"./index-Br7b2-_x.js";import"./renderedTicksSlice-Bwv1Ycq-.js";import"./index-XR02wMNZ.js";import"./fillDefinitions-6lmPyfb7.js";import"./CartesianChart-Cu7l70fA.js";import"./chartDataContext-ZH5Padeo.js";import"./CategoricalChart-B9Dtz71g.js";import"./CartesianAxis-D0GcJHV6.js";import"./Layer-Bgw_1AH_.js";import"./Text-BJw7R8d_.js";import"./ZIndexLayer-U0OKF9Zk.js";import"./Label-C--_kXjw.js";import"./types-C8JZdNIX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-CPsjZ3pD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BHZ7OtoD.js";import"./useAnimationId-EE0FjekO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dpt4d3xT.js";import"./tooltipContext-Be3fRYkk.js";import"./ErrorBarContext-U5wRur_B.js";import"./activeStyles-TIYUw2JD.js";import"./SetGraphicalItem-C13buv2r.js";import"./getZIndexFromUnknown-DERfRvHP.js";import"./useEffectiveDataKey-CUQD41kZ.js";import"./omit-DPkP4Aqg.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};

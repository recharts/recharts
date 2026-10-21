import{R as t}from"./iframe-DTHZbTt-.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CwvyUZAf.js";import{B as p}from"./BarChart-Dtg2IXBY.js";import{X as l}from"./XAxis-DNNXvE0w.js";import{Y as h}from"./YAxis-D2uAEQ_1.js";import{B as x}from"./Brush-_7kwPGiz.js";import{B as c}from"./Bar-CCoLMQ7B.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-_YZWlOkj.js";import"./index-Fy1PXU7Z.js";import"./index-Daz8taF-.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-kDJk6VzV.js";import"./isWellBehavedNumber-Bozcvyc-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BEg2HwJ0.js";import"./axisSelectors-BOmHsD9v.js";import"./d3-scale-BmJqysRF.js";import"./index-DguN7IkA.js";import"./index-CIOmtNBi.js";import"./renderedTicksSlice-D7ZIJ8O6.js";import"./index-CrHWP68A.js";import"./CartesianChart-CFx76W2A.js";import"./chartDataContext-HhXd6bIQ.js";import"./CategoricalChart-BuK74uML.js";import"./CartesianAxis-Ck9hBcPI.js";import"./Layer-DW8M9VQm.js";import"./Text-D1xR-i1r.js";import"./pageBackground-D-Popr0j.js";import"./useId-BWpg6He6.js";import"./useBackwardsCompatibleTheme-Cm_dQqJG.js";import"./Label-0KYVoNB4.js";import"./ZIndexLayer--bHJC1rV.js";import"./types-DfO2mLHa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-C3naVa7V.js";import"./useAnimationId-Dfuq3lyA.js";import"./dataEntryStyles-DkIuZeQk.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DcH2ra7A.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CMR5ure_.js";import"./tooltipContext-CTVECIpw.js";import"./ErrorBarContext-BnuvGJQ5.js";import"./GraphicalItemClipPath-EAO5wM-I.js";import"./SetGraphicalItem-SNY8eCLu.js";import"./getZIndexFromUnknown-DT3X5VoN.js";import"./useEffectiveDataKey-5jqQvgZD.js";import"./omit-CQ1xPNua.js";import"./isArguments-yB-y1yaH.js";const xt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},ct=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ct as __namedExportsOrder,xt as default};

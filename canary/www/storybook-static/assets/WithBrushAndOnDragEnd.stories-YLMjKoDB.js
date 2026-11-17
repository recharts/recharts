import{R as t}from"./iframe-Bu5r_UoW.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BoZi0EKL.js";import{B as p}from"./BarChart-DCF9HUmQ.js";import{X as l}from"./XAxis-CnJljd4s.js";import{Y as h}from"./YAxis-sL3yeYN7.js";import{B as x}from"./Brush-DEM7TJlS.js";import{B as c}from"./Bar-CjChK6uM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BDfy-Y9N.js";import"./throttle-BpoLTe0M.js";import"./index-CP6mH--B.js";import"./index-DnT_Ya4A.js";import"./RechartsWrapper-BqfNjaYX.js";import"./axisSelectors-Bhk2XSO9.js";import"./polarAxisSelectors-n0CqqZCi.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DImarRMe.js";import"./index-pIfafh94.js";import"./index-C9YbC-S9.js";import"./renderedTicksSlice-CEkp7Ia_.js";import"./index-D8NerNAW.js";import"./fillDefinitions-BYA-kAp9.js";import"./CartesianChart-CmgmeyYa.js";import"./chartDataContext-epTHr0-d.js";import"./CategoricalChart-DkHDaSrl.js";import"./CartesianAxis-DeK_gPGC.js";import"./Layer-DFVqeIzd.js";import"./Text-Whpl_RQm.js";import"./ZIndexLayer-BpE6rRDX.js";import"./Label-0RpFXi-A.js";import"./types-Bn2H5HlC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-C66iRC8T.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-M1V3Y4MR.js";import"./useAnimationId-BnIWNy46.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BGxbUkvX.js";import"./tooltipContext-DfROrrQb.js";import"./ErrorBarContext-C-78saLU.js";import"./activeStyles-8B2_TUAk.js";import"./SetGraphicalItem-CpMZVpWB.js";import"./getZIndexFromUnknown-DZMQ3R8e.js";import"./useEffectiveDataKey-BxhAq3wv.js";import"./omit-COdxDF2M.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

import{R as t}from"./iframe-pamQLAuY.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BlDUGc8d.js";import{B as p}from"./BarChart-ra74AHjJ.js";import{X as l}from"./XAxis-D-SXbwy8.js";import{Y as h}from"./YAxis-BYc7pX1a.js";import{B as x}from"./Brush-DxIHvIUA.js";import{B as c}from"./Bar-Dyf9STcO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-kiiYJYN_.js";import"./throttle-C_B1UjR8.js";import"./index-Cr46aqlt.js";import"./index-WeK6OXUT.js";import"./RechartsWrapper-ub_WEUz3.js";import"./axisSelectors-DKhGUp-k.js";import"./polarAxisSelectors-DoSBNlO9.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-eIG0jwTX.js";import"./index-m8mQ2_y4.js";import"./index-QF6L8m8x.js";import"./renderedTicksSlice-BaFBICsx.js";import"./index-Dkcp91gd.js";import"./fillDefinitions-BDZZPSU3.js";import"./CartesianChart-CH5OILiC.js";import"./chartDataContext-B156a3vg.js";import"./CategoricalChart-C57OyuNX.js";import"./CartesianAxis-CWD0k2VK.js";import"./Layer-Cm9mi55v.js";import"./Text-CgAHMzD3.js";import"./ZIndexLayer-DY36flUP.js";import"./Label-53Y237WA.js";import"./types-DIKPUmB7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-Cjt_fwSW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B2noBFFP.js";import"./useAnimationId-BGgwVpYD.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CLFAkUa0.js";import"./tooltipContext-DB05krQV.js";import"./ErrorBarContext-mAfMrTZ7.js";import"./activeStyles-BKbfAIaZ.js";import"./SetGraphicalItem-CAx5rLIN.js";import"./getZIndexFromUnknown-Bku_Z_HA.js";import"./useEffectiveDataKey-DQOO5VHk.js";import"./omit-DiNE4MF3.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

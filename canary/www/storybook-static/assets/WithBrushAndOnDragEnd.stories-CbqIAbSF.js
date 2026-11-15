import{R as t}from"./iframe-DQsNmxmG.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-fYCbSPba.js";import{B as p}from"./BarChart-B1xafChI.js";import{X as l}from"./XAxis-BeNbg6hp.js";import{Y as h}from"./YAxis-D-cWoYYZ.js";import{B as x}from"./Brush-DMQMvRdA.js";import{B as c}from"./Bar-BH_ML8yC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C9L4dsEq.js";import"./throttle-zQAbuFwu.js";import"./index-6jBLt3fF.js";import"./index-DieS8gnr.js";import"./RechartsWrapper-MEg26Y_7.js";import"./axisSelectors-BsRkt3Xk.js";import"./polarAxisSelectors-B-0rkllN.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BIy4_L5R.js";import"./index-CbIjVRAX.js";import"./index-CCZsgeAv.js";import"./renderedTicksSlice-vSa4eBxF.js";import"./index-Cq0Y-kP9.js";import"./fillDefinitions-CxoYZDG2.js";import"./CartesianChart-B32Zddgy.js";import"./chartDataContext-S0JtTO97.js";import"./CategoricalChart-CKZnphjR.js";import"./CartesianAxis-Crywq0Oq.js";import"./Layer-JjdEQyi5.js";import"./Text-Qtf5nEek.js";import"./ZIndexLayer-DJNsuc82.js";import"./Label-BGoCqB35.js";import"./types-wkisKABV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-CArKPFy6.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-rFuZYgZx.js";import"./useAnimationId-CfQHWCsS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-t6nFfTlu.js";import"./tooltipContext-l1grKCFD.js";import"./ErrorBarContext-WH4H2KKq.js";import"./activeStyles-BgO2Wbsx.js";import"./SetGraphicalItem-BG-GEzcM.js";import"./getZIndexFromUnknown-CelNEHss.js";import"./useEffectiveDataKey-CR-coZ9_.js";import"./omit-CO-53XuN.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

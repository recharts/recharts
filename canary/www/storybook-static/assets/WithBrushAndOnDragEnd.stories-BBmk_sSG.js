import{R as t}from"./iframe-CMDkES_H.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CEXNkTXm.js";import{B as p}from"./BarChart-D4Kj6qcQ.js";import{X as l}from"./XAxis-B5q3F6Uy.js";import{Y as h}from"./YAxis-C3tuYQmx.js";import{B as x}from"./Brush-Cu5p8yLQ.js";import{B as c}from"./Bar-CS1mktTM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BBu38DQb.js";import"./throttle-BV0akTiG.js";import"./index-nmLk2qd-.js";import"./index-Cycxm7rW.js";import"./RechartsWrapper-YdCgLXYS.js";import"./axisSelectors-BgqFub1M.js";import"./polarAxisSelectors-B2-HhSnm.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Vem8QkvK.js";import"./index-CDFg-t_S.js";import"./index-CQ6GchDM.js";import"./renderedTicksSlice-BzpVxRSL.js";import"./index-Dwicv9nR.js";import"./fillDefinitions-aMvFJMZF.js";import"./CartesianChart-D9ZN9vwZ.js";import"./chartDataContext-U2SqLEu1.js";import"./CategoricalChart-CNCtCgVg.js";import"./CartesianAxis-KTct3My8.js";import"./Layer-Dxo4pAJK.js";import"./Text-CXN2lt2h.js";import"./ZIndexLayer-Dr7m0amd.js";import"./Label-DkUV91yB.js";import"./types-BRdSNrFn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-CQKyrMQS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B0Yk3Jnp.js";import"./useAnimationId-Br5Fw6SL.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BI-HqHtF.js";import"./tooltipContext-BfYJ3kCm.js";import"./ErrorBarContext-DWVCzs9M.js";import"./activeStyles-uNCwuaQZ.js";import"./SetGraphicalItem-BWtk-2FX.js";import"./getZIndexFromUnknown-DV_2JkUf.js";import"./useEffectiveDataKey-DEHLWy8h.js";import"./omit-D-A9C4xh.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

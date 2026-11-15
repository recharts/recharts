import{R as t}from"./iframe-BaiXEn0-.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CSqAGFLj.js";import{B as p}from"./BarChart-BWYUaDjG.js";import{X as l}from"./XAxis-BhEilA83.js";import{Y as h}from"./YAxis-DuwRFPvA.js";import{B as x}from"./Brush-BzQsXf90.js";import{B as c}from"./Bar-1Ya73Dri.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CefoQJzZ.js";import"./throttle-D7xKVZuZ.js";import"./index-BK6mpLXi.js";import"./index-BrUJM5DD.js";import"./RechartsWrapper-BRQNcvpu.js";import"./axisSelectors-s8isxUHu.js";import"./polarAxisSelectors-Com92wlg.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Bpc0urwb.js";import"./index-CGBcSxqi.js";import"./index-YBD3MlPN.js";import"./renderedTicksSlice-GEdADU7H.js";import"./index-BuGbfhN1.js";import"./fillDefinitions-mAC2wE0k.js";import"./CartesianChart-DzuueLPv.js";import"./chartDataContext-DoyYqW6X.js";import"./CategoricalChart-D2YsyGqx.js";import"./CartesianAxis-CXgLYYat.js";import"./Layer-Dc68LG4Z.js";import"./Text-Dz83mHfX.js";import"./ZIndexLayer-BmwEMujN.js";import"./Label-CWe40LeI.js";import"./types-C6nAEk1h.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-CA2v1itW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DBwLqskU.js";import"./useAnimationId-FtoyJDPN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BRs_VSCT.js";import"./tooltipContext-FuvoFEqQ.js";import"./ErrorBarContext-BDsV7QiN.js";import"./activeStyles-CYcJyLiS.js";import"./SetGraphicalItem-CuWVAy3A.js";import"./getZIndexFromUnknown-CGwC5-Px.js";import"./useEffectiveDataKey-l-c80nhy.js";import"./omit-DyM5CAkJ.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

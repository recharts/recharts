import{e as t}from"./iframe-CPCZOK1n.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-8pkbG_5i.js";import{B as p}from"./BarChart-DMun9owN.js";import{X as l}from"./XAxis-DvE2ctn8.js";import{Y as h}from"./YAxis-D_9Qs3qD.js";import{B as c}from"./Brush-aWMH1oq3.js";import{B as x}from"./Bar-CNlILCK8.js";import{R as u}from"./RechartsHookInspector-BtGo_ncg.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-oWFt7rla.js";import"./immer-BU-gze6F.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-kO2YHyse.js";import"./index-DASNqNcn.js";import"./hooks-BA_spPLW.js";import"./axisSelectors-BKubAPhx.js";import"./d3-scale-Bak8-ygn.js";import"./zIndexSlice-CzIf2J47.js";import"./renderedTicksSlice-CpVIhZJh.js";import"./CartesianChart-COi-Fufa.js";import"./chartDataContext-DQ34TJEj.js";import"./CategoricalChart-DA_LUwfH.js";import"./CartesianAxis-hOqGK2-F.js";import"./Layer-DgSzLvrX.js";import"./Text-Cl6E4AYb.js";import"./DOMUtils-C8mAxLIU.js";import"./Label-CTXaFaVv.js";import"./ZIndexLayer-PN2_dLzy.js";import"./types-tTbnguye.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CwU0bArp.js";import"./ReactUtils-CSglJ9G5.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BsAVSgeR.js";import"./isPlainObject-hFLIJzKO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BBBYhjQV.js";import"./useAnimationId-BOEFbdDG.js";import"./Trapezoid-t3_zdwFX.js";import"./Sector-BjRPzYK4.js";import"./Symbols-BRdBssbX.js";import"./symbol-hTM2V_3p.js";import"./step-B2es0Z9s.js";import"./Curve-Bm35dzge.js";import"./RegisterGraphicalItemId-C7ZsFXSM.js";import"./ErrorBarContext-Cm1Er5q-.js";import"./GraphicalItemClipPath-D7ojsTyF.js";import"./SetGraphicalItem-Cdrd-n17.js";import"./getZIndexFromUnknown-DXow7mdb.js";import"./graphicalItemSelectors-D0v11jcu.js";import"./index-CZMWO916.js";import"./ChartSizeDimensions-DT2M52ae.js";import"./OffsetShower-DYRUehRC.js";import"./PlotAreaShower-CM2fQjBs.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const vt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,vt as __namedExportsOrder,It as default};

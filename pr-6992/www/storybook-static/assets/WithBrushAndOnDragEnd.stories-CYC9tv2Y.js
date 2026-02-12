import{e as t}from"./iframe-BHl6feHg.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-JXPmVnXy.js";import{B as p}from"./BarChart-BRMi17h8.js";import{X as l}from"./XAxis-Cyf7QVEF.js";import{Y as h}from"./YAxis-CW4WdVK-.js";import{B as c}from"./Brush-C5GW-VMJ.js";import{B as x}from"./Bar-BZcsjnhw.js";import{R as u}from"./RechartsHookInspector-CQ8dXbzy.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Cbmc1eDK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DNWAu01W.js";import"./hooks-Dg4O0IDH.js";import"./axisSelectors-DkCd3lVb.js";import"./zIndexSlice-BJqVcMRI.js";import"./CartesianChart-a-Nu4Djb.js";import"./chartDataContext-U6yYzpZX.js";import"./CategoricalChart-DPTMtwYi.js";import"./CartesianAxis-h298ab2p.js";import"./Layer-lCm_g64d.js";import"./Text-D9u3Lv_0.js";import"./DOMUtils-Cw8uC_z6.js";import"./Label-K4IXz_WW.js";import"./ZIndexLayer-BG8-MmnW.js";import"./types-D0Ktdl0_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-C_JbhibV.js";import"./ReactUtils-CAG2pm7w.js";import"./ActiveShapeUtils-B7nFKqHq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DXzfAzil.js";import"./useAnimationId-BLeXX0yF.js";import"./Trapezoid-Df-d7Ics.js";import"./Sector-C4gW7qc9.js";import"./Symbols-Cg9YUet5.js";import"./Curve-BK3JDrZL.js";import"./RegisterGraphicalItemId-C0ySl-rG.js";import"./ErrorBarContext-B_05VW9R.js";import"./GraphicalItemClipPath-pdN9VU--.js";import"./SetGraphicalItem-Cw07hcJH.js";import"./getZIndexFromUnknown-DQ2ueRH6.js";import"./graphicalItemSelectors-J-ZsJNTR.js";import"./index-fMMWXo17.js";import"./ChartSizeDimensions-HMEMc6fo.js";import"./OffsetShower-BfTyamfA.js";import"./PlotAreaShower-DtEQ72Vu.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const pt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,pt as __namedExportsOrder,st as default};

import{e as t}from"./iframe-BOKMyF_X.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-CqOdBUpx.js";import{B as p}from"./BarChart-B5iClHt0.js";import{X as l}from"./XAxis-CZEffDuF.js";import{Y as h}from"./YAxis-CBNt9JSX.js";import{B as c}from"./Brush-A5OL4S86.js";import{B as x}from"./Bar-DUWdjkug.js";import{R as u}from"./RechartsHookInspector-CyXtWZCT.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D-2ZbLU8.js";import"./immer-BWwXhaAr.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BbOfJK_v.js";import"./index-DyqnJuAH.js";import"./hooks-BSpUdl1W.js";import"./axisSelectors-DKV-tPdL.js";import"./d3-scale-DFwrAk_i.js";import"./zIndexSlice-5HlspQCC.js";import"./renderedTicksSlice-BzcMdbXv.js";import"./CartesianChart-DhtZ13KG.js";import"./chartDataContext-CzpIjlkZ.js";import"./CategoricalChart-BuHiBizY.js";import"./CartesianAxis-DfkQ8mC4.js";import"./Layer-jqqI8J4h.js";import"./Text-v3vniUMj.js";import"./DOMUtils-BpFKs9GQ.js";import"./Label-D-SjomvA.js";import"./ZIndexLayer-BPVGtKRn.js";import"./types-BRMSpD9x.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BBzuwH_s.js";import"./ReactUtils-D8BtYMdD.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-B0yU484R.js";import"./isPlainObject-DIE9lg5n.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DaPP8vxp.js";import"./useAnimationId-CQeaLNgU.js";import"./Trapezoid-Ckkc98J5.js";import"./Sector-DFBFkrCL.js";import"./Symbols-Bgq4WsjW.js";import"./symbol-BbSh3W4q.js";import"./step-CSZdFR4k.js";import"./Curve-B4PvFjai.js";import"./RegisterGraphicalItemId-CT98v8Eq.js";import"./ErrorBarContext-hDWWdNkc.js";import"./GraphicalItemClipPath-C2O7VO_H.js";import"./SetGraphicalItem-C9j26hww.js";import"./getZIndexFromUnknown-_q828ooS.js";import"./graphicalItemSelectors-Ct946g8y.js";import"./index-C_V29KK9.js";import"./ChartSizeDimensions-BzpSoNcH.js";import"./OffsetShower-DzkfGY4a.js";import"./PlotAreaShower-Djb9Eb2x.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

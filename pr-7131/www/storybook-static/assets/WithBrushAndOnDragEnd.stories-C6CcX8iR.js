import{e as t}from"./iframe-BDTlfdm2.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck--4uVIqe7.js";import{B as p}from"./BarChart-DBC_bKRO.js";import{X as l}from"./XAxis-CGiSi9HN.js";import{Y as h}from"./YAxis-ClHUtMv7.js";import{B as c}from"./Brush-esresznk.js";import{B as x}from"./Bar-BeDWQfR1.js";import{R as u}from"./RechartsHookInspector-CwVl35lx.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Czz55H-I.js";import"./immer-D4Dnjbsg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CFvbTCKp.js";import"./index-B3NJv-3m.js";import"./hooks-CfsEtptI.js";import"./axisSelectors-Dx0oxQ7o.js";import"./d3-scale-3sh934kt.js";import"./zIndexSlice-Brj7ikm8.js";import"./renderedTicksSlice-D_ZcqCe1.js";import"./CartesianChart-7fZDMSO_.js";import"./chartDataContext-CSwNX1B7.js";import"./CategoricalChart-CpHz1opn.js";import"./CartesianAxis-CZM1jQf4.js";import"./Layer-CqYlT3eS.js";import"./Text-HbCgBUoZ.js";import"./DOMUtils-DeXMvM2R.js";import"./Label-VxKVkBMg.js";import"./ZIndexLayer-DC39aMOh.js";import"./types-D6KN9kQt.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CXmFM1_D.js";import"./ReactUtils-ma75EdaK.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-ZL_pxKoe.js";import"./isPlainObject-Cnip5whK.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CWWR6MHC.js";import"./useAnimationId-CupwM_tg.js";import"./Trapezoid-yGMiXHgj.js";import"./Sector-ketJTAKQ.js";import"./Symbols-7yR4Wfku.js";import"./symbol-BHrPG3ZF.js";import"./step-C4gkOhOo.js";import"./Curve-g-MTQgVG.js";import"./RegisterGraphicalItemId-Ch3Q5pij.js";import"./ErrorBarContext-DViBWZq0.js";import"./GraphicalItemClipPath-DgjUnpLZ.js";import"./SetGraphicalItem-DG5VxVGr.js";import"./getZIndexFromUnknown-C951RgiO.js";import"./graphicalItemSelectors-C9Ci8dGJ.js";import"./index-CT8_ithu.js";import"./ChartSizeDimensions-C2U4uaah.js";import"./OffsetShower-Mn3nZtBJ.js";import"./PlotAreaShower-zSnLei3q.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

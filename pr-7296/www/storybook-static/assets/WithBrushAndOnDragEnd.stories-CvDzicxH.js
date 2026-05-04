import{e as t}from"./iframe-BIeRAvIs.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-Bo5lKgUH.js";import{B as p}from"./BarChart-sxs_kAD2.js";import{X as l}from"./XAxis-Bz_wbRMX.js";import{Y as h}from"./YAxis-ChIFeHGD.js";import{B as c}from"./Brush-DYAubKX6.js";import{B as x}from"./Bar-CD-k0Uaq.js";import{R as u}from"./RechartsHookInspector-ZnpsfR9f.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B7afBTwD.js";import"./immer-5-lHdrEI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CM54gdPj.js";import"./index-DwT1n7qR.js";import"./hooks-DF9hzSyO.js";import"./axisSelectors-DpIQAzCF.js";import"./d3-scale-B0zeFeqw.js";import"./zIndexSlice-C0VSrdrd.js";import"./renderedTicksSlice-Bjl9R1bd.js";import"./CartesianChart-2ONA7LeG.js";import"./chartDataContext-C2nJuVrb.js";import"./CategoricalChart-BhjQzYI5.js";import"./CartesianAxis-2__l5TP8.js";import"./Layer-BzoHvM-S.js";import"./Text-CrBefNhw.js";import"./DOMUtils-lW54g6QP.js";import"./Label-B1v8zCXy.js";import"./ZIndexLayer-BTjArk6I.js";import"./types-DQojIKJi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-D3RlRE3X.js";import"./ReactUtils-hS7xEmGS.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Bps_BZs-.js";import"./isPlainObject-l3KiUXnf.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CYSY3nrg.js";import"./useAnimationId-C9Uv8ueb.js";import"./Trapezoid-C_yuwcEm.js";import"./Sector-EPL29HSF.js";import"./Symbols-BeXKfzK2.js";import"./symbol-CFCWUA3z.js";import"./step-CNOKEUU2.js";import"./Curve-BwmaiqIM.js";import"./RegisterGraphicalItemId-oCC6rABF.js";import"./ErrorBarContext-BHrSsU01.js";import"./GraphicalItemClipPath-C63EteST.js";import"./SetGraphicalItem-DsNhb24c.js";import"./getZIndexFromUnknown-DXQnp18G.js";import"./graphicalItemSelectors-DCfdYwEE.js";import"./index-CG5u5SYH.js";import"./ChartSizeDimensions-DyfQXYwz.js";import"./OffsetShower-VB1mbOI0.js";import"./PlotAreaShower-Dt-mgpmA.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

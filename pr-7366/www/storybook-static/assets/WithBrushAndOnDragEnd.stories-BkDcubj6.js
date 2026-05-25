import{e as t}from"./iframe-D1Y9TY-u.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./arrayEqualityCheck-DPvIBees.js";import{B as p}from"./BarChart-_vV0GCFW.js";import{X as l}from"./XAxis-5BMZV76c.js";import{Y as h}from"./YAxis-D2V4IA3o.js";import{B as c}from"./Brush-B0BKSmd7.js";import{B as x}from"./Bar-GQBrWBrE.js";import{R as u}from"./RechartsHookInspector-DlKiXr8l.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DD8L0n44.js";import"./immer-CxQQPMht.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B0rnCwdR.js";import"./index-D5E_lAb8.js";import"./hooks-CFGEq-6u.js";import"./axisSelectors-DhcMUj02.js";import"./d3-scale-BrKRNhi9.js";import"./zIndexSlice-CgFHZos-.js";import"./renderedTicksSlice-W-15kQDb.js";import"./CartesianChart-B6m73if6.js";import"./chartDataContext-C5ZGItfB.js";import"./CategoricalChart-DcwMFRg_.js";import"./CartesianAxis-BWlWM6yy.js";import"./Layer-B3bXBbbL.js";import"./Text-Dd-bZYpK.js";import"./DOMUtils-DyWiHKN-.js";import"./Label-DE2OURwo.js";import"./ZIndexLayer-CfpM-rLj.js";import"./types-BaB5y5-3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-Bq4QZcEU.js";import"./ReactUtils-Cn5gX129.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D0lkTSKk.js";import"./useAnimationId-BZgLvOHt.js";import"./ActiveShapeUtils-D80gxDtc.js";import"./RegisterGraphicalItemId-Bn3tPr19.js";import"./ErrorBarContext-BTNYxynC.js";import"./GraphicalItemClipPath-BvycXnEO.js";import"./SetGraphicalItem-B11RgMwt.js";import"./getZIndexFromUnknown-CcHOhsOi.js";import"./graphicalItemSelectors-Bc__06oy.js";import"./index-twG5rrjJ.js";import"./ChartSizeDimensions-BkxRlTbK.js";import"./OffsetShower-XnxI6Cxg.js";import"./PlotAreaShower-BNnVE1WV.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const lt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};

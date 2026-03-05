import{e as t}from"./iframe-Bhf_6EYG.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-B5hYgnzz.js";import{B as p}from"./BarChart-D9EgF0EG.js";import{X as l}from"./XAxis-BWizQgTN.js";import{Y as h}from"./YAxis-DsqV4VJF.js";import{B as c}from"./Brush-DtPI4WQ_.js";import{B as x}from"./Bar-BoLotl3d.js";import{R as u}from"./RechartsHookInspector-oY9r6aPa.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CltYoVM3.js";import"./immer-DsnYViPQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BjPXyIC1.js";import"./index-qC7M-hg-.js";import"./hooks-B-MoHLBQ.js";import"./axisSelectors-Dt9F6ywj.js";import"./d3-scale-BxqYPjsE.js";import"./zIndexSlice-C8FzPb5S.js";import"./renderedTicksSlice-DaDN5hFR.js";import"./CartesianChart-CpaNhZA2.js";import"./chartDataContext-D5Z43mUX.js";import"./CategoricalChart-DSURhBZI.js";import"./CartesianAxis-CR_T_Fxw.js";import"./Layer-XFtQT-yw.js";import"./Text-D28roL_s.js";import"./DOMUtils-ribD7pvn.js";import"./Label-CzjtkYX8.js";import"./ZIndexLayer-B0zk77US.js";import"./types-B1Me3-i2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DrWjvVZn.js";import"./ReactUtils-BVVOmEmS.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-RLHirw82.js";import"./isPlainObject-DTAcdHTW.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BGAQXYtP.js";import"./useAnimationId-5DionbmP.js";import"./Trapezoid-DB4UfnHe.js";import"./Sector-DbXwqOky.js";import"./Symbols-BWIj5ibB.js";import"./symbol-DrDNfTYd.js";import"./step-B0zDApE1.js";import"./Curve-CcL59NDu.js";import"./RegisterGraphicalItemId-ama1TJ-6.js";import"./ErrorBarContext-CFfHMS1a.js";import"./GraphicalItemClipPath-kNsFQRgF.js";import"./SetGraphicalItem-Ck1k9tQT.js";import"./getZIndexFromUnknown-S-WMpLto.js";import"./graphicalItemSelectors-Nlwl8Y0A.js";import"./index-BqdYNfEr.js";import"./ChartSizeDimensions-BOmMsXET.js";import"./OffsetShower-syHcU848.js";import"./PlotAreaShower-BiEJY1Iw.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

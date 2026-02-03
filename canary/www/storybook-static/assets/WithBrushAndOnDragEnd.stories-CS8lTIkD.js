import{e as t}from"./iframe-CTxRHOGj.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-B_rRIojj.js";import{B as p}from"./BarChart-Cj_erN_E.js";import{X as l}from"./XAxis-BNIlZlch.js";import{Y as h}from"./YAxis-D6e6Qj3m.js";import{B as c}from"./Brush-D14Lg1yx.js";import{B as x}from"./Bar-BAIm-8aC.js";import{R as u}from"./RechartsHookInspector-Dvolm171.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DMjdAuvI.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-B2RXwXeU.js";import"./hooks-C7jgZ8ZG.js";import"./axisSelectors-Dmr46G9_.js";import"./zIndexSlice-fEtQltEu.js";import"./CartesianChart-Dac5W46z.js";import"./chartDataContext-lkL8bl_R.js";import"./CategoricalChart-CwXcJ4KD.js";import"./CartesianAxis-BedncvxG.js";import"./Layer-NDmuZa_H.js";import"./Text-mcy7Wgv9.js";import"./DOMUtils-DAlT2U1x.js";import"./Label-D926DJYr.js";import"./ZIndexLayer-hZNMFSqY.js";import"./types-CAlg1Faj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DXRTN6s2.js";import"./ReactUtils-BZY6277w.js";import"./ActiveShapeUtils-Dwyol1Bt.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BxJQxHPh.js";import"./useAnimationId-BmKrhVKp.js";import"./Trapezoid-VAjw1k5b.js";import"./Sector-DQFWjz1_.js";import"./Symbols-BBka0yme.js";import"./Curve-Dmxl7Q3I.js";import"./RegisterGraphicalItemId-Cw9P8hA6.js";import"./ErrorBarContext-D1j-EPSf.js";import"./GraphicalItemClipPath-C6n7_76l.js";import"./SetGraphicalItem-BipBgEa4.js";import"./getZIndexFromUnknown-BL18CTD2.js";import"./graphicalItemSelectors-C3EXFv3_.js";import"./index-HMl1pmjv.js";import"./ChartSizeDimensions-aD96KjA6.js";import"./OffsetShower-BkNDrOWW.js";import"./PlotAreaShower-hX4_8FHk.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

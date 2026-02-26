import{e as t}from"./iframe-Cff4EXi3.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-VW91KjqU.js";import{B as p}from"./BarChart-CzhBcoyB.js";import{X as l}from"./XAxis-asdFitiM.js";import{Y as h}from"./YAxis-CEsMkUHq.js";import{B as c}from"./Brush-Bu0FdRd7.js";import{B as x}from"./Bar-Wd0XKC_V.js";import{R as u}from"./RechartsHookInspector-qCKXCEwx.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-pLSVnyPY.js";import"./immer-Cixy3ajB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DMPfsW98.js";import"./index-B-6vBbA8.js";import"./hooks-DQBeyb0n.js";import"./axisSelectors-D22FLxk-.js";import"./d3-scale-DMGDf7_x.js";import"./zIndexSlice-C-izguCE.js";import"./renderedTicksSlice-B92sUlvw.js";import"./CartesianChart-B_TDMZX3.js";import"./chartDataContext-OdHOh49w.js";import"./CategoricalChart-CTT0iB0s.js";import"./CartesianAxis-CTKh-VYh.js";import"./Layer-D22mEoCB.js";import"./Text-DvkJV6Cf.js";import"./DOMUtils-CF14m3lA.js";import"./Label-KYKyDNcr.js";import"./ZIndexLayer-UZz4JYvU.js";import"./types-CtvHHRW4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BWdtFUR0.js";import"./ReactUtils-BhGfO_gM.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BY5228yv.js";import"./isPlainObject-BUXLJ9Pn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BITjWgSa.js";import"./useAnimationId-CJEIt2ET.js";import"./Trapezoid-BMmW3PWG.js";import"./Sector-BomCciMR.js";import"./Symbols-i7pcWr_t.js";import"./symbol-7J1n19-D.js";import"./step-YwxG2wvl.js";import"./Curve-1dMXeL2S.js";import"./RegisterGraphicalItemId-CvWcZdp6.js";import"./ErrorBarContext-BXEok-II.js";import"./GraphicalItemClipPath-MuxXQAh9.js";import"./SetGraphicalItem-CGKCADpx.js";import"./getZIndexFromUnknown-D4u0nCln.js";import"./graphicalItemSelectors-B6viA6C5.js";import"./index-lBMzeJSk.js";import"./ChartSizeDimensions-Bz5WY-XJ.js";import"./OffsetShower-C9tHURwR.js";import"./PlotAreaShower-iGisZace.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

import{e as t}from"./iframe-DCkCb3cL.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-Cyv8hSdj.js";import{B as p}from"./BarChart-BCThsf-5.js";import{X as l}from"./XAxis-DjeZloTX.js";import{Y as h}from"./YAxis-sTotZWFY.js";import{B as c}from"./Brush-57SYtoSs.js";import{B as x}from"./Bar-CMmIeiNY.js";import{R as u}from"./RechartsHookInspector-GywlJnGS.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Brvb-unE.js";import"./immer-CJIR5Dxo.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ysnAkpcY.js";import"./index-DmTf6G0P.js";import"./hooks-rTm4XK8H.js";import"./axisSelectors-DLVZqdCy.js";import"./d3-scale-cKex8xs_.js";import"./zIndexSlice-C2SLAmdu.js";import"./renderedTicksSlice-dBR_dEs7.js";import"./CartesianChart-U8I4mwYO.js";import"./chartDataContext-BB8jRTpM.js";import"./CategoricalChart-sLprv-i8.js";import"./CartesianAxis-2U-Fs3nY.js";import"./Layer-DdpUaJ6z.js";import"./Text-C0rSCzeg.js";import"./DOMUtils-D_52ZroA.js";import"./Label-DgXvgibU.js";import"./ZIndexLayer-DmR4HC_4.js";import"./types-BN3BphoZ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BP3wGTwd.js";import"./ReactUtils-UnUZnhmf.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-6FenCz6m.js";import"./isPlainObject-De9uXPg3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B2C1fB0K.js";import"./useAnimationId-CqiSzw9P.js";import"./Trapezoid-D7d51r_V.js";import"./Sector-BrEwMQo2.js";import"./Symbols-3b29A3qW.js";import"./symbol-CfRPBnBt.js";import"./step-CFTOTHh4.js";import"./Curve-0mQU3lN2.js";import"./RegisterGraphicalItemId-D6ZXTRMS.js";import"./ErrorBarContext-B-qZZjga.js";import"./GraphicalItemClipPath-CSx6dkEB.js";import"./SetGraphicalItem-DyLJ3K98.js";import"./getZIndexFromUnknown-Dxr-pNxi.js";import"./graphicalItemSelectors-BGSDKvIz.js";import"./index-tKLwA4MY.js";import"./ChartSizeDimensions-3SLqT2DF.js";import"./OffsetShower-DuCJOCxi.js";import"./PlotAreaShower-DYkpYr6V.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

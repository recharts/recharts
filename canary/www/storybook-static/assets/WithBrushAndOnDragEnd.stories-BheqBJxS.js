import{e as t}from"./iframe-B9fQ2oqm.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-BL4DC-lX.js";import{B as p}from"./BarChart-C45gUTHW.js";import{X as l}from"./XAxis-C_-a0rcx.js";import{Y as h}from"./YAxis-DLGPf3is.js";import{B as c}from"./Brush-DYCB89TC.js";import{B as x}from"./Bar-BtQmjB1O.js";import{R as u}from"./RechartsHookInspector-Bgd-A5WA.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-I2gIUEIG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cj27l0cc.js";import"./hooks-CgvDvD0u.js";import"./axisSelectors-WDcSlsrb.js";import"./zIndexSlice-Dtm-TxeQ.js";import"./renderedTicksSlice-BpKCGg5r.js";import"./CartesianChart-BNj2fWwb.js";import"./chartDataContext-C4zbKrr2.js";import"./CategoricalChart-vuUHc2U_.js";import"./CartesianAxis-IX04Fc3e.js";import"./Layer-Be_YD9cf.js";import"./Text-CtxM0wos.js";import"./DOMUtils-fTKYrial.js";import"./Label-CAIiijl8.js";import"./ZIndexLayer-sFj17QWh.js";import"./types-CGGhjhj7.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-hkxIgnnF.js";import"./ReactUtils-C4s4yAkw.js";import"./ActiveShapeUtils-B57xr0Gy.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-H10qCiiT.js";import"./useAnimationId-ixpsepmW.js";import"./Trapezoid-DsuehI9k.js";import"./Sector-C5PqXP9J.js";import"./Symbols-B8Ovocri.js";import"./Curve-BO7IcGeE.js";import"./RegisterGraphicalItemId-DqMQRK17.js";import"./ErrorBarContext-B0P8b6XD.js";import"./GraphicalItemClipPath-C2gRI9rX.js";import"./SetGraphicalItem-MN_yffMw.js";import"./getZIndexFromUnknown-dVY_wCu2.js";import"./graphicalItemSelectors-CSLu04-r.js";import"./index-DpQlVcWs.js";import"./ChartSizeDimensions-DoVF9EA8.js";import"./OffsetShower-BUflKiRR.js";import"./PlotAreaShower-DNG_eO1L.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

import{e as t}from"./iframe-DNZpCyoe.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-szoTsszl.js";import{B as p}from"./BarChart-_us_Thhw.js";import{X as l}from"./XAxis-BWyuZPtw.js";import{Y as h}from"./YAxis-qzfDCcGS.js";import{B as c}from"./Brush-C7aVMnPp.js";import{B as x}from"./Bar-7rpZ1iG_.js";import{R as u}from"./RechartsHookInspector-PStiuiJe.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-2DomDO9e.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-BQVorp6g.js";import"./hooks-BoDBEmNZ.js";import"./axisSelectors-BPOUZfxz.js";import"./zIndexSlice-CbXQpeLy.js";import"./CartesianChart-ClznBUcn.js";import"./chartDataContext-IoENa7_Q.js";import"./CategoricalChart-BcCxfWo7.js";import"./CartesianAxis-CbYE_e4I.js";import"./Layer-CrRkJfyu.js";import"./Text-XEpcAul9.js";import"./DOMUtils-DNR30RXa.js";import"./Label-DtNzO2lD.js";import"./ZIndexLayer-eq4dVVjm.js";import"./types-Dxz_CRdn.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DBHawIRO.js";import"./ReactUtils-DE6T7IjU.js";import"./ActiveShapeUtils-QhjeEfk1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DfjjH4Oz.js";import"./useAnimationId-CRV9WByP.js";import"./Trapezoid-CI8djX1t.js";import"./Sector-bkG1qaK_.js";import"./Symbols-D3jTalrW.js";import"./Curve-CA7wgxde.js";import"./RegisterGraphicalItemId-BH87LWyT.js";import"./ErrorBarContext-CuMQg8zm.js";import"./GraphicalItemClipPath-DI-Q4qpn.js";import"./SetGraphicalItem-DkQhVMnS.js";import"./getZIndexFromUnknown-vzKNiyWC.js";import"./graphicalItemSelectors-s2XvwiHk.js";import"./index-CZ8HrsbR.js";import"./ChartSizeDimensions-Cev-F566.js";import"./OffsetShower-DlkB9H2-.js";import"./PlotAreaShower-DJtLg1j7.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

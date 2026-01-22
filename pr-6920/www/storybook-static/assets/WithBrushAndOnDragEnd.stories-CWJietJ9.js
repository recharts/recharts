import{e as t}from"./iframe-CgKUDY6I.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-4uJZ54sz.js";import{B as p}from"./BarChart-DxEHozJa.js";import{X as l}from"./XAxis-DwOryPfA.js";import{Y as h}from"./YAxis-D1iy5DZK.js";import{B as c}from"./Brush-C7QJrl5x.js";import{B as x}from"./Bar-oIXReFvc.js";import{R as u}from"./RechartsHookInspector-BbTYK-9O.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DMHVQbHf.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-DRtAtWmJ.js";import"./hooks-C-jfEB0O.js";import"./axisSelectors-78x8Dv2Q.js";import"./zIndexSlice-L1yp4KKu.js";import"./CartesianChart-DklQ4GGx.js";import"./chartDataContext-B10HjSyG.js";import"./CategoricalChart-BTXI1VEa.js";import"./CartesianAxis-B5IaiaWB.js";import"./Layer-DyDQThNB.js";import"./Text-D7eyVQni.js";import"./DOMUtils-oL5y8gGU.js";import"./Label-Dn5iT33K.js";import"./ZIndexLayer-Cm5c_q02.js";import"./types-DoxvimZ4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BX66OGI4.js";import"./ReactUtils-4_OOWgDq.js";import"./ActiveShapeUtils-4Z7GGztm.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DDDRsXYi.js";import"./useAnimationId-BABjQp7J.js";import"./Trapezoid-XOwgAbCO.js";import"./Sector-BF2Rl4dz.js";import"./Symbols-Crrpo09o.js";import"./Curve-BuIdVsH6.js";import"./RegisterGraphicalItemId-DTO6cAIg.js";import"./ErrorBarContext-DEMjkEM_.js";import"./GraphicalItemClipPath-D2P2Wy6l.js";import"./SetGraphicalItem-GcELh7Cs.js";import"./getZIndexFromUnknown-BjUd5y5l.js";import"./graphicalItemSelectors-CfIdsgiu.js";import"./index-2ufv7V98.js";import"./ChartSizeDimensions-BloifcJy.js";import"./OffsetShower-BASfXPJZ.js";import"./PlotAreaShower-d7Om0wsj.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

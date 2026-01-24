import{e as t}from"./iframe-BMCIaxKG.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck--GVOH9-X.js";import{B as p}from"./BarChart-C3hFj_41.js";import{X as l}from"./XAxis-CQh89uUR.js";import{Y as h}from"./YAxis-DfmH9Dom.js";import{B as c}from"./Brush-oSfQos-d.js";import{B as x}from"./Bar-9gbSH6ko.js";import{R as u}from"./RechartsHookInspector-BEE5VJHB.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DYzg8zSB.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-Bb1gDQXi.js";import"./hooks-DebnH94a.js";import"./axisSelectors-cgl3VJbu.js";import"./zIndexSlice-B9Z5B7ke.js";import"./CartesianChart-B-ZCTtvW.js";import"./chartDataContext-oBen9I8F.js";import"./CategoricalChart-epx7zaIT.js";import"./CartesianAxis-BYfW_8DA.js";import"./Layer-MWXbZbYh.js";import"./Text-C3pNOBoN.js";import"./DOMUtils-Bqla5JdC.js";import"./Label-DX5r6J7L.js";import"./ZIndexLayer-D3DglK0F.js";import"./types-CjLOz-vL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DbQ4U6Ut.js";import"./ReactUtils-5tDB8KCJ.js";import"./ActiveShapeUtils-DtnCQ-cg.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B1cropaK.js";import"./useAnimationId-BmU-cqjD.js";import"./Trapezoid-CAvOGSEj.js";import"./Sector-DluXzhdl.js";import"./Symbols-DwSHOnga.js";import"./Curve-B-WNVokC.js";import"./RegisterGraphicalItemId-oN7HBHom.js";import"./ErrorBarContext-KqD_eRKg.js";import"./GraphicalItemClipPath-B2ari5YW.js";import"./SetGraphicalItem-CcB6KXss.js";import"./getZIndexFromUnknown-hiISf2Pg.js";import"./graphicalItemSelectors-Doxgifoh.js";import"./index-a6yAW-au.js";import"./ChartSizeDimensions-B-pVWfha.js";import"./OffsetShower--s29U8Jg.js";import"./PlotAreaShower-CsN0ehbx.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

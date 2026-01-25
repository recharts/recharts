import{e as t}from"./iframe-zYnk8EOr.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-R2aAAI7x.js";import{B as p}from"./BarChart-BylTuN3t.js";import{X as l}from"./XAxis-BSJK083u.js";import{Y as h}from"./YAxis--5gqcMjD.js";import{B as c}from"./Brush-lX3AxE6a.js";import{B as x}from"./Bar-DWJ0slbO.js";import{R as u}from"./RechartsHookInspector-BM6dBg77.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CV8ibCPI.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CuXPMym5.js";import"./hooks-B3MKPDpU.js";import"./axisSelectors-DsIocnZB.js";import"./zIndexSlice-BvNEMV0a.js";import"./CartesianChart-Bb7O5ezJ.js";import"./chartDataContext-93hSB1i9.js";import"./CategoricalChart-B_Ua5Q7Q.js";import"./CartesianAxis-BwSMeEYw.js";import"./Layer-B9ovT-3z.js";import"./Text-BKKp-XNT.js";import"./DOMUtils-BOegbNur.js";import"./Label-GsPpBxAc.js";import"./ZIndexLayer-DbRKS04n.js";import"./types-BQ3BmiiK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-C_ibJ9CU.js";import"./ReactUtils-TEkJxkkD.js";import"./ActiveShapeUtils-B-4Mqq4H.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CWuLgpNw.js";import"./useAnimationId-C9zF9Z14.js";import"./Trapezoid-Ciecc0SZ.js";import"./Sector-CRX25Q97.js";import"./Symbols-CvhTj7bZ.js";import"./Curve-BERjiOgY.js";import"./RegisterGraphicalItemId-Xtx5eZl0.js";import"./ErrorBarContext-Bboddv8p.js";import"./GraphicalItemClipPath-BwpenKow.js";import"./SetGraphicalItem-CghMnI1R.js";import"./getZIndexFromUnknown-BLV71gej.js";import"./graphicalItemSelectors-BLhvCA_u.js";import"./index-C4mhfMdJ.js";import"./ChartSizeDimensions-DqnYIWpL.js";import"./OffsetShower-BnqP058z.js";import"./PlotAreaShower-Bzo9Sf9-.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

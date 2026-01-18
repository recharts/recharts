import{e}from"./iframe-Bn_7jga7.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-CSuBYCWj.js";import{B as p}from"./BarChart-DurT7_4w.js";import{X as l}from"./XAxis-CkQlFxje.js";import{Y as h}from"./YAxis-C7ibSyRg.js";import{B as c}from"./Brush-XoIj9xeH.js";import{B as x}from"./Bar-BV3geYnv.js";import{R as u}from"./RechartsHookInspector-B4H5Lyo-.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DCdxs1iD.js";import"./PolarUtils-CBWSHxoJ.js";import"./RechartsWrapper-DSmS8nVp.js";import"./hooks-BL6pVXml.js";import"./axisSelectors-B3n8BDRj.js";import"./zIndexSlice-usP7cHtF.js";import"./CartesianChart-CFgpMI4e.js";import"./chartDataContext-CGN_dwZ0.js";import"./CategoricalChart-C3CVYlbu.js";import"./CartesianAxis-5Tz-WD7f.js";import"./Layer-COTxk2h3.js";import"./Text-BQI8M-tq.js";import"./DOMUtils-CRyukOD8.js";import"./Label-CS-Zhu5a.js";import"./ZIndexLayer-BXCJNtZK.js";import"./types-SXh4X6nB.js";import"./tooltipContext-BkkKQoXo.js";import"./ReactUtils-GlbSvDIy.js";import"./ActiveShapeUtils-BF53wkQd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Wjj6MIuU.js";import"./useAnimationId-id_mTj1h.js";import"./Trapezoid-BCX-j7xi.js";import"./Sector-CuwRjw3S.js";import"./Symbols-DCEXw1ah.js";import"./Curve-qns-9S5i.js";import"./RegisterGraphicalItemId-BEPfbN5x.js";import"./ErrorBarContext-D9hbJwiU.js";import"./GraphicalItemClipPath-ECv6yN9n.js";import"./SetGraphicalItem-BWnuaPkJ.js";import"./getZIndexFromUnknown-D2dzffDO.js";import"./graphicalItemSelectors-feZHKy87.js";import"./index-wlSGh2Q3.js";import"./ChartSizeDimensions-C28_hYOe.js";import"./OffsetShower-BxoubtuL.js";import"./PlotAreaShower-Czw-Abfi.js";const me={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},t={render:()=>{const[r,d]=e.useState({startIndex:0,endIndex:a.length-1});return e.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},e.createElement("div",null,"Start index:",r.startIndex),e.createElement("div",null,"End index:",r.endIndex),e.createElement(s,null,e.createElement(p,{data:a},e.createElement(l,{dataKey:"value"}),e.createElement(h,null),e.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),e.createElement(x,{dataKey:"value"}),e.createElement(u,null))))}};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const se=["WithBrushAndOnDragEnd"];export{t as WithBrushAndOnDragEnd,se as __namedExportsOrder,me as default};

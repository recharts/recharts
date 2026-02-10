import{e as t}from"./iframe-DltNrMbJ.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-LkDVdEVg.js";import{B as p}from"./BarChart-Cbw_zT6T.js";import{X as l}from"./XAxis-CERTAhrM.js";import{Y as h}from"./YAxis-CJYvma9k.js";import{B as c}from"./Brush-BCBwE_Xs.js";import{B as x}from"./Bar-DeU_pE3W.js";import{R as u}from"./RechartsHookInspector-CkUV0TxE.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DUSmftLt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BkNkb6Gi.js";import"./hooks-BprzVDZg.js";import"./axisSelectors-CKIz14Qs.js";import"./zIndexSlice-BY2OfmK4.js";import"./CartesianChart-DYne5FJP.js";import"./chartDataContext-DyMLSiHH.js";import"./CategoricalChart-B77eIce_.js";import"./CartesianAxis-DfRV_-M5.js";import"./Layer-CESBlQPf.js";import"./Text-Dh_cvCOq.js";import"./DOMUtils-xzfmDO5R.js";import"./Label-WGWSnZjZ.js";import"./ZIndexLayer-BSXb5mnX.js";import"./types-ByzPfmmH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-74zqqiiW.js";import"./ReactUtils-q-DWoBEq.js";import"./ActiveShapeUtils-Dt67byha.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BEufvsiJ.js";import"./useAnimationId-BKMwNFd7.js";import"./Trapezoid-AkIt7Koc.js";import"./Sector-CucAHJS5.js";import"./Symbols-VYn2rLNF.js";import"./Curve-DQJoehXa.js";import"./RegisterGraphicalItemId-BssAkKZ1.js";import"./ErrorBarContext-D_xaXEzA.js";import"./GraphicalItemClipPath-BbPDXtNe.js";import"./SetGraphicalItem-BwO0NZge.js";import"./getZIndexFromUnknown-Cl_4XYmX.js";import"./graphicalItemSelectors-JpKVhF4p.js";import"./index-DSMvm7PG.js";import"./ChartSizeDimensions-D5hH2uJv.js";import"./OffsetShower-DW4GTDS2.js";import"./PlotAreaShower-DOQKbeSs.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

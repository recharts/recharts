import{e as t}from"./iframe-faEGnlhT.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-C0DmTAi-.js";import{B as p}from"./BarChart-DQ4wvaBO.js";import{X as l}from"./XAxis-CFbqEzYE.js";import{Y as h}from"./YAxis-CcVX3Fvc.js";import{B as c}from"./Brush-g-u-TCGO.js";import{B as x}from"./Bar-wGu3-k1X.js";import{R as u}from"./RechartsHookInspector-DorgIABE.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-E1K0A3LW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C18N7NWG.js";import"./hooks-BCFTrc9K.js";import"./axisSelectors-B-QEn76s.js";import"./zIndexSlice-B9CGjDBz.js";import"./CartesianChart-BcS0gbJv.js";import"./chartDataContext--QJQie47.js";import"./CategoricalChart-DS6-A_Eu.js";import"./CartesianAxis-D4ASWqc1.js";import"./Layer-BVbadyP2.js";import"./Text-TFqO-ApL.js";import"./DOMUtils-z-S8PuYj.js";import"./Label-DHVy6qmW.js";import"./ZIndexLayer-Dp_sNRVX.js";import"./types-Bw-NWEAT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DUN4cnoq.js";import"./ReactUtils-DIvlatZp.js";import"./ActiveShapeUtils-DBh9LMnt.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DX06SiF4.js";import"./useAnimationId-KEEDc5eO.js";import"./Trapezoid-BUZP6yXx.js";import"./Sector-VklTrsUw.js";import"./Symbols-C64BIrkw.js";import"./Curve-Digajzg7.js";import"./RegisterGraphicalItemId-D75CZCwF.js";import"./ErrorBarContext-BZkVSpWJ.js";import"./GraphicalItemClipPath-Cxy9t3jj.js";import"./SetGraphicalItem-Dla_HDr3.js";import"./getZIndexFromUnknown-89Rch5O5.js";import"./graphicalItemSelectors-DRuxD3FT.js";import"./index-ek5vanJI.js";import"./ChartSizeDimensions-BIBiiHxa.js";import"./OffsetShower-syvld0TV.js";import"./PlotAreaShower-LZVAobRV.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

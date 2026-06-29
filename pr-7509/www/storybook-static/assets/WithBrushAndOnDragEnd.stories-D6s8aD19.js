import{R as t}from"./iframe-4vtyrily.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DsxXMu10.js";import{B as p}from"./BarChart-C0qgfrvh.js";import{X as l}from"./XAxis-D8jscbum.js";import{Y as h}from"./YAxis-BZLq-Yvr.js";import{B as x}from"./Brush-BuL_wzuU.js";import{B as c}from"./Bar-TrBer7Ss.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BJLHAoQW.js";import"./index-058gmbYq.js";import"./index-WdI8WwRZ.js";import"./get-CmTlD__X.js";import"./resolveDefaultProps-CluH8H00.js";import"./isWellBehavedNumber-BgzphtrB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BkIEJRAG.js";import"./index-DmmOL2VS.js";import"./index-lWQepKyy.js";import"./renderedTicksSlice-DadNz-JQ.js";import"./axisSelectors-b6USA22d.js";import"./d3-scale-BRChu2o4.js";import"./CartesianChart-COMuthXy.js";import"./chartDataContext-Cvy_uDzX.js";import"./CategoricalChart-Cbi53qJN.js";import"./CartesianAxis-CiqNB0Kv.js";import"./Layer-BeOWFmV4.js";import"./Text-BI23BLmu.js";import"./DOMUtils-BhADA_J0.js";import"./Label-BGwY3uMh.js";import"./ZIndexLayer-BSkjb5Ga.js";import"./types-CBN3GvJG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-CRCqEOZ6.js";import"./AnimatedItems-DdVQ6WRa.js";import"./useAnimationId-CorgOjgO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DdosgUZ5.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DwhByUak.js";import"./RegisterGraphicalItemId-3aiZPuQN.js";import"./ErrorBarContext-DZAGOXyd.js";import"./GraphicalItemClipPath-Cc5Lg0-u.js";import"./SetGraphicalItem-Brisep9j.js";import"./getZIndexFromUnknown-CbDzSOYo.js";import"./graphicalItemSelectors-DwEj409d.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const mt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,mt as __namedExportsOrder,dt as default};

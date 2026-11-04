import{R as t}from"./iframe-Dpjo95BT.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Bz9FHg4X.js";import{B as p}from"./BarChart-C1cCuasV.js";import{X as l}from"./XAxis-BTXqWGnk.js";import{Y as h}from"./YAxis-D506yA8K.js";import{B as x}from"./Brush-DP3FdggV.js";import{B as c}from"./Bar-l8MrXgR-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C9kA-MT8.js";import"./throttle-CgrRaOJs.js";import"./index-LdQYXtG7.js";import"./index-B9X1zGtL.js";import"./RechartsWrapper-BpzLbtwc.js";import"./axisSelectors-DSxvh8IJ.js";import"./polarAxisSelectors-DlnF8AFa.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C6Aj8r2L.js";import"./index-B-kkbwvl.js";import"./index-CQjokYOg.js";import"./renderedTicksSlice-DCa6WqoI.js";import"./index-_bw4WA6x.js";import"./fillDefinitions-puythMDx.js";import"./CartesianChart-D0GXIpob.js";import"./ZIndexPortal-1jnT8grk.js";import"./CategoricalChart-EHcc8AGs.js";import"./CartesianAxis-BKOwU02Z.js";import"./Layer-dEC3lxZB.js";import"./Text-8qrIJHOF.js";import"./DOMUtils-DrYchlqm.js";import"./ZIndexLayer-CS37SN-4.js";import"./Label-DulCRYKX.js";import"./types-CB3DqoLS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-DJoHLEEy.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C3bNmSLU.js";import"./useAnimationId-DXZwJd8h.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DlizSa8y.js";import"./tooltipContext-C2Z-qwWl.js";import"./dataEntryStyles-0BlaoxRC.js";import"./ErrorBarContext-zCJLcJsR.js";import"./activeStyles-lY2Wk3Pa.js";import"./SetGraphicalItem-BBgSrgVm.js";import"./getZIndexFromUnknown-BQ02n8Sf.js";import"./useEffectiveDataKey-DYwpBPAM.js";import"./omit-BY7G6jYg.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,xt as __namedExportsOrder,ht as default};

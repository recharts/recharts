import{R as t}from"./iframe-h_l55m_t.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DtOJxrcv.js";import{B as p}from"./BarChart-NaMZhT73.js";import{X as l}from"./XAxis-CsptUwef.js";import{Y as h}from"./YAxis-Db6yYFWM.js";import{B as x}from"./Brush-DwnJfVUr.js";import{B as c}from"./Bar-DCo8gD3I.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-3kgM1Yrm.js";import"./index-BdQ12acY.js";import"./index-wHKnWgSU.js";import"./get-DBMd4dxk.js";import"./resolveDefaultProps-D8-0lbpZ.js";import"./isWellBehavedNumber-B1Li3gr_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-GmtYc35d.js";import"./index-CCMntdAh.js";import"./index-CY3OpiR2.js";import"./renderedTicksSlice-CmHU-lei.js";import"./axisSelectors-DWvAkDEO.js";import"./d3-scale-D1BOaHId.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BQCaFT7C.js";import"./chartDataContext-Bq9tVFqt.js";import"./CategoricalChart-sP3BCXGi.js";import"./CartesianAxis-CTJIWXoj.js";import"./Layer-rrxq_JkN.js";import"./Text-Cm107LG_.js";import"./DOMUtils-CG_MvRCE.js";import"./Label-Biqo5Eli.js";import"./ZIndexLayer-D7uTd8cS.js";import"./types-7ZgAaUHx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-DbtRsXiM.js";import"./AnimatedItems-BMyeCqfp.js";import"./useAnimationId-Dn6PcdJm.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DY_Adz4k.js";import"./ActiveShapeUtils-DIPFKhPu.js";import"./RegisterGraphicalItemId-MWElRUOD.js";import"./ErrorBarContext-BL5qoR-W.js";import"./GraphicalItemClipPath-BwjhPGOP.js";import"./SetGraphicalItem-tyshoNX9.js";import"./getZIndexFromUnknown-BMmURIsG.js";import"./graphicalItemSelectors-DqNX1XFY.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

import{R as t}from"./iframe-CeCOqiJm.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DdaMb5XG.js";import{B as p}from"./BarChart-BFOsKiOx.js";import{X as l}from"./XAxis-C64KB_q-.js";import{Y as h}from"./YAxis-A7bYD_ch.js";import{B as x}from"./Brush-D1ynqHIY.js";import{B as c}from"./Bar-BJZl1kgz.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bex5NkUv.js";import"./index-B9TMiPeS.js";import"./index-Dpi_zLnO.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CkuoYXav.js";import"./isWellBehavedNumber-B7aD_M3c.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DkI5rWg4.js";import"./axisSelectors-DY_V65z5.js";import"./d3-scale-Cd6mqy1G.js";import"./index-D0EsppEB.js";import"./index-DrQMD2ku.js";import"./renderedTicksSlice-Bncz9dIB.js";import"./index-DRO0vfdx.js";import"./CartesianChart-DsDUvZ6B.js";import"./chartDataContext-CJlR_4xR.js";import"./CategoricalChart-DiPqSwwe.js";import"./CartesianAxis-VCLAEQIg.js";import"./Layer-DpcMSheP.js";import"./Text-DDswsbtv.js";import"./DOMUtils-BCUi_GUC.js";import"./useId-Bah-b0hR.js";import"./useBackwardsCompatibleTheme-C_9NEiLi.js";import"./Label-Xd_rxrmK.js";import"./ZIndexLayer-BQtw6wpF.js";import"./types-m_9hz0N1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Di-68duO.js";import"./useAnimationId-CPtx5Z6n.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Td5JxEu-.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-FS6Mn2Zl.js";import"./tooltipContext-Cy5-H8MU.js";import"./RegisterGraphicalItemId-BNFTgn8t.js";import"./ErrorBarContext-C_Gf5gdw.js";import"./GraphicalItemClipPath-CNDfJ_fQ.js";import"./SetGraphicalItem-DcgFqiOy.js";import"./getZIndexFromUnknown-CLviD0v0.js";import"./useGraphicalItemIdentity-BZQpyUJc.js";import"./dataEntryStyles-C8u8nikw.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

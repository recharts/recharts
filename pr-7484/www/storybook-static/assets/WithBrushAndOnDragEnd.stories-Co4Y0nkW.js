import{R as t}from"./iframe-DX1vtGMO.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CBHqXPZu.js";import{B as p}from"./BarChart-Dek-KnDf.js";import{X as l}from"./XAxis-DLegRWnR.js";import{Y as h}from"./YAxis-oQ2494Ky.js";import{B as x}from"./Brush-BRtTyMPK.js";import{B as c}from"./Bar-o5JgSupJ.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CyjJLdoY.js";import"./index-CFOnPmwL.js";import"./index-BhJxPluG.js";import"./get-Cgjumwe9.js";import"./resolveDefaultProps-Evu9rMXK.js";import"./isWellBehavedNumber-BhjTCj8F.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BbcqKMmx.js";import"./index-CfVXt8f5.js";import"./index-CNqf-i4f.js";import"./renderedTicksSlice-DGFQGuI_.js";import"./axisSelectors-CD5YpxWK.js";import"./d3-scale-D456QfQQ.js";import"./CartesianChart-mvs2MZhK.js";import"./chartDataContext-DPGZ1R2s.js";import"./CategoricalChart-DtbdNaQa.js";import"./CartesianAxis-BmLV-dG0.js";import"./Layer-D3wyNfAg.js";import"./Text-DdDBf3IT.js";import"./DOMUtils-9dw7u23l.js";import"./Label-D5WIiRBw.js";import"./ZIndexLayer-DdHbybrS.js";import"./types-wjbQlydb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-CvjXurKP.js";import"./AnimatedItems-D5gtlj3g.js";import"./useAnimationId-3wGGsZoS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-m_tCbE2d.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C5uepk-V.js";import"./RegisterGraphicalItemId-BdvIWiM6.js";import"./ErrorBarContext-BR5rkK2A.js";import"./GraphicalItemClipPath-CtH8IX0c.js";import"./SetGraphicalItem-DJ3AMYhJ.js";import"./getZIndexFromUnknown-D4KP04dP.js";import"./graphicalItemSelectors-BqxEcvOJ.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

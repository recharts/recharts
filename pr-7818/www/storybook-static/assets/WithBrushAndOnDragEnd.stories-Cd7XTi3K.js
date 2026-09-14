import{R as t}from"./iframe-CazybM5Q.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-C8_Ry1FK.js";import{B as p}from"./BarChart-CnBTmV4L.js";import{X as l}from"./XAxis-DU0DQOG4.js";import{Y as h}from"./YAxis-BbPMcjUo.js";import{B as x}from"./Brush-DnZTj2ff.js";import{B as c}from"./Bar-dk6tjpkz.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-l1Kptz9a.js";import"./index-DnBm6OUb.js";import"./index-DOWHA8mY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CBYYqUCW.js";import"./isWellBehavedNumber-CpA3kMgp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CpPe0RTB.js";import"./axisSelectors-DZkp_M3U.js";import"./d3-scale-pDPjkkGb.js";import"./index-SN9fh9yC.js";import"./index-7BXYpUCT.js";import"./renderedTicksSlice-kdcY3T7P.js";import"./index-D_RyOPxQ.js";import"./CartesianChart-DVi_4rZ_.js";import"./chartDataContext-D7DiZH02.js";import"./CategoricalChart-CzkgI-hR.js";import"./CartesianAxis-CjSMZkKI.js";import"./Layer-fj-XlG60.js";import"./Text-x2aI-_E3.js";import"./DOMUtils-D953XyQL.js";import"./useId-C2k1DfII.js";import"./useBackwardsCompatibleTheme-Busncj89.js";import"./Label-jvSJhliV.js";import"./ZIndexLayer-ytwD_49s.js";import"./types-BzWyleSx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DoL70GVg.js";import"./useAnimationId-Bh-TCZxX.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bh1teys1.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D_rLTXV3.js";import"./tooltipContext-CxQ9eYjZ.js";import"./RegisterGraphicalItemId-DaFrO76U.js";import"./ErrorBarContext-BX_x-hk-.js";import"./GraphicalItemClipPath-Gh_0CyLf.js";import"./SetGraphicalItem-CGh1GzJA.js";import"./getZIndexFromUnknown-DOb2IOUv.js";import"./useGraphicalItemIdentity-C973phhc.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};

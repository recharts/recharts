import{R as t}from"./iframe-BjoWmD_2.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-QxL2_XNr.js";import{B as p}from"./BarChart-DMm3TkjH.js";import{X as l}from"./XAxis-D-7vKTCU.js";import{Y as h}from"./YAxis-DcA2RCuj.js";import{B as x}from"./Brush-BW2hGhR5.js";import{B as c}from"./Bar-Ctulz8Zr.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-h3rYfSBM.js";import"./index-BRU_7ROE.js";import"./index-rOX-JMdH.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CRUAWeqy.js";import"./isWellBehavedNumber-BxmTrUsM.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B-Xj9Vy5.js";import"./axisSelectors-CTjcoI_o.js";import"./d3-scale-kKJuS5hm.js";import"./index-Ctb1uOPb.js";import"./index-Cd4gA8VB.js";import"./renderedTicksSlice-9uvUqonz.js";import"./index-BiJeeMkw.js";import"./CartesianChart-ALqDRU4y.js";import"./chartDataContext-D2tEsWQI.js";import"./CategoricalChart-CU8xgSqQ.js";import"./CartesianAxis-CuhpEa5Q.js";import"./Layer-BETohxRY.js";import"./Text-DoJy0Hms.js";import"./pageBackground-B2WnjK3P.js";import"./useId-CxEr69Iu.js";import"./useBackwardsCompatibleTheme-lRDO5kA2.js";import"./Label-Cqr17CGT.js";import"./ZIndexLayer-DQXgAxZP.js";import"./types-CwctOhA4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-pw12H8S5.js";import"./useAnimationId-CvgGu5_L.js";import"./dataEntryStyles-M6AZ3Vkx.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-uRJgPy0Q.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ba7sfaWC.js";import"./tooltipContext-C1vSZW3p.js";import"./ErrorBarContext-hA9ACwOL.js";import"./GraphicalItemClipPath-CJpx4uWZ.js";import"./SetGraphicalItem-BNR-CUWR.js";import"./getZIndexFromUnknown-C-fRQ95f.js";import"./useGraphicalItemIdentity-D7aL1WKh.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

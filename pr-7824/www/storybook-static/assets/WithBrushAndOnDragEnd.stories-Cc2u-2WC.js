import{R as t}from"./iframe-BlpdekQf.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Bd-549Vw.js";import{B as p}from"./BarChart-bwyGz6uQ.js";import{X as l}from"./XAxis-DCEI79gV.js";import{Y as h}from"./YAxis-DGARPD6V.js";import{B as x}from"./Brush-BTJRoCpX.js";import{B as c}from"./Bar-C6KH_Y-Z.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-8wef2bFQ.js";import"./index-Dg90symq.js";import"./index-Dn5eONY4.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BWwU0p8m.js";import"./isWellBehavedNumber-DfaAxwlE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BZ46sqe8.js";import"./axisSelectors-DwVSh5EL.js";import"./d3-scale-ffqjL1dY.js";import"./index-BcFSE7Eo.js";import"./index-Co2WS3GV.js";import"./renderedTicksSlice-rM-Or7ex.js";import"./index-BjAwxFOu.js";import"./CartesianChart-Dncy8Mq7.js";import"./chartDataContext-CXgp5rOX.js";import"./CategoricalChart-CJrl3V7y.js";import"./CartesianAxis-CTJL8AJc.js";import"./Layer-Cz4a7tst.js";import"./Text-CRM9x0B4.js";import"./DOMUtils-C_8Iq0XJ.js";import"./useId-DvrsL6or.js";import"./useBackwardsCompatibleTheme-C9u8MjhE.js";import"./Label-CrfPybH1.js";import"./ZIndexLayer-C5ftRxf2.js";import"./types-DYnYQX3g.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BKOKH3Gm.js";import"./useAnimationId-SlAZ3zMA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bg9Sr7-8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BEiBGwD8.js";import"./tooltipContext-DP7cVDvd.js";import"./RegisterGraphicalItemId-D9zcRMey.js";import"./ErrorBarContext-DkC-IUMU.js";import"./GraphicalItemClipPath-Vs1wvJPe.js";import"./SetGraphicalItem-BG-oAwbp.js";import"./getZIndexFromUnknown-DeXLXtsN.js";import"./useGraphicalItemIdentity-BE0cCNWI.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

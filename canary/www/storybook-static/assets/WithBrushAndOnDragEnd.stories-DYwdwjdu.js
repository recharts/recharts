import{R as t}from"./iframe-DzO9JHZD.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-wXMOrHSA.js";import{B as p}from"./BarChart-DmNecS4c.js";import{X as l}from"./XAxis-s5CUDx62.js";import{Y as h}from"./YAxis-DLr6Fu7l.js";import{B as x}from"./Brush-ZB3Or2lD.js";import{B as c}from"./Bar-gfqukp2W.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-_6vD_mzO.js";import"./index-D6SCMRFc.js";import"./index-DBwiuZT2.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B5PLlTs_.js";import"./isWellBehavedNumber-F-o7IHqi.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DFXgxjJb.js";import"./axisSelectors-Bktw6xhv.js";import"./d3-scale-BhZPhAmj.js";import"./index-HY8blrlW.js";import"./index-vlcan66w.js";import"./renderedTicksSlice-B6tapBnR.js";import"./index-DN5zS5di.js";import"./CartesianChart-aILzJ3W8.js";import"./chartDataContext-CW-xn50P.js";import"./CategoricalChart-BMeJEgn8.js";import"./CartesianAxis-ITKfZFUK.js";import"./Layer-CnogDsGN.js";import"./Text-CkTBNTFx.js";import"./DOMUtils-CiXbDn_A.js";import"./useId-BB5zPEe_.js";import"./useBackwardsCompatibleTheme-DXGk--5K.js";import"./Label-CKmL6Jnj.js";import"./ZIndexLayer-CYttbcyg.js";import"./types-Br-ctfN4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-najEeKMC.js";import"./useAnimationId-CV7fiXfg.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BYTciqJx.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CDs2CvAD.js";import"./tooltipContext-C5VMrJL3.js";import"./RegisterGraphicalItemId-DbTCddMf.js";import"./ErrorBarContext-DhSDR9CQ.js";import"./GraphicalItemClipPath-DycxALBl.js";import"./SetGraphicalItem-CLQaaH2S.js";import"./getZIndexFromUnknown-ByEwt6b8.js";import"./useGraphicalItemIdentity-CpX4qTkI.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

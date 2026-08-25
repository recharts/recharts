import{R as t}from"./iframe-C8vQGZXk.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-ByprO6Sm.js";import{B as p}from"./BarChart-DsT2gnHQ.js";import{X as l}from"./XAxis-CeEiPhih.js";import{Y as h}from"./YAxis-B6tlBAdH.js";import{B as x}from"./Brush-DpnYpsoG.js";import{B as c}from"./Bar-BYRNeN-L.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-h__ZU4m4.js";import"./index-CPGq0YmD.js";import"./index-DcRT1P9Q.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-V67edAdk.js";import"./isWellBehavedNumber-C0Xo9Op-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-8pTUTugH.js";import"./index-DGglMQ8l.js";import"./index-C62uqfyt.js";import"./axisSelectors-QRAfsrXG.js";import"./d3-scale-CtBXoG-U.js";import"./renderedTicksSlice-DsrGsPip.js";import"./CartesianChart-Tp1RpXRt.js";import"./chartDataContext-DHzBZ8lS.js";import"./CategoricalChart-3d5zHnsL.js";import"./CartesianAxis-C_7-gYtt.js";import"./Layer-sgegzG2x.js";import"./Text-4tQX4Uia.js";import"./DOMUtils-CYXp4dKG.js";import"./useId-BhWWyhoE.js";import"./useBackwardsCompatibleTheme-WNjwGM1x.js";import"./Label-CYWEtH1_.js";import"./ZIndexLayer-DTaI93aT.js";import"./types-Cx0FcaGa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-v0KEsWrQ.js";import"./useAnimationId-CCh5p5CL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-De7ejmNi.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B1Mwe2wI.js";import"./tooltipContext-9X0XSZOh.js";import"./RegisterGraphicalItemId-Cui1oLRd.js";import"./ErrorBarContext-BpNPFGVG.js";import"./GraphicalItemClipPath-BrujiRiU.js";import"./SetGraphicalItem-CLgoHfzk.js";import"./getZIndexFromUnknown-3C3-Yx_o.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BIKowErt.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const ht=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};

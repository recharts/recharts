import{R as t}from"./iframe-C0xznG0O.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DJPgYMzR.js";import{B as p}from"./BarChart-R2g2JJTb.js";import{X as l}from"./XAxis-3Gc-ze43.js";import{Y as h}from"./YAxis-B6DY9sl9.js";import{B as x}from"./Brush-C58bXXLp.js";import{B as c}from"./Bar-CjOMNEca.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-ca9JXI34.js";import"./index-3uxIGkdF.js";import"./index-D3C5hy7v.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BUVviTw0.js";import"./isWellBehavedNumber-LB6DsCms.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CVCjkFWi.js";import"./axisSelectors-KY5G3glE.js";import"./d3-scale-D_nuk9af.js";import"./index-_lyS6R2I.js";import"./index-DGO5Pcl1.js";import"./renderedTicksSlice-Bn386d_U.js";import"./index-BsyGVjbB.js";import"./CartesianChart-BilL1rox.js";import"./chartDataContext-r0-EMCxL.js";import"./CategoricalChart-AELfSP8z.js";import"./CartesianAxis-CXWr6EGM.js";import"./Layer-DEw218Et.js";import"./Text-DqaiwO2M.js";import"./DOMUtils-CfITjNXH.js";import"./useId-CG9ImVhA.js";import"./useBackwardsCompatibleTheme-Dw2k0O31.js";import"./Label-CdEwuWhi.js";import"./ZIndexLayer-Dqy54YGG.js";import"./types-CAt-4Uam.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-ykdNzwWW.js";import"./useAnimationId-DxkHkn8_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BUlwcvxX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-s_Kx4tDI.js";import"./tooltipContext-BDMF1Ufc.js";import"./RegisterGraphicalItemId-CHswFd-U.js";import"./ErrorBarContext-BMmbs1Vg.js";import"./GraphicalItemClipPath-BwjkPZ9S.js";import"./SetGraphicalItem-BcdUc_t-.js";import"./getZIndexFromUnknown-DmpJeP7G.js";import"./useGraphicalItemIdentity-BPVVk20a.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

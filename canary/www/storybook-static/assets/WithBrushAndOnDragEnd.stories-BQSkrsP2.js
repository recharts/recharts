import{R as t}from"./iframe-AEyLiqgG.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-D63QIr0o.js";import{B as p}from"./BarChart-BaamwWo1.js";import{X as l}from"./XAxis-DSCoP0BT.js";import{Y as h}from"./YAxis-C0feA8qB.js";import{B as x}from"./Brush-CgyKylJd.js";import{B as c}from"./Bar-DEcf2_pb.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bat5tgt5.js";import"./index-C1HLBiKP.js";import"./index-DRegLE30.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DP3BTRCk.js";import"./isWellBehavedNumber-CgqhIRbA.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-r-JuCoEl.js";import"./axisSelectors-Drhca-__.js";import"./d3-scale-BLrrudvV.js";import"./index-qjC2aIyR.js";import"./index-BZWHGH__.js";import"./renderedTicksSlice-CAIsZf4o.js";import"./index-DlIzpnmQ.js";import"./CartesianChart-DnWnPxAf.js";import"./chartDataContext-D_5ADK7F.js";import"./CategoricalChart-h7ez30w9.js";import"./CartesianAxis-NrPVgzth.js";import"./Layer-vEMMDrrH.js";import"./Text-CjbzIRNa.js";import"./DOMUtils-D23knL3w.js";import"./useId-CE7L0gFR.js";import"./useBackwardsCompatibleTheme-BeLYcOfU.js";import"./Label-dgv50JbQ.js";import"./ZIndexLayer-CKKDdXeu.js";import"./types-C4U-Yuut.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Du4BhFIJ.js";import"./useAnimationId-DhGl4rOB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-4fa9PUqa.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cns3WvQL.js";import"./tooltipContext-D88H2knB.js";import"./RegisterGraphicalItemId-CBHkDVSs.js";import"./ErrorBarContext-BCLiwnce.js";import"./GraphicalItemClipPath-TjZaHmNz.js";import"./SetGraphicalItem-D3eOc8Q8.js";import"./getZIndexFromUnknown-BAi2cYYG.js";import"./useGraphicalItemIdentity-Cs1UF85t.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

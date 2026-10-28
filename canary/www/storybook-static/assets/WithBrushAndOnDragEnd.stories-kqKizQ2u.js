import{R as t}from"./iframe-BmTk4yvk.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Yn5j7TCZ.js";import{B as p}from"./BarChart-DAq5ecEK.js";import{X as l}from"./XAxis-p_vhpROA.js";import{Y as h}from"./YAxis-BmZ1tujZ.js";import{B as x}from"./Brush-BRxVAORq.js";import{B as c}from"./Bar-DUH-v_z7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Cn0PCCle.js";import"./throttle-C169ds0A.js";import"./index-iOVTbJVR.js";import"./index-DmmaZxkJ.js";import"./RechartsWrapper-C4oIzQNw.js";import"./axisSelectors-jta8-9EA.js";import"./polarAxisSelectors-DyW5Xsuk.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B_DRoaP4.js";import"./index-D6yCXLHc.js";import"./index-D-9h2rsp.js";import"./renderedTicksSlice-Dl_orwkE.js";import"./index-DOadfo9X.js";import"./CartesianChart-Fep-b6_D.js";import"./ZIndexPortal-CWm5UVGf.js";import"./CategoricalChart-D92RpbLO.js";import"./CartesianAxis-DCukA67Z.js";import"./Layer-DW7OR7eh.js";import"./Text-U4GGp_wV.js";import"./pageBackground-QX1GlboQ.js";import"./ZIndexLayer-DvmFXfZN.js";import"./Label-CYaQfkAd.js";import"./types-BwQb0UT4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-DAIqpE2b.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BQWOwYE7.js";import"./useAnimationId-Crx209Lx.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DOogD9OD.js";import"./tooltipContext-DyPZF-9p.js";import"./dataEntryStyles-D6I3YMTN.js";import"./ErrorBarContext-BA2m5B_Z.js";import"./activeStyles-PiE_qWsW.js";import"./SetGraphicalItem-DFIrza8W.js";import"./getZIndexFromUnknown-BqKh9M0Y.js";import"./useEffectiveDataKey-B__g_9Jm.js";import"./omit-KtLDLyCm.js";import"./isArguments-yB-y1yaH.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

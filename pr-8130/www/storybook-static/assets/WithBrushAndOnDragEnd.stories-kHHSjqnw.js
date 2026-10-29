import{R as t}from"./iframe-C0OVyiWZ.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-8GqqcFEr.js";import{B as p}from"./BarChart-Dxz_T9af.js";import{X as l}from"./XAxis-CTdfh09z.js";import{Y as h}from"./YAxis-BzGOPf-n.js";import{B as x}from"./Brush-CXtiCMEc.js";import{B as c}from"./Bar-CBHHOqe1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CzOTGDv8.js";import"./throttle-D68qy_th.js";import"./index-Docwyysm.js";import"./index-ZerhtVY0.js";import"./RechartsWrapper-CTQttuVZ.js";import"./axisSelectors-D80ZAqVH.js";import"./polarAxisSelectors-DTm6eoEL.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-P-FUFzKf.js";import"./index-B1LAm-dY.js";import"./index-BpCkqUEo.js";import"./renderedTicksSlice-CUInauOX.js";import"./index-C5porGIG.js";import"./fillDefinitions-Bbw8sRrt.js";import"./CartesianChart-DeRNlyJ8.js";import"./ZIndexPortal-wZgZSnoL.js";import"./CategoricalChart-BEVcLfMu.js";import"./CartesianAxis-B5NtJHos.js";import"./Layer-OalOUm3Y.js";import"./Text-CW0hOv-I.js";import"./DOMUtils-C9FX__jF.js";import"./ZIndexLayer-lUVq37sV.js";import"./Label-YEc5vJ1L.js";import"./types-C-qeruIO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-D0ai-hpm.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bj8y9oTS.js";import"./useAnimationId-CezZ2glr.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DL-meZDZ.js";import"./tooltipContext-21ewW2ab.js";import"./dataEntryStyles-Cd6CZepp.js";import"./ErrorBarContext-Crxfy6Lq.js";import"./activeStyles-D_QsSvZV.js";import"./SetGraphicalItem-CFBhhEbP.js";import"./getZIndexFromUnknown-Bh8-1w9i.js";import"./useEffectiveDataKey-AC38WMBQ.js";import"./omit-DWjYnwJ8.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

import{R as t}from"./iframe-D34TH6kS.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DaIxnBgS.js";import{B as p}from"./BarChart-hTXf0Hv3.js";import{X as l}from"./XAxis-eUT57Vta.js";import{Y as h}from"./YAxis-BB2iGVHg.js";import{B as x}from"./Brush-Cgu9zqWr.js";import{B as c}from"./Bar-tSvlBU_S.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C_e5Jx4S.js";import"./throttle-BpT9ifnU.js";import"./index-CbUl4qJT.js";import"./index-BdPMZI3x.js";import"./RechartsWrapper-Dd_PV6Ah.js";import"./axisSelectors-Dy4Zn44Z.js";import"./polarAxisSelectors-CB23D7zz.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DZnn2eaB.js";import"./index-DmQdJSj7.js";import"./index-x328HEKx.js";import"./renderedTicksSlice-BJ7Rgktl.js";import"./index-B0gBzv4y.js";import"./fillDefinitions-C7IVG_LK.js";import"./CartesianChart-DTsOd4db.js";import"./ZIndexPortal-DFRqCkn0.js";import"./CategoricalChart-DeDW5Ok8.js";import"./CartesianAxis-BM-PI8Qd.js";import"./Layer-Dwmoii2m.js";import"./Text-DnFfEMnn.js";import"./DOMUtils-CL7ddNNK.js";import"./ZIndexLayer-CjBSjq3C.js";import"./Label-Bmp2qp_V.js";import"./types-sVdhE-m7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-1IdMTUqF.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CkQXoZfZ.js";import"./useAnimationId-B9qHmTzi.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils--tE3PBa7.js";import"./tooltipContext-DqSmtwC6.js";import"./dataEntryStyles-vZIv75R2.js";import"./ErrorBarContext-BpXycT31.js";import"./activeStyles-BhcCN1d0.js";import"./SetGraphicalItem-BAvkQ0nW.js";import"./getZIndexFromUnknown-PCAkaOYb.js";import"./useEffectiveDataKey-rXS-umfC.js";import"./omit-CYTpcbgM.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

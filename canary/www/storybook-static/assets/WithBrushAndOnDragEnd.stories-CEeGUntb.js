import{R as t}from"./iframe-DWz-Q7D1.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-D4KjIdsO.js";import{B as p}from"./BarChart-CzKifJ5F.js";import{X as l}from"./XAxis-BZUBECrT.js";import{Y as h}from"./YAxis--VjP9Ce5.js";import{B as x}from"./Brush-BLiL2V6u.js";import{B as c}from"./Bar-fHz40j2p.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CiqOC1ip.js";import"./index-C1X2mD6F.js";import"./index-CkxejNVz.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CzYzgORH.js";import"./isWellBehavedNumber-DQa0E9-N.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DTtBamZ0.js";import"./axisSelectors-Ce2rWziX.js";import"./d3-scale-B1h-c6nn.js";import"./index-Dr0ysyHn.js";import"./index-DIeZp5vP.js";import"./renderedTicksSlice-D1gMAPFE.js";import"./index-DXyt1obU.js";import"./CartesianChart-cCLETRDS.js";import"./chartDataContext-BJRXZyCP.js";import"./CategoricalChart-C1Rl-Y0X.js";import"./CartesianAxis-k4k8wY80.js";import"./Layer-0LCA68q2.js";import"./Text-Rsbaz2Nf.js";import"./pageBackground-Bn_EUSju.js";import"./useId-CKTYSt7x.js";import"./useBackwardsCompatibleTheme-40wyYpH8.js";import"./Label-DNBocu_e.js";import"./ZIndexLayer-Bg2Gmo9Q.js";import"./types-d8BMRC9H.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-cBdGFM1d.js";import"./useAnimationId-wagxbO9A.js";import"./dataEntryStyles-B5o6jV-U.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-04QXIjXf.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C6nNN6Qs.js";import"./tooltipContext-QlfnW-MK.js";import"./ErrorBarContext-C2fYo0Zq.js";import"./GraphicalItemClipPath-CSYE-jHD.js";import"./SetGraphicalItem-D_zovdlO.js";import"./getZIndexFromUnknown-cXPSnZy0.js";import"./useEffectiveDataKey-kfwO5Jnl.js";import"./omit-sactXHxf.js";import"./isArguments-yB-y1yaH.js";const xt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},ct=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ct as __namedExportsOrder,xt as default};

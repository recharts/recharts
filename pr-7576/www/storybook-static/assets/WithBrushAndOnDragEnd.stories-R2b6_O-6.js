import{R as t}from"./iframe-Cy6UHwH8.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Dv2HqMCj.js";import{B as p}from"./BarChart-CGuRo25p.js";import{X as l}from"./XAxis-BEHj4vqI.js";import{Y as h}from"./YAxis-Czbc2cL9.js";import{B as x}from"./Brush-MjdJZ6d9.js";import{B as c}from"./Bar-B-_IkChf.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CrXcydw9.js";import"./index-h8aQZ4h5.js";import"./index-CWnN2QDM.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BMx9w-RH.js";import"./isWellBehavedNumber-CZJUfVeG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ms45-clr.js";import"./index-2yzrZcxU.js";import"./index-CqwtYJ2E.js";import"./renderedTicksSlice-BtW-OIzZ.js";import"./axisSelectors-DXOe3ZcM.js";import"./d3-scale-Bvw0bMMA.js";import"./CartesianChart-C_8s1Ao-.js";import"./chartDataContext-BQ-bLF-q.js";import"./CategoricalChart-Bl-8OvLS.js";import"./CartesianAxis-D4Lg0Pka.js";import"./Layer-Ju7yA9Ak.js";import"./Text-DY_HLC6P.js";import"./DOMUtils-CnEhoUR_.js";import"./Label-D4x62xM0.js";import"./ZIndexLayer-BhFWLYxf.js";import"./types-Wlq7LyUb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./tooltipContext-CzT9W937.js";import"./AnimatedItems-P3TyXGJ4.js";import"./useAnimationId-q_i8pRM6.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-NwWJwHZO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BsBe7D_I.js";import"./RegisterGraphicalItemId-Du3LTwfY.js";import"./ErrorBarContext-DbNi8xqP.js";import"./GraphicalItemClipPath-CqSFRIsZ.js";import"./SetGraphicalItem-Dh-ykNbg.js";import"./getZIndexFromUnknown-Bxnmr_BJ.js";import"./graphicalItemSelectors-CUpJgTvK.js";const mt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const st=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,st as __namedExportsOrder,mt as default};

import{R as t}from"./iframe-dVDPDAoI.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Bsc_tgY7.js";import{B as p}from"./BarChart-DIR4KJOP.js";import{X as l}from"./XAxis-Ra2gX97C.js";import{Y as h}from"./YAxis-BD3X1oHR.js";import{B as x}from"./Brush-DPZHGU3k.js";import{B as c}from"./Bar-P6ce0Ml4.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BdmkJOJr.js";import"./index-DKbSAh9L.js";import"./index-Dx5dPQRG.js";import"./get-VpXFggwN.js";import"./resolveDefaultProps-B9xmOxzf.js";import"./isWellBehavedNumber-CPNu7XeA.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BD3vbn3c.js";import"./index-C_VdjUmv.js";import"./index-CnhhL7Zb.js";import"./renderedTicksSlice-DnkJLQvR.js";import"./axisSelectors-BILy-Fum.js";import"./d3-scale-Dow8MXGl.js";import"./string-B6fdYHAA.js";import"./CartesianChart-rEvqbiLD.js";import"./chartDataContext-CZJe0GvZ.js";import"./CategoricalChart-CZjUsR6e.js";import"./CartesianAxis-BOKYqx2U.js";import"./Layer-M7jAw79j.js";import"./Text-Bi26GJyN.js";import"./DOMUtils-lc6v0qq-.js";import"./Label-BEOAhV_I.js";import"./ZIndexLayer-D86eoQTZ.js";import"./types-jcNKZDcp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-CiAj9sGp.js";import"./AnimatedItems-BynH3EWp.js";import"./useAnimationId-DHcuBUhz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cm-MJcqD.js";import"./ActiveShapeUtils-G5tYFgXR.js";import"./RegisterGraphicalItemId-BTF8QJ8M.js";import"./ErrorBarContext-DM0DtMrb.js";import"./GraphicalItemClipPath-DL50SU1R.js";import"./SetGraphicalItem-BvRajfM7.js";import"./getZIndexFromUnknown-CrBxs90n.js";import"./graphicalItemSelectors-cLW-ET4H.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const mt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,mt as __namedExportsOrder,dt as default};

import{R as t}from"./iframe-DRSW8ue2.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Bu-rrRtT.js";import{B as p}from"./BarChart-DLHYfykL.js";import{X as l}from"./XAxis-CC1uze90.js";import{Y as h}from"./YAxis-B6_VA_0t.js";import{B as x}from"./Brush-B0xeAvxV.js";import{B as c}from"./Bar-CpDwOsz5.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CUiRuHKg.js";import"./index-90eqwCh0.js";import"./index-p0Ur2FF4.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-raTiTqbb.js";import"./isWellBehavedNumber-DAnude9s.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DT9xTVvF.js";import"./index-CyOXcHUd.js";import"./index-iUHBfWdS.js";import"./renderedTicksSlice-Dq99djjA.js";import"./axisSelectors-D9B32UgG.js";import"./d3-scale-C6_vDDuq.js";import"./CartesianChart-CHa2q2rq.js";import"./chartDataContext-BFVcvsqe.js";import"./CategoricalChart-CyaAwA7K.js";import"./CartesianAxis-CAXmUWDV.js";import"./Layer-BXqs-IsN.js";import"./Text-DjqRVUg-.js";import"./DOMUtils-CyGXHzmH.js";import"./Label-DWIM-PiW.js";import"./ZIndexLayer-CrpBbv8w.js";import"./types-CaXHGphp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./tooltipContext-BiBOO61Q.js";import"./AnimatedItems-Dm8lwSRg.js";import"./useAnimationId-Dnplssp6.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-EoVmD57K.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CyqwB66-.js";import"./RegisterGraphicalItemId-D6Xem68n.js";import"./ErrorBarContext-CZiW4Ksz.js";import"./GraphicalItemClipPath-D8tm2vL2.js";import"./SetGraphicalItem-CM2WyRpW.js";import"./getZIndexFromUnknown-Dhi9L3dq.js";import"./graphicalItemSelectors-63b_Enxj.js";const mt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

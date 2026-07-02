import{R as t}from"./iframe-GELhAUTo.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-ClN2s-1U.js";import{B as p}from"./BarChart-B_UxbdHZ.js";import{X as l}from"./XAxis-Y85LtPOX.js";import{Y as h}from"./YAxis-CwCyZywx.js";import{B as x}from"./Brush-B6on7hZo.js";import{B as c}from"./Bar-KUjk1Seu.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DU3kigO2.js";import"./index-DTm2_Ebd.js";import"./index-Ch3aQyu8.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-i6Bf8Qe5.js";import"./isWellBehavedNumber-qNvGNJqB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CSC6kLWa.js";import"./index-fkyqtveo.js";import"./index-De1BUZgG.js";import"./renderedTicksSlice-DtvoFkYT.js";import"./axisSelectors-DqMTsyvT.js";import"./d3-scale-BXdsYgex.js";import"./CartesianChart-CnHKmmwZ.js";import"./chartDataContext-C1NesgAa.js";import"./CategoricalChart-DWJWD5d1.js";import"./CartesianAxis-C2iZYvRC.js";import"./Layer-1dFGvAkG.js";import"./Text-COlbwtoq.js";import"./DOMUtils-vC9OxNpg.js";import"./Label-D2gt0uaB.js";import"./ZIndexLayer-BJaQcl6Z.js";import"./types-CDH6nNS8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-Cansh_dN.js";import"./AnimatedItems-D0mvcaGm.js";import"./useAnimationId-Cjs3Y5s0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D1qGnE1A.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-GEyAcK7d.js";import"./RegisterGraphicalItemId-CBE0jEK0.js";import"./ErrorBarContext-Cc-Db4VE.js";import"./GraphicalItemClipPath-BR4J-JYN.js";import"./SetGraphicalItem-CbnVMng4.js";import"./getZIndexFromUnknown-BtPaCaU9.js";import"./graphicalItemSelectors-Djhj5DPh.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

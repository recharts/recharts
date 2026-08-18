import{R as t}from"./iframe-CLMMwevR.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-C07rknep.js";import{B as p}from"./BarChart-Dhzw4LB_.js";import{X as l}from"./XAxis-DkO77iT7.js";import{Y as h}from"./YAxis-Cs8CAcTx.js";import{B as x}from"./Brush-D7L5YbNX.js";import{B as c}from"./Bar-CJq8q7dS.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle--WJjmRve.js";import"./index-iZ7_9Rw4.js";import"./index-DTmItnBv.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C-YHYhRk.js";import"./isWellBehavedNumber-DSl6gFKS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BZjp8UCv.js";import"./index-DXBvk1ZI.js";import"./index-fePXAV8a.js";import"./axisSelectors-Bue48vwC.js";import"./d3-scale-DOlcECPa.js";import"./renderedTicksSlice-wRkzPU5z.js";import"./CartesianChart-Q0nxu5Mh.js";import"./chartDataContext-CTT-NX_B.js";import"./CategoricalChart-C94CRL_w.js";import"./CartesianAxis-DUmQAHmM.js";import"./Layer-Cu_Jods-.js";import"./Text-CiZ_8rvc.js";import"./DOMUtils-Cj7lsnlo.js";import"./useBackwardsCompatibleTheme-DuadFd-n.js";import"./Label-BtFWigtA.js";import"./ZIndexLayer-DMkUVhQg.js";import"./types-BzNgNoqU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BI16k_x1.js";import"./useAnimationId-B3zwLWVY.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B1yBKol3.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CIArBYiS.js";import"./tooltipContext-Dz25T291.js";import"./RegisterGraphicalItemId-DbsNOx6w.js";import"./ErrorBarContext-Bh7QEhRH.js";import"./GraphicalItemClipPath-Cx1IovYW.js";import"./SetGraphicalItem-CkM_d3EZ.js";import"./getZIndexFromUnknown-Gh_fwngg.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-sfhs_UqO.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const lt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};

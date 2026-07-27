import{R as t}from"./iframe-AVXfkv0w.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Cpy73fEL.js";import{B as p}from"./BarChart-seJOyTTy.js";import{X as l}from"./XAxis-Ccg3sENg.js";import{Y as h}from"./YAxis-IC2DAOXe.js";import{B as x}from"./Brush-BmptPW8a.js";import{B as c}from"./Bar-D_JobrpT.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CElZ_OGC.js";import"./index-DVRYbkUW.js";import"./index-CAfC1Ith.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Dkqh2Ws0.js";import"./isWellBehavedNumber-C_0WrTwr.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bri81Hil.js";import"./index-CFZrGIxH.js";import"./index-Dd93-if2.js";import"./renderedTicksSlice-BWAQroks.js";import"./axisSelectors-D5sH7YSt.js";import"./d3-scale-BOPObWse.js";import"./CartesianChart-DosAg0hI.js";import"./chartDataContext-bVF6MeRR.js";import"./CategoricalChart-B23xHRz2.js";import"./CartesianAxis-CUHI9zvN.js";import"./Layer-ht4prXr-.js";import"./Text-Cc6gSuDY.js";import"./DOMUtils-BVwM3Jdl.js";import"./Label-Bn0N3T-p.js";import"./ZIndexLayer-B0wR3MRM.js";import"./types-3aWcalA-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./tooltipContext-Bt0KiDnZ.js";import"./AnimatedItems-XdBOicHp.js";import"./useAnimationId-DI1PqqVk.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C0v_P9FW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CFy0QQ1U.js";import"./RegisterGraphicalItemId-Ba7mqd93.js";import"./ErrorBarContext-DhRbE3HA.js";import"./GraphicalItemClipPath-CZYMuLkO.js";import"./SetGraphicalItem-BnjtQKWx.js";import"./getZIndexFromUnknown-YPczkL-n.js";import"./graphicalItemSelectors-CHpgIakV.js";const mt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

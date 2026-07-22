import{R as t}from"./iframe-CSEjTzPi.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-D_RH8zNR.js";import{B as p}from"./BarChart-DXrsMaAE.js";import{X as l}from"./XAxis-ClW-CKIG.js";import{Y as h}from"./YAxis-CLbub78N.js";import{B as x}from"./Brush-oWEiEdaS.js";import{B as c}from"./Bar-Do4uXh1f.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DaFWWJDR.js";import"./index-CUrD2lSO.js";import"./index-CnUd66Ue.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BozJKtND.js";import"./isWellBehavedNumber-CzqG-O5b.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-AtEN8KAH.js";import"./index-Ba7n3l96.js";import"./index-CBv6hKJf.js";import"./renderedTicksSlice-E8p_yuf8.js";import"./axisSelectors-D_moIkNX.js";import"./d3-scale-CTeKr7fc.js";import"./CartesianChart-Dl0PI1ZO.js";import"./chartDataContext-D54q9WWr.js";import"./CategoricalChart-DzTcvl21.js";import"./CartesianAxis-Mej6s-Ju.js";import"./Layer-CcgNOeDR.js";import"./Text-Pr_fu-xU.js";import"./DOMUtils-Dvp2PgSJ.js";import"./Label-COqEjZup.js";import"./ZIndexLayer-CCVrkImG.js";import"./types-CLne6YGI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./tooltipContext-DI2uHbji.js";import"./AnimatedItems-qJPCEdb3.js";import"./useAnimationId-De2Quo8T.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CxDLp35k.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DL3c-sPD.js";import"./RegisterGraphicalItemId-CXTNpeBs.js";import"./ErrorBarContext-CaaFvPMI.js";import"./GraphicalItemClipPath-B0i2JGnn.js";import"./SetGraphicalItem-e3HjqTgi.js";import"./getZIndexFromUnknown-D5xYN7OS.js";import"./graphicalItemSelectors-ClvgOOLR.js";const mt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

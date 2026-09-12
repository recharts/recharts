import{R as t}from"./iframe-D1t-DMDX.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-D3y7WbGu.js";import{B as p}from"./BarChart-DDQK7_ZM.js";import{X as l}from"./XAxis-D2W5e4ho.js";import{Y as h}from"./YAxis-DA6hAinn.js";import{B as x}from"./Brush-B-ya_250.js";import{B as c}from"./Bar-wTsRfFHS.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-6Gvu17mH.js";import"./index-DN4Hf2vp.js";import"./index-DXAWsi2y.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CslUsmpl.js";import"./isWellBehavedNumber-CUXK_wKy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BZjYCuuq.js";import"./axisSelectors-j0uMY4D2.js";import"./d3-scale-BUFFZJWe.js";import"./index-BVgOAcLw.js";import"./index-DBKl6Uwy.js";import"./renderedTicksSlice-BDhtYcVT.js";import"./index-DVZyTUvl.js";import"./CartesianChart-CkbIBTi3.js";import"./chartDataContext-Cv-ECou4.js";import"./CategoricalChart-CSw7HOxG.js";import"./CartesianAxis-zM23PuK9.js";import"./Layer-C3v8UF0F.js";import"./Text-DAi50bHG.js";import"./DOMUtils-B6_ZXa7e.js";import"./useId-DDzIZyqo.js";import"./useBackwardsCompatibleTheme-BSefrMjh.js";import"./Label-l8kFpP-D.js";import"./ZIndexLayer-DAI4vBfR.js";import"./types-CakNgFJg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-C6KHS5pS.js";import"./useAnimationId-CHualwmZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CTv3GIXO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DPvI5kC4.js";import"./tooltipContext-DgDH-WhQ.js";import"./RegisterGraphicalItemId-6E8BE8Ka.js";import"./ErrorBarContext-aZAJKe3w.js";import"./GraphicalItemClipPath-CTjco7rb.js";import"./SetGraphicalItem-B3rvHIl-.js";import"./getZIndexFromUnknown-CYnH7mhR.js";import"./useGraphicalItemIdentity-Y17Z1Bub.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};

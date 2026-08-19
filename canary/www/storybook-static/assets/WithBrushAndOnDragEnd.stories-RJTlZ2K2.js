import{R as t}from"./iframe-TE0a3h8U.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CuzvPj3e.js";import{B as p}from"./BarChart-CCepE1Vy.js";import{X as l}from"./XAxis-DYSrX7Pe.js";import{Y as h}from"./YAxis-nM39HCeg.js";import{B as x}from"./Brush-BepEyaFo.js";import{B as c}from"./Bar-Dq6Q8__O.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B9xIgtOp.js";import"./index-CbO58SlV.js";import"./index-Bes_wTqv.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DxKF5pbQ.js";import"./isWellBehavedNumber-Cwb0Yuac.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Zf4efnQ7.js";import"./index-CH7AYfaw.js";import"./index-mICHaOdM.js";import"./axisSelectors-D4Hdk4ax.js";import"./d3-scale-ClwuSri4.js";import"./renderedTicksSlice-CV9ehOCs.js";import"./CartesianChart-D6VrfDcf.js";import"./chartDataContext-CdtLleKV.js";import"./CategoricalChart-D_woPTvb.js";import"./CartesianAxis-zD9IwJ4x.js";import"./Layer-CEnr9JeS.js";import"./Text-DL22Whxw.js";import"./DOMUtils-CzEfLf16.js";import"./useId-CnhnPuIR.js";import"./useBackwardsCompatibleTheme-Kb0l05fi.js";import"./Label-DW2voJ8G.js";import"./ZIndexLayer-DV8vU7iD.js";import"./types-8QdsKxPr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CFCWs_6E.js";import"./useAnimationId-BD80cuEQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C8S9t7Qs.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DlXszYqE.js";import"./tooltipContext-GQXy2B0j.js";import"./RegisterGraphicalItemId-BfW92mN9.js";import"./ErrorBarContext-C63SGP0L.js";import"./GraphicalItemClipPath-DIHeVoC3.js";import"./SetGraphicalItem-BZwhXqLy.js";import"./getZIndexFromUnknown-DWalIvOm.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BV25kRqp.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const ht=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};

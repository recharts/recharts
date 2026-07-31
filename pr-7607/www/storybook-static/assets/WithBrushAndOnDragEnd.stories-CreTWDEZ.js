import{R as t}from"./iframe-BNn_UWWx.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DE7GeAH-.js";import{B as p}from"./BarChart-BYzicpy1.js";import{X as l}from"./XAxis-DzOTQwY3.js";import{Y as h}from"./YAxis-BcmUZyL1.js";import{B as x}from"./Brush-CVbk5ezs.js";import{B as c}from"./Bar-DqqOqk5Q.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dubphbjd.js";import"./index-Bj9l6yop.js";import"./index-D_0E2Dfj.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BEtD5DPC.js";import"./isWellBehavedNumber-BKaWcWBZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CWGaw5tQ.js";import"./index-DbExzsUk.js";import"./index-C_8szxEx.js";import"./renderedTicksSlice-CR8grWP_.js";import"./axisSelectors-C-S7b24Y.js";import"./d3-scale-Dfsy3Tmh.js";import"./CartesianChart-CP3XnrfD.js";import"./chartDataContext-rNOOEU-v.js";import"./CategoricalChart-DKj_eLFg.js";import"./CartesianAxis-DOE8j2mB.js";import"./Layer-C9Gg67SI.js";import"./Text-BkqgwmxZ.js";import"./DOMUtils-kgC6vmME.js";import"./Label-BR5BCwPX.js";import"./ZIndexLayer-DbGeHIXa.js";import"./types-BuPE8SUX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-MW3Vir6H.js";import"./isBuffer-BG75eWKN.js";import"./tooltipContext-BbMYp3dy.js";import"./AnimatedItems-DzsSkQFR.js";import"./useAnimationId-DDbhsfXp.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BIKDq1_W.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-w8zJ4JkR.js";import"./RegisterGraphicalItemId-BNqd9LzC.js";import"./ErrorBarContext-D8VbAhOk.js";import"./GraphicalItemClipPath-n0yD8gXz.js";import"./SetGraphicalItem-DKdZ-jRK.js";import"./getZIndexFromUnknown-_997__Lh.js";import"./graphicalItemSelectors-6pmbpWWP.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const pt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,pt as __namedExportsOrder,st as default};

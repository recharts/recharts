import{c as t}from"./iframe-eXOzs3YY.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./zIndexSlice-CuY-7AxA.js";import{B as p}from"./BarChart-B7fCoyPa.js";import{X as l}from"./XAxis-25xD-jfg.js";import{Y as h}from"./YAxis-DwsIXpqe.js";import{B as x}from"./Brush-DzsKHW3f.js";import{B as c}from"./Bar-B2_wVvYh.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DwC3AsAE.js";import"./index-C3pdYAEU.js";import"./index-BeZCe1sB.js";import"./get-DyNLp3_i.js";import"./resolveDefaultProps-DFOijNU4.js";import"./isWellBehavedNumber-AEitUNgh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BX65N_tr.js";import"./index-DS3rRRFa.js";import"./index-CIP6DqMy.js";import"./renderedTicksSlice-Bq0EglVk.js";import"./axisSelectors-2h318yzI.js";import"./d3-scale-CfOtqMhF.js";import"./CartesianChart-BbQfwcfl.js";import"./chartDataContext-CxkR6oQJ.js";import"./CategoricalChart-DeYGfYtA.js";import"./CartesianAxis-DRLBBJED.js";import"./Layer-VPMddfpg.js";import"./Text-Geh_dgxu.js";import"./DOMUtils-CZvt8Baf.js";import"./Label-A2hDBNkM.js";import"./ZIndexLayer-NeCcTin-.js";import"./types-ty1UrU8J.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-8A5g5vWG.js";import"./ReactUtils-C6uVGLKp.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B8la5sgf.js";import"./useAnimationId-B5pCqy41.js";import"./ActiveShapeUtils-DIEuoF9z.js";import"./RegisterGraphicalItemId-qKqyupEJ.js";import"./ErrorBarContext-C69bYVo4.js";import"./GraphicalItemClipPath-BFD_fJ-h.js";import"./SetGraphicalItem-CWrfv76Z.js";import"./getZIndexFromUnknown-rKE-_to_.js";import"./graphicalItemSelectors--zOGyG2I.js";const ot={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const dt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,dt as __namedExportsOrder,ot as default};

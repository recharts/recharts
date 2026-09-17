import{R as t}from"./iframe-o9H8KOy9.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CsgZI5yp.js";import{B as p}from"./BarChart-BbM6bdOJ.js";import{X as l}from"./XAxis-BS32pGnO.js";import{Y as h}from"./YAxis-ULho8m9m.js";import{B as x}from"./Brush-Bh5clm8z.js";import{B as c}from"./Bar-CppsLfzP.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-hW6vudhT.js";import"./index-UCkqSDpm.js";import"./index-DST8VIu0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CyRSpMie.js";import"./isWellBehavedNumber-Dwj2svK3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BZ0mtC1D.js";import"./axisSelectors-Cs0jtKkZ.js";import"./d3-scale-DTDNfzi3.js";import"./index-EzgePqD6.js";import"./index-CnuR4GUo.js";import"./renderedTicksSlice-BmkiUxUd.js";import"./index-jpFEenpG.js";import"./CartesianChart-Gd4WSf--.js";import"./chartDataContext-up-x_HqN.js";import"./CategoricalChart-PL_s45W5.js";import"./CartesianAxis-oj3Fjdb5.js";import"./Layer-C1DHBl04.js";import"./Text-CYZhXiJD.js";import"./DOMUtils-S1dn3EjE.js";import"./useId-C6JRG-LM.js";import"./useBackwardsCompatibleTheme-BxxjaG6R.js";import"./Label-nsqVjfiI.js";import"./ZIndexLayer-DKFjfMYd.js";import"./types-Df3MXzgv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-eAjckEIy.js";import"./useAnimationId-BkEDLLv5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dt3SJkKE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DCctTHnp.js";import"./tooltipContext-X3pjsmiQ.js";import"./RegisterGraphicalItemId-C9q20zyT.js";import"./ErrorBarContext-CLeU9z0V.js";import"./GraphicalItemClipPath-DTZX6fHd.js";import"./SetGraphicalItem-obUYvC56.js";import"./getZIndexFromUnknown-C2rMDZ_g.js";import"./useGraphicalItemIdentity-CagZ9rA9.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

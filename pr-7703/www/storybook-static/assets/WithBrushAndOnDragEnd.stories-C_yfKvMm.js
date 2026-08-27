import{R as t}from"./iframe-COd9kUku.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BfP4v1bS.js";import{B as p}from"./BarChart-D-HRvklW.js";import{X as l}from"./XAxis-B5YW1-Pp.js";import{Y as h}from"./YAxis-Bz97xI6z.js";import{B as x}from"./Brush-DrdQJHSC.js";import{B as c}from"./Bar-Di15zWAz.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-5ro8HE4Y.js";import"./index-COL2WR0f.js";import"./index-BSevdux3.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D_OJMKIx.js";import"./isWellBehavedNumber-Bypxk17g.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CqMN8AUr.js";import"./axisSelectors-i296AGH9.js";import"./d3-scale-uQ_gA658.js";import"./index-BJ9jwzw4.js";import"./index-5Vml1b2p.js";import"./renderedTicksSlice-CZAtvUE5.js";import"./index-RUiFmAll.js";import"./CartesianChart-DI_xXxUF.js";import"./chartDataContext-D64HN0cL.js";import"./CategoricalChart-Cy8ngVMI.js";import"./CartesianAxis-DNJooG1E.js";import"./Layer-riiSoJFM.js";import"./Text-osvpinWz.js";import"./DOMUtils-csxZCivv.js";import"./useId-Cuf_ayBp.js";import"./useBackwardsCompatibleTheme-B805O1fX.js";import"./Label-BfhUPh9D.js";import"./ZIndexLayer-06cimeo-.js";import"./types-5NhdCA1W.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-RKe26m0b.js";import"./useAnimationId-xpwU92YM.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DzmCpk66.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-vcId9Asm.js";import"./tooltipContext-CVsqSJZH.js";import"./RegisterGraphicalItemId-rqUDDANA.js";import"./ErrorBarContext-U_BzfmOa.js";import"./GraphicalItemClipPath-DjJkXpBH.js";import"./SetGraphicalItem-Cdo5fsgn.js";import"./getZIndexFromUnknown-uR6Strlj.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DhNgM9I4.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const xt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,xt as __namedExportsOrder,ht as default};

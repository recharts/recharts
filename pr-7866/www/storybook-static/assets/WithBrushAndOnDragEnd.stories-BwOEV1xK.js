import{R as t}from"./iframe-DNbvw14a.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BHD22v5p.js";import{B as p}from"./BarChart-Eo2Qx8ql.js";import{X as l}from"./XAxis-DKCor6Yv.js";import{Y as h}from"./YAxis-BGn7xsJM.js";import{B as x}from"./Brush-CgdzIKht.js";import{B as c}from"./Bar-D6HrfqK6.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-TrQ-NrIz.js";import"./index-ChGtG0Z1.js";import"./index-mPJfSQ4a.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dv9OS7x0.js";import"./isWellBehavedNumber-B4X7Ovgo.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-vWLTzty1.js";import"./axisSelectors-B6LUaqOe.js";import"./d3-scale-DdoY8Kw0.js";import"./index-CiQ39v7Z.js";import"./index-CqQ_TYAw.js";import"./renderedTicksSlice-DnMPpzr7.js";import"./index-BcAi-B8x.js";import"./CartesianChart-D_zqHIPC.js";import"./chartDataContext-mj0-05pU.js";import"./CategoricalChart-DTINRHZI.js";import"./CartesianAxis-CQJhlqIf.js";import"./Layer-Ca0bY5rb.js";import"./Text-BgAYGcmu.js";import"./DOMUtils-gpe3mW7P.js";import"./useId-BIiTcBjO.js";import"./useBackwardsCompatibleTheme-CUWrJJ-Y.js";import"./Label-B7KQBAEU.js";import"./ZIndexLayer-aQMxqOVX.js";import"./types-BqFGOrry.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-wgqiGiqn.js";import"./useAnimationId-DYgsmh0H.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BtsBI90d.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bvp6wNuu.js";import"./tooltipContext-DwX5IhzS.js";import"./RegisterGraphicalItemId-C8sRnX7V.js";import"./ErrorBarContext-BdE1Cthk.js";import"./GraphicalItemClipPath-CB7JJ2kx.js";import"./SetGraphicalItem-nJGBA7YQ.js";import"./getZIndexFromUnknown-2k3EFYWF.js";import"./useGraphicalItemIdentity-CCeSwNH2.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

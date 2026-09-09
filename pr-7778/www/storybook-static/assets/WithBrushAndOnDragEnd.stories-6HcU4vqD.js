import{R as t}from"./iframe-D0hbihpw.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BQR9Og2n.js";import{B as p}from"./BarChart-DtvFPbGy.js";import{X as l}from"./XAxis-BAOUXnRk.js";import{Y as h}from"./YAxis-fB5-70kE.js";import{B as x}from"./Brush-CjAfIvQ8.js";import{B as c}from"./Bar-C9PSmlqz.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DvTX4uc0.js";import"./index-BZ9qdzrn.js";import"./index-Dh99j1-7.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dmu88e8o.js";import"./isWellBehavedNumber-CZhc5lub.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CXRkLc1K.js";import"./axisSelectors-Va6d-v4h.js";import"./d3-scale-O8h2L0ph.js";import"./index-DrgC61Jv.js";import"./index-8bi5BFX5.js";import"./renderedTicksSlice-CXB8MRbw.js";import"./index-BDFJggKj.js";import"./CartesianChart-V6lubhpa.js";import"./chartDataContext-DAXrP6D1.js";import"./CategoricalChart-Byua6Cow.js";import"./CartesianAxis-DbFRpkHK.js";import"./Layer-DikASeyh.js";import"./Text-CuYqG2IB.js";import"./DOMUtils-pnmg3tR-.js";import"./useId-CqMWBNZ1.js";import"./useBackwardsCompatibleTheme-BB_m6SGU.js";import"./Label-CuFmC-Nb.js";import"./ZIndexLayer-J_UAcRhh.js";import"./types-C5BTVxoc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-SbRPQVaD.js";import"./useAnimationId-qESP7nT-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C_uu3MYE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-5v_sCHFD.js";import"./tooltipContext-DDBxvAQn.js";import"./RegisterGraphicalItemId-DeHO2KGG.js";import"./ErrorBarContext-BWM6Th1h.js";import"./GraphicalItemClipPath-BlTfPWVo.js";import"./SetGraphicalItem-DqlrOVj_.js";import"./getZIndexFromUnknown-Cgv-iSQS.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DmsrIOc1.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,xt as __namedExportsOrder,ht as default};

import{R as t}from"./iframe-CaZrduHG.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CvUTBx_8.js";import{B as p}from"./BarChart-tfhwxf1o.js";import{X as l}from"./XAxis-CHaMVHb_.js";import{Y as h}from"./YAxis-DyfSUlDI.js";import{B as x}from"./Brush-VHUkeUlz.js";import{B as c}from"./Bar-CbIW5Q9q.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-x_arNXZJ.js";import"./index-CYnc97bp.js";import"./index-CdgMfIsn.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-hTjQl1Jw.js";import"./isWellBehavedNumber-Ds6x18SL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-6f4LgHbs.js";import"./index-dOcL02AF.js";import"./index-BkusJAc5.js";import"./renderedTicksSlice-CarnP_oQ.js";import"./axisSelectors-CbEPJ0ND.js";import"./d3-scale-EIFV6mVT.js";import"./CartesianChart-DiGyCZXM.js";import"./chartDataContext-BSaewpt8.js";import"./CategoricalChart-d16gVM5b.js";import"./CartesianAxis-DB1Mym72.js";import"./Layer-DIgzKEwe.js";import"./Text-Rs_1_idd.js";import"./DOMUtils-CmlaPQx2.js";import"./Label-BWJz-33r.js";import"./ZIndexLayer-dEGCaPIX.js";import"./types-CJ_sW9YU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-jfhWmHX9.js";import"./AnimatedItems-DghnEQ9g.js";import"./useAnimationId-Ddowgb5f.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BwbsF6Pn.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-O1yKcLVj.js";import"./RegisterGraphicalItemId-pMJ6sSz4.js";import"./ErrorBarContext-B9ivevc9.js";import"./GraphicalItemClipPath-CRbchFTR.js";import"./SetGraphicalItem-0qDOjHM6.js";import"./getZIndexFromUnknown-g0xmMdNn.js";import"./graphicalItemSelectors-BxDyje9Y.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const mt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,mt as __namedExportsOrder,dt as default};

import{e as t}from"./iframe-Ct3-EmvQ.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-6IWQNVnF.js";import{B as p}from"./BarChart-DoaYc1Jn.js";import{X as l}from"./XAxis-BUqB6c6n.js";import{Y as h}from"./YAxis-FGYgR9Es.js";import{B as c}from"./Brush-CNWwm9Om.js";import{B as x}from"./Bar-BSCuFnMA.js";import{R as u}from"./RechartsHookInspector-CNP9TKyO.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CLCYDClS.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CgmBIBCZ.js";import"./hooks-PlM3qON0.js";import"./axisSelectors-CMJXMyjC.js";import"./zIndexSlice-DuEz9NCx.js";import"./CartesianChart-DTOqEhzT.js";import"./chartDataContext-mVWnipwc.js";import"./CategoricalChart-DnvqP6Kl.js";import"./CartesianAxis-C_XdVR0m.js";import"./Layer-B8MEBogB.js";import"./Text-x40PBIRp.js";import"./DOMUtils-BkPW2gQA.js";import"./Label-DHx5gLtP.js";import"./ZIndexLayer-BPGi17AG.js";import"./types-_oa_IGij.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-Wt6yWfLp.js";import"./ReactUtils-DN8_9Eno.js";import"./ActiveShapeUtils-BFvFZr_D.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BOfd_qYz.js";import"./useAnimationId-BJitn0wZ.js";import"./Trapezoid-DB54BMON.js";import"./Sector-C0TYwl3N.js";import"./Symbols-Bp94E4fO.js";import"./Curve-C_yJ7Ryc.js";import"./RegisterGraphicalItemId-XVqhZVps.js";import"./ErrorBarContext-DASfBuRX.js";import"./GraphicalItemClipPath-m8qPdP4H.js";import"./SetGraphicalItem-DB0AUuOj.js";import"./getZIndexFromUnknown-CUEM9d4r.js";import"./graphicalItemSelectors-DieLD_DM.js";import"./index-CtF0TcD5.js";import"./ChartSizeDimensions-DR7HU7h8.js";import"./OffsetShower-DsW7pfd1.js";import"./PlotAreaShower-CVlOaRsI.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const pt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,pt as __namedExportsOrder,st as default};

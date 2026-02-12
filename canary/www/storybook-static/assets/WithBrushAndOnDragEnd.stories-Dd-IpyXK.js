import{e as t}from"./iframe-DqbxrOnC.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DDnB3yQJ.js";import{B as p}from"./BarChart-CKG1DOnk.js";import{X as l}from"./XAxis-Clh3r3oa.js";import{Y as h}from"./YAxis-C1VoYxeB.js";import{B as c}from"./Brush-OosY6-oz.js";import{B as x}from"./Bar-C4LEPpud.js";import{R as u}from"./RechartsHookInspector-nEoOxjIA.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-H2CuSuBD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CpGZSQIF.js";import"./hooks-Bh4iEl2l.js";import"./axisSelectors-BhsfxkUf.js";import"./zIndexSlice-Be92tzJW.js";import"./CartesianChart-BmQRqUeT.js";import"./chartDataContext-DOwFKY9v.js";import"./CategoricalChart-BDtAQzJe.js";import"./CartesianAxis-CBS5lhtQ.js";import"./Layer-DO_g1bne.js";import"./Text-UMPVnpE1.js";import"./DOMUtils-DJjhPRNo.js";import"./Label-Dn_4yvvw.js";import"./ZIndexLayer-BLOQbcIf.js";import"./types-DYQm65dh.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-D16SUj3v.js";import"./ReactUtils-CmTCn7uo.js";import"./ActiveShapeUtils-CZKx7Ui-.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DoZxp5Jb.js";import"./useAnimationId-CZrzdjIq.js";import"./Trapezoid-CT_AsUkt.js";import"./Sector-BHLa0ImP.js";import"./Symbols-m2t7OCzL.js";import"./Curve-D1iAhDrw.js";import"./RegisterGraphicalItemId-BknrU22d.js";import"./ErrorBarContext-brGngOut.js";import"./GraphicalItemClipPath-BvpOtW2w.js";import"./SetGraphicalItem-D6JZdLch.js";import"./getZIndexFromUnknown-C03Ahide.js";import"./graphicalItemSelectors-4b15-XDR.js";import"./index-DM8LAuhA.js";import"./ChartSizeDimensions-D5VWiq-O.js";import"./OffsetShower-BGmawGzl.js";import"./PlotAreaShower-Cv1rJPUW.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

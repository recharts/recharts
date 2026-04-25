import{e}from"./iframe-CPCZOK1n.js";import{a}from"./Time-CZh6Vidc.js";import{R as f}from"./arrayEqualityCheck-8pkbG_5i.js";import{C as i}from"./ComposedChart-BjaTFdDo.js";import{B as m}from"./Brush-aWMH1oq3.js";import{R as E}from"./RechartsHookInspector-BtGo_ncg.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-oWFt7rla.js";import"./immer-BU-gze6F.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-kO2YHyse.js";import"./index-DASNqNcn.js";import"./hooks-BA_spPLW.js";import"./axisSelectors-BKubAPhx.js";import"./d3-scale-Bak8-ygn.js";import"./zIndexSlice-CzIf2J47.js";import"./renderedTicksSlice-CpVIhZJh.js";import"./CartesianChart-COi-Fufa.js";import"./chartDataContext-DQ34TJEj.js";import"./CategoricalChart-DA_LUwfH.js";import"./Layer-DgSzLvrX.js";import"./Text-Cl6E4AYb.js";import"./DOMUtils-C8mAxLIU.js";import"./index-CZMWO916.js";import"./ChartSizeDimensions-DT2M52ae.js";import"./OffsetShower-DYRUehRC.js";import"./PlotAreaShower-CM2fQjBs.js";const V={title:"Examples/cartesian/Brush/In Surface"},s={render:()=>{const[p,u]=e.useState({startIndex:0,endIndex:a.length-1}),[h,I]=e.useState({startIndex:0,endIndex:a.length-1}),g=t=>{u(t)},C=t=>{I(t)},S=t=>{const{x:n,y:r,width:d,height:o}=t;return e.createElement("path",{d:`M${n+d/2},${r}L${n+d},${r+o/2}L${n+d/2},${r+o}L${n},${r+o/2}Z`,fill:"red",stroke:"none"})};return e.createElement(f,{width:"100%",height:200},e.createElement("p",null,"Simple Brush"),e.createElement(i,{data:a},e.createElement(m,{startIndex:p.startIndex,endIndex:p.endIndex,x:100,y:50,width:400,height:40,onChange:g,traveller:S})),e.createElement("p",null,"Brush has specified gap"),e.createElement(i,{data:a},e.createElement(m,{startIndex:h.startIndex,endIndex:h.endIndex,x:100,y:50,width:400,height:40,gap:5,onChange:C}),e.createElement(E,null)))}};var l,x,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    interface BrushStartEndIndex {
      startIndex?: number;
      endIndex?: number;
    }
    const [simple, setSimple] = React.useState<BrushStartEndIndex>({
      startIndex: 0,
      endIndex: dateData.length - 1
    });
    const [gap, setGap] = React.useState<BrushStartEndIndex>({
      startIndex: 0,
      endIndex: dateData.length - 1
    });
    const handleChange = (res: BrushStartEndIndex) => {
      setSimple(res);
    };
    const handleGapChange = (res: BrushStartEndIndex) => {
      setGap(res);
    };
    const renderTraveller = (props: {
      x: number;
      y: number;
      width: number;
      height: number;
    }) => {
      const {
        x,
        y,
        width,
        height
      } = props;
      return <path d={\`M\${x + width / 2},\${y}L\${x + width},\${y + height / 2}L\${x + width / 2},\${y + height}L\${x},\${y + height / 2}Z\`} fill="red" stroke="none" />;
    };
    return <ResponsiveContainer width="100%" height={200}>
        <p>Simple Brush</p>
        <ComposedChart data={dateData}>
          <Brush startIndex={simple.startIndex} endIndex={simple.endIndex} x={100} y={50} width={400} height={40} onChange={handleChange} traveller={renderTraveller} />
        </ComposedChart>
        <p>Brush has specified gap</p>
        <ComposedChart data={dateData}>
          <Brush startIndex={gap.startIndex} endIndex={gap.endIndex} x={100} y={50} width={400} height={40} gap={5} onChange={handleGapChange} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(c=(x=s.parameters)==null?void 0:x.docs)==null?void 0:c.source}}};const W=["InSurface"];export{s as InSurface,W as __namedExportsOrder,V as default};

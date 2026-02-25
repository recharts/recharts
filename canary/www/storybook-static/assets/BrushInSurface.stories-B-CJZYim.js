import{e}from"./iframe-DOwSMESw.js";import{a}from"./Time-CZh6Vidc.js";import{R as f}from"./arrayEqualityCheck-CX9-bfYH.js";import{C as i}from"./ComposedChart-DebGIEfT.js";import{B as m}from"./Brush-DrWz9fQT.js";import{R as E}from"./RechartsHookInspector-CcCJcHZ5.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-ChqUwM3U.js";import"./immer-ZyDpTiiy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ls6tVJyv.js";import"./index-BBfb_97C.js";import"./hooks-xQD_-akz.js";import"./axisSelectors-BKSMdbwV.js";import"./d3-scale-D4rgCaup.js";import"./zIndexSlice-DitFxlYL.js";import"./renderedTicksSlice-B9YC84oJ.js";import"./CartesianChart-DFwJmcFp.js";import"./chartDataContext-CzK82F7Z.js";import"./CategoricalChart-CxUtgmSG.js";import"./Layer-Dw0puBgf.js";import"./Text-DHnTXj9j.js";import"./DOMUtils-DbGofJNd.js";import"./index-aBvahWCN.js";import"./ChartSizeDimensions-BCHrYjTL.js";import"./OffsetShower-DAQHvvGL.js";import"./PlotAreaShower-CtS1URyh.js";const V={title:"Examples/cartesian/Brush/In Surface"},s={render:()=>{const[p,u]=e.useState({startIndex:0,endIndex:a.length-1}),[h,I]=e.useState({startIndex:0,endIndex:a.length-1}),g=t=>{u(t)},C=t=>{I(t)},S=t=>{const{x:n,y:r,width:d,height:o}=t;return e.createElement("path",{d:`M${n+d/2},${r}L${n+d},${r+o/2}L${n+d/2},${r+o}L${n},${r+o/2}Z`,fill:"red",stroke:"none"})};return e.createElement(f,{width:"100%",height:200},e.createElement("p",null,"Simple Brush"),e.createElement(i,{data:a},e.createElement(m,{startIndex:p.startIndex,endIndex:p.endIndex,x:100,y:50,width:400,height:40,onChange:g,traveller:S})),e.createElement("p",null,"Brush has specified gap"),e.createElement(i,{data:a},e.createElement(m,{startIndex:h.startIndex,endIndex:h.endIndex,x:100,y:50,width:400,height:40,gap:5,onChange:C}),e.createElement(E,null)))}};var l,x,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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

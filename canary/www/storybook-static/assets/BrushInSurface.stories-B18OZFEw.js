import{R as e}from"./iframe-BXeHtRRc.js";import{a}from"./Time-CZh6Vidc.js";import{R as $}from"./zIndexSlice-cE44OqOD.js";import{C as i}from"./ComposedChart-CG0nrh_K.js";import{B as m}from"./Brush-DHrDa_Uw.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DNshJjPH.js";import"./index-DvJ-fn_5.js";import"./index-B4hVWkse.js";import"./get-CJL6L62i.js";import"./resolveDefaultProps-C9hL96mo.js";import"./isWellBehavedNumber-D2wsJvGw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BlW5dnlL.js";import"./index-BDGfSbM8.js";import"./index-Ovc1MJjY.js";import"./renderedTicksSlice-Bxd2HCuP.js";import"./axisSelectors-DwMRPNyX.js";import"./d3-scale-D1ymsn93.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CfUKecxL.js";import"./chartDataContext-Cl-sRnxe.js";import"./CategoricalChart-Dcf-SEqg.js";import"./Layer-G87RycP8.js";import"./Text-CgCa4wia.js";import"./DOMUtils-Bki5Qsqq.js";const P={title:"Examples/cartesian/Brush/In Surface"},s={render:()=>{const[h,u]=e.useState({startIndex:0,endIndex:a.length-1}),[p,g]=e.useState({startIndex:0,endIndex:a.length-1}),I=t=>{u(t)},C=t=>{g(t)},S=t=>{const{x:n,y:r,width:d,height:o}=t;return e.createElement("path",{d:`M${n+d/2},${r}L${n+d},${r+o/2}L${n+d/2},${r+o}L${n},${r+o/2}Z`,fill:"red",stroke:"none"})};return e.createElement($,{width:"100%",height:200},e.createElement("p",null,"Simple Brush"),e.createElement(i,{data:a},e.createElement(m,{startIndex:h.startIndex,endIndex:h.endIndex,x:100,y:50,width:400,height:40,onChange:I,traveller:S})),e.createElement("p",null,"Brush has specified gap"),e.createElement(i,{data:a},e.createElement(m,{startIndex:p.startIndex,endIndex:p.endIndex,x:100,y:50,width:400,height:40,gap:5,onChange:C})))}};var l,x,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(c=(x=s.parameters)==null?void 0:x.docs)==null?void 0:c.source}}};const Q=["InSurface"];export{s as InSurface,Q as __namedExportsOrder,P as default};

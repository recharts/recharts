import{c as e}from"./iframe-NcbJjIA-.js";import{d as a}from"./Time-D4Einjlh.js";import{g as $}from"./zIndexSlice-aCnp2Btu.js";import{C as i}from"./ComposedChart-DfrMZJ_4.js";import{B as m}from"./Brush-BwHC9ZnY.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BrPcfpKJ.js";import"./index-YT6PLmfy.js";import"./index-B2hMZxT9.js";import"./get-DHJyV6O8.js";import"./resolveDefaultProps-9rxZz0BJ.js";import"./isWellBehavedNumber-CRF88Te0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C1F7SUdh.js";import"./index-CASzwsd1.js";import"./index-CFcgoPKL.js";import"./renderedTicksSlice-CazECbsF.js";import"./axisSelectors--8zPyqGt.js";import"./d3-scale-B1TlVjVH.js";import"./CartesianChart-nvfGUb02.js";import"./chartDataContext-D7rZipVq.js";import"./CategoricalChart-DRPlCLZK.js";import"./Layer-DCqaOLDO.js";import"./Text-DqOWrbn9.js";import"./DOMUtils-VR3x78qW.js";const N={title:"Examples/cartesian/Brush/In Surface"},d={render:()=>{const[h,u]=e.useState({startIndex:0,endIndex:a.length-1}),[p,g]=e.useState({startIndex:0,endIndex:a.length-1}),I=t=>{u(t)},C=t=>{g(t)},S=t=>{const{x:n,y:r,width:s,height:o}=t;return e.createElement("path",{d:`M${n+s/2},${r}L${n+s},${r+o/2}L${n+s/2},${r+o}L${n},${r+o/2}Z`,fill:"red",stroke:"none"})};return e.createElement($,{width:"100%",height:200},e.createElement("p",null,"Simple Brush"),e.createElement(i,{data:a},e.createElement(m,{startIndex:h.startIndex,endIndex:h.endIndex,x:100,y:50,width:400,height:40,onChange:I,traveller:S})),e.createElement("p",null,"Brush has specified gap"),e.createElement(i,{data:a},e.createElement(m,{startIndex:p.startIndex,endIndex:p.endIndex,x:100,y:50,width:400,height:40,gap:5,onChange:C})))}};var l,x,c;d.parameters={...d.parameters,docs:{...(l=d.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(x=d.parameters)==null?void 0:x.docs)==null?void 0:c.source}}};const P=["InSurface"];export{d as InSurface,P as __namedExportsOrder,N as default};

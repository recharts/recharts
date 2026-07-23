import{r as s,R as e}from"./iframe-DDIh6oSg.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-Bo-CoYJb.js";import{R as C}from"./zIndexSlice-D80Tj10e.js";import{L as n}from"./Line-DXn8wVtE.js";import{X as p}from"./XAxis-BkhNyeaA.js";import{T as c}from"./Tooltip-CdVaJTp7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DOoCLeb6.js";import"./index-BwBS1vT9.js";import"./index-CVFqeXWK.js";import"./index-Dxp0N8dY.js";import"./index-BAP9iPcz.js";import"./throttle-Bz-N2EDI.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-CodWg03c.js";import"./axisSelectors-Cj35qO4m.js";import"./resolveDefaultProps-BovobWDa.js";import"./isWellBehavedNumber-m0qYgEug.js";import"./d3-scale-DyPEX_SS.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B73dWYbg.js";import"./chartDataContext-CsvjkcDn.js";import"./CategoricalChart-B8WXtgJK.js";import"./Layer-BjK-uYm4.js";import"./Curve-Cd-wWA8T.js";import"./types-CnDlnigw.js";import"./step-i4RfCE80.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BksUzG9w.js";import"./Label-7ECcoRBX.js";import"./Text-DiDEm6xU.js";import"./DOMUtils-DNdwN9ud.js";import"./ZIndexLayer-CDkdwb16.js";import"./useAnimationId-Cx3p02Wi.js";import"./ActivePoints-D9ieR1r7.js";import"./Dot-C-WD7XjH.js";import"./RegisterGraphicalItemId-CqU17xv7.js";import"./ErrorBarContext-Bx5pZcRj.js";import"./GraphicalItemClipPath-BMP70uQv.js";import"./SetGraphicalItem-BS0-pWrT.js";import"./getRadiusAndStrokeWidthFromDot-B0O65Yh_.js";import"./ActiveShapeUtils-DSNDz2f-.js";import"./CartesianAxis-DjQVT2FJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./useElementOffset-BTJrpw-d.js";import"./uniqBy-D9_WQstA.js";import"./iteratee-CKafh1uf.js";import"./Cross-CaKJ6mZ9.js";import"./Rectangle-BZqE5oO7.js";import"./util-Dxo8gN5i.js";import"./Sector-CxsD9MnG.js";const Te={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    const [isHovered, setIsHovered] = useState(false);
    const onMouseEnter = useCallback(() => {
      setIsHovered(true);
    }, [setIsHovered]);
    const onMouseLeave = useCallback(() => {
      setIsHovered(false);
    }, [setIsHovered]);
    return <ResponsiveContainer width="100%" height={400}>
        <LineChart {...args}>
          <Line onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} dataKey="uv" strokeWidth={isHovered ? 8 : 4} animationDuration={5000} />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    data: pageData
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,v,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <div>
        <LineChart {...args} id="BookOne" className="BookOne">
          <Line isAnimationActive={false} name="BookOne" type="monotone" dataKey="uv" stroke="#111" />
          <XAxis dataKey="name" />
          <Tooltip active />
        </LineChart>
        <LineChart {...args} id="BookTwo" className="BookTwo">
          <Line isAnimationActive={false} name="BookTwo" type="monotone" dataKey="uv" stroke="#ff7300" />
          <XAxis dataKey="name" />
          <Tooltip />
        </LineChart>
      </div>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    data: pageData,
    syncId: 'example-syncId',
    width: 400,
    height: 400
  }
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Be=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Be as __namedExportsOrder,Te as default};

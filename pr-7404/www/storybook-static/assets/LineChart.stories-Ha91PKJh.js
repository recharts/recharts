import{r as s,R as e}from"./iframe-DeM0Qb4B.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-BudJlmuc.js";import{R as C}from"./zIndexSlice-CiNLGVRc.js";import{L as n}from"./Line-DTawiR2y.js";import{X as p}from"./XAxis-D6dtEk3_.js";import{T as c}from"./Tooltip-YRroQXQ_.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bw4I8ksO.js";import"./index-D_HWn2_u.js";import"./index-B-tkzYsG.js";import"./index-BsvTaB6O.js";import"./index-BeHf8kjF.js";import"./immer-CXrDBfBc.js";import"./get-CMIg51n-.js";import"./renderedTicksSlice-l4NOSov1.js";import"./axisSelectors-DWmGSiam.js";import"./d3-scale-BzB7iPcR.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-CHkmO4Nn.js";import"./isWellBehavedNumber-Dt1ZDNIe.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bfusz6lr.js";import"./chartDataContext-HoVJk3bG.js";import"./CategoricalChart-nLEaw9lU.js";import"./Layer-B3W7tn4T.js";import"./Curve-DAs23S9W.js";import"./types-C10ohCRK.js";import"./step-B11PQnh8.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-q3oAcZv4.js";import"./Label-C5gMwwTi.js";import"./Text-BRAU_A6N.js";import"./DOMUtils-D2W98joL.js";import"./ZIndexLayer-DorZCPdG.js";import"./useAnimationId-PwiLcg7B.js";import"./ActivePoints-B-QpMSVH.js";import"./Dot-DnzKtKhK.js";import"./RegisterGraphicalItemId-CqW9ab1A.js";import"./ErrorBarContext-Cu0ArMmH.js";import"./GraphicalItemClipPath-BHo-wJHw.js";import"./SetGraphicalItem-zGGg2ijs.js";import"./getRadiusAndStrokeWidthFromDot-DKEbDMSV.js";import"./ActiveShapeUtils-BOazUucV.js";import"./CartesianAxis-C8MJ9nCV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-CjQbRS76.js";import"./uniqBy-QJuJHQUa.js";import"./iteratee-DGbnOAAX.js";import"./Cross-Lj81fX38.js";import"./Rectangle-xMD6zM8p.js";import"./Sector-CPQwCKem.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Te=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Te as __namedExportsOrder,Ee as default};

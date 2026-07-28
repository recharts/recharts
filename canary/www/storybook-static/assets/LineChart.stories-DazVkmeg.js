import{r as s,R as e}from"./iframe-CzzdtdLH.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-CRYLVXcn.js";import{R as C}from"./zIndexSlice-Co00U7DY.js";import{L as n}from"./Line-BIkkaUAa.js";import{X as p}from"./XAxis-CKEr4FP9.js";import{T as c}from"./Tooltip-CXOG8T9I.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BJjI_Ka0.js";import"./index-Bnee00Tj.js";import"./index-C75_nTb2.js";import"./index-64quDrFB.js";import"./index-DWpzXqnr.js";import"./throttle-DKJrGqy3.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-1HW0Usy7.js";import"./axisSelectors-BlRIZcT4.js";import"./resolveDefaultProps-BjUNTsKn.js";import"./isWellBehavedNumber-BmNKw_Tm.js";import"./d3-scale-pYyMK9Lh.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CuTVmHhm.js";import"./chartDataContext-BZcRmYig.js";import"./CategoricalChart-VSe_1AC9.js";import"./Layer-BbK8NiGM.js";import"./Curve-Jr9YsAj6.js";import"./types-3QfDILpo.js";import"./step-R9BHjTQW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BMiyvThI.js";import"./Label-CL5-PwM4.js";import"./Text-0Zz8t0sM.js";import"./DOMUtils-DH9j7AXM.js";import"./ZIndexLayer-ChHVLqdE.js";import"./useAnimationId-C9cdprRM.js";import"./ActivePoints-B_ez_f7F.js";import"./Dot-BX-Vbuyt.js";import"./RegisterGraphicalItemId-BU-YkEzl.js";import"./ErrorBarContext-ZLp962OP.js";import"./GraphicalItemClipPath-B0mB6y5l.js";import"./SetGraphicalItem-tk_sKpy7.js";import"./getRadiusAndStrokeWidthFromDot-DFgztpRX.js";import"./ActiveShapeUtils-DWVSurhB.js";import"./RechartsThemeContext-BUtRhNjz.js";import"./CartesianAxis-BbUS-Vpa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./useElementOffset-DxiJzbv2.js";import"./uniqBy-CiFzx0lO.js";import"./iteratee-F5ErMUJK.js";import"./Cross-B-pr5MkY.js";import"./Rectangle-COPtEdoX.js";import"./util-Dxo8gN5i.js";import"./Sector-CebjY1i8.js";const Be={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Ie=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Ie as __namedExportsOrder,Be as default};

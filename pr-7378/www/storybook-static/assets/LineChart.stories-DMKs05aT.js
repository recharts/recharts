import{u as i,e}from"./iframe-oV1i-tzu.js";import{L as m}from"./LineChartArgs-_mND0tRp.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-DPte-9pC.js";import{L as s}from"./LineChart-BLL1e2t0.js";import{g as C}from"./arrayEqualityCheck-Dfz61M-V.js";import{L as n}from"./Line-DMYmk-zJ.js";import{R as A}from"./RechartsHookInspector-1T59QrJN.js";import{X as p}from"./XAxis-DW0bS2aQ.js";import{T as c}from"./Tooltip-r9T7AQW9.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Saljze2a.js";import"./index-DdCYMcV3.js";import"./immer-Ct3YneiL.js";import"./hooks-B5b3yGZZ.js";import"./axisSelectors-BRcov9Qp.js";import"./d3-scale-BCcM-CgQ.js";import"./zIndexSlice-CXZMcCd3.js";import"./renderedTicksSlice-C78Emj3z.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DROGNedD.js";import"./chartDataContext-DEEDOj20.js";import"./CategoricalChart-otVHfWKe.js";import"./resolveDefaultProps-Cn2RP2Pv.js";import"./Curve-DXadnWNX.js";import"./types-BU-8R6yi.js";import"./step-DajnNDky.js";import"./path-DyVhHtw_.js";import"./Layer-e51vonqH.js";import"./ReactUtils-wKdNeUqr.js";import"./Label-C9DqArbR.js";import"./Text-rK0alIz0.js";import"./DOMUtils-DKzrOEzB.js";import"./ZIndexLayer-Hy5H_WVm.js";import"./ActivePoints-AO8q43pZ.js";import"./Dot-3SDu6TG_.js";import"./RegisterGraphicalItemId-CbsLevva.js";import"./ErrorBarContext-CHQ5Dpbn.js";import"./GraphicalItemClipPath-C89Feiin.js";import"./SetGraphicalItem-BZBmijvN.js";import"./useAnimationId-DCUIw60r.js";import"./getRadiusAndStrokeWidthFromDot-BdBvKBxs.js";import"./ActiveShapeUtils-CmSjpnmu.js";import"./index-DHpYxSIP.js";import"./ChartSizeDimensions-COgON8GA.js";import"./OffsetShower-CXxqX1ML.js";import"./PlotAreaShower-DiLwgL_i.js";import"./CartesianAxis-DOaYzv5V.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BMz-Idks.js";import"./uniqBy-Cgghj1Ul.js";import"./iteratee-DiVCWJOm.js";import"./Cross-BMtNyfs2.js";import"./Rectangle-Dox35F7s.js";import"./Sector-DiFKD5N7.js";const Be={argTypes:m,component:s},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),L=i.useCallback(()=>{o(!0)},[o]),E=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(s,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(s,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(s,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
          <RechartsHookInspector />
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const He=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,He as __namedExportsOrder,Be as default};

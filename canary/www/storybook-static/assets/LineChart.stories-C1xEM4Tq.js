import{r as s,e}from"./iframe-BO25Fukk.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{L as i}from"./LineChart--YnP_MuP.js";import{R as C}from"./arrayEqualityCheck-8wdJ7bOW.js";import{L as n}from"./Line-Bi0Ivg5j.js";import{R as k}from"./RechartsHookInspector-y6KR2L3P.js";import{X as p}from"./XAxis-DX4QFDJP.js";import{T as c}from"./Tooltip-BkG2r77U.js";import{p as A}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B1GPclcm.js";import"./index-CKs9W-S6.js";import"./immer-3Wb7zWXo.js";import"./hooks-BpctELEd.js";import"./axisSelectors-Dte6k_F-.js";import"./d3-scale-CRavCQeQ.js";import"./zIndexSlice-rXbN18td.js";import"./renderedTicksSlice-D6T9rHBE.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Ctp6RTcm.js";import"./chartDataContext-Dq6vrtI3.js";import"./CategoricalChart-DUWKrKtp.js";import"./resolveDefaultProps-Blb-qbdi.js";import"./Layer-D1wKq7sO.js";import"./ReactUtils-CylM5YpB.js";import"./Label-OvGfCgyV.js";import"./Text-0_0jC2Y4.js";import"./DOMUtils-To1Mrhoa.js";import"./ZIndexLayer-BjFFXD-n.js";import"./ActivePoints-BcnF-Bb_.js";import"./Dot-Dgz_5xVA.js";import"./types-Z8gV0TDw.js";import"./RegisterGraphicalItemId-DY8fgSiR.js";import"./ErrorBarContext-Dhgcignt.js";import"./GraphicalItemClipPath-BHD8m-8S.js";import"./SetGraphicalItem-oqU0zW_W.js";import"./useAnimationId-DPvU_ojd.js";import"./getRadiusAndStrokeWidthFromDot-pfV1rYdW.js";import"./ActiveShapeUtils-DMKk4NNh.js";import"./isPlainObject-vu1l7QPl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BPh2MAIT.js";import"./Trapezoid-COnZiJVb.js";import"./Sector-Cum54SiJ.js";import"./Symbols-VedzsSET.js";import"./symbol-BjeyFY5i.js";import"./step-DfHck1mJ.js";import"./Curve-DoyX19t4.js";import"./index-BQMezaYM.js";import"./ChartSizeDimensions-fwZ9XifO.js";import"./OffsetShower-DKjDo15d.js";import"./PlotAreaShower-CI8tEgs8.js";import"./CartesianAxis-BRmvxIOe.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DNA5shck.js";import"./uniqBy-BVTfaSFn.js";import"./iteratee-C_6D29Qz.js";import"./Cross-CAwC-V0A.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(k,null)))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(k,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Oe=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Oe as __namedExportsOrder,Ke as default};

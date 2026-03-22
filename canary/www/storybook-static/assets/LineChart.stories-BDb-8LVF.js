import{r as s,e}from"./iframe-CiMhD8Yi.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{L as i}from"./LineChart--8r-B4sb.js";import{R as C}from"./arrayEqualityCheck-C4O-CzLw.js";import{L as n}from"./Line-CMYBg4Xl.js";import{R as k}from"./RechartsHookInspector-DxnuxuTf.js";import{X as p}from"./XAxis-D-t29Sci.js";import{T as c}from"./Tooltip-D071zqlv.js";import{p as A}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Ls9LAbQq.js";import"./index-CPsAC65v.js";import"./immer-BJk0N9d3.js";import"./hooks-DSwKjRVl.js";import"./axisSelectors-B3rHRVnt.js";import"./d3-scale-DI-LuBEQ.js";import"./zIndexSlice-CiVq3vLn.js";import"./renderedTicksSlice-Bf1zdGqK.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DO4e4HPA.js";import"./chartDataContext-DSmgJVpn.js";import"./CategoricalChart-BZ0q9dh3.js";import"./resolveDefaultProps-B6aPzm2T.js";import"./Layer-C8wFYCI6.js";import"./ReactUtils-DRjJkC3p.js";import"./Label-CI8CQ0nH.js";import"./Text-DqREd9W9.js";import"./DOMUtils-g-POG1C4.js";import"./ZIndexLayer-BkTc8o4k.js";import"./ActivePoints-CO0qgypy.js";import"./Dot-CyRHVoZw.js";import"./types-Dhvr5bGX.js";import"./RegisterGraphicalItemId-CiaBhgsv.js";import"./ErrorBarContext-La6ve25h.js";import"./GraphicalItemClipPath-BcJMjVwL.js";import"./SetGraphicalItem-CYrsSIGQ.js";import"./useAnimationId-BtEj36rQ.js";import"./getRadiusAndStrokeWidthFromDot-CpgyNr8P.js";import"./ActiveShapeUtils-SHiIggQV.js";import"./isPlainObject-B44yGdGL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CDjbeOfv.js";import"./Trapezoid-D3spGrIN.js";import"./Sector-CizUgWtz.js";import"./Symbols-BFS1edpX.js";import"./symbol-DXdYs-sB.js";import"./step-CCWyWrm4.js";import"./Curve-HKI06HW2.js";import"./index-DJX1_Qw4.js";import"./ChartSizeDimensions-0tNXvVd7.js";import"./OffsetShower-Cmsq4yeV.js";import"./PlotAreaShower-BWgVdI6o.js";import"./CartesianAxis-CW_epPWP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-D2OZi3HS.js";import"./uniqBy-BAtehLqm.js";import"./iteratee-rXVvmz2W.js";import"./Cross-DMkst_1a.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(k,null)))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(k,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

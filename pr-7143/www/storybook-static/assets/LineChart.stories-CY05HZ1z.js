import{r as s,e}from"./iframe-jjkKyBnh.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{L as i}from"./LineChart-GTwlGnhg.js";import{R as C}from"./arrayEqualityCheck-CUp7G6cL.js";import{L as n}from"./Line-BsmnuUVe.js";import{R as k}from"./RechartsHookInspector-CxT_wKdY.js";import{X as p}from"./XAxis-Bdq6Jw3w.js";import{T as c}from"./Tooltip-mA6HWOri.js";import{p as A}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-JqguxFU2.js";import"./index-BEHJeVcn.js";import"./immer-BbVLmXrm.js";import"./hooks-wocA-lGH.js";import"./axisSelectors-Dd4S0Ceb.js";import"./d3-scale-Ckxg_Ns_.js";import"./zIndexSlice-CuuIJiqa.js";import"./renderedTicksSlice-B60M8aLp.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BCXq_jCV.js";import"./chartDataContext-D_AkUCKZ.js";import"./CategoricalChart-C0mCf7ot.js";import"./resolveDefaultProps-zELNaCXr.js";import"./Layer-Dm-ZljB7.js";import"./ReactUtils-CrwQQyAX.js";import"./Label-BaP8ifBC.js";import"./Text-C_U00kEv.js";import"./DOMUtils-BMT21emC.js";import"./ZIndexLayer-CNnwO4iC.js";import"./ActivePoints-Das5y6E5.js";import"./Dot-BQZVzyoQ.js";import"./types-BzZyKnH8.js";import"./RegisterGraphicalItemId-DhCgr3Sg.js";import"./ErrorBarContext-BqWlziyG.js";import"./GraphicalItemClipPath-CX2YOSCG.js";import"./SetGraphicalItem-CEEkaG-5.js";import"./useAnimationId-XeqIoJ00.js";import"./getRadiusAndStrokeWidthFromDot-FiGNG78A.js";import"./ActiveShapeUtils-g0vfssj-.js";import"./isPlainObject-BGF86Xvm.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-T-u3oWfl.js";import"./Trapezoid-BeD-5DNQ.js";import"./Sector-Cy9ueYzv.js";import"./Symbols-D7PwakqN.js";import"./symbol-iVbFGN4-.js";import"./step-CFbXCSW0.js";import"./Curve-D2x3KFrb.js";import"./index-CJmZG3j5.js";import"./ChartSizeDimensions-CLm1CpLg.js";import"./OffsetShower-n-Td0s15.js";import"./PlotAreaShower-5quEOdpp.js";import"./CartesianAxis-CIGCYBrz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-qOR8Wsad.js";import"./uniqBy-DdvsGrc1.js";import"./iteratee-PTDtPL5V.js";import"./Cross-DGYbWDS1.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(k,null)))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(k,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

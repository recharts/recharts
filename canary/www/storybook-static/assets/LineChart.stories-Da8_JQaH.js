import{r as s,e}from"./iframe-DU-LucVk.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{L as i}from"./LineChart-C3nrvX4j.js";import{R as C}from"./arrayEqualityCheck-CclNUIwX.js";import{L as n}from"./Line-D0rR1HZ1.js";import{R as k}from"./RechartsHookInspector-BEY9qfJh.js";import{X as p}from"./XAxis-NPkkQ63f.js";import{T as c}from"./Tooltip-D49Au06n.js";import{p as A}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BQ8ifATJ.js";import"./index-BvEdvQ3w.js";import"./immer-CeDnDLs7.js";import"./hooks-5DppKLy_.js";import"./axisSelectors-1v6f9L3u.js";import"./d3-scale-s-kDCmvc.js";import"./zIndexSlice-BokCIqI7.js";import"./renderedTicksSlice-CYsmXTCd.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cbq4Hmtt.js";import"./chartDataContext-CG1EXfO5.js";import"./CategoricalChart-I9vscfUJ.js";import"./resolveDefaultProps-B2aHdDhI.js";import"./Layer-8a5GeXWN.js";import"./ReactUtils-Ctv0Vese.js";import"./Label-OGUbf68M.js";import"./Text-CzwymKY5.js";import"./DOMUtils-CWJBrBTl.js";import"./ZIndexLayer-BaiBFLw5.js";import"./ActivePoints-CvZtNNWP.js";import"./Dot-D3cffN2_.js";import"./types-Dgs-vk0Z.js";import"./RegisterGraphicalItemId-CicihkEh.js";import"./ErrorBarContext-D0ejYvv2.js";import"./GraphicalItemClipPath-CL71Q66l.js";import"./SetGraphicalItem-DZHXtodu.js";import"./useAnimationId-CtR34_Zs.js";import"./getRadiusAndStrokeWidthFromDot-DiPRkIfe.js";import"./ActiveShapeUtils-CNQl8MpC.js";import"./isPlainObject-DmZ4Jk-5.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dh8uHokW.js";import"./Trapezoid-C0vmhZZj.js";import"./Sector-DdGN5B7D.js";import"./Symbols-BtQj-4ur.js";import"./symbol-m7w_ZRD-.js";import"./step-CgB13xZG.js";import"./Curve-rk5soVjK.js";import"./index-k3KoyLP9.js";import"./ChartSizeDimensions-ChW5udk0.js";import"./OffsetShower-BWhNcTks.js";import"./PlotAreaShower-9QTURT9p.js";import"./CartesianAxis-xpog4YLf.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-bryqI-pl.js";import"./uniqBy-CFOdKjJ7.js";import"./iteratee-Biu9ujnd.js";import"./Cross-CPgau8IV.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(k,null)))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(k,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

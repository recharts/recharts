import{r as s,e}from"./iframe-CLmjlzb1.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-Buhq3iNJ.js";import{R as C}from"./arrayEqualityCheck-B4wm4mzq.js";import{L as n}from"./Line-DGTUW3Zm.js";import{R as A}from"./RechartsHookInspector-BixZoynz.js";import{X as p}from"./XAxis-BfN6o_IU.js";import{T as c}from"./Tooltip-Bzwo1YGM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cuidzjs6.js";import"./index-Du-W5DOH.js";import"./immer-BRhk69FB.js";import"./hooks-d-SQKimb.js";import"./axisSelectors-BSjiqA5G.js";import"./d3-scale-Cfbd6Yba.js";import"./zIndexSlice-ENrbLBpP.js";import"./renderedTicksSlice-7exySQiY.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BmEkTPS6.js";import"./chartDataContext-8FmNdAi4.js";import"./CategoricalChart-Cd_MTwuC.js";import"./resolveDefaultProps-DfSSEgX9.js";import"./Layer-B8Y-IGwU.js";import"./ReactUtils-D_M8UzUW.js";import"./Label-5j72dgYu.js";import"./Text-yZ4aTas7.js";import"./DOMUtils-BTzSUo1_.js";import"./ZIndexLayer-B_c6eilm.js";import"./ActivePoints-CJhScI-d.js";import"./Dot-CmmvI3p6.js";import"./types-CPZMLz1x.js";import"./RegisterGraphicalItemId-C1ifoo0F.js";import"./ErrorBarContext-CwN8tpsm.js";import"./GraphicalItemClipPath-DB5whV9z.js";import"./SetGraphicalItem-BreTABoz.js";import"./useAnimationId-DS-J4iW4.js";import"./getRadiusAndStrokeWidthFromDot-Dkw_fQYH.js";import"./ActiveShapeUtils-D95D5Icg.js";import"./isPlainObject-VurimMcN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CG_TffJC.js";import"./Trapezoid-Cu-zNPNg.js";import"./Sector-kWP0DhnI.js";import"./Symbols-CXcyzyAh.js";import"./symbol-CD9uivpb.js";import"./step-B08msyNS.js";import"./Curve-C2JnH5yk.js";import"./index-D8lwKlWX.js";import"./ChartSizeDimensions-DPxIvg36.js";import"./OffsetShower-J2qKkSVX.js";import"./PlotAreaShower-BflxX8Fl.js";import"./CartesianAxis-4_WgxG81.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DdZfO3gs.js";import"./uniqBy-C8pbwaZO.js";import"./iteratee-MARHZxta.js";import"./Cross-BuY4bUHr.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

import{u as s,e}from"./iframe-tCDnQpzm.js";import{L as m}from"./LineChartArgs-_mND0tRp.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-DPte-9pC.js";import{L as i}from"./LineChart-kqxaeNZH.js";import{g as C}from"./arrayEqualityCheck-BqXouEks.js";import{L as n}from"./Line-WG_QdsGX.js";import{R as A}from"./RechartsHookInspector-BX_0sbG1.js";import{X as p}from"./XAxis-DlOxqtL0.js";import{T as c}from"./Tooltip-BV3BhmK2.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DYnmCVjv.js";import"./index-CHnjtEz6.js";import"./immer-BCZknwAa.js";import"./hooks-WR0dNOnI.js";import"./axisSelectors-Bvp9z5f_.js";import"./d3-scale-QLPPlH86.js";import"./zIndexSlice-1EM6QKoG.js";import"./renderedTicksSlice-CYtMAut8.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DTQQkyNB.js";import"./chartDataContext-D8A6GgIn.js";import"./CategoricalChart-9BDeQmwn.js";import"./resolveDefaultProps-D6_84qa3.js";import"./Curve-CVwA5fsZ.js";import"./types-vkQzCy74.js";import"./step-D_7jw6OV.js";import"./path-DyVhHtw_.js";import"./Layer-DztRGY_N.js";import"./ReactUtils-C9ZM0Mib.js";import"./Label--ydmIzGM.js";import"./Text-BLCv1zgM.js";import"./DOMUtils-Dbb4XIEW.js";import"./ZIndexLayer-DKwmZsVD.js";import"./ActivePoints-CleYGUIG.js";import"./Dot-ebcJneEk.js";import"./RegisterGraphicalItemId-D4uIuwhl.js";import"./ErrorBarContext-NilxMudN.js";import"./GraphicalItemClipPath-BzZEJgMk.js";import"./SetGraphicalItem-DtCToAmA.js";import"./useAnimationId-DsF55F49.js";import"./getRadiusAndStrokeWidthFromDot-CYyWgj3n.js";import"./ActiveShapeUtils-fioPLRDw.js";import"./isPlainObject-DxYEqwrD.js";import"./isPlainObject-BSutPv-K.js";import"./index-CXC3XglB.js";import"./ChartSizeDimensions-CSUyRejl.js";import"./OffsetShower-J7wedS7V.js";import"./PlotAreaShower-DWpQD4iq.js";import"./CartesianAxis-DhIcmypy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CFSLqz7e.js";import"./uniqBy-DQiWu0tK.js";import"./iteratee-0H7YfotS.js";import"./Cross-DA2G4nKJ.js";import"./Rectangle-BJE-jfve.js";import"./Sector-CivuK_iF.js";const Se={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const we=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,we as __namedExportsOrder,Se as default};

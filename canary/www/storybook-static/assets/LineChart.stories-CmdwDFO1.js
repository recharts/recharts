import{r as s,e}from"./iframe-DUJvjQLt.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-BxHlyJPM.js";import{R as C}from"./arrayEqualityCheck-D73e69Gl.js";import{L as n}from"./Line-CKYIKoib.js";import{R as A}from"./RechartsHookInspector-DrzYioyl.js";import{X as p}from"./XAxis-CDduZbSd.js";import{T as c}from"./Tooltip-Bjcvf23I.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CgMQObc0.js";import"./index-5w8w8rw4.js";import"./immer-5FyrIQvG.js";import"./hooks-yQB_dM7s.js";import"./axisSelectors-sUoMIbfp.js";import"./d3-scale-DeFOwVvR.js";import"./zIndexSlice-Bkmt5zDA.js";import"./renderedTicksSlice-CvJNCVvu.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DJ5W1dUn.js";import"./chartDataContext-BQu7UVSx.js";import"./CategoricalChart-Fz_Uxhkr.js";import"./resolveDefaultProps-8ySwU0EB.js";import"./Layer-CllgDPqI.js";import"./ReactUtils-t-sHadM3.js";import"./Label-DTyf3h_b.js";import"./Text-xsfGunAq.js";import"./DOMUtils-DjWXT55X.js";import"./ZIndexLayer-CKSncrZg.js";import"./ActivePoints-B-iqIfRa.js";import"./Dot-CMPDiPBa.js";import"./types-CDGURZBi.js";import"./RegisterGraphicalItemId-D72lmnH7.js";import"./ErrorBarContext-DyOg8xi-.js";import"./GraphicalItemClipPath-CkZzGh0E.js";import"./SetGraphicalItem-vFCTqo9Z.js";import"./useAnimationId-Dw_qoDvw.js";import"./getRadiusAndStrokeWidthFromDot-BjM5ou8k.js";import"./ActiveShapeUtils-BpbAKqrS.js";import"./isPlainObject-Dz-OvCgD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BxgoD1Qw.js";import"./Trapezoid-6uim8m8Z.js";import"./Sector-CpvLellE.js";import"./Symbols-uJbjONwG.js";import"./symbol-Dyd8e6t_.js";import"./step-Cx__dv2e.js";import"./Curve-VbNPleyE.js";import"./index-v5p6oAve.js";import"./ChartSizeDimensions-BX1JxuVN.js";import"./OffsetShower-CNz_UBJI.js";import"./PlotAreaShower-C2224vVQ.js";import"./CartesianAxis-D5lD8t2m.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CfhbCAoH.js";import"./uniqBy-CChSEAsS.js";import"./iteratee-DUBFzJp0.js";import"./Cross-BicExKUE.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

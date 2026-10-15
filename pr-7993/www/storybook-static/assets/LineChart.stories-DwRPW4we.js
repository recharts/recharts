import{r as i,R as e}from"./iframe-Bcbj5Yvj.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-BqaHlQW7.js";import{R as C}from"./zIndexSlice-BbtTmnct.js";import{L as s}from"./Line-Ba2WmDpW.js";import{X as p}from"./XAxis-BGoibDnX.js";import{T as c}from"./Tooltip-DImzhYnu.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-JEGbB27w.js";import"./resolveDefaultProps-C9cavZl8.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Bf3Ac7bJ.js";import"./throttle-1wXsTVJX.js";import"./index-DsYIiLvH.js";import"./index-G8y4OPnu.js";import"./isWellBehavedNumber-Blk-fUEv.js";import"./d3-scale-CzxKj8Wi.js";import"./index-8ad9jMOO.js";import"./index-Dr8QNULI.js";import"./renderedTicksSlice-BgIJtUaM.js";import"./index-D1z8RJDy.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-63QBJCK9.js";import"./chartDataContext-C1nJ8SNU.js";import"./CategoricalChart-8MHh-in3.js";import"./Layer-DpGUUMWf.js";import"./Curve-DQG70g8F.js";import"./types-CJ1XacmQ.js";import"./step-BVuNFWjf.js";import"./path-DyVhHtw_.js";import"./activeStyles-MDW24FXq.js";import"./Label-K9FSTyve.js";import"./Text-DXJV-9ud.js";import"./pageBackground-BH8UHhL6.js";import"./useId-B-rxwJkk.js";import"./useBackwardsCompatibleTheme-5iZeYqfO.js";import"./ZIndexLayer-CyylKyYl.js";import"./useAnimationId-Bk7rAd-H.js";import"./dataEntryStyles-BUYkc4Iu.js";import"./ActivePoints-Byjchu2B.js";import"./Dot-4JIe_qSe.js";import"./ErrorBarContext-DDwPy9nt.js";import"./GraphicalItemClipPath-Ch9DqqLY.js";import"./SetGraphicalItem-a6aphxRl.js";import"./getRadiusAndStrokeWidthFromDot-r0umV2Vo.js";import"./ActiveShapeUtils-C7GChdzB.js";import"./useEffectiveDataKey-D3HkyWZy.js";import"./CartesianAxis-D8X_N5Aa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-bqrOzjTl.js";import"./uniqBy-DWa61rJJ.js";import"./iteratee-BELjj_Tc.js";import"./Cross-Bcp7i6Mp.js";import"./Rectangle-C1N2Ym6v.js";import"./util-Dxo8gN5i.js";import"./Sector-D8HfX_lG.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,v,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};export{r as API,n as SynchronizedTooltip,Ke as __namedExportsOrder,we as default};

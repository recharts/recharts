import{r as i,R as e}from"./iframe-CUSfJVGy.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-Dh8JSBmy.js";import{R as C}from"./zIndexSlice-DHvlitAO.js";import{L as s}from"./Line-BkUDmjMa.js";import{X as p}from"./XAxis-93B4Nx5D.js";import{T as c}from"./Tooltip-CNt3xiQz.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DAlfJkzI.js";import"./resolveDefaultProps-eB2rdyhX.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Ba-uagI8.js";import"./throttle-Dw_3NXl9.js";import"./index-DM8acuEY.js";import"./index-BjrjF_sl.js";import"./isWellBehavedNumber-BlhXGToZ.js";import"./d3-scale-B5gueGek.js";import"./index-cWSuCV9A.js";import"./index-aMAZnXxU.js";import"./renderedTicksSlice-DTIkQgMV.js";import"./index-BHb_Ppqj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CYmwXWF8.js";import"./chartDataContext-C8S7uA6r.js";import"./CategoricalChart-CCLAUHt0.js";import"./Layer-D3Rs15Eb.js";import"./Curve-CVDIysdN.js";import"./types-CPjFjIqL.js";import"./step-DHG-DUf8.js";import"./path-DyVhHtw_.js";import"./activeStyles-D0GvvJcq.js";import"./Label-CA5pDLh0.js";import"./Text-D1HNj6gm.js";import"./pageBackground-Cedpup01.js";import"./useId-KB6j76rh.js";import"./useBackwardsCompatibleTheme-C4dzzNKp.js";import"./ZIndexLayer-DS-kTeIC.js";import"./dataEntryStyles-DaqIqY42.js";import"./useAnimationId-5nMvsn6t.js";import"./ActivePoints-DGPkFg2Z.js";import"./Dot-CuTOnkdw.js";import"./RegisterGraphicalItemId-Brr1oXEa.js";import"./ErrorBarContext-B4ne9aHr.js";import"./SetGraphicalItem-C-ccX4yH.js";import"./getRadiusAndStrokeWidthFromDot-D3hEZZtv.js";import"./ActiveShapeUtils-JeO-QszI.js";import"./useEffectiveDataKey-CoJRTSM6.js";import"./CartesianAxis-DdmQm0Mb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DG-NqV_R.js";import"./uniqBy-_sTXg2vc.js";import"./iteratee-BWlFYs6V.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BlnG8QnV.js";import"./Rectangle-vSbPEONY.js";import"./util-Dxo8gN5i.js";import"./Sector-C18YqcZp.js";const Ke={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Oe=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};export{r as API,n as SynchronizedTooltip,Oe as __namedExportsOrder,Ke as default};

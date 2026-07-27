import{r as s,R as e}from"./iframe-9izd3D9f.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-BmKNyQkU.js";import{R as C}from"./zIndexSlice-j8GW4H6F.js";import{L as n}from"./Line-DeweEXxf.js";import{X as p}from"./XAxis--s8YS1Wl.js";import{T as c}from"./Tooltip-D2A1sLSM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CpTAS-BM.js";import"./index-DrKXWdQ6.js";import"./index-D25GhdX2.js";import"./index-DfNj7uF8.js";import"./index-QeEXQkn5.js";import"./throttle-Dy12ptOd.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-xsvpNcHR.js";import"./axisSelectors-C_YuJB8n.js";import"./resolveDefaultProps-CJPuqJ9q.js";import"./isWellBehavedNumber-Dt2_Y5DC.js";import"./d3-scale-592QtAt9.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cdk7-_gT.js";import"./chartDataContext-D7Iq0aTs.js";import"./CategoricalChart-B8CDnPPF.js";import"./Layer-CGfY9rzU.js";import"./Curve-CwmLK7S7.js";import"./types-DZJVpBfQ.js";import"./step-BVbRt37Q.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BaOOJr-i.js";import"./Label-DH_iQkHv.js";import"./Text-DrtU0dSh.js";import"./DOMUtils-BT3FOC_T.js";import"./ZIndexLayer-CbN30hBP.js";import"./useAnimationId-DwScawE-.js";import"./ActivePoints-DABmwt2C.js";import"./Dot-BOLG4WLO.js";import"./RegisterGraphicalItemId-DMscoraw.js";import"./ErrorBarContext-BIj0xSPV.js";import"./GraphicalItemClipPath-DPeQpV-c.js";import"./SetGraphicalItem-DzCkGHMg.js";import"./getRadiusAndStrokeWidthFromDot-BjpuMrzG.js";import"./ActiveShapeUtils-BG6vmKAa.js";import"./CartesianAxis-C-mmkXWm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CsvLvw9-.js";import"./isBuffer-Crkas5dz.js";import"./useElementOffset-BkW_M-s3.js";import"./uniqBy-BUkiiJvI.js";import"./iteratee-BCGyVx9n.js";import"./Cross-c7J_UcAh.js";import"./Rectangle-CFwhI2o-.js";import"./util-Dxo8gN5i.js";import"./Sector-CjIuMRVG.js";const Be={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,v,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Ie=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Ie as __namedExportsOrder,Be as default};

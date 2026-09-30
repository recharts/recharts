import{r as i,R as e}from"./iframe-Qmct8dPL.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-CvNXxjFZ.js";import{R as C}from"./zIndexSlice-DXIqEK91.js";import{L as s}from"./Line-B9HMr-R-.js";import{X as p}from"./XAxis-9J-zU-e3.js";import{T as c}from"./Tooltip-DDk2MZ0p.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CA8gYP8X.js";import"./resolveDefaultProps-1ACdwYcX.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DQj7dDoX.js";import"./throttle-OLGJV50e.js";import"./index-BiNiAG-8.js";import"./index-Y-_D5N0e.js";import"./isWellBehavedNumber-B8_5eiwl.js";import"./d3-scale-BxubizPM.js";import"./index-JkwU9wUv.js";import"./index-Cl8DEeo-.js";import"./renderedTicksSlice-C_XZvXHS.js";import"./index-yzCwrxwp.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BKFAhLSe.js";import"./chartDataContext-phyyW0XT.js";import"./CategoricalChart-kEDlcm2-.js";import"./Layer-DivV_9FZ.js";import"./Curve-BWSQwgQs.js";import"./types-R1YvGwXP.js";import"./step-DllQQmGx.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bqna9ZlZ.js";import"./Label-B1HxkUUU.js";import"./Text-CqCSaO_p.js";import"./DOMUtils-CVrddbmH.js";import"./useId-BXFGZ7WB.js";import"./useBackwardsCompatibleTheme-BkhTNX9-.js";import"./ZIndexLayer-1SjAyyP_.js";import"./useAnimationId-DreFRpzI.js";import"./ActivePoints-Bxhr0cL_.js";import"./Dot-CegM_aDK.js";import"./RegisterGraphicalItemId-xOabcHeQ.js";import"./ErrorBarContext-C9Rble42.js";import"./GraphicalItemClipPath-B4CCgAUu.js";import"./SetGraphicalItem-Dm7pFyfQ.js";import"./getRadiusAndStrokeWidthFromDot-BXmHQhOs.js";import"./ActiveShapeUtils-QE8CXMAG.js";import"./useGraphicalItemIdentity-BCZesqSu.js";import"./CartesianAxis-BRUXhqMv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-CphcGvvP.js";import"./uniqBy--DW5GTcw.js";import"./iteratee-HAiNKtTX.js";import"./Cross-D-sDHqe0.js";import"./Rectangle-DZ8eY7t4.js";import"./util-Dxo8gN5i.js";import"./Sector-urLQQSN0.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

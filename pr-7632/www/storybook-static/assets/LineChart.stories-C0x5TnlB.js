import{r as s,R as e}from"./iframe-DYQm5pDK.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-CQnyySwh.js";import{R as C}from"./zIndexSlice-CJYweGKN.js";import{L as n}from"./Line-B1Oexf9c.js";import{X as p}from"./XAxis-CZY80vys.js";import{T as c}from"./Tooltip-BL26R0Fe.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-gRpL_xKU.js";import"./index-B8vof7O1.js";import"./index-Dvf4xz5M.js";import"./index-D9641aDn.js";import"./index-CSHdKH08.js";import"./throttle-Ctp9_qVa.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CSPBywkg.js";import"./resolveDefaultProps-V2XetKb4.js";import"./isWellBehavedNumber-Db1VnkRV.js";import"./d3-scale-CuSyjdwU.js";import"./renderedTicksSlice-C_bKCtit.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-1bq5gRk4.js";import"./chartDataContext-Dp_kX4bj.js";import"./CategoricalChart-DNCs6fuc.js";import"./Layer-BE5fWip9.js";import"./Curve-1QDxrN5k.js";import"./types-DMj2PdKG.js";import"./step-CyVWmh7T.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CRKAM_Pk.js";import"./Label-2fJkWQrM.js";import"./Text-BBWNQ9ND.js";import"./DOMUtils-DI2U8hPw.js";import"./ZIndexLayer-CYpXSJgQ.js";import"./useAnimationId-Dfuzx8c4.js";import"./ActivePoints-BAfWfPzl.js";import"./Dot-vrg5zOK2.js";import"./RegisterGraphicalItemId-CoopfHz0.js";import"./ErrorBarContext-BW9yLQD5.js";import"./graphicalItemIdentity-c8N24HJ4.js";import"./SetGraphicalItem-F1NAG8Fb.js";import"./getRadiusAndStrokeWidthFromDot-C6IhQk60.js";import"./ActiveShapeUtils-DDuLsW0U.js";import"./RechartsThemeContext-BL-IAPcg.js";import"./CartesianAxis-DZAfkwU8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-DeY_vqj5.js";import"./uniqBy-CK7b43Ay.js";import"./iteratee-Daur8jM2.js";import"./Cross-CUYn565i.js";import"./Rectangle-C2cnIGYc.js";import"./util-Dxo8gN5i.js";import"./Sector-D1BdjjPU.js";const Be={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

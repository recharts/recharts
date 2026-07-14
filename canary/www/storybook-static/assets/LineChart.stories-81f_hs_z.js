import{r as s,R as e}from"./iframe-CoZYBKIX.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-lrBhOQay.js";import{R as C}from"./zIndexSlice-2wRK4kMu.js";import{L as n}from"./Line-D10QsT7G.js";import{X as p}from"./XAxis-BYrKdn3j.js";import{T as c}from"./Tooltip-D3QVER9o.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Chafq55k.js";import"./index-8vVHWDox.js";import"./index-CB7yOKq2.js";import"./index-CxqEAs70.js";import"./index-DbtoquVJ.js";import"./throttle-DTjNB_wn.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BJztigH5.js";import"./axisSelectors-Bk60vGia.js";import"./resolveDefaultProps-CXWmRWxD.js";import"./isWellBehavedNumber-DPie-IPs.js";import"./d3-scale-Bs_mySfl.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DoniaHV0.js";import"./chartDataContext-Cx3CX6pd.js";import"./CategoricalChart-DEIC5a6b.js";import"./Layer-Do7uuXp2.js";import"./Curve-Cg7tsFL-.js";import"./types-DlqgPqNT.js";import"./step-C4ZbFa_I.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-OdNYlxxq.js";import"./Label-B5Sw4cWo.js";import"./Text-Br2KMW9j.js";import"./DOMUtils-B_OLo7Kh.js";import"./ZIndexLayer-Cub30BGV.js";import"./useAnimationId-C7atvuRl.js";import"./ActivePoints-DpHWAW0C.js";import"./Dot-C3ifhvT9.js";import"./RegisterGraphicalItemId-BhxVKnq7.js";import"./ErrorBarContext-D9rx9CvF.js";import"./GraphicalItemClipPath-BqDFfLzv.js";import"./SetGraphicalItem-Cm5RMzg0.js";import"./getRadiusAndStrokeWidthFromDot-J7tXgy4t.js";import"./ActiveShapeUtils-Is-vymDi.js";import"./CartesianAxis-CSNiqDgA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-6wbHTWe8.js";import"./uniqBy-CLYAyW1w.js";import"./iteratee-DfrVONCs.js";import"./Cross-BKoJ5Aes.js";import"./Rectangle-B4AWbI_f.js";import"./util-Dxo8gN5i.js";import"./Sector-Bhwh7YeU.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Te=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Te as __namedExportsOrder,Ee as default};

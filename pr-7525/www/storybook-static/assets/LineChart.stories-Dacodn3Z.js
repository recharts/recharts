import{r as s,R as e}from"./iframe-D1iFT1mY.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-SK-OI_nD.js";import{R as C}from"./zIndexSlice-B6TgBQrN.js";import{L as n}from"./Line-CqxTaPcW.js";import{X as p}from"./XAxis-zY-Ami2t.js";import{T as c}from"./Tooltip-D59ySJwP.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BlluAAtZ.js";import"./index-DvHXLyo3.js";import"./index-BBsSvonK.js";import"./index-DpDzEI56.js";import"./index-rDbSE8GI.js";import"./throttle-CzPbu-Ix.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-Bf_HC71D.js";import"./axisSelectors-CxzN54IZ.js";import"./resolveDefaultProps-BMIUma5c.js";import"./isWellBehavedNumber-Du8M38U_.js";import"./d3-scale-DpibCxtP.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D2tBODZW.js";import"./chartDataContext-CYm6jQFo.js";import"./CategoricalChart-D5N5XyOw.js";import"./Layer-FA9hcod8.js";import"./Curve-DI4m1DQG.js";import"./types-DXiAmoHC.js";import"./step-Bh5OwxZ-.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-LcNNhy-w.js";import"./Label-DT6YPp8b.js";import"./Text-J63_ff7W.js";import"./DOMUtils-BANERqy9.js";import"./ZIndexLayer-8c0NuDUK.js";import"./useAnimationId-CoQh4DtZ.js";import"./ActivePoints-ukxKvv9l.js";import"./Dot-CXZOPICM.js";import"./RegisterGraphicalItemId-DRA4KH43.js";import"./ErrorBarContext-mOiZNw9f.js";import"./GraphicalItemClipPath-DfjPk2Kq.js";import"./SetGraphicalItem-B34_j8RK.js";import"./getRadiusAndStrokeWidthFromDot-BnvNbbpg.js";import"./ActiveShapeUtils-BKYrsUZj.js";import"./CartesianAxis-HsnRG105.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-BL3e6iYA.js";import"./uniqBy-VJyTBDYH.js";import"./iteratee-XPzf7EjH.js";import"./Cross-DzXfERyt.js";import"./Rectangle-V-255kdt.js";import"./util-Dxo8gN5i.js";import"./Sector-CRPzSp_9.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

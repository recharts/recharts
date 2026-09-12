import{r as i,R as e}from"./iframe-BS2EKBCb.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-C7UUkWTT.js";import{R as C}from"./zIndexSlice-DgCHBsPF.js";import{L as s}from"./Line-Cy9qkYsp.js";import{X as p}from"./XAxis-BjDgsza5.js";import{T as c}from"./Tooltip-DLem5YaG.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BMyz7hVE.js";import"./resolveDefaultProps-TcviW97c.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CyWNF9Af.js";import"./throttle-N5ne0m8p.js";import"./index-DqlRD72w.js";import"./index-CV_3LUuL.js";import"./isWellBehavedNumber-DC3UycXE.js";import"./d3-scale-Weld_qs_.js";import"./index-Bzi9FVcX.js";import"./index-CzKnnb1A.js";import"./renderedTicksSlice-F9VbCDyF.js";import"./index-D5fLjVxw.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-qCzL_6hu.js";import"./chartDataContext-CO5JDURO.js";import"./CategoricalChart-C5K9SC6Q.js";import"./Layer-GWt7eqqf.js";import"./Curve-B-5JJSds.js";import"./types-BQYuG1d5.js";import"./step-C_EYK6G6.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CyRMeM58.js";import"./Label-DXa6-y8E.js";import"./Text-mzbpVVI1.js";import"./DOMUtils-WOBZE1NB.js";import"./useId-caAF7v61.js";import"./useBackwardsCompatibleTheme-qcvR2xn0.js";import"./ZIndexLayer-B7lLwLGi.js";import"./useAnimationId-DT-PTug0.js";import"./ActivePoints-Cjbzc0M8.js";import"./Dot-DU7ZcKmK.js";import"./RegisterGraphicalItemId-B1R9LLxS.js";import"./ErrorBarContext-Cw8TKYFj.js";import"./GraphicalItemClipPath-1wc1zrjW.js";import"./SetGraphicalItem-0zivWSPx.js";import"./getRadiusAndStrokeWidthFromDot-B5PCEdLb.js";import"./ActiveShapeUtils-ZcrlVc5g.js";import"./useGraphicalItemIdentity-D12-TlkG.js";import"./CartesianAxis-CKj7lC_q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-4jPhR6y6.js";import"./uniqBy-Cq54zJ4p.js";import"./iteratee-BrmxT3n3.js";import"./Cross-Bo_a7FVO.js";import"./Rectangle-DEzYnzUI.js";import"./util-Dxo8gN5i.js";import"./Sector-D8P6kuRr.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

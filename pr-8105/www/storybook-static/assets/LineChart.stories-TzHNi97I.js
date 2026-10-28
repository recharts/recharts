import{r as i,R as e}from"./iframe-BMnEk6rk.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-sfspemXo.js";import{R as C}from"./zIndexSlice-AHK2lLDY.js";import{L as s}from"./Line-uhUVV2ZJ.js";import{X as p}from"./XAxis-DO8MMAbO.js";import{T as c}from"./Tooltip-CdRDsB00.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D4g7WfzD.js";import"./resolveDefaultProps-B_QljJZX.js";import"./get-cF5BDHN6.js";import"./axisSelectors-p5JtpZwX.js";import"./throttle-BLJmRI7W.js";import"./index-lkPNhlVs.js";import"./index-Bttv8G3u.js";import"./polarAxisSelectors-CeZI25QH.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CFf5tOkL.js";import"./index-DVw0VuQJ.js";import"./index-Bk611d1z.js";import"./renderedTicksSlice-CBxoq99O.js";import"./index-Cs2FdYvJ.js";import"./CartesianChart-D8VYP9Px.js";import"./ZIndexPortal-BccU1gyk.js";import"./CategoricalChart-CejU0SpF.js";import"./Layer-DhQvAzDq.js";import"./Curve-D8kPdRuj.js";import"./types-BEqbC_4a.js";import"./step-OCTxecjD.js";import"./path-DyVhHtw_.js";import"./LabelList-Dd3JyrGq.js";import"./Label-h8wQzOus.js";import"./Text-C8Qyn2EQ.js";import"./pageBackground-CtZK7idk.js";import"./ZIndexLayer-B5NKkV0N.js";import"./ActivePoints-BPIJeIuh.js";import"./Dot-BOMHkylR.js";import"./activeStyles-DlaO21qO.js";import"./useAnimationId-Ctda-hFk.js";import"./dataEntryStyles-DegCLzhf.js";import"./Symbols-H6KF7Fzl.js";import"./symbol-BrVg2837.js";import"./ErrorBarContext-dq2106Y0.js";import"./SetGraphicalItem-C1JNOq53.js";import"./getRadiusAndStrokeWidthFromDot-BNTnGfox.js";import"./ActiveShapeUtils-BwTzV5YZ.js";import"./useEffectiveDataKey-DQstj3az.js";import"./CartesianAxis-1xDTwGjL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-CKZUIDIC.js";import"./uniqBy-m6py-FT2.js";import"./iteratee-Dc85xDQN.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CkQASEDQ.js";import"./Rectangle-CyQcxgx5.js";import"./util-Dxo8gN5i.js";import"./Sector-GHL6DImZ.js";const Ke={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Oe=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

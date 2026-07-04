import{r as s,R as e}from"./iframe-DD3MNlJs.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-DvVotjpu.js";import{R as C}from"./zIndexSlice-DsPtdaG-.js";import{L as n}from"./Line-C4g4hOlz.js";import{X as p}from"./XAxis-C5LFfJlv.js";import{T as c}from"./Tooltip-Cbit545I.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CCnqh_-x.js";import"./index-DseUKmqi.js";import"./index-D7phJECN.js";import"./index-Bck27UYR.js";import"./index-a_wokTdP.js";import"./throttle-BsgVdVzc.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BfcmamU7.js";import"./axisSelectors-BHK7QjqO.js";import"./resolveDefaultProps-Bl223uSE.js";import"./isWellBehavedNumber-CNMhuHyW.js";import"./d3-scale-yWlQ4_Nx.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-aRdig7-B.js";import"./chartDataContext-B7qXvLbV.js";import"./CategoricalChart-Cq7n2KtT.js";import"./Layer-BSwpDfMb.js";import"./Curve-Bmu0g7Ld.js";import"./types-3SXpu3DM.js";import"./step-C2Nk1uI6.js";import"./path-DyVhHtw_.js";import"./AnimatedItems--KiCkiyG.js";import"./Label-CTgAmEuq.js";import"./Text-BWwrC4eC.js";import"./DOMUtils-CKULAiMw.js";import"./ZIndexLayer-BIp4crEt.js";import"./useAnimationId-3wwsxOl9.js";import"./ActivePoints-DIeqY30s.js";import"./Dot-M9tiGPsp.js";import"./RegisterGraphicalItemId-UFa7fX9c.js";import"./ErrorBarContext-C82oMdbu.js";import"./GraphicalItemClipPath-NC5NbT5H.js";import"./SetGraphicalItem-BanwGypR.js";import"./getRadiusAndStrokeWidthFromDot-bkIsgxom.js";import"./ActiveShapeUtils-DNZIetEU.js";import"./CartesianAxis-BeN5FwRC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-DJdMJ0L5.js";import"./uniqBy-DHEUFyg1.js";import"./iteratee-D4ErcGbL.js";import"./Cross-QArI-PU7.js";import"./Rectangle-BemF6WzX.js";import"./util-Dxo8gN5i.js";import"./Sector-CPHcOnas.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

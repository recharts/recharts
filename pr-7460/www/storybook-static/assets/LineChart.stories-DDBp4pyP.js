import{r as s,R as e}from"./iframe-Bwb61Kb3.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-Do6cJwgo.js";import{R as C}from"./zIndexSlice-D31yQesP.js";import{L as n}from"./Line-C4AjvgS0.js";import{X as p}from"./XAxis-CSW3SlTU.js";import{T as c}from"./Tooltip-CsFTpfYi.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BmkLmt4T.js";import"./index-VoBgttoT.js";import"./index-CQ8V2YYj.js";import"./index-u4qnc4RM.js";import"./index-DHxQl28E.js";import"./immer-_NZCx9ap.js";import"./get-Cnvgfe2T.js";import"./renderedTicksSlice-DltxEF0x.js";import"./axisSelectors-C6KxvASB.js";import"./d3-scale-jv5Gnb2-.js";import"./resolveDefaultProps-BSJiJTDh.js";import"./isWellBehavedNumber-BUfCnJUB.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BNE4fepl.js";import"./chartDataContext-D41xMC5d.js";import"./CategoricalChart-BUwoY-M8.js";import"./Layer-Ci9WruQM.js";import"./Curve-BGl8TuYV.js";import"./types-Bi-bjjeC.js";import"./step-CnKejACU.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-4rj5S85S.js";import"./Label-C3p-lZQP.js";import"./Text-DNg8TFYr.js";import"./DOMUtils-ChqDP5B4.js";import"./ZIndexLayer-Djnma_X0.js";import"./useAnimationId-h0tb0wwo.js";import"./ActivePoints-oLE2SAgh.js";import"./Dot-Bt6enifh.js";import"./RegisterGraphicalItemId-BzHAnQiR.js";import"./ErrorBarContext-CyOyQ4I7.js";import"./GraphicalItemClipPath-CxkydB3y.js";import"./SetGraphicalItem-BRIRFn2y.js";import"./getRadiusAndStrokeWidthFromDot-CF1gEAgf.js";import"./ActiveShapeUtils-ZkpQ4WD_.js";import"./CartesianAxis-BPlmGRVp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-ux3wQbfq.js";import"./uniqBy-CdjoT2zh.js";import"./iteratee-BFWaDkBd.js";import"./Cross-BaVkOzj0.js";import"./Rectangle-CMlDVrj7.js";import"./util-Dxo8gN5i.js";import"./Sector-CQFUYPvT.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

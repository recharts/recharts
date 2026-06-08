import{r as s,R as e}from"./iframe-8lQPdWqg.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-D59Xp5xh.js";import{R as C}from"./zIndexSlice-HgvYxHxO.js";import{L as n}from"./Line-DQbvyftM.js";import{X as p}from"./XAxis-DJEDKgVX.js";import{T as c}from"./Tooltip-C7ZXpw4h.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-1T0MVTTa.js";import"./index-4GPQXHZz.js";import"./index-DC8gB5sz.js";import"./index-DDpCqwLC.js";import"./index-DuAs5Bye.js";import"./immer-BzJ0g7On.js";import"./get-BByPkrE2.js";import"./renderedTicksSlice-BULVvGQu.js";import"./axisSelectors-6HnY6kw7.js";import"./d3-scale-CBB0hoc6.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-D5naey2E.js";import"./isWellBehavedNumber-Bo5Fj-TS.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BwVyT9hr.js";import"./chartDataContext-p8mU6nY6.js";import"./CategoricalChart-DXrGsRNK.js";import"./Layer-CDc8atAP.js";import"./Curve-bBnKBK2X.js";import"./types-CT--YnpL.js";import"./step-BSoAUg6l.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DC4nP9_V.js";import"./Label-Dm0B15Tp.js";import"./Text-B197qhYG.js";import"./DOMUtils-BTKUKMTR.js";import"./ZIndexLayer-CBi4-krB.js";import"./useAnimationId-Bv0dv7sa.js";import"./ActivePoints-CO3DAqSg.js";import"./Dot-Bl-weaMj.js";import"./RegisterGraphicalItemId-CXVUtMmc.js";import"./ErrorBarContext-B402Fsm3.js";import"./GraphicalItemClipPath-DqeRAZts.js";import"./SetGraphicalItem-BjZEdkKC.js";import"./getRadiusAndStrokeWidthFromDot-CgN7yRoc.js";import"./ActiveShapeUtils-BLPRWSBX.js";import"./CartesianAxis-DwSWDszA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-BrKF9R5o.js";import"./uniqBy-CjCz0Q6p.js";import"./iteratee-Db3NWcbd.js";import"./Cross-D5O4BVdp.js";import"./Rectangle-BOIggd48.js";import"./Sector-ChdwTptZ.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

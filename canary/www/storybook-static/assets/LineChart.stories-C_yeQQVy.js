import{r as s,R as e}from"./iframe-D6azDvqV.js";import{L as n}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-BFWY5ZgQ.js";import{R as C}from"./zIndexSlice-CJI37Eji.js";import{L as m}from"./Line-DXVG3ibe.js";import{X as p}from"./XAxis-Cf0m1xXe.js";import{T as c}from"./Tooltip-DlLeUOLM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CvaooULl.js";import"./index-8WeBRwf8.js";import"./index-CdRGzAoJ.js";import"./index-De2T6Rdx.js";import"./index-CHbhJf8u.js";import"./throttle-9sEg-owe.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Cuma3wLU.js";import"./resolveDefaultProps-MMJ4Hspi.js";import"./isWellBehavedNumber-zgmweQfq.js";import"./d3-scale-BukzO1yu.js";import"./renderedTicksSlice-CP9ELeUi.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DKfnJK9b.js";import"./chartDataContext-E0nEwP5U.js";import"./CategoricalChart-BwNlWuS2.js";import"./Layer-Dd-QkUnw.js";import"./Curve-BtvAXlb-.js";import"./types-ArXcJt3v.js";import"./step-BjTVn7hc.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CFHSF17T.js";import"./Label-Bq-FSxS9.js";import"./Text-7Emw6cxV.js";import"./DOMUtils-ChR8PpsJ.js";import"./useId-D_J3zHys.js";import"./useBackwardsCompatibleTheme-Btt6Zxb8.js";import"./ZIndexLayer-BMP0BbGV.js";import"./useAnimationId-B0HxjIs3.js";import"./ActivePoints-D_5kSOug.js";import"./Dot-DipyiptT.js";import"./RegisterGraphicalItemId-utzXF_HC.js";import"./ErrorBarContext-CS85xpKd.js";import"./GraphicalItemClipPath-CEHJTCek.js";import"./SetGraphicalItem-CIh432wm.js";import"./getRadiusAndStrokeWidthFromDot-D9uGtCD-.js";import"./ActiveShapeUtils-nknSwnl4.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-CnIKHaJW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-rfYS5NLv.js";import"./uniqBy-Bxq63F-T.js";import"./iteratee-CnoSjSAp.js";import"./Cross-CIiy--iG.js";import"./Rectangle-D0LhkaJ7.js";import"./util-Dxo8gN5i.js";import"./Sector-Ck0QgXZH.js";const Se={argTypes:n,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(m,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(n),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(m,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(m,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(n),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const we=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,we as __namedExportsOrder,Se as default};

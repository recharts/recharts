import{r as s,R as e}from"./iframe-DR9JYvo9.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-Crnz8YqA.js";import{R as C}from"./zIndexSlice-C8us_33i.js";import{L as n}from"./Line-4UiTT5-r.js";import{X as p}from"./XAxis-CkTBv7Vq.js";import{T as c}from"./Tooltip-bHZNy_a0.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-xGluos2C.js";import"./index-k7j0Xumv.js";import"./index-CU_PZZsV.js";import"./index-BSI6txHD.js";import"./index-DDKROPpY.js";import"./immer-BibliqvJ.js";import"./get-cu4HmN_G.js";import"./renderedTicksSlice-CyVH_MQq.js";import"./axisSelectors-DGVKCopH.js";import"./d3-scale-L0XByWhe.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-BYvz8ioJ.js";import"./isWellBehavedNumber-CoRQ5I_Q.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BZ37_3cP.js";import"./chartDataContext-CejwtDPv.js";import"./CategoricalChart-BpqxHQTK.js";import"./Layer-BDZfdfVu.js";import"./Curve-xdfXeJb-.js";import"./types-C_DqPfQs.js";import"./step-CM9yBmc1.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DwCxTPVO.js";import"./Label-De6_no0_.js";import"./Text-DBYgVn99.js";import"./DOMUtils-Bi5BI6KA.js";import"./ZIndexLayer-BgzJVSii.js";import"./useAnimationId-BlaQudXH.js";import"./ActivePoints-CY5d9C2o.js";import"./Dot-CdELZcZx.js";import"./RegisterGraphicalItemId-DV56rO-3.js";import"./ErrorBarContext-BO0-BSQI.js";import"./GraphicalItemClipPath-Vt_UhRqU.js";import"./SetGraphicalItem-DG2lsiaO.js";import"./getRadiusAndStrokeWidthFromDot-Y85wGgAA.js";import"./ActiveShapeUtils-BwilYhsw.js";import"./CartesianAxis-Dipo9dl9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-48OXgiQB.js";import"./uniqBy-06vWrWfm.js";import"./iteratee-laBcaYlX.js";import"./Cross-DbxsLtT0.js";import"./Rectangle-DCKYc31L.js";import"./Sector-0MJbS1dO.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

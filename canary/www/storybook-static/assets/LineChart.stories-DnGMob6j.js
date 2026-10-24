import{r as i,R as e}from"./iframe-CQih25KR.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-C9I59gKk.js";import{R as C}from"./zIndexSlice-BBwd9R4A.js";import{L as s}from"./Line-DKHN4FGO.js";import{X as p}from"./XAxis-DatML6Vr.js";import{T as c}from"./Tooltip-B629u-do.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BCMHJsHG.js";import"./resolveDefaultProps-DZXiBHxq.js";import"./get-cF5BDHN6.js";import"./axisSelectors-gqm50JPH.js";import"./throttle-CYod_o09.js";import"./index-lk52KXx5.js";import"./index-DdtFl0i3.js";import"./isWellBehavedNumber-BZsUlmxg.js";import"./d3-scale-C8349dF6.js";import"./index-83zVEPqI.js";import"./index-BX29BXND.js";import"./renderedTicksSlice-TriIcOtn.js";import"./index-DY8NIj0D.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D5IyTQPM.js";import"./chartDataContext-SrRPyl9F.js";import"./CategoricalChart-dLpz1ZCk.js";import"./Layer-BzMCwaud.js";import"./Curve-BPpaKfS5.js";import"./types-NMZqXy0T.js";import"./step-BqUGYyr0.js";import"./path-DyVhHtw_.js";import"./activeStyles-BLa_G1fN.js";import"./Label-DtKjJWj0.js";import"./Text-ByeKnFJN.js";import"./pageBackground-B-dTuZL1.js";import"./useId-BUhtjdKT.js";import"./useBackwardsCompatibleTheme-Cv0bY4c1.js";import"./ZIndexLayer-C0V9Q93e.js";import"./dataEntryStyles-BMnqm0mo.js";import"./useAnimationId-BuSk-bLT.js";import"./ActivePoints-Bf_gQQVU.js";import"./Dot-ZqJ7ot6M.js";import"./RegisterGraphicalItemId-BKvpbBB2.js";import"./ErrorBarContext-QTm2eq8O.js";import"./SetGraphicalItem-51m-LnYN.js";import"./getRadiusAndStrokeWidthFromDot-F_yGfOhs.js";import"./ActiveShapeUtils-Bl37L_si.js";import"./useEffectiveDataKey-BJYzr5Gr.js";import"./CartesianAxis-B8Q7lXls.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-EGy64DcV.js";import"./uniqBy-DOqGPGpA.js";import"./iteratee-B3skCKTj.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CamwH1qB.js";import"./Rectangle-DwxPMwLi.js";import"./util-Dxo8gN5i.js";import"./Sector-BJfIo3UI.js";const Ke={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Oe=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

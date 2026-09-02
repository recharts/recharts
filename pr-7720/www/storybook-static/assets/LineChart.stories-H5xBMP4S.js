import{r as s,R as e}from"./iframe-BQrvPSLN.js";import{L as n}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-B8UiaPpG.js";import{R as C}from"./zIndexSlice-7Hw-ZWkF.js";import{L as m}from"./Line-DjugYbR2.js";import{X as p}from"./XAxis-COEcW9k3.js";import{T as c}from"./Tooltip-Bj971vpB.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bwj5H6_7.js";import"./resolveDefaultProps-Dldn7S-M.js";import"./get-C2VjdU0L.js";import"./axisSelectors-rztmSPpu.js";import"./throttle-0gn-kluv.js";import"./index-n8L9L6eU.js";import"./index-DCJ-lssY.js";import"./isWellBehavedNumber--jy1hcq-.js";import"./d3-scale-Dpwc0BRN.js";import"./index-C-4Z9rOq.js";import"./index-Cod02e9Y.js";import"./renderedTicksSlice-DgYqXOgC.js";import"./index-JVOuHVdP.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bonfnn_6.js";import"./chartDataContext-BgdaUcoV.js";import"./CategoricalChart-DzUyeNOX.js";import"./Layer-BL59xEeu.js";import"./Curve-BvFQjNVt.js";import"./types-DmUtaJkc.js";import"./step-Dz5dQj2m.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DoNW6X9C.js";import"./Label-fnZYxsAf.js";import"./Text-CV4rnU1k.js";import"./DOMUtils-DGTFhh_s.js";import"./useId-Cxn74IfF.js";import"./useBackwardsCompatibleTheme-DM-kCCC-.js";import"./ZIndexLayer-B-lyDO19.js";import"./useAnimationId-DGJmUGW3.js";import"./ActivePoints-DNIiWjQ1.js";import"./Dot-BNdpCbfX.js";import"./RegisterGraphicalItemId-D_J9lCCC.js";import"./ErrorBarContext-M_C8hAbg.js";import"./GraphicalItemClipPath-ZQcwoD7Q.js";import"./SetGraphicalItem-DNCLDvoD.js";import"./getRadiusAndStrokeWidthFromDot-Da7-LUzg.js";import"./ActiveShapeUtils-Ds3BnvmO.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-wwQP6TZJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-Bi53hePS.js";import"./uniqBy-CbDZKJB_.js";import"./iteratee-zdI_LkTN.js";import"./Cross-BpKvfUtK.js";import"./Rectangle-HVKv7_Bo.js";import"./util-Dxo8gN5i.js";import"./Sector-BE6y_5ku.js";const we={argTypes:n,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(m,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(n),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(m,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(m,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(n),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Ke=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Ke as __namedExportsOrder,we as default};

import{r as s,R as e}from"./iframe-CSFRbakT.js";import{L as n}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-C7YUAEdD.js";import{R as C}from"./zIndexSlice-DpZcKFY3.js";import{L as m}from"./Line-D5ifXaPa.js";import{X as p}from"./XAxis-qtAkwMmZ.js";import{T as c}from"./Tooltip-DQdZxL4G.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CTT8y5Ry.js";import"./index-Kfu3TRgb.js";import"./index-DiZSJisN.js";import"./index-LyfzYazm.js";import"./index-_5SE_e0D.js";import"./throttle-DU_ACcBv.js";import"./get-C2VjdU0L.js";import"./axisSelectors-KHPqbB-J.js";import"./resolveDefaultProps-C2JgeEZu.js";import"./isWellBehavedNumber-93OW3PM3.js";import"./d3-scale-DhuPkMBe.js";import"./renderedTicksSlice-BfSTwOrr.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BCRGB0c7.js";import"./chartDataContext-BSDgfmf3.js";import"./CategoricalChart-DTfC0HTb.js";import"./Layer-Cas4KfrT.js";import"./Curve-CfossU1f.js";import"./types-63Ql-Qpj.js";import"./step-CyAEPMCA.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-fBpE1aA1.js";import"./Label-wJcYTwit.js";import"./Text-D8YyLcux.js";import"./DOMUtils-DF5CrQ-h.js";import"./useId-BBLcWa_d.js";import"./useBackwardsCompatibleTheme-BSlqd8DY.js";import"./ZIndexLayer-CRsGh2jd.js";import"./useAnimationId-CTzy6jqJ.js";import"./ActivePoints-D10Gw0-N.js";import"./Dot-pcaRJ9oP.js";import"./RegisterGraphicalItemId-BifFS_04.js";import"./ErrorBarContext-B0XwT2-o.js";import"./GraphicalItemClipPath-BvYnrcJ_.js";import"./SetGraphicalItem-w8PwKgIn.js";import"./getRadiusAndStrokeWidthFromDot-Dzv_bsMb.js";import"./ActiveShapeUtils-r1PbrWOo.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-BE0DelqG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-DJQtsn9U.js";import"./uniqBy-Ccjwpzh7.js";import"./iteratee-NArAVAmk.js";import"./Cross-CceAOFwE.js";import"./Rectangle-DOmjHg1E.js";import"./util-Dxo8gN5i.js";import"./Sector-CiYrENtI.js";const Se={argTypes:n,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(m,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(n),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(m,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(m,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(n),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

import{r as s,R as e}from"./iframe-BhiOFyfH.js";import{L as n}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-BeD4BZfO.js";import{R as C}from"./zIndexSlice-WFdO_Wlf.js";import{L as m}from"./Line-UXLRfrJQ.js";import{X as p}from"./XAxis-D91QOOUm.js";import{T as c}from"./Tooltip-Cckhkqma.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B2d-0bYl.js";import"./index-BT9oMJbA.js";import"./index-DJy0Duu-.js";import"./index-BRJFlVc0.js";import"./index-DeYpMxlR.js";import"./throttle-BBaDx3dP.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Bl2dPHcW.js";import"./resolveDefaultProps-BHk6Yj6z.js";import"./isWellBehavedNumber-BwlogVL6.js";import"./d3-scale-C-h-rPXJ.js";import"./renderedTicksSlice-zx9Xm1Pt.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B6R4HcNL.js";import"./chartDataContext-BhguihgP.js";import"./CategoricalChart-DcSIPsvk.js";import"./Layer-Ba5yNHO4.js";import"./Curve-CpWAvzLi.js";import"./types-BWOiEP2_.js";import"./step-DMp5D_NX.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dz4w2Slg.js";import"./Label-CAt1bZso.js";import"./Text-BMsFzFUq.js";import"./DOMUtils-BcE_Ruj2.js";import"./useId-BRnf_4WU.js";import"./useBackwardsCompatibleTheme-DVBvH0yy.js";import"./ZIndexLayer-CI2RHWLO.js";import"./useAnimationId-DyRYr1Ls.js";import"./ActivePoints-CGIfG4Xx.js";import"./Dot-CQ3jSuei.js";import"./RegisterGraphicalItemId-fX9aZfoT.js";import"./ErrorBarContext-8r615JCx.js";import"./GraphicalItemClipPath-CDXt4g8R.js";import"./SetGraphicalItem-DxySj5XD.js";import"./getRadiusAndStrokeWidthFromDot-_1HcDU-Q.js";import"./ActiveShapeUtils-DWii8vVl.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-CQrYYA1t.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-BDZs2rv_.js";import"./uniqBy-P6yERp21.js";import"./iteratee-BsV9Fw2p.js";import"./Cross-CHgI0DDp.js";import"./Rectangle-D4NblHq1.js";import"./util-Dxo8gN5i.js";import"./Sector-Ck7cMPLl.js";const Se={argTypes:n,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(m,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(n),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(m,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(m,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(n),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

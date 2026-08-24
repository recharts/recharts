import{r as s,R as e}from"./iframe-vymQxHWj.js";import{L as n}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-CEQL60OL.js";import{R as C}from"./zIndexSlice-CKW_xCBG.js";import{L as m}from"./Line-Cne7Fv2j.js";import{X as p}from"./XAxis-Bzr2Ibny.js";import{T as c}from"./Tooltip-DEDk_-lP.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-98W6zG7g.js";import"./index-Cl4zISxW.js";import"./index-C2Yz5dWj.js";import"./index-DA8rq6pv.js";import"./index-BGTNdYjX.js";import"./throttle-BK01krp9.js";import"./get-C2VjdU0L.js";import"./axisSelectors-qkXPFIdN.js";import"./resolveDefaultProps-D1QpgZPc.js";import"./isWellBehavedNumber-CX2OxNKy.js";import"./d3-scale-shLsO6db.js";import"./renderedTicksSlice-_g-coWrV.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D1QWtDZ4.js";import"./chartDataContext-CLrXA2d3.js";import"./CategoricalChart-htsvTMax.js";import"./Layer-DHaSl27L.js";import"./Curve-BcJWtVmj.js";import"./types-ZBx8sWKw.js";import"./step-BtdsF4BX.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BAUw0A61.js";import"./Label-CMMqvv98.js";import"./Text-BroBeAan.js";import"./DOMUtils-BKNZKxmm.js";import"./useId-DUfTRFy5.js";import"./useBackwardsCompatibleTheme-DlCKuGJZ.js";import"./ZIndexLayer-ChwVVG6J.js";import"./useAnimationId-DSN2oeL8.js";import"./ActivePoints-C-mtjouo.js";import"./Dot-QKBcefll.js";import"./RegisterGraphicalItemId-DsxpdmKR.js";import"./ErrorBarContext-D9mVK9PP.js";import"./GraphicalItemClipPath-LHrRH_dp.js";import"./SetGraphicalItem-BeZQQame.js";import"./getRadiusAndStrokeWidthFromDot-ClysWG4b.js";import"./ActiveShapeUtils-Uk3GF-jB.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-CmNHn6lS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-CqDgkesb.js";import"./uniqBy-Cz9SOFAs.js";import"./iteratee-Dg79fSga.js";import"./Cross-DXCXTPs9.js";import"./Rectangle-5xjAPvdj.js";import"./util-Dxo8gN5i.js";import"./Sector-B_NnGxXE.js";const Se={argTypes:n,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(m,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(n),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(m,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(m,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(n),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

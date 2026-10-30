import{r as i,R as e}from"./iframe-C1szs8Ge.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-CRBtmobr.js";import{R as C}from"./zIndexSlice-2Z2wgmDW.js";import{L as s}from"./Line-BHGjXSGr.js";import{X as p}from"./XAxis-DAR-gQPA.js";import{T as c}from"./Tooltip-CuajHWD2.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-xd3kaPdN.js";import"./resolveDefaultProps-CIiYtXni.js";import"./get-cF5BDHN6.js";import"./axisSelectors-D9npcJPs.js";import"./throttle-BnhEbDBT.js";import"./index-Bs58vI0d.js";import"./index-DcPa8fOp.js";import"./polarAxisSelectors-Du9qp_Aq.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D4TUcbxA.js";import"./index-CRFlBobz.js";import"./index-D0v9EDwx.js";import"./renderedTicksSlice-CTsziWKi.js";import"./index-BmvynZon.js";import"./CartesianChart-CXVzGtkA.js";import"./ZIndexPortal-DqFnA3uG.js";import"./CategoricalChart-dJgQ9xv_.js";import"./Layer-KO-TauTm.js";import"./Curve-BGMmiUdq.js";import"./types-DbKLPbYB.js";import"./step-CEIdKdZW.js";import"./path-DyVhHtw_.js";import"./LabelList-iP8lFrAf.js";import"./Label-DKy-t54T.js";import"./Text-BAXgr8vS.js";import"./DOMUtils-DrwuOTMG.js";import"./ZIndexLayer-n44qhyKx.js";import"./ActivePoints-CPsO1qxs.js";import"./Dot-DMbI3mI2.js";import"./activeStyles-CqRrjByh.js";import"./useAnimationId-Cg9ej0wY.js";import"./dataEntryStyles-D1ZH1qoE.js";import"./Symbols-By-_RD8m.js";import"./symbol-D-xguMnA.js";import"./ErrorBarContext-C-G-Mak5.js";import"./SetGraphicalItem-DIZkXs21.js";import"./getRadiusAndStrokeWidthFromDot-DKxug9PK.js";import"./ActiveShapeUtils-Cmzt23TH.js";import"./useEffectiveDataKey-SSLwUhsN.js";import"./themeFill-BkM1x4hA.js";import"./CartesianAxis-8dKjDOC0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-B3huUP7p.js";import"./uniqBy-BgGgOORw.js";import"./iteratee-CroL2MN8.js";import"./isArguments-yB-y1yaH.js";import"./Cross-D0i44YDT.js";import"./Rectangle-Qa1VLo8n.js";import"./util-Dxo8gN5i.js";import"./Sector-4Lf6e-B4.js";const Oe={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},He=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};export{r as API,n as SynchronizedTooltip,He as __namedExportsOrder,Oe as default};

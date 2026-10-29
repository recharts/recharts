import{r as i,R as e}from"./iframe-EeI-1j8u.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-Dr9t-k7s.js";import{R as C}from"./zIndexSlice-DHZxeEos.js";import{L as s}from"./Line-DEXoNnz0.js";import{X as p}from"./XAxis-CIWygb1G.js";import{T as c}from"./Tooltip-Dn_vDD_U.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BS1aWGo0.js";import"./resolveDefaultProps-nYBnVSVd.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Cv1-8nVO.js";import"./throttle-CXPRMSpL.js";import"./index-pgwVXRJO.js";import"./index-jJDdBZp4.js";import"./polarAxisSelectors-D7djmlhq.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DCtxOwfO.js";import"./index-BylysGcb.js";import"./index-BCOZ7QjH.js";import"./renderedTicksSlice-Y-CkzfGU.js";import"./index-DKT02nAj.js";import"./CartesianChart-e1TnBbHn.js";import"./ZIndexPortal-pivMB2CQ.js";import"./CategoricalChart-BQ46uFlP.js";import"./Layer-U6GYHWx5.js";import"./Curve-CyFTZwtt.js";import"./types-DqUdmTjU.js";import"./step-DC-9QXp9.js";import"./path-DyVhHtw_.js";import"./LabelList-D0m07rKR.js";import"./Label-BhnhNpXu.js";import"./Text-BY4Mp6iu.js";import"./DOMUtils-CO7WypWi.js";import"./ZIndexLayer-D_EbKSUX.js";import"./ActivePoints-BbQX7U_s.js";import"./Dot-LqOCFWRI.js";import"./activeStyles-T-Ne1kjI.js";import"./useAnimationId-CIis84-o.js";import"./dataEntryStyles-RarJtqD3.js";import"./Symbols-CDnC4YnR.js";import"./symbol-DRSGvgE-.js";import"./ErrorBarContext-Cxsgmfrf.js";import"./SetGraphicalItem-DIh7Z4HQ.js";import"./getRadiusAndStrokeWidthFromDot-C5z_N8Pp.js";import"./ActiveShapeUtils-B2Xd3mgO.js";import"./useEffectiveDataKey-Ce4gQ9XU.js";import"./CartesianAxis-Qxk-B3SK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-BM2TfUnu.js";import"./uniqBy-v3RdXdow.js";import"./iteratee-BmmzoLEb.js";import"./isArguments-yB-y1yaH.js";import"./Cross-WnLTnECd.js";import"./Rectangle-CCoDLphy.js";import"./util-Dxo8gN5i.js";import"./Sector-CiNF6rG5.js";const Ke={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Oe=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

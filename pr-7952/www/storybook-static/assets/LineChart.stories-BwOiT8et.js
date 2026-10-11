import{r as i,R as e}from"./iframe-BR4M1uiR.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-DVZPxGCK.js";import{R as C}from"./zIndexSlice-HrFSVAcv.js";import{L as s}from"./Line-BPjJBSiN.js";import{X as p}from"./XAxis-CcBq3_nh.js";import{T as c}from"./Tooltip-fk4Y29bw.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B0bWwFQm.js";import"./resolveDefaultProps-BLjA4bYj.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BqweAZHb.js";import"./throttle-G6Y8pgni.js";import"./index-Ci_VIYcH.js";import"./index-BnaGZY2I.js";import"./isWellBehavedNumber-D_WQYNTo.js";import"./d3-scale-CeZrfwiY.js";import"./index-YkNArcGN.js";import"./index-D8NvIHNM.js";import"./renderedTicksSlice-BfPj2XQ-.js";import"./index-CncCwIwt.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-q49HIkvw.js";import"./chartDataContext-BuFcKplQ.js";import"./CategoricalChart-2FTjt8Lf.js";import"./Layer-DlfW1ESK.js";import"./Curve-D8aJ7Tuc.js";import"./types-B-qT5SDC.js";import"./step-CbSh2F2e.js";import"./path-DyVhHtw_.js";import"./activeStyles-WDF83Cdx.js";import"./Label-XYAyrwIP.js";import"./Text-VnSH714e.js";import"./pageBackground-DPb5heYZ.js";import"./useId-pURs8c9G.js";import"./useBackwardsCompatibleTheme-D05qWzDc.js";import"./ZIndexLayer-CLaDw56X.js";import"./useAnimationId-AG0wMyfL.js";import"./dataEntryStyles-DLaplEnq.js";import"./ActivePoints-BSY_3c_N.js";import"./Dot-BLsUlW8t.js";import"./ErrorBarContext-DuGO1Y_l.js";import"./GraphicalItemClipPath-yRc51fA7.js";import"./SetGraphicalItem-BfeYb81m.js";import"./getRadiusAndStrokeWidthFromDot-Cs2lmqDd.js";import"./ActiveShapeUtils-CPXOp-Yk.js";import"./useEffectiveDataKey-B_fgXjH_.js";import"./CartesianAxis-CHydPwh7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-BgqvZiar.js";import"./uniqBy-Duhs8M_o.js";import"./iteratee-DjlDP_tJ.js";import"./Cross-Dq_SuLms.js";import"./Rectangle-uO21666K.js";import"./util-Dxo8gN5i.js";import"./Sector-BI71AD0D.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};export{r as API,n as SynchronizedTooltip,Ke as __namedExportsOrder,we as default};

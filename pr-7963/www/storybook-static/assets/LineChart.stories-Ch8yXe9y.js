import{r as i,R as e}from"./iframe-Bd2Bk_ai.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-COJ0ozp_.js";import{R as C}from"./zIndexSlice-CvsBboU2.js";import{L as s}from"./Line-BYwtVnuU.js";import{X as p}from"./XAxis-CypmBaco.js";import{T as c}from"./Tooltip-DFK7qGgh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DzNno5mi.js";import"./resolveDefaultProps-BB0elGzE.js";import"./get-C2VjdU0L.js";import"./axisSelectors-hjszmlUK.js";import"./throttle-BgaPtkTt.js";import"./index-YOlWJ3UI.js";import"./index-BgWJcO-O.js";import"./isWellBehavedNumber-DBLq0YlU.js";import"./d3-scale-DCtwXSpz.js";import"./index-DJuU84IJ.js";import"./index-nQQMczPK.js";import"./renderedTicksSlice-Cpd-xLFY.js";import"./index-Qipw3yHd.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CrlTsjwB.js";import"./chartDataContext-BPm9-wzB.js";import"./CategoricalChart-CcrqLwDF.js";import"./Layer-Db-kRrip.js";import"./Curve-5l5JQbBY.js";import"./types-BTpVoC26.js";import"./step-BGDWO4Dz.js";import"./path-DyVhHtw_.js";import"./activeStyles-C6x8xDfA.js";import"./Label-O_u7VAtA.js";import"./Text-oE3Ppk29.js";import"./pageBackground-S_W44ttK.js";import"./useId-CHbendDP.js";import"./useBackwardsCompatibleTheme-C0u865U4.js";import"./ZIndexLayer-DQoX8EpG.js";import"./useAnimationId-Cm1DhMix.js";import"./dataEntryStyles-BtdfRJJQ.js";import"./ActivePoints-kKexF7Xi.js";import"./Dot-DaQEzLOP.js";import"./ErrorBarContext-RrbFFwNs.js";import"./GraphicalItemClipPath-Dc7-6XW3.js";import"./SetGraphicalItem-Br5gILYL.js";import"./getRadiusAndStrokeWidthFromDot-D0dtyr_V.js";import"./ActiveShapeUtils-Dy2jST-f.js";import"./useEffectiveDataKey-_q65TZZ4.js";import"./CartesianAxis-DlgdGNPk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-DD2zEOuZ.js";import"./uniqBy-DSxR1_ki.js";import"./iteratee-DmMpoBDe.js";import"./Cross-l8PQsr7L.js";import"./Rectangle-ChYeKnX_.js";import"./util-Dxo8gN5i.js";import"./Sector-C7HxJjMo.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

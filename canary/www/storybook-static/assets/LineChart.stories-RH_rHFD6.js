import{r as s,R as e}from"./iframe-DFAuwNet.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-DRGdb7oC.js";import{R as C}from"./zIndexSlice-BwFDZpKd.js";import{L as n}from"./Line-Ck4HwCGm.js";import{X as p}from"./XAxis-DCGzkxjE.js";import{T as c}from"./Tooltip-zZkLTzqk.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B5EEfMW7.js";import"./index-Bdvp9zfN.js";import"./index-CzPHYk5P.js";import"./index-D5vqZcHk.js";import"./index-XHGddEUW.js";import"./immer-D4TP_Tl0.js";import"./get-Bfs700CB.js";import"./renderedTicksSlice-C1GYWdqG.js";import"./axisSelectors-rO5_sQtu.js";import"./d3-scale-Bflz5-05.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-DvMn3fRK.js";import"./isWellBehavedNumber-DOBIUQY2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DsW2iWMz.js";import"./chartDataContext-qOKnmm5w.js";import"./CategoricalChart-F9q04IPB.js";import"./Layer-pSJwYJA9.js";import"./Curve-qtCfGxfc.js";import"./types-CKCIF696.js";import"./step-BT8dCn-b.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BG4KszHn.js";import"./Label-BiYGQ8wu.js";import"./Text-D4VTZiA_.js";import"./DOMUtils-Cjgkd6jo.js";import"./ZIndexLayer-CzNUPV7f.js";import"./useAnimationId-BPtcTRZO.js";import"./ActivePoints-BsPL6iaG.js";import"./Dot-B8AKLV5l.js";import"./RegisterGraphicalItemId-CzkMeR6l.js";import"./ErrorBarContext-BoGExbnB.js";import"./GraphicalItemClipPath-DXkB_bbX.js";import"./SetGraphicalItem-CYy4gzAa.js";import"./getRadiusAndStrokeWidthFromDot-rwyYVhSm.js";import"./ActiveShapeUtils-CrgbqME0.js";import"./CartesianAxis-DrCLR5OG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-Cr66zOZa.js";import"./uniqBy-BxbvDsAq.js";import"./iteratee-BYBBNzGi.js";import"./Cross-DEUDd6Yc.js";import"./Rectangle-VpINru7-.js";import"./Sector-6Z0dG1em.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

import{r as i,R as e}from"./iframe-Bvdgb1qV.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-CSWXZNT1.js";import{R as C}from"./zIndexSlice-B01j9Vcs.js";import{L as s}from"./Line-Bq9HsgXM.js";import{X as p}from"./XAxis-D59h15hK.js";import{T as c}from"./Tooltip-D7ufEnAI.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Xt6mrXGV.js";import"./resolveDefaultProps-Dw9_y5mH.js";import"./get-cF5BDHN6.js";import"./axisSelectors-B7JYqxaB.js";import"./throttle-BPyPQEAQ.js";import"./index-CvLCmGiJ.js";import"./index-Cpva_oKK.js";import"./polarAxisSelectors-DEav2p-j.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-AQ3fTkSg.js";import"./index-BnNH-Ow2.js";import"./index-ByMobiKc.js";import"./renderedTicksSlice-9ekrV8Q5.js";import"./index-BIMpYUxR.js";import"./CartesianChart-D526lA3e.js";import"./ZIndexPortal-dwQ5L04t.js";import"./CategoricalChart-CuxUrQWu.js";import"./Layer-C-2DDjxl.js";import"./Curve-DVUXJ3hw.js";import"./types-BLGnyPc9.js";import"./step-DfpUdPc6.js";import"./path-DyVhHtw_.js";import"./LabelList-BzPq7Pbp.js";import"./Label-DP6vSrfL.js";import"./Text-DPvkSF-G.js";import"./pageBackground-Cb0q0UoB.js";import"./ZIndexLayer-uaQDwXWb.js";import"./dataEntryStyles-BpvBRnn1.js";import"./ActivePoints-CspnecJX.js";import"./Dot-DtkvzlrW.js";import"./activeStyles-D6UDaEYG.js";import"./useAnimationId-t1eD8fzp.js";import"./Symbols-BbBHtmua.js";import"./symbol-Bt3qNqsz.js";import"./RegisterGraphicalItemId-Drj4gpzK.js";import"./ErrorBarContext-DdyA3erj.js";import"./SetGraphicalItem-CHhflLCy.js";import"./getRadiusAndStrokeWidthFromDot-DNhfP8M9.js";import"./ActiveShapeUtils-qHwMrvBD.js";import"./useEffectiveDataKey-W79tWrXs.js";import"./CartesianAxis-qmdlREsz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-D0AH9eMq.js";import"./uniqBy-AZ6L8AlC.js";import"./iteratee-BJJQ9tMD.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CSUJOjH7.js";import"./Rectangle-N8aUytSm.js";import"./util-Dxo8gN5i.js";import"./Sector-BbQhMLaT.js";const Oe={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},He=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

import{r as i,R as e}from"./iframe-rIGtWy7o.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-Bx9iwnP7.js";import{R as C}from"./zIndexSlice-eSFvIDPB.js";import{L as s}from"./Line-BfyEqFnX.js";import{X as p}from"./XAxis-DpQ4g3Lr.js";import{T as c}from"./Tooltip-DkrQRKNg.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CnGTSvJE.js";import"./resolveDefaultProps-CESzkdGA.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DWDjUcOc.js";import"./throttle-BAKkGKnI.js";import"./index-DfdBIdkk.js";import"./index-BYEDHt0V.js";import"./polarAxisSelectors-bEQ_xhZ6.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BuxsQdRE.js";import"./index-B3oaotmj.js";import"./index-9mMSGnJG.js";import"./renderedTicksSlice-D_5kFm74.js";import"./index-HOvW1MHI.js";import"./fillDefinitions-OByCib8k.js";import"./CartesianChart-CAAztSss.js";import"./chartDataContext-DkD_onqA.js";import"./CategoricalChart-CiwW1p8S.js";import"./getRadiusAndStrokeWidthFromDot-DW8ZW_Lt.js";import"./Layer-BDOLwd71.js";import"./Curve-DqTam_xv.js";import"./types-BNwRi5Vr.js";import"./step-CBJGjOOI.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BBWs-HQj.js";import"./Label-BEKXXJOd.js";import"./Text-CUOAySYE.js";import"./ZIndexLayer-BQOJSgP1.js";import"./ActivePoints-B88CEUU0.js";import"./Dot-hlrtitgM.js";import"./activeStyles-CzQ969KV.js";import"./useAnimationId-BWpujR0E.js";import"./Symbols-CZml1OUW.js";import"./symbol-D8O-t0Dg.js";import"./ErrorBarContext-B8qTxBlT.js";import"./SetGraphicalItem-iESSYU5M.js";import"./ActiveShapeUtils-CybnivgX.js";import"./useEffectiveDataKey-DGGEUFr6.js";import"./CartesianAxis-DicS6pKh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DvWu6ax_.js";import"./uniqBy-C8XTS8UB.js";import"./iteratee-ByPZHGAt.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DCLXQRie.js";import"./Rectangle-DFHnm19R.js";import"./util-Dxo8gN5i.js";import"./Sector-BF6ZW7n9.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

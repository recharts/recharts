import{r as i,R as e}from"./iframe--Qc961ov.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-BPdivCQs.js";import{R as C}from"./zIndexSlice-Rc2BOlPQ.js";import{L as s}from"./Line-BJRxGEJK.js";import{X as p}from"./XAxis-CYwUm2ws.js";import{T as c}from"./Tooltip-EzqjBmkr.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C5yfwU4S.js";import"./resolveDefaultProps-D0aZwB6X.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CnmzOTaD.js";import"./throttle-D5ruWPez.js";import"./index-BaNjZzFe.js";import"./index-sLpNG2DY.js";import"./isWellBehavedNumber-BbQJ1Ue6.js";import"./d3-scale-BiVvCoqI.js";import"./index-C334R2OZ.js";import"./index-gD-WMNxq.js";import"./renderedTicksSlice-iEsOV4gM.js";import"./index-CIuk1Fk6.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BPOxbtvv.js";import"./chartDataContext-B9pBQpH6.js";import"./CategoricalChart-BTLrwTlO.js";import"./Layer-CSo0ACXf.js";import"./Curve-lw10hhz6.js";import"./types-CdbE1zIR.js";import"./step-DEIP8fko.js";import"./path-DyVhHtw_.js";import"./activeStyles-CmGMz93r.js";import"./Label-BPAtAFkR.js";import"./Text-DukYE8yg.js";import"./pageBackground-DnfHP8JU.js";import"./useId-DBBGR5j5.js";import"./useBackwardsCompatibleTheme-BAsN2dru.js";import"./ZIndexLayer-CboR9GKx.js";import"./dataEntryStyles-D5gnKJwo.js";import"./useAnimationId-CtnGdaHg.js";import"./ActivePoints-DkjYVK_A.js";import"./Dot-DryseeAH.js";import"./RegisterGraphicalItemId-CC6U92H6.js";import"./ErrorBarContext-CJzEAfVg.js";import"./GraphicalItemClipPath-dlzptreQ.js";import"./SetGraphicalItem-CzqDdYjp.js";import"./getRadiusAndStrokeWidthFromDot-CMCgIGue.js";import"./ActiveShapeUtils-DRmxiGhG.js";import"./useEffectiveDataKey-B387RzKO.js";import"./CartesianAxis-BwXCcZP6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-wB-GlItD.js";import"./uniqBy-DboUDVRO.js";import"./iteratee-BVMr74LW.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DKUKET6m.js";import"./Rectangle-DPuH_shy.js";import"./util-Dxo8gN5i.js";import"./Sector-B65usGDT.js";const Oe={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},He=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

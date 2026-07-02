import{r as s,R as e}from"./iframe-GELhAUTo.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-BbsunwQV.js";import{R as C}from"./zIndexSlice-ClN2s-1U.js";import{L as n}from"./Line-5fxqjKcQ.js";import{X as p}from"./XAxis-Y85LtPOX.js";import{T as c}from"./Tooltip-D7C9XChe.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CSC6kLWa.js";import"./index-fkyqtveo.js";import"./index-De1BUZgG.js";import"./index-DTm2_Ebd.js";import"./index-Ch3aQyu8.js";import"./throttle-DU3kigO2.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-DtvoFkYT.js";import"./axisSelectors-DqMTsyvT.js";import"./resolveDefaultProps-i6Bf8Qe5.js";import"./isWellBehavedNumber-qNvGNJqB.js";import"./d3-scale-BXdsYgex.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CnHKmmwZ.js";import"./chartDataContext-C1NesgAa.js";import"./CategoricalChart-DWJWD5d1.js";import"./Layer-1dFGvAkG.js";import"./Curve-C2-sTxrm.js";import"./types-CDH6nNS8.js";import"./step-DYVQ7D-O.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D0mvcaGm.js";import"./Label-D2gt0uaB.js";import"./Text-COlbwtoq.js";import"./DOMUtils-vC9OxNpg.js";import"./ZIndexLayer-BJaQcl6Z.js";import"./useAnimationId-Cjs3Y5s0.js";import"./ActivePoints-D0W1le7m.js";import"./Dot-Dfp7LnYV.js";import"./RegisterGraphicalItemId-CBE0jEK0.js";import"./ErrorBarContext-Cc-Db4VE.js";import"./GraphicalItemClipPath-BR4J-JYN.js";import"./SetGraphicalItem-CbnVMng4.js";import"./getRadiusAndStrokeWidthFromDot-DdGOUs2v.js";import"./ActiveShapeUtils-GEyAcK7d.js";import"./CartesianAxis-C2iZYvRC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-CSI1lZ64.js";import"./uniqBy-UEtfjGe3.js";import"./iteratee-HaGkk_IB.js";import"./Cross-Crmvd5H-.js";import"./Rectangle-D1qGnE1A.js";import"./util-Dxo8gN5i.js";import"./Sector-BjEDjMKc.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

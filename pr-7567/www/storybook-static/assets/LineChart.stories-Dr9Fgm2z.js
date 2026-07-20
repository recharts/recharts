import{r as s,R as e}from"./iframe-C99kJ-sM.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-Dcih0dAO.js";import{R as C}from"./zIndexSlice-C3R-krej.js";import{L as n}from"./Line-Bs8-Fegi.js";import{X as p}from"./XAxis-DIG4p09Q.js";import{T as c}from"./Tooltip-BaPwyXfx.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-U1Sp_egH.js";import"./index-C5Vu0OFw.js";import"./index-D0yrKOFo.js";import"./index-B6TMzpAA.js";import"./index-CUfn358W.js";import"./throttle-TD-ujZZS.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-C63jCstw.js";import"./axisSelectors-D_vl6hBR.js";import"./resolveDefaultProps-Cc9w7OOG.js";import"./isWellBehavedNumber-DU5fy8xE.js";import"./d3-scale-BK39mUYh.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C_2fYW0K.js";import"./chartDataContext-Bt7guA5_.js";import"./CategoricalChart-Dzn25l1U.js";import"./Layer-DA9YNkXX.js";import"./Curve-DiBuQ3yP.js";import"./types-DQRiSjSa.js";import"./step-D8AQ14_c.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D-0ILzHR.js";import"./Label-B5axae2p.js";import"./Text-DJvXqMRS.js";import"./DOMUtils-DR1Kyd_s.js";import"./ZIndexLayer-Cja0J2zA.js";import"./useAnimationId-DvmTFhVR.js";import"./ActivePoints-BMi_QsBO.js";import"./Dot-BDIAoW-L.js";import"./RegisterGraphicalItemId-BCeI4v7T.js";import"./ErrorBarContext-CujqDj5S.js";import"./GraphicalItemClipPath-BvRhFcbX.js";import"./SetGraphicalItem-DGSCvNHc.js";import"./getRadiusAndStrokeWidthFromDot-CycZh5GD.js";import"./ActiveShapeUtils-BBZmkA4Q.js";import"./CartesianAxis-C7o0Dblf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./useElementOffset-DU4filMB.js";import"./uniqBy-B76aatsv.js";import"./iteratee-BC4NiJFi.js";import"./Cross-BWIUPOvs.js";import"./Rectangle-CL3tFVAP.js";import"./util-Dxo8gN5i.js";import"./Sector-CLa7LOxI.js";const Te={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Be=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Be as __namedExportsOrder,Te as default};

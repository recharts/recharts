import{r as i,R as e}from"./iframe-DDEEclxH.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-BD1AWgHX.js";import{R as C}from"./zIndexSlice-CummiUIE.js";import{L as s}from"./Line-CgJTWLaM.js";import{X as p}from"./XAxis-OiAt4OfM.js";import{T as c}from"./Tooltip-DqSOhkQM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B3G4Mqkl.js";import"./resolveDefaultProps-BzDlbQMA.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DiahpmD-.js";import"./throttle-OMOVa0qg.js";import"./index-BXn3iYjY.js";import"./index-DUYM5IBE.js";import"./isWellBehavedNumber-D3AVRour.js";import"./d3-scale-U2rNi4eb.js";import"./index-DuT7Rit8.js";import"./index-CkiAY9bZ.js";import"./renderedTicksSlice-BdHhja-C.js";import"./index-BjbpJMdG.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CBOTH61V.js";import"./chartDataContext-XrvVwuj4.js";import"./CategoricalChart-msaFLCNM.js";import"./Layer-DiIYn3al.js";import"./Curve-DmyaY7N7.js";import"./types-CMxl_r2z.js";import"./step-C_2d7_Dh.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-AtWd5M7o.js";import"./Label-BfUQEb6D.js";import"./Text-CkcSa5pV.js";import"./DOMUtils-3FjGni4U.js";import"./useId-C6c_N3kr.js";import"./useBackwardsCompatibleTheme-CoJLQA5O.js";import"./ZIndexLayer-BUGWfp6H.js";import"./useAnimationId-qBVm6Gg1.js";import"./ActivePoints-CkbG5RIV.js";import"./Dot-DxUofVpC.js";import"./RegisterGraphicalItemId-nSLabm2D.js";import"./ErrorBarContext-DNzyQz3v.js";import"./GraphicalItemClipPath-CmGXOSE1.js";import"./SetGraphicalItem-gofxKkAQ.js";import"./getRadiusAndStrokeWidthFromDot-B-fypNZ4.js";import"./ActiveShapeUtils-CjAGkH2d.js";import"./useGraphicalItemIdentity-Dou3-X4Z.js";import"./CartesianAxis-CdQspuXD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-CxBvXcML.js";import"./uniqBy-BK8FWQ7h.js";import"./iteratee-B5AA-IZ8.js";import"./Cross-O1rJ8l0f.js";import"./Rectangle-ConSHzfx.js";import"./util-Dxo8gN5i.js";import"./Sector-DAhH7WUd.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

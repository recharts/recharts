import{r as i,R as e}from"./iframe-C_daZv7l.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-C6tbcnFK.js";import{R as C}from"./zIndexSlice-Dlp28lA6.js";import{L as s}from"./Line-IPpA0euf.js";import{X as p}from"./XAxis-zsBA2PQk.js";import{T as c}from"./Tooltip-DfKGamje.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CgMr-Xnd.js";import"./resolveDefaultProps-CWP-gMuW.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BlfT440m.js";import"./throttle-BHZ2wlOs.js";import"./index-7cXIOsrg.js";import"./index-D1CrGIf7.js";import"./polarAxisSelectors-CT8xWjbN.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Dz0Pmj0c.js";import"./index-CJJC3II6.js";import"./index-DBxUtF6C.js";import"./renderedTicksSlice-CyloxQ1c.js";import"./index-CEW7yT3i.js";import"./fillDefinitions-BNbyE3VE.js";import"./CartesianChart-a1M-eJU5.js";import"./chartDataContext-D1D0-RnX.js";import"./CategoricalChart-D48joeLJ.js";import"./Layer-WPlXRukA.js";import"./Curve-DDXeNIWC.js";import"./types-BRKFz9xC.js";import"./step-CfMQYX2G.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BrtwCCRb.js";import"./Label-DbTfJXbl.js";import"./Text-DFRkhFZm.js";import"./ZIndexLayer-CwM562V-.js";import"./ActivePoints-Hq6VNZIp.js";import"./Dot-BjcrnH2C.js";import"./activeStyles-DqPxAQkX.js";import"./useAnimationId-BeVDdEFy.js";import"./Symbols-3hlYR6yc.js";import"./symbol-C8mAwliN.js";import"./ErrorBarContext-Cc5g1M1Q.js";import"./SetGraphicalItem-C7RTXSJB.js";import"./getRadiusAndStrokeWidthFromDot-DS_16ujn.js";import"./ActiveShapeUtils-DH0fW0Mt.js";import"./useEffectiveDataKey-CLct0de8.js";import"./CartesianAxis-CWZlckQG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Dy4wSkY8.js";import"./uniqBy-DXIPSdGO.js";import"./iteratee-Bz-Pka1B.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DXbdezvi.js";import"./Rectangle-BqgZTLn6.js";import"./util-Dxo8gN5i.js";import"./Sector-BHmivm3A.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

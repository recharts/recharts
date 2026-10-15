import{r as i,R as e}from"./iframe-mtYsn-79.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-D_bismg7.js";import{R as C}from"./zIndexSlice-495T_9tR.js";import{L as s}from"./Line-BRvqCftx.js";import{X as p}from"./XAxis-DraxbeeJ.js";import{T as c}from"./Tooltip-DN9ewhU1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Lhej2phZ.js";import"./resolveDefaultProps-Dv9djRbQ.js";import"./get-C2VjdU0L.js";import"./axisSelectors-tcQjfxXW.js";import"./throttle-BhAErOUJ.js";import"./index-D6LBQYE7.js";import"./index-DsrHO_6p.js";import"./isWellBehavedNumber-CUExMovG.js";import"./d3-scale-7ZjrAl0H.js";import"./index-NJ5U5ys4.js";import"./index-BrIo2_bc.js";import"./renderedTicksSlice-C9Id8AHg.js";import"./index-UWH5XZiD.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C2MjyFSz.js";import"./chartDataContext-BlAChyFk.js";import"./CategoricalChart-DBrto0w2.js";import"./Layer-K-lH1pk5.js";import"./Curve-BJLIKK7P.js";import"./types-Bj-sAee4.js";import"./step-CZN-eu_K.js";import"./path-DyVhHtw_.js";import"./activeStyles-BxgBaa2U.js";import"./Label-L2ne4D-Q.js";import"./Text-BJaxenL8.js";import"./pageBackground-CdPwgquz.js";import"./useId-DbxZMBee.js";import"./useBackwardsCompatibleTheme-C2I2obbb.js";import"./ZIndexLayer-C6VGe1nr.js";import"./useAnimationId-BOXwxaVr.js";import"./dataEntryStyles-CD4KrGW2.js";import"./ActivePoints-BdGZ5cYI.js";import"./Dot-YCXBT1pk.js";import"./ErrorBarContext-Ek123Dcx.js";import"./GraphicalItemClipPath-c13meIZR.js";import"./SetGraphicalItem-Cc0cHCgq.js";import"./getRadiusAndStrokeWidthFromDot-Fba4Z4SE.js";import"./ActiveShapeUtils-CXyzmERA.js";import"./useEffectiveDataKey-CmlhkQvR.js";import"./CartesianAxis-BWxlG7ih.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-B-V_Sy0W.js";import"./uniqBy-DeXUggee.js";import"./iteratee-CZHsmPrl.js";import"./Cross-DZQn7ql2.js";import"./Rectangle-BVuVZbYm.js";import"./util-Dxo8gN5i.js";import"./Sector-DoEGZdf8.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

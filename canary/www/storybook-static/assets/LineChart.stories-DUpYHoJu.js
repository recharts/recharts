import{r as i,R as e}from"./iframe-CZEQ_wjd.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-D8HS5kdE.js";import{R as C}from"./zIndexSlice-CGZbBTjh.js";import{L as s}from"./Line-BfeaFnBY.js";import{X as p}from"./XAxis-GN6jnA3k.js";import{T as c}from"./Tooltip-CcoS3c4T.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CLkKKSWb.js";import"./resolveDefaultProps-CHpCBz4P.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BfF4ImUe.js";import"./throttle-DA2J31XT.js";import"./index-BbxbGDW7.js";import"./index-CRdNX2-K.js";import"./isWellBehavedNumber-B8rPL1qd.js";import"./d3-scale-er3AEJAE.js";import"./index-B-hyiig3.js";import"./index-JtUUyrZR.js";import"./renderedTicksSlice-BMpJvFdR.js";import"./index-C8Xv27VY.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BSz7TA42.js";import"./chartDataContext-BAAQoJGX.js";import"./CategoricalChart-DuqmwY6B.js";import"./Layer-D6WM8pRX.js";import"./Curve-XL3ybND_.js";import"./types-CKK75Clx.js";import"./step-BKPm417p.js";import"./path-DyVhHtw_.js";import"./activeStyles-BfHlsJSZ.js";import"./Label-COoLstIf.js";import"./Text-Dsq3-wjY.js";import"./pageBackground-CKNOMxYJ.js";import"./useId-rjEqgZ2X.js";import"./useBackwardsCompatibleTheme-Bh5QeLej.js";import"./ZIndexLayer-Dn2bo3WS.js";import"./useAnimationId-Eb1qMFFs.js";import"./dataEntryStyles-y-eKYJRz.js";import"./ActivePoints-DAIZAef7.js";import"./Dot-D8BQdXw6.js";import"./ErrorBarContext-BhJCUijj.js";import"./GraphicalItemClipPath-iEKWMFl6.js";import"./SetGraphicalItem-DS-LfVWp.js";import"./getRadiusAndStrokeWidthFromDot-CEOY72lw.js";import"./ActiveShapeUtils-Dfohsprr.js";import"./useEffectiveDataKey-BUx5XxQj.js";import"./CartesianAxis-DTwSBZEB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Cbe50vsH.js";import"./uniqBy-CMc1aoPt.js";import"./iteratee-mBcul4dm.js";import"./isArguments-yB-y1yaH.js";import"./Cross-eg_rGi3i.js";import"./Rectangle-C6Hc5hiS.js";import"./util-Dxo8gN5i.js";import"./Sector-D5lUlDQq.js";const Ke={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Oe=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};export{r as API,n as SynchronizedTooltip,Oe as __namedExportsOrder,Ke as default};

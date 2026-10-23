import{r as i,R as e}from"./iframe-DWz-Q7D1.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-Dcmc61bT.js";import{R as C}from"./zIndexSlice-D4KjIdsO.js";import{L as s}from"./Line-DmDKrJpN.js";import{X as p}from"./XAxis-BZUBECrT.js";import{T as c}from"./Tooltip-Dgb3DMOC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DTtBamZ0.js";import"./resolveDefaultProps-CzYzgORH.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Ce2rWziX.js";import"./throttle-CiqOC1ip.js";import"./index-C1X2mD6F.js";import"./index-CkxejNVz.js";import"./isWellBehavedNumber-DQa0E9-N.js";import"./d3-scale-B1h-c6nn.js";import"./index-Dr0ysyHn.js";import"./index-DIeZp5vP.js";import"./renderedTicksSlice-D1gMAPFE.js";import"./index-DXyt1obU.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-cCLETRDS.js";import"./chartDataContext-BJRXZyCP.js";import"./CategoricalChart-C1Rl-Y0X.js";import"./Layer-0LCA68q2.js";import"./Curve-57G7mADL.js";import"./types-d8BMRC9H.js";import"./step-CnBlCK_d.js";import"./path-DyVhHtw_.js";import"./activeStyles-cBdGFM1d.js";import"./Label-DNBocu_e.js";import"./Text-Rsbaz2Nf.js";import"./pageBackground-Bn_EUSju.js";import"./useId-CKTYSt7x.js";import"./useBackwardsCompatibleTheme-40wyYpH8.js";import"./ZIndexLayer-Bg2Gmo9Q.js";import"./useAnimationId-wagxbO9A.js";import"./dataEntryStyles-B5o6jV-U.js";import"./ActivePoints-BA6UWnZF.js";import"./Dot-DC9IrQq5.js";import"./ErrorBarContext-C2fYo0Zq.js";import"./GraphicalItemClipPath-CSYE-jHD.js";import"./SetGraphicalItem-D_zovdlO.js";import"./getRadiusAndStrokeWidthFromDot-Dqmrd8D2.js";import"./ActiveShapeUtils-C6nNN6Qs.js";import"./useEffectiveDataKey-kfwO5Jnl.js";import"./CartesianAxis-k4k8wY80.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Cl4JXsdE.js";import"./uniqBy-CSEyWmCH.js";import"./iteratee-D2MvuXn3.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CrN7AVkN.js";import"./Rectangle-04QXIjXf.js";import"./util-Dxo8gN5i.js";import"./Sector-C8W6elIw.js";const Ke={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Oe=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

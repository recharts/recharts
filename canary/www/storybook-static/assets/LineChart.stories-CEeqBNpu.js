import{r as i,R as e}from"./iframe-Dkncjqe5.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-CIP8CLEW.js";import{R as C}from"./zIndexSlice-3Eut4nle.js";import{L as s}from"./Line-dCs9wtK9.js";import{X as p}from"./XAxis-BAQVI_cg.js";import{T as c}from"./Tooltip-C0BJ45cZ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BbHdyrKZ.js";import"./resolveDefaultProps-DKbDW2P0.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DzgXC3ir.js";import"./throttle-fiJaoKIv.js";import"./index-DuZYSu8x.js";import"./index-CEbzYCUB.js";import"./isWellBehavedNumber-h0zKWQQH.js";import"./d3-scale-D7_DItYV.js";import"./index-Bw7gNQT7.js";import"./index-BWQ516bg.js";import"./renderedTicksSlice-DBigkG9b.js";import"./index-DULW3GES.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-_Rd0DLP-.js";import"./chartDataContext-BPkdx2D0.js";import"./CategoricalChart-DpeOMck6.js";import"./Layer-CZ9ZIOVu.js";import"./Curve-CjcQUAYM.js";import"./types-BHEXbjwq.js";import"./step-CArLTb5W.js";import"./path-DyVhHtw_.js";import"./activeStyles-DQuNqkwN.js";import"./Label-V2ZN4uKZ.js";import"./Text-BwfQxnJz.js";import"./pageBackground-CmllYwCr.js";import"./useId-ZYm6mEVk.js";import"./useBackwardsCompatibleTheme-BCpg7K4A.js";import"./ZIndexLayer-DaEkt6aU.js";import"./useAnimationId-MEfDv_ZE.js";import"./dataEntryStyles-DXfoX1Tx.js";import"./ActivePoints-ClxMx5Mk.js";import"./Dot-sRIGaLzT.js";import"./ErrorBarContext-e-s-GcHB.js";import"./GraphicalItemClipPath-DPL4dOJ-.js";import"./SetGraphicalItem-Bg3q-OfM.js";import"./getRadiusAndStrokeWidthFromDot-eYGtCAeF.js";import"./ActiveShapeUtils-B1bflkee.js";import"./useEffectiveDataKey-CjhYhiH-.js";import"./CartesianAxis-Dwpurh4e.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-y8lH1pNC.js";import"./uniqBy-B0GiVIZ3.js";import"./iteratee-DxR0_ujM.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CPU9vQPK.js";import"./Rectangle-A_cS0CAA.js";import"./util-Dxo8gN5i.js";import"./Sector-DATmQyYx.js";const Ke={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Oe=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

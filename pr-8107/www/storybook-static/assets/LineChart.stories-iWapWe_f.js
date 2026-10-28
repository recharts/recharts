import{r as i,R as e}from"./iframe-CExY2eWA.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-BbfXuiF0.js";import{R as C}from"./zIndexSlice-C37XV2sv.js";import{L as s}from"./Line-D1ZVA3ri.js";import{X as p}from"./XAxis-CfGhwt3z.js";import{T as c}from"./Tooltip-eFT7inFD.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DLH4YKyL.js";import"./resolveDefaultProps-CjbXNHQ5.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DD16TRVI.js";import"./throttle-BBNIp7bK.js";import"./index-8pYktU8Y.js";import"./index-FNceUiie.js";import"./polarAxisSelectors-YwnVtORU.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-0yyW8T9p.js";import"./index-AsSutFXR.js";import"./index-CUE47Bel.js";import"./renderedTicksSlice-DrzyKYB4.js";import"./index-Da9Adtew.js";import"./CartesianChart-BC6n1rn7.js";import"./ZIndexPortal-noF9F7eD.js";import"./CategoricalChart-CTKTm7QW.js";import"./Layer-Bau4eIyO.js";import"./Curve-DQpSgZo6.js";import"./types-Dc-N9olf.js";import"./step-BYC0RXYs.js";import"./path-DyVhHtw_.js";import"./LabelList-jPGn2qdg.js";import"./Label-DKiyvKzI.js";import"./Text-B8G25q0u.js";import"./pageBackground-DZSWUMfw.js";import"./ZIndexLayer-DlXNWMXh.js";import"./ActivePoints-hvZNmfX7.js";import"./Dot-DFSECcE9.js";import"./activeStyles-DJMtR5DX.js";import"./useAnimationId-DqJ2hXPF.js";import"./dataEntryStyles-iq_Y384c.js";import"./Symbols-BL7s7DpT.js";import"./symbol-DETtOMtn.js";import"./ErrorBarContext-CwvWWbXd.js";import"./SetGraphicalItem-BdGwDqMG.js";import"./getRadiusAndStrokeWidthFromDot-D9OCaedM.js";import"./ActiveShapeUtils-C53NOjZd.js";import"./useEffectiveDataKey-CZSLIZ23.js";import"./CartesianAxis-BL500t0F.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-C39tezyP.js";import"./uniqBy-Crl5fHd8.js";import"./iteratee--CMPcs_W.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CO7Xs6dQ.js";import"./Rectangle-BbDfzF7k.js";import"./util-Dxo8gN5i.js";import"./Sector-BxZajP91.js";const Ke={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Oe=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

import{r as i,R as e}from"./iframe-DpFoyu2v.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-CLP_sqqe.js";import{R as C}from"./zIndexSlice-BR5-by35.js";import{L as s}from"./Line-DsODaGkU.js";import{X as p}from"./XAxis-B0PuBmnr.js";import{T as c}from"./Tooltip-ByKC-vUJ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BNB2siqp.js";import"./resolveDefaultProps-Bl7dCfEE.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DsRIuzGY.js";import"./throttle-CbL9mvVE.js";import"./index-CXkQwc1T.js";import"./index-Dvxsi2Qy.js";import"./polarAxisSelectors-CoSF9I4I.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DFMCrQku.js";import"./index-CQQQihly.js";import"./index-DPbLagXs.js";import"./renderedTicksSlice-DLxnQ8Ny.js";import"./index-J5LyVsrM.js";import"./CartesianChart-C9Oi4Bgl.js";import"./ZIndexPortal-j1WUiNyF.js";import"./CategoricalChart-CbXZ5UqK.js";import"./Layer-C27d_lJh.js";import"./Curve-CrBw6Qm3.js";import"./types-nITqZw6s.js";import"./step-DIzEC01T.js";import"./path-DyVhHtw_.js";import"./LabelList-BcqFX_Cs.js";import"./Label-RSQOEDTQ.js";import"./Text-B1i7DvDe.js";import"./DOMUtils-I7Jj66xj.js";import"./ZIndexLayer-Q15FdZk9.js";import"./ActivePoints--ch9wTnx.js";import"./Dot-BBDn528y.js";import"./activeStyles-Dlv-kHFt.js";import"./useAnimationId-DcTYtpTG.js";import"./dataEntryStyles-BSD8zeo1.js";import"./Symbols-BqVxLZyQ.js";import"./symbol-Bc1WE4jB.js";import"./ErrorBarContext-C0P4PP3P.js";import"./SetGraphicalItem-BiUFphqr.js";import"./getRadiusAndStrokeWidthFromDot-DS-6kW0Q.js";import"./ActiveShapeUtils-DOhyqEjv.js";import"./useEffectiveDataKey-D3EJWYit.js";import"./CartesianAxis-C3Cmf1pW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-wTrI9o3y.js";import"./uniqBy-Bawyhepk.js";import"./iteratee-BD3h7MYT.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BMOocMKo.js";import"./Rectangle-D1RSMQ2o.js";import"./util-Dxo8gN5i.js";import"./Sector-DyuVM7Tk.js";const Ke={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Oe=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

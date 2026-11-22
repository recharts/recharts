import{r as i,R as e}from"./iframe-D3OoUODQ.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-Blx2C6Rw.js";import{R as C}from"./zIndexSlice-COWEW-Xi.js";import{L as s}from"./Line-DTJc0zlp.js";import{X as p}from"./XAxis-DxYJ1EU_.js";import{T as c}from"./Tooltip-DbEsMo9d.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DuOKGUDD.js";import"./resolveDefaultProps-D7e-YcsR.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DItDxN6k.js";import"./throttle-xK3Qigov.js";import"./index-BvJXc9H1.js";import"./index-DNUqbDgJ.js";import"./polarAxisSelectors-BlC5408P.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Bhy6LUlh.js";import"./index-CwGsCBa_.js";import"./index-E-9zXcGM.js";import"./renderedTicksSlice-Bv3FRj9F.js";import"./index-C8PiA1g3.js";import"./fillDefinitions-C2yGMN51.js";import"./CartesianChart-C7rzbaUy.js";import"./chartDataContext-BbEB-BoJ.js";import"./CategoricalChart-CKoarJJf.js";import"./getRadiusAndStrokeWidthFromDot-C3VB5n7j.js";import"./Layer-CUNP0nq5.js";import"./Curve-eYin-GPV.js";import"./types-CZJIyhtF.js";import"./step-FwrJA5dq.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-k3Cv11yP.js";import"./Label-DLZY1r_b.js";import"./Text-B7Tip8P2.js";import"./ZIndexLayer-pJsGLsvY.js";import"./ActivePoints-BDuWcJUa.js";import"./Dot-DopO49Vm.js";import"./activeStyles-DXsSD8Lh.js";import"./useAnimationId-z8xHYNfC.js";import"./Symbols-BcqMzhTU.js";import"./symbol-CCC5v9lz.js";import"./ErrorBarContext-Cw_znsk2.js";import"./SetGraphicalItem-BlH5pIAO.js";import"./ActiveShapeUtils--1e6XE9v.js";import"./useEffectiveDataKey-BHKjwOuj.js";import"./CartesianAxis-CVUrBvYb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-C-GaNZer.js";import"./uniqBy-UVF7xo-s.js";import"./iteratee-VlIYTG9d.js";import"./isArguments-yB-y1yaH.js";import"./Cross-C2kdLByN.js";import"./Rectangle-Sm9oSXXR.js";import"./util-Dxo8gN5i.js";import"./Sector-CRAkgMpQ.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

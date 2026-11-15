import{r as i,R as e}from"./iframe-Zh2ccugb.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-Bp3ZB87s.js";import{R as C}from"./zIndexSlice-DEmBd4ZB.js";import{L as s}from"./Line-xJRbfbkE.js";import{X as p}from"./XAxis-Csr8aJtN.js";import{T as c}from"./Tooltip-C94K6jr0.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CwKOWqmW.js";import"./resolveDefaultProps-fH52x6Wq.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CeETa2Oh.js";import"./throttle-B3lkaQcW.js";import"./index-DCPtMhny.js";import"./index-Bpm_0b-N.js";import"./polarAxisSelectors-ODY0eR4B.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-oTva27Ef.js";import"./index-BTZK7nKb.js";import"./index-WmNaFkcT.js";import"./renderedTicksSlice-DqNUbck1.js";import"./index-CMNAmNto.js";import"./fillDefinitions-CSMYcBHa.js";import"./CartesianChart-nM5gdBcu.js";import"./chartDataContext-CFkN0KVz.js";import"./CategoricalChart-DWn3sGtD.js";import"./Layer-C95YSbsg.js";import"./Curve-CyvbP0E9.js";import"./types-aszg7ufr.js";import"./step-BGLmz3Kf.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BE_TnqZR.js";import"./Label-DiL3sO7Q.js";import"./Text-MWlHmKAn.js";import"./ZIndexLayer-Xr-T5Ltv.js";import"./ActivePoints-1_C8JWTD.js";import"./Dot-BIRUUIf4.js";import"./activeStyles-D6kWvGgQ.js";import"./useAnimationId-CwFbYXoE.js";import"./Symbols-S44HEmao.js";import"./symbol-UAwU-psM.js";import"./ErrorBarContext-f9PwKgv4.js";import"./SetGraphicalItem-Dg3wmm6w.js";import"./getRadiusAndStrokeWidthFromDot-B79813B8.js";import"./ActiveShapeUtils-wgF5Hj2i.js";import"./useEffectiveDataKey-Ctjc01_U.js";import"./CartesianAxis-CIOwjTNM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Csv0_1PL.js";import"./uniqBy-FqU-5Unm.js";import"./iteratee-DDOrFaHy.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BgsKT80c.js";import"./Rectangle-BZ898oCF.js";import"./util-Dxo8gN5i.js";import"./Sector-MNccaZ7d.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

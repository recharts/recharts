import{r as i,R as e}from"./iframe-Bm_JRRDc.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-ftNdhxtd.js";import{R as C}from"./zIndexSlice-CE1MC-Bj.js";import{L as s}from"./Line-Dlo0KXIB.js";import{X as p}from"./XAxis-CYGYoqLr.js";import{T as c}from"./Tooltip-1PXtah1l.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CWqhr_G8.js";import"./resolveDefaultProps-Cwcw9Llo.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CQbwMXjx.js";import"./throttle-Di0g5pz3.js";import"./index-2pvHcFpK.js";import"./index-DwUcBVgp.js";import"./polarAxisSelectors-CFmXVpQm.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-_mEsQ66i.js";import"./index-B22Nz6Ed.js";import"./index-C9h-Jb--.js";import"./renderedTicksSlice-DeG-maS7.js";import"./index-CuKK0pvL.js";import"./CartesianChart-BtCYpchS.js";import"./ZIndexPortal-Cd4FT9ez.js";import"./CategoricalChart-Ue3TZSpb.js";import"./Layer-C38IBOtq.js";import"./Curve-Co0XT7xq.js";import"./fillDefinitions-D55-ziDc.js";import"./pageBackground-BcaJILnW.js";import"./themeFill-DfZYoox_.js";import"./types-BgOFnMuj.js";import"./step-Og4N4nQm.js";import"./path-DyVhHtw_.js";import"./LabelList-CIhUYtSm.js";import"./Label-v2uuRqjZ.js";import"./Text-nM-LHLsO.js";import"./DOMUtils-C1tRULq9.js";import"./ZIndexLayer-DBCQDkbL.js";import"./ActivePoints-B-UlNM6M.js";import"./Dot-Cd58ma5-.js";import"./activeStyles-BuWIAazB.js";import"./useAnimationId-7tWnytho.js";import"./dataEntryStyles-p95uc1IW.js";import"./Symbols-CobU2W6x.js";import"./symbol-EG1r1dzp.js";import"./ErrorBarContext-Bvj-sJVI.js";import"./SetGraphicalItem-IhBPl0xA.js";import"./getRadiusAndStrokeWidthFromDot-Z8_eBFcz.js";import"./ActiveShapeUtils-DOiWWiaf.js";import"./useEffectiveDataKey-1gMAnkt8.js";import"./CartesianAxis-D65lIMFu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DZtVmn8K.js";import"./uniqBy-CNiTKE7V.js";import"./iteratee-DH1QSUwA.js";import"./isArguments-yB-y1yaH.js";import"./Cross-sceG4Hk0.js";import"./Rectangle-DVcWQa2n.js";import"./util-Dxo8gN5i.js";import"./Sector-6h8eCDfu.js";const xe={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Me=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};export{r as API,n as SynchronizedTooltip,Me as __namedExportsOrder,xe as default};

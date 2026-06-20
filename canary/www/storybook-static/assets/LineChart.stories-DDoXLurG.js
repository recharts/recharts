import{r as s,R as e}from"./iframe-DktoyP0I.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-D5GOtnZu.js";import{R as C}from"./zIndexSlice-BqxjHKrS.js";import{L as n}from"./Line-DuA8ymif.js";import{X as p}from"./XAxis-BxV59Hhm.js";import{T as c}from"./Tooltip-fiiEhz9A.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C48Z7D7H.js";import"./index-CjF-Q638.js";import"./index-B91yukul.js";import"./index-Be24bbvM.js";import"./index-BFyGHYnF.js";import"./immer-yOjEFYCA.js";import"./get-DZQ4X22M.js";import"./renderedTicksSlice-Cd_bo-5U.js";import"./axisSelectors-C830vntb.js";import"./d3-scale-BMKK7LPO.js";import"./resolveDefaultProps-Bs_-cxps.js";import"./isWellBehavedNumber-D7-lB0Sk.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-cbrKpDvd.js";import"./chartDataContext-BtRoA9Zg.js";import"./CategoricalChart-DGVvOUvV.js";import"./Layer-DxVIdqTA.js";import"./Curve-BuI6DO-B.js";import"./types-CkRwSSe-.js";import"./step-8xNYZUMK.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-cIeOyNA6.js";import"./Label-BR89T_1_.js";import"./Text-DAKApr79.js";import"./DOMUtils-JSCS2paE.js";import"./ZIndexLayer-CSsqT-BM.js";import"./useAnimationId-Dyo3RN72.js";import"./ActivePoints-DwkLjVpS.js";import"./Dot-C1QvqJ8t.js";import"./RegisterGraphicalItemId-B1XaVUU9.js";import"./ErrorBarContext-CKA9kOcR.js";import"./GraphicalItemClipPath-DYdMpFC-.js";import"./SetGraphicalItem-BCAQvLzI.js";import"./getRadiusAndStrokeWidthFromDot-ByATIymF.js";import"./ActiveShapeUtils-BN2Pn2NB.js";import"./CartesianAxis-DrMR96cw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-DtCbKcDO.js";import"./uniqBy-CohtIUwX.js";import"./iteratee-CM3ogl-V.js";import"./Cross-AUfS-kpA.js";import"./Rectangle-CpoNtx3K.js";import"./util-Dxo8gN5i.js";import"./Sector-Q-EB1QAE.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,v,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Te=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Te as __namedExportsOrder,Ee as default};

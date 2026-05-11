import{r as s,e}from"./iframe-bIRDwOrj.js";import{L as m}from"./LineChartArgs-_mND0tRp.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-D802Iisz.js";import{R as C}from"./arrayEqualityCheck-TXFMRjRi.js";import{L as n}from"./Line-B60oELve.js";import{R as A}from"./RechartsHookInspector-CVcWeYmF.js";import{X as p}from"./XAxis-R_euWI3w.js";import{T as c}from"./Tooltip-CxHNJRE4.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D2ef2x-I.js";import"./index-TSn5rXzG.js";import"./immer-BfeMUSMO.js";import"./hooks-BdMZPZGx.js";import"./axisSelectors-CoyWHGIo.js";import"./d3-scale-CFl6A6_I.js";import"./zIndexSlice-D22DBnXA.js";import"./renderedTicksSlice-DiK-9S0i.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-EqFxaaEr.js";import"./chartDataContext-O3jargTL.js";import"./CategoricalChart-DI9gh84Y.js";import"./resolveDefaultProps-hkUJr7lQ.js";import"./Layer-IjPfnpTW.js";import"./ReactUtils-CzayGhzm.js";import"./Label-C1RClCIo.js";import"./Text-DzsBbndD.js";import"./DOMUtils-MkU82dM6.js";import"./ZIndexLayer-D7UlnPMP.js";import"./ActivePoints-CJrfz0Fi.js";import"./Dot-BCbECuJO.js";import"./types-dvoy8M64.js";import"./RegisterGraphicalItemId-DCkpRkMi.js";import"./ErrorBarContext-rH_nwKrW.js";import"./GraphicalItemClipPath-CBXSjVJX.js";import"./SetGraphicalItem-B0eIE6zm.js";import"./useAnimationId-Co08wyJa.js";import"./getRadiusAndStrokeWidthFromDot-C0F5EKdh.js";import"./ActiveShapeUtils-wXVyp0gV.js";import"./isPlainObject-DIIEh3HT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CBjo9wrp.js";import"./Trapezoid-1FkDqVZ5.js";import"./Sector-D-NFzdmx.js";import"./Symbols-DOx_UbzB.js";import"./symbol-NHM4e63q.js";import"./step-DQ7wUDFq.js";import"./Curve-orFRmx5o.js";import"./index-B6Pu2s-H.js";import"./ChartSizeDimensions-CmmmbIVS.js";import"./OffsetShower-DVm6XnLi.js";import"./PlotAreaShower-8mw46bvb.js";import"./CartesianAxis-mK0sN7a0.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BV5HmMjB.js";import"./uniqBy-aS03rcBV.js";import"./iteratee-Dq5hiuyR.js";import"./Cross-CrNHeowF.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
          <RechartsHookInspector />
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Oe=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Oe as __namedExportsOrder,Ke as default};

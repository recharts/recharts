import{r as i,R as e}from"./iframe-DgKiVndY.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-brxuZr2w.js";import{R as C}from"./zIndexSlice-dNuJcHRn.js";import{L as s}from"./Line-BTleYBWw.js";import{X as p}from"./XAxis-BLbqPkVx.js";import{T as c}from"./Tooltip-B0uI2fv_.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CVLdrR-G.js";import"./resolveDefaultProps-D4xdWGM2.js";import"./get-C2VjdU0L.js";import"./axisSelectors-IaZq8uO9.js";import"./throttle-C4KEmVOQ.js";import"./index-ClqqO2lb.js";import"./index-DJwO8k8A.js";import"./isWellBehavedNumber-D3WetmgY.js";import"./d3-scale-DcAUA4PB.js";import"./index-DtVHhaCV.js";import"./index-DmBw5bKk.js";import"./renderedTicksSlice-RB0exVxa.js";import"./index-CkxJWCtX.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BjKzNNSZ.js";import"./chartDataContext-Dv6GfWKh.js";import"./CategoricalChart-tj-0AtFI.js";import"./Layer-CitR-d8V.js";import"./Curve-Pc89hUhq.js";import"./types-BGF6RwMG.js";import"./step-1uXQ1327.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-t-O5cYrN.js";import"./Label-Dw6GSad7.js";import"./Text-CbY3j4Ck.js";import"./DOMUtils-DDi-aYdE.js";import"./useId-DRmEtgtu.js";import"./useBackwardsCompatibleTheme-CVo9PiuG.js";import"./ZIndexLayer-CiPL_m_c.js";import"./useAnimationId-Df1EENv3.js";import"./ActivePoints-CK7oXB-L.js";import"./Dot-0PmoZJ73.js";import"./RegisterGraphicalItemId-D1zFL55b.js";import"./ErrorBarContext-D4mtJzrM.js";import"./GraphicalItemClipPath-CbvSbhMn.js";import"./SetGraphicalItem-BLJqw_fJ.js";import"./getRadiusAndStrokeWidthFromDot-CJC1hcgF.js";import"./ActiveShapeUtils-A4Sw_vLw.js";import"./useGraphicalItemIdentity-Mjj8dgtd.js";import"./CartesianAxis-O82DChWw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-D6g0REY2.js";import"./uniqBy-hF-kPyhu.js";import"./iteratee-CxgRG3tb.js";import"./Cross-C_QZfsze.js";import"./Rectangle-C7PgJRAr.js";import"./util-Dxo8gN5i.js";import"./Sector-DMov75Se.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

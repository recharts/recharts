import{r as s,R as e}from"./iframe-C0ZUsupJ.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-veCy0sHV.js";import{R as C}from"./zIndexSlice-OijFhdu6.js";import{L as n}from"./Line-GWKTyGlv.js";import{X as p}from"./XAxis-CEau4At0.js";import{T as c}from"./Tooltip-CllFbgj2.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BP4cUW8r.js";import"./index-DMeIlV1g.js";import"./index-TZ5Clshf.js";import"./index-CWmFnIlt.js";import"./index-qQ2Np5IV.js";import"./throttle-C0jUqI7U.js";import"./get-DKb0zYvY.js";import"./renderedTicksSlice-CdGxqG4t.js";import"./axisSelectors-DBehuelT.js";import"./d3-scale-Cab4s2n5.js";import"./resolveDefaultProps-CFzFI254.js";import"./isWellBehavedNumber-DY6SAaVJ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-SF4H61CS.js";import"./chartDataContext-DULpfCbg.js";import"./CategoricalChart-BnZfW2OJ.js";import"./Layer-BvM0W8cF.js";import"./Curve-Dx8uylpR.js";import"./types-BB9QSyE9.js";import"./step-Bvy6aUz4.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BucsPXo8.js";import"./Label-zyObFa2R.js";import"./Text-Rgvblv2w.js";import"./DOMUtils-C2N7ljjM.js";import"./ZIndexLayer-BTGgoWh-.js";import"./useAnimationId-gV_9QBVg.js";import"./ActivePoints-CcGnfgvg.js";import"./Dot-BLe5foEI.js";import"./RegisterGraphicalItemId-kZ3u-TBa.js";import"./ErrorBarContext-CryOhevP.js";import"./GraphicalItemClipPath-CYUXkmtT.js";import"./SetGraphicalItem-BrVQB63z.js";import"./getRadiusAndStrokeWidthFromDot-C4MEnK3i.js";import"./ActiveShapeUtils-qSpTYyL4.js";import"./CartesianAxis-CRBuloTO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-DXpEJJ9m.js";import"./uniqBy-CHbMoB0U.js";import"./iteratee-DUmd7r17.js";import"./Cross-3JVi-ZEh.js";import"./Rectangle-D83EpkfQ.js";import"./util-Dxo8gN5i.js";import"./Sector-Bn8GGJMt.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

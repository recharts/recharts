import{r as i,R as e}from"./iframe-Bah9cDPf.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-DunDWoJr.js";import{R as C}from"./zIndexSlice-D6NwopLq.js";import{L as s}from"./Line-CdLhYhot.js";import{X as p}from"./XAxis-CUlouZeJ.js";import{T as c}from"./Tooltip-DYnVHdZI.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CuqmEJPa.js";import"./resolveDefaultProps-zC5o00WN.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BJF83DO6.js";import"./throttle-BjlLZ4wO.js";import"./index-D6Fwvcda.js";import"./index-CvqzOiHn.js";import"./polarAxisSelectors-CEDelL9A.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BLITEdPK.js";import"./index-FRb1AgAe.js";import"./index-CadkBFdQ.js";import"./renderedTicksSlice-CiPoI8vI.js";import"./index-flr5alNa.js";import"./fillDefinitions-BbHKQE2Y.js";import"./CartesianChart-DT-YIr9t.js";import"./chartDataContext-9AmAFOH8.js";import"./CategoricalChart-DcONsU4c.js";import"./Layer-CD06LZri.js";import"./Curve-KDiJn0MP.js";import"./types-C6A66RfZ.js";import"./step-CoC1wfrs.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BkXi-SmE.js";import"./Label-BLtLxFh_.js";import"./Text-Ct-0y4jN.js";import"./ZIndexLayer-DdBSJIQM.js";import"./ActivePoints-CMlYxCeA.js";import"./Dot-OGnZYrwe.js";import"./activeStyles-C-zEEDQQ.js";import"./useAnimationId-DEYdhNFn.js";import"./Symbols-CAXKij6d.js";import"./symbol-BgjIZi1V.js";import"./ErrorBarContext-BtmuWUeb.js";import"./SetGraphicalItem-DSHrOFY_.js";import"./getRadiusAndStrokeWidthFromDot-DWUFIa-L.js";import"./ActiveShapeUtils-CHFZOTDo.js";import"./useEffectiveDataKey-cBqedM3V.js";import"./CartesianAxis-Bt_lCqiI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Bd4rfpxM.js";import"./uniqBy-xNCP_Qij.js";import"./iteratee-C8Fc8Asa.js";import"./isArguments-yB-y1yaH.js";import"./Cross-iaCl0PL2.js";import"./Rectangle-C-T60wMT.js";import"./util-Dxo8gN5i.js";import"./Sector-CkDX9Lcx.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

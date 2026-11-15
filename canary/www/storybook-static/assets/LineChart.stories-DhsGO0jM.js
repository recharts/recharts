import{r as i,R as e}from"./iframe-wopH9NdI.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-Zkv2jfdv.js";import{R as C}from"./zIndexSlice-xHMHa_PR.js";import{L as s}from"./Line-DN2Hlr79.js";import{X as p}from"./XAxis-YQFRVy93.js";import{T as c}from"./Tooltip-CmXnO450.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-GnJJ2XUP.js";import"./resolveDefaultProps-CuS_1aTJ.js";import"./get-cF5BDHN6.js";import"./axisSelectors-H_-dwi8o.js";import"./throttle--YLxHTYU.js";import"./index-DX2sAXBh.js";import"./index-ntp-0gr7.js";import"./polarAxisSelectors-DDYJm4ns.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BRxJIguS.js";import"./index-CHX_ECB7.js";import"./index-xHMOPb5i.js";import"./renderedTicksSlice-BRp5IgAn.js";import"./index-BMZVXAmF.js";import"./fillDefinitions-DrqDcIvz.js";import"./CartesianChart-CN7jOg4q.js";import"./chartDataContext-bye5A1ly.js";import"./CategoricalChart-C9YwakJO.js";import"./Layer-Dt0UmkGr.js";import"./Curve-Cm3MAuem.js";import"./types-CUlNVHV2.js";import"./step-BDdQgN00.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-B3xBZvqn.js";import"./Label-uu_QuzmT.js";import"./Text-CQcCEm7a.js";import"./ZIndexLayer-BgWxLO1_.js";import"./ActivePoints-D278KIFv.js";import"./Dot-BdzSE_Lm.js";import"./activeStyles-DEvOqenA.js";import"./useAnimationId-Dc36A72L.js";import"./Symbols-Bbx6wwO8.js";import"./symbol-BLs3oZkc.js";import"./ErrorBarContext-DV4gDnhM.js";import"./SetGraphicalItem-X1KxmELY.js";import"./getRadiusAndStrokeWidthFromDot-CJXPoZCW.js";import"./ActiveShapeUtils-DA6QXZNg.js";import"./useEffectiveDataKey-SyLvQhGM.js";import"./CartesianAxis-Bp916XbH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-D-hq6pQE.js";import"./uniqBy-BzWKwNSK.js";import"./iteratee-BU4RoL4-.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BroUofIZ.js";import"./Rectangle-CG1wwImr.js";import"./util-Dxo8gN5i.js";import"./Sector-BWFGzxn-.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

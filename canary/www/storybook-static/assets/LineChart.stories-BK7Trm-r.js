import{r as i,R as e}from"./iframe-DZbjLUQo.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-434l-fjy.js";import{R as C}from"./zIndexSlice-kNjtHJvr.js";import{L as s}from"./Line-IagRplkI.js";import{X as p}from"./XAxis-Cb9he-VA.js";import{T as c}from"./Tooltip-2fzgYbwj.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B7gpneaA.js";import"./resolveDefaultProps-7vFM5A8a.js";import"./get-cF5BDHN6.js";import"./axisSelectors-SzDg3mS0.js";import"./throttle-Cj_7MghT.js";import"./index--Cvbr4ei.js";import"./index-s3XojKdv.js";import"./isWellBehavedNumber-C3IgPBb_.js";import"./d3-scale-BGQa_b-A.js";import"./index-Fa7FBVrf.js";import"./index-DZ5C6rYB.js";import"./renderedTicksSlice-Ds3e7SoF.js";import"./index-DGK0wEWr.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-xRZlZbQd.js";import"./chartDataContext-DvL8FmIv.js";import"./CategoricalChart-D0VTS456.js";import"./Layer-Dh4rshAh.js";import"./Curve-C9le9A2W.js";import"./types-BIiFdC-Q.js";import"./step-BWJj5B7H.js";import"./path-DyVhHtw_.js";import"./activeStyles-jlHAdlvX.js";import"./Label-QWXq4PsH.js";import"./Text-DfE0Fd2l.js";import"./pageBackground-j9oVi7TB.js";import"./useId-uis-dzmY.js";import"./useBackwardsCompatibleTheme-BfjKogZ5.js";import"./ZIndexLayer-CKCEdo-g.js";import"./dataEntryStyles-OfgH0EAC.js";import"./useAnimationId-CK6aB1Dm.js";import"./ActivePoints-Dic5JSob.js";import"./Dot-DCKsVFDm.js";import"./RegisterGraphicalItemId-DrXewaeQ.js";import"./ErrorBarContext-BdWQYqFr.js";import"./GraphicalItemClipPath-BDvSZObJ.js";import"./SetGraphicalItem-BJ2EKqIC.js";import"./getRadiusAndStrokeWidthFromDot-ff8SiQS6.js";import"./ActiveShapeUtils-ncETWQyV.js";import"./useEffectiveDataKey-DRn6J3kp.js";import"./CartesianAxis-Bk45HDsq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-BqEhG3ye.js";import"./uniqBy-COgWTsrM.js";import"./iteratee-DFCPY5kb.js";import"./isArguments-yB-y1yaH.js";import"./Cross-_uoJFZOo.js";import"./Rectangle--8czTBQy.js";import"./util-Dxo8gN5i.js";import"./Sector-B41kLOtL.js";const Oe={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},He=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};export{r as API,n as SynchronizedTooltip,He as __namedExportsOrder,Oe as default};

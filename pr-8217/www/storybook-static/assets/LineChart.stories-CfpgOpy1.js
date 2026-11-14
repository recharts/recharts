import{r as i,R as e}from"./iframe-DB1dQNP8.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-DiEfMukB.js";import{R as C}from"./zIndexSlice-4nnTulLE.js";import{L as s}from"./Line-CHe47qf6.js";import{X as p}from"./XAxis-CMTVdgXW.js";import{T as c}from"./Tooltip-zM5lYojB.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BSa1uinT.js";import"./resolveDefaultProps-DmpFbxUX.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DYpJMmPb.js";import"./throttle-BFaVdKGa.js";import"./index-DDVC-U_9.js";import"./index-CCD7ra-J.js";import"./polarAxisSelectors-CrHx5sYT.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BO6-R8pB.js";import"./index-D-0kkOAc.js";import"./index-BBS885gB.js";import"./renderedTicksSlice-BBAl23GW.js";import"./index-D2MojgXH.js";import"./fillDefinitions-Cx6IehzG.js";import"./CartesianChart-DYBxU76V.js";import"./chartDataContext-B1lnzDGG.js";import"./CategoricalChart-DANutzlC.js";import"./Layer-Dv8-s5I6.js";import"./Curve-CckPV-p0.js";import"./types-DtWjgFmy.js";import"./step-Bnr8fo0T.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-Cv4r99AD.js";import"./Label-jFA6iMVu.js";import"./Text-C1medGIX.js";import"./ZIndexLayer-CWhMC-q_.js";import"./ActivePoints-CSEAww-_.js";import"./Dot-oe6mnN2l.js";import"./activeStyles-ByNnOm-i.js";import"./useAnimationId-CoLe5YqV.js";import"./Symbols-UlDypbOg.js";import"./symbol-CJrx0ghD.js";import"./ErrorBarContext-XalCVz8w.js";import"./SetGraphicalItem-BpLBLRYe.js";import"./getRadiusAndStrokeWidthFromDot-BxCLKzYD.js";import"./ActiveShapeUtils-Bsyq6LIm.js";import"./useEffectiveDataKey-H48CmBWB.js";import"./CartesianAxis-C8e-4BIf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-RlCX_v1O.js";import"./uniqBy-CbTOLIgk.js";import"./iteratee-BDHXi_B6.js";import"./isArguments-yB-y1yaH.js";import"./Cross-EnSMQpLy.js";import"./Rectangle-DIjJyhRJ.js";import"./util-Dxo8gN5i.js";import"./Sector-C_yr-by2.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

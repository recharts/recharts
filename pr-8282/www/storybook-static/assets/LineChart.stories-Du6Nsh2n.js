import{r as i,R as e}from"./iframe-B3TE-nU3.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-G7XB-YlL.js";import{R as C}from"./zIndexSlice-CTTS6cFj.js";import{L as s}from"./Line-C9ocvs2A.js";import{X as p}from"./XAxis-h5fh4YlR.js";import{T as c}from"./Tooltip-DvDkrF7O.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cj-eh_A9.js";import"./resolveDefaultProps-CZyWFquG.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DZCqrQSM.js";import"./throttle-CbHIruzi.js";import"./index-CwYGoluT.js";import"./index-BdYXEAEl.js";import"./polarAxisSelectors-Du86AxQZ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CXmLRtz9.js";import"./index-DGF3N8N0.js";import"./index-QNAAg88T.js";import"./renderedTicksSlice-CnKrAq7k.js";import"./index-j8tkVAM0.js";import"./fillDefinitions-ExsKJJdV.js";import"./CartesianChart-BlnVLBxP.js";import"./chartDataContext-CdnFs56-.js";import"./CategoricalChart-ZasnE1da.js";import"./getRadiusAndStrokeWidthFromDot-sWaZWzqd.js";import"./Layer-ChziGKVJ.js";import"./Curve-DakK0sdO.js";import"./types-DiSBkFzd.js";import"./step-DFLs3YCD.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-DR0RxE_5.js";import"./Label-CBnDrrJb.js";import"./Text-Dg5b12Q4.js";import"./ZIndexLayer-CcszVre3.js";import"./ActivePoints-Ds08HXXd.js";import"./Dot-AAIkJYcq.js";import"./activeStyles-P5uz91Wl.js";import"./useAnimationId-CxiMpo3b.js";import"./Symbols-BSwXR0zr.js";import"./symbol-DheZZ-vM.js";import"./ErrorBarContext-CAoDHE0Y.js";import"./SetGraphicalItem-H8Hr2AbP.js";import"./ActiveShapeUtils-Bxv-7xaq.js";import"./useEffectiveDataKey-DPfqIOjF.js";import"./CartesianAxis-98BHMJXj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-C_UZj4GX.js";import"./uniqBy-RWn0hC0g.js";import"./iteratee-BJFUBVEZ.js";import"./isArguments-yB-y1yaH.js";import"./Cross-LIPHrR4i.js";import"./Rectangle-JiOIyKLl.js";import"./util-Dxo8gN5i.js";import"./Sector-BQncNsel.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

import{r as i,R as e}from"./iframe-B91k2IcJ.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-6qK56lpw.js";import{R as C}from"./zIndexSlice-DPjnHRkm.js";import{L as s}from"./Line-B6diu4jO.js";import{X as p}from"./XAxis-Kxgks0Q-.js";import{T as c}from"./Tooltip-BVC7T8PC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BMFvDMkV.js";import"./resolveDefaultProps-D3docOoh.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CcYA9DrF.js";import"./throttle-BM2gK96G.js";import"./index-BbCiI-kx.js";import"./index-C5xeHmjj.js";import"./isWellBehavedNumber-TAwJ2tp1.js";import"./d3-scale-C4mP0o3d.js";import"./index-DlE4la4O.js";import"./index-DagyI5pu.js";import"./renderedTicksSlice-C1MLxybq.js";import"./index-D5HKNOOG.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B7_E8FCz.js";import"./chartDataContext-DjizePAa.js";import"./CategoricalChart-CUc2SRJ3.js";import"./Layer-mmJAUotg.js";import"./Curve-BM89L-Dm.js";import"./types-DevBWE8M.js";import"./step-BZw5QhTt.js";import"./path-DyVhHtw_.js";import"./activeStyles-U0RfMPfz.js";import"./Label-BsntnuTl.js";import"./Text-CiRRF6pE.js";import"./pageBackground-BjpY-vWv.js";import"./useId-DkzElDsG.js";import"./useBackwardsCompatibleTheme-CU4zQS7V.js";import"./ZIndexLayer-GgF7R--c.js";import"./useAnimationId-CRCBGZGy.js";import"./dataEntryStyles-yNODtHFO.js";import"./ActivePoints-BkA-bCTx.js";import"./Dot-D09SInS_.js";import"./ErrorBarContext-C_xJpakb.js";import"./GraphicalItemClipPath-C22168NG.js";import"./SetGraphicalItem-BDS20UwV.js";import"./getRadiusAndStrokeWidthFromDot-leGQ2dWC.js";import"./ActiveShapeUtils-djGvUgMr.js";import"./useGraphicalItemIdentity-WURDsQ2E.js";import"./CartesianAxis-D1fr-7So.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-DCd6qDJl.js";import"./uniqBy-BohUdtb5.js";import"./iteratee-iijREnPj.js";import"./Cross-BznYo7L0.js";import"./Rectangle-lVwAiMqa.js";import"./util-Dxo8gN5i.js";import"./Sector--Elbsx_T.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

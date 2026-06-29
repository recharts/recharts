import{r as s,R as e}from"./iframe-kr7fVjhm.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-DAaRd2c5.js";import{R as C}from"./zIndexSlice-BZPaZoVE.js";import{L as n}from"./Line-6cFMEXcZ.js";import{X as p}from"./XAxis-DuCvvYgu.js";import{T as c}from"./Tooltip-bxKE_UI1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BXLkHwYV.js";import"./index-Bi4GHbSg.js";import"./index-C_7j0jGJ.js";import"./index-D2MHq5Hk.js";import"./index-B4gF14t1.js";import"./throttle-D_awpPCx.js";import"./get-Clowvj21.js";import"./renderedTicksSlice-DSu7HAeh.js";import"./axisSelectors-C6aKDGBg.js";import"./d3-scale-D8KPLyuv.js";import"./resolveDefaultProps-B2SvaHgo.js";import"./isWellBehavedNumber-Dgwr4Y0K.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-xwjZDYjt.js";import"./chartDataContext-CX_0Naaw.js";import"./CategoricalChart-Bef2xtAx.js";import"./Layer-BpeNKyUn.js";import"./Curve-B0z7kkbw.js";import"./types-BF09pdOO.js";import"./step-DhEFjA1U.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DqhNqm_F.js";import"./Label-BzX4e21C.js";import"./Text-DjM5ugTe.js";import"./DOMUtils-C68MxIVY.js";import"./ZIndexLayer-DgDl0x_M.js";import"./useAnimationId-D5l55oDh.js";import"./ActivePoints-DGPf_3U2.js";import"./Dot-B_HKYeQ3.js";import"./RegisterGraphicalItemId-fKNs0JEp.js";import"./ErrorBarContext-CdB9Q1sE.js";import"./GraphicalItemClipPath-BFOwa2gv.js";import"./SetGraphicalItem-CV-IUFmw.js";import"./getRadiusAndStrokeWidthFromDot-ow-LYvhf.js";import"./ActiveShapeUtils-DcRBgo4o.js";import"./CartesianAxis-BtEPbzKb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-CARKZxzP.js";import"./uniqBy-DyaTa3fk.js";import"./iteratee-Bt60GMeU.js";import"./Cross-DndRbCrP.js";import"./Rectangle-DH_b4CsR.js";import"./util-Dxo8gN5i.js";import"./Sector-CM7mo4dd.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

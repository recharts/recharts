import{r as i,R as e}from"./iframe-DFG5UB_B.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-aN3Ktnvk.js";import{R as C}from"./zIndexSlice-BfnucyES.js";import{L as s}from"./Line-DbNr04kS.js";import{X as p}from"./XAxis-BGV0t6fj.js";import{T as c}from"./Tooltip-BX_C2Z3k.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B6oLib6N.js";import"./resolveDefaultProps-BatIk00Z.js";import"./get-C2VjdU0L.js";import"./axisSelectors-THUDlcaK.js";import"./throttle-8CKkbV4u.js";import"./index-CvfO2mCp.js";import"./index-DZ38vEa6.js";import"./isWellBehavedNumber-LLrASzdJ.js";import"./d3-scale-CVPVhJLx.js";import"./index-DPl35esh.js";import"./index-CFKpipae.js";import"./renderedTicksSlice-BAoPBO0b.js";import"./index-Bx8tOa6m.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CyJda43K.js";import"./chartDataContext-CMj3DEnW.js";import"./CategoricalChart-DoM1RUNO.js";import"./Layer-CTQ0XvXO.js";import"./Curve-D7P2ouTL.js";import"./types-DcAH2tiO.js";import"./step-Cpq8yTJq.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DaUsoCvA.js";import"./Label-BlYeas0v.js";import"./Text-CeNXkw59.js";import"./DOMUtils-BhwdevaN.js";import"./useId-s4zjQZaU.js";import"./useBackwardsCompatibleTheme-CQyv0Qul.js";import"./ZIndexLayer-BhF6Z1GT.js";import"./useAnimationId-DtAgjjoV.js";import"./ActivePoints-DcPgsYfH.js";import"./Dot-DokBxO_D.js";import"./RegisterGraphicalItemId-7hocZulP.js";import"./ErrorBarContext-SVRkM6ha.js";import"./GraphicalItemClipPath-Dn5pirN6.js";import"./SetGraphicalItem-B5Jco2Ub.js";import"./getRadiusAndStrokeWidthFromDot-BtIvPgrq.js";import"./ActiveShapeUtils-BBhCvNS_.js";import"./useGraphicalItemIdentity-D1Y6AxtT.js";import"./CartesianAxis-BNuKFBQN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-CESdl8j9.js";import"./uniqBy-BvJpBkfI.js";import"./iteratee-CT_szyVB.js";import"./Cross-B0BI2ykV.js";import"./Rectangle-DvysmnTh.js";import"./util-Dxo8gN5i.js";import"./Sector-Cn30566z.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

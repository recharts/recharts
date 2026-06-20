import{r as s,R as e}from"./iframe-BFQyqMbU.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-BNXGvlN4.js";import{R as C}from"./zIndexSlice-jJ_CaBDo.js";import{L as n}from"./Line-Chmj4NtI.js";import{X as p}from"./XAxis-Db3L_JCQ.js";import{T as c}from"./Tooltip-CXFEEuZc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BounuTKv.js";import"./index-CDKHoQ9z.js";import"./index-Gba51aKu.js";import"./index-lcxumIdx.js";import"./index-yqk7rkqd.js";import"./immer--b20-lFI.js";import"./get-p4pcudXd.js";import"./renderedTicksSlice-HnYJqdGr.js";import"./axisSelectors-CRFbB7ND.js";import"./d3-scale--vDRC-Zz.js";import"./resolveDefaultProps-B_ssPDKF.js";import"./isWellBehavedNumber-CXuZhh3h.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-qgf-TM4c.js";import"./chartDataContext-BM8qcz36.js";import"./CategoricalChart-FqadQC9J.js";import"./Layer-BpUtlx2X.js";import"./Curve-BGI4IKSF.js";import"./types-cy48Xvgh.js";import"./step-D-tHTqvJ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BA8IgjUl.js";import"./Label-BBfCiCQ6.js";import"./Text-BMugx81A.js";import"./DOMUtils-CzHwSZC9.js";import"./ZIndexLayer-DPawcbSR.js";import"./useAnimationId-D_DRQ5ok.js";import"./ActivePoints-CftO_jkK.js";import"./Dot-BN0Lszie.js";import"./RegisterGraphicalItemId-BEWz97Wy.js";import"./ErrorBarContext-CGoKUjs6.js";import"./GraphicalItemClipPath-B53LZcY2.js";import"./SetGraphicalItem-D0WJt6mF.js";import"./getRadiusAndStrokeWidthFromDot-C2SI6lR2.js";import"./ActiveShapeUtils-BDWRsG1S.js";import"./CartesianAxis-JBeJCkI-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-iy_d7mMM.js";import"./uniqBy-w3S1ilQh.js";import"./iteratee-cMb-fu6v.js";import"./Cross-DiEAKJxm.js";import"./Rectangle-CLh9RCDA.js";import"./util-Dxo8gN5i.js";import"./Sector-C2-9f_ud.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

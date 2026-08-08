import{r as s,R as e}from"./iframe-Bh1U-oMl.js";import{L as n}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-DN_h6664.js";import{R as C}from"./zIndexSlice-CbwDGfhV.js";import{L as m}from"./Line-xv0WhQR5.js";import{X as p}from"./XAxis-BDDyTBp4.js";import{T as c}from"./Tooltip-BTmBefKP.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BJiANDik.js";import"./index-BJEvKA6W.js";import"./index-Pl0BuMhm.js";import"./index-CIfG7xc6.js";import"./index-B7DuV58o.js";import"./throttle-DMII0ZAy.js";import"./get-C2VjdU0L.js";import"./axisSelectors-KgYrPzsA.js";import"./resolveDefaultProps-Cs5bXre5.js";import"./isWellBehavedNumber-Dyeu8bHm.js";import"./d3-scale-DvNPjBaU.js";import"./renderedTicksSlice-6pXaWoy-.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-YxKbksJG.js";import"./chartDataContext-B8xHbf95.js";import"./CategoricalChart-DcSXPqkv.js";import"./Layer-C3H-dOT5.js";import"./Curve-D4WkqVii.js";import"./types-w_TylJof.js";import"./step-CbC2c93d.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BvF3WRYv.js";import"./Label-CoZlS51A.js";import"./Text-bdpnJJaC.js";import"./DOMUtils-TtYkNMfa.js";import"./ZIndexLayer-C51_GrjW.js";import"./useAnimationId-0BmLZ6mF.js";import"./ActivePoints-B8uy1Jk5.js";import"./Dot-ClTJQBAf.js";import"./RegisterGraphicalItemId-UrCBGtwU.js";import"./ErrorBarContext-CYylskZD.js";import"./GraphicalItemClipPath-CR-53Dh0.js";import"./SetGraphicalItem-oPzo6Gr-.js";import"./getRadiusAndStrokeWidthFromDot-BYREjPLW.js";import"./ActiveShapeUtils-0P_4fb1E.js";import"./RechartsThemeContext-Bbvr3NVw.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-DON_KZPp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-CkLuT-ex.js";import"./uniqBy-DzWBXKbZ.js";import"./iteratee-CG3_OUhe.js";import"./Cross-I1vCGe6r.js";import"./Rectangle-B31sdsfS.js";import"./util-Dxo8gN5i.js";import"./Sector-BkVuw3Sh.js";const Ie={argTypes:n,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(m,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(n),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(m,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(m,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(n),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Se=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Se as __namedExportsOrder,Ie as default};

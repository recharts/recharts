import{r as i,R as e}from"./iframe-DVTI7asB.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-B7HL1Emj.js";import{R as C}from"./zIndexSlice-VrE65LwJ.js";import{L as s}from"./Line-DHWvjFGt.js";import{X as p}from"./XAxis-B8cGJGN2.js";import{T as c}from"./Tooltip-B8SR9jQq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-0XjKEbs7.js";import"./resolveDefaultProps-Brh9VJsQ.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BpjWm-Lu.js";import"./throttle-BWtzmmFP.js";import"./index-CBeOLa_K.js";import"./index-x2lkdleK.js";import"./isWellBehavedNumber-D3Ee2F4O.js";import"./d3-scale-CTgt3q-T.js";import"./index-Dxlfd81A.js";import"./index-BME0E5Ea.js";import"./renderedTicksSlice-Dm0DClKF.js";import"./index-B1fyioQZ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-TlzU5q-y.js";import"./chartDataContext-5tueJF_N.js";import"./CategoricalChart-DDdawTFM.js";import"./Layer-CKEADoVi.js";import"./Curve-ad1Bykff.js";import"./types-BbyfnRjt.js";import"./step-BVPKFfuD.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DqWEvMcn.js";import"./Label-C5sDum5_.js";import"./Text-XQRKlDnX.js";import"./DOMUtils--MlKRlg5.js";import"./useId-D-envRVe.js";import"./useBackwardsCompatibleTheme-CTYeO19p.js";import"./ZIndexLayer-MKguLFMj.js";import"./useAnimationId-CwgRschT.js";import"./ActivePoints-BzEepdn2.js";import"./Dot-C6F_-u4G.js";import"./RegisterGraphicalItemId-BCvN7nSY.js";import"./ErrorBarContext-BzIynu6X.js";import"./GraphicalItemClipPath-DpsQ0BRT.js";import"./SetGraphicalItem-Co1iXM8q.js";import"./getRadiusAndStrokeWidthFromDot-C-yk404_.js";import"./ActiveShapeUtils-DaFsN-Ec.js";import"./useGraphicalItemIdentity-Bs2hvtnA.js";import"./CartesianAxis-B7c0SFW_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-rrBJTLuZ.js";import"./uniqBy-BgA3F1Vh.js";import"./iteratee-BvFp8pOf.js";import"./Cross-BhJTE66h.js";import"./Rectangle-DR9uOGHN.js";import"./util-Dxo8gN5i.js";import"./Sector-C58FB1jO.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

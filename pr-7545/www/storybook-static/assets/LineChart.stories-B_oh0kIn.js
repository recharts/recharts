import{r as s,R as e}from"./iframe-BLb3YVtb.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-CmHIaU7F.js";import{R as C}from"./zIndexSlice-DJkgkDD9.js";import{L as n}from"./Line-CqqpJna2.js";import{X as p}from"./XAxis-DkAVE8hF.js";import{T as c}from"./Tooltip-CDZM8gtJ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CUaMC7NX.js";import"./index-DpQytYeA.js";import"./index-Cj1DGWT6.js";import"./index-DEpMuUHp.js";import"./index-wtrxX94s.js";import"./throttle-6auUp_qF.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-k5ys3P6y.js";import"./axisSelectors-DadMFlsr.js";import"./resolveDefaultProps-CnVWahPK.js";import"./isWellBehavedNumber-DlUvkjSQ.js";import"./d3-scale-Bikema70.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B4u-2HHw.js";import"./chartDataContext-BoMs8zEW.js";import"./CategoricalChart-Csrvckvr.js";import"./Layer-BK8zFmi3.js";import"./Curve-gD93iCPz.js";import"./types-45FMQ0ZC.js";import"./step-DW4vIB3R.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-VUSNP4y9.js";import"./Label-DW72PY7h.js";import"./Text-IRDE_cDN.js";import"./DOMUtils-_5JDSOjo.js";import"./ZIndexLayer-5e79PAf2.js";import"./useAnimationId-nzk_I_IH.js";import"./ActivePoints-Bm_TZ0P6.js";import"./Dot-D_39xHUo.js";import"./RegisterGraphicalItemId-Byl2Zyfr.js";import"./ErrorBarContext-CdfKpXhM.js";import"./GraphicalItemClipPath-gmGdN2WI.js";import"./SetGraphicalItem-BWF_fkaR.js";import"./getRadiusAndStrokeWidthFromDot-erroBPpZ.js";import"./ActiveShapeUtils-2WDiJcdZ.js";import"./CartesianAxis-BbjeI4ni.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-CQsk5lW6.js";import"./uniqBy-CVPPpRZP.js";import"./iteratee-BihC2xCb.js";import"./Cross-D1JRPJfe.js";import"./Rectangle-Deq9IpXZ.js";import"./util-Dxo8gN5i.js";import"./Sector-Cm35b88d.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

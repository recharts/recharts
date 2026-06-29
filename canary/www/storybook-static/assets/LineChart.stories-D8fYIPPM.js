import{r as s,R as e}from"./iframe-CtCQjsM6.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-DovjRP5V.js";import{R as C}from"./zIndexSlice-Dyeq-kTm.js";import{L as n}from"./Line-NxW5NSXA.js";import{X as p}from"./XAxis-CP213xw9.js";import{T as c}from"./Tooltip-D1_9Zq1u.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BsRB8VD4.js";import"./index-DMhTMs3j.js";import"./index-Dt6Mya9l.js";import"./index-bMzOaRnN.js";import"./index-Bc49u6WD.js";import"./immer-UADZssR3.js";import"./get-CXMuCFS1.js";import"./renderedTicksSlice-B82fdgBY.js";import"./axisSelectors-CBHiYL8s.js";import"./d3-scale-DSObG5R7.js";import"./resolveDefaultProps-y277M-17.js";import"./isWellBehavedNumber-DC3h_5lt.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DWPXJ9eR.js";import"./chartDataContext-BDCa3fVu.js";import"./CategoricalChart-D-CCIGyN.js";import"./Layer-ikVkc87V.js";import"./Curve-DqaQE-u7.js";import"./types-DG_xuUOr.js";import"./step-DspZ-7xm.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D-nX9UUI.js";import"./Label-DEKQSx_8.js";import"./Text-CVHSYFxZ.js";import"./DOMUtils-DONZhdVB.js";import"./ZIndexLayer-bXnB7Pr5.js";import"./useAnimationId-BByU_EIU.js";import"./ActivePoints-8IGesqBK.js";import"./Dot-BSPimWYR.js";import"./RegisterGraphicalItemId-CJP7sNi_.js";import"./ErrorBarContext-DA8eqje8.js";import"./GraphicalItemClipPath-BwbwGImN.js";import"./SetGraphicalItem-XJT0KcUL.js";import"./getRadiusAndStrokeWidthFromDot-CdTXnSwA.js";import"./ActiveShapeUtils-sx5PAodz.js";import"./CartesianAxis-BR8NQrXr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-F2Bq50mD.js";import"./uniqBy-BH1tP1ZF.js";import"./iteratee-DKULfjVT.js";import"./Cross-B5xJaEKb.js";import"./Rectangle-CYymeKVw.js";import"./util-Dxo8gN5i.js";import"./Sector-DRiDaauJ.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
